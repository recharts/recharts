import { StorybookArgs } from '../../../StorybookArgs';
import { CategoricalChartProps } from './ChartProps';

export const PolarChartProps: StorybookArgs = {
  ...CategoricalChartProps,
  cx: {
    description: 'The x-coordinate of the center of the circle.',
    table: {
      type: {
        summary: 'number',
      },
      category: 'Polar',
    },
  },
  cy: {
    description: 'The y-coordinate of the center of the circle.',
    table: {
      type: {
        summary: 'number',
      },
      category: 'Polar',
    },
  },
  innerRadius: {
    description: 'The inner radius of polar chart.',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'Polar',
    },
  },
  outerRadius: {
    description: 'The outer radius of polar chart.',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'Polar',
    },
  },
  startAngle: {
    description: 'The start angle of polar chart.',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'Polar',
    },
  },
  endAngle: {
    description: 'The end angle of polar chart.',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'Polar',
    },
  },
};
