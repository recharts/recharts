import * as React from 'react';
import { ReactNode, useMemo, useState } from 'react';
import { clsx } from 'clsx';

import { Layer } from '../container/Layer';
import { Surface } from '../container/Surface';
import { ReportChartMargin, ReportChartSize, useChartHeight, useChartWidth } from '../context/chartLayoutContext';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { TooltipPortalContext } from '../context/tooltipPortalContext';
import { RechartsWrapper } from './RechartsWrapper';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import {
  TooltipIndex,
  TooltipPayloadConfiguration,
  setActiveClickItemIndex,
  setActiveMouseOverItemIndex,
  mouseLeaveItem,
} from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { ChartOptions, arrayTooltipSearcher } from '../state/optionsSlice';
import { useAppDispatch } from '../state/hooks';
import { ReportEventSettings } from '../state/ReportEventSettings';
import { getValueByDataKey } from '../util/ChartUtils';
import { COLOR_PANEL } from '../util/Constants';
import { Coordinate, DataConsumer, DataKey, EventThrottlingProps, Margin, Percent } from '../util/types';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { WithIdRequired } from '../util/useUniqueId';
import { initialEventSettingsState } from '../state/eventSettingsSlice';

const EPSILON = 1e-6;

const defaultCirclePackingMargin: Margin = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

const options: ChartOptions = {
  chartName: 'CirclePackingChart',
  defaultTooltipEventType: 'item',
  validateTooltipEventTypes: ['item'],
  tooltipPayloadSearcher: arrayTooltipSearcher,
  eventEmitter: undefined,
};

export interface CirclePackingDataType {
  children?: ReadonlyArray<CirclePackingDataType>;
  [key: string]: unknown;
}

export interface CirclePackingNode {
  payload: CirclePackingDataType;
  children: ReadonlyArray<CirclePackingNode> | null;
  depth: number;
  index: number;
  name: string;
  value: number;
  r: number;
  x: number;
  y: number;
  isLeaf: boolean;
  isEnclosingCircle?: boolean;
  tooltipIndex: TooltipIndex;
}

export type CirclePackingContentType = ReactNode | ((props: CirclePackingNode) => React.ReactElement);

export type CirclePackingLayoutType = 'hierarchy' | 'siblings';

export interface CirclePackingChartProps extends DataConsumer<CirclePackingDataType, unknown>, EventThrottlingProps {
  /**
   * The width of chart container.
   * Can be a number or a percent string like "100%".
   */
  width?: number | Percent;

  /**
   * The height of chart container.
   * Can be a number or a percent string like "100%".
   */
  height?: number | Percent;

  /**
   * If true, then it will listen to container size changes and adapt the SVG chart accordingly.
   * @default false
   */
  responsive?: boolean;

  /**
   * The source data. Each element should be an object.
   * Use nested `children` arrays to render hierarchical layout.
   */
  data?: ReadonlyArray<CirclePackingDataType>;
  className?: string;
  style?: React.CSSProperties;
  fill?: string;
  stroke?: string;
  colorPanel?: ReadonlyArray<string>;
  padding?: number;
  content?: CirclePackingContentType;

  /**
   * Decides how to extract value from each datum.
   * @default 'value'
   */
  dataKey?: DataKey<CirclePackingDataType, unknown>;

  /**
   * Decides how to extract label text for each datum.
   * @default 'name'
   */
  nameKey?: DataKey<CirclePackingDataType, unknown>;

  /**
   * Optional custom radius key for leaf nodes.
   * If omitted, leaf radius is derived from `dataKey` value.
   */
  radiusKey?: DataKey<CirclePackingDataType, unknown>;

  /**
   * If true, nodes are sorted descending by value before layout.
   * @default true
   */
  sort?: boolean;

  /**
   * Layout mode.
   * - 'hierarchy': keeps the nested hierarchy from `children`.
   * - 'siblings': treats input data as one sibling set.
   * @default 'hierarchy'
   */
  layout?: CirclePackingLayoutType;

  /**
   * If true in siblings layout, renders an additional enclosing circle.
   * @default false
   */
  includeEnclosingCircle?: boolean;

  /**
   * If true, the packed root node is rendered.
   * @default true
   */
  showRoot?: boolean;

  children?: React.ReactNode;

  /**
   * The unique id of this graphical item.
   */
  id?: string;

