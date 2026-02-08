import * as React from 'react';
import { MouseEvent, ReactElement, ReactNode, SVGProps, useCallback, useMemo, useState } from 'react';
import maxBy from 'es-toolkit/compat/maxBy';
import sumBy from 'es-toolkit/compat/sumBy';
import get from 'es-toolkit/compat/get';
import { Surface } from '../container/Surface';
import { Layer } from '../container/Layer';
import { Props as RectangleProps, Rectangle } from '../shape/Rectangle';
import { getValueByDataKey } from '../util/ChartUtils';
import { Coordinate, DataKey, EventThrottlingProps, Margin, Percent, SankeyLink, SankeyNode } from '../util/types';
import { ReportChartMargin, ReportChartSize, useChartHeight, useChartWidth } from '../context/chartLayoutContext';
import { TooltipPortalContext } from '../context/tooltipPortalContext';
import { RechartsWrapper } from './RechartsWrapper';
import { RechartsStoreProvider } from '../state/RechartsStoreProvider';
import { useAppDispatch } from '../state/hooks';
import {
  mouseLeaveItem,
  setActiveClickItemIndex,
  setActiveMouseOverItemIndex,
  TooltipIndex,
  TooltipPayloadConfiguration,
  TooltipPayloadSearcher,
} from '../state/tooltipSlice';
import { SetTooltipEntrySettings } from '../state/SetTooltipEntrySettings';
import { ChartOptions } from '../state/optionsSlice';
import { ReportEventSettings } from '../state/ReportEventSettings';
import { SetComputedData } from '../context/chartDataContext';
import { svgPropertiesNoEvents, svgPropertiesNoEventsFromUnknown } from '../util/svgPropertiesNoEvents';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { isPositiveNumber } from '../util/isWellBehavedNumber';
import { isNotNil, noop } from '../util/DataUtils';
import { WithIdRequired } from '../util/useUniqueId';
import { RegisterGraphicalItemId } from '../context/RegisterGraphicalItemId';
import { GraphicalItemId } from '../state/graphicalItemsSlice';
import { initialEventSettingsState } from '../state/eventSettingsSlice';

const interpolationGenerator = (a: number, b: number) => {
  const ka = +a;
  const kb = b - ka;
  return (t: number) => ka + kb * t;
};

const centerY = (node: SankeyNode) => node.y + node.dy / 2;

// TODO why is this not reading dataKey?
const getValue = (entry: LinkDataItem | SankeyNode | undefined): number => (entry && entry.value) || 0;

const getSumOfIds = (links: ReadonlyArray<LinkDataItem>, ids: number[]): number =>
  ids.reduce((result, id) => result + getValue(links[id]), 0);

const getSumWithWeightedSource = (
  tree: ReadonlyArray<SankeyNode>,
  links: ReadonlyArray<LinkDataItemDy>,
  ids: number[],
) =>
  ids.reduce((result, id) => {
    const link = links[id];
    if (link == null) {
      return result;
    }
    const sourceNode = tree[link.source];
    if (sourceNode == null) {
      return result;
    }

    return result + centerY(sourceNode) * getValue(links[id]);
  }, 0);

const getSumWithWeightedTarget = (
  tree: ReadonlyArray<SankeyNode>,
  links: ReadonlyArray<LinkDataItemDy>,
  ids: ReadonlyArray<number>,
): number =>
  ids.reduce((result: number, id: number) => {
    const link = links[id];
    if (link == null) {
      return result;
    }
    const targetNode = tree[link.target];
    if (targetNode == null) {
      return result;
    }

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

    if (link?.source === id) {
      targetNodes.push(link.target);
      targetLinks.push(i);
    }

    if (link?.target === id) {
      sourceNodes.push(link.source);
      sourceLinks.push(i);
    }
  }

  return { sourceNodes, sourceLinks, targetLinks, targetNodes };
};

