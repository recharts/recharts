import { BarChartProps } from './BarChartProps';
import { StorybookArgs } from '../../../StorybookArgs';
import { PolarChartProps } from './PolarChartProps';

export const RadialBarChartProps: StorybookArgs = {
  ...BarChartProps,
  ...PolarChartProps,
  startAngle: {
    ...PolarChartProps.startAngle,
    defaultValue: 0,
  },
  endAngle: {
    ...PolarChartProps.endAngle,
    defaultValue: 360,
  },
};
