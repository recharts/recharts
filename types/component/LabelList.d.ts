import * as React from 'react';
import { ReactElement, ReactNode, SVGProps } from 'react';
import { ContentType, Props as LabelProps, LabelPosition } from './Label';
import { DataKey, ViewBox } from '../util/types';
interface Data {
    value?: number | string | Array<number | string>;
    payload?: any;
    parentViewBox?: ViewBox;
}
interface LabelListProps<T extends Data> {
    id?: string;
    data?: ReadonlyArray<T>;
    valueAccessor?: (entry: T, index: number) => string | number;
    clockWise?: boolean;
    dataKey?: DataKey<Record<string, any>>;
    content?: ContentType;
    textBreakAll?: boolean;
    position?: LabelPosition;
    offset?: LabelProps['offset'];
    angle?: number;
    formatter?: (label: React.ReactNode) => React.ReactNode;
}
export type Props<T extends Data> = SVGProps<SVGTextElement> & LabelListProps<T>;
export type ImplicitLabelListType<T extends Data> = boolean | ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | Props<T>;
export declare function LabelList<T extends Data>({ valueAccessor, ...restProps }: Props<T>): React.JSX.Element;
export declare namespace LabelList {
    var displayName: string;
    var renderCallByParent: <T extends Data>(parentProps: {
        children?: ReactNode;
        label?: unknown;
    }, data: ReadonlyArray<T>, checkPropsLabel?: boolean) => React.JSX.Element[];
}
export {};
