import { TooltipType } from '../../component/DefaultTooltipContent';
import { DataKey } from '../../util/types';
import { BaseCartesianGraphicalItemSettings } from '../graphicalItemsSlice';
import { ChartData } from '../chartDataSlice';

export type HeatMapDimension = number | { width?: number; height?: number };
export type HeatMapGap = number | { x?: number; y?: number };

export type HeatMapSettings = BaseCartesianGraphicalItemSettings & {
  type: 'heatMap';
  data: ChartData | undefined;
  dataKey: DataKey<any> | undefined;
  tooltipType: TooltipType | undefined;
  name: string | number | undefined;
  unit: string | number | undefined;
  cellSize: HeatMapDimension | undefined;
  cellGap: HeatMapGap | undefined;
};
