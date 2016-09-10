/**
 * @file TreemapChart
 */
import React, { Component, PropTypes } from 'react';
import Surface from '../container/Surface';
import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Rectangle from '../shape/Rectangle';
import classNames from 'classnames';
import pureRender from '../util/PureRender';
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes, EVENT_ATTRIBUTES,
  filterSvgElements, validateWidthHeight, findChildByType } from '../util/ReactUtils';
import _ from 'lodash';

const interpolationGenerator = (a, b) => {
  const ka = +a;
  const kb = b - ka;
  return t => ka + kb * t;
};
const centerY = node => (node.y + node.dy / 2);
const getValue = entry => ((entry && entry.value) || 0);
const getSumOfIds = (links, ids) => (
  ids.reduce((result, id) => (result + getValue(links[id])), 0)
);
const getSumWithWeightedSource = (tree, links, ids) => (
  ids.reduce((result, id) => {
    const link = links[id];
    const sourceNode = tree[link.source];

    return result + centerY(sourceNode) * getValue(links[id]);
  }, 0)
);
const getSumWithWeightedTarget = (tree, links, ids) => (
  ids.reduce((result, id) => {
    const link = links[id];
    const targetNode = tree[link.target];

    return result + centerY(targetNode) * getValue(links[id]);
  }, 0)
);
const ascendingY = (a, b) => (a.y - b.y);

const searchTargetsAndSources = (links, id) => {
  const sourceNodes = [];
  const sourceLinks = [];
  const targetNodes = [];
  const targetLinks = [];

  for (let i = 0, len = links.length; i < len; i++) {
    const link = links[i];

    if (link.source === id) {
      targetNodes.push(link.target);
      targetLinks.push(i);
    }

    if (link.target === id) {
      sourceNodes.push(link.source);
      sourceLinks.push(i);
    }
  }

  return { sourceNodes, sourceLinks, targetLinks, targetNodes };
};

const updateDepthOfTargets = (tree, curNode) => {
  const targetNodes = curNode.targetNodes;

  for (let i = 0, len = targetNodes.length; i < len; i++) {
    const target = tree[targetNodes[i]];

    if (target) {
      target.depth = Math.max(curNode.depth + 1, target.depth);

      updateDepthOfTargets(tree, target);
    }
  }
};

const getNodesTree = ({ nodes, links }, width, nodeWidth) => {
  const tree = nodes.map((entry, index) => {
    const result = searchTargetsAndSources(links, index);

    return {
      ...entry,
      ...result,
      value: Math.max(
        getSumOfIds(links, result.sourceLinks),
        getSumOfIds(links, result.targetLinks)
      ),
      depth: 0,
    };
  });

  for (let i = 0, len = tree.length; i < len; i++) {
    const node = tree[i];

    if (!node.sourceNodes.length) {
      updateDepthOfTargets(tree, node);
    }
  }
  const maxDepth = _.maxBy(tree, entry => entry.depth).depth;

  if (maxDepth >= 1) {
    const childWidth = (width - nodeWidth) / maxDepth;
    for (let i = 0, len = tree.length; i < len; i++) {
      const node = tree[i];

      if (!node.targetNodes.length) {
        node.depth = maxDepth;
      }
      node.x = node.depth * childWidth;
      node.dx = nodeWidth;
    }
  }

  return { tree, maxDepth };
};

const getDepthTree = (tree, maxDepth) => {
  const result = [];

  for (let i = 0, len = tree.length; i < len; i++) {
    const node = tree[i];

    if (!result[node.depth]) {
      result[node.depth] = [];
    }

    result[node.depth].push(node);
  }

  return result;
};

const updateYOfTree = (depthTree, height, nodePadding, links) => {
  const yRatio = _.min(depthTree.map(nodes => (
    (height - (nodes.length - 1) * nodePadding) / _.sumBy(nodes, getValue)
  )));

  for (let d = 0, maxDepth = depthTree.length; d < maxDepth; d++) {
    for (let i = 0, len = depthTree[d].length; i < len; i++) {
      const node = depthTree[d][i];

      node.y = i;
      node.dy = node.value * yRatio;
    }
  }

  return links.map(link => ({ ...link, dy: getValue(link) * yRatio }));
};

const resolveCollisions = (depthTree, height, nodePadding) => {
  for (let i = 0, len = depthTree.length; i < len; i++) {
    const nodes = depthTree[i];
    const n = nodes.length;

    // Sort by the value of y
    nodes.sort(ascendingY);

    let y0 = 0;
    for (let j = 0; j < n; j++) {
      const node = nodes[j];
      const dy = y0 - node.y;

      if (dy > 0) {
        node.y += dy;
      }

      y0 = node.y + node.dy + nodePadding;
    }

    y0 = height + nodePadding;
    for (let j = n - 1; j >= 0; j--) {
      const node = nodes[j];
      const dy = node.y + node.dy + nodePadding - y0;

      if (dy > 0) {
        node.y -= dy;
        y0 = node.y;
      } else {
        break;
      }
    }
  }
};