  onMouseEnter?: (node: CirclePackingNode, e: React.MouseEvent<SVGCircleElement>) => void;
  onMouseLeave?: (node: CirclePackingNode, e: React.MouseEvent<SVGCircleElement>) => void;
  onClick?: (node: CirclePackingNode, e: React.MouseEvent<SVGCircleElement>) => void;
}

interface InternalNode {
  payload: CirclePackingDataType;
  children: Array<InternalNode> | null;
  depth: number;
  index: number;
  name: string;
  value: number;
  r: number;
  x: number;
  y: number;
  isLeaf: boolean;
}

const toPositiveNumber = (value: unknown): number => {
  return typeof value === 'number' && Number.isFinite(value) && value > 0 ? value : 0;
};

const circleDistance = (a: { x: number; y: number }, b: { x: number; y: number }): number => {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
};

const circlesIntersect = (
  a: { x: number; y: number; r: number },
  b: { x: number; y: number; r: number },
  nodeGap: number,
): boolean => {
  return circleDistance(a, b) < a.r + b.r + nodeGap - EPSILON;
};

const getCircleIntersectionPoints = (
  a: { x: number; y: number; r: number },
  b: { x: number; y: number; r: number },
): ReadonlyArray<{ x: number; y: number }> => {
  const d = circleDistance(a, b);
  if (d < EPSILON) {
    return [];
  }

  const r0 = a.r;
  const r1 = b.r;

  if (d > r0 + r1 || d < Math.abs(r0 - r1)) {
    return [];
  }

  const aPart = (r0 * r0 - r1 * r1 + d * d) / (2 * d);
  const hSq = r0 * r0 - aPart * aPart;

  if (hSq < -EPSILON) {
    return [];
  }

  const h = Math.sqrt(Math.max(hSq, 0));
  const x2 = a.x + (aPart * (b.x - a.x)) / d;
  const y2 = a.y + (aPart * (b.y - a.y)) / d;

  const rx = (-(b.y - a.y) * h) / d;
  const ry = ((b.x - a.x) * h) / d;

  return [
    { x: x2 + rx, y: y2 + ry },
    { x: x2 - rx, y: y2 - ry },
  ];
};

const findNonOverlappingPosition = (
  existingNodes: Array<InternalNode>,
  nextRadius: number,
  nodeGap: number,
): { x: number; y: number } => {
  if (existingNodes.length === 0) {
    return { x: 0, y: 0 };
  }

  if (existingNodes.length === 1) {
    const first = existingNodes[0];
    if (first == null) {
      return { x: 0, y: 0 };
    }
    return { x: first.r + nextRadius + nodeGap, y: 0 };
  }

  const candidates: Array<{ x: number; y: number; score: number }> = [];

  for (let i = 0; i < existingNodes.length; i++) {
    for (let j = i + 1; j < existingNodes.length; j++) {
      const first = existingNodes[i];
      const second = existingNodes[j];
      if (first == null || second == null) {
        continue;
      }
      const inflatedFirst = {
        x: first.x,
        y: first.y,
        r: first.r + nextRadius + nodeGap,
      };
      const inflatedSecond = {
        x: second.x,
        y: second.y,
        r: second.r + nextRadius + nodeGap,
      };

      const points = getCircleIntersectionPoints(inflatedFirst, inflatedSecond);
      points.forEach(point => {
        const overlaps = existingNodes.some(node => circlesIntersect({ ...point, r: nextRadius }, node, nodeGap));
        if (!overlaps) {
          candidates.push({
            ...point,
            score: Math.sqrt(point.x * point.x + point.y * point.y),
          });
        }
      });
    }
  }

  if (candidates.length > 0) {
    const firstCandidate = candidates[0];
    if (firstCandidate == null) {
      return { x: 0, y: 0 };
    }
    const bestCandidate = candidates.reduce((best, candidate) => {
      if (candidate.score < best.score) {
        return candidate;
      }
      return best;
    }, firstCandidate);

    return { x: bestCandidate.x, y: bestCandidate.y };
  }

  // Fallback: spiral search if no tangent position is available.
  const maxExistingRadius = existingNodes.reduce((maxRadius, node) => {
    const outer = Math.sqrt(node.x * node.x + node.y * node.y) + node.r;
    return Math.max(maxRadius, outer);
  }, 0);

  const baseRadius = maxExistingRadius + nextRadius + nodeGap;
  for (let step = 0; step < 4096; step++) {
    const theta = step * 0.35;
    const radialOffset = step * 0.08;
    const candidate = {
      x: Math.cos(theta) * (baseRadius + radialOffset),
      y: Math.sin(theta) * (baseRadius + radialOffset),
      r: nextRadius,
    };

    const overlaps = existingNodes.some(node => circlesIntersect(candidate, node, nodeGap));
    if (!overlaps) {
      return { x: candidate.x, y: candidate.y };
    }
  }

  return { x: baseRadius, y: 0 };
};

