import * as React from 'react';
import { MouseEvent, ReactElement, Ref, SVGProps, useCallback, useMemo, useRef } from 'react';
import maxBy from 'es-toolkit/compat/maxBy';
import sumBy from 'es-toolkit/compat/sumBy';
import get from 'es-toolkit/compat/get';
import { Surface } from '../container/Surface';
import { Layer } from '../container/Layer';
import { Rectangle, Props as RectangleProps } from '../shape/Rectangle';
import { getValueByDataKey } from '../util/ChartUtils';
import { Margin, DataKey, SankeyLink, SankeyNode, Coordinate } from '../util/types';
import { ReportChartMargin, ReportChartSize, useChartHeight, useChartWidth } from '../context/chartLayoutContext';
import { TooltipPortalContext } from '../context/tooltipPortalContext';
import { RechartsWrapper } from './RechartsWrapper';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import { useAppDispatch } from '../state/hooks';
import {
  mouseLeaveItem,
  setActiveClickItemIndex,
  setActiveMouseOverItemIndex,
  TooltipIndex,
  TooltipPayloadConfiguration,
  TooltipPayloadSearcher,
} from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { ChartOptions } from '../state/optionsSlice';
import { SetComputedData } from '../context/chartDataContext';
import { svgPropertiesNoEvents, svgPropertiesNoEventsFromUnknown } from '../util/svgPropertiesNoEvents';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { isPositiveNumber } from '../util/isWellBehavedNumber';

const interpolationGenerator = (a: number, b: number) => {
  const ka = +a;
  const kb = b - ka;
  return (t: number) => ka + kb * t;
};

const centerY = (node: SankeyNode) => node.y + node.dy / 2;

const getValue = (entry: LinkDataItem | SankeyNode): number => (entry && entry.value) || 0;

const getSumOfIds = (links: ReadonlyArray<LinkDataItem>, ids: number[]): number =>
  ids.reduce((result, id) => result + getValue(links[id]), 0);

const getSumWithWeightedSource = (
  tree: ReadonlyArray<SankeyNode>,
  links: ReadonlyArray<LinkDataItemDy>,
  ids: number[],
) =>
  ids.reduce((result, id) => {
    const link = links[id];
    const sourceNode = tree[link.source];

    return result + centerY(sourceNode) * getValue(links[id]);
  }, 0);

const getSumWithWeightedTarget = (
  tree: ReadonlyArray<SankeyNode>,
  links: ReadonlyArray<LinkDataItemDy>,
  ids: ReadonlyArray<number>,
): number =>
  ids.reduce((result: number, id: number) => {
    const link = links[id];
    const targetNode = tree[link.target];

    return result + centerY(targetNode) * getValue(links[id]);
  }, 0);

const ascendingY = (a: { y: number }, b: { y: number }) => a.y - b.y;

const searchTargetsAndSources = (links: LinkDataItem[], id: number) => {
  const sourceNodes: number[] = [];
  const sourceLinks: number[] = [];
  const targetNodes: number[] = [];
  const targetLinks: number[] = [];

  for (let i = 0, len = links.length; i < len; i++) {
    const link = links[i];

    if (link.source === id) {
      targetNodes.push(link.target);
      targetLinks.push(i);
    }

    if (link.target === id) {
      sourceNodes.push(link.source);
      sourceLinks.push(i);
    }
  }

  return { sourceNodes, sourceLinks, targetLinks, targetNodes };
};

const updateDepthOfTargets = (tree: SankeyNode[], curNode: SankeyNode) => {
  const { targetNodes } = curNode;

  for (let i = 0, len = targetNodes.length; i < len; i++) {
    const target = tree[targetNodes[i]];

    if (target) {
      target.depth = Math.max(curNode.depth + 1, target.depth);

      updateDepthOfTargets(tree, target);
    }
  }
};

