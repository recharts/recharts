import { ChartData } from '../chartDataSlice';
import { DataKey } from '../../util/types';
import { TooltipType } from '../../component/DefaultTooltipContent';
import { BaseCartesianGraphicalItemSettings } from '../graphicalItemsSlice';

import { TypedDataKey } from '../../util/getTypedValue';

export type ScatterSettings<DataPointType = unknown, ValueAxisType = unknown> = BaseCartesianGraphicalItemSettings<
  DataPointType,
  ValueAxisType
> & {
  type: 'scatter';
  data: ChartData<DataPointType> | undefined;
  dataKey: TypedDataKey<DataPointType, ValueAxisType> | undefined;
  tooltipType: TooltipType | undefined;
  name: string | number | undefined;
};