const relaxLeftToRight = (tree, depthTree, links, alpha) => {
  for (let i = 0, maxDepth = depthTree.length; i < maxDepth; i++) {
    const nodes = depthTree[i];

    for (let j = 0, len = nodes.length; j < len; j++) {
      const node = nodes[j];

      if (node.sourceLinks.length) {
        const sourceSum = getSumOfIds(links, node.sourceLinks);
        const weightedSum = getSumWithWeightedSource(tree, links, node.sourceLinks);
        const y = weightedSum / sourceSum;

        node.y += (y - centerY(node)) * alpha;
      }
    }
  }
};
const relaxRightToLeft = (tree, depthTree, links, alpha) => {
  for (let i = depthTree.length - 1; i >= 0; i--) {
    const nodes = depthTree[i];

    for (let j = 0, len = nodes.length; j < len; j++) {
      const node = nodes[j];

      if (node.targetLinks.length) {
        const targetSum = getSumOfIds(links, node.targetLinks);
        const weightedSum = getSumWithWeightedTarget(tree, links, node.targetLinks);
        const y = weightedSum / targetSum;

        node.y += (y - centerY(node)) * alpha;
      }
    }
  }
};
const updateYOfLinks = (tree, links) => {
  for (let i = 0, len = tree.length; i < len; i++) {
    const node = tree[i];
    let sy = 0;
    let ty = 0;

    node.targetLinks.sort((a, b) => (tree[links[a].target].y - tree[links[b].target].y));
    node.sourceLinks.sort((a, b) => (tree[links[a].source].y - tree[links[b].source].y));

    for (let j = 0, tLen = node.targetLinks.length; j < tLen; j++) {
      const link = links[node.targetLinks[j]];

      if (link) {
        link.sy = sy;
        sy += link.dy;
      }
    }

    for (let j = 0, sLen = node.sourceLinks.length; j < sLen; j++) {
      const link = links[node.sourceLinks[j]];

      if (link) {
        link.ty = ty;
        ty += link.dy;
      }
    }
  }
};

const computeData = ({ data, width, height, iterations, nodeWidth, nodePadding }) => {
  const { nodes, links } = data;
  const { tree, maxDepth } = getNodesTree(data, width, nodeWidth);
  const depthTree = getDepthTree(tree, maxDepth);
  const newLinks = updateYOfTree(depthTree, height, nodePadding, links);

  resolveCollisions(depthTree, height, nodePadding);

  let alpha = 1;
  for (let i = 1; i <= iterations; i++) {
    relaxRightToLeft(tree, depthTree, newLinks, alpha *= 0.99);

    resolveCollisions(depthTree, height, nodePadding);

    relaxLeftToRight(tree, depthTree, newLinks, alpha);

    resolveCollisions(depthTree, height, nodePadding);
  }

  updateYOfLinks(tree, newLinks);

  return { nodes: tree, links: newLinks };
};

@pureRender
class Sankey extends Component {
  static displayName = 'Sankey';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,

    width: PropTypes.number,
    height: PropTypes.number,
    data: PropTypes.shape({
      nodes: PropTypes.array,
      links: PropTypes.arrayOf(PropTypes.shape({
        target: PropTypes.number,
        source: PropTypes.number,
        value: PropTypes.number,
      })),
    }),

    nodePadding: PropTypes.number,
    nodeWidth: PropTypes.number,
    linkCurvature: PropTypes.number,
    iterations: PropTypes.number,

