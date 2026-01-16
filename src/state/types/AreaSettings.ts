import { BaseValue } from '../../cartesian/Area';
import { ChartData } from '../chartDataSlice';
import { MaybeStackedGraphicalItem } from './StackedGraphicalItem';
import { BaseCartesianGraphicalItemSettings } from '../graphicalItemsSlice';
import { TypedDataKey } from '../../util/getTypedValue';

export type AreaSettings<DataPointType = unknown, ValueAxisType = unknown> = BaseCartesianGraphicalItemSettings<
  DataPointType,
  ValueAxisType
> &
  MaybeStackedGraphicalItem<DataPointType, ValueAxisType> & {
    type: 'area';
    connectNulls: boolean;
    baseValue: BaseValue | undefined;
    dataKey: TypedDataKey<DataPointType, ValueAxisType>;
    data: ChartData<DataPointType> | undefined;
  };
