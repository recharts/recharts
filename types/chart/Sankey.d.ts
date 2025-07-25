import * as React from 'react';
import { MouseEvent, PureComponent, ReactElement, SVGProps } from 'react';
import { Props as RectangleProps } from '../shape/Rectangle';
import { Margin, DataKey, SankeyLink, SankeyNode } from '../util/types';
import { TooltipPayloadSearcher } from '../state/tooltipSlice';
export declare const sankeyPayloadSearcher: TooltipPayloadSearcher<any, any>;
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
    payload: Omit<SankeyLink, 'source' | 'target'> & {
        source: SankeyNode;
        target: SankeyNode;
    };
}
export interface SankeyData {
    nodes: any[];
    links: LinkDataItem[];
}
type SankeyNodeOptions = ReactElement<SVGProps<SVGRectElement>> | ((props: NodeProps) => ReactElement<SVGProps<SVGRectElement>>) | RectangleProps;
type SankeyLinkOptions = ReactElement<SVGProps<SVGPathElement>> | ((props: LinkProps) => ReactElement<SVGProps<SVGPathElement>>) | SVGProps<SVGPathElement>;
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
    nodes: SankeyNode[];
    links: SankeyLink[];
    modifiedNodes: NodeProps[];
    modifiedLinks: LinkProps[];
    sort?: boolean;
    prevData?: SankeyData;
    prevWidth?: number;
    prevHeight?: number;
    prevMargin?: Margin;
    prevIterations?: number;
    prevNodeWidth?: number;
    prevNodePadding?: number;
    prevSort?: boolean;
    tooltipPortal?: HTMLElement | null;
}
export declare class Sankey extends PureComponent<Props, State> {
    static displayName: string;
    static defaultProps: {
        nameKey: string;
        dataKey: string;
        nodePadding: number;
        nodeWidth: number;
        linkCurvature: number;
        iterations: number;
        margin: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
        sort: boolean;
    };
    state: State;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): State;
    handleMouseEnter(item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent): void;
    handleMouseLeave(item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent): void;
    handleClick(item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent): void;
    render(): React.JSX.Element;
}
export {};
