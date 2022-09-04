/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames';
import _ from 'lodash';
/**
 * @fileOverview TreemapChart
 */
import React, { PureComponent } from 'react';
import Smooth from 'react-smooth';

import { Tooltip } from '../component/Tooltip';
import { Layer } from '../container/Layer';
import { Surface } from '../container/Surface';
import { Polygon } from '../shape/Polygon';
import { Rectangle } from '../shape/Rectangle';
import { getValueByDataKey } from '../util/ChartUtils';
import { COLOR_PANEL } from '../util/Constants';
import { uniqueId } from '../util/DataUtils';
import { getStringSize } from '../util/DOMUtils';
import { Global } from '../util/Global';
import { filterSvgElements, findChildByType, validateWidthHeight } from '../util/ReactUtils';
import { DataKey, filterProps, TreemapNode } from '../util/types';

const NODE_VALUE_KEY = 'value';

const computeNode = ({
  depth,
  node,
  index,
  valueKey,
}: {
  depth: number;
  node: TreemapNode;
  index: number;
  valueKey: DataKey<any>;
}) => {
  const { children } = node;
  const childDepth = depth + 1;
  const computedChildren =
    children && children.length
      ? children.map((child: TreemapNode, i: number) =>
          computeNode({ depth: childDepth, node: child, index: i, valueKey }),
        )
      : null;
  let nodeValue;

  if (children && children.length) {
    nodeValue = computedChildren.reduce((result: any, child: TreemapNode) => result + child[NODE_VALUE_KEY], 0);
  } else {
    // TODO need to verify valueKey
    nodeValue = _.isNaN(node[valueKey as string]) || node[valueKey as string] <= 0 ? 0 : node[valueKey as string];
  }

  return {
    ...node,
    children: computedChildren,
    [NODE_VALUE_KEY]: nodeValue,
    depth,
    index,
  };
};

const filterRect = (node: TreemapNode) => ({ x: node.x, y: node.y, width: node.width, height: node.height });

