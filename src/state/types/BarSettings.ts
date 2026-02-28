import { MinPointSize } from '../../util/BarUtils';
import { MaybeStackedGraphicalItem } from './StackedGraphicalItem';
import { BaseCartesianGraphicalItemSettings } from '../graphicalItemsSlice';

export type BarSettings = BaseCartesianGraphicalItemSettings &
  MaybeStackedGraphicalItem & {
    type: 'bar';
    maxBarSize: number | undefined;
    minPointSize: MinPointSize;
    /**
     * When true, zero-dimension bars are not filtered out because the custom shape may still render something visible.
     */
    hasCustomShape: boolean;
  };
