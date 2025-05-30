import { Props } from './PolarRadiusAxis';

export const defaultPolarRadiusAxisProps = {
  allowDataOverflow: false,
  allowDuplicatedCategory: true,
  angle: 0,
  axisLine: true,
  cx: 0,
  cy: 0,
  orientation: 'right',
  radiusAxisId: 0,
  scale: 'auto',
  stroke: '#ccc',
  tick: true,
  tickCount: 5,
  type: 'number',
} as const satisfies Props;
