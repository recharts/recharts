import React, { PureComponent, ReactElement, SVGProps } from 'react';
import { Props as RectangleProps } from '../shape/Rectangle';
import { Margin, DataKey, SankeyLink, SankeyNode } from '../util/types';
interface LinkDataItem {
    source: number;
    target: number;
    [key: string]: any;
}
interface SankeyData {
    nodes: any[];
    links: LinkDataItem[];
}
declare type SankeyNodeOptions = ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | RectangleProps;
declare type SankeyLinkOptions = ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | SVGProps<SVGPathElement>;
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
    style?: any;
    className?: string;
    children?: any;
    margin?: Margin;
    onClick?: any;
    onMouseEnter?: any;
    onMouseLeave?: any;
}
declare type Props = SVGProps<SVGElement> & SankeyProps;
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
    };
    state: {
        activeElement: any;
        activeElementType: any;
        isTooltipActive: boolean;
        nodes: SankeyNode[];
        links: SankeyLink[];
    };
    static getDerivedStateFromProps(nextProps: Props, prevState: State): State;
    handleMouseEnter(el: React.ReactElement, type: string, e: any): void;
    handleMouseLeave(el: React.ReactElement, type: string, e: any): void;
    handleClick(el: React.ReactElement, type: string, e: any): void;
    static renderLinkItem(option: any, props: any): any;
    renderLinks(links: SankeyLink[], nodes: SankeyNode[]): JSX.Element;
    static renderNodeItem(option: any, props: Props): any;
    renderNodes(nodes: SankeyNode[]): JSX.Element;
    renderTooltip(): React.DetailedReactHTMLElement<any, HTMLElement>;
    render(): JSX.Element;
}
export {};
