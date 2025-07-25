import { ChartData } from '../chartDataSlice';
import { DataKey } from '../../util/types';
import { MinPointSize } from '../../util/BarUtils';
import { NormalizedStackId } from '../../util/ChartUtils';
import { MaybeStackedGraphicalItem } from './StackedGraphicalItem';
import { BaseCartesianGraphicalItemSettings, GraphicalItemId } from '../graphicalItemsSlice';

export type BarSettings = BaseCartesianGraphicalItemSettings &
  MaybeStackedGraphicalItem & {
    type: 'bar';
    id: GraphicalItemId;
    /**
     * This property is only used in Bar and RadialBar items
     */
    barSize: number | string | undefined;
    data: ChartData | undefined;
    dataKey: DataKey<any>;
    maxBarSize: number | undefined;
    minPointSize: MinPointSize;
    stackId: NormalizedStackId | undefined;
  };
