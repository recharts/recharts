import React, {PropTypes} from 'react';
import ReactUtils from '../util/ReactUtils';
import Surface from '../container/Surface';
import Layer from '../container/Layer';

const TreemapChart = React.createClass({
  pad(node) {
    return {x: node.x, y: node.y, dx: node.dx, dy: node.dy};
  },

  // Compute the area for each child based on value & scale.
  scale(children, k) {
    let i = -1,
        n = children.length,
        child,
        area;
    while (++i < n) {
      area = (child = children[i]).value * (k < 0 ? 0 : k);
      child.area = isNaN(area) || area <= 0 ? 0 : area;
    }
  },

  // Recursively arranges the specified node's children into squarified rows.
  squarify(node) {
    let children = node.children;
    if (children && children.length) {
      let rect = this.pad(node),
          row = [],
          remaining = children.slice(), // copy-on-write
          child,
          best = Infinity, // the best row score so far
          score, // the current row score
          u = Math.min(rect.dx, rect.dy), // initial orientation
          n;
      this.scale(remaining, rect.dx * rect.dy / node.value);
      row.area = 0;
      while ((n = remaining.length) > 0) {
        row.push(child = remaining[n - 1]);
        row.area += child.area;
        if ((score = this.worst(row, u)) <= best) { // continue with this orientation
          remaining.pop();
          best = score;
        } else { // abort, and try a different orientation
          row.area -= row.pop().area;
          this.position(row, u, rect, false);
          u = Math.min(rect.dx, rect.dy);
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
  },

  // Computes the score for the specified row, as the worst aspect ratio.
  worst(row, u) {
    let s = row.area,
        r,
        rmax = 0,
        rmin = Infinity,
        i = -1,
        n = row.length;
    const {ratio} = this.props;

    while (++i < n) {
      if (!(r = row[i].area)) continue;
      if (r < rmin) rmin = r;
      if (r > rmax) rmax = r;
    }
    s *= s;
    u *= u;
    return s
        ? Math.max((u * rmax * ratio) / s, s / (u * rmin * ratio))
        : Infinity;
  },

  // Positions the specified row of nodes. Modifies `rect`.
  position(row, u, rect, flush) {
    let i = -1,
        n = row.length,
        x = rect.x,
        y = rect.y,
        v = u ? Math.round(row.area / u) : 0,
        o;
    if (u == rect.dx) { // horizontal subdivision
      if (flush || v > rect.dy) v = rect.dy; // over+underflow
      while (++i < n) {
        o = row[i];
        o.x = x;
        o.y = y;
        o.dy = v;
        x += o.dx = Math.min(rect.x + rect.dx - x, v ? Math.round(o.area / v) : 0);
      }
      o.z = true;
      o.dx += rect.x + rect.dx - x; // rounding error
      rect.y += v;
      rect.dy -= v;
    } else { // vertical subdivision
      if (flush || v > rect.dx) v = rect.dx; // over+underflow
      while (++i < n) {
        o = row[i];
        o.x = x;
        o.y = y;
        o.dx = v;
        y += o.dy = Math.min(rect.y + rect.dy - y, v ? Math.round(o.area / v) : 0);
      }
      o.z = false;
      o.dy += rect.y + rect.dy - y; // rounding error
      rect.x += v;
      rect.dx -= v;
    }
  },

  renderAllNodes() {
    const {width, height, data, style} = this.props;

    let nodes = {
      value: data.reduce((a, b)=>(a + b.value),0),
      children: data,
      x: 0,
      y: 0,
      dx: width,
      dy: height,
    };

    this.squarify(nodes);

    return nodes.children.map((v, i) => (
      <Layer key={i}>
        <rect x={v.x} y={v.y} width={v.dx} height={v.dy} style={Object.assign({}, style, v.style)}/>
        <text x={v.x + 4} y={v.y + 22} fill={'#fff'} fontSize={18}>{'' + (nodes.children.length - i)}</text>
        <text x={v.x + v.dx/2 + 2 - v.name.length * 16 / 2} y={v.y + v.dy/2 + 2 + 16 / 2} fill={'#fff'} fontSize={16}>{'' + v.name}</text>
      </Layer>
    ));
  },

  render() {
    const {width, height} = this.props;

    return (
      <Surface width={width} height={height}>
        {this.renderAllNodes()}
      </Surface>
    )
  }
});

export default TreemapChart;
