import { StorybookArgs } from '../../../StorybookArgs';
import { CategoricalChartProps } from './ChartProps';

export const RadarChartProps: StorybookArgs = {
  ...CategoricalChartProps,
  cx: {
    description: 'The x-coordinate of the center of the circle.',
    defaultValue: '50%',
    table: {
      type: {
        summary: 'number | string',
      },
      category: 'Polar',
    },
  },
  cy: {
    description: 'The y-coordinate of the center of the circle.',
    defaultValue: '50%',
    table: {
      type: {
        summary: 'number | string',
      },
      category: 'Polar',
    },
  },
};
