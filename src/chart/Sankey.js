/**
 * @file TreemapChart
 */
import React, { Component, PropTypes } from 'react';
import Surface from '../container/Surface';
import Layer from '../container/Layer';
import Rectangle from '../shape/Rectangle';
import classNames from 'classnames';
import pureRender from '../util/PureRender';
import _ from 'lodash';

const number = (a, b) => {
  const ka = +a;
  const kb = b - ka;
  return t => ka + kb * t;
};

const center = (node) => (node.y + node.dy / 2);

const value = (link) => link.value;

const nest = (nodes) => {
  const nestNodes = [];

  nodes.map((node) => {
    for (let i = 0; i < nestNodes.length; i++) {
      if (nestNodes[i].key === node.x) {
        nestNodes[i].values.push(node);
        return null;
      }
    }
    nestNodes.push({
      key: node.x,
      values: [node],
    });
    return null;
  });

  nestNodes.sort((a, b) => {
    if (a.key < b.key) {
      return -1;
    } else if (a.key > b.key) {
      return 1;
    }
    return 0;
  });

  return nestNodes.map((d) => (d.values));
};

const computeNodeLinks = (nodes, links) => {
  nodes.forEach((node) => {
    node.sourceLinks = [];
    node.targetLinks = [];
  });
  links.forEach((link) => {
    let source = link.source;
    let target = link.target;
    if (typeof source === 'number') {
      source = link.source = nodes[link.source];
    }
    if (typeof target === 'number') {
      target = link.target = nodes[link.target];
    }
    source.sourceLinks.push(link);
    target.targetLinks.push(link);
  });
};

const computeNodeValues = (nodes) => {
  nodes.forEach((node) => {
    node.value = Math.max(
      _.sumBy(node.sourceLinks, value),
      _.sumBy(node.targetLinks, value)
    );
  });
};

const moveSinksRight = (x, nodes) => {
  nodes.forEach((node) => {
    if (!node.sourceLinks.length) {
      node.x = x - 1;
    }
  });
};

const scaleNodeBreadths = (kx, nodes) => {
  nodes.forEach((node) => {
    node.x *= kx;
  });
};

const computeNodeBreadths = (nodes, links, size, nodeWidth) => {
  let remainingNodes = nodes;
  let nextNodes;
  let x = 0;


  while (remainingNodes.length) {
    nextNodes = [];
    remainingNodes.forEach((node) => {
      node.x = x;
      node.dx = nodeWidth;
      node.sourceLinks.forEach((link) => {
        if (nextNodes.indexOf(link.target) < 0) {
          nextNodes.push(link.target);
        }
      });
    });
    remainingNodes = nextNodes;
    ++x;
  }

  moveSinksRight(x, nodes);
  scaleNodeBreadths((size[0] - nodeWidth) / (x - 1), nodes);
};

const computeNodeDepths = (iterations, nodes, links, size, nodePadding) => {
  const nodesByBreadth = nest(nodes);

  const initializeNodeDepth = () => {
    const ky = _.min(nodesByBreadth.map((nodes) => {
      return (size[1] - (nodes.length - 1) * nodePadding) / _.sumBy(nodes, value);
    }));

    nodesByBreadth.forEach((nodes) => {
      nodes.forEach((node, i) => {
        node.y = i;
        node.dy = node.value * ky;
      });
    });

    links.forEach((link) => {
      link.dy = link.value * ky;
    });
  };

  function relaxLeftToRight(alpha) {
    function weightedSource(link) {
      return center(link.source) * link.value;
    }
    nodesByBreadth.forEach((nodes, breadth) => {
      nodes.forEach((node) => {
        if (node.targetLinks.length) {
          var y = _.sumBy(node.targetLinks, weightedSource) / _.sumBy(node.targetLinks, value);
          node.y += (y - center(node)) * alpha;
        }
      });
    });

  }

  function relaxRightToLeft(alpha) {
    function weightedTarget(link) {
      return center(link.target) * link.value;
    }

    nodesByBreadth.slice().reverse().forEach((nodes) => {
      nodes.forEach((node) => {
        if (node.sourceLinks.length) {
          var y = _.sumBy(node.sourceLinks, weightedTarget) / _.sumBy(node.sourceLinks, value);
          node.y += (y - center(node)) * alpha;
        }
      });
    });

  }

  function ascendingDepth(a, b) {
    return a.y - b.y;
  }

  function resolveCollisions() {
    nodesByBreadth.forEach((nodes) => {
      let node;
      let dy;
      let y0 = 0;
      const n = nodes.length;
      let i;

      // Push any overlapping nodes down.
      nodes.sort(ascendingDepth);
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dy = y0 - node.y;
        if (dy > 0) node.y += dy;
        y0 = node.y + node.dy + nodePadding;
      }

      // If the bottommost node goes outside the bounds, push it back up.
      dy = y0 - nodePadding - size[1];
      if (dy > 0) {
        y0 = node.y -= dy;

        // Push any overlapping nodes back up.
        for (i = n - 2; i >= 0; --i) {
          node = nodes[i];
          dy = node.y + node.dy + nodePadding - y0;
          if (dy > 0) node.y -= dy;
          y0 = node.y;
        }
      }
    });
  }

  initializeNodeDepth();
  resolveCollisions();
  for (var alpha = 1; iterations > 0; --iterations) {
    relaxRightToLeft(alpha *= 0.99);
    resolveCollisions();
    relaxLeftToRight(alpha);
    resolveCollisions();
  }
};

