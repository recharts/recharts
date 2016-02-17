/**
 * @fileOverview TreemapChart
 */
import React, { Component, PropTypes } from 'react';
import Surface from '../container/Surface';
import Layer from '../container/Layer';
import Rectangle from '../shape/Rectangle';
import { getPresentationAttributes, validateWidthHeight } from '../util/ReactUtils';
import classNames from 'classnames';
import invariant from 'invariant';
import pureRender from '../util/PureRender';

@pureRender
class Treemap extends Component {
  static displayName = 'Treemap';

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    data: PropTypes.array,
    style: PropTypes.object,
    ratio: PropTypes.number,
    content: PropTypes.element,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    className: PropTypes.string,
    dataKey: PropTypes.string,
  };

  static defaultProps = {
    fill: '#fff',
    stroke: '#000',
    dataKey: 'value',
    ratio: 0.5 * (1 + Math.sqrt(5)),
  };

  pad(node) {
    return { x: node.x, y: node.y, width: node.width, height: node.height };
  }

  // Compute the area for each child based on value & scale.
  scale(children, k) {
    const n = children.length;
    let i = -1;
    let child;
    let area;

    while (++i < n) {
      area = (child = children[i]).value * (k < 0 ? 0 : k);
      child.area = isNaN(area) || area <= 0 ? 0 : area;
    }
  }

  // Recursively arranges the specified node's children into squarified rows.
  squarify = (node) => {
    const children = node.children;

    if (children && children.length) {
      const rect = this.pad(node);
      const row = [];
      const remaining = children.slice(); // copy-on-write
      let child;
      let best = Infinity; // the best row score so far
      let score; // the current row score
      let u = Math.min(rect.width, rect.height); // initial orientation

      this.scale(remaining, rect.width * rect.height / node.value);
      row.area = 0;
      while (remaining.length > 0) {
        row.push(child = remaining[0]);
        row.area += child.area;

        score = this.worst(row, u);
        if (score <= best) { // continue with this orientation
          remaining.shift();
          best = score;
        } else { // abort, and try a different orientation
          row.area -= row.pop().area;
          this.position(row, u, rect, false);
          u = Math.min(rect.width, rect.height);
          row.length = row.area = 0;
          best = Infinity;
        }
      }
      if (row.length) {
        this.position(row, u, rect, true);
        row.length = row.area = 0;
      }
      children.forEach(this.squarify);
    }
  };

  // Computes the score for the specified row, as the worst aspect ratio.
  worst(row, u) {
    let newU = u;
    let s = row.area;
    let r;
    let rmax = 0;
    let rmin = Infinity;
    let i = -1;
    const n = row.length;
    const { ratio } = this.props;

    while (++i < n) {
      r = row[i].area;

      if (!r) continue;
      if (r < rmin) rmin = r;
      if (r > rmax) rmax = r;
    }
    s *= s;
    newU *= newU;

    return s
        ? Math.max((newU * rmax * ratio) / s, s / (newU * rmin * ratio))
        : Infinity;
  }

  // Positions the specified row of nodes. Modifies `rect`.
  position(row, u, rect, flush) {
    let i = -1;
    const n = row.length;
    let x = rect.x;
    let y = rect.y;
    let v = u ? Math.round(row.area / u) : 0;
    let o;

    if (u === rect.width) { // horizontal subdivision
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
  }

  computeNode(depth, node, index) {
    const { dataKey } = this.props;
    const { children, x, y, width, height, ...payload } = node;
    const childDepth = depth + 1;
    const computedChildren = children && children.length ?
      children.map(this.computeNode.bind(this, childDepth)) : null;
    let value;

    if (children && children.length) {
      value = computedChildren.reduce((a, b) => (a + b.value), 0);
    } else {
      value = isNaN(node[dataKey]) || node[dataKey] <= 0 ? 0 : node[dataKey];
    }

    return {
      children: computedChildren,
      value,
      depth,
      index,
      x,
      y,
      width,
      height,
      payload,
    };
  }

  renderDefaultNode(nodeProps) {
    return React.createElement(Rectangle, nodeProps);
  }

  renderNode(root, node, i) {
    const { content } = this.props;
    const nodeProps = { ...getPresentationAttributes(this.props), ...node, root };

    return (
      <Layer key={`recharts-treemap-node-${i}`}>
        {
          React.isValidElement(content) ?
            React.cloneElement(content, nodeProps) : this.renderDefaultNode(nodeProps)
        }
        {
          node.children && node.children.length ?
            node.children.map(this.renderNode.bind(this, root)) : null
        }
      </Layer>
    );
  }

  renderAllNodes() {
    const { width, height, data } = this.props;

    const root = this.computeNode(0, {
      children: data,
      x: 0,
      y: 0,
      width,
      height,
    }, 0);

    this.squarify(root);

    return this.renderNode(root, root, 0);
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
