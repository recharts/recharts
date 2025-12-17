import { SyntheticEvent } from 'react';
import { MouseHandlerDataParam } from '../synchronisation/types';

export type TooltipTrigger = 'hover' | 'click';

export type CategoricalChartFunc = (nextState: MouseHandlerDataParam, event: SyntheticEvent) => void;

export interface ExternalMouseEvents {
  /**
   * The customized event handler of click in this chart.
   */
  onClick?: CategoricalChartFunc;
  /**
   * The customized event handler of mouseleave in this chart.
   */
  onMouseLeave?: CategoricalChartFunc;
  /**
   * The customized event handler of mouseenter in this chart.
   */
  onMouseEnter?: CategoricalChartFunc;
  /**
   * The customized event handler of mousemove in this chart.
   */
  onMouseMove?: CategoricalChartFunc;
  /**
   * The customized event handler of mousedown in this chart.
   */
  onMouseDown?: CategoricalChartFunc;
  /**
   * The customized event handler of mouseup in this chart.
   */
  onMouseUp?: CategoricalChartFunc;
  /**
   * The customized event handler of contextmenu in this chart.
   */
  onContextMenu?: CategoricalChartFunc;
  /**
   * The customized event handler of dblclick in this chart.
   */
  onDoubleClick?: CategoricalChartFunc;
  /**
   * The customized event handler of touchstart in this chart.
   */
  onTouchStart?: CategoricalChartFunc;
  /**
   * The customized event handler of touchmove in this chart.
   */
  onTouchMove?: CategoricalChartFunc;
  /**
   * The customized event handler of touchend in this chart.
   */
  onTouchEnd?: CategoricalChartFunc;
}
