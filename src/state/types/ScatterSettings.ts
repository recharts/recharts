import { ChartData } from '../chartDataSlice';
import { DataKey } from '../../util/types';
import { TooltipType } from '../../component/DefaultTooltipContent';
import { BaseCartesianGraphicalItemSettings } from '../graphicalItemsSlice';

export type ScatterSettings = BaseCartesianGraphicalItemSettings & {
  type: 'scatter';
  data: ChartData | undefined;
  dataKey: DataKey<any> | undefined;
  tooltipType: TooltipType | undefined;
  name: string | number | undefined;
};
