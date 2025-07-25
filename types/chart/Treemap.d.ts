import * as React from 'react';
import { AnimationDuration, AnimationTiming, DataKey } from '../util/types';
import { TooltipIndex, TooltipPayloadSearcher } from '../state/tooltipSlice';
/**
 * This is what end users defines as `data` on Treemap.
 */
export interface TreemapDataType {
    children?: ReadonlyArray<TreemapDataType>;
    [key: string]: unknown;
}
/**
 * This is what is returned from `squarify`, the final treemap data structure
 * that gets rendered and is stored in
 */
export interface TreemapNode {
    children: ReadonlyArray<TreemapNode>;
    value: number;
    depth: number;
    index: number;
    x: number;
    y: number;
    width: number;
    height: number;
    name: string;
    tooltipIndex: TooltipIndex;
    [k: string]: any;
}
export declare const treemapPayloadSearcher: TooltipPayloadSearcher<TreemapNode, TreemapNode>;
export declare const addToTreemapNodeIndex: (indexInChildrenArr: number, activeTooltipIndexSoFar?: TooltipIndex | undefined) => TooltipIndex;
export declare const computeNode: ({ depth, node, index, dataKey, nameKey, nestedActiveTooltipIndex, }: {
    depth: number;
    node: TreemapNode;
    index: number;
    dataKey: DataKey<any>;
    nameKey: DataKey<any>;
    nestedActiveTooltipIndex: TooltipIndex | undefined;
}) => TreemapNode;
export interface Props {
    width?: number;
    height?: number;
    data?: ReadonlyArray<TreemapDataType>;
    animationId?: number;
    style?: any;
    aspectRatio?: number;
    content?: React.ReactElement | ((props: TreemapNode) => React.ReactElement);
    fill?: string;
    stroke?: string;
    className?: string;
    nameKey?: DataKey<any>;
    dataKey?: DataKey<any>;
    children?: any;
    type?: 'flat' | 'nest';
    colorPanel?: [];
    nestIndexContent?: React.ReactElement | ((item: any, i: number) => any);
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
    onMouseEnter?: (node: TreemapNode, e: any) => void;
    onMouseLeave?: (node: TreemapNode, e: any) => void;
    onClick?: (node: TreemapNode) => void;
    isAnimationActive?: boolean;
    isUpdateAnimationActive?: boolean;
    animationBegin?: number;
    animationDuration?: AnimationDuration;
    animationEasing?: AnimationTiming;
}
export declare function Treemap(props: Props): React.JSX.Element;
