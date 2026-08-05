import { ChartData } from '../chartDataSlice';
import { DataKey } from '../../util/types';
import { TooltipType } from '../../component/DefaultTooltipContent';
import { BasePolarGraphicalItemSettings } from '../graphicalItemsSlice';

export interface PolarScatterSettings extends BasePolarGraphicalItemSettings {
  type: 'polarScatter';
  data: ChartData | undefined;
  dataKey: DataKey<any> | undefined;
  tooltipType: TooltipType | undefined;
  name: string | number | undefined;
  size: number;
}
