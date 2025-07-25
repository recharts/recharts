import { LayoutType, Margin } from '../util/types';
/**
 * "Main" props are props that are only accepted on the main chart,
 * as opposed to the small panorama chart inside a Brush.
 */
type MainChartProps = {
    width: number;
    height: number;
    layout: LayoutType;
    margin: Margin;
};
export declare function ReportMainChartProps({ layout, width, height, margin }: MainChartProps): null;
export {};
