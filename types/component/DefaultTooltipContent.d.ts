/**
 * @fileOverview Default Tooltip Content
 */
import * as React from 'react';
import { CSSProperties, ReactNode, SVGProps } from 'react';
import { DataKey } from '../util/types';
export type TooltipType = 'none';
export type ValueType = number | string | Array<number | string>;
export type NameType = number | string;
export type Formatter<TValue extends ValueType, TName extends NameType> = (value: TValue, name: TName, item: Payload<TValue, TName>, index: number, payload: ReadonlyArray<Payload<TValue, TName>>) => [React.ReactNode, TName] | React.ReactNode;
export interface Payload<TValue extends ValueType, TName extends NameType> extends Omit<SVGProps<SVGElement>, 'name'> {
    type?: TooltipType;
    color?: string;
    formatter?: Formatter<TValue, TName>;
    name?: TName;
    value?: TValue;
    unit?: ReactNode;
    fill?: string;
    dataKey?: DataKey<any>;
    nameKey?: DataKey<any>;
    payload?: any;
    chartType?: string;
    stroke?: string;
    strokeDasharray?: string | number;
    strokeWidth?: number | string;
    className?: string;
    hide?: boolean;
}
export interface Props<TValue extends ValueType, TName extends NameType> {
    separator?: string;
    wrapperClassName?: string;
    labelClassName?: string;
    formatter?: Formatter<TValue, TName>;
    contentStyle?: CSSProperties;
    itemStyle?: CSSProperties;
    labelStyle?: CSSProperties;
    labelFormatter?: (label: any, payload: ReadonlyArray<Payload<TValue, TName>>) => ReactNode;
    label?: any;
    payload?: ReadonlyArray<Payload<TValue, TName>>;
    itemSorter?: 'dataKey' | 'value' | 'name' | ((item: Payload<TValue, TName>) => number | string);
    accessibilityLayer: boolean;
}
export declare const DefaultTooltipContent: <TValue extends ValueType, TName extends NameType>(props: Props<TValue, TName>) => React.JSX.Element;
