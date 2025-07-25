import { Series, type SeriesPoint } from 'victory-vendor/d3-shape';
import { TooltipEntrySettings, TooltipPayloadEntry } from '../state/tooltipSlice';
import { AxisTick, AxisType, BaseAxisProps, ChartCoordinate, ChartOffsetInternal, DataKey, LayoutType, NumberDomain, OffsetHorizontal, OffsetVertical, PolarViewBoxRequired, RangeObj, Size, StackOffsetType, TickItem } from './types';
import { ValueType } from '../component/DefaultTooltipContent';
import { LegendSettings } from '../state/legendSlice';
import { AxisRange, BaseAxisWithScale } from '../state/selectors/axisSelectors';
import { StackGroup } from './stacks/stackTypes';
export declare function getValueByDataKey<T>(obj: T, dataKey: DataKey<T> | undefined, defaultValue?: any): unknown;
export declare const calculateActiveTickIndex: (
/**
 * For different layouts, `coordinate` is different:
 * In horizontal layout, this is expected to be the `x` coordinate
 * vertical -> y
 * centric -> angle
 * radial -> radius
 */
coordinate: number | undefined, ticks: ReadonlyArray<TickItem> | undefined, unsortedTicks: ReadonlyArray<TickItem>, axisType: AxisType | undefined, range: AxisRange | undefined) => number;
export type BarPositionPosition = {
    /**
     * Offset is returned always from zero position.
     * So in a way it's "absolute".
     *
     * NOT inbetween bars, but always from zero.
     */
    offset: number;
    /**
     * Size of the bar.
     * If the input data is undefined, this will be 0.
     * If the input data is NaN then this size too will be NaN.
     */
    size: number;
};
export declare const appendOffsetOfLegend: (offset: OffsetVertical & OffsetHorizontal, legendSettings: LegendSettings, legendSize: Size) => OffsetVertical & OffsetHorizontal;
export declare const isCategoricalAxis: (layout: LayoutType, axisType: AxisType) => boolean;
/**
 * Calculate the Coordinates of grid
 * @param  {Array} ticks           The ticks in axis
 * @param {Number} minValue        The minimum value of axis
 * @param {Number} maxValue        The maximum value of axis
 * @param {boolean} syncWithTicks  Synchronize grid lines with ticks or not
 * @return {Array}                 Coordinates
 */
export declare const getCoordinatesOfGrid: (ticks: ReadonlyArray<TickItem>, minValue: number, maxValue: number, syncWithTicks: boolean) => number[];
/**
 * A subset of d3-scale that Recharts is using
 */
export interface RechartsScale {
    domain(): ReadonlyArray<unknown>;
    domain(newDomain: ReadonlyArray<unknown>): this;
    range(): ReadonlyArray<unknown>;
    range(newRange: ReadonlyArray<unknown>): this;
    bandwidth?: () => number;
    ticks?: (count: number) => any;
    (args: any): number;
}
export type AxisPropsNeededForTicksGenerator = {
    axisType?: AxisType;
    categoricalDomain?: ReadonlyArray<unknown>;
    duplicateDomain?: ReadonlyArray<unknown>;
    isCategorical?: boolean;
    niceTicks?: ReadonlyArray<AxisTick>;
    /**
     * The range appears to be only used in Angle Axis - needs further investigation
     */
    range?: ReadonlyArray<number>;
    realScaleType?: 'scaleBand' | string;
    scale: RechartsScale | undefined;
    tickCount?: number;
    ticks?: ReadonlyArray<AxisTick>;
    type?: 'number' | 'category';
};
/**
 * Get the ticks of an axis
 * @param  {Object}  axis The configuration of an axis
 * @param {Boolean} isGrid Whether or not are the ticks in grid
 * @param {Boolean} isAll Return the ticks of all the points or not
 * @return {Array}  Ticks
 */
export declare const getTicksOfAxis: (axis: null | AxisPropsNeededForTicksGenerator, isGrid?: boolean, isAll?: boolean) => ReadonlyArray<TickItem> | null;
export declare const checkDomainOfScale: (scale: any) => void;
/**
 * Both value and domain are tuples of two numbers
 * - but the type stays as array of numbers until we have better support in rest of the app
 * @param value input that will be truncated
 * @param domain boundaries
 * @returns tuple of two numbers
 */
