/**
 * @fileOverview Z Axis
 */
import type { FunctionComponent } from 'react';
import { ScaleType, DataKey, AxisDomain } from '../util/types';

export interface Props {
  type?: 'number' | 'category';
  /** The name of data displayed in the axis */
  name?: string | number;
  /** The unit of data displayed in the axis */
  unit?: string | number;
  /** The unique id of z-axis */
  zAxisId?: string | number;
  /** The key of data displayed in the axis */
  dataKey?: DataKey<any>;
  /** The range of axis */
  range?: number[];
  scale?: ScaleType | Function;
  /** The domain of scale in this axis */
  domain?: AxisDomain;
}

export const ZAxis: FunctionComponent<Props> = () => null;

ZAxis.displayName = 'ZAxis';
ZAxis.defaultProps = {
  zAxisId: 0,
  range: [64, 64],
  scale: 'auto',
  type: 'number',
};
