import { DataKey, LayoutType, Margin, StackOffsetType } from '../util/types';
import { AxisStackGroups } from '../util/ChartUtils';

export interface CategoricalChartState {
  updateId?: number;

  prevDataKey?: DataKey<any>;
  prevData?: any[];
  prevWidth?: number;
  prevHeight?: number;
  prevLayout?: LayoutType;
  prevStackOffset?: StackOffsetType;
  prevMargin?: Margin;
  prevChildren?: any;
  stackGroups?: AxisStackGroups;

  tooltipPortal?: HTMLElement | null;
  cursorPortal?: SVGElement | null;
  legendPortal?: HTMLElement | null;
}

export type TooltipTrigger = 'hover' | 'click';