const getNodesTree = (
  { nodes, links }: SankeyData,
  width: number,
  nodeWidth: number,
): { tree: SankeyNode[]; maxDepth: number } => {
  const tree = nodes.map((entry: SankeyNode, index: number) => {
    const result = searchTargetsAndSources(links, index);

    return {
      ...entry,
      ...result,
      value: Math.max(getSumOfIds(links, result.sourceLinks), getSumOfIds(links, result.targetLinks)),
      depth: 0,
    };
  });

  for (let i = 0, len = tree.length; i < len; i++) {
    const node = tree[i];

    if (!node.sourceNodes.length) {
      updateDepthOfTargets(tree, node);
    }
  }
  const maxDepth = maxBy(tree, (entry: SankeyNode) => entry.depth)?.depth ?? 0;

  if (maxDepth >= 1) {
    const childWidth = (width - nodeWidth) / maxDepth;
    for (let i = 0, len = tree.length; i < len; i++) {
      const node = tree[i];

      if (!node.targetNodes.length) {
        node.depth = maxDepth;
      }
      node.x = node.depth * childWidth;
      node.dx = nodeWidth;
    }
  }

  return { tree, maxDepth };
};

const getDepthTree = (tree: SankeyNode[]): SankeyNode[][] => {
  const result: SankeyNode[][] = [];

  for (let i = 0, len = tree.length; i < len; i++) {
    const node = tree[i];

    if (!result[node.depth]) {
      result[node.depth] = [];
    }

    result[node.depth].push(node);
  }

  return result;
};

type LinkDataItemDy = LinkDataItem & { dy: number };

const updateYOfTree = (
  depthTree: SankeyNode[][],
  height: number,
  nodePadding: number,
  links: ReadonlyArray<LinkDataItem>,
): Array<LinkDataItemDy> => {
  const yRatio: number = Math.min(
    ...depthTree.map(nodes => (height - (nodes.length - 1) * nodePadding) / sumBy(nodes, getValue)),
  );

  for (let d = 0, maxDepth = depthTree.length; d < maxDepth; d++) {
    for (let i = 0, len = depthTree[d].length; i < len; i++) {
      const node = depthTree[d][i];

      node.y = i;
      node.dy = node.value * yRatio;
    }
  }

  return links.map((link: LinkDataItem): LinkDataItemDy => ({ ...link, dy: getValue(link) * yRatio }));
};

const resolveCollisions = (depthTree: SankeyNode[][], height: number, nodePadding: number, sort = true) => {
  for (let i = 0, len = depthTree.length; i < len; i++) {
    const nodes = depthTree[i];
    const n = nodes.length;

    // Sort by the value of y
    if (sort) {
      nodes.sort(ascendingY);
    }

    let y0 = 0;
    for (let j = 0; j < n; j++) {
      const node = nodes[j];
      const dy = y0 - node.y;

      if (dy > 0) {
        node.y += dy;
      }

      y0 = node.y + node.dy + nodePadding;
    }

    y0 = height + nodePadding;
    for (let j = n - 1; j >= 0; j--) {
      const node = nodes[j];
      const dy = node.y + node.dy + nodePadding - y0;

      if (dy > 0) {
        node.y -= dy;
        y0 = node.y;
      } else {
        break;
      }
    }
  }
};

const relaxLeftToRight = (
  tree: ReadonlyArray<SankeyNode>,
  depthTree: SankeyNode[][],
  links: ReadonlyArray<LinkDataItemDy>,
  alpha: number,
) => {
  for (let i = 0, maxDepth = depthTree.length; i < maxDepth; i++) {
    const nodes = depthTree[i];

    for (let j = 0, len = nodes.length; j < len; j++) {
      const node = nodes[j];

      if (node.sourceLinks.length) {
        const sourceSum = getSumOfIds(links, node.sourceLinks);
        const weightedSum = getSumWithWeightedSource(tree, links, node.sourceLinks);
        const y = weightedSum / sourceSum;

        node.y += (y - centerY(node)) * alpha;
      }
    }
  }
};

const relaxRightToLeft = (
  tree: ReadonlyArray<SankeyNode>,
  /*
   * depthTree array is modified by this method!
   */
  depthTree: SankeyNode[][],
  links: ReadonlyArray<LinkDataItemDy>,
  alpha: number,
) => {
  for (let i = depthTree.length - 1; i >= 0; i--) {
    const nodes = depthTree[i];

    for (let j = 0, len = nodes.length; j < len; j++) {
      const node = nodes[j];

      if (node.targetLinks.length) {
        const targetSum = getSumOfIds(links, node.targetLinks);
        const weightedSum = getSumWithWeightedTarget(tree, links, node.targetLinks);
        const y = weightedSum / targetSum;

        node.y += (y - centerY(node)) * alpha;
      }
    }
  }
};

