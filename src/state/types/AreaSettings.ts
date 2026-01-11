import { BaseValue } from '../../cartesian/Area';
import { ChartData } from '../chartDataSlice';
import { MaybeStackedGraphicalItem } from './StackedGraphicalItem';
import { BaseCartesianGraphicalItemSettings } from '../graphicalItemsSlice';
import { TypedDataKey } from '../../util/getTypedValue';

export type AreaSettings = BaseCartesianGraphicalItemSettings &
  MaybeStackedGraphicalItem & {
    type: 'area';
    connectNulls: boolean;
    baseValue: BaseValue | undefined;
    dataKey: TypedDataKey;
    data: ChartData | undefined;
  };
