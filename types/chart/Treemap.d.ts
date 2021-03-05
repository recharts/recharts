import React, { PureComponent } from 'react';
import { DataKey, TreemapNode } from '../util/types';
interface Props {
    width?: number;
    height?: number;
    data?: any[];
    animationId?: number;
    style?: any;
    aspectRatio?: number;
    content?: React.ReactElement;
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
    animationDuration?: number;
    animationEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
}
interface State {
    isTooltipActive: boolean;
    isAnimationFinished: boolean;
    activeNode?: TreemapNode;
    formatRoot?: TreemapNode;
    currentRoot?: TreemapNode;
    nestIndex?: TreemapNode[];
    prevData?: any[];
    prevType?: 'flat' | 'nest';
    prevWidth?: number;
    prevHeight?: number;
    prevDataKey?: DataKey<any>;
    prevAspectRatio?: number;
}
export declare class Treemap extends PureComponent<Props, State> {
    static displayName: string;
    static defaultProps: {
        aspectRatio: number;
        dataKey: string;
        type: string;
        isAnimationActive: boolean;
        isUpdateAnimationActive: boolean;
        animationBegin: number;
        animationDuration: number;
        animationEasing: string;
    };
    state: {
        isTooltipActive: boolean;
        isAnimationFinished: boolean;
        activeNode?: TreemapNode;
        formatRoot?: TreemapNode;
        currentRoot?: TreemapNode;
        nestIndex?: TreemapNode[];
        prevData?: any[];
        prevType?: "flat" | "nest";
        prevWidth?: number;
        prevHeight?: number;
        prevDataKey?: DataKey<any>;
        prevAspectRatio?: number;
    };
    static getDerivedStateFromProps(nextProps: Props, prevState: State): State;
    handleMouseEnter(node: TreemapNode, e: any): void;
    handleMouseLeave(node: TreemapNode, e: any): void;
    handleAnimationEnd: () => void;
    handleAnimationStart: () => void;
    handleClick(node: TreemapNode): void;
    handleNestIndex(node: TreemapNode, i: number): void;
    renderItem(content: any, nodeProps: TreemapNode, isLeaf: boolean): React.ReactElement;
    static renderContentItem(content: any, nodeProps: TreemapNode, type: string, colorPanel: string[]): React.ReactElement;
    renderNode(root: TreemapNode, node: TreemapNode, i: number): React.ReactElement;
    renderAllNodes(): React.ReactElement;
    renderTooltip(): React.ReactElement;
    renderNestIndex(): React.ReactElement;
    render(): JSX.Element;
}
export {};