const updateYOfLinks = (tree: SankeyNode[], links: LinkDataItemDy[]): void => {
  for (let i = 0, len = tree.length; i < len; i++) {
    const node = tree[i];
    let sy = 0;
    let ty = 0;

    node.targetLinks.sort((a, b) => tree[links[a].target].y - tree[links[b].target].y);
    node.sourceLinks.sort((a, b) => tree[links[a].source].y - tree[links[b].source].y);

    for (let j = 0, tLen = node.targetLinks.length; j < tLen; j++) {
      const link = links[node.targetLinks[j]];

      if (link) {
        // @ts-expect-error we should refactor this to immutable
        link.sy = sy;
        sy += link.dy;
      }
    }

    for (let j = 0, sLen = node.sourceLinks.length; j < sLen; j++) {
      const link = links[node.sourceLinks[j]];

      if (link) {
        // @ts-expect-error we should refactor this to immutable
        link.ty = ty;
        ty += link.dy;
      }
    }
  }
};

const computeData = ({
  data,
  width,
  height,
  iterations,
  nodeWidth,
  nodePadding,
  sort,
}: {
  data: SankeyData;
  width: number;
  height: number;
  iterations: number;
  nodeWidth: number;
  nodePadding: number;
  sort: boolean;
}): {
  nodes: ReadonlyArray<SankeyNode>;
  links: ReadonlyArray<SankeyLink>;
} => {
  const { links } = data;
  const { tree } = getNodesTree(data, width, nodeWidth);
  const depthTree = getDepthTree(tree);
  const linksWithDy: Array<LinkDataItemDy> = updateYOfTree(depthTree, height, nodePadding, links);

  resolveCollisions(depthTree, height, nodePadding, sort);

  let alpha = 1;
  for (let i = 1; i <= iterations; i++) {
    relaxRightToLeft(tree, depthTree, linksWithDy, (alpha *= 0.99));

    resolveCollisions(depthTree, height, nodePadding, sort);

    relaxLeftToRight(tree, depthTree, linksWithDy, alpha);

    resolveCollisions(depthTree, height, nodePadding, sort);
  }

  updateYOfLinks(tree, linksWithDy);
  // @ts-expect-error updateYOfLinks modifies the links array to add sy and ty in place
  const newLinks: ReadonlyArray<SankeyLink> = linksWithDy;

  return { nodes: tree, links: newLinks };
};

const getNodeCoordinateOfTooltip = (item: NodeProps) => {
  return { x: +item.x + +item.width / 2, y: +item.y + +item.height / 2 };
};

const getLinkCoordinateOfTooltip = (item: LinkProps): Coordinate | undefined => {
  return 'sourceX' in item
    ? {
        x: (item.sourceX + item.targetX) / 2,
        y: (item.sourceY + item.targetY) / 2,
      }
    : undefined;
};

type SankeyTooltipPayload = { payload: SankeyNode | SankeyLink; name: unknown; value: unknown };
const getPayloadOfTooltip = (
  item: { payload: SankeyNode | SankeyLink },
  type: SankeyElementType,
  nameKey: DataKey<any> | undefined,
): SankeyTooltipPayload | undefined => {
  const { payload } = item;
  if (type === 'node') {
    return {
      payload,
      name: getValueByDataKey(payload, nameKey, ''),
      value: getValueByDataKey(payload, 'value'),
    };
  }
  if ('source' in payload && payload.source && payload.target) {
    const sourceName = getValueByDataKey(payload.source, nameKey, '');
    const targetName = getValueByDataKey(payload.target, nameKey, '');

    return {
      payload,
      name: `${sourceName} - ${targetName}`,
      value: getValueByDataKey(payload, 'value'),
    };
  }

  return undefined;
};

export const sankeyPayloadSearcher: TooltipPayloadSearcher<any, any> = (
  _: SankeyData,
  activeIndex: TooltipIndex,
  computedData: { links: SankeyLink[]; nodes: SankeyNode[] },
  nameKey,
): SankeyTooltipPayload | undefined => {
  if (activeIndex == null || typeof activeIndex !== 'string') {
    return undefined;
  }
  const splitIndex = activeIndex.split('-');
  const [targetType, index] = splitIndex;
  const item = get(computedData, `${targetType}s[${index}]`);
  if (item) {
    const payload = getPayloadOfTooltip(item, targetType as SankeyElementType, nameKey);
    return payload;
  }
  return undefined;
};

