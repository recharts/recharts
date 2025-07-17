import { StorybookArgs } from '../../../StorybookArgs';
import { CartesianChartProps } from './CartesianChartProps';

export const AreaChartProps: StorybookArgs = {
  ...CartesianChartProps,
  baseValue: {
    description: 'The base value of area.',
    table: {
      type: {
        summary: "number | 'dataMin' | 'dataMax' | 'auto'",
      },
      defaultValue: 'auto',
      category: 'Area',
    },
  },
};
