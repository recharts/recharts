import { MinPointSize } from '../../util/BarUtils';
import { MaybeStackedGraphicalItem } from './StackedGraphicalItem';
import { BaseCartesianGraphicalItemSettings } from '../graphicalItemsSlice';

export type BarSettings<DataPointType = unknown, ValueAxisType = unknown> = BaseCartesianGraphicalItemSettings<
  DataPointType,
  ValueAxisType
> &
  MaybeStackedGraphicalItem<DataPointType, ValueAxisType> & {
    type: 'bar';
    maxBarSize: number | undefined;
    minPointSize: MinPointSize;
  };