const options: ChartOptions = {
  chartName: 'Sankey',
  defaultTooltipEventType: 'item',
  validateTooltipEventTypes: ['item'],
  tooltipPayloadSearcher: sankeyPayloadSearcher,
  eventEmitter: undefined,
};

function getTooltipEntrySettings(props: Props): TooltipPayloadConfiguration {
  const { dataKey, nameKey, stroke, strokeWidth, fill, name, data } = props;
  return {
    dataDefinedOnItem: data,
    positions: undefined,
    settings: {
      stroke,
      strokeWidth,
      fill,
      dataKey,
      name,
      nameKey,
      color: fill,
      unit: '', // Sankey does not have unit, why?
    },
  };
}

interface LinkDataItem {
  source: number;
  target: number;
  value: number;
}

export interface NodeProps extends Omit<SVGProps<SVGRectElement>, 'height' | 'width'> {
  height: number;
  width: number;
  payload: SankeyNode;
  index: number;
  x: number;
  y: number;
}

export interface LinkProps extends SVGProps<SVGPathElement> {
  sourceX: number;
  targetX: number;
  sourceY: number;
  targetY: number;
  sourceControlX: number;
  targetControlX: number;
  sourceRelativeY: number;
  targetRelativeY: number;
  linkWidth: number;
  index: number;
  // payload is SankeyLink except source and target are now Node objects instead of numbers
  payload: Omit<SankeyLink, 'source' | 'target'> & { source: SankeyNode; target: SankeyNode };
}

export interface SankeyData {
  nodes: any[];
  links: LinkDataItem[];
}

// TODO: improve types - NodeOptions uses SankeyNode, LinkOptions uses LinkProps. Standardize.
type SankeyNodeOptions =
  | ReactElement<SVGProps<SVGRectElement>>
  | ((props: NodeProps) => ReactElement<SVGProps<SVGRectElement>>)
  | RectangleProps;

type SankeyLinkOptions =
  | ReactElement<SVGProps<SVGPathElement>>
  | ((props: LinkProps) => ReactElement<SVGProps<SVGPathElement>>)
  | SVGProps<SVGPathElement>;

interface SankeyProps {
  nameKey?: DataKey<any>;
  dataKey?: DataKey<any>;
  width?: number;
  height?: number;
  data: SankeyData;
  nodePadding?: number;
  nodeWidth?: number;
  linkCurvature?: number;
  iterations?: number;
  // TODO object func
  node?: SankeyNodeOptions;
  link?: SankeyLinkOptions;
  style?: React.CSSProperties;
  className?: string;
  children?: any;
  margin?: Partial<Margin>;
  onClick?: (item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent) => void;
  onMouseEnter?: (item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent) => void;
  onMouseLeave?: (item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent) => void;
  sort?: boolean;
}

type Props = SVGProps<SVGSVGElement> & SankeyProps;

type SankeyElementType = 'node' | 'link';

// Why is margin not a Sankey prop? No clue. Probably it should be
const defaultSankeyMargin: Margin = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

function renderLinkItem(option: SankeyLinkOptions | undefined, props: LinkProps) {
  if (React.isValidElement(option)) {
    return React.cloneElement(option, props);
  }
  if (typeof option === 'function') {
    return option(props);
  }

  const { sourceX, sourceY, sourceControlX, targetX, targetY, targetControlX, linkWidth, ...others } = props;

  return (
    <path
      className="recharts-sankey-link"
      d={`
          M${sourceX},${sourceY}
          C${sourceControlX},${sourceY} ${targetControlX},${targetY} ${targetX},${targetY}
        `}
      fill="none"
      stroke="#333"
      strokeWidth={linkWidth}
      strokeOpacity="0.2"
      {...svgPropertiesNoEvents(others)}
    />
  );
}

