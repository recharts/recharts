import * as React from 'react';
import { createContext, PureComponent, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import omit from 'es-toolkit/compat/omit';
import get from 'es-toolkit/compat/get';

import { Layer } from '../container/Layer';
import { Label, LabelBackgroundAnimationContextProvider, Props as LabelProps } from '../component/Label';
import { Surface } from '../container/Surface';
import { Polygon } from '../shape/Polygon';
import { Rectangle } from '../shape/Rectangle';
import { getValueByDataKey } from '../util/ChartUtils';
import { COLOR_PANEL } from '../util/Constants';
import { isNan, noop } from '../util/DataUtils';
import { getStringSize } from '../util/DOMUtils';
import {
  AnimationDuration,
  EasingInput,
  Coordinate,
  DataConsumer,
  DataKey,
  EventThrottlingProps,
  Margin,
  Percent,
  RectanglePosition,
} from '../util/types';
import { ReportChartMargin, useChartHeight, useChartWidth } from '../context/chartLayoutContext';
import { TooltipPortalContext } from '../context/tooltipPortalContext';
import { RechartsWrapper } from './RechartsWrapper';
import {
  setActiveClickItemIndex,
  setActiveMouseOverItemIndex,
  TooltipIndex,
  TooltipPayloadConfiguration,
  TooltipPayloadSearcher,
} from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { ChartOptions } from '../state/optionsSlice';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import { ReportEventSettings } from '../state/ReportEventSettings';
import { useAppDispatch } from '../state/hooks';
import { AppDispatch } from '../state/store';
import { isPositiveNumber } from '../util/isWellBehavedNumber';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { CSSTransitionAnimate, extractCssEasing } from '../animation/CSSTransitionAnimate';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { GraphicalItemId } from '../state/graphicalItemsSlice';
import { initialEventSettingsState } from '../state/eventSettingsSlice';
import { RechartsTheme } from '../theme/RechartsTheme';
import { useBackwardsCompatibleTheme } from '../theme/useBackwardsCompatibleTheme';
import { hasOwnColors } from '../theme/dataEntryStyles';
import { getEffectivePageBackground } from '../theme/pageBackground';
import {
  CartesianLabelListContextProvider,
  CartesianLabelListEntry,
  ImplicitLabelListType,
  LabelList,
  LabelListFromLabelProp,
  LabelListSettingsContextProvider,
} from '../component/LabelList';
import { AllZIndexPortals } from '../zIndex/ZIndexPortal';
import { DataLabelColorsContextProvider, DataLabelThemeContextProvider } from '../theme/labelTheme';

const NODE_VALUE_KEY = 'value';
const omittedTileProps = ['children', 'id'];
const treemapNestIndexStyle: React.CSSProperties = { marginTop: '8px', textAlign: 'center' };

/**
 * This is what end users defines as `data` on Treemap.
 */
export interface TreemapDataType {
  children?: ReadonlyArray<TreemapDataType>;

  [key: string]: unknown;
}

/**
 * This is what is returned from `squarify`, the final treemap data structure
 * that gets rendered and is stored in
 */
export interface TreemapNode {
  children: ReadonlyArray<TreemapNode> | null;
  value: number;
  depth: number;
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
  tooltipIndex: TooltipIndex;
  root?: TreemapNode;

  [k: string]: unknown;
}

function isTreemapNode(value: unknown): value is TreemapNode {
  return (
    value != null &&
    typeof value === 'object' &&
    'x' in value &&
    'y' in value &&
    'width' in value &&
    'height' in value &&
    typeof value.x === 'number' &&
    typeof value.y === 'number' &&
    typeof value.width === 'number' &&
    typeof value.height === 'number'
  );
}

export const treemapPayloadSearcher: TooltipPayloadSearcher = (
  data: unknown,
  activeIndex: TooltipIndex,
): TreemapNode | undefined => {
  if (!data || !activeIndex) {
    return undefined;
  }
  return get(data, activeIndex);
};

export const addToTreemapNodeIndex = (
  indexInChildrenArr: number,
  activeTooltipIndexSoFar: TooltipIndex | undefined = '',
): TooltipIndex => {
  return `${activeTooltipIndexSoFar}children[${indexInChildrenArr}]`;
};

const options: ChartOptions = {
  chartName: 'Treemap',
  defaultTooltipEventType: 'item',
  validateTooltipEventTypes: ['item'],
  tooltipPayloadSearcher: treemapPayloadSearcher,
  eventEmitter: undefined,
};

const treemapPreloadedState = { options };

const NEST_INDEX_HEIGHT = 30;

const getTreemapRenderHeight = (height: number, type: Props['type']) => {
  if (type === 'nest') {
    return height - NEST_INDEX_HEIGHT;
  }

  return height;
};

export const computeNode = <DataPointType extends TreemapDataType, DataValueType>({
  depth,
  node,
  index,
  dataKey,
  nameKey,
  nestedActiveTooltipIndex,
}: {
  depth: number;
  node: TreemapNode;
  index: number;
  dataKey: DataKey<DataPointType, DataValueType>;
  nameKey: DataKey<DataPointType, DataValueType>;
  nestedActiveTooltipIndex: TooltipIndex | undefined;
}): TreemapNode => {
  const currentTooltipIndex = depth === 0 ? '' : addToTreemapNodeIndex(index, nestedActiveTooltipIndex);
  const { children } = node;
  const childDepth = depth + 1;
  const computedChildren =
    children && children.length
      ? children.map((child: TreemapNode, i: number) =>
          computeNode({
            depth: childDepth,
            node: child,
            index: i,
            dataKey,
            nameKey,
            nestedActiveTooltipIndex: currentTooltipIndex,
          }),
        )
      : null;
  let nodeValue: number;

  if (computedChildren && computedChildren.length) {
    nodeValue = computedChildren.reduce((result: number, child: TreemapNode) => result + child.value, 0);
  } else {
    // TODO need to verify dataKey
    const rawNodeValue = typeof dataKey === 'string' || typeof dataKey === 'number' ? node[dataKey] : undefined;
    const numericValue = typeof rawNodeValue === 'number' ? rawNodeValue : 0;
    nodeValue = isNan(numericValue) || numericValue <= 0 ? 0 : numericValue;
  }

  return {
    ...node,
    children: computedChildren,
    // @ts-expect-error getValueByDataKey does not validate the output type
    name: getValueByDataKey(node, nameKey, ''),
    [NODE_VALUE_KEY]: nodeValue,
    depth,
    index,
    tooltipIndex: currentTooltipIndex,
  };
};

const filterRect = (node: TreemapNode): RectanglePosition => ({
  x: node.x,
  y: node.y,
  width: node.width,
  height: node.height,
});

const insetRect = (rect: RectanglePosition, nodeInset: number): RectanglePosition => {
  if (!Number.isFinite(nodeInset) || nodeInset <= 0) {
    return rect;
  }

  const clampedPadding = Math.min(nodeInset, rect.width / 2, rect.height / 2);

  return {
    x: rect.x + clampedPadding,
    y: rect.y + clampedPadding,
    width: Math.max(rect.width - clampedPadding * 2, 0),
    height: Math.max(rect.height - clampedPadding * 2, 0),
  };
};

const applyGapToChildren = (
  children: ReadonlyArray<TreemapNodeWithArea>,
  parentRect: RectanglePosition,
  nodeGap: number,
): ReadonlyArray<TreemapNodeWithArea> => {
  if (!Number.isFinite(nodeGap) || nodeGap <= 0) {
    return children;
  }

  const halfGap = nodeGap / 2;
  const parentRight = parentRect.x + parentRect.width;
  const parentBottom = parentRect.y + parentRect.height;

  return children.map(child => {
    const childRight = child.x + child.width;
    const childBottom = child.y + child.height;
    const leftInset = child.x > parentRect.x ? halfGap : 0;
    const rightInset = childRight < parentRight ? halfGap : 0;
    const topInset = child.y > parentRect.y ? halfGap : 0;
    const bottomInset = childBottom < parentBottom ? halfGap : 0;

    return {
      ...child,
      x: child.x + leftInset,
      y: child.y + topInset,
      width: Math.max(child.width - leftInset - rightInset, 0),
      height: Math.max(child.height - topInset - bottomInset, 0),
    };
  });
};

type TreemapNodeWithArea = TreemapNode & { area: number };

// Compute the area for each child based on value & scale.
const getAreaOfChildren = (
  children: ReadonlyArray<TreemapNode>,
  areaValueRatio: number,
): ReadonlyArray<TreemapNodeWithArea> => {
  const ratio = areaValueRatio < 0 ? 0 : areaValueRatio;

  return children.map((child: TreemapNode) => {
    const area = child[NODE_VALUE_KEY] * ratio;

    return {
      ...child,
      area: isNan(area) || area <= 0 ? 0 : area,
    };
  });
};

// Computes the score for the specified row, as the worst aspect ratio.
const getWorstScore = (row: AreaArray<TreemapNodeWithArea>, parentSize: number, aspectRatio: number): number => {
  const parentArea = parentSize * parentSize;
  const rowArea = row.area * row.area;
  const { min, max } = row.reduce(
    (result: { min: number; max: number }, child: TreemapNodeWithArea) => ({
      min: Math.min(result.min, child.area),
      max: Math.max(result.max, child.area),
    }),
    { min: Infinity, max: 0 },
  );

  return rowArea
    ? Math.max((parentArea * max * aspectRatio) / rowArea, rowArea / (parentArea * min * aspectRatio))
    : Infinity;
};

const horizontalPosition = (
  row: AreaArray<TreemapNodeWithArea>,
  parentSize: number,
  parentRect: RectanglePosition,
  isFlush: boolean,
): RectanglePosition => {
  let rowHeight = parentSize ? Math.round(row.area / parentSize) : 0;

  if (isFlush || rowHeight > parentRect.height) {
    rowHeight = parentRect.height;
  }

  let curX = parentRect.x;
  let child;
  for (let i = 0, len = row.length; i < len; i++) {
    child = row[i];
    if (child == null) {
      continue;
    }
    child.x = curX;
    child.y = parentRect.y;
    child.height = rowHeight;
    child.width = Math.min(rowHeight ? Math.round(child.area / rowHeight) : 0, parentRect.x + parentRect.width - curX);
    curX += child.width;
  }
  // add the remain x to the last one of row
  if (child != null) {
    child.width += parentRect.x + parentRect.width - curX;
  }

  return {
    ...parentRect,
    y: parentRect.y + rowHeight,
    height: parentRect.height - rowHeight,
  };
};

const verticalPosition = (
  row: AreaArray<TreemapNodeWithArea>,
  parentSize: number,
  parentRect: RectanglePosition,
  isFlush: boolean,
): RectanglePosition => {
  let rowWidth = parentSize ? Math.round(row.area / parentSize) : 0;

  if (isFlush || rowWidth > parentRect.width) {
    rowWidth = parentRect.width;
  }

  let curY = parentRect.y;
  let child;
  for (let i = 0, len = row.length; i < len; i++) {
    child = row[i];
    if (child == null) {
      continue;
    }
    child.x = parentRect.x;
    child.y = curY;
    child.width = rowWidth;
    child.height = Math.min(rowWidth ? Math.round(child.area / rowWidth) : 0, parentRect.y + parentRect.height - curY);
    curY += child.height;
  }
  if (child) {
    child.height += parentRect.y + parentRect.height - curY;
  }

  return {
    ...parentRect,
    x: parentRect.x + rowWidth,
    width: parentRect.width - rowWidth,
  };
};

const position = (
  row: AreaArray<TreemapNodeWithArea>,
  parentSize: number,
  parentRect: RectanglePosition,
  isFlush: boolean,
): RectanglePosition => {
  if (parentSize === parentRect.width) {
    return horizontalPosition(row, parentSize, parentRect, isFlush);
  }

  return verticalPosition(row, parentSize, parentRect, isFlush);
};

type AreaArray<T> = Array<T> & { area: number };

// Recursively arranges the specified node's children into squarified rows.
const squarify = (node: TreemapNode, aspectRatio: number, nodeInset: number, nodeGap: number): TreemapNode => {
  const { children } = node;

  if (children && children.length) {
    const layoutRect: RectanglePosition = insetRect(filterRect(node), nodeInset);
    let rect: RectanglePosition = layoutRect;
    // @ts-expect-error we can't create an array with static property on a single line so typescript will complain.
    const row: AreaArray<TreemapNodeWithArea> = [];
    let best = Infinity; // the best row score so far
    let child, score; // the current row score
    let size = Math.min(rect.width, rect.height); // initial orientation
    const scaleChildren = getAreaOfChildren(children, (rect.width * rect.height) / node[NODE_VALUE_KEY]);
    const tempChildren = scaleChildren.slice();

    // why are we setting static properties on an array?
    row.area = 0;

    while (tempChildren.length > 0) {
      [child] = tempChildren;
      if (child == null) {
        continue;
      }
      // row first
      row.push(child);
      row.area += child.area;

      score = getWorstScore(row, size, aspectRatio);
      if (score <= best) {
        // continue with this orientation
        tempChildren.shift();
        best = score;
      } else {
        // abort, and try a different orientation
        row.area -= row.pop()?.area ?? 0;
        rect = position(row, size, rect, false);
        size = Math.min(rect.width, rect.height);
        row.length = row.area = 0;
        best = Infinity;
      }
    }

    if (row.length) {
      rect = position(row, size, rect, true);
      row.length = row.area = 0;
    }

    const childrenWithGaps = applyGapToChildren(scaleChildren, layoutRect, nodeGap);

    return {
      ...node,
      children: childrenWithGaps.map(c => squarify(c, aspectRatio, nodeInset, nodeGap)),
    };
  }

  return node;
};

export type TreemapContentType = ReactNode | ((props: TreemapNode) => React.ReactElement);

export interface Props<DataPointType extends TreemapDataType = TreemapDataType, DataValueType = unknown>
  extends DataConsumer<DataPointType, DataValueType>, EventThrottlingProps {
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
   * The source data. Each element should be an object.
   * The properties of each object represent the values of different data dimensions.
   *
   * Use the `dataKey` prop to specify which properties to use.
   *
   * If the `children` property is present on an element, it will be treated as a nested treemap.
   */
  data?: ReadonlyArray<DataPointType>;

  /**
   * @deprecated unused prop, doesn't do anything, use `key` instead
   */
  animationId?: number;

  style?: React.CSSProperties;

  /**
   * The treemap will try to keep every single rectangle's aspect ratio near the aspectRatio given.
   * @default 1.618033988749895
   */
  aspectRatio?: number;

  /**
   * The inset between a parent node and its child nodes.
   *
   * Insets a parent node's available area before laying out its children.
   * This creates space between a parent boundary and its child nodes.
   * @default 0
   * @since 3.9
   */
  nodeInset?: number;

  /**
   * The gap between the nodes.
   *
   * Adds spacing between sibling nodes at the same depth level.
   * This does not inset children from their parent boundary.
   * @default 0
   * @since 3.9
   */
  nodeGap?: number;

  /**
   * If set to a React element, the option is the customized React element of rendering the content.
   * Use an SVG element or component, such as `<text>` or `<g>`.
   * HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.
   * If set to a function, the function will be called to render the content.
   */
  content?: TreemapContentType;

  /**
   * Configures tile labels through the shared LabelList system.
   * Defaults to size-filtered node names. Set false to hide automatic labels.
   * An object configures LabelList; an element or function supplies custom label content.
   * Explicit LabelList children are independent of this prop and replace implicit default labels.
   * Set true to render default labels alongside explicit LabelList children.
   * Default labels follow tile paint order; configured labels use the shared overlay layer.
   */
  label?: ImplicitLabelListType;

  fill?: string;

  stroke?: string;

  className?: string;

  /**
   * Name represents each sector in the tooltip.
   * This allows you to extract the name from the data:
   *
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the name.
   *
   * @defaultValue 'name'
   */
  nameKey?: DataKey<DataPointType, DataValueType>;

  /**
   * Decides how to extract the value of this Treemap from the data:
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the value of this Treemap.
   *
   * @defaultValue 'value'
   */
  dataKey?: DataKey<DataPointType, DataValueType>;

  children?: ReactNode;

  /**
   * The type of treemap to render.
   *
   * - 'flat': Renders the entire treemap at once, with all leaf nodes visible.
   * - 'nest': Renders an interactive, nested treemap. Clicking on a parent node will "zoom in" to show its children,
   *   and a breadcrumb navigation will be displayed to allow navigating back up the hierarchy.
   *
   * @default 'flat'
   */
  type?: 'flat' | 'nest';

  colorPanel?: ReadonlyArray<string>;

  // customize nest index content
  nestIndexContent?: React.ReactElement | ((item: TreemapNode, i: number) => ReactNode);

  /**
   * The customized event handler of animation start
   */
  onAnimationStart?: () => void;

  /**
   * The customized event handler of animation end
   */
  onAnimationEnd?: () => void;

  onMouseEnter?: (node: TreemapNode, e: React.MouseEvent<SVGGraphicsElement>) => void;

  onMouseLeave?: (node: TreemapNode, e: React.MouseEvent<SVGGraphicsElement>) => void;

  onClick?: (node: TreemapNode) => void;

  /**
   * If set false, animation of treemap will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   * @default 'auto'
   */
  isAnimationActive?: boolean | 'auto';

  isUpdateAnimationActive?: boolean | 'auto';

  /**
   * Specifies when the animation should begin, the unit of this option is ms.
   * @default 0
   */
  animationBegin?: number;

  /**
   * Specifies the duration of animation, the unit of this option is ms.
   * @default 1500
   */
  animationDuration?: AnimationDuration;

  /**
   * The type of easing function.
   * @default 'linear'
   */
  animationEasing?: EasingInput;

  id?: string;
}

interface State {
  labelListCount: number;
  isAnimationFinished: boolean;
  formatRoot: TreemapNode | null;
  currentRoot: TreemapNode | undefined;
  nestIndex: Array<TreemapNode>;
  prevData?: ReadonlyArray<TreemapDataType>;
  prevType?: 'flat' | 'nest';
  prevWidth?: number;
  prevHeight?: number;
  prevDataKey: DataKey<TreemapDataType, unknown>;
  prevNameKey?: DataKey<TreemapDataType, unknown>;
  prevAspectRatio: number;
  prevNodeInset: number;
  prevNodeGap: number;
}

export const defaultTreeMapProps = {
  aspectRatio: 0.5 * (1 + Math.sqrt(5)),
  nodeInset: 0,
  nodeGap: 0,
  dataKey: 'value',
  nameKey: 'name',
  type: 'flat',
  isAnimationActive: 'auto',
  isUpdateAnimationActive: 'auto',
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'linear',
  ...initialEventSettingsState,
} as const satisfies Partial<Props>;

const defaultState: State = {
  labelListCount: 0,
  isAnimationFinished: false,
  formatRoot: null,
  currentRoot: undefined,
  nestIndex: [],
  prevAspectRatio: defaultTreeMapProps.aspectRatio,
  prevNodeInset: defaultTreeMapProps.nodeInset,
  prevNodeGap: defaultTreeMapProps.nodeGap,
  prevDataKey: defaultTreeMapProps.dataKey,
};

type ContentItemProps = {
  id: GraphicalItemId;
  content: TreemapContentType;
  nodeProps: TreemapNode;
  /**
   * True if the data node or the Treemap props define their own colors. Such nodes ignore the theme completely.
   * This is computed from the data node and the Treemap props separately
   * because nodeProps merge both and also include layout fields.
   */
  nodeHasOwnColors: boolean;
  /**
   * Index of the top-level tile that this node belongs to.
   * Undefined for the root node.
   */
  branchIndex: number | undefined;
  type: string;
  colorPanel: ReadonlyArray<string> | undefined;
  /**
   * Undefined when there is no theme at all, which is when the legacy styles apply.
   */
  themeGraphicalItems: RechartsTheme['graphicalItems'] | undefined;
  /**
   * The color behind the chart, used for the tile outlines.
   */
  themePageBackground: string | undefined;
  dataKey: DataKey<TreemapDataType, unknown>;
  onClick?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
  onMouseEnter?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
  onMouseLeave?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
};

type TileStyles = {
  fill: string | undefined;
  stroke: string | undefined;
  strokeWidth: number | string | undefined;
};

/**
 * Resolves the default styles of a single tile.
 * Explicit props and styles defined in data are applied later, on top of these.
 */
function getTileStyles({
  nodeProps,
  nodeHasOwnColors,
  branchIndex,
  colorPanel,
  themeGraphicalItems,
  themePageBackground,
}: Pick<
  ContentItemProps,
  'nodeProps' | 'nodeHasOwnColors' | 'branchIndex' | 'colorPanel' | 'themeGraphicalItems' | 'themePageBackground'
>): TileStyles {
  const colors = colorPanel || COLOR_PANEL;
  const legacyFill = nodeProps.depth < 2 ? colors[nodeProps.index % colors.length] : 'rgba(255,255,255,0)';
  if (themeGraphicalItems == null) {
    return { fill: legacyFill, stroke: '#fff', strokeWidth: undefined };
  }
  const fillFromColorPanel = colorPanel == null ? undefined : legacyFill;
  if (nodeHasOwnColors) {
    /*
     * A node that brings its own colors in data, or in the Treemap props, ignores the theme completely,
     * so that its colors are not mixed with the theme colors.
     */
    return { fill: fillFromColorPanel, stroke: undefined, strokeWidth: undefined };
  }
  if (branchIndex == null) {
    /*
     * The root node spans the whole chart, below all the other tiles.
     * Leaving it unpainted lets nodeGap and nodeInset show the chart background.
     */
    return { fill: fillFromColorPanel ?? 'none', stroke: 'none', strokeWidth: undefined };
  }
  /*
   * Top-level siblings get different colors, and nested tiles inherit the color of their branch.
   * Tiles of the same color are then told apart by their outline.
   * The outline has the color of the background, so that the tiles appear separated by gaps,
   * and every tile edge has the same contrast as the tile fill against the background.
   */
  const branchStyle = themeGraphicalItems[branchIndex % themeGraphicalItems.length];
  return {
    fill: fillFromColorPanel ?? branchStyle?.fill,
    stroke: themePageBackground ?? branchStyle?.stroke,
    strokeWidth: undefined,
  };
}

interface TreemapLabelListEntry extends CartesianLabelListEntry {
  payload: TreemapNode;
  branchIndex: number;
  ignoresTheme: boolean;
  tileStroke: string | undefined;
  onMouseEnter: React.MouseEventHandler<SVGGraphicsElement>;
  onMouseLeave: React.MouseEventHandler<SVGGraphicsElement>;
  onClick: React.MouseEventHandler<SVGGraphicsElement>;
  'data-recharts-item-index': TooltipIndex;
}

function TreemapLabelListProvider({
  entries,
  graphicalItems,
  children,
}: {
  entries: ReadonlyArray<TreemapLabelListEntry>;
  graphicalItems: RechartsTheme['graphicalItems'] | undefined;
  children: ReactNode;
}) {
  const resolveLabelTheme = useCallback(
    (index: number) => {
      const entry = entries[index];
      if (entry == null || entry.ignoresTheme || graphicalItems == null || graphicalItems.length === 0) {
        return undefined;
      }
      // Every descendant uses its top-level branch's theme, not its label-array index.
      return graphicalItems[entry.branchIndex % graphicalItems.length]?.label;
    },
    [entries, graphicalItems],
  );
  const colors = useMemo(
    () => ({
      hasFilledShapes: true,
      getShapeColors: (index: number) => ({ fill: entries[index]?.fill, stroke: entries[index]?.tileStroke }),
    }),
    [entries],
  );

  return (
    <DataLabelThemeContextProvider value={resolveLabelTheme}>
      <DataLabelColorsContextProvider value={colors}>
        <CartesianLabelListContextProvider value={entries}>{children}</CartesianLabelListContextProvider>
      </DataLabelColorsContextProvider>
    </DataLabelThemeContextProvider>
  );
}

const TreemapConfiguredLabelContext = createContext<
  | {
      entries: ReadonlyArray<TreemapLabelListEntry>;
      animation: Pick<
        InternalTreemapProps,
        'isAnimationActive' | 'animationBegin' | 'animationDuration' | 'animationEasing'
      >;
    }
  | undefined
>(undefined);

function TreemapAnimatedLayer({
  children,
  originX,
  originY,
  style,
  ...props
}: React.ComponentProps<typeof Layer> & { originX: number; originY: number }) {
  const animatedStyle = useMemo(
    () => ({ ...style, transformOrigin: `${originX} ${originY}` }),
    [style, originX, originY],
  );
  const backgroundAnimation = useMemo(
    () => ({ translate: style?.translate, transition: style?.transition }),
    [style?.translate, style?.transition],
  );
  return (
    <Layer {...props} style={animatedStyle}>
      <LabelBackgroundAnimationContextProvider value={backgroundAnimation}>
        {children}
      </LabelBackgroundAnimationContextProvider>
    </Layer>
  );
}

/**
 * Renders a resolved LabelList entry with its tile's animation and chart interactions.
 * LabelList supplies the original content and resolved theme props without cloning its children.
 */
function TreemapConfiguredLabel(props: LabelProps) {
  const context = useContext(TreemapConfiguredLabelContext);
  const entry = props.index == null ? undefined : context?.entries[props.index];
  if (context == null || entry == null) {
    return null;
  }
  const { animation } = context;
  const { x, width, y } = entry.payload;

  return (
    <CSSTransitionAnimate
      animationId={`treemap-${entry.payload.tooltipIndex}`}
      from={`${-x - width}px 0px`}
      to="0px 0px"
      attributeName="translate"
      begin={animation.animationBegin}
      easing={extractCssEasing(animation.animationEasing)}
      isActive={animation.isAnimationActive}
      duration={animation.animationDuration}
    >
      {style => (
        <TreemapAnimatedLayer
          className="recharts-treemap-configured-label"
          style={style}
          originX={x}
          originY={y}
          onMouseEnter={entry.onMouseEnter}
          onMouseLeave={entry.onMouseLeave}
          onClick={entry.onClick}
          data-recharts-item-index={entry.payload.tooltipIndex}
        >
          <Label
            {...props}
            onMouseEnter={props.onMouseEnter === entry.onMouseEnter ? undefined : props.onMouseEnter}
            onMouseLeave={props.onMouseLeave === entry.onMouseLeave ? undefined : props.onMouseLeave}
            onClick={props.onClick === entry.onClick ? undefined : props.onClick}
            zIndex={0}
          />
        </TreemapAnimatedLayer>
      )}
    </CSSTransitionAnimate>
  );
}

/**
 * Supplies the Treemap label renderer and registers mounted overlay LabelLists.
 * Children are rendered unchanged, so fragments and wrapper components work without inspection.
 */
function TreemapConfiguredLabelsProvider({
  entries,
  animation,
  label,
  registerLabelList,
  children,
}: {
  entries: ReadonlyArray<TreemapLabelListEntry>;
  animation: InternalTreemapProps;
  label: ImplicitLabelListType | undefined;
  registerLabelList: () => () => void;
  children: ReactNode;
}) {
  const value = useMemo(() => ({ entries, animation }), [entries, animation]);
  const settings = useMemo(() => ({ LabelComponent: TreemapConfiguredLabel, registerLabelList }), [registerLabelList]);
  const implicitSettings = useMemo(() => ({ LabelComponent: TreemapConfiguredLabel }), []);
  return (
    <TreemapConfiguredLabelContext.Provider value={value}>
      <LabelListSettingsContextProvider value={implicitSettings}>
        <LabelListFromLabelProp label={label === true ? false : label} />
      </LabelListSettingsContextProvider>
      <LabelListSettingsContextProvider value={settings}>{children}</LabelListSettingsContextProvider>
    </TreemapConfiguredLabelContext.Provider>
  );
}

function isDefaultLabelVisible(entry: TreemapLabelListEntry): boolean {
  const { width, height, name } = entry.payload;
  if (width <= 20 || height <= 20) {
    return false;
  }
  const size = getStringSize(name);
  return size.width < width && size.height < height;
}

function ContentItem({
  content,
  nodeProps,
  nodeHasOwnColors,
  branchIndex,
  type,
  colorPanel,
  themeGraphicalItems,
  themePageBackground,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: ContentItemProps): React.ReactElement {
  const { x, y, width, height } = nodeProps;
  const arrowPoints = useMemo(
    () => [
      { x: x + 2, y: y + height / 2 },
      { x: x + 6, y: y + height / 2 + 3 },
      { x: x + 2, y: y + height / 2 + 6 },
    ],
    [x, y, height],
  );
  if (React.isValidElement(content)) {
    return (
      <Layer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
        {React.cloneElement(content, nodeProps)}
      </Layer>
    );
  }
  if (typeof content === 'function') {
    return (
      <Layer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
        {content(nodeProps)}
      </Layer>
    );
  }
  // optimize default shape
  const { fill, stroke, strokeWidth } = getTileStyles({
    nodeProps,
    nodeHasOwnColors,
    branchIndex,
    colorPanel,
    themeGraphicalItems,
    themePageBackground,
  });

  let arrow = null;
  if (width > 10 && height > 10 && nodeProps.children && type === 'nest' && nodeProps.depth > 0) {
    arrow = <Polygon points={arrowPoints} />;
  }

  return (
    <g>
      <Rectangle
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        {...omit(nodeProps, omittedTileProps)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        data-recharts-item-index={nodeProps.tooltipIndex}
      />
      {arrow}
    </g>
  );
}

function ContentItemWithEvents(props: ContentItemProps) {
  const dispatch = useAppDispatch();
  const activeCoordinate: Coordinate = {
    x: props.nodeProps.x + props.nodeProps.width / 2,
    y: props.nodeProps.y + props.nodeProps.height / 2,
  };

  const onMouseEnter = () => {
    dispatch(
      setActiveMouseOverItemIndex({
        activeIndex: props.nodeProps.tooltipIndex,
        activeDataKey: props.dataKey,
        activeCoordinate,
        activeGraphicalItemId: props.id,
      }),
    );
  };
  const onMouseLeave = () => {
    // clearing state on mouseLeaveItem causes re-rendering issues
    // we don't actually want to do this for TreeMap - we clear state when we leave the entire chart instead
  };
  const onClick = () => {
    dispatch(
      setActiveClickItemIndex({
        activeIndex: props.nodeProps.tooltipIndex,
        activeDataKey: props.dataKey,
        activeCoordinate,
        activeGraphicalItemId: props.id,
      }),
    );
  };
  return <ContentItem {...props} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} />;
}

const SetTreemapTooltipEntrySettings = React.memo(
  ({
    dataKey,
    nameKey,
    stroke,
    fill,
    currentRoot,
    id,
  }: Pick<InternalTreemapProps, 'dataKey' | 'nameKey' | 'stroke' | 'fill' | 'id'> & {
    currentRoot: TreemapNode | undefined;
  }) => {
    const tooltipEntrySettings: TooltipPayloadConfiguration = {
      dataDefinedOnItem: currentRoot,
      getPosition: noop, // TODO I think Treemap has the capability of computing positions and supporting defaultIndex? Except it doesn't yet
      settings: {
        stroke,
        strokeWidth: undefined,
        fill,
        dataKey,
        nameKey,
        name: undefined, // Each TreemapNode has its own name
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

// Why is margin not a treemap prop? No clue. Probably it should be
const defaultTreemapMargin: Margin = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

function TreemapItem({
  content,
  nodeProps,
  nodeHasOwnColors,
  branchIndex,
  isLeaf,
  treemapProps,
  onNestClick,
  defaultLabel,
}: {
  content: TreemapContentType;
  nodeProps: TreemapNode;
  nodeHasOwnColors: boolean;
  branchIndex: number | undefined;
  isLeaf: boolean;
  treemapProps: InternalTreemapProps;
  onNestClick: (node: TreemapNode) => void;
  defaultLabel: ReactNode;
}): ReactNode {
  const {
    id,
    isAnimationActive,
    animationBegin,
    animationDuration,
    animationEasing,
    isUpdateAnimationActive,
    type,
    colorPanel,
    dataKey,
    onAnimationStart,
    onAnimationEnd,
    onMouseEnter: onMouseEnterFromProps,
    onClick: onItemClickFromProps,
    onMouseLeave: onMouseLeaveFromProps,
    themeGraphicalItems,
    themePageBackground,
  } = treemapProps;
  const { width, height, x, y } = nodeProps;
  const translateX = -x - width;
  const translateY = 0;
  const animatedNodeProps = useMemo(
    () => ({
      ...nodeProps,
      isAnimationActive,
      isUpdateAnimationActive: !isUpdateAnimationActive,
      width,
      height,
      x,
      y,
    }),
    [nodeProps, isAnimationActive, isUpdateAnimationActive, width, height, x, y],
  );

  const onMouseEnter = (e: React.MouseEvent<SVGGraphicsElement>) => {
    if ((isLeaf || type === 'nest') && typeof onMouseEnterFromProps === 'function') {
      onMouseEnterFromProps(nodeProps, e);
    }
  };

  const onMouseLeave = (e: React.MouseEvent<SVGGraphicsElement>) => {
    if ((isLeaf || type === 'nest') && typeof onMouseLeaveFromProps === 'function') {
      onMouseLeaveFromProps(nodeProps, e);
    }
  };

  const onClick = (event: React.MouseEvent<SVGGraphicsElement>) => {
    // A node is nested in its ancestors' layers; do not invoke their callbacks too.
    event.stopPropagation();
    if (type === 'nest' && nodeProps.depth > 0) {
      onNestClick(nodeProps);
    } else if ((isLeaf || type === 'nest') && typeof onItemClickFromProps === 'function') {
      onItemClickFromProps(nodeProps);
    }
  };

  const handleAnimationEnd = useCallback(() => {
    if (typeof onAnimationEnd === 'function') {
      onAnimationEnd();
    }
  }, [onAnimationEnd]);

  const handleAnimationStart = useCallback(() => {
    if (typeof onAnimationStart === 'function') {
      onAnimationStart();
    }
  }, [onAnimationStart]);

  return (
    <CSSTransitionAnimate
      animationId={`treemap-${nodeProps.tooltipIndex}`}
      from={`${translateX}px ${translateY}px`}
      to="0px 0px"
      attributeName="translate"
      begin={animationBegin}
      easing={extractCssEasing(animationEasing)}
      isActive={isAnimationActive}
      duration={animationDuration}
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
    >
      {style => (
        <TreemapAnimatedLayer
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
          style={style}
          originX={x}
          originY={y}
        >
          <ContentItemWithEvents
            id={id}
            content={content}
            dataKey={dataKey}
            nodeProps={animatedNodeProps}
            nodeHasOwnColors={nodeHasOwnColors}
            branchIndex={branchIndex}
            type={type}
            colorPanel={colorPanel}
            themeGraphicalItems={themeGraphicalItems}
            themePageBackground={themePageBackground}
          />
          {defaultLabel}
        </TreemapAnimatedLayer>
      )}
    </CSSTransitionAnimate>
  );
}

type InternalTreemapProps = RequiresDefaultProps<Props, typeof defaultTreeMapProps> & {
  width: number;
  height: number;
  dispatch: AppDispatch;
  id: GraphicalItemId;
  themeGraphicalItems: RechartsTheme['graphicalItems'] | undefined;
  themePageBackground: string | undefined;
  typography?: React.CSSProperties;
};

function TreemapNodeItem({
  node,
  root,
  entry,
  branchIndex,
  treemapProps,
  onNestClick,
  onLabelMouseEnter,
}: {
  node: TreemapNode;
  root: TreemapNode;
  entry: TreemapLabelListEntry | undefined;
  branchIndex: number | undefined;
  treemapProps: InternalTreemapProps;
  onNestClick: (node: TreemapNode) => void;
  onLabelMouseEnter: (node: TreemapNode, event: React.MouseEvent<SVGGraphicsElement>, notify?: boolean) => void;
}) {
  const nodeProps = useMemo(
    () => ({ ...svgPropertiesNoEvents(treemapProps), ...node, root }),
    [treemapProps, node, root],
  );
  const defaultEntries = useMemo(
    () =>
      entry == null
        ? []
        : [
            {
              ...entry,
              onMouseEnter: (event: React.MouseEvent<SVGGraphicsElement>) => onLabelMouseEnter(nodeProps, event, false),
              onMouseLeave: noop,
            },
          ],
    [entry, nodeProps, onLabelMouseEnter],
  );
  const { content, themeGraphicalItems, typography } = treemapProps;
  const defaultLabel =
    entry == null ? null : (
      <LabelListSettingsContextProvider value={undefined}>
        <TreemapLabelListProvider entries={defaultEntries} graphicalItems={themeGraphicalItems}>
          <LabelList
            zIndex={0}
            position="insideLeft"
            offset={8}
            fontSize={typography?.fontSize ?? 14}
            fill={
              themeGraphicalItems == null || themeGraphicalItems.length === 0
                ? (typography?.fill ?? typography?.color ?? '#000')
                : undefined
            }
          />
        </TreemapLabelListProvider>
      </LabelListSettingsContextProvider>
    );
  return (
    <TreemapItem
      isLeaf={!node.children || !node.children.length}
      content={content}
      nodeProps={nodeProps}
      nodeHasOwnColors={hasOwnColors(node) || hasOwnColors(treemapProps)}
      branchIndex={branchIndex}
      treemapProps={treemapProps}
      onNestClick={onNestClick}
      defaultLabel={defaultLabel}
    />
  );
}

class TreemapWithState extends PureComponent<InternalTreemapProps, State> {
  static displayName = 'Treemap';

  state = {
    ...defaultState,
  };

  /**
   * Tracks mounted overlay LabelLists instead of inspecting React children.
   * Effect cleanup restores automatic labels when the last list unmounts.
   * Tile-local default lists sit outside this provider and do not register.
   */
  registerLabelList = (): (() => void) => {
    this.setState(state => ({ labelListCount: state.labelListCount + 1 }));
    return () => {
      this.setState(state => ({ labelListCount: state.labelListCount - 1 }));
    };
  };

  static getDerivedStateFromProps(nextProps: InternalTreemapProps, prevState: State): State | null {
    if (
      nextProps.data !== prevState.prevData ||
      nextProps.type !== prevState.prevType ||
      nextProps.width !== prevState.prevWidth ||
      nextProps.height !== prevState.prevHeight ||
      nextProps.dataKey !== prevState.prevDataKey ||
      nextProps.nameKey !== prevState.prevNameKey ||
      nextProps.aspectRatio !== prevState.prevAspectRatio ||
      nextProps.nodeInset !== prevState.prevNodeInset ||
      nextProps.nodeGap !== prevState.prevNodeGap
    ) {
      const root: TreemapNode = computeNode({
        depth: 0,
        node: {
          // @ts-expect-error missing properties
          children: nextProps.data,
          x: 0,
          y: 0,
          width: nextProps.width,
          height: getTreemapRenderHeight(nextProps.height, nextProps.type),
        },
        index: 0,
        dataKey: nextProps.dataKey,
        nameKey: nextProps.nameKey,
      });
      const formatRoot: TreemapNode = squarify(root, nextProps.aspectRatio, nextProps.nodeInset, nextProps.nodeGap);

      return {
        ...prevState,
        formatRoot,
        currentRoot: root,
        nestIndex: [root],
        prevAspectRatio: nextProps.aspectRatio,
        prevData: nextProps.data,
        prevWidth: nextProps.width,
        prevHeight: nextProps.height,
        prevDataKey: nextProps.dataKey,
        prevNameKey: nextProps.nameKey,
        prevType: nextProps.type,
        prevNodeInset: nextProps.nodeInset,
        prevNodeGap: nextProps.nodeGap,
      };
    }

    return null;
  }

  handleClick = (node: TreemapNode) => {
    const { onClick, type } = this.props;
    if (type === 'nest' && node.children) {
      const { width, height, dataKey, nameKey, aspectRatio, nodeInset, nodeGap } = this.props;
      const root = computeNode({
        depth: 0,
        node: { ...node, x: 0, y: 0, width, height: getTreemapRenderHeight(height, type) },
        index: 0,
        dataKey,
        nameKey,
        // with Treemap nesting, should this continue nesting the index or start from empty string?
        nestedActiveTooltipIndex: node.tooltipIndex,
      });

      const formatRoot = squarify(root, aspectRatio, nodeInset, nodeGap);

      const { nestIndex } = this.state;
      const nextNestIndex = [...nestIndex, node];

      this.setState({
        formatRoot,
        currentRoot: root,
        nestIndex: nextNestIndex,
      });
    }
    if (onClick) {
      onClick(node);
    }
  };

  handleNestIndex(node: TreemapNode, i: number) {
    let { nestIndex } = this.state;
    const { width, height, dataKey, nameKey, aspectRatio, nodeInset, nodeGap, type } = this.props;
    const root = computeNode({
      depth: 0,
      node: { ...node, x: 0, y: 0, width, height: getTreemapRenderHeight(height, type) },
      index: 0,
      dataKey,
      nameKey,
      // with Treemap nesting, should this continue nesting the index or start from empty string?
      nestedActiveTooltipIndex: node.tooltipIndex,
    });

    const formatRoot = squarify(root, aspectRatio, nodeInset, nodeGap);

    nestIndex = nestIndex.slice(0, i + 1);
    this.setState({
      formatRoot,
      currentRoot: root,
      nestIndex,
    });
  }

  /**
   * @param root parent of the node
   * @param node the node to render
   * @param parentBranchIndex index of the top-level tile that the parent belongs to, undefined if the parent is the root
   */
  renderNode(
    root: TreemapNode,
    node: TreemapNode,
    parentBranchIndex: number | undefined,
    defaultLabels: ReadonlyMap<TooltipIndex, TreemapLabelListEntry>,
  ): ReactNode {
    const { type } = this.props;
    const nodeProps = { ...svgPropertiesNoEvents(this.props), ...node, root };
    const branchIndex = node.depth === 0 ? undefined : (parentBranchIndex ?? node.index);

    const { currentRoot } = this.state;
    const isCurrentRootChild = (currentRoot?.children || []).filter(
      (item: TreemapNode) => item.depth === node.depth && item.name === node.name,
    );

    if (!isCurrentRootChild.length && root.depth && type === 'nest') {
      return null;
    }

    return (
      <Layer
        key={`recharts-treemap-node-${nodeProps.x}-${nodeProps.y}-${nodeProps.name}`}
        className={`recharts-treemap-depth-${node.depth}`}
      >
        <TreemapNodeItem
          node={node}
          root={root}
          entry={defaultLabels.get(node.tooltipIndex)}
          branchIndex={branchIndex}
          treemapProps={this.props}
          onNestClick={this.handleClick}
          onLabelMouseEnter={this.handleLabelMouseEnter}
        />
        {node.children && node.children.length
          ? node.children.map((child: TreemapNode) => this.renderNode(node, child, branchIndex, defaultLabels))
          : null}
      </Layer>
    );
  }

  handleLabelMouseEnter = (node: TreemapNode, event: React.MouseEvent<SVGGraphicsElement>, notify = true) => {
    const { dispatch, dataKey, id, type, onMouseEnter } = this.props;
    dispatch(
      setActiveMouseOverItemIndex({
        activeIndex: node.tooltipIndex,
        activeDataKey: dataKey,
        activeCoordinate: { x: node.x + node.width / 2, y: node.y + node.height / 2 },
        activeGraphicalItemId: id,
      }),
    );
    if (notify && (!node.children?.length || type === 'nest')) {
      onMouseEnter?.(node, event);
    }
  };

  handleLabelMouseLeave = (node: TreemapNode, event: React.MouseEvent<SVGGraphicsElement>) => {
    // Match tiles: tooltip state is cleared when leaving the chart, not the item.
    if (!node.children?.length || this.props.type === 'nest') {
      this.props.onMouseLeave?.(node, event);
    }
  };

  handleLabelClick = (node: TreemapNode, event: React.MouseEvent<SVGGraphicsElement>) => {
    event.stopPropagation();
    const { dispatch, dataKey, id, type, onClick } = this.props;
    dispatch(
      setActiveClickItemIndex({
        activeIndex: node.tooltipIndex,
        activeDataKey: dataKey,
        activeCoordinate: { x: node.x + node.width / 2, y: node.y + node.height / 2 },
        activeGraphicalItemId: id,
      }),
    );
    if (type === 'nest') {
      this.handleClick(node);
    } else if (!node.children?.length) {
      onClick?.(node);
    }
  };

  getLabelListEntries(): ReadonlyArray<TreemapLabelListEntry> {
    const { formatRoot } = this.state;
    const { type, colorPanel, themeGraphicalItems, themePageBackground } = this.props;
    const entries: TreemapLabelListEntry[] = [];
    const chartAttributes = svgPropertiesNoEvents(this.props);
    const chartHasOwnColors = hasOwnColors(this.props);

    const visitNode = (root: TreemapNode, node: TreemapNode, branchIndex: number): void => {
      const nodeProps = { ...chartAttributes, ...node, root };
      const nodeHasOwnColors = chartHasOwnColors || hasOwnColors(node);
      const tileStyles = getTileStyles({
        nodeProps,
        nodeHasOwnColors,
        branchIndex,
        colorPanel,
        themeGraphicalItems,
        themePageBackground,
      });
      const { style } = nodeProps;
      const styleFill = style != null && typeof style === 'object' && 'fill' in style ? style.fill : undefined;
      const styleStroke = style != null && typeof style === 'object' && 'stroke' in style ? style.stroke : undefined;
      const fill = styleFill ?? ('fill' in nodeProps ? nodeProps.fill : tileStyles.fill);
      const stroke = styleStroke ?? ('stroke' in nodeProps ? nodeProps.stroke : tileStyles.stroke);

      const viewBox = {
        ...filterRect(node),
        upperWidth: node.width,
        lowerWidth: node.width,
      };

      entries.push({
        ...viewBox,
        viewBox,
        value: node.name,
        payload: node,
        fill: typeof fill === 'string' ? fill : undefined,
        tileStroke: typeof stroke === 'string' ? stroke : undefined,
        branchIndex,
        ignoresTheme: nodeHasOwnColors,
        onMouseEnter: event => this.handleLabelMouseEnter(nodeProps, event),
        onMouseLeave: event => this.handleLabelMouseLeave(nodeProps, event),
        onClick: event => this.handleLabelClick(nodeProps, event),
        'data-recharts-item-index': node.tooltipIndex,
      });

      if (type !== 'nest') {
        node.children?.forEach(child => visitNode(node, child, branchIndex));
      }
    };

    // Skip the synthetic layout root; nest mode exposes only its direct children.
    if (formatRoot != null) {
      formatRoot.children?.forEach(node => visitNode(formatRoot, node, node.index));
    }
    return entries;
  }

  renderAllNodes(defaultLabels: ReadonlyMap<TooltipIndex, TreemapLabelListEntry>): ReactNode {
    const { formatRoot } = this.state;

    if (!formatRoot) {
      return null;
    }

    return this.renderNode(formatRoot, formatRoot, undefined, defaultLabels);
  }

  // render nest treemap
  renderNestIndex(): React.ReactElement {
    const { nameKey, nestIndexContent } = this.props;
    const { nestIndex } = this.state;

    return (
      <div className="recharts-treemap-nest-index-wrapper" style={treemapNestIndexStyle}>
        {nestIndex.map((item: TreemapNode, i: number) => {
          // TODO need to verify nameKey type
          const rawName =
            typeof nameKey === 'string' || typeof nameKey === 'number' ? get(item, nameKey, 'root') : 'root';
          const name: string = typeof rawName === 'string' ? rawName : 'root';
          let content: ReactNode;
          if (React.isValidElement(nestIndexContent)) {
            // the cloned content is ignored at all times - let's remove it?
            content = React.cloneElement(nestIndexContent, item, i);
          }
          if (typeof nestIndexContent === 'function') {
            content = nestIndexContent(item, i);
          } else {
            content = name;
          }

          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <div
              onClick={this.handleNestIndex.bind(this, item, i)}
              key={`nest-index-${i}-${name}`}
              className="recharts-treemap-nest-index-box"
              style={{
                cursor: 'pointer',
                display: 'inline-block',
                padding: '0 7px',
                ...(this.props.themeGraphicalItems == null && { background: '#000', color: '#fff' }),
                marginRight: '3px',
                ...this.props.typography,
              }}
            >
              {content}
            </div>
          );
        })}
      </div>
    );
  }

  handleTouchMove = (e: React.TouchEvent<SVGElement>) => {
    const touchEvent = e.touches[0];
    if (touchEvent == null) {
      return;
    }
    const target = document.elementFromPoint(touchEvent.clientX, touchEvent.clientY);
    if (!(target instanceof Element) || this.state.formatRoot == null) {
      return;
    }
    const item = target.closest('[data-recharts-item-index]');
    const surface = item?.closest('svg');
    if (item == null || (surface != null && surface !== e.currentTarget)) {
      return;
    }
    const itemIndex = item.getAttribute('data-recharts-item-index');
    const activeNode: unknown = treemapPayloadSearcher(this.state.formatRoot, itemIndex);
    if (!isTreemapNode(activeNode)) {
      return;
    }

    const { dataKey, dispatch } = this.props;

    const activeCoordinate = {
      x: activeNode.x + activeNode.width / 2,
      y: activeNode.y + activeNode.height / 2,
    };

    // Treemap does not support onTouchMove prop, but it could
    // onTouchMove?.(activeNode, Number(itemIndex), e);
    dispatch(
      setActiveMouseOverItemIndex({
        activeIndex: itemIndex,
        activeDataKey: dataKey,
        activeCoordinate,
        activeGraphicalItemId: this.props.id,
      }),
    );
  };

  render() {
    const { width, height, className, style, children, type, ...others } = this.props;
    const attrs = svgPropertiesNoEvents(others);
    const entries = this.getLabelListEntries();
    const { label, content, themeGraphicalItems } = this.props;
    const useDefaultLabels = label == null || label === true;
    const hasCustomContent = React.isValidElement(content) || typeof content === 'function';
    const showDefaultLabels =
      useDefaultLabels && !hasCustomContent && (label === true || this.state.labelListCount === 0);
    const defaultEntries = showDefaultLabels ? entries.filter(isDefaultLabelVisible) : [];

    return (
      <>
        <SetTreemapTooltipEntrySettings
          dataKey={this.props.dataKey}
          nameKey={this.props.nameKey}
          stroke={this.props.stroke ?? this.props.themeGraphicalItems?.[0]?.stroke}
          fill={this.props.fill ?? this.props.themeGraphicalItems?.[0]?.fill}
          currentRoot={this.state.currentRoot}
          id={this.props.id}
        />
        <Surface
          {...attrs}
          width={width}
          height={getTreemapRenderHeight(height, type)}
          onTouchMove={this.handleTouchMove}
        >
          <AllZIndexPortals isPanorama={false}>
            {this.renderAllNodes(new Map(defaultEntries.map(entry => [entry.payload.tooltipIndex, entry])))}
            <TreemapLabelListProvider entries={entries} graphicalItems={themeGraphicalItems}>
              <TreemapConfiguredLabelsProvider
                entries={entries}
                animation={this.props}
                label={label}
                registerLabelList={this.registerLabelList}
              >
                {children}
              </TreemapConfiguredLabelsProvider>
            </TreemapLabelListProvider>
          </AllZIndexPortals>
        </Surface>
        {type === 'nest' && this.renderNestIndex()}
      </>
    );
  }
}

function TreemapDispatchInject(
  props: RequiresDefaultProps<Props, typeof defaultTreeMapProps> &
    Pick<InternalTreemapProps, 'themeGraphicalItems' | 'themePageBackground' | 'typography'>,
) {
  const dispatch = useAppDispatch();
  const width = useChartWidth();
  const height = useChartHeight();
  if (!isPositiveNumber(width) || !isPositiveNumber(height)) {
    return null;
  }
  const { id: externalId } = props;
  return (
    <RegisterGraphicalItemId id={externalId} type="treemap">
      {id => <TreemapWithState {...props} id={id} width={width} height={height} dispatch={dispatch} />}
    </RegisterGraphicalItemId>
  );
}

type TreemapThemeSlice = Partial<Pick<RechartsTheme, 'graphicalItems' | 'typography' | 'pageBackground'>>;

/**
 * The Treemap chart is used to visualize hierarchical data using nested rectangles.
 *
 * @consumes ResponsiveContainerContext
 * @consumes RechartsThemeContext
 * @provides TooltipEntrySettings
 */
export function Treemap(outsideProps: Props) {
  const theme = useBackwardsCompatibleTheme<TreemapThemeSlice>(
    (rechartsTheme: RechartsTheme) => ({
      graphicalItems: rechartsTheme.graphicalItems,
      pageBackground: getEffectivePageBackground(rechartsTheme),
      typography: rechartsTheme.typography,
    }),
    {},
    undefined,
  );
  const props = resolveDefaultProps(outsideProps, defaultTreeMapProps);
  const { className, style, width, height, throttleDelay, throttledEvents } = props;

  const [tooltipPortal, setTooltipPortal] = useState<HTMLElement | null>(null);

  return (
    <RechartsStoreProvider preloadedState={treemapPreloadedState} reduxStoreName={props.className ?? 'Treemap'}>
      <ReportChartMargin margin={defaultTreemapMargin} />
      <ReportEventSettings throttleDelay={throttleDelay} throttledEvents={throttledEvents} />
      <RechartsWrapper
        dispatchTouchEvents={false}
        className={className}
        style={style}
        width={width}
        height={height}
        /*
         * Treemap has a bug where it doesn't include strokeWidth in its dimension calculation
         * which makes the actual chart exactly {strokeWidth} larger than asked for.
         * It's not a huge deal usually, but it makes the responsive option cycle infinitely.
         */
        responsive={false}
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
        <TooltipPortalContext.Provider value={tooltipPortal}>
          <TreemapDispatchInject
            {...props}
            themeGraphicalItems={theme?.graphicalItems}
            themePageBackground={theme?.pageBackground}
            typography={theme?.typography}
          />
        </TooltipPortalContext.Provider>
      </RechartsWrapper>
    </RechartsStoreProvider>
  );
}
