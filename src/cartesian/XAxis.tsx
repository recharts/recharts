/**
 * @fileOverview X Axis
 */
import { ReactElement } from 'react';
import { ScaleType, PresentationAttributes } from '../util/types';

/** Define of XAxis props */
export interface Props {
  allowDecimals?: boolean;
  allowDuplicatedCategory?: boolean;
  hide?: boolean;
  /** The name of data displayed in the axis */ 
  name?: string | number;
  /** The unit of data displayed in the axis */ 
  unit?: string | number;
  /** The unique id of x-axis */
  xAxisId?: string | number;
  /** The domain of scale */
  domain?: (string | number | Function | 'auto' | 'dataMin' | 'dataMax')[];
  /** The key of data displayed in the axis */ 
  dataKey?: string | number | Function;
  /** The width of axis which is usually calculated internally */
  width?: number;
  /** The height of axis, which need to be setted by user */
  height?: number;
  mirror?: boolean;
  // The orientation of axis
  orientation?: 'top' | 'bottom';
  type?: 'number' | 'category';
  /**
   * Ticks can be any type when the axis is the type of category
   * Ticks must be numbers when the axis is the type of number
   */
  ticks?: (string | number)[];
  /** The count of ticks */
  tickCount?: number;
  /** The formatter function of tick */ 
  tickFormatter?: (value: any) => string;
  padding?: { left?: number; right?: number };
  allowDataOverflow?: boolean;
  scale?: ScaleType | Function;
  tick?: PresentationAttributes<SVGTextElement> | ReactElement<SVGElement> | ((props: any) => SVGElement) | boolean;
  axisLine?: boolean | PresentationAttributes<SVGLineElement>;
  tickLine?: boolean | PresentationAttributes<SVGTextElement>;
  minTickGap?: number;
  tickSize?: number;
  interval?: number | 'preserveStart' | 'preserveEnd' | 'preserveStartEnd';
  reversed?: boolean;
}
function XAxis(props: Props): SVGElement {
  return null;
}

XAxis.displayName = 'XAxis';
XAxis.defaultProps = {
  allowDecimals: true,
  hide: false,
  orientation: 'bottom',
  width: 0,
  height: 30,
  mirror: false,
  xAxisId: 0,
  tickCount: 5,
  type: 'category',
  domain: [0, 'auto'],
  padding: { left: 0, right: 0 },
  allowDataOverflow: false,
  scale: 'auto',
  reversed: false,
  allowDuplicatedCategory: true,
};

export default XAxis;
