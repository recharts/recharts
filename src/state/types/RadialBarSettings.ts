import { MaybeStackedGraphicalItem } from './StackedGraphicalItem';
import { BasePolarGraphicalItemSettings } from '../graphicalItemsSlice';

export interface RadialBarSettings extends BasePolarGraphicalItemSettings, MaybeStackedGraphicalItem {
  type: 'radialBar';
  minPointSize: number;
  maxBarSize: number | undefined;
}
