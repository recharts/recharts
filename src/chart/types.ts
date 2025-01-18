import { SyntheticEvent } from 'react';
import { DataKey, LayoutType, Margin, StackOffsetType } from '../util/types';
import { MouseHandlerDataParam } from '../synchronisation/types';

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

  tooltipPortal?: HTMLElement | null;
  cursorPortal?: SVGElement | null;
  legendPortal?: HTMLElement | null;
}

export type TooltipTrigger = 'hover' | 'click';

export type CategoricalChartFunc = (nextState: MouseHandlerDataParam, event: SyntheticEvent) => void;

export interface ExternalMouseEvents {
  onClick: CategoricalChartFunc;
  onMouseLeave: CategoricalChartFunc;
  onMouseEnter: CategoricalChartFunc;
  onMouseMove: CategoricalChartFunc;
  onMouseDown: CategoricalChartFunc;
  onMouseUp: CategoricalChartFunc;
  onContextMenu: CategoricalChartFunc;
  onDoubleClick: CategoricalChartFunc;
  onTouchStart: CategoricalChartFunc;
  onTouchMove: CategoricalChartFunc;
  onTouchEnd: CategoricalChartFunc;
}
