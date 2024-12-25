import { DataKey, LayoutType, Margin, StackOffsetType } from '../util/types';
import { AxisStackGroups } from '../util/ChartUtils';

export interface CategoricalChartState {
  chartX?: number;

  chartY?: number;

  dataStartIndex?: number;

  dataEndIndex?: number;

  updateId?: number;

  /** Active label of data */
  activeLabel?: string;

  activeIndex?: number;

  xValue?: number;

  yValue?: number;

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
