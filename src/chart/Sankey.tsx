/**
 * @file TreemapChart
 */
import React, { PureComponent, ReactElement, SVGProps } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import { Surface } from '../container/Surface';
import { Layer } from '../container/Layer';
import { Tooltip } from '../component/Tooltip';
import { Rectangle, Props as RectangleProps } from '../shape/Rectangle';
import { shallowEqual } from '../util/ShallowEqual';
import { filterSvgElements, validateWidthHeight, findChildByType } from '../util/ReactUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import { Margin, DataKey, filterProps, SankeyLink, SankeyNode } from '../util/types';

const defaultCoordinateOfTooltip = { x: 0, y: 0 };

const interpolationGenerator = (a: number, b: number) => {
  const ka = +a;
  const kb = b - ka;
  return (t: any) => ka + kb * t;
};
const centerY = (node: SankeyNode) => node.y + node.dy / 2;
const getValue = (entry: LinkDataItem) => (entry && entry.value) || 0;
const getSumOfIds = (links: LinkDataItem[], ids: number[]) =>
  ids.reduce((result: any, id: any) => result + getValue(links[id]), 0);
const getSumWithWeightedSource = (tree: any, links: SankeyLink[], ids: number[]) =>
  ids.reduce((result: any, id: any) => {
    const link = links[id];
    const sourceNode = tree[link.source];

    return result + centerY(sourceNode) * getValue(links[id]);
  }, 0);
const getSumWithWeightedTarget = (tree: any, links: SankeyLink[], ids: number[]) =>
  ids.reduce((result: number, id: number) => {
    const link = links[id];
    const targetNode = tree[link.target];

    return result + centerY(targetNode) * getValue(links[id]);
  }, 0);
const ascendingY = (a: any, b: any) => a.y - b.y;

