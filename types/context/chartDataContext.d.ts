import { ChartData } from '../state/chartDataSlice';
import { BrushStartEndIndex } from './brushUpdateContext';
export declare const ChartDataContextProvider: (props: {
    chartData: ChartData | undefined;
}) => null;
export declare const SetComputedData: (props: {
    computedData: any;
}) => null;
/**
 * "data" is the data of the chart - it has no type because this part of recharts is very flexible.
 * Basically it's an array of "something" and then there's the dataKey property in various places
 * that's meant to pull other things away from the data.
 *
 * Some charts have `data` defined on the chart root, and they will return the array through this hook.
 * For example: <ComposedChart data={data} />.
 *
 * Other charts, such as Pie, have data defined on individual graphical elements.
 * These charts will return `undefined` through this hook, and you need to read the data from children.
 * For example: <PieChart><Pie data={data} />
 *
 * Some charts also allow setting both - data on the parent, and data on the children at the same time!
 * However, this particular selector will only return the ones defined on the parent.
 *
 * @deprecated use one of the other selectors instead - which one, depends on how do you identify the applicable graphical items.
 *
 * @return data array for some charts and undefined for other
 */
export declare const useChartData: () => ChartData | undefined;
/**
 * startIndex and endIndex are data boundaries, set through Brush.
 *
 * @return object with startIndex and endIndex
 */
export declare const useDataIndex: () => BrushStartEndIndex;
