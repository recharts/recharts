import * as React from 'react';
import { PureComponent, ReactNode, useCallback, useState } from 'react';
import omit from 'es-toolkit/compat/omit';
import get from 'es-toolkit/compat/get';

import { Layer } from '../container/Layer';
import { Surface } from '../container/Surface';
import { Polygon } from '../shape/Polygon';
import { Rectangle } from '../shape/Rectangle';
import { getValueByDataKey } from '../util/ChartUtils';
import { COLOR_PANEL } from '../util/Constants';
import { isNan, uniqueId } from '../util/DataUtils';
import { getStringSize } from '../util/DOMUtils';
import { Global } from '../util/Global';
import {
  AnimationDuration,
  AnimationTiming,
  Coordinate,
  DataKey,
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
import { useAppDispatch } from '../state/hooks';
import { AppDispatch } from '../state/store';
import { isPositiveNumber } from '../util/isWellBehavedNumber';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { CSSTransitionAnimate } from '../animation/CSSTransitionAnimate';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';

const NODE_VALUE_KEY = 'value';

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

  [k: string]: any;
}

export const treemapPayloadSearcher: TooltipPayloadSearcher<TreemapNode, TreemapNode> = (
  data: TreemapNode,
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

export const computeNode = ({
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
  dataKey: DataKey<unknown>;
  nameKey: DataKey<unknown>;
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
    nodeValue = computedChildren.reduce((result: number, child: TreemapNode) => result + child[NODE_VALUE_KEY], 0);
  } else {
    // TODO need to verify dataKey
    nodeValue = isNan(node[dataKey as string]) || node[dataKey as string] <= 0 ? 0 : node[dataKey as string];
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
const squarify = (node: TreemapNode, aspectRatio: number): TreemapNode => {
  const { children } = node;

  if (children && children.length) {
    let rect: RectanglePosition = filterRect(node);
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
      // row first
      // eslint-disable-next-line prefer-destructuring
      row.push((child = tempChildren[0]));
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

    return {
      ...node,
      children: scaleChildren.map(c => squarify(c, aspectRatio)),
    };
  }

  return node;
};

type TreemapContentType = ReactNode | ((props: TreemapNode) => React.ReactElement);

export interface Props {
  width?: number | Percent;

  height?: number | Percent;

  data?: ReadonlyArray<TreemapDataType>;

  /**
   * @deprecated unused prop, doesn't do anything, use `key` instead
   */
  animationId?: number;

  style?: React.CSSProperties;

  /**
   * This is aspect ratio of the individual treemap rectangles.
   * If you want to define aspect ratio of the chart itself, set it via the `style` prop:
   * e.g. `<Treemap style={{ aspectRatio: 4 / 3 }}>`
   */
  aspectRatio?: number;

  /**
   * If true, then it will listen to container size changes and adapt the SVG chart accordingly.
   * If false, then it renders the chart at the specified width and height and will stay that way
   * even if the container size changes.
   *
   * This is similar to ResponsiveContainer but without the need for an extra wrapper component.
   * The `responsive` prop also uses standard CSS sizing rules, instead of custom resolution logic (like ResponsiveContainer does).
   * @default false
   */
  responsive?: boolean;

  content?: TreemapContentType;

  fill?: string;

  stroke?: string;

  className?: string;

  nameKey?: DataKey<any>;

  dataKey?: DataKey<any>;

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

  colorPanel?: [];

  // customize nest index content
  nestIndexContent?: React.ReactElement | ((item: TreemapNode, i: number) => ReactNode);

  onAnimationStart?: () => void;

  onAnimationEnd?: () => void;

  onMouseEnter?: (node: TreemapNode, e: React.MouseEvent) => void;

  onMouseLeave?: (node: TreemapNode, e: React.MouseEvent) => void;

  onClick?: (node: TreemapNode) => void;

  isAnimationActive?: boolean;

  isUpdateAnimationActive?: boolean;

  animationBegin?: number;

  animationDuration?: AnimationDuration;

  animationEasing?: AnimationTiming;
}

interface State {
  isAnimationFinished: boolean;
  formatRoot: TreemapNode | null;
  currentRoot: TreemapNode | null;
  nestIndex: Array<TreemapNode>;
  prevData?: ReadonlyArray<TreemapDataType>;
  prevType?: 'flat' | 'nest';
  prevWidth?: number;
  prevHeight?: number;
  prevDataKey: DataKey<any>;
  prevAspectRatio: number;
}

const defaultTreeMapProps = {
  aspectRatio: 0.5 * (1 + Math.sqrt(5)),
  dataKey: 'value',
  nameKey: 'name',
  type: 'flat',
  isAnimationActive: !Global.isSsr,
  isUpdateAnimationActive: !Global.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'linear',
  responsive: false,
} as const satisfies Partial<Props>;

const defaultState: State = {
  isAnimationFinished: false,
  formatRoot: null,
  currentRoot: null,
  nestIndex: [],
  prevAspectRatio: defaultTreeMapProps.aspectRatio,
  prevDataKey: defaultTreeMapProps.dataKey,
};

type ContentItemProps = {
  content: TreemapContentType;
  nodeProps: TreemapNode;
  type: string;
  colorPanel: string[] | undefined;
  dataKey: DataKey<any>;
  onClick?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
  onMouseEnter?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
  onMouseLeave?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
};

function ContentItem({
  content,
  nodeProps,
  type,
  colorPanel,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: ContentItemProps): React.ReactElement {
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
  const { x, y, width, height, index } = nodeProps;
  let arrow = null;
  if (width > 10 && height > 10 && nodeProps.children && type === 'nest') {
    arrow = (
      <Polygon
        points={[
          { x: x + 2, y: y + height / 2 },
          { x: x + 6, y: y + height / 2 + 3 },
          { x: x + 2, y: y + height / 2 + 6 },
        ]}
      />
    );
  }
  let text = null;
  const nameSize = getStringSize(nodeProps.name);
  if (width > 20 && height > 20 && nameSize.width < width && nameSize.height < height) {
    text = (
      <text x={x + 8} y={y + height / 2 + 7} fontSize={14}>
        {nodeProps.name}
      </text>
    );
  }

  const colors = colorPanel || COLOR_PANEL;
  return (
    <g>
      <Rectangle
        fill={nodeProps.depth < 2 ? colors[index % colors.length] : 'rgba(255,255,255,0)'}
        stroke="#fff"
        {...omit(nodeProps, ['children'])}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        data-recharts-item-index={nodeProps.tooltipIndex}
      />
      {arrow}
      {text}
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
      }),
    );
  };
  return <ContentItem {...props} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} />;
}

