/**
 * @fileOverview Y Axis
 */
import { ReactElement } from 'react';
import { ScaleType, PresentationAttributes } from '../util/types';

interface Props {
  allowDecimals?: boolean;
  allowDuplicatedCategory?: boolean;
  hide?: boolean;
  /** The name of data displayed in the axis */ 
  name?: string | number;
  /** The unit of data displayed in the axis */ 
  unit?: string | number;
  /** The unique id of y-axis */
  yAxisId?: string | number;
  domain?: (string | number | Function | 'auto' | 'dataMin' | 'dataMax')[];
  /** The key of data displayed in the axis */ 
  dataKey?: string | number | Function;
  /**
   * Ticks can be any type when the axis is the type of category
   * Ticks must be numbers when the axis is the type of number
   */
  ticks?: (string | number)[];
  /** The count of ticks */
  tickCount?: number;
  /** The formatter function of tick */ 
  tickFormatter?: (value: any) => string;
  /** The width of axis, which need to be setted by user */
  width?: number;
  /** The height of axis which is usually calculated in Chart */
  height?: number;
  mirror?: boolean;
  /** The orientation of axis */
  orientation?: 'left' | 'right';
  type?: 'number' | 'category';
  padding?: {
    top?: number;
    bottom?: number;
  };
  allowDataOverflow?: boolean;
  scale?: ScaleType | Function;
  tick?: PresentationAttributes<SVGTextElement> | ReactElement<SVGElement> | ((props: any) => SVGElement) | boolean;
  axisLine?: boolean | PresentationAttributes<SVGLineElement>;
  tickLine?: boolean | PresentationAttributes<SVGTextElement>;
  minTickGap?: number;
  tickSize?: number;
  interval?: number | 'preserveStart' | 'preserveEnd' | 'preserveStartEnd';
  reversed?: boolean;
};

function YAxis(props: Props): SVGElement {
  return null;
}

YAxis.displayName = 'YAxis';
YAxis.defaultProps = {
  allowDuplicatedCategory: true,
  allowDecimals: true,
  hide: false,
  orientation: 'left',
  width: 60,
  height: 0,
  mirror: false,
  yAxisId: 0,
  tickCount: 5,
  type: 'number',
  domain: [0, 'auto'],
  padding: { top: 0, bottom: 0 },
  allowDataOverflow: false,
  scale: 'auto',
  reversed: false,
}

export default YAxis;
