/**
 * @fileOverview Default Legend Content
 */
import * as React from 'react';
import { PureComponent, ReactNode, MouseEvent, ReactElement } from 'react';
import { DataKey, LegendType, LayoutType, PresentationAttributesAdaptChildEvent } from '../util/types';
export type ContentType = ReactElement | ((props: Props) => ReactNode);
export type IconType = Exclude<LegendType, 'none'>;
export type HorizontalAlignmentType = 'center' | 'left' | 'right';
export type VerticalAlignmentType = 'top' | 'bottom' | 'middle';
export type Formatter = (value: any, entry: LegendPayload, index: number) => ReactNode;
export interface LegendPayload {
    /**
     * This is the text that will be displayed in the legend in the DOM.
     * If undefined, the text will not be displayed, so the icon will be rendered without text.
     */
    value: string | undefined;
    type?: LegendType;
    color?: string;
    payload?: {
        strokeDasharray?: number | string;
        value?: any;
    };
    formatter?: Formatter;
    inactive?: boolean;
    legendIcon?: ReactElement<SVGElement>;
    dataKey?: DataKey<any>;
}
interface InternalProps {
    content?: ContentType;
    iconSize?: number;
    iconType?: IconType;
    layout?: LayoutType;
    align?: HorizontalAlignmentType;
    verticalAlign?: VerticalAlignmentType;
    inactiveColor?: string;
    formatter?: Formatter;
    onMouseEnter?: (data: LegendPayload, index: number, event: MouseEvent) => void;
    onMouseLeave?: (data: LegendPayload, index: number, event: MouseEvent) => void;
    onClick?: (data: LegendPayload, index: number, event: MouseEvent) => void;
    /**
     * DefaultLegendContent.payload is omitted from Legend props.
     * A custom payload can be passed here if desired or it can be passed from the Legend "content" callback.
     */
    payload?: ReadonlyArray<LegendPayload>;
}
export type Props = InternalProps & Omit<PresentationAttributesAdaptChildEvent<any, ReactElement>, keyof InternalProps>;
export declare class DefaultLegendContent extends PureComponent<Props> {
    static displayName: string;
    static defaultProps: Partial<Props>;
    /**
     * Render the path of icon
     * @param data Data of each legend item
     * @param iconType if defined, it will always render this icon. If undefined then it uses icon from data.type
     * @return Path element
     */
    renderIcon(data: LegendPayload, iconType: IconType | undefined): React.JSX.Element;
    /**
     * Draw items of legend
     * @return Items
     */
    renderItems(): React.JSX.Element[];
    render(): React.JSX.Element;
}
export {};
