import { StorybookArgs } from '../../../StorybookArgs';
import { CategoricalChartProps } from './ChartProps';

export const BarChartProps: StorybookArgs = {
  ...CategoricalChartProps,
  barCategoryGap: {
    description: 'The gap between two bar categories, which can be a percent value or a fixed value.',
    table: {
      type: {
        summary: 'Percentage | number',
      },
      defaultValue: '10%',
      category: 'Bar',
    },
  },
  barGap: {
    description: 'The gap between two bars in the same category.',
    table: {
      type: {
        summary: 'number',
      },
      defaultValue: 4,
      category: 'Bar',
    },
  },
  barSize: {
    description: `The width or height of each bar. If the barSize is not specified, the size of the bar
      will be calculated by the barCategoryGap, barGap and the quantity of bar groups.`,
    control: {
      type: 'number',
    },
    table: {
      type: {
        summary: 'number | Percentage',
      },
      category: 'Bar',
    },
  },
  maxBarSize: {
    description: 'The maximum size of bar.',
    control: {
      type: 'number',
    },
    table: {
      type: {
        summary: 'number',
      },
      category: 'Bar',
    },
  },
};