    node: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.func]),
    link: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.func]),

    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    margin: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number,
    }),
  };

  static defaultProps = {
    nodePadding: 10,
    nodeWidth: 10,
    linkCurvature: 0.5,
    iterations: 32,
    margin: { top: 5, right: 5, bottom: 5, left: 5 },
  };

  state = this.createDefaultState();

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState(this.createDefaultState());
    }
  }
  /**
   * Returns default, reset state for the sankey chart.
   * @return {Object} Whole new state
   */
  createDefaultState() {
    return {
      isTooltipActive: false,
    };
  }

  handleMouseEnter(el, index, e) {
    const { onMouseEnter, children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (tooltipItem) {
      this.setState({
        activeLink: el,
        isTooltipActive: true,
      }, () => {
        if (onMouseEnter) {
          onMouseEnter(el, index, e);
        }
      });
    } else if (onMouseEnter) {
      onMouseEnter(el, index, e);
    }
  }

  handleMouseLeave(el, index, e) {
    const { onMouseLeave, children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (tooltipItem) {
      this.setState({

        isTooltipActive: false,
      }, () => {
        if (onMouseLeave) {
          onMouseLeave(el, index, e);
        }
      });
    } else if (onMouseLeave) {
      onMouseLeave(el, index, e);
    }
  }

  handleClick(el, index, e) {
    const { onClick } = this.props;

    if (onClick) {
      onClick(el, index, e);
    }
  }

  renderLinks(links, nodes) {
    const { linkCurvature, link: linkContent, margin } = this.props;
    const top = margin.top || 0;
    const left = margin.left || 0;

    return (
      <Layer className="recharts-sankey-links" key="recharts-sankey-links">
        {
          links.map((link, i) => {
            const { sy: sourceRelativeY, ty: targetRelativeY, dy: linkWidth } = link;
            const source = nodes[link.source];
            const target = nodes[link.target];
            const sourceX = source.x + source.dx + left;
            const targetX = target.x + left;
            const interpolationFunc = interpolationGenerator(sourceX, targetX);
            const sourceControlX = interpolationFunc(linkCurvature);
            const targetControlX = interpolationFunc(1 - linkCurvature);

            const sourceY = source.y + sourceRelativeY + linkWidth / 2 + top;
            const targetY = target.y + targetRelativeY + linkWidth / 2 + top;

            const linkProps = {
              sourceX, targetX,
              sourceY, targetY,
              sourceControlX, targetControlX,
              sourceRelativeY, targetRelativeY,
              linkWidth,
              index: i,
              payload: link,
            };
            let linkPresentationAttributes = {};

            if (React.isValidElement(linkContent)) {
              return (
                <Layer key={`link${i}`}>
                  {React.cloneElement(linkContent, linkProps)}
                </Layer>
              );
            } else if (_.isFunction(linkContent)) {
              return (
                <Layer key={`link${i}`}>
                  {linkContent(linkProps)}
                </Layer>
              );
            } else if (_.isObject(linkContent)) {
              linkPresentationAttributes = getPresentationAttributes(linkContent);
            }

            return (
              <Layer key={`link${i}`}>
                <path
                  className="recharts-sankey-link"
                  d={`
                    M${sourceX},${sourceY}
                    C${sourceControlX},${sourceY} ${targetControlX},${targetY} ${targetX},${targetY}
                  `}
                  fill="none"
                  stroke="#333"
                  strokeWidth={linkWidth}
                  strokeOpacity="0.2"
                  {...linkPresentationAttributes}
                />
              </Layer>
            );
          })
        }
      </Layer>
    );
  }

  renderNodes(nodes) {
    const { node: nodeContent, margin } = this.props;
    const top = margin.top || 0;
    const left = margin.left || 0;

    return (
      <Layer className="recharts-sankey-nodes" key="recharts-sankey-nodes">
        {
          nodes.map((node, i) => {
            const { x, y, dx, dy } = node;

            const nodeProps = {
              x: x + left,
              y: y + top,
              width: dx,
              height: dy,
              index: i,
              payload: node,
            };
            let nodePresentationAttributes = {};

            if (React.isValidElement(nodeContent)) {
              return (
                <Layer key={`node${i}`}>
                  {React.cloneElement(nodeContent, nodeProps)}
                </Layer>
              );
            } else if (_.isFunction(nodeContent)) {
              return (
                <Layer key={`node${i}`}>
                  {nodeContent(nodeProps)}
                </Layer>
              );
            } else if (_.isObject(nodeContent)) {
              nodePresentationAttributes = getPresentationAttributes(nodeContent);
            }

            return (
              <Layer key={`node${i}`}>
                <Rectangle
                  className="recharts-sankey-node"
                  fill="#0088fe"
                  fillOpacity="0.8"
                  {...nodeProps}
                  {...nodePresentationAttributes}
                />
              </Layer>
            );
          })
        }
      </Layer>
    );
  }

  renderTooltip(links, nodes) {
    const { children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (!tooltipItem) { return null; }

    const { isTooltipActive, activeLink } = this.state;
    const viewBox = { x: 0, y: 0, width: 100, height: 100 };
    const coordinate = {
      x: 0,
      y: 0,
    };
    const payload = isTooltipActive ? [{
      name: 'hh', value: 'aa',
    }] : [];

    return React.cloneElement(tooltipItem, {
      viewBox,
      active: isTooltipActive,
      coordinate,
      label: 'bb',
      payload,
      separator: 'cc',
    });
  }

  render() {
    if (!validateWidthHeight(this)) { return null; }

    const { data, iterations, nodeWidth, nodePadding, width, height,
      className, style, children, margin, ...others } = this.props;
    const contentWidth = width - (margin.left || 0) - (margin.right || 0);
    const contentHeight = height - (margin.top || 0) - (margin.bottom || 0);
    const { links, nodes } = computeData({
      data,
      width: contentWidth,
      height: contentHeight,
      iterations, nodeWidth, nodePadding,
    });
    const attrs = getPresentationAttributes(others);

    return (
      <div
        className={classNames('recharts-wrapper', className)}
        style={{ ...style, position: 'relative', cursor: 'default', width, height }}
      >
        <Surface {...attrs} width={width} height={height}>
          {filterSvgElements(children)}
          {this.renderLinks(links, nodes)}
          {this.renderNodes(nodes)}
        </Surface>
        {this.renderTooltip(links, nodes)}
      </div>
    );
  }
}

export default Sankey;
