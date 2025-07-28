import { BaseValue } from '../../cartesian/Area';
import { DataKey } from '../../util/types';
import { ChartData } from '../chartDataSlice';
import { MaybeStackedGraphicalItem } from './StackedGraphicalItem';
import { BaseCartesianGraphicalItemSettings } from '../graphicalItemsSlice';

export type AreaSettings = BaseCartesianGraphicalItemSettings &
  MaybeStackedGraphicalItem & {
    type: 'area';
    connectNulls: boolean;
    baseValue: BaseValue | undefined;
    dataKey: DataKey<any>;
    data: ChartData | undefined;
  };
