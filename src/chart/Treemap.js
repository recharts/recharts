/**
 * @fileOverview TreemapChart
 */
import React, { Component, PropTypes } from 'react';
import Surface from '../container/Surface';
import Layer from '../container/Layer';
import Rectangle from '../shape/Rectangle';
import { getPresentationAttributes, validateWidthHeight } from '../util/ReactUtils';
import classNames from 'classnames';
import Smooth from 'react-smooth';
import pureRender from '../util/PureRender';
import _ from 'lodash';

const computeNode = (depth, node, index, valueKey) => {
  const { children } = node;
  const childDepth = depth + 1;
  const computedChildren = children && children.length ?
      children.map((child, i) => (
        computeNode(childDepth, child, i, valueKey)
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

const pad = (node) => (
  { x: node.x, y: node.y, width: node.width, height: node.height }
);

// Compute the area for each child based on value & scale.
const scale = (children, k) => {
  const formatK = k < 0 ? 0 : k;

  return children.map(child => {
    const area = child.value * formatK;

    return {
      ...child,
      area: (isNaN(area) || area <= 0) ? 0 : area,
    };
  });
};

// Computes the score for the specified row, as the worst aspect ratio.
const worst = (row, size, ratio) => {
  const newSize = size * size;
  const rowArea = row.area * row.area;
  const { min, max } = row.reduce((result, child) => (
    {
      min: Math.min(result.min, child.area),
      max: Math.max(result.max, child.area),
    }
  ), { min: Infinity, max: 0 });

  return rowArea
      ? Math.max((newSize * max * ratio) / rowArea, rowArea / (newSize * min * ratio))
      : Infinity;
};

// Positions the specified row of nodes. Modifies `rect`.
const position = (row, size, rect, flush) => {
  let i = -1;
  const n = row.length;
  let x = rect.x;
  let y = rect.y;
  let v = size ? Math.round(row.area / size) : 0;
  let o;

  if (size === rect.width) { // horizontal subdivision
    if (flush || v > rect.height) v = rect.height; // over+underflow
    while (++i < n) {
      o = row[i];
      o.x = x;
      o.y = y;
      o.height = v;
      x += o.width = Math.min(rect.x + rect.width - x, v ? Math.round(o.area / v) : 0);
    }
    o.z = true;
    o.width += rect.x + rect.width - x; // rounding error
    rect.y += v;
    rect.height -= v;
  } else { // vertical subdivision
    if (flush || v > rect.width) v = rect.width; // over+underflow
    while (++i < n) {
      o = row[i];
      o.x = x;
      o.y = y;
      o.width = v;
      y += o.height = Math.min(rect.y + rect.height - y, v ? Math.round(o.area / v) : 0);
    }
    o.z = false;
    o.height += rect.y + rect.height - y; // rounding error
    rect.x += v;
    rect.width -= v;
  }
};

// Recursively arranges the specified node's children into squarified rows.
const squarify = (node, ratio) => {
  const children = node.children;

  if (children && children.length) {
    const rect = pad(node);
    const row = [];
    let best = Infinity; // the best row score so far
    let score; // the current row score
    let size = Math.min(rect.width, rect.height); // initial orientation
    const scaleChildren = scale(children, rect.width * rect.height / node.value);
    const tempChildren = scaleChildren.slice();

    row.area = 0;

    let child;

    while (tempChildren.length > 0) {
      row.push(child = tempChildren[0]);
      row.area += child.area;

      score = worst(row, size, ratio);
      if (score <= best) { // continue with this orientation
        tempChildren.shift();
        best = score;
      } else { // abort, and try a different orientation
        row.area -= row.pop().area;
        position(row, size, rect, false);
        size = Math.min(rect.width, rect.height);
        row.length = row.area = 0;
        best = Infinity;
      }
    }
    if (row.length) {
      position(row, size, rect, true);
      row.length = row.area = 0;
    }

    return { ...node, children: scaleChildren.map(c => squarify(c, ratio)) };
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
    ratio: PropTypes.number,
    content: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    fill: PropTypes.string,
    stroke: PropTypes.string,
    className: PropTypes.string,
    dataKey: PropTypes.string,
    isAnimationActive: PropTypes.bool,
    isUpdateAnimationActive: PropTypes.bool,
    animationBegin: PropTypes.number,
    animationDuration: PropTypes.number,
    animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
  };

  static defaultProps = {
    fill: '#fff',
    stroke: '#000',
    dataKey: 'value',
    ratio: 0.5 * (1 + Math.sqrt(5)),
    isAnimationActive: true,
    isUpdateAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'linear',
  };

  renderAnimatedItem(content, nodeProps) {
    const {
      isAnimationActive,
      animationBegin,
      animationDuration,
      animationEasing,
      isUpdateAnimationActive,
    } = this.props;
    const { width, height, x, y } = nodeProps;
    const translateX = parseInt((Math.random() * 2 - 1) * width, 10);
    const translateY = parseInt((Math.random() * 2 - 1) * height, 10);
    const contentItem = this.renderContentItem(content, {
      ...nodeProps,
      isAnimationActive,
    });

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
          <Smooth from={`translate(${translateX}px, ${translateX}px)`}
            to="translate(0, 0)"
            attributeName="transform"
            begin={animationBegin}
            easing={animationEasing}
            isActive={isAnimationActive}
            duration={animationDuration}
          >
            <Layer>
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

    return <Rectangle { ...nodeProps } />;
  }

  renderNode(root, node, i) {
    const { content } = this.props;
    const nodeProps = { ...getPresentationAttributes(this.props), ...node, root };

    return (
      <Layer key={`recharts-treemap-node-${i}`}>
        { this.renderAnimatedItem(content, nodeProps) }
        {
          node.children && node.children.length ?
            node.children.map((child, index) => this.renderNode(node, child, index)) : null
        }
      </Layer>
    );
  }

  renderAllNodes() {
    const { width, height, data, dataKey, ratio } = this.props;

    const root = computeNode(0, {
      children: data,
      x: 0,
      y: 0,
      width,
      height,
    }, 0, dataKey);

    const formatRoot = squarify(root, ratio);

    return this.renderNode(formatRoot, formatRoot, 0);
  }

  render() {
    if (!validateWidthHeight(this)) {return null;}

    const { width, height, className, style } = this.props;

    return (
      <div className={classNames('recharts-wrapper', className)}
        style={{ position: 'relative', cursor: 'default', ...style }}
      >
        <Surface width={width} height={height}>
          {this.renderAllNodes()}
        </Surface>
      </div>
    );
  }
}

export default Treemap;