function computeLinkDepths(nodes) {
  function ascendingSourceDepth(a, b) {
    return a.source.y - b.source.y;
  }

  function ascendingTargetDepth(a, b) {
    return a.target.y - b.target.y;
  }

  nodes.forEach((node) => {
    node.sourceLinks.sort(ascendingTargetDepth);
    node.targetLinks.sort(ascendingSourceDepth);
  });
  nodes.forEach((node) => {
    let sy = 0;
    let ty = 0;
    node.sourceLinks.forEach((link) => {
      link.sy = sy;
      sy += link.dy;
    });
    node.targetLinks.forEach((link) => {
      link.ty = ty;
      ty += link.dy;
    });
  });
}


const computeData = (data, size, iterations, nodeWidth, nodePadding) => {
  const { nodes, links } = data;

  computeNodeLinks(nodes, links);
  computeNodeValues(nodes);
  computeNodeBreadths(nodes, links, size, nodeWidth);
  computeNodeDepths(iterations, nodes, links, size, nodePadding);
  computeLinkDepths(nodes);

  return data;
};


@pureRender
class Sankey extends Component {
  static displayName = 'Sankey';

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    data: PropTypes.object,
    nodePadding: PropTypes.number,
    nodeWidth: PropTypes.number,
    linkCurvature: PropTypes.number,
    iterations: PropTypes.number,
    nodeContent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    linkContent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  };

  static defaultProps = {
    nodePadding: 10,
    nodeWidth: 10,
    linkCurvature: 0.5,
    iterations: 32,
  }

  renderLinks(links) {
    const { linkCurvature, linkContent } = this.props;

    return (
      <Layer>
        {
          links.map((link, i) => {
            const x0 = link.source.x + link.source.dx;
            const x1 = link.target.x;
            const xi = number(x0, x1);
            const x2 = xi(linkCurvature);
            const x3 = xi(1 - linkCurvature);
            const y0 = link.source.y + link.sy + link.dy / 2;
            const y1 = link.target.y + link.ty + link.dy / 2;
            const { sy, ty, dy } = link;

            const linkProps = {
              x0, x1, x2, x3, y0, y1,
              sy, ty, dy,
              index: i,
              key: `link${i}`,
              link,
            };

            if (React.isValidElement(linkContent)) {
              return React.cloneElement(linkContent, linkProps);
            } else if (_.isFunction(linkContent)) {
              return linkContent(linkProps);
            }

            return (
              <path
                className="recharts-sankey-link"
                key={`link${i}`}
                d={`M${x0},${y0}C${x2},${y0} ${x3},${y1} ${x1},${y1}`}
                fill="none"
                stroke="#333"
                strokeWidth={link.dy}
                strokeOpacity="0.2"
              />
            );
          })
        }
      </Layer>
    );
  }

  renderNodes(nodes) {
    const { nodeContent } = this.props;

    return (
      <Layer>
        {
          nodes.map((node, i) => {
            const { x, y, dx, dy } = node;

            const nodeProps = {
              x,
              y,
              width: dx,
              height: dy,
              index: i,
              node,
            };

            if (React.isValidElement(nodeContent)) {
              return React.cloneElement(nodeContent, nodeProps);
            } else if (_.isFunction(nodeContent)) {
              return nodeContent(nodeProps);
            }

            return (
              <Rectangle
                className="recharts-sankey-node"
                key={`node${i}`}
                {...nodeProps}
                fill="#0088fe"
                fillOpacity="0.8"
              />
            );
          })
        }
      </Layer>
    );
  }

  render() {
    const { data, iterations, width, height, nodeWidth, nodePadding } = this.props;
    const size = [width, height];
    const { nodes, links } = computeData(
      _.cloneDeep(data), size, iterations, nodeWidth, nodePadding);
    return (
      <Surface width={width} height={height}>
        {this.renderLinks(links)}
        {this.renderNodes(nodes)}
      </Surface>
    );
  }
}

export default Sankey;
