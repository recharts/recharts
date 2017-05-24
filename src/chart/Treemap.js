/**
 * @fileOverview TreemapChart
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Smooth from 'react-smooth';
import classNames from 'classnames';
import _ from 'lodash';
import Surface from '../container/Surface';
import Layer from '../container/Layer';
import Rectangle from '../shape/Rectangle';
import { findChildByType, getPresentationAttributes, filterSvgElements,
  validateWidthHeight, isSsr } from '../util/ReactUtils';
import Tooltip from '../component/Tooltip';
import pureRender from '../util/PureRender';
import { getValueByDataKey } from '../util/ChartUtils';

const computeNode = ({ depth, node, index, valueKey }) => {
  const { children } = node;
  const childDepth = depth + 1;
  const computedChildren = children && children.length ?
      children.map((child, i) => (
        computeNode({ depth: childDepth, node: child, index: i, valueKey })
      )) : null;
  let value;

  if (children && children.length) {
    value = computedChildren.reduce((result, child) => (result + child.value), 0);
  } else {
    value = isNaN(node[valueKey]) || node[valueKey] <= 0 ? 0 : node[valueKey];
  }

  return {
    ...node,
    children: computedChildren,
    value, depth, index,
  };
};

const filterRect = node => (
  { x: node.x, y: node.y, width: node.width, height: node.height }
);

// Compute the area for each child based on value & scale.
const getAreaOfChildren = (children, areaValueRatio) => {
  const ratio = areaValueRatio < 0 ? 0 : areaValueRatio;

  return children.map((child) => {
    const area = child.value * ratio;

    return {
      ...child,
      area: (isNaN(area) || area <= 0) ? 0 : area,
    };
  });
};

// Computes the score for the specified row, as the worst aspect ratio.
const getWorstScore = (row, parentSize, aspectRatio) => {
  const parentArea = parentSize * parentSize;
  const rowArea = row.area * row.area;
  const { min, max } = row.reduce((result, child) => (
    {
      min: Math.min(result.min, child.area),
      max: Math.max(result.max, child.area),
    }
  ), { min: Infinity, max: 0 });

  return rowArea ? Math.max(
      (parentArea * max * aspectRatio) / rowArea,
      rowArea / (parentArea * min * aspectRatio)
    ) : Infinity;
};

const horizontalPosition = (row, parentSize, parentRect, isFlush) => {
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
    child.width = Math.min(
      rowHeight ? Math.round(child.area / rowHeight) : 0,
      parentRect.x + parentRect.width - curX
    );
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

const verticalPosition = (row, parentSize, parentRect, isFlush) => {
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
    child.height = Math.min(
      rowWidth ? Math.round(child.area / rowWidth) : 0,
      parentRect.y + parentRect.height - curY
    );
    curY += child.height;
  }
  child.z = false;
  child.height += parentRect.y + parentRect.height - curY;

  return {
    ...parentRect,
    x: parentRect.x + rowWidth,
    width: parentRect.width - rowWidth,
  };
};

const position = (row, parentSize, parentRect, isFlush) => {
  if (parentSize === parentRect.width) {
    return horizontalPosition(row, parentSize, parentRect, isFlush);
  }

  return verticalPosition(row, parentSize, parentRect, isFlush);
};

// Recursively arranges the specified node's children into squarified rows.
const squarify = (node, aspectRatio) => {
  const children = node.children;

  if (children && children.length) {
    let rect = filterRect(node);
    const row = [];
    let best = Infinity; // the best row score so far
    let child, score; // the current row score
    let size = Math.min(rect.width, rect.height); // initial orientation
    const scaleChildren = getAreaOfChildren(children, rect.width * rect.height / node.value);
    const tempChildren = scaleChildren.slice();

    row.area = 0;

    while (tempChildren.length > 0) {
      // row first
      row.push(child = tempChildren[0]);
      row.area += child.area;

      score = getWorstScore(row, size, aspectRatio);
      if (score <= best) { // continue with this orientation
        tempChildren.shift();
        best = score;
      } else { // abort, and try a different orientation
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

    return { ...node, children: scaleChildren.map(c => squarify(c, aspectRatio)) };
  }

  return node;
};

@pureRender
class Treemap extends Component {
  static displayName = 'Treemap';

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    data: PropTypes.array,
    style: PropTypes.object,
    aspectRatio: PropTypes.number,
    content: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    fill: PropTypes.string,
    stroke: PropTypes.string,
    className: PropTypes.string,
    nameKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]),
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.func]),
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),

    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,

    isAnimationActive: PropTypes.bool,
    isUpdateAnimationActive: PropTypes.bool,
    animationBegin: PropTypes.number,
    animationDuration: PropTypes.number,
    animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
  };

  static defaultProps = {
    dataKey: 'value',
    aspectRatio: 0.5 * (1 + Math.sqrt(5)),
    isAnimationActive: !isSsr(),
    isUpdateAnimationActive: !isSsr(),
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'linear',
  };

  state = this.createDefaultState();

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState(this.createDefaultState());
    }
  }
  /**
   * Returns default, reset state for the treemap chart.
   * @return {Object} Whole new state
   */
  createDefaultState() {
    return {
      isTooltipActive: false,
      activeNode: null,
    };
  }
  handleMouseEnter(node, e) {
    const { onMouseEnter, children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (tooltipItem) {
      this.setState({
        isTooltipActive: true,
        activeNode: node,
      }, () => {
        if (onMouseEnter) {
          onMouseEnter(node, e);
        }
      });
    } else if (onMouseEnter) {
      onMouseEnter(node, e);
    }
  }

  handleMouseLeave(node, e) {
    const { onMouseLeave, children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (tooltipItem) {
      this.setState({
        isTooltipActive: false,
        activeNode: null,
      }, () => {
        if (onMouseLeave) {
          onMouseLeave(node, e);
        }
      });
    } else if (onMouseLeave) {
      onMouseLeave(node, e);
    }
  }

  handleClick(node) {
    const { onClick } = this.props;

    if (onClick) {
      onClick(node);
    }
  }

  renderAnimatedItem(content, nodeProps, isLeaf) {
    const { isAnimationActive, animationBegin, animationDuration,
      animationEasing, isUpdateAnimationActive } = this.props;
    const { width, height, x, y } = nodeProps;
    const translateX = parseInt((Math.random() * 2 - 1) * width, 10);
    let event = {};

    if (isLeaf) {
      event = {
        onMouseEnter: this.handleMouseEnter.bind(this, nodeProps),
        onMouseLeave: this.handleMouseLeave.bind(this, nodeProps),
        onClick: this.handleClick.bind(this, nodeProps),
      };
    }

    return (
      <Smooth
        from={{ x, y, width, height }}
        to={{ x, y, width, height }}
        duration={animationDuration}
        easing={animationEasing}
        isActive={isUpdateAnimationActive}
      >
        {
        ({ x: currX, y: currY, width: currWidth, height: currHeight }) => (
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
              {
              this.renderContentItem(content, {
                ...nodeProps,
                isAnimationActive,
                isUpdateAnimationActive: !isUpdateAnimationActive,
                width: currWidth,
                height: currHeight,
                x: currX,
                y: currY,
              })
            }
            </Layer>
          </Smooth>
        )
      }
      </Smooth>
    );
  }

  renderContentItem(content, nodeProps) {
    if (React.isValidElement(content)) {
      return React.cloneElement(content, nodeProps);
    } else if (_.isFunction(content)) {
      return content(nodeProps);
    }

    return (
      <Rectangle
        fill="#fff"
        stroke="#000"
        {...nodeProps}
      />
    );
  }

  renderNode(root, node, i) {
    const { content } = this.props;
    const nodeProps = { ...getPresentationAttributes(this.props), ...node, root };
    const isLeaf = !node.children || !node.children.length;

    return (
      <Layer key={`recharts-treemap-node-${i}`} className={`recharts-treemap-depth-${node.depth}`}>
        {this.renderAnimatedItem(content, nodeProps, isLeaf)}
        {
          node.children && node.children.length ?
            node.children.map((child, index) => this.renderNode(node, child, index)) : null
        }
      </Layer>
    );
  }

  renderAllNodes() {
    const { width, height, data, dataKey, aspectRatio } = this.props;

    const root = computeNode({
      depth: 0,
      node: { children: data, x: 0, y: 0, width, height },
      index: 0,
      valueKey: dataKey,
    });

    const formatRoot = squarify(root, aspectRatio);

    return this.renderNode(formatRoot, formatRoot, 0);
  }

  renderTooltip() {
    const { children, nameKey } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (!tooltipItem) { return null; }

    const { width, height, dataKey } = this.props;
    const { isTooltipActive, activeNode } = this.state;
    const viewBox = { x: 0, y: 0, width, height };
    const coordinate = activeNode ? {
      x: activeNode.x + activeNode.width / 2,
      y: activeNode.y + activeNode.height / 2,
    } : null;
    const payload = isTooltipActive && activeNode ? [{
      payload: activeNode,
      name: getValueByDataKey(activeNode, nameKey, ''),
      value: getValueByDataKey(activeNode, dataKey),
    }] : [];

    return React.cloneElement(tooltipItem, {
      viewBox,
      active: isTooltipActive,
      coordinate,
      label: '',
      payload,
    });
  }

  render() {
    if (!validateWidthHeight(this)) { return null; }

    const { width, height, className, style, children, ...others } = this.props;
    const attrs = getPresentationAttributes(others);

    return (
      <div
        className={classNames('recharts-wrapper', className)}
        style={{ ...style, position: 'relative', cursor: 'default', width, height }}
      >
        <Surface {...attrs} width={width} height={height}>
          {this.renderAllNodes()}
          {filterSvgElements(children)}
        </Surface>
        {this.renderTooltip()}
      </div>
    );
  }
}

export default Treemap;