const updateDepthOfTargets = (tree: SankeyNode[], curNode: SankeyNode) => {
  const { targetNodes } = curNode;

  for (let i = 0, len = targetNodes.length; i < len; i++) {
    const targetNode = targetNodes[i];
    if (targetNode == null) {
      continue;
    }
    const target = tree[targetNode];

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
  align: 'left' | 'justify',
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

    if (node != null && !node.sourceNodes.length) {
      updateDepthOfTargets(tree, node);
    }
  }
  const maxDepth = maxBy(tree, (entry: SankeyNode) => entry.depth)?.depth ?? 0;

  if (maxDepth >= 1) {
    const childWidth = (width - nodeWidth) / maxDepth;
    for (let i = 0, len = tree.length; i < len; i++) {
      const node = tree[i];
      if (node == null) {
        continue;
      }

      if (!node.targetNodes.length) {
        if (align === 'justify') {
          node.depth = maxDepth;
        }
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
    if (node == null) {
      continue;
    }

    if (!result[node.depth]) {
      result[node.depth] = [];
    }

    result[node.depth]?.push(node);
  }

  return result;
};

type LinkDataItemDy = LinkDataItem & { dy: number };

type SankeyVerticalAlign = 'justify' | 'top';

const updateYOfTree = (
  depthTree: SankeyNode[][],
  height: number,
  nodePadding: number,
  links: ReadonlyArray<LinkDataItem>,
  verticalAlign: SankeyVerticalAlign,
): Array<LinkDataItemDy> => {
  const yRatio: number = Math.min(
    ...depthTree.map(nodes => (height - (nodes.length - 1) * nodePadding) / sumBy(nodes, getValue)),
  );

  for (let d = 0, maxDepth = depthTree.length; d < maxDepth; d++) {
    const nodes = depthTree[d];
    if (nodes == null) {
      continue;
    }

    if (verticalAlign === 'top') {
      let currentY = 0;
      for (let i = 0, len = nodes.length; i < len; i++) {
        const node = nodes[i];
        if (node == null) {
          continue;
        }

        node.dy = node.value * yRatio;
        node.y = currentY;
        currentY += node.dy + nodePadding;
      }
    } else {
      for (let i = 0, len = nodes.length; i < len; i++) {
        const node = nodes[i];
        if (node == null) {
          continue;
        }

        node.y = i;
        node.dy = node.value * yRatio;
      }
    }
  }

  return links.map((link: LinkDataItem): LinkDataItemDy => ({ ...link, dy: getValue(link) * yRatio }));
};

const resolveCollisions = (depthTree: SankeyNode[][], height: number, nodePadding: number, sort = true) => {
  for (let i = 0, len = depthTree.length; i < len; i++) {
    const nodes = depthTree[i];
    if (nodes == null) {
      continue;
    }
    const n = nodes.length;

    // Sort by the value of y
    if (sort) {
      nodes.sort(ascendingY);
    }

    let y0 = 0;
    for (let j = 0; j < n; j++) {
      const node = nodes[j];
      if (node == null) {
        continue;
      }
      const dy = y0 - node.y;

      if (dy > 0) {
        node.y += dy;
      }

      y0 = node.y + node.dy + nodePadding;
    }

    y0 = height + nodePadding;
    for (let j = n - 1; j >= 0; j--) {
      const node = nodes[j];
      if (node == null) {
        continue;
      }
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

const relaxLeftToRight = (
  tree: ReadonlyArray<SankeyNode>,
  depthTree: SankeyNode[][],
  links: ReadonlyArray<LinkDataItemDy>,
  alpha: number,
) => {
  for (let i = 0, maxDepth = depthTree.length; i < maxDepth; i++) {
    const nodes = depthTree[i];
    if (nodes == null) {
      continue;
    }

    for (let j = 0, len = nodes.length; j < len; j++) {
      const node = nodes[j];
      if (node == null) {
        continue;
      }

      if (node.sourceLinks.length) {
        const sourceSum = getSumOfIds(links, node.sourceLinks);
        const weightedSum = getSumWithWeightedSource(tree, links, node.sourceLinks);
        const y = weightedSum / sourceSum;

        node.y += (y - centerY(node)) * alpha;
      }
    }
  }
};

const relaxRightToLeft = (
  tree: ReadonlyArray<SankeyNode>,
  /*
   * depthTree array is modified by this method!
   */
  depthTree: SankeyNode[][],
  links: ReadonlyArray<LinkDataItemDy>,
  alpha: number,
) => {
  for (let i = depthTree.length - 1; i >= 0; i--) {
    const nodes = depthTree[i];
    if (nodes == null) {
      continue;
    }

    for (let j = 0, len = nodes.length; j < len; j++) {
      const node = nodes[j];
      if (node == null) {
        continue;
      }

      if (node.targetLinks.length) {
        const targetSum = getSumOfIds(links, node.targetLinks);
        const weightedSum = getSumWithWeightedTarget(tree, links, node.targetLinks);
        const y = weightedSum / targetSum;

        node.y += (y - centerY(node)) * alpha;
      }
    }
  }
};

const updateYOfLinks = (tree: SankeyNode[], links: LinkDataItemDy[]): void => {
  for (let i = 0, len = tree.length; i < len; i++) {
    const node = tree[i];
    if (node == null) {
      continue;
    }
    let sy = 0;
    let ty = 0;

    node.targetLinks.sort((a, b) => {
      const targetA = links[a]?.target;
      const targetB = links[b]?.target;
      if (targetA == null || targetB == null) {
        return 0;
      }
      const yA = tree[targetA]?.y;
      const yB = tree[targetB]?.y;
      if (yA == null || yB == null) {
        return 0;
      }
      return yA - yB;
    });
    node.sourceLinks.sort((a, b) => {
      const sourceA = links[a]?.source;
      const sourceB = links[b]?.source;
      if (sourceA == null || sourceB == null) {
        return 0;
      }
      const yA = tree[sourceA]?.y;
      const yB = tree[sourceB]?.y;
      if (yA == null || yB == null) {
        return 0;
      }
      return yA - yB;
    });

    for (let j = 0, tLen = node.targetLinks.length; j < tLen; j++) {
      const targetLink = node.targetLinks[j];
      if (targetLink == null) {
        continue;
      }
      const link = links[targetLink];

      if (link) {
        // @ts-expect-error we should refactor this to immutable
        link.sy = sy;
        sy += link.dy;
      }
    }

    for (let j = 0, sLen = node.sourceLinks.length; j < sLen; j++) {
      const sourceLink = node.sourceLinks[j];
      if (sourceLink == null) {
        continue;
      }
      const link = links[sourceLink];

      if (link) {
        // @ts-expect-error we should refactor this to immutable
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
  verticalAlign,
  align,
}: {
  data: SankeyData;
  width: number;
  height: number;
  iterations: number;
  nodeWidth: number;
  nodePadding: number;
  sort: boolean;
  verticalAlign: SankeyVerticalAlign;
  align: 'left' | 'justify';
}): {
  nodes: ReadonlyArray<SankeyNode>;
  links: ReadonlyArray<SankeyLink>;
} => {
  const { links } = data;
  const { tree } = getNodesTree(data, width, nodeWidth, align);
  const depthTree = getDepthTree(tree);
  const linksWithDy: Array<LinkDataItemDy> = updateYOfTree(depthTree, height, nodePadding, links, verticalAlign);

  resolveCollisions(depthTree, height, nodePadding, sort);

  if (verticalAlign === 'justify') {
    let alpha = 1;
    for (let i = 1; i <= iterations; i++) {
      relaxRightToLeft(tree, depthTree, linksWithDy, (alpha *= 0.99));

      resolveCollisions(depthTree, height, nodePadding, sort);

      relaxLeftToRight(tree, depthTree, linksWithDy, alpha);

      resolveCollisions(depthTree, height, nodePadding, sort);
    }
  }

  updateYOfLinks(tree, linksWithDy);
  // @ts-expect-error updateYOfLinks modifies the links array to add sy and ty in place
  const newLinks: ReadonlyArray<SankeyLink> = linksWithDy;

  return { nodes: tree, links: newLinks };
};

const getNodeCoordinateOfTooltip = (item: NodeProps) => {
  return { x: +item.x + +item.width / 2, y: +item.y + +item.height / 2 };
};

const getLinkCoordinateOfTooltip = (item: LinkProps): Coordinate | undefined => {
  return 'sourceX' in item
    ? {
        x: (item.sourceX + item.targetX) / 2,
        y: (item.sourceY + item.targetY) / 2,
      }
    : undefined;
};

type SankeyTooltipPayload = { payload: SankeyNode | SankeyLink; name: unknown; value: unknown };

const getPayloadOfTooltip = (
  item: { payload: SankeyNode | SankeyLink },
  type: SankeyElementType,
  nameKey: DataKey<SankeyLink | SankeyNode, string> | undefined,
): SankeyTooltipPayload | undefined => {
  const { payload } = item;
  if (type === 'node') {
    return {
      payload,
      name: getValueByDataKey(payload, nameKey, ''),
      value: getValueByDataKey(payload, 'value'),
    };
  }
  if ('source' in payload && payload.source && payload.target) {
    // @ts-expect-error we're sending number indexes as source and target, but getValueByDataKey expects objects
    const sourceName = getValueByDataKey(payload.source, nameKey, '');
    // @ts-expect-error we're sending number indexes as source and target, but getValueByDataKey expects objects
    const targetName = getValueByDataKey(payload.target, nameKey, '');

    return {
      payload,
      name: `${sourceName} - ${targetName}`,
      value: getValueByDataKey(payload, 'value'),
    };
  }

  return undefined;
};

export const sankeyPayloadSearcher: TooltipPayloadSearcher = (
  _: unknown,
  activeIndex: TooltipIndex,
  computedData?: unknown,
  nameKey?,
): SankeyTooltipPayload | undefined => {
  if (activeIndex == null || typeof activeIndex !== 'string') {
    return undefined;
  }
  if (computedData == null || typeof computedData !== 'object') {
    return undefined;
  }
  const splitIndex = activeIndex.split('-');
  const [targetType, index] = splitIndex;
  const item = get(computedData, `${targetType}s[${index}]`);
  if (item) {
    // @ts-expect-error nameKey type does not match SankeyElementType
    const payload = getPayloadOfTooltip(item, targetType as SankeyElementType, nameKey);
    return payload;
  }
  return undefined;
};

const options: ChartOptions = {
  chartName: 'Sankey',
  defaultTooltipEventType: 'item',
  validateTooltipEventTypes: ['item'],
  tooltipPayloadSearcher: sankeyPayloadSearcher,
  eventEmitter: undefined,
};

const SetSankeyTooltipEntrySettings = React.memo(
  ({
    dataKey,
    nameKey,
    stroke,
    strokeWidth,
    fill,
    name,
    data,
    id,
  }: Pick<InternalSankeyProps, 'dataKey' | 'nameKey' | 'stroke' | 'strokeWidth' | 'fill' | 'name' | 'data' | 'id'>) => {
    const tooltipEntrySettings: TooltipPayloadConfiguration = {
      dataDefinedOnItem: data,
      getPosition: noop,
      settings: {
        stroke,
        strokeWidth,
        fill,
        dataKey,
        name,
        nameKey,
        hide: false,
        type: undefined,
        color: fill,
        unit: '',
        graphicalItemId: id,
      },
    };
    return <SetTooltipEntrySettings tooltipEntrySettings={tooltipEntrySettings} />;
  },
);

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
export type SankeyNodeOptions =
  | ReactElement<SVGProps<SVGRectElement>>
  | ((props: NodeProps) => ReactNode)
  | RectangleProps;

type SankeyLinkOptions =
  | ReactElement<SVGProps<SVGPathElement>>
  | ((props: LinkProps) => ReactElement<SVGProps<SVGPathElement>>)
  | SVGProps<SVGPathElement>;

interface SankeyProps extends EventThrottlingProps {
  /**
   * Name represents each sector in the tooltip.
   * This allows you to extract the name from the data:
   *
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the name.
   *
   * @defaultValue name
   */
  nameKey?: DataKey<any>;
  /**
   * dataKey prop in Sankey defines which key in the link objects represents the value of the link _in Tooltip only_.
   *
   * Unlike other charts where dataKey is used to extract values from the data array, in Sankey charts,
   * the value of each link is directly taken from the 'value' property of the link objects.
   *
   * @default 'value'
   */
  dataKey?: DataKey<any>;
  /**
   * The width of chart container.
   * Can be a number or a percent string like "100%".
   *
   * @see {@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}
   */
  width?: number | Percent;
  /**
   * The height of chart container.
   * Can be a number or a percent string like "100%".
   *
   * @see {@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}
   */
  height?: number | Percent;
  /**
   * The source data, including the array of nodes, and the relationships, represented by links.
   *
   * Note that Sankey requires a specific data structure.
   * Each node should have a unique index in the nodes array, and each link should reference these nodes by their indices.
   * This is different from other chart types in Recharts, which accept arbitrary data.
   *
   * @example
   * nodes: [
   *   { name: 'Visit' },
   *   { name: 'Direct-Favourite' },
   *   { name: 'Page-Click' },
   *   { name: 'Detail-Favourite' },
   *   { name: 'Lost' },
   * ],
   * links: [
   *   { source: 0, target: 1, value: 3728.3 },
   *   { source: 0, target: 2, value: 354170 },
   *   { source: 2, target: 3, value: 62429 },
   *   { source: 2, target: 4, value: 291741 },
   * ],
   */
  data: SankeyData;
  /**
   * The padding between the nodes
   * @default 10
   */
  nodePadding?: number;
  /**
   * The width of node
   * @default 10
   */
  nodeWidth?: number;
  /**
   * The curvature of width
   * @default 0.5
   */
  linkCurvature?: number;
  /**
   * The number of the iterations between the links
   * @default 32
   */
  iterations?: number;
  /**
   * If set an object, the option is the configuration of nodes.
   * If set a React element, the option is the custom react element of drawing the nodes.
   *
   * @example <Sankey node={MyCustomComponent} />
   * @example <Sankey node={{stroke: #77c878, strokeWidth: 2}} />
   */
  node?: SankeyNodeOptions;
  /**
   * If set an object, the option is the configuration of links.
   * If set a React element, the option is the custom react element of drawing the links.
   *
   * @example <Sankey link={MyCustomComponent} />
   * @example <Sankey link={{ fill: #77c878 }} />
   */
  link?: SankeyLinkOptions;
  style?: React.CSSProperties;
  className?: string;
  children?: ReactNode;
  /**
   * Empty space around the container.
   *
   * @defaultValue {"top":5,"right":5,"bottom":5,"left":5}
   */
  margin?: Partial<Margin>;
  /**
   * The customized event handler of click on the area in this group
   */
  onClick?: (item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mouseenter on the area in this group
   */
  onMouseEnter?: (item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent<SVGGraphicsElement>) => void;
  /**
   * The customized event handler of mouseleave on the area in this group
   */
  onMouseLeave?: (item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent<SVGGraphicsElement>) => void;
  /**
   * Whether to sort the nodes on the y axis, or to display them as user-defined.
   * @default true
   */
  sort?: boolean;
  /**
   * Controls the vertical spacing of nodes within a depth. 'justify' distributes nodes evenly and balances link paths, while 'top' positions the group starting from the top edge of the chart.
   * @default 'justify'
   */
  verticalAlign?: SankeyVerticalAlign;
  /**
   * If set to 'justify', the start nodes will be aligned to the left edge of the chart and the end nodes will be aligned to the right edge of the chart. If set to 'left', the start nodes will be aligned to the left edge of the chart.
   * @default 'justify'
   */
  align?: 'left' | 'justify';
}

export type Props = Omit<SVGProps<SVGSVGElement>, keyof SankeyProps> & SankeyProps;

export type SankeyElementType = 'node' | 'link';

function renderLinkItem(option: SankeyLinkOptions | undefined, props: LinkProps) {
  if (React.isValidElement(option)) {
    return React.cloneElement(option, props);
  }
  if (typeof option === 'function') {
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
      {...svgPropertiesNoEvents(others)}
    />
  );
}

const buildLinkProps = ({
  link,
  nodes,
  left,
  top,
  i,
  linkContent,
  linkCurvature,
}: {
  link: SankeyLink;
  nodes: ReadonlyArray<SankeyNode>;
  top: number;
  left: number;
  linkContent: SankeyLinkOptions | undefined;
  i: number;
  linkCurvature: number;
}): LinkProps | undefined => {
  const { sy: sourceRelativeY, ty: targetRelativeY, dy: linkWidth } = link;
  const sourceNode = nodes[link.source];
  const targetNode = nodes[link.target];
  if (sourceNode == null || targetNode == null) {
    return undefined;
  }
  const sourceX = sourceNode.x + sourceNode.dx + left;
  const targetX = targetNode.x + left;
  const interpolationFunc = interpolationGenerator(sourceX, targetX);
  const sourceControlX = interpolationFunc(linkCurvature);
  const targetControlX = interpolationFunc(1 - linkCurvature);
  const sourceY = sourceNode.y + sourceRelativeY + linkWidth / 2 + top;
  const targetY = targetNode.y + targetRelativeY + linkWidth / 2 + top;

  const linkProps: LinkProps = {
    sourceX,
    // @ts-expect-error the linkContent from below is contributing unknown props
    targetX,
    sourceY,
    // @ts-expect-error the linkContent from below is contributing unknown props
    targetY,
    sourceControlX,
    targetControlX,
    sourceRelativeY,
    targetRelativeY,
    linkWidth,
    index: i,
    payload: { ...link, source: sourceNode, target: targetNode },
    ...svgPropertiesNoEventsFromUnknown(linkContent),
  };

  return linkProps;
};

function SankeyLinkElement({
  graphicalItemId,
  props,
  i,
  linkContent,
  onMouseEnter,
  onMouseLeave,
  onClick,
  dataKey,
}: {
  graphicalItemId: GraphicalItemId;
  props: LinkProps;
  i: number;
  linkContent: SankeyLinkOptions | undefined;
  onMouseEnter: (linkProps: LinkProps, e: MouseEvent<SVGGraphicsElement>) => void;
  onMouseLeave: (linkProps: LinkProps, e: MouseEvent<SVGGraphicsElement>) => void;
  onClick: (linkProps: LinkProps, e: MouseEvent<SVGGraphicsElement>) => void;
  dataKey: DataKey<any>;
}) {
  const activeCoordinate = getLinkCoordinateOfTooltip(props);
  const activeIndex = `link-${i}`;

  const dispatch = useAppDispatch();

  const events = {
    onMouseEnter: (e: MouseEvent<SVGGraphicsElement>) => {
      dispatch(
        setActiveMouseOverItemIndex({
          activeIndex,
          activeDataKey: dataKey,
          activeCoordinate,
          activeGraphicalItemId: graphicalItemId,
        }),
      );
      onMouseEnter(props, e);
    },
    onMouseLeave: (e: MouseEvent<SVGGraphicsElement>) => {
      dispatch(mouseLeaveItem());
      onMouseLeave(props, e);
    },
    onClick: (e: MouseEvent<SVGGraphicsElement>) => {
      dispatch(
        setActiveClickItemIndex({
          activeIndex,
          activeDataKey: dataKey,
          activeCoordinate,
          activeGraphicalItemId: graphicalItemId,
        }),
      );
      onClick(props, e);
    },
  };

  return <Layer {...events}>{renderLinkItem(linkContent, props)}</Layer>;
}

function AllSankeyLinkElements({
  graphicalItemId,
  modifiedLinks,
  links,
  linkContent,
  onMouseEnter,
  onMouseLeave,
  onClick,
  dataKey,
}: {
  graphicalItemId: GraphicalItemId;
  modifiedLinks: ReadonlyArray<LinkProps>;
  links: ReadonlyArray<SankeyLink>;
  linkContent: SankeyLinkOptions | undefined;
  onMouseEnter: (linkProps: LinkProps, e: MouseEvent<SVGGraphicsElement>) => void;
  onMouseLeave: (linkProps: LinkProps, e: MouseEvent<SVGGraphicsElement>) => void;
  onClick: (linkProps: LinkProps, e: MouseEvent<SVGGraphicsElement>) => void;
  dataKey: DataKey<any>;
}) {
  return (
    <Layer className="recharts-sankey-links" key="recharts-sankey-links">
      {links.map((link: SankeyLink, i: number) => {
        const linkProps = modifiedLinks[i];
        if (linkProps == null) {
          return null;
        }
        return (
          <SankeyLinkElement
            graphicalItemId={graphicalItemId}
            key={`link-${link.source}-${link.target}-${link.value}`}
            props={linkProps}
            linkContent={linkContent}
            i={i}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            dataKey={dataKey}
          />
        );
      })}
    </Layer>
  );
}

function renderNodeItem(option: SankeyNodeOptions | undefined, props: NodeProps) {
  if (React.isValidElement(option)) {
    return React.cloneElement(option, props);
  }
  if (typeof option === 'function') {
    return option(props);
  }

  return (
    // @ts-expect-error recharts radius is not compatible with SVG radius
    <Rectangle className="recharts-sankey-node" fill="#0088fe" fillOpacity="0.8" {...svgPropertiesNoEvents(props)} />
  );
}

const buildNodeProps = ({
  node,
  nodeContent,
  top,
  left,
  i,
}: {
  node: SankeyNode;
  nodeContent: SankeyNodeOptions | undefined;
  top: number;
  left: number;
  i: number;
}) => {
  const { x, y, dx, dy } = node;
  // @ts-expect-error nodeContent is passing in unknown props
  const nodeProps: NodeProps = {
    ...svgPropertiesNoEventsFromUnknown(nodeContent),
    x: x + left,
    y: y + top,
    width: dx,
    height: dy,
    index: i,
    payload: node,
  };
  return nodeProps;
};

function NodeElement({
  graphicalItemId,
  props,
  nodeContent,
  i,
  onMouseEnter,
  onMouseLeave,
  onClick,
  dataKey,
}: {
  graphicalItemId: GraphicalItemId;
  props: NodeProps;
  nodeContent: SankeyNodeOptions | undefined;
  i: number;
  onMouseEnter: (nodeProps: NodeProps, e: MouseEvent<SVGGraphicsElement>) => void;
  onMouseLeave: (nodeProps: NodeProps, e: MouseEvent<SVGGraphicsElement>) => void;
  onClick: (nodeProps: NodeProps, e: MouseEvent<SVGGraphicsElement>) => void;
  dataKey: DataKey<any>;
}) {
  const dispatch = useAppDispatch();

  const activeCoordinate = getNodeCoordinateOfTooltip(props);
  const activeIndex = `node-${i}`;

  const events = {
    onMouseEnter: (e: MouseEvent<SVGGraphicsElement>) => {
      dispatch(
        setActiveMouseOverItemIndex({
          activeIndex,
          activeDataKey: dataKey,
          activeCoordinate,
          activeGraphicalItemId: graphicalItemId,
        }),
      );
      onMouseEnter(props, e);
    },
    onMouseLeave: (e: MouseEvent<SVGGraphicsElement>) => {
      dispatch(mouseLeaveItem());
      onMouseLeave(props, e);
    },
    onClick: (e: MouseEvent<SVGGraphicsElement>) => {
      dispatch(
        setActiveClickItemIndex({
          activeIndex,
          activeDataKey: dataKey,
          activeCoordinate,
          activeGraphicalItemId: graphicalItemId,
        }),
      );
      onClick(props, e);
    },
  };

  return <Layer {...events}>{renderNodeItem(nodeContent, props)}</Layer>;
}

function AllNodeElements({
  graphicalItemId,
  modifiedNodes,
  nodeContent,
  onMouseEnter,
  onMouseLeave,
  onClick,
  dataKey,
}: {
  graphicalItemId: GraphicalItemId;
  modifiedNodes: ReadonlyArray<NodeProps>;
  nodeContent: SankeyNodeOptions | undefined;
  onMouseEnter: (nodeProps: NodeProps, e: MouseEvent<SVGGraphicsElement>) => void;
  onMouseLeave: (nodeProps: NodeProps, e: MouseEvent<SVGGraphicsElement>) => void;
  onClick: (nodeProps: NodeProps, e: MouseEvent<SVGGraphicsElement>) => void;
  dataKey: DataKey<any>;
}) {
  return (
    <Layer className="recharts-sankey-nodes" key="recharts-sankey-nodes">
      {modifiedNodes.map((modifiedNode, i) => {
        return (
          <NodeElement
            graphicalItemId={graphicalItemId}
            key={`node-${modifiedNode.index}-${modifiedNode.x}-${modifiedNode.y}`}
            props={modifiedNode}
            nodeContent={nodeContent}
            i={i}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            dataKey={dataKey}
          />
        );
      })}
    </Layer>
  );
}

export const sankeyDefaultProps = {
  align: 'justify',
  dataKey: 'value',
  iterations: 32,
  linkCurvature: 0.5,
  margin: { top: 5, right: 5, bottom: 5, left: 5 },
  nameKey: 'name',
  nodePadding: 10,
  nodeWidth: 10,
  sort: true,
  verticalAlign: 'justify',
  ...initialEventSettingsState,
} as const satisfies Partial<Props>;

type PropsWithResolvedDefaults = RequiresDefaultProps<Props, typeof sankeyDefaultProps>;

type InternalSankeyProps = WithIdRequired<PropsWithResolvedDefaults>;

function SankeyImpl(props: InternalSankeyProps) {
  const { className, style, children, id, ...others } = props;
  const {
    link,
    dataKey,
    node,
    onMouseEnter,
    onMouseLeave,
    onClick,
    data,
    iterations,
    nodeWidth,
    nodePadding,
    sort,
    linkCurvature,
    margin,
    verticalAlign,
    align,
  } = props;

  const attrs = svgPropertiesNoEvents(others);

  const width = useChartWidth();
  const height = useChartHeight();

  const { links, modifiedLinks, modifiedNodes } = useMemo(() => {
    if (!data || !width || !height || width <= 0 || height <= 0) {
      return { nodes: [], links: [], modifiedLinks: [], modifiedNodes: [] };
    }
    const contentWidth = width - (margin.left ?? 0) - (margin.right ?? 0);
    const contentHeight = height - (margin.top ?? 0) - (margin.bottom ?? 0);
    const computed = computeData({
      data,
      width: contentWidth,
      height: contentHeight,
      iterations,
      nodeWidth,
      nodePadding,
      sort,
      verticalAlign,
      align,
    });

    const top = margin.top || 0;
    const left = margin.left || 0;
    const newModifiedLinks = computed.links
      .map((l, i) => {
        return buildLinkProps({ link: l, nodes: computed.nodes, i, top, left, linkContent: link, linkCurvature });
      })
      .filter(isNotNil);

    const newModifiedNodes = computed.nodes.map((n, i) => {
      return buildNodeProps({
        node: n,
        nodeContent: node,
        i,
        top,
        left,
      });
    });

    return {
      nodes: computed.nodes,
      links: computed.links,
      modifiedLinks: newModifiedLinks,
      modifiedNodes: newModifiedNodes,
    };
  }, [
    data,
    width,
    height,
    margin,
    iterations,
    nodeWidth,
    nodePadding,
    sort,
    link,
    node,
    linkCurvature,
    align,
    verticalAlign,
  ]);

  const handleMouseEnter = useCallback(
    (item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent<SVGGraphicsElement>) => {
      if (onMouseEnter) {
        onMouseEnter(item, type, e);
      }
    },
    [onMouseEnter],
  );

  const handleMouseLeave = useCallback(
    (item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent<SVGGraphicsElement>) => {
      if (onMouseLeave) {
        onMouseLeave(item, type, e);
      }
    },
    [onMouseLeave],
  );

  const handleClick = useCallback(
    (item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent<SVGGraphicsElement>) => {
      if (onClick) {
        onClick(item, type, e);
      }
    },
    [onClick],
  );

  if (!isPositiveNumber(width) || !isPositiveNumber(height) || !data || !data.links || !data.nodes) {
    return null;
  }

  return (
    <>
      <SetComputedData computedData={{ links: modifiedLinks, nodes: modifiedNodes }} />
      <Surface {...attrs} width={width} height={height}>
        {children}
        <AllSankeyLinkElements
          graphicalItemId={id}
          links={links}
          modifiedLinks={modifiedLinks}
          linkContent={link}
          dataKey={dataKey}
          onMouseEnter={(linkProps: LinkProps, e: MouseEvent<SVGGraphicsElement>) =>
            handleMouseEnter(linkProps, 'link', e)
          }
          onMouseLeave={(linkProps: LinkProps, e: MouseEvent<SVGGraphicsElement>) =>
            handleMouseLeave(linkProps, 'link', e)
          }
          onClick={(linkProps: LinkProps, e: MouseEvent<SVGGraphicsElement>) => handleClick(linkProps, 'link', e)}
        />
        <AllNodeElements
          graphicalItemId={id}
          modifiedNodes={modifiedNodes}
          nodeContent={node}
          dataKey={dataKey}
          onMouseEnter={(nodeProps: NodeProps, e: MouseEvent<SVGGraphicsElement>) =>
            handleMouseEnter(nodeProps, 'node', e)
          }
          onMouseLeave={(nodeProps: NodeProps, e: MouseEvent<SVGGraphicsElement>) =>
            handleMouseLeave(nodeProps, 'node', e)
          }
          onClick={(nodeProps: NodeProps, e: MouseEvent<SVGGraphicsElement>) => handleClick(nodeProps, 'node', e)}
        />
      </Surface>
    </>
  );
}

/**
 * Flow diagram in which the width of the arrows is proportional to the flow rate.
 * It is typically used to visualize energy or material or cost transfers between processes.
 *
 * @consumes ResponsiveContainerContext
 * @provides TooltipEntrySettings
 */
export function Sankey(outsideProps: Props) {
  const props: PropsWithResolvedDefaults = resolveDefaultProps(outsideProps, sankeyDefaultProps);
  const { width, height, style, className, id: externalId, throttleDelay, throttledEvents } = props;
  const [tooltipPortal, setTooltipPortal] = useState<HTMLElement | null>(null);

  return (
    <RechartsStoreProvider preloadedState={{ options }} reduxStoreName={className ?? 'Sankey'}>
      <ReportChartSize width={width} height={height} />
      <ReportChartMargin margin={props.margin} />
      <ReportEventSettings throttleDelay={throttleDelay} throttledEvents={throttledEvents} />

      <RechartsWrapper
        className={className}
        style={style}
        width={width}
        height={height}
        /*
         * Sankey, same as Treemap, suffers from overfilling the container
         * and causing infinite render loops where the chart keeps growing.
         */
        responsive={false}
        ref={(node: HTMLDivElement | null) => {
          if (node && !tooltipPortal) {
            setTooltipPortal(node);
          }
        }}
        onMouseEnter={undefined}
        onMouseLeave={undefined}
        onClick={undefined}
        onMouseMove={undefined}
        onMouseDown={undefined}
        onMouseUp={undefined}
        onContextMenu={undefined}
        onDoubleClick={undefined}
        onTouchStart={undefined}
        onTouchMove={undefined}
        onTouchEnd={undefined}
      >
        <TooltipPortalContext.Provider value={tooltipPortal}>
          <RegisterGraphicalItemId id={externalId} type="sankey">
            {id => (
              <>
                <SetSankeyTooltipEntrySettings
                  dataKey={props.dataKey}
                  nameKey={props.nameKey}
                  stroke={props.stroke}
                  strokeWidth={props.strokeWidth}
                  fill={props.fill}
                  name={props.name}
                  data={props.data}
                  id={id}
                />
                <SankeyImpl {...props} id={id} />
              </>
            )}
          </RegisterGraphicalItemId>
        </TooltipPortalContext.Provider>
      </RechartsWrapper>
    </RechartsStoreProvider>
  );
}

Sankey.displayName = 'Sankey';
