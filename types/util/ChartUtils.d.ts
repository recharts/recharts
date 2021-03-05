import { ReactElement, ReactNode } from 'react';
import { LayoutType, PolarLayoutType, AxisType, TickItem, BaseAxisProps, DataKey } from './types';
export declare function getValueByDataKey<T>(obj: T, dataKey: DataKey<any>, defaultValue?: any): any;
export declare function getDomainOfDataByKey<T>(data: Array<T>, key: string, type: string, filterNil?: boolean): any[];
export declare const calculateActiveTickIndex: (coordinate: number, ticks: Array<TickItem>, unsortedTicks: Array<TickItem>, axis: BaseAxisProps) => number;
export declare const getMainColorOfGraphicItem: (item: ReactElement) => any;
interface FormatedGraphicalItem {
    props: any;
    childIndex: number;
    item: any;
}
export declare const getLegendProps: ({ children, formatedGraphicalItems, legendWidth, legendContent, }: {
    children: any;
    formatedGraphicalItems?: Array<FormatedGraphicalItem>;
    legendWidth: number;
    legendContent?: any;
}) => any;
export declare const getBarSizeList: ({ barSize: globalSize, stackGroups, }: {
    barSize: number | string;
    stackGroups: any;
}) => Record<string, any>;
export declare const getBarPosition: ({ barGap, barCategoryGap, bandSize, sizeList, maxBarSize, }: {
    barGap: string | number;
    barCategoryGap: string | number;
    bandSize: number;
    sizeList: Array<any>;
    maxBarSize: number;
}) => any;
export declare const appendOffsetOfLegend: (offset: any, items: Array<FormatedGraphicalItem>, props: any, legendBox: any) => any;
export declare const getDomainOfErrorBars: (data: any[], item: any, dataKey: any, axisType?: AxisType) => any;
export declare const parseErrorBarsOfAxis: (data: any[], items: any[], dataKey: any, axisType: AxisType) => any;
export declare const getDomainOfItemsWithSameAxis: (data: any[], items: any[], type: string, filterNil?: boolean) => any;
export declare const isCategoricalAxis: (layout: LayoutType | PolarLayoutType, axisType: AxisType) => boolean;
export declare const getCoordinatesOfGrid: (ticks: Array<TickItem>, min: number, max: number) => number[];
export declare const getTicksOfAxis: (axis: any, isGrid?: boolean, isAll?: boolean) => TickItem[];
export declare const combineEventHandlers: (defaultHandler: Function, parentHandler: Function, childHandler: Function) => (arg1: any, arg2: any, arg3: any, arg4: any) => void;
export declare const parseScale: (axis: any, chartType: string, hasBar?: boolean) => {
    scale: any;
    realScaleType: string;
} | {
    scale: (...args: any[]) => any;
    realScaleType?: undefined;
};
export declare const checkDomainOfScale: (scale: any) => void;
export declare const findPositionOfBar: (barPosition: any[], child: ReactNode) => any;
export declare const truncateByDomain: (value: any[], domain: any[]) => any[];
export declare const offsetSign: (series: any) => void;
export declare const offsetPositive: (series: any) => void;
export declare const getStackedData: (data: any, stackItems: any, offsetType: string) => import("d3-shape").Series<{
    [key: string]: number;
}, string>[];
export declare const getStackGroupsByAxisId: (data: any, _items: Array<any>, numericAxisId: string, cateAxisId: string, offsetType: any, reverseStackOrder: boolean) => {};
export declare const calculateDomainOfTicks: (ticks: Array<TickItem>, type: string) => TickItem[];
export declare const getTicksOfScale: (scale: any, opts: any) => {
    niceTicks: any;
};
export declare const getCateCoordinateOfLine: ({ axis, ticks, bandSize, entry, index, dataKey, }: {
    axis: any;
    ticks: Array<TickItem>;
    bandSize: number;
    entry: any;
    index: number;
    dataKey?: string | number | ((obj: any) => any);
}) => any;
export declare const getCateCoordinateOfBar: ({ axis, ticks, offset, bandSize, entry, index, }: {
    axis: any;
    ticks: Array<TickItem>;
    offset: any;
    bandSize: number;
    entry: any;
    index: number;
}) => any;
export declare const getBaseValueOfBar: ({ numericAxis, }: {
    numericAxis: any;
}) => any;
export declare const getStackedDataOfItem: (item: any, stackGroups: any) => any;
export declare const getDomainOfStackGroups: (stackGroups: any, startIndex: number, endIndex: number) => number[];
export declare const MIN_VALUE_REG: RegExp;
export declare const MAX_VALUE_REG: RegExp;
export declare const parseSpecifiedDomain: (specifiedDomain: any, dataDomain: any, allowDataOverflow: boolean) => any;
export declare const getBandSizeOfAxis: (axis: any, ticks?: Array<TickItem>, isBar?: boolean) => any;
export declare const parseDomainOfCategoryAxis: (specifiedDomain: Array<any>, calculatedDomain: Array<any>, axisChild: ReactElement) => any[];
export declare const getTooltipItem: (graphicalItem: any, payload: any) => {
    dataKey: any;
    unit: any;
    formatter: any;
    name: any;
    color: any;
    value: any;
    type: any;
    payload: any;
};
export {};
