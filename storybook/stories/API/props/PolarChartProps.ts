import { StorybookArgs } from '../../../StorybookArgs';
import { CategoricalChartProps } from './ChartProps';

export const PolarChartProps: StorybookArgs = {
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
  innerRadius: {
    description: 'The inner radius of polar chart.',
    defaultValue: 0,
    table: {
      type: {
        summary: 'number',
      },
      category: 'Polar',
    },
  },
  outerRadius: {
    description: 'The outer radius of polar chart.',
    defaultValue: '80%',
    table: {
      type: {
        summary: 'number',
      },
      category: 'Polar',
    },
  },
  startAngle: {
    description: 'The start angle of polar chart.',
    defaultValue: 90,
    table: {
      type: {
        summary: 'number',
      },
      category: 'Polar',
    },
  },
  endAngle: {
    description: 'The end angle of polar chart.',
    defaultValue: -270,
    table: {
      type: {
        summary: 'number',
      },
      category: 'Polar',
    },
  },
};
