import * as React from 'react';
import { CSSProperties, PureComponent } from 'react';
import { LegendPayload, Props as DefaultProps } from './DefaultLegendContent';
import { LayoutType } from '../util/types';
import { UniqueOption } from '../util/payload/getUniqPayload';
import { ElementOffset } from '../util/useElementOffset';
export type LegendItemSorter = 'value' | 'dataKey' | ((item: LegendPayload) => number | string);
export type Props = Omit<DefaultProps, 'payload' | 'ref'> & {
    wrapperStyle?: CSSProperties;
    width?: number;
    height?: number;
    payloadUniqBy?: UniqueOption<LegendPayload>;
    onBBoxUpdate?: (box: ElementOffset | null) => void;
    /**
     * If portal is defined, then Legend will use this element as a target
     * for rendering using React Portal: https://react.dev/reference/react-dom/createPortal
     *
     * If this is undefined then Legend renders inside the recharts-wrapper element.
     */
    portal?: HTMLElement | null;
    itemSorter?: LegendItemSorter;
};
interface State {
    boxWidth: number;
    boxHeight: number;
}
export declare class Legend extends PureComponent<Props, State> {
    static displayName: string;
    static defaultProps: {
        align: string;
        iconSize: number;
        itemSorter: string;
        layout: string;
        verticalAlign: string;
    };
    static getWidthOrHeight(layout: LayoutType | undefined, height: number | undefined, width: number | undefined, maxWidth: number): null | {
        height?: number;
        width?: number;
    };
    render(): React.JSX.Element;
}
export {};
