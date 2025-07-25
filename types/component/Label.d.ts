import * as React from 'react';
import { ReactNode, ReactElement, SVGProps } from 'react';
import { ViewBox, DataKey } from '../util/types';
export type ContentType = ReactElement | ((props: Props) => ReactNode);
export type LabelPosition = 'top' | 'left' | 'right' | 'bottom' | 'inside' | 'outside' | 'insideLeft' | 'insideRight' | 'insideTop' | 'insideBottom' | 'insideTopLeft' | 'insideBottomLeft' | 'insideTopRight' | 'insideBottomRight' | 'insideStart' | 'insideEnd' | 'end' | 'center' | 'centerTop' | 'centerBottom' | 'middle' | {
    x?: number;
    y?: number;
};
interface LabelProps {
    viewBox?: ViewBox;
    parentViewBox?: ViewBox;
    formatter?: (label: React.ReactNode) => React.ReactNode;
    value?: number | string;
    offset?: number;
    position?: LabelPosition;
    children?: ReactNode;
    className?: string;
    content?: ContentType;
    textBreakAll?: boolean;
    angle?: number;
    index?: number;
    labelRef?: React.RefObject<Element>;
}
export type Props = Omit<SVGProps<SVGTextElement>, 'viewBox'> & LabelProps;
export type ImplicitLabelType = boolean | string | number | ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | (Props & {
    dataKey?: DataKey<any>;
});
export declare const isLabelContentAFunction: (content: unknown) => content is (props: Props) => React.ReactNode;
export declare function Label({ offset, ...restProps }: Props): React.JSX.Element;
export declare namespace Label {
    var displayName: string;
    var parseViewBox: (props: any) => ViewBox;
    var renderCallByParent: (parentProps: {
        children?: ReactNode;
        label?: unknown;
        labelRef?: React.RefObject<Element>;
    }, viewBox?: ViewBox, checkPropsLabel?: boolean) => ReactElement[] | null;
}
export {};
