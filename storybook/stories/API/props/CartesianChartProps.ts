import { StorybookArgs } from '../../../StorybookArgs';
import { CategoricalChartProps } from './ChartProps';

export const CartesianChartProps: StorybookArgs = {
  ...CategoricalChartProps,
  layout: {
    description: 'The layout of areas, bars, lines in the chart.',
    options: ['horizontal', 'vertical'],
    control: {
      type: 'radio',
    },
    table: {
      type: {
        summary: 'horizontal | vertical',
      },
      defaultValue: 'horizontal',
      category: 'General',
    },
  },
  stackOffset: {
    description: `Determines how values are stacked:

- \`none\` is the default, it adds values on top of each other. No smarts. Negative values will overlap.
- \`expand\` make it so that the values always add up to 1 - so the chart will look like a rectangle.
- \`wiggle\` and \`silhouette\` tries to keep the chart centered.
- \`sign\` stacks positive values above zero and negative values below zero. Similar to \`none\` but handles negatives.
- \`positive\` ignores all negative values, and then behaves like \`none\`.

Also see https://d3js.org/d3-shape/stack#stack-offsets
(note that the \`diverging\` offset in d3 is named \`sign\` in recharts)
`,
    options: ['sign', 'expand', 'none', 'wiggle', 'silhouette', 'positive'],
    control: {
      type: 'radio',
    },
    table: {
      type: {
        summary: 'expand | none | wiggle | silhouette | sign | positive',
      },
      defaultValue: 'none',
      category: 'General',
    },
  },
};
