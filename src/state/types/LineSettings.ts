import { ChartData } from '../chartDataSlice';
import { DataKey } from '../../util/types';
import { BaseCartesianGraphicalItemSettings } from '../graphicalItemsSlice';

export type LineSettings = BaseCartesianGraphicalItemSettings & {
  type: 'line';
  data: ChartData | undefined;
  dataKey: DataKey<any> | undefined;
};