const encloseCircles = (nodes: Array<InternalNode>): { x: number; y: number; r: number } => {
  if (nodes.length === 0) {
    return { x: 0, y: 0, r: 0 };
  }

  const first = nodes[0];
  if (first == null) {
    return { x: 0, y: 0, r: 0 };
  }
  let enclosing = {
    x: first.x,
    y: first.y,
    r: first.r,
  };

  nodes.forEach(node => {
    const d = circleDistance(enclosing, node);
    if (d + node.r <= enclosing.r + EPSILON) {
      return;
    }

    if (d < EPSILON) {
      enclosing = {
        ...enclosing,
        r: Math.max(enclosing.r, node.r),
      };
      return;
    }

    const newRadius = (enclosing.r + d + node.r) / 2;
    const shift = (newRadius - enclosing.r) / d;
    enclosing = {
      x: enclosing.x + (node.x - enclosing.x) * shift,
      y: enclosing.y + (node.y - enclosing.y) * shift,
      r: newRadius,
    };
  });

  return enclosing;
};

const packChildren = (children: Array<InternalNode>, nodeGap: number): { children: Array<InternalNode>; r: number } => {
  const positioned: Array<InternalNode> = [];

  children.forEach(child => {
    const position = findNonOverlappingPosition(positioned, child.r, nodeGap);
    positioned.push({
      ...child,
      x: position.x,
      y: position.y,
    });
  });

  const enclosing = encloseCircles(positioned);

  const centered = positioned.map(node => ({
    ...node,
    x: node.x - enclosing.x,
    y: node.y - enclosing.y,
  }));

  return {
    children: centered,
    r: enclosing.r,
  };
};

const buildHierarchy = ({
  data,
  dataKey,
  nameKey,
  radiusKey,
  sort,
  nodeGap,
  layout,
}: {
  data: ReadonlyArray<CirclePackingDataType>;
  dataKey: DataKey<CirclePackingDataType, unknown>;
  nameKey: DataKey<CirclePackingDataType, unknown>;
  radiusKey: DataKey<CirclePackingDataType, unknown> | undefined;
  sort: boolean;
  nodeGap: number;
  layout: CirclePackingLayoutType;
}): InternalNode => {
  const createNode = (datum: CirclePackingDataType, depth: number, index: number): InternalNode => {
    const rawChildren = Array.isArray(datum.children) ? datum.children : undefined;
    const children = rawChildren
      ? rawChildren.map((entry, childIndex) => createNode(entry, depth + 1, childIndex))
      : null;
    const isLeaf = !children || children.length === 0;

    const rawValue = getValueByDataKey(datum, dataKey, 0);
    const valueFromDataKey = toPositiveNumber(rawValue);

    const leafRadius = radiusKey == null ? 0 : toPositiveNumber(getValueByDataKey(datum, radiusKey, 0));
    const value = isLeaf
      ? valueFromDataKey
      : children.reduce((acc, child) => {
          return acc + child.value;
        }, 0);

    const radiusFromValue = value > 0 ? Math.sqrt(value) : 0;
    let r = 0;
    if (isLeaf) {
      r = leafRadius > 0 ? leafRadius : radiusFromValue;
    }

    return {
      payload: datum,
      children,
      depth,
      index,
      name: String(getValueByDataKey(datum, nameKey, '')),
      value,
      r,
      x: 0,
      y: 0,
      isLeaf,
    };
  };

  const rootChildren: Array<InternalNode> =
    layout === 'siblings'
      ? data.map((entry, index) => {
          const node = createNode(entry, 1, index);
          return {
            ...node,
            children: null,
            isLeaf: true,
            r: node.r > 0 ? node.r : Math.sqrt(node.value),
          };
        })
      : data.map((entry, index) => createNode(entry, 1, index));

  const maybeSortedChildren = sort
    ? [...rootChildren].sort((a, b) => {
        return b.value - a.value;
      })
    : rootChildren;

  const layoutNode = (node: InternalNode): InternalNode => {
    if (!node.children || node.children.length === 0) {
      return {
        ...node,
        r: Math.max(node.r, 0),
        x: 0,
        y: 0,
      };
    }

    const maybeSorted = sort ? [...node.children].sort((a, b) => b.value - a.value) : node.children;
    const laidOutChildren = maybeSorted.map(layoutNode);
    const packed = packChildren(laidOutChildren, nodeGap);

    return {
      ...node,
      children: packed.children,
      r: packed.r,
      x: 0,
      y: 0,
    };
  };

  const root: InternalNode = {
    payload: {},
    children: maybeSortedChildren,
    depth: 0,
    index: 0,
    name: 'root',
    value: maybeSortedChildren.reduce((sum, node) => sum + node.value, 0),
    r: 0,
    x: 0,
    y: 0,
    isLeaf: false,
  };

  const packedChildrenInput = root.children ?? [];
  if (packedChildrenInput.length === 0) {
    return root;
  }

  const packedRoot = packChildren(packedChildrenInput.map(layoutNode), nodeGap);
  return {
    ...root,
    children: packedRoot.children,
    r: packedRoot.r,
  };
};

