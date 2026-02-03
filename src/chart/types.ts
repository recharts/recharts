import { SyntheticEvent, MouseEvent, TouchEvent } from 'react';
import { MouseHandlerDataParam } from '../synchronisation/types';

export type TooltipTrigger = 'hover' | 'click';

export type CategoricalChartFunc<E = SyntheticEvent> = (nextState: MouseHandlerDataParam, event: E) => void;

export interface ExternalMouseEvents {
  /**
   * The customized event handler of click in this chart.
   */
  onClick?: CategoricalChartFunc<MouseEvent<SVGGraphicsElement>>;
  /**
   * The customized event handler of mouseleave in this chart.
   */
  onMouseLeave?: CategoricalChartFunc<MouseEvent<SVGGraphicsElement>>;
  /**
   * The customized event handler of mouseenter in this chart.
   */
  onMouseEnter?: CategoricalChartFunc<MouseEvent<SVGGraphicsElement>>;
  /**
   * The customized event handler of mousemove in this chart.
   */
  onMouseMove?: CategoricalChartFunc<MouseEvent<SVGGraphicsElement>>;
  /**
   * The customized event handler of mousedown in this chart.
   */
  onMouseDown?: CategoricalChartFunc<MouseEvent<SVGGraphicsElement>>;
  /**
   * The customized event handler of mouseup in this chart.
   */
  onMouseUp?: CategoricalChartFunc<MouseEvent<SVGGraphicsElement>>;
  /**
   * The customized event handler of contextmenu in this chart.
   */
  onContextMenu?: CategoricalChartFunc<MouseEvent<SVGGraphicsElement>>;
  /**
   * The customized event handler of dblclick in this chart.
   */
  onDoubleClick?: CategoricalChartFunc<MouseEvent<SVGGraphicsElement>>;
  /**
   * The customized event handler of touchstart in this chart.
   */
  onTouchStart?: CategoricalChartFunc<TouchEvent<SVGGraphicsElement>>;
  /**
   * The customized event handler of touchmove in this chart.
   */
  onTouchMove?: CategoricalChartFunc<TouchEvent<SVGGraphicsElement>>;
  /**
   * The customized event handler of touchend in this chart.
   */
  onTouchEnd?: CategoricalChartFunc<TouchEvent<SVGGraphicsElement>>;
}