function getTooltipEntrySettings({
  props,
  currentRoot,
}: {
  props: Props;
  currentRoot: TreemapNode | null;
}): TooltipPayloadConfiguration {
  const { dataKey, nameKey, stroke, fill } = props;
  return {
    dataDefinedOnItem: currentRoot,
    positions: undefined, // TODO I think Treemap has the capability of computing positions and supporting defaultIndex? Except it doesn't yet
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
    },
  };
}

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
  isLeaf,
  treemapProps,
  onNestClick,
}: {
  content: TreemapContentType;
  nodeProps: TreemapNode;
  isLeaf: boolean;
  treemapProps: InternalTreemapProps;
  onNestClick: (node: TreemapNode) => void;
}): ReactNode {
  const {
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
  } = treemapProps;
  const { width, height, x, y } = nodeProps;
  const translateX = -x - width;
  const translateY = 0;

  const onMouseEnter = (e: React.MouseEvent) => {
    if ((isLeaf || type === 'nest') && typeof onMouseEnterFromProps === 'function') {
      onMouseEnterFromProps(nodeProps, e);
    }
  };

  const onMouseLeave = (e: React.MouseEvent) => {
    if ((isLeaf || type === 'nest') && typeof onMouseLeaveFromProps === 'function') {
      onMouseLeaveFromProps(nodeProps, e);
    }
  };

  const onClick = () => {
    if (type === 'nest') {
      onNestClick(nodeProps);
    }
    if ((isLeaf || type === 'nest') && typeof onItemClickFromProps === 'function') {
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
      from={`translate(${translateX}px, ${translateY}px)`}
      to="translate(0, 0)"
      attributeName="transform"
      begin={animationBegin}
      easing={animationEasing}
      isActive={isAnimationActive}
      duration={animationDuration}
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
    >
      {style => (
        <Layer
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
          style={{ ...style, transformOrigin: `${x} ${y}` }}
        >
          <ContentItemWithEvents
            content={content}
            dataKey={dataKey}
            nodeProps={{
              ...nodeProps,
              isAnimationActive,
              isUpdateAnimationActive: !isUpdateAnimationActive,
              width,
              height,
              x,
              y,
            }}
            type={type}
            colorPanel={colorPanel}
          />
        </Layer>
      )}
    </CSSTransitionAnimate>
  );
}

type InternalTreemapProps = RequiresDefaultProps<Props, typeof defaultTreeMapProps> & {
  width: number;
  height: number;
  dispatch: AppDispatch;
};

class TreemapWithState extends PureComponent<InternalTreemapProps, State> {
  static displayName = 'Treemap';

  state = {
    ...defaultState,
  };

  static getDerivedStateFromProps(nextProps: InternalTreemapProps, prevState: State): State | null {
    if (
      nextProps.data !== prevState.prevData ||
      nextProps.type !== prevState.prevType ||
      nextProps.width !== prevState.prevWidth ||
      nextProps.height !== prevState.prevHeight ||
      nextProps.dataKey !== prevState.prevDataKey ||
      nextProps.aspectRatio !== prevState.prevAspectRatio
    ) {
      const root: TreemapNode = computeNode({
        depth: 0,
        // @ts-expect-error missing properties
        node: { children: nextProps.data, x: 0, y: 0, width: nextProps.width, height: nextProps.height },
        index: 0,
        dataKey: nextProps.dataKey,
        nameKey: nextProps.nameKey,
      });
      const formatRoot: TreemapNode = squarify(root, nextProps.aspectRatio);

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
        prevType: nextProps.type,
      };
    }

    return null;
  }

  handleClick = (node: TreemapNode) => {
    const { onClick, type } = this.props;
    if (type === 'nest' && node.children) {
      const { width, height, dataKey, nameKey, aspectRatio } = this.props;
      const root = computeNode({
        depth: 0,
        node: { ...node, x: 0, y: 0, width, height },
        index: 0,
        dataKey,
        nameKey,
        // with Treemap nesting, should this continue nesting the index or start from empty string?
        nestedActiveTooltipIndex: node.tooltipIndex,
      });

      const formatRoot = squarify(root, aspectRatio);

      const { nestIndex } = this.state;
      nestIndex.push(node);

      this.setState({
        formatRoot,
        currentRoot: root,
        nestIndex,
      });
    }
    if (onClick) {
      onClick(node);
    }
  };

  handleNestIndex(node: TreemapNode, i: number) {
    let { nestIndex } = this.state;
    const { width, height, dataKey, nameKey, aspectRatio } = this.props;
    const root = computeNode({
      depth: 0,
      node: { ...node, x: 0, y: 0, width, height },
      index: 0,
      dataKey,
      nameKey,
      // with Treemap nesting, should this continue nesting the index or start from empty string?
      nestedActiveTooltipIndex: node.tooltipIndex,
    });

    const formatRoot = squarify(root, aspectRatio);

    nestIndex = nestIndex.slice(0, i + 1);
    this.setState({
      formatRoot,
      currentRoot: node,
      nestIndex,
    });
  }

  renderNode(root: TreemapNode, node: TreemapNode): ReactNode {
    const { content, type } = this.props;
    const nodeProps = { ...svgPropertiesNoEvents(this.props), ...node, root };
    const isLeaf = !node.children || !node.children.length;

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
        <TreemapItem
          isLeaf={isLeaf}
          content={content}
          nodeProps={nodeProps}
          treemapProps={this.props}
          onNestClick={this.handleClick}
        />
        {node.children && node.children.length
          ? node.children.map((child: TreemapNode) => this.renderNode(node, child))
          : null}
      </Layer>
    );
  }

  renderAllNodes(): ReactNode {
    const { formatRoot } = this.state;

    if (!formatRoot) {
      return null;
    }

    return this.renderNode(formatRoot, formatRoot);
  }

  // render nest treemap
  renderNestIndex(): React.ReactElement {
    const { nameKey, nestIndexContent } = this.props;
    const { nestIndex } = this.state;

    return (
      <div className="recharts-treemap-nest-index-wrapper" style={{ marginTop: '8px', textAlign: 'center' }}>
        {nestIndex.map((item: TreemapNode, i: number) => {
          // TODO need to verify nameKey type
          const name: string = get(item, nameKey as string, 'root');
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
              key={`nest-index-${uniqueId()}`}
              className="recharts-treemap-nest-index-box"
              style={{
                cursor: 'pointer',
                display: 'inline-block',
                padding: '0 7px',
                background: '#000',
                color: '#fff',
                marginRight: '3px',
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
    const target = document.elementFromPoint(touchEvent.clientX, touchEvent.clientY);
    if (!target || !target.getAttribute || this.state.formatRoot == null) {
      return;
    }
    const itemIndex = target.getAttribute('data-recharts-item-index');
    const activeNode = treemapPayloadSearcher(this.state.formatRoot, itemIndex);
    if (!activeNode) {
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
      }),
    );
  };

  render() {
    const { width, height, className, style, children, type, responsive, ...others } = this.props;
    const attrs = svgPropertiesNoEvents(others);

    return (
      <>
        <SetTooltipEntrySettings
          fn={getTooltipEntrySettings}
          args={{ props: this.props, currentRoot: this.state.currentRoot }}
        />
        <Surface
          {...attrs}
          width={width}
          height={type === 'nest' ? height - 30 : height}
          onTouchMove={this.handleTouchMove}
        >
          {this.renderAllNodes()}
          {children}
        </Surface>
        {type === 'nest' && this.renderNestIndex()}
      </>
    );
  }
}

function TreemapDispatchInject(props: RequiresDefaultProps<Props, typeof defaultTreeMapProps>) {
  const dispatch = useAppDispatch();
  const width = useChartWidth();
  const height = useChartHeight();
  if (!isPositiveNumber(width) || !isPositiveNumber(height)) {
    return null;
  }
  return <TreemapWithState {...props} width={width} height={height} dispatch={dispatch} />;
}

export function Treemap(outsideProps: Props) {
  const props = resolveDefaultProps(outsideProps, defaultTreeMapProps);
  const { className, style, width, height, responsive = false } = props;

  const [tooltipPortal, setTooltipPortal] = useState<HTMLElement | null>(null);

  return (
    <RechartsStoreProvider preloadedState={{ options }} reduxStoreName={props.className ?? 'Treemap'}>
      <ReportChartMargin margin={defaultTreemapMargin} />
      <RechartsWrapper
        dispatchTouchEvents={false}
        className={className}
        style={style}
        width={width}
        height={height}
        responsive={responsive}
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
          <TreemapDispatchInject {...props} />
        </TooltipPortalContext.Provider>
      </RechartsWrapper>
    </RechartsStoreProvider>
  );
}