const toPublicNode = (
  node: InternalNode,
  x: number,
  y: number,
  r: number,
  tooltipIndex: TooltipIndex,
): CirclePackingNode => {
  return {
    payload: node.payload,
    children: null,
    depth: node.depth,
    index: node.index,
    name: node.name,
    value: node.value,
    r,
    x,
    y,
    isLeaf: node.isLeaf,
    tooltipIndex,
  };
};

const flattenNodes = (
  node: InternalNode,
  parentX: number,
  parentY: number,
  includeRoot: boolean,
  out: Array<InternalNode>,
): void => {
  const absoluteX = parentX + node.x;
  const absoluteY = parentY + node.y;

  if ((includeRoot || node.depth > 0) && node.r > 0) {
    out.push({
      ...node,
      x: absoluteX,
      y: absoluteY,
    });
  }

  if (!node.children) {
    return;
  }

  node.children.forEach(child => {
    flattenNodes(child, absoluteX, absoluteY, includeRoot, out);
  });
};

export const defaultCirclePackingChartProps = {
  data: [],
  dataKey: 'value',
  nameKey: 'name',
  layout: 'hierarchy',
  sort: true,
  padding: 0,
  includeEnclosingCircle: false,
  showRoot: true,
  fill: '#8884d8',
  stroke: '#fff',
  colorPanel: COLOR_PANEL,
  responsive: false,
  ...initialEventSettingsState,
} as const satisfies Partial<CirclePackingChartProps>;

type InternalProps = WithIdRequired<
  RequiresDefaultProps<CirclePackingChartProps, typeof defaultCirclePackingChartProps>
>;

const SetCirclePackingTooltipEntrySettings = React.memo(
  ({
    dataKey,
    nameKey,
    fill,
    stroke,
    data,
    positions,
    id,
  }: Pick<InternalProps, 'dataKey' | 'nameKey' | 'fill' | 'stroke' | 'id'> & {
    data: ReadonlyArray<unknown>;
    positions: Map<string, Coordinate>;
  }) => {
    const tooltipEntrySettings: TooltipPayloadConfiguration = {
      dataDefinedOnItem: data,
      getPosition: index => positions.get(index),
      settings: {
        stroke,
        strokeWidth: undefined,
        fill,
        dataKey,
        name: nameKey == null && typeof dataKey !== 'function' ? dataKey : undefined,
        nameKey,
        hide: false,
        type: undefined,
        color: fill,
        unit: '',
        graphicalItemId: id,
      },
    };

    return <SetTooltipEntrySettings tooltipEntrySettings={tooltipEntrySettings} />;
  },
);