const buildLinkProps = ({
  link,
  nodes,
  left,
  top,
  i,
  linkContent,
  linkCurvature,
}: {
  link: SankeyLink;
  nodes: ReadonlyArray<SankeyNode>;
  top: number;
  left: number;
  linkContent: SankeyLinkOptions | undefined;
  i: number;
  linkCurvature: number;
}): LinkProps => {
  const { sy: sourceRelativeY, ty: targetRelativeY, dy: linkWidth } = link;
  const sourceNode = nodes[link.source];
  const targetNode = nodes[link.target];
  const sourceX = sourceNode.x + sourceNode.dx + left;
  const targetX = targetNode.x + left;
  const interpolationFunc = interpolationGenerator(sourceX, targetX);
  const sourceControlX = interpolationFunc(linkCurvature);
  const targetControlX = interpolationFunc(1 - linkCurvature);
  const sourceY = sourceNode.y + sourceRelativeY + linkWidth / 2 + top;
  const targetY = targetNode.y + targetRelativeY + linkWidth / 2 + top;

  const linkProps: LinkProps = {
    sourceX,
    // @ts-expect-error the linkContent from below is contributing unknown props
    targetX,
    sourceY,
    // @ts-expect-error the linkContent from below is contributing unknown props
    targetY,
    sourceControlX,
    targetControlX,
    sourceRelativeY,
    targetRelativeY,
    linkWidth,
    index: i,
    payload: { ...link, source: sourceNode, target: targetNode },
    ...svgPropertiesNoEventsFromUnknown(linkContent),
  };

  return linkProps;
};

function SankeyLinkElement({
  props,
  i,
  linkContent,
  onMouseEnter,
  onMouseLeave,
  onClick,
  dataKey,
}: {
  props: LinkProps;
  i: number;
  linkContent: SankeyLinkOptions | undefined;
  onMouseEnter: (linkProps: LinkProps, e: MouseEvent) => void;
  onMouseLeave: (linkProps: LinkProps, e: MouseEvent) => void;
  onClick: (linkProps: LinkProps, e: MouseEvent) => void;
  dataKey: DataKey<any>;
}) {
  const activeCoordinate = getLinkCoordinateOfTooltip(props);
  const activeIndex = `link-${i}`;

  const dispatch = useAppDispatch();

  const events = {
    onMouseEnter: (e: MouseEvent) => {
      dispatch(
        setActiveMouseOverItemIndex({
          activeIndex,
          activeDataKey: dataKey,
          activeCoordinate,
        }),
      );
      onMouseEnter(props, e);
    },
    onMouseLeave: (e: MouseEvent) => {
      dispatch(mouseLeaveItem());
      onMouseLeave(props, e);
    },
    onClick: (e: MouseEvent) => {
      dispatch(
        setActiveClickItemIndex({
          activeIndex,
          activeDataKey: dataKey,
          activeCoordinate,
        }),
      );
      onClick(props, e);
    },
  };

  return <Layer {...events}>{renderLinkItem(linkContent, props)}</Layer>;
}

function AllSankeyLinkElements({
  modifiedLinks,
  links,
  linkContent,
  onMouseEnter,
  onMouseLeave,
  onClick,
  dataKey,
}: {
  modifiedLinks: ReadonlyArray<LinkProps>;
  links: ReadonlyArray<SankeyLink>;
  linkContent: SankeyLinkOptions | undefined;
  onMouseEnter: (linkProps: LinkProps, e: MouseEvent) => void;
  onMouseLeave: (linkProps: LinkProps, e: MouseEvent) => void;
  onClick: (linkProps: LinkProps, e: MouseEvent) => void;
  dataKey: DataKey<any>;
}) {
  return (
    <Layer className="recharts-sankey-links" key="recharts-sankey-links">
      {links.map((link: SankeyLink, i: number) => {
        const linkProps = modifiedLinks[i];
        return (
          <SankeyLinkElement
            key={`link-${link.source}-${link.target}-${link.value}`}
            props={linkProps}
            linkContent={linkContent}
            i={i}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            dataKey={dataKey}
          />
        );
      })}
    </Layer>
  );
}

function renderNodeItem(option: SankeyNodeOptions | undefined, props: NodeProps) {
  if (React.isValidElement(option)) {
    return React.cloneElement(option, props);
  }
  if (typeof option === 'function') {
    return option(props);
  }

  return (
    // @ts-expect-error recharts radius is not compatible with SVG radius
    <Rectangle className="recharts-sankey-node" fill="#0088fe" fillOpacity="0.8" {...svgPropertiesNoEvents(props)} />
  );
}