const searchTargetsAndSources = (links: LinkDataItem[], id: number) => {
  const sourceNodes: number[] = [];
  const sourceLinks: number[] = [];
  const targetNodes: number[] = [];
  const targetLinks: number[] = [];

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

const updateDepthOfTargets = (tree: any, curNode: any) => {
  const { targetNodes } = curNode;

  for (let i = 0, len = targetNodes.length; i < len; i++) {
    const target = tree[targetNodes[i]];

    if (target) {
      target.depth = Math.max(curNode.depth + 1, target.depth);

      updateDepthOfTargets(tree, target);
    }
  }
};

const getNodesTree = ({ nodes, links }: SankeyData, width: number, nodeWidth: number): any => {
  const tree = nodes.map((entry: any, index: number) => {
    const result = searchTargetsAndSources(links, index);

    return {
      ...entry,
      ...result,
      value: Math.max(getSumOfIds(links, result.sourceLinks), getSumOfIds(links, result.targetLinks)),
      depth: 0,
    };
  });

  for (let i = 0, len = tree.length; i < len; i++) {
    const node = tree[i];

    if (!node.sourceNodes.length) {
      updateDepthOfTargets(tree, node);
    }
  }
  const maxDepth = _.maxBy(tree, (entry: SankeyNode) => entry.depth).depth;

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

const getDepthTree = (tree: any): any[] => {
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

const updateYOfTree = (depthTree: any, height: number, nodePadding: number, links: any) => {
  const yRatio: number = _.min(
    depthTree.map((nodes: any) => (height - (nodes.length - 1) * nodePadding) / _.sumBy(nodes, getValue)),
  );

  for (let d = 0, maxDepth = depthTree.length; d < maxDepth; d++) {
    for (let i = 0, len = depthTree[d].length; i < len; i++) {
      const node = depthTree[d][i];

      node.y = i;
      node.dy = node.value * yRatio;
    }
  }

  return links.map((link: any) => ({ ...link, dy: getValue(link) * yRatio }));
};

const resolveCollisions = (depthTree: any[], height: number, nodePadding: number) => {
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

const relaxLeftToRight = (tree: any, depthTree: any, links: any, alpha: any) => {
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
const relaxRightToLeft = (tree: any, depthTree: any, links: any, alpha: any) => {
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
const updateYOfLinks = (tree: any, links: any) => {
  for (let i = 0, len = tree.length; i < len; i++) {
    const node = tree[i];
    let sy = 0;
    let ty = 0;

    node.targetLinks.sort((a: any, b: any) => tree[links[a].target].y - tree[links[b].target].y);
    node.sourceLinks.sort((a: any, b: any) => tree[links[a].source].y - tree[links[b].source].y);

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

const computeData = ({
  data,
  width,
  height,
  iterations,
  nodeWidth,
  nodePadding,
}: {
  data: SankeyData;
  width: number;
  height: number;
  iterations: any;
  nodeWidth: number;
  nodePadding: number;
}): {
  nodes: SankeyNode[];
  links: SankeyLink[];
} => {
  const { links } = data;
  const { tree } = getNodesTree(data, width, nodeWidth);
  const depthTree = getDepthTree(tree);
  const newLinks = updateYOfTree(depthTree, height, nodePadding, links);

  resolveCollisions(depthTree, height, nodePadding);

  let alpha = 1;
  for (let i = 1; i <= iterations; i++) {
    relaxRightToLeft(tree, depthTree, newLinks, (alpha *= 0.99));

    resolveCollisions(depthTree, height, nodePadding);

    relaxLeftToRight(tree, depthTree, newLinks, alpha);

    resolveCollisions(depthTree, height, nodePadding);
  }

  updateYOfLinks(tree, newLinks);

  return { nodes: tree, links: newLinks };
};

const getCoordinateOfTooltip = (el: any, type: string) => {
  if (type === 'node') {
    return { x: el.x + el.width / 2, y: el.y + el.height / 2 };
  }

  return {
    x: (el.sourceX + el.targetX) / 2,
    y: (el.sourceY + el.targetY) / 2,
  };
};

const getPayloadOfTooltip = (el: any, type: string, nameKey: DataKey<any>) => {
  const { payload } = el;
  if (type === 'node') {
    return [
      {
        payload: el,
        name: getValueByDataKey(payload, nameKey, ''),
        value: getValueByDataKey(payload, 'value'),
      },
    ];
  }
  if (payload.source && payload.target) {
    const sourceName = getValueByDataKey(payload.source, nameKey, '');
    const targetName = getValueByDataKey(payload.target, nameKey, '');

    return [
      {
        payload: el,
        name: `${sourceName} - ${targetName}`,
        value: getValueByDataKey(payload, 'value'),
      },
    ];
  }

  return [];
};

interface LinkDataItem {
  source: number;
  target: number;
  [key: string]: any;
}

interface SankeyData {
  nodes: any[];
  links: LinkDataItem[];
}

type SankeyNodeOptions = ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | RectangleProps;

type SankeyLinkOptions =
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | SVGProps<SVGPathElement>;

interface SankeyProps {
  nameKey?: DataKey<any>;

  dataKey?: DataKey<any>;

  width?: number;

  height?: number;

  data: SankeyData;

  nodePadding?: number;

  nodeWidth?: number;

  linkCurvature?: number;

  iterations?: number;

  // TODO object  func
  node?: SankeyNodeOptions;

  link?: SankeyLinkOptions;

  style?: any;

  className?: string;

  children?: any;

  margin?: Margin;

  onClick?: any;

  onMouseEnter?: any;

  onMouseLeave?: any;
}

type Props = SVGProps<SVGElement> & SankeyProps;

interface State {
  activeElement?: any;
  activeElementType?: any;
  isTooltipActive: boolean;
  nodes: SankeyNode[];
  links: SankeyLink[];

  prevData?: SankeyData;
  prevWidth?: number;
  prevHeight?: number;
  prevMargin?: Margin;
  prevIterations?: number;
  prevNodeWidth?: number;
  prevNodePadding?: number;
}

export class Sankey extends PureComponent<Props, State> {
  static displayName = 'Sankey';

  static defaultProps = {
    nameKey: 'name',
    dataKey: 'value',
    nodePadding: 10,
    nodeWidth: 10,
    linkCurvature: 0.5,
    iterations: 32,
    margin: { top: 5, right: 5, bottom: 5, left: 5 },
  };

  state = {
    activeElement: null as any,
    activeElementType: null as any,
    isTooltipActive: false,
    nodes: [] as SankeyNode[],
    links: [] as SankeyLink[],
  };

  static getDerivedStateFromProps(nextProps: Props, prevState: State): State {
    const { data, width, height, margin, iterations, nodeWidth, nodePadding } = nextProps;

    if (
      data !== prevState.prevData ||
      width !== prevState.prevWidth ||
      height !== prevState.prevHeight ||
      !shallowEqual(margin, prevState.prevMargin) ||
      iterations !== prevState.prevIterations ||
      nodeWidth !== prevState.prevNodeWidth ||
      nodePadding !== prevState.prevNodePadding
    ) {
      const contentWidth = width - ((margin && margin.left) || 0) - ((margin && margin.right) || 0);
      const contentHeight = height - ((margin && margin.top) || 0) - ((margin && margin.bottom) || 0);
      const { links, nodes } = computeData({
        data,
        width: contentWidth,
        height: contentHeight,
        iterations,
        nodeWidth,
        nodePadding,
      });

      return {
        ...prevState,
        nodes,
        links,

        prevData: data,
        prevWidth: iterations,
        prevHeight: height,
        prevMargin: margin,
        prevNodePadding: nodePadding,
        prevNodeWidth: nodeWidth,
        prevIterations: iterations,
      };
    }

    return null;
  }

  handleMouseEnter(el: React.ReactElement, type: string, e: any) {
    const { onMouseEnter, children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip.displayName);

    if (tooltipItem) {
      this.setState(
        prev => {
          if (tooltipItem.props.trigger === 'hover') {
            return { ...prev, activeElement: el, activeElementType: type, isTooltipActive: true };
          }
          return prev;
        },
        () => {
          if (onMouseEnter) {
            onMouseEnter(el, type, e);
          }
        },
      );
    } else if (onMouseEnter) {
      onMouseEnter(el, type, e);
    }
  }

  handleMouseLeave(el: React.ReactElement, type: string, e: any) {
    const { onMouseLeave, children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip.displayName);

    if (tooltipItem) {
      this.setState(
        prev => {
          if (tooltipItem.props.trigger === 'hover') {
            return { ...prev, activeElement: undefined, activeElementType: undefined, isTooltipActive: false };
          }
          return prev;
        },
        () => {
          if (onMouseLeave) {
            onMouseLeave(el, type, e);
          }
        },
      );
    } else if (onMouseLeave) {
      onMouseLeave(el, type, e);
    }
  }

  handleClick(el: React.ReactElement, type: string, e: any) {
    const { onClick, children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip.displayName);

    if (tooltipItem && tooltipItem.props.trigger === 'click') {
      if (this.state.isTooltipActive) {
        this.setState(prev => {
          return { ...prev, activeElement: undefined, activeElementType: undefined, isTooltipActive: false };
        });
      } else {
        this.setState(prev => {
          return {
            ...prev,
            activeElement: el,
            activeElementType: type,
            isTooltipActive: true,
          };
        });
      }
    }

    if (onClick) onClick(el, type, e);
  }

  static renderLinkItem(option: any, props: any) {
    if (React.isValidElement(option)) {
      return React.cloneElement(option, props);
    }
    if (_.isFunction(option)) {
      return option(props);
    }

    const { sourceX, sourceY, sourceControlX, targetX, targetY, targetControlX, linkWidth, ...others } = props;

    return (
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
        {...filterProps(others)}
      />
    );
  }

  renderLinks(links: SankeyLink[], nodes: SankeyNode[]) {
    const { linkCurvature, link: linkContent, margin } = this.props;
    const top = _.get(margin, 'top') || 0;
    const left = _.get(margin, 'left') || 0;

    return (
      <Layer className="recharts-sankey-links" key="recharts-sankey-links">
        {links.map((link: SankeyLink, i: number) => {
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
            sourceX,
            targetX,
            sourceY,
            targetY,
            sourceControlX,
            targetControlX,
            sourceRelativeY,
            targetRelativeY,
            linkWidth,
            index: i,
            payload: { ...link, source, target },
            ...filterProps(linkContent),
          };
          const events = {
            onMouseEnter: this.handleMouseEnter.bind(this, linkProps, 'link'),
            onMouseLeave: this.handleMouseLeave.bind(this, linkProps, 'link'),
            onClick: this.handleClick.bind(this, linkProps, 'link'),
          };

          return (
            // eslint-disable-next-line react/no-array-index-key
            <Layer key={`link${i}`} {...events}>
              {(this.constructor as any).renderLinkItem(linkContent, linkProps)}
            </Layer>
          );
        })}
      </Layer>
    );
  }

  static renderNodeItem(option: any, props: Props) {
    if (React.isValidElement(option)) {
      return React.cloneElement(option, props);
    }
    if (_.isFunction(option)) {
      return option(props);
    }

    return <Rectangle className="recharts-sankey-node" fill="#0088fe" fillOpacity="0.8" {...filterProps(props)} />;
  }

  renderNodes(nodes: SankeyNode[]) {
    const { node: nodeContent, margin } = this.props;
    const top = _.get(margin, 'top') || 0;
    const left = _.get(margin, 'left') || 0;

    return (
      <Layer className="recharts-sankey-nodes" key="recharts-sankey-nodes">
        {nodes.map((node, i) => {
          const { x, y, dx, dy } = node;
          const nodeProps = {
            ...filterProps(nodeContent),
            x: x + left,
            y: y + top,
            width: dx,
            height: dy,
            index: i,
            payload: node,
          };
          const events = {
            onMouseEnter: this.handleMouseEnter.bind(this, nodeProps, 'node'),
            onMouseLeave: this.handleMouseLeave.bind(this, nodeProps, 'node'),
            onClick: this.handleClick.bind(this, nodeProps, 'node'),
          };

          return (
            // eslint-disable-next-line react/no-array-index-key
            <Layer key={`node${i}`} {...events}>
              {(this.constructor as any).renderNodeItem(nodeContent, nodeProps)}
            </Layer>
          );
        })}
      </Layer>
    );
  }

  renderTooltip() {
    const { children, width, height, nameKey } = this.props;
    const tooltipItem = findChildByType(children, Tooltip.displayName);

    if (!tooltipItem) {
      return null;
    }

    const { isTooltipActive, activeElement, activeElementType } = this.state;
    const viewBox = { x: 0, y: 0, width, height };
    const coordinate = activeElement
      ? getCoordinateOfTooltip(activeElement, activeElementType)
      : defaultCoordinateOfTooltip;
    const payload = activeElement ? getPayloadOfTooltip(activeElement, activeElementType, nameKey) : [];

    return React.cloneElement(tooltipItem, {
      viewBox,
      active: isTooltipActive,
      coordinate,
      label: '',
      payload,
    });
  }

  render() {
    if (!validateWidthHeight(this)) {
      return null;
    }

    const { width, height, className, style, children, ...others } = this.props;
    const { links, nodes } = this.state;
    const attrs = filterProps(others);

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
        {this.renderTooltip()}
      </div>
    );
  }
}