const renderNodeShape = ({
  node,
  content,
  fill,
  stroke,
  colorPanel,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  node: CirclePackingNode;
  content: CirclePackingContentType | undefined;
  fill: string;
  stroke: string;
  colorPanel: ReadonlyArray<string>;
  onClick?: (node: CirclePackingNode, e: React.MouseEvent<SVGCircleElement>) => void;
  onMouseEnter?: (node: CirclePackingNode, e: React.MouseEvent<SVGCircleElement>) => void;
  onMouseLeave?: (node: CirclePackingNode, e: React.MouseEvent<SVGCircleElement>) => void;
}): React.ReactNode => {
  if (typeof content === 'function') {
    return content(node);
  }

  if (content) {
    return content;
  }

  const dataFill = node.payload.fill;
  let computedFill: string;
  if (node.isEnclosingCircle) {
    computedFill = 'none';
  } else if (typeof dataFill === 'string') {
    computedFill = dataFill;
  } else {
    computedFill = colorPanel[node.depth % colorPanel.length] ?? fill;
  }

  const ariaLabel = node.name ? `${node.name}: ${node.value}` : `${node.value}`;

  return (
    <circle
      className="recharts-circle-packing-node"
      cx={node.x}
      cy={node.y}
      r={node.r}
      fill={computedFill}
      stroke={stroke}
      aria-label={ariaLabel}
      onClick={e => onClick?.(node, e)}
      onMouseEnter={e => onMouseEnter?.(node, e)}
      onMouseLeave={e => onMouseLeave?.(node, e)}
    />
  );
};

const CirclePackingChartImpl = ({
  className,
  style,
  data,
  dataKey,
  nameKey,
  radiusKey,
  sort,
  layout,
  padding,
  showRoot,
  includeEnclosingCircle,
  content,
  fill,
  stroke,
  colorPanel,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  id,
}: InternalProps) => {
  const dispatch = useAppDispatch();
  const width = useChartWidth();
  const height = useChartHeight();
  const numericWidth = typeof width === 'number' ? width : 0;
  const numericHeight = typeof height === 'number' ? height : 0;

  const root = useMemo(
    () =>
      buildHierarchy({
        data,
        dataKey,
        nameKey,
        radiusKey,
        sort,
        nodeGap: Math.max(padding, 0),
        layout,
      }),
    [data, dataKey, nameKey, radiusKey, sort, padding, layout],
  );

  const cx = numericWidth / 2;
  const cy = numericHeight / 2;

  const positionedNodes = useMemo(() => {
    if (!root.children || root.children.length === 0 || root.r <= 0 || numericWidth <= 0 || numericHeight <= 0) {
      return [];
    }

    const scale = Math.min(numericWidth, numericHeight) / (2 * root.r);

    const flattenedInternalNodes: Array<InternalNode> = [];
    flattenNodes(root, 0, 0, showRoot, flattenedInternalNodes);

    return flattenedInternalNodes.map((node, index) => {
      return toPublicNode(node, node.x * scale + cx, node.y * scale + cy, node.r * scale, `${index}`);
    });
  }, [root, showRoot, numericWidth, numericHeight, cx, cy]);

  const finalNodes: ReadonlyArray<CirclePackingNode> = useMemo(() => {
    if (!includeEnclosingCircle || root.r <= 0) {
      return positionedNodes;
    }

    return [
      {
        payload: {},
        children: null,
        depth: 0,
        index: -1,
        name: 'enclosing-circle',
        value: root.value,
        isLeaf: false,
        isEnclosingCircle: true,
        x: cx,
        y: cy,
        r: Math.min(numericWidth, numericHeight) / 2,
        tooltipIndex: `${positionedNodes.length}`,
      },
      ...positionedNodes,
    ];
  }, [includeEnclosingCircle, root.r, root.value, positionedNodes, cx, cy, numericWidth, numericHeight]);

  const tooltipNodes = useMemo(
    () => finalNodes.filter(node => !node.isEnclosingCircle && node.depth > 0),
    [finalNodes],
  );

  const tooltipData = useMemo(() => {
    const dataByTooltipIndex: Array<Record<string, unknown>> = [];
    tooltipNodes.forEach(node => {
      const numericTooltipIndex = Number.parseInt(String(node.tooltipIndex), 10);
      if (!Number.isFinite(numericTooltipIndex) || numericTooltipIndex < 0) {
        return;
      }
      dataByTooltipIndex[numericTooltipIndex] = {
        ...node.payload,
        name: node.name,
        value: node.value,
        r: node.r,
        x: node.x,
        y: node.y,
        depth: node.depth,
      };
    });
    return dataByTooltipIndex;
  }, [tooltipNodes]);

  const positions = useMemo(() => {
    return new Map<string, Coordinate>(tooltipNodes.map(node => [String(node.tooltipIndex), { x: node.x, y: node.y }]));
  }, [tooltipNodes]);

  const handleMouseEnter = (node: CirclePackingNode, e: React.MouseEvent<SVGCircleElement>) => {
    onMouseEnter?.(node, e);

    if (node.isEnclosingCircle || node.depth === 0 || node.tooltipIndex == null) {
      return;
    }

    dispatch(
      setActiveMouseOverItemIndex({
        activeIndex: node.tooltipIndex,
        activeDataKey: dataKey,
        activeCoordinate: positions.get(node.tooltipIndex) ?? { x: node.x, y: node.y },
        activeGraphicalItemId: id,
      }),
    );
  };

  const handleMouseLeave = (node: CirclePackingNode, e: React.MouseEvent<SVGCircleElement>) => {
    onMouseLeave?.(node, e);
    dispatch(mouseLeaveItem());
  };

  const handleClick = (node: CirclePackingNode, e: React.MouseEvent<SVGCircleElement>) => {
    onClick?.(node, e);

    if (node.isEnclosingCircle || node.depth === 0 || node.tooltipIndex == null) {
      return;
    }

    dispatch(
      setActiveClickItemIndex({
        activeIndex: node.tooltipIndex,
        activeDataKey: dataKey,
        activeCoordinate: positions.get(node.tooltipIndex) ?? { x: node.x, y: node.y },
        activeGraphicalItemId: id,
      }),
    );
  };

  if (numericWidth <= 0 || numericHeight <= 0) {
    return null;
  }

  return (
    <Surface
      width={numericWidth}
      height={numericHeight}
      className={clsx('recharts-circle-packing-chart', className)}
      style={style}
    >
      <Layer className="recharts-circle-packing-layer">
        {finalNodes.map(node => (
          <Layer
            className={`recharts-circle-packing-depth-${node.depth}`}
            key={`recharts-circle-packing-${node.depth}-${node.index}-${node.name}-${node.tooltipIndex}`}
          >
            {renderNodeShape({
              node,
              content,
              fill,
              stroke,
              colorPanel,
              onClick: handleClick,
              onMouseEnter: handleMouseEnter,
              onMouseLeave: handleMouseLeave,
            })}
          </Layer>
        ))}
      </Layer>
      <SetCirclePackingTooltipEntrySettings
        dataKey={dataKey}
        nameKey={nameKey}
        fill={fill}
        stroke={stroke}
        data={tooltipData}
        positions={positions}
        id={id}
      />
      {children}
    </Surface>
  );
};

