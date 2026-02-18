import { Props } from './PolarAngleAxis';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';

export const defaultPolarAngleAxisProps = {
  allowDecimals: false,
  allowDuplicatedCategory: true, // if I set this to false then Tooltip synchronisation stops working in Radar, wtf
  allowDataOverflow: false,
  angle: 0,
  angleAxisId: 0,
  axisLine: true,
  axisLineType: 'polygon',
  cx: 0,
  cy: 0,
  hide: false,
  includeHidden: false,
  label: false,
  niceTicks: false,
  orientation: 'outer',
  reversed: false,
  scale: 'auto',
  tick: true,
  tickLine: true,
  tickSize: 8,
  type: 'auto',
  zIndex: DefaultZIndexes.axis,
} as const satisfies Props;