export declare const truncateByDomain: (value: SeriesPoint<Record<number, number>>, domain: ReadonlyArray<number>) => [number, number] | SeriesPoint<Record<number, number>>;
/**
 * Stacks all positive numbers above zero and all negative numbers below zero.
 *
 * If all values in the series are positive then this behaves the same as 'none' stacker.
 *
 * @param {Array} series from d3-shape Stack
 * @return {Array} series with applied offset
 */
export declare const offsetSign: OffsetAccessor;
/**
 * Replaces all negative values with zero when stacking data.
 *
 * If all values in the series are positive then this behaves the same as 'none' stacker.
 *
 * @param {Array} series from d3-shape Stack
 * @return {Array} series with applied offset
 */
export declare const offsetPositive: OffsetAccessor;
/**
 * Function type to compute offset for stacked data.
 *
 * d3-shape has something fishy going on with its types.
 * In @definitelytyped/d3-shape, this function (the offset accessor) is typed as Series<> => void.
 * However! When I actually open the storybook I can see that the offset accessor actually receives Array<Series<>>.
 * The same I can see in the source code itself:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/66042
 * That one unfortunately has no types but we can tell it passes three-dimensional array.
 *
 * Which leads me to believe that definitelytyped is wrong on this one.
 * There's open discussion on this topic without much attention:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/66042
 */
type OffsetAccessor = (series: Array<Series<Record<string, unknown>, string>>, order: number[]) => void;
export declare const getStackedData: (data: ReadonlyArray<Record<string, unknown>>, dataKeys: ReadonlyArray<DataKey<any>>, offsetType: StackOffsetType) => ReadonlyArray<Series<Record<string, unknown>, DataKey<any>>>;
export type StackId = string | number;
/**
 * Stack IDs in the external props allow numbers; but internally we use it as an object key
 * and object keys are always strings. Also it would be kinda confusing if stackId=8 and stackId='8' were different stacks
 * so let's just force a string.
 */
export type NormalizedStackId = string;
export declare function getNormalizedStackId(publicStackId: StackId | undefined): NormalizedStackId | undefined;
export declare function getCateCoordinateOfLine<T extends Record<string, unknown>>({ axis, ticks, bandSize, entry, index, dataKey, }: {
    axis: {
        dataKey?: DataKey<T>;
        allowDuplicatedCategory?: boolean;
        type?: BaseAxisProps['type'];
        scale: (v: number) => number;
    };
    ticks: Array<TickItem>;
    bandSize: number;
    entry: T;
    index: number;
    dataKey?: DataKey<T>;
}): number | null;
export declare const getCateCoordinateOfBar: ({ axis, ticks, offset, bandSize, entry, index, }: {
    axis: BaseAxisWithScale;
    ticks: ReadonlyArray<TickItem>;
    offset: number;
    bandSize: number;
    entry: any;
    index: number;
}) => number | null;
export declare const getBaseValueOfBar: ({ numericAxis }: {
    numericAxis: BaseAxisWithScale;
}) => number | unknown;
export declare const getDomainOfStackGroups: (stackGroups: Record<StackId, StackGroup> | undefined, startIndex: number, endIndex: number) => NumberDomain | undefined;
export declare const MIN_VALUE_REG: RegExp;
export declare const MAX_VALUE_REG: RegExp;
/**
 * Calculate the size between two category
 * @param  {Object} axis  The options of axis
 * @param  {Array}  ticks The ticks of axis
 * @param  {Boolean} isBar if items in axis are bars
 * @return {Number} Size
 */
export declare const getBandSizeOfAxis: (axis?: BaseAxisWithScale, ticks?: ReadonlyArray<TickItem>, isBar?: boolean) => number | undefined;
export declare function getTooltipEntry({ tooltipEntrySettings, dataKey, payload, value, name, }: {
    tooltipEntrySettings: TooltipEntrySettings;
    dataKey: DataKey<any> | undefined;
    payload: any;
    value: ValueType;
    name: string | undefined;
}): TooltipPayloadEntry;
export declare function getTooltipNameProp(nameFromItem: string | number | undefined | unknown, dataKey: DataKey<any> | undefined): string | undefined;
export declare function inRange(x: number, y: number, layout: LayoutType, polarViewBox: PolarViewBoxRequired | undefined, offset: ChartOffsetInternal): RangeObj | null;
export declare const getActiveCoordinate: (layout: LayoutType, tooltipTicks: readonly TickItem[], activeIndex: number, rangeObj: RangeObj) => ChartCoordinate;
export declare const calculateTooltipPos: (rangeObj: RangeObj, layout: LayoutType) => number | undefined;
export {};