const buildNodeProps = ({
  node,
  nodeContent,
  top,
  left,
  i,
}: {
  node: SankeyNode;
  nodeContent: SankeyNodeOptions | undefined;
  top: number;
  left: number;
  i: number;
}) => {
  const { x, y, dx, dy } = node;
  // @ts-expect-error nodeContent is passing in unknown props
  const nodeProps: NodeProps = {
    ...svgPropertiesNoEventsFromUnknown(nodeContent),
    x: x + left,
    y: y + top,
    width: dx,
    height: dy,
    index: i,
    payload: node,
  };
  return nodeProps;
};

function NodeElement({
  props,
  nodeContent,
  i,
  onMouseEnter,
  onMouseLeave,
  onClick,
  dataKey,
}: {
  props: NodeProps;
  nodeContent: SankeyNodeOptions | undefined;
  i: number;
  onMouseEnter: (nodeProps: NodeProps, e: MouseEvent) => void;
  onMouseLeave: (nodeProps: NodeProps, e: MouseEvent) => void;
  onClick: (nodeProps: NodeProps, e: MouseEvent) => void;
  dataKey: DataKey<any>;
}) {
  const dispatch = useAppDispatch();

  const activeCoordinate = getNodeCoordinateOfTooltip(props);
  const activeIndex = `node-${i}`;

  const events = {
    onMouseEnter: (e: MouseEvent) => {
      dispatch(
        setActiveMouseOverItemIndex({
          activeIndex,
          activeDataKey: dataKey,
          activeCoordinate,
        }),
      );
      onMouseEnter(props, e);
    },
    onMouseLeave: (e: MouseEvent) => {
      dispatch(mouseLeaveItem());
      onMouseLeave(props, e);
    },
    onClick: (e: MouseEvent) => {
      dispatch(
        setActiveClickItemIndex({
          activeIndex,
          activeDataKey: dataKey,
          activeCoordinate,
        }),
      );
      onClick(props, e);
    },
  };

  return <Layer {...events}>{renderNodeItem(nodeContent, props)}</Layer>;
}

function AllNodeElements({
  modifiedNodes,
  nodeContent,
  onMouseEnter,
  onMouseLeave,
  onClick,
  dataKey,
}: {
  modifiedNodes: ReadonlyArray<NodeProps>;
  nodeContent: SankeyNodeOptions | undefined;
  onMouseEnter: (nodeProps: NodeProps, e: MouseEvent) => void;
  onMouseLeave: (nodeProps: NodeProps, e: MouseEvent) => void;
  onClick: (nodeProps: NodeProps, e: MouseEvent) => void;
  dataKey: DataKey<any>;
}) {
  return (
    <Layer className="recharts-sankey-nodes" key="recharts-sankey-nodes">
      {modifiedNodes.map((modifiedNode, i) => {
        return (
          <NodeElement
            key={`node-${modifiedNode.index}-${modifiedNode.x}-${modifiedNode.y}`}
            props={modifiedNode}
            nodeContent={nodeContent}
            i={i}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            dataKey={dataKey}
          />
        );
      })}
    </Layer>
  );
}

const sankeyDefaultProps = {
  nameKey: 'name',
  dataKey: 'value',
  nodePadding: 10,
  nodeWidth: 10,
  linkCurvature: 0.5,
  iterations: 32,
  margin: { top: 5, right: 5, bottom: 5, left: 5 },
  sort: true,
} as const satisfies Partial<Props>;

type PropsWithResolvedDefaults = RequiresDefaultProps<Props, typeof sankeyDefaultProps>;

