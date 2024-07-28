import React, { MouseEvent, PureComponent, ReactElement, SVGProps } from 'react';
import maxBy from 'lodash/maxBy';
import min from 'lodash/min';
import get from 'lodash/get';
import sumBy from 'lodash/sumBy';
import isFunction from 'lodash/isFunction';

import { Surface } from '../container/Surface';
import { Layer } from '../container/Layer';
import { Tooltip } from '../component/Tooltip';
import { Rectangle, Props as RectangleProps } from '../shape/Rectangle';
import { shallowEqual } from '../util/ShallowEqual';
import { validateWidthHeight, findChildByType, filterProps } from '../util/ReactUtils';
import { getValueByDataKey } from '../util/ChartUtils';
import { Margin, DataKey, SankeyLink, SankeyNode, Coordinate } from '../util/types';
import { ReportChartMargin, ReportChartSize } from '../context/chartLayoutContext';
import { TooltipContextProvider, TooltipContextValue } from '../context/tooltipContext';
import { CursorPortalContext, TooltipPortalContext } from '../context/tooltipPortalContext';
import { RechartsWrapper } from './RechartsWrapper';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';

const defaultCoordinateOfTooltip: Coordinate = { x: 0, y: 0 };

const interpolationGenerator = (a: number, b: number) => {
  const ka = +a;
  const kb = b - ka;
  return (t: number) => ka + kb * t;
};

const centerY = (node: SankeyNode) => node.y + node.dy / 2;

const getValue = (entry: LinkDataItem | SankeyNode): number => (entry && entry.value) || 0;

const getSumOfIds = (links: LinkDataItem[], ids: number[]): number =>
  ids.reduce((result, id) => result + getValue(links[id]), 0);

const getSumWithWeightedSource = (tree: SankeyNode[], links: SankeyLink[], ids: number[]) =>
  ids.reduce((result, id) => {
    const link = links[id];
    const sourceNode = tree[link.source];

    return result + centerY(sourceNode) * getValue(links[id]);
  }, 0);

const getSumWithWeightedTarget = (tree: SankeyNode[], links: SankeyLink[], ids: number[]) =>
  ids.reduce((result: number, id: number) => {
    const link = links[id];
    const targetNode = tree[link.target];

    return result + centerY(targetNode) * getValue(links[id]);
  }, 0);

const ascendingY = (a: { y: number }, b: { y: number }) => a.y - b.y;

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

const updateDepthOfTargets = (tree: SankeyNode[], curNode: SankeyNode) => {
  const { targetNodes } = curNode;

  for (let i = 0, len = targetNodes.length; i < len; i++) {
    const target = tree[targetNodes[i]];

    if (target) {
      target.depth = Math.max(curNode.depth + 1, target.depth);

      updateDepthOfTargets(tree, target);
    }
  }
};

