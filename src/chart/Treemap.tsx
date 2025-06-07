import * as React from 'react';
import { PureComponent } from 'react';
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
import { filterProps } from '../util/ReactUtils';
import { AnimationDuration, AnimationTiming, DataKey, Margin } from '../util/types';
import { ReportChartMargin, ReportChartSize } from '../context/chartLayoutContext';
import { TooltipPortalContext } from '../context/tooltipPortalContext';
import { RechartsWrapper } from './RechartsWrapper';
import {
  TooltipIndex,
  TooltipPayloadConfiguration,
  TooltipPayloadSearcher,
  setActiveClickItemIndex,
  setActiveMouseOverItemIndex,
} from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { ChartOptions } from '../state/optionsSlice';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import { useAppDispatch } from '../state/hooks';
import { AppDispatch } from '../state/store';
import { isPositiveNumber } from '../util/isWellBehavedNumber';
import { Animate } from '../animation/Animate';

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
  children: ReadonlyArray<TreemapNode>;
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
  dataKey: DataKey<any>;
  nameKey: DataKey<any>;
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

  if (children && children.length) {
    nodeValue = computedChildren.reduce((result: any, child: TreemapNode) => result + child[NODE_VALUE_KEY], 0);
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

const filterRect = (node: TreemapNode) => ({ x: node.x, y: node.y, width: node.width, height: node.height });

// Compute the area for each child based on value & scale.
const getAreaOfChildren = (children: ReadonlyArray<TreemapNode>, areaValueRatio: number) => {
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
const getWorstScore = (row: any, parentSize: number, aspectRatio: number) => {
  const parentArea = parentSize * parentSize;
  const rowArea = row.area * row.area;
  const { min, max } = row.reduce(
    (result: any, child: any) => ({
      min: Math.min(result.min, child.area),
      max: Math.max(result.max, child.area),
    }),
    { min: Infinity, max: 0 },
  );

  return rowArea
    ? Math.max((parentArea * max * aspectRatio) / rowArea, rowArea / (parentArea * min * aspectRatio))
    : Infinity;
};

const horizontalPosition = (row: any, parentSize: number, parentRect: TreemapNode, isFlush: boolean) => {
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
  child.width += parentRect.x + parentRect.width - curX;

  return {
    ...parentRect,
    y: parentRect.y + rowHeight,
    height: parentRect.height - rowHeight,
  };
};

const verticalPosition = (row: any, parentSize: number, parentRect: TreemapNode, isFlush: boolean): TreemapNode => {
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

const position = (row: any, parentSize: number, parentRect: TreemapNode, isFlush: boolean): TreemapNode => {
  if (parentSize === parentRect.width) {
    return horizontalPosition(row, parentSize, parentRect, isFlush);
  }

  return verticalPosition(row, parentSize, parentRect, isFlush);
};

// Recursively arranges the specified node's children into squarified rows.
const squarify = (node: TreemapNode, aspectRatio: number): TreemapNode => {
  const { children } = node;

  if (children && children.length) {
    let rect = filterRect(node) as any;
    // maybe a bug
    const row = [] as any;
    let best = Infinity; // the best row score so far
    let child, score; // the current row score
    let size = Math.min(rect.width, rect.height); // initial orientation
    const scaleChildren = getAreaOfChildren(children, (rect.width * rect.height) / node[NODE_VALUE_KEY]);
    const tempChildren = scaleChildren.slice();

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
        row.area -= row.pop().area;
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

export interface Props {
  width?: number;

  height?: number;

  data?: ReadonlyArray<TreemapDataType>;

  animationId?: number;

  style?: any;

  aspectRatio?: number;

  content?: React.ReactElement | ((props: TreemapNode) => React.ReactElement);

  fill?: string;

  stroke?: string;

  className?: string;

  nameKey?: DataKey<any>;

  dataKey?: DataKey<any>;

  children?: any;

  // optional values flat/nest, flat show whole treemap, nest only show depth=1 node
  type?: 'flat' | 'nest';

  colorPanel?: [];

  // customize nest index content
  nestIndexContent?: React.ReactElement | ((item: any, i: number) => any);

  onAnimationStart?: () => void;

  onAnimationEnd?: () => void;

  onMouseEnter?: (node: TreemapNode, e: any) => void;

  onMouseLeave?: (node: TreemapNode, e: any) => void;

  onClick?: (node: TreemapNode) => void;

  isAnimationActive?: boolean;

  isUpdateAnimationActive?: boolean;

  animationBegin?: number;

  animationDuration?: AnimationDuration;

  animationEasing?: AnimationTiming;
}

interface State {
  isAnimationFinished: boolean;

  formatRoot?: TreemapNode;

  currentRoot?: TreemapNode;

  nestIndex?: TreemapNode[];

  prevData?: ReadonlyArray<TreemapDataType>;

  prevType?: 'flat' | 'nest';

  prevWidth?: number;

  prevHeight?: number;

  prevDataKey?: DataKey<any>;

  prevAspectRatio?: number;

  tooltipPortal?: HTMLElement | null;
}

const defaultState: State = {
  isAnimationFinished: false,

  formatRoot: null as TreemapNode,

  currentRoot: null as TreemapNode,

  nestIndex: [] as TreemapNode[],
};

type ContentItemProps = {
  content: any;
  nodeProps: TreemapNode;
  type: string;
  colorPanel: string[];
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
  const activeCoordinate = props.nodeProps
    ? {
        x: props.nodeProps.x + props.nodeProps.width / 2,
        y: props.nodeProps.y + props.nodeProps.height / 2,
      }
    : null;

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

type InternalTreemapProps = Props & {
  dispatch: AppDispatch;
};

class TreemapWithState extends PureComponent<InternalTreemapProps, State> {
  static displayName = 'Treemap';

  static defaultProps = {
    aspectRatio: 0.5 * (1 + Math.sqrt(5)),
    dataKey: 'value',
    nameKey: 'name',
    type: 'flat',
    isAnimationActive: !Global.isSsr,
    isUpdateAnimationActive: !Global.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'linear',
  };

  state = {
    ...defaultState,
  };

  static getDerivedStateFromProps(nextProps: Props, prevState: State): State {
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

  handleMouseEnter(node: TreemapNode, e: any) {
    e.persist();
    const { onMouseEnter } = this.props;

    if (onMouseEnter) {
      onMouseEnter(node, e);
    }
  }

  handleMouseLeave(node: TreemapNode, e: any) {
    e.persist();
    const { onMouseLeave } = this.props;

    if (onMouseLeave) {
      onMouseLeave(node, e);
    }
  }

  handleAnimationEnd = () => {
    const { onAnimationEnd } = this.props;
    this.setState({ isAnimationFinished: true });

    if (typeof onAnimationEnd === 'function') {
      onAnimationEnd();
    }
  };

  handleAnimationStart = () => {
    const { onAnimationStart } = this.props;
    this.setState({ isAnimationFinished: false });

    if (typeof onAnimationStart === 'function') {
      onAnimationStart();
    }
  };

  handleClick(node: TreemapNode) {
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
  }

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

  renderItem(content: any, nodeProps: TreemapNode, isLeaf: boolean): React.ReactElement {
    const {
      isAnimationActive,
      animationBegin,
      animationDuration,
      animationEasing,
      isUpdateAnimationActive,
      type,
      animationId,
      colorPanel,
      dataKey,
    } = this.props;
    const { isAnimationFinished } = this.state;
    const { width, height, x, y, depth } = nodeProps;
    const translateX = parseInt(`${(Math.random() * 2 - 1) * width}`, 10);
    let event = {} as any;
    if (isLeaf || type === 'nest') {
      event = {
        onMouseEnter: this.handleMouseEnter.bind(this, nodeProps),
        onMouseLeave: this.handleMouseLeave.bind(this, nodeProps),
        onClick: this.handleClick.bind(this, nodeProps),
      };
    }

    if (!isAnimationActive) {
      return (
        <Layer {...event}>
          <ContentItemWithEvents
            content={content}
            dataKey={dataKey}
            nodeProps={{
              ...nodeProps,
              isAnimationActive: false,
              isUpdateAnimationActive: false,
              width,
              height,
              x,
              y,
            }}
            type={type}
            colorPanel={colorPanel}
          />
        </Layer>
      );
    }

    return (
      <Animate
        begin={animationBegin}
        duration={animationDuration}
        isActive={isAnimationActive}
        easing={animationEasing}
        key={`treemap-${animationId}`}
        from={{ x, y, width, height }}
        to={{ x, y, width, height }}
        onAnimationStart={this.handleAnimationStart}
        onAnimationEnd={this.handleAnimationEnd}
      >
        {({ x: currX, y: currY, width: currWidth, height: currHeight }: TreemapNode) => (
          <Animate
            // @ts-expect-error TODO - fix the type error
            from={`translate(${translateX}px, ${translateX}px)`}
            // @ts-expect-error TODO - fix the type error
            to="translate(0, 0)"
            attributeName="transform"
            begin={animationBegin}
            easing={animationEasing}
            isActive={isAnimationActive}
            duration={animationDuration}
          >
            <Layer {...event}>
              {/* when animation is in progress , only render depth=1 nodes */}
              {/* Why is his condition here, after Smooth and Smooth render? Why not return earlier, before Smooth is rendered? */}
              {depth > 2 && !isAnimationFinished ? null : (
                <ContentItemWithEvents
                  content={content}
                  dataKey={dataKey}
                  nodeProps={{
                    ...nodeProps,
                    isAnimationActive,
                    isUpdateAnimationActive: !isUpdateAnimationActive,
                    width: currWidth,
                    height: currHeight,
                    x: currX,
                    y: currY,
                  }}
                  type={type}
                  colorPanel={colorPanel}
                />
              )}
            </Layer>
          </Animate>
        )}
      </Animate>
    );
  }

  renderNode(root: TreemapNode, node: TreemapNode): React.ReactElement {
    const { content, type } = this.props;
    const nodeProps = { ...filterProps(this.props, false), ...node, root };
    const isLeaf = !node.children || !node.children.length;

    const { currentRoot } = this.state;
    const isCurrentRootChild = (currentRoot.children || []).filter(
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
        {this.renderItem(content, nodeProps, isLeaf)}
        {node.children && node.children.length
          ? node.children.map((child: TreemapNode) => this.renderNode(node, child))
          : null}
      </Layer>
    );
  }

  renderAllNodes(): React.ReactElement {
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
          const name = get(item, nameKey as string, 'root');
          let content = null;
          if (React.isValidElement(nestIndexContent)) {
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

  handleTouchMove = (_state: never, e: React.TouchEvent<SVGElement>) => {
    const touchEvent = e.touches[0];
    const target = document.elementFromPoint(touchEvent.clientX, touchEvent.clientY);
    if (!target || !target.getAttribute) {
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
    const { width, height, className, style, children, type, ...others } = this.props;
    const attrs = filterProps(others, false);

    return (
      <TooltipPortalContext.Provider value={this.state.tooltipPortal}>
        <SetTooltipEntrySettings
          fn={getTooltipEntrySettings}
          args={{ props: this.props, currentRoot: this.state.currentRoot }}
        />
        <RechartsWrapper
          className={className}
          style={style}
          width={width}
          height={height}
          ref={(node: HTMLDivElement) => {
            if (this.state.tooltipPortal == null) {
              this.setState({ tooltipPortal: node });
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
          onTouchMove={this.handleTouchMove}
          onTouchEnd={undefined}
        >
          <Surface {...attrs} width={width} height={type === 'nest' ? height - 30 : height}>
            {this.renderAllNodes()}
            {children}
          </Surface>
          {type === 'nest' && this.renderNestIndex()}
        </RechartsWrapper>
      </TooltipPortalContext.Provider>
    );
  }
}

function TreemapDispatchInject(props: Props) {
  const dispatch = useAppDispatch();
  return <TreemapWithState {...props} dispatch={dispatch} />;
}

export function Treemap(props: Props) {
  const { width, height } = props;

  if (!isPositiveNumber(width) || !isPositiveNumber(height)) {
    return null;
  }

  return (
    <RechartsStoreProvider preloadedState={{ options }} reduxStoreName={props.className ?? 'Treemap'}>
      <ReportChartSize width={width} height={height} />
      <ReportChartMargin margin={defaultTreemapMargin} />
      <TreemapDispatchInject {...props} />
    </RechartsStoreProvider>
  );
}
