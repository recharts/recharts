import { Props } from './PolarRadiusAxis';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';

export const defaultPolarRadiusAxisProps = {
  allowDataOverflow: false,
  allowDecimals: false,
  allowDuplicatedCategory: true,
  angle: 0,
  axisLine: true,
  includeHidden: false,
  label: false,
  orientation: 'right',
  radiusAxisId: 0,
  reversed: false,
  scale: 'auto',
  stroke: '#ccc',
  tick: true,
  tickCount: 5,
  type: 'number',
  zIndex: DefaultZIndexes.axis,
} as const satisfies Props;
