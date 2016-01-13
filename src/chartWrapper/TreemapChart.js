import React, { PropTypes } from 'react';

import Surface from '../container/Surface';
import Layer from '../container/Layer';
import Rectangle from '../shape/Rectangle';

import ReactUtils from '../util/ReactUtils';

class TreemapChart extends React.Component {
  static displayName = 'TreemapChart';

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    data: PropTypes.array,
    style: PropTypes.object,
    ratio: PropTypes.number,
    customContent: PropTypes.element,
    fill: PropTypes.string,
    stroke: PropTypes.string,
  };

  static defaultProps = {
    fill: '#fff',
    stroke: '#000',
  };


  constructor(props) {
    super(props);
  }

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
  squarify(node) {
    const children = node.children;

    if (children && children.length) {
      const rect = this.pad(node);
      const row = [];
      const remaining = children.slice(); // copy-on-write
      let child;
      let best = Infinity; // the best row score so far
      let score; // the current row score
      let u = Math.min(rect.width, rect.height); // initial orientation
      let n = remaining.length;

      this.scale(remaining, rect.width * rect.height / node.value);
      row.area = 0;
      while (n > 0) {
        row.push(child = remaining[n - 1]);
        row.area += child.area;

        score = this.worst(row, u);
        if (score <= best) { // continue with this orientation
          remaining.pop();
          best = score;
        } else { // abort, and try a different orientation
          row.area -= row.pop().area;
          this.position(row, u, rect, false);
          u = Math.min(rect.width, rect.height);
          row.length = row.area = 0;
          best = Infinity;
        }

        n = remaining.length;
      }
      if (row.length) {
        this.position(row, u, rect, true);
        row.length = row.area = 0;
      }
      children.forEach(this.squarify);
    }
  }

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

  renderDefaultNode({node}) {
    return React.createElement(Rectangle, {...ReactUtils.getPresentationAttributes(this.props), ...node});
  }

  renderAllNodes() {
    const { width, height, data, customContent } = this.props;

    const nodes = {
      value: data.reduce((a, b) => (a + b.value), 0),
      children: data,
      x: 0,
      y: 0,
      width,
      height,
    };

    this.squarify(nodes);

    return nodes.children.map((v, i) => {
      return (
        <Layer key={`recharts-treemap-node-${i}`}>
          {React.isValidElement(customContent) ?
            React.cloneElement(customContent, { node: v, index: i }) :
            this.renderDefaultNode({node: v, index: i})
          }
        </Layer>
      );
    });
  }

  render() {
    const { width, height } = this.props;

    return (
      <Surface width={width} height={height}>
        {this.renderAllNodes()}
      </Surface>
    );
  }
}

export default TreemapChart;
