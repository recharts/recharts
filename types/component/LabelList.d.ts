import { ReactElement, SVGProps } from 'react';
import { ContentType, Props as LabelProps } from './Label';
import { DataKey, ViewBox } from '../util/types';
interface Data {
    value?: number | string | Array<number | string>;
    payload?: any;
    parentViewBox?: ViewBox;
}
interface LabelListProps<T extends Data> {
    id?: string;
    data?: Array<T>;
    valueAccessor?: Function;
    clockWise?: boolean;
    dataKey?: DataKey<T>;
    content?: ContentType;
    textBreakAll?: boolean;
    position?: LabelProps['position'];
    angle?: number;
}
export declare type Props<T> = SVGProps<SVGElement> & LabelListProps<T>;
export declare type ImplicitLabelListType<T> = boolean | ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | Props<T>;
export declare function LabelList<T extends Data>(props: Props<T>): JSX.Element;
export declare namespace LabelList {
    var displayName: string;
    var renderCallByParent: <T extends Data>(parentProps: any, data: T[], ckeckPropsLabel?: boolean) => JSX.Element[];
    var defaultProps: {
        valueAccessor: (entry: Data) => string | number;
    };
}
export {};