const getNodesTree = (
  { nodes, links }: SankeyData,
  width: number,
  nodeWidth: number,
): { tree: SankeyNode[]; maxDepth: number } => {
  const tree = nodes.map((entry: SankeyNode, index: number) => {
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
  const maxDepth = maxBy(tree, (entry: SankeyNode) => entry.depth).depth;

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

const getDepthTree = (tree: SankeyNode[]): SankeyNode[][] => {
  const result: SankeyNode[][] = [];

  for (let i = 0, len = tree.length; i < len; i++) {
    const node = tree[i];

    if (!result[node.depth]) {
      result[node.depth] = [];
    }

    result[node.depth].push(node);
  }

  return result;
};

const updateYOfTree = (
  depthTree: SankeyNode[][],
  height: number,
  nodePadding: number,
  links: LinkDataItem[],
): SankeyLink[] => {
  const yRatio: number = min(
    depthTree.map(nodes => (height - (nodes.length - 1) * nodePadding) / sumBy(nodes, getValue)),
  );

  for (let d = 0, maxDepth = depthTree.length; d < maxDepth; d++) {
    for (let i = 0, len = depthTree[d].length; i < len; i++) {
      const node = depthTree[d][i];

      node.y = i;
      node.dy = node.value * yRatio;
    }
  }

  return links.map(link => ({ ...link, dy: getValue(link) * yRatio }));
};

const resolveCollisions = (depthTree: SankeyNode[][], height: number, nodePadding: number, sort = true) => {
  for (let i = 0, len = depthTree.length; i < len; i++) {
    const nodes = depthTree[i];
    const n = nodes.length;

    // Sort by the value of y
    if (sort) {
      nodes.sort(ascendingY);
    }

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

const relaxLeftToRight = (tree: SankeyNode[], depthTree: SankeyNode[][], links: SankeyLink[], alpha: number) => {
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
const relaxRightToLeft = (tree: SankeyNode[], depthTree: SankeyNode[][], links: SankeyLink[], alpha: number) => {
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

const updateYOfLinks = (tree: SankeyNode[], links: SankeyLink[]): void => {
  for (let i = 0, len = tree.length; i < len; i++) {
    const node = tree[i];
    let sy = 0;
    let ty = 0;

    node.targetLinks.sort((a, b) => tree[links[a].target].y - tree[links[b].target].y);
    node.sourceLinks.sort((a, b) => tree[links[a].source].y - tree[links[b].source].y);

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
  sort,
}: {
  data: SankeyData;
  width: number;
  height: number;
  iterations: number;
  nodeWidth: number;
  nodePadding: number;
  sort: boolean;
}): {
  nodes: SankeyNode[];
  links: SankeyLink[];
} => {
  const { links } = data;
  const { tree } = getNodesTree(data, width, nodeWidth);
  const depthTree = getDepthTree(tree);
  const newLinks = updateYOfTree(depthTree, height, nodePadding, links);

  resolveCollisions(depthTree, height, nodePadding, sort);

  let alpha = 1;
  for (let i = 1; i <= iterations; i++) {
    relaxRightToLeft(tree, depthTree, newLinks, (alpha *= 0.99));

    resolveCollisions(depthTree, height, nodePadding, sort);

    relaxLeftToRight(tree, depthTree, newLinks, alpha);

    resolveCollisions(depthTree, height, nodePadding, sort);
  }

  updateYOfLinks(tree, newLinks);

  return { nodes: tree, links: newLinks };
};

const getCoordinateOfTooltip = (item: NodeProps | LinkProps, type: SankeyElementType) => {
  if (type === 'node') {
    return { x: +item.x + +item.width / 2, y: +item.y + +item.height / 2 };
  }

  return (
    'sourceX' in item && {
      x: (item.sourceX + item.targetX) / 2,
      y: (item.sourceY + item.targetY) / 2,
    }
  );
};

const getPayloadOfTooltip = (item: NodeProps | LinkProps, type: SankeyElementType, nameKey: DataKey<any>) => {
  const { payload } = item;
  if (type === 'node') {
    return [
      {
        payload: item,
        name: getValueByDataKey(payload, nameKey, ''),
        value: getValueByDataKey(payload, 'value'),
      },
    ];
  }
  if ('source' in payload && payload.source && payload.target) {
    const sourceName = getValueByDataKey(payload.source, nameKey, '');
    const targetName = getValueByDataKey(payload.target, nameKey, '');

    return [
      {
        payload: item,
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
  value: number;
}

export interface NodeProps extends Omit<SVGProps<SVGRectElement>, 'height' | 'width'> {
  height: number;
  width: number;
  payload: SankeyNode;
  index: number;
  x: number;
  y: number;
}

export interface LinkProps extends SVGProps<SVGPathElement> {
  sourceX: number;
  targetX: number;
  sourceY: number;
  targetY: number;
  sourceControlX: number;
  targetControlX: number;
  sourceRelativeY: number;
  targetRelativeY: number;
  linkWidth: number;
  index: number;
  // payload is SankeyLink except source and target are now Node objects instead of numbers
  payload: Omit<SankeyLink, 'source' | 'target'> & { source: SankeyNode; target: SankeyNode };
}

export interface SankeyData {
  nodes: any[];
  links: LinkDataItem[];
}

// TODO: improve types - NodeOptions uses SankeyNode, LinkOptions uses LinkProps. Standardize.
type SankeyNodeOptions =
  | ReactElement<SVGProps<SVGRectElement>>
  | ((props: NodeProps) => ReactElement<SVGProps<SVGRectElement>>)
  | RectangleProps;

type SankeyLinkOptions =
  | ReactElement<SVGProps<SVGPathElement>>
  | ((props: LinkProps) => ReactElement<SVGProps<SVGPathElement>>)
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
  // TODO object func
  node?: SankeyNodeOptions;
  link?: SankeyLinkOptions;
  style?: React.CSSProperties;
  className?: string;
  children?: any;
  margin?: Margin;
  onClick?: (item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent) => void;
  onMouseEnter?: (item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent) => void;
  onMouseLeave?: (item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent) => void;
  sort?: boolean;
}

type Props = SVGProps<SVGElement> & SankeyProps;

type SankeyElementType = 'node' | 'link';

interface State {
  activeElement?: NodeProps | LinkProps;
  activeElementType?: SankeyElementType;
  isTooltipActive: boolean;
  nodes: SankeyNode[];
  links: SankeyLink[];
  sort?: boolean;

  prevData?: SankeyData;
  prevWidth?: number;
  prevHeight?: number;
  prevMargin?: Margin;
  prevIterations?: number;
  prevNodeWidth?: number;
  prevNodePadding?: number;
  prevSort?: boolean;

  cursorPortal?: SVGElement | null;
  tooltipPortal?: HTMLElement | null;
}

// Why is margin not a Sankey prop? No clue. Probably it should be
const defaultSankeyMargin: Margin = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

function renderLinkItem(option: SankeyLinkOptions, props: LinkProps) {
  if (React.isValidElement(option)) {
    return React.cloneElement(option, props);
  }
  if (isFunction(option)) {
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
      {...filterProps(others, false)}
    />
  );
}

function SankeyLinkElement({
  link,
  nodes,
  left,
  top,
  i,
  linkContent,
  linkCurvature,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  link: SankeyLink;
  nodes: SankeyNode[];
  top: number;
  left: number;
  linkContent: SankeyLinkOptions;
  i: number;
  linkCurvature: number;
  onMouseEnter: (linkProps: LinkProps, e: MouseEvent) => void;
  onMouseLeave: (linkProps: LinkProps, e: MouseEvent) => void;
  onClick: (linkProps: LinkProps, e: MouseEvent) => void;
}) {
  const { sy: sourceRelativeY, ty: targetRelativeY, dy: linkWidth } = link;
  const sourceNode = nodes[link.source];
  const targetNode = nodes[link.target];
  const sourceX = sourceNode.x + sourceNode.dx + left;
  const targetX = targetNode.x + left;
  const interpolationFunc = interpolationGenerator(sourceX, targetX);
  const sourceControlX = interpolationFunc(linkCurvature);
  const targetControlX = interpolationFunc(1 - linkCurvature);
  const sourceY = sourceNode.y + sourceRelativeY + linkWidth / 2 + top;
  const targetY = targetNode.y + targetRelativeY + linkWidth / 2 + top;

  const linkProps: LinkProps = {
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
    payload: { ...link, source: sourceNode, target: targetNode },
    ...filterProps(linkContent, false),
  };
  const events = {
    onMouseEnter: (e: MouseEvent) => onMouseEnter(linkProps, e),
    onMouseLeave: (e: MouseEvent) => onMouseLeave(linkProps, e),
    onClick: (e: MouseEvent) => onClick(linkProps, e),
  };

  return <Layer {...events}>{renderLinkItem(linkContent, linkProps)}</Layer>;
}

function AllSankeyLinkElements({
  links,
  nodes,
  linkCurvature,
  linkContent,
  margin,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  links: SankeyLink[];
  nodes: SankeyNode[];
  linkCurvature: number;
  linkContent: SankeyLinkOptions;
  margin: Margin;
  onMouseEnter: (linkProps: LinkProps, e: MouseEvent) => void;
  onMouseLeave: (linkProps: LinkProps, e: MouseEvent) => void;
  onClick: (linkProps: LinkProps, e: MouseEvent) => void;
}) {
  const top = get(margin, 'top') || 0;
  const left = get(margin, 'left') || 0;

  return (
    <Layer className="recharts-sankey-links" key="recharts-sankey-links">
      {links.map((link: SankeyLink, i: number) => (
        <SankeyLinkElement
          key={`link-${link.source}-${link.target}-${link.value}`}
          link={link}
          nodes={nodes}
          left={left}
          top={top}
          linkContent={linkContent}
          linkCurvature={linkCurvature}
          i={i}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
      ))}
    </Layer>
  );
}

function renderNodeItem(option: SankeyNodeOptions, props: NodeProps) {
  if (React.isValidElement(option)) {
    return React.cloneElement(option, props);
  }
  if (isFunction(option)) {
    return option(props);
  }

  return (
    <Rectangle
      className="recharts-sankey-node"
      fill="#0088fe"
      fillOpacity="0.8"
      {...filterProps(props, false)}
      role="img"
    />
  );
}

function NodeElement({
  node,
  nodeContent,
  top,
  left,
  i,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  node: SankeyNode;
  nodeContent: SankeyNodeOptions;
  top: number;
  left: number;
  i: number;
  onMouseEnter: (nodeProps: NodeProps, e: MouseEvent) => void;
  onMouseLeave: (nodeProps: NodeProps, e: MouseEvent) => void;
  onClick: (nodeProps: NodeProps, e: MouseEvent) => void;
}) {
  const { x, y, dx, dy } = node;
  const nodeProps: NodeProps = {
    ...filterProps(nodeContent, false),
    x: x + left,
    y: y + top,
    width: dx,
    height: dy,
    index: i,
    payload: node,
  };
  const events = {
    onMouseEnter: (e: MouseEvent) => onMouseEnter(nodeProps, e),
    onMouseLeave: (e: MouseEvent) => onMouseLeave(nodeProps, e),
    onClick: (e: MouseEvent) => onClick(nodeProps, e),
  };

  return <Layer {...events}>{renderNodeItem(nodeContent, nodeProps)}</Layer>;
}

function AllNodeElements({
  nodes,
  nodeContent,
  margin,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  nodes: SankeyNode[];
  nodeContent: SankeyNodeOptions;
  margin: Margin;
  onMouseEnter: (nodeProps: NodeProps, e: MouseEvent) => void;
  onMouseLeave: (nodeProps: NodeProps, e: MouseEvent) => void;
  onClick: (nodeProps: NodeProps, e: MouseEvent) => void;
}) {
  const top = get(margin, 'top') || 0;
  const left = get(margin, 'left') || 0;
  return (
    <Layer className="recharts-sankey-nodes" key="recharts-sankey-nodes">
      {nodes.map((node, i) => (
        <NodeElement
          node={node}
          nodeContent={nodeContent}
          top={top}
          left={left}
          i={i}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
      ))}
    </Layer>
  );
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
    sort: true,
  };

  state: State = {
    activeElement: null,
    activeElementType: null,
    isTooltipActive: false,
    nodes: [],
    links: [],
  };

  static getDerivedStateFromProps(nextProps: Props, prevState: State): State {
    const { data, width, height, margin, iterations, nodeWidth, nodePadding, sort } = nextProps;

    if (
      data !== prevState.prevData ||
      width !== prevState.prevWidth ||
      height !== prevState.prevHeight ||
      !shallowEqual(margin, prevState.prevMargin) ||
      iterations !== prevState.prevIterations ||
      nodeWidth !== prevState.prevNodeWidth ||
      nodePadding !== prevState.prevNodePadding ||
      sort !== prevState.sort
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
        sort,
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
        prevSort: sort,
      };
    }

    return null;
  }

  handleMouseEnter(item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent) {
    const { onMouseEnter, children } = this.props;
    const tooltipItem = findChildByType([children], Tooltip);

    if (tooltipItem) {
      this.setState(
        prev => {
          if (tooltipItem.props.trigger === 'hover') {
            return { ...prev, activeElement: item, activeElementType: type, isTooltipActive: true };
          }
          return prev;
        },
        () => {
          if (onMouseEnter) {
            onMouseEnter(item, type, e);
          }
        },
      );
    } else if (onMouseEnter) {
      onMouseEnter(item, type, e);
    }
  }

  handleMouseLeave(item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent) {
    const { onMouseLeave, children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

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
            onMouseLeave(item, type, e);
          }
        },
      );
    } else if (onMouseLeave) {
      onMouseLeave(item, type, e);
    }
  }

  handleClick(item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent) {
    const { onClick, children } = this.props;
    const tooltipItem = findChildByType(children, Tooltip);

    if (tooltipItem && tooltipItem.props.trigger === 'click') {
      if (this.state.isTooltipActive) {
        this.setState(prev => {
          return { ...prev, activeElement: undefined, activeElementType: undefined, isTooltipActive: false };
        });
      } else {
        this.setState(prev => {
          return {
            ...prev,
            activeElement: item,
            activeElementType: type,
            isTooltipActive: true,
          };
        });
      }
    }

    if (onClick) onClick(item, type, e);
  }

  getTooltipContext(): TooltipContextValue {
    const { nameKey } = this.props;
    const { isTooltipActive, activeElement, activeElementType } = this.state;
    const coordinate = activeElement
      ? getCoordinateOfTooltip(activeElement, activeElementType)
      : defaultCoordinateOfTooltip;
    const payload = activeElement ? getPayloadOfTooltip(activeElement, activeElementType, nameKey) : [];

    return {
      label: '',
      payload,
      coordinate,
      active: isTooltipActive,
      index: 0,
    };
  }

  render() {
    if (!validateWidthHeight({ width: this.props.width, height: this.props.height })) {
      return null;
    }

    const { width, height, className, style, children, ...others } = this.props;
    const { links, nodes } = this.state;
    const attrs = filterProps(others, false);

    return (
      <RechartsStoreProvider reduxStoreName={className ?? 'Sankey'}>
        <ReportChartSize width={width} height={height} />
        <ReportChartMargin margin={defaultSankeyMargin} />
        <CursorPortalContext.Provider value={this.state.cursorPortal}>
          <TooltipPortalContext.Provider value={this.state.tooltipPortal}>
            <TooltipContextProvider value={this.getTooltipContext()}>
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
              >
                <Surface {...attrs} width={width} height={height}>
                  <g
                    className="recharts-cursor-portal"
                    ref={(node: SVGElement) => {
                      if (this.state.cursorPortal == null) {
                        this.setState({ cursorPortal: node });
                      }
                    }}
                  />
                  {children}
                  <AllSankeyLinkElements
                    links={links}
                    nodes={nodes}
                    linkCurvature={this.props.linkCurvature}
                    linkContent={this.props.link}
                    margin={this.props.margin}
                    onMouseEnter={(linkProps: LinkProps, e: MouseEvent) => this.handleMouseEnter(linkProps, 'link', e)}
                    onMouseLeave={(linkProps: LinkProps, e: MouseEvent) => this.handleMouseLeave(linkProps, 'link', e)}
                    onClick={(linkProps: LinkProps, e: MouseEvent) => this.handleClick(linkProps, 'link', e)}
                  />
                  <AllNodeElements
                    nodes={nodes}
                    nodeContent={this.props.node}
                    margin={this.props.margin}
                    onMouseEnter={(nodeProps: NodeProps, e: MouseEvent) => this.handleMouseEnter(nodeProps, 'node', e)}
                    onMouseLeave={(nodeProps: NodeProps, e: MouseEvent) => this.handleMouseLeave(nodeProps, 'node', e)}
                    onClick={(nodeProps: NodeProps, e: MouseEvent) => this.handleClick(nodeProps, 'node', e)}
                  />
                </Surface>
              </RechartsWrapper>
            </TooltipContextProvider>
          </TooltipPortalContext.Provider>
        </CursorPortalContext.Provider>
      </RechartsStoreProvider>
    );
  }
}