function SankeyImpl(
  props: PropsWithResolvedDefaults & {
    links: ReadonlyArray<SankeyLink>;
    modifiedNodes: NodeProps[];
    modifiedLinks: LinkProps[];
  },
) {
  const { className, style, children, links, ...others } = props;
  const { link, dataKey, node, onMouseEnter, onMouseLeave, onClick, modifiedNodes, modifiedLinks } = props;

  const tooltipPortal: Ref<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

  const attrs = svgPropertiesNoEvents(others);

  const width = useChartWidth();
  const height = useChartHeight();

  const handleMouseEnter = useCallback(
    (item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent) => {
      if (onMouseEnter) {
        onMouseEnter(item, type, e);
      }
    },
    [onMouseEnter],
  );

  const handleMouseLeave = useCallback(
    (item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent) => {
      if (onMouseLeave) {
        onMouseLeave(item, type, e);
      }
    },
    [onMouseLeave],
  );

  const handleClick = useCallback(
    (item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent) => {
      if (onClick) {
        onClick(item, type, e);
      }
    },
    [onClick],
  );

  if (!isPositiveNumber(width) || !isPositiveNumber(height)) {
    return null;
  }

  return (
    <TooltipPortalContext.Provider value={tooltipPortal.current}>
      <RechartsWrapper
        className={className}
        style={style}
        width={width}
        height={height}
        ref={tooltipPortal}
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
        <Surface {...attrs} width={width} height={height}>
          {children}
          <AllSankeyLinkElements
            links={links}
            modifiedLinks={modifiedLinks}
            linkContent={link}
            dataKey={dataKey}
            onMouseEnter={(linkProps: LinkProps, e: MouseEvent) => handleMouseEnter(linkProps, 'link', e)}
            onMouseLeave={(linkProps: LinkProps, e: MouseEvent) => handleMouseLeave(linkProps, 'link', e)}
            onClick={(linkProps: LinkProps, e: MouseEvent) => handleClick(linkProps, 'link', e)}
          />
          <AllNodeElements
            modifiedNodes={modifiedNodes}
            nodeContent={node}
            dataKey={dataKey}
            onMouseEnter={(nodeProps: NodeProps, e: MouseEvent) => handleMouseEnter(nodeProps, 'node', e)}
            onMouseLeave={(nodeProps: NodeProps, e: MouseEvent) => handleMouseLeave(nodeProps, 'node', e)}
            onClick={(nodeProps: NodeProps, e: MouseEvent) => handleClick(nodeProps, 'node', e)}
          />
        </Surface>
      </RechartsWrapper>
    </TooltipPortalContext.Provider>
  );
}

export function Sankey(outsideProps: Props) {
  const props: PropsWithResolvedDefaults = resolveDefaultProps(outsideProps, sankeyDefaultProps);
  const {
    data,
    width,
    height,
    className,
    link,
    node,
    iterations,
    nodeWidth,
    nodePadding,
    sort,
    linkCurvature,
    margin,
  } = props;

  const { links, modifiedLinks, modifiedNodes } = useMemo(() => {
    if (!data || !width || !height || width <= 0 || height <= 0) {
      return { nodes: [], links: [], modifiedLinks: [], modifiedNodes: [] };
    }
    const contentWidth = width - (margin.left ?? 0) - (margin.right ?? 0);
    const contentHeight = height - (margin.top ?? 0) - (margin.bottom ?? 0);
    const computed = computeData({
      data,
      width: contentWidth,
      height: contentHeight,
      iterations,
      nodeWidth,
      nodePadding,
      sort,
    });

    const top = margin.top || 0;
    const left = margin.left || 0;
    const newModifiedLinks = computed.links.map((l, i) => {
      return buildLinkProps({ link: l, nodes: computed.nodes, i, top, left, linkContent: link, linkCurvature });
    });

    const newModifiedNodes = computed.nodes.map((n, i) => {
      return buildNodeProps({
        node: n,
        nodeContent: node,
        i,
        top,
        left,
      });
    });

    return {
      nodes: computed.nodes,
      links: computed.links,
      modifiedLinks: newModifiedLinks,
      modifiedNodes: newModifiedNodes,
    };
  }, [data, width, height, margin, iterations, nodeWidth, nodePadding, sort, link, node, linkCurvature]);

  if (!isPositiveNumber(width) || !isPositiveNumber(height) || !data || !data.links || !data.nodes) {
    return null;
  }

  return (
    <RechartsStoreProvider preloadedState={{ options }} reduxStoreName={className ?? 'Sankey'}>
      <SetTooltipEntrySettings fn={getTooltipEntrySettings} args={props} />
      <SetComputedData computedData={{ links: modifiedLinks, nodes: modifiedNodes }} />
      <ReportChartSize width={width} height={height} />
      <ReportChartMargin margin={defaultSankeyMargin} />
      <SankeyImpl {...props} links={links} modifiedLinks={modifiedLinks} modifiedNodes={modifiedNodes} />
    </RechartsStoreProvider>
  );
}

Sankey.displayName = 'Sankey';