// Compute the area for each child based on value & scale.
const getAreaOfChildren = (children: TreemapNode[], areaValueRatio: number) => {
  const ratio = areaValueRatio < 0 ? 0 : areaValueRatio;

  return children.map((child: TreemapNode) => {
    const area = child[NODE_VALUE_KEY] * ratio;

    return {
      ...child,
      area: _.isNaN(area) || area <= 0 ? 0 : area,
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
  // what's z
  child.z = true;
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
    child.z = false;
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

  data?: any[];

  animationId?: number;

  style?: any;

  aspectRatio?: number;

  content?: React.ReactElement;

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

  animationDuration?: number;

  animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
}

interface State {
  isTooltipActive: boolean;

  isAnimationFinished: boolean;

  activeNode?: TreemapNode;

  formatRoot?: TreemapNode;

  currentRoot?: TreemapNode;

  nestIndex?: TreemapNode[];

  prevData?: any[];

  prevType?: 'flat' | 'nest';

  prevWidth?: number;

  prevHeight?: number;

  prevDataKey?: DataKey<any>;

  prevAspectRatio?: number;
}

const defaultState: State = {
  isTooltipActive: false,

  isAnimationFinished: false,

  activeNode: null as TreemapNode,

  formatRoot: null as TreemapNode,

  currentRoot: null as TreemapNode,

  nestIndex: [] as TreemapNode[],
};

export class Treemap extends PureComponent<Props, State> {
  static displayName = 'Treemap';

  static defaultProps = {
    aspectRatio: 0.5 * (1 + Math.sqrt(5)),
    dataKey: 'value',
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
      const root = computeNode({
        depth: 0,
        node: { children: nextProps.data, x: 0, y: 0, width: nextProps.width, height: nextProps.height } as TreemapNode,
        index: 0,
        valueKey: nextProps.dataKey,
      });
      const formatRoot = squarify(root, nextProps.aspectRatio);

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
    const { onMouseEnter, children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip.displayName);

    if (tooltipItem) {
      this.setState(
        {
          isTooltipActive: true,
          activeNode: node,
        },
        () => {
          if (onMouseEnter) {
            onMouseEnter(node, e);
          }
        },
      );
    } else if (onMouseEnter) {
      onMouseEnter(node, e);
    }
  }

  handleMouseLeave(node: TreemapNode, e: any) {
    const { onMouseLeave, children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip.displayName);

    if (tooltipItem) {
      this.setState(
        {
          isTooltipActive: false,
          activeNode: null,
        },
        () => {
          if (onMouseLeave) {
            onMouseLeave(node, e);
          }
        },
      );
    } else if (onMouseLeave) {
      onMouseLeave(node, e);
    }
  }

  handleAnimationEnd = () => {
    const { onAnimationEnd } = this.props;
    this.setState({ isAnimationFinished: true });

    if (_.isFunction(onAnimationEnd)) {
      onAnimationEnd();
    }
  };

  handleAnimationStart = () => {
    const { onAnimationStart } = this.props;
    this.setState({ isAnimationFinished: false });

    if (_.isFunction(onAnimationStart)) {
      onAnimationStart();
    }
  };

  handleClick(node: TreemapNode) {
    const { onClick, type } = this.props;
    if (type === 'nest' && node.children) {
      const { width, height, dataKey, aspectRatio } = this.props;
      const root = computeNode({
        depth: 0,
        node: { ...node, x: 0, y: 0, width, height },
        index: 0,
        valueKey: dataKey,
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
    const { width, height, dataKey, aspectRatio } = this.props;
    const root = computeNode({
      depth: 0,
      node: { ...node, x: 0, y: 0, width, height },
      index: 0,
      valueKey: dataKey,
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
          {(this.constructor as any).renderContentItem(
            content,
            {
              ...nodeProps,
              isAnimationActive: false,
              isUpdateAnimationActive: false,
              width,
              height,
              x,
              y,
            },
            type,
            colorPanel,
          )}
        </Layer>
      );
    }

    return (
      <Smooth
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
          <Smooth
            from={`translate(${translateX}px, ${translateX}px)`}
            to="translate(0, 0)"
            attributeName="transform"
            begin={animationBegin}
            easing={animationEasing}
            isActive={isAnimationActive}
            duration={animationDuration}
          >
            <Layer {...event}>
              {(() => {
                // when animation Duration , only render depth=1 nodes
                if (depth > 2 && !isAnimationFinished) {
                  return null;
                }
                return (this.constructor as any).renderContentItem(
                  content,
                  {
                    ...nodeProps,
                    isAnimationActive,
                    isUpdateAnimationActive: !isUpdateAnimationActive,
                    width: currWidth,
                    height: currHeight,
                    x: currX,
                    y: currY,
                  },
                  type,
                  colorPanel,
                );
              })()}
            </Layer>
          </Smooth>
        )}
      </Smooth>
    );
  }

  static renderContentItem(
    content: any,
    nodeProps: TreemapNode,
    type: string,
    colorPanel: string[],
  ): React.ReactElement {
    if (React.isValidElement(content)) {
      return React.cloneElement(content, nodeProps);
    }
    if (_.isFunction(content)) {
      return content(nodeProps);
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
          {..._.omit(nodeProps, 'children')}
          role="img"
        />
        {arrow}
        {text}
      </g>
    );
  }

  renderNode(root: TreemapNode, node: TreemapNode, i: number): React.ReactElement {
    const { content, type } = this.props;
    const nodeProps = { ...filterProps(this.props), ...node, root };
    const isLeaf = !node.children || !node.children.length;

    const { currentRoot } = this.state;
    const isCurrentRootChild = (currentRoot.children || []).filter(
      (item: TreemapNode) => item.depth === node.depth && item.name === node.name,
    );

    if (!isCurrentRootChild.length && root.depth && type === 'nest') {
      return null;
    }
    return (
      // eslint-disable-next-line react/no-array-index-key
      <Layer key={`recharts-treemap-node-${i}`} className={`recharts-treemap-depth-${node.depth}`}>
        {this.renderItem(content, nodeProps, isLeaf)}
        {node.children && node.children.length
          ? node.children.map((child: TreemapNode, index: number) => this.renderNode(node, child, index))
          : null}
      </Layer>
    );
  }

  renderAllNodes(): React.ReactElement {
    const { formatRoot } = this.state;

    if (!formatRoot) {
      return null;
    }

    return this.renderNode(formatRoot, formatRoot, 0);
  }

  renderTooltip(): React.ReactElement {
    const { children, nameKey } = this.props;
    const tooltipItem = findChildByType(children, Tooltip.displayName);

    if (!tooltipItem) {
      return null;
    }

    const { width, height } = this.props;
    const { isTooltipActive, activeNode } = this.state;
    const viewBox = { x: 0, y: 0, width, height };
    const coordinate = activeNode
      ? {
          x: activeNode.x + activeNode.width / 2,
          y: activeNode.y + activeNode.height / 2,
        }
      : null;
    const payload =
      isTooltipActive && activeNode
        ? [
            {
              payload: activeNode,
              name: getValueByDataKey(activeNode, nameKey, ''),
              value: getValueByDataKey(activeNode, NODE_VALUE_KEY),
            },
          ]
        : [];

    return React.cloneElement(tooltipItem as React.DetailedReactHTMLElement<any, HTMLElement>, {
      viewBox,
      active: isTooltipActive,
      coordinate,
      label: '',
      payload,
    });
  }

  // render nest treemap
  renderNestIndex(): React.ReactElement {
    const { nameKey, nestIndexContent } = this.props;
    const { nestIndex } = this.state;

    return (
      <div className="recharts-treemap-nest-index-wrapper" style={{ marginTop: '8px', textAlign: 'center' }}>
        {nestIndex.map((item: TreemapNode, i: number) => {
          // TODO need to verify nameKey type
          const name = _.get(item, nameKey as string, 'root');
          let content = null;
          if (React.isValidElement(nestIndexContent)) {
            content = React.cloneElement(nestIndexContent, item, i);
          }
          if (_.isFunction(nestIndexContent)) {
            content = nestIndexContent(item, i);
          } else {
            content = name;
          }

          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
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

  render() {
    if (!validateWidthHeight(this)) {
      return null;
    }

    const { width, height, className, style, children, type, ...others } = this.props;
    const attrs = filterProps(others);

    return (
      <div
        className={classNames('recharts-wrapper', className)}
        style={{ ...style, position: 'relative', cursor: 'default', width, height }}
        role="region"
      >
        <Surface {...attrs} width={width} height={type === 'nest' ? height - 30 : height}>
          {this.renderAllNodes()}
          {filterSvgElements(children)}
        </Surface>
        {this.renderTooltip()}
        {type === 'nest' && this.renderNestIndex()}
      </div>
    );
  }
}
