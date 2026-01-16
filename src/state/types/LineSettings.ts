import { ChartData } from '../chartDataSlice';
import { DataKey } from '../../util/types';
import { BaseCartesianGraphicalItemSettings } from '../graphicalItemsSlice';

import { TypedDataKey } from '../../util/getTypedValue';

export type LineSettings<DataPointType = unknown, ValueAxisType = unknown> = BaseCartesianGraphicalItemSettings<
  DataPointType,
  ValueAxisType
> & {
  type: 'line';
  data: ChartData<DataPointType> | undefined;
  dataKey: TypedDataKey<DataPointType, ValueAxisType> | undefined;
};