/**
 * Circle packing chart for hierarchical and sibling circle layouts.
 *
 * @consumes ResponsiveContainerContext
 * @provides TooltipEntrySettings
 */
export const CirclePackingChart = (outsideProps: CirclePackingChartProps) => {
  const props: RequiresDefaultProps<CirclePackingChartProps, typeof defaultCirclePackingChartProps> =
    resolveDefaultProps(outsideProps, defaultCirclePackingChartProps);
  const { className, width, height, responsive, style, id: externalId, throttleDelay, throttledEvents } = props;
  const [tooltipPortal, setTooltipPortal] = useState<HTMLElement | null>(null);

  return (
    <RechartsStoreProvider preloadedState={{ options }} reduxStoreName={className ?? 'CirclePackingChart'}>
      <ReportChartSize width={width} height={height} />
      <ReportChartMargin margin={defaultCirclePackingMargin} />
      <ReportEventSettings throttleDelay={throttleDelay} throttledEvents={throttledEvents} />
      <TooltipPortalContext.Provider value={tooltipPortal}>
        <RechartsWrapper
          className={className}
          width={width}
          height={height}
          responsive={responsive}
          style={style}
          ref={(node: HTMLDivElement) => {
            if (tooltipPortal == null && node != null) {
              setTooltipPortal(node);
            }
          }}
          onMouseEnter={undefined}
          onMouseLeave={undefined}
          onClick={undefined}
          onMouseMove={undefined}
          onMouseDown={undefined}
          onMouseUp={undefined}
          onContextMenu={undefined}
          onDoubleClick={undefined}
          onTouchStart={undefined}
          onTouchMove={undefined}
          onTouchEnd={undefined}
        >
          <RegisterGraphicalItemId id={externalId} type="circle-packing-chart">
            {id => <CirclePackingChartImpl {...props} id={id} />}
          </RegisterGraphicalItemId>
        </RechartsWrapper>
      </TooltipPortalContext.Provider>
    </RechartsStoreProvider>
  );
};
