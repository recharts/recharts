import { Props } from './PolarAngleAxis';
import { DefaultZIndexes } from '../zindex/DefaultZIndexes';

export const defaultPolarAngleAxisProps = {
  allowDecimals: false,
  allowDuplicatedCategory: true, // if I set this to false then Tooltip synchronisation stops working in Radar, wtf
  angleAxisId: 0,
  axisLine: true,
  cx: 0,
  cy: 0,
  orientation: 'outer',
  reversed: false,
  scale: 'auto',
  tick: true,
  tickLine: true,
  tickSize: 8,
  type: 'category',
  zIndex: DefaultZIndexes.axis,
} as const satisfies Props;
