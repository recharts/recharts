import { DataKey, LayoutType, Margin, StackOffsetType, TickItem } from '../util/types';
import { AxisStackGroups } from '../util/ChartUtils';
import { BoundingBox } from '../util/useGetBoundingClientRect';

export interface CategoricalChartState {
  chartX?: number;

  chartY?: number;

  dataStartIndex?: number;

  dataEndIndex?: number;

  isTooltipActive?: boolean;

  updateId?: number;

  orderedTooltipTicks?: any;

  tooltipTicks?: TickItem[];

  /** Active label of data */
  activeLabel?: string;

  activeIndex?: number;

  xValue?: number;

  yValue?: number;

  legendBBox?: BoundingBox | null;

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
