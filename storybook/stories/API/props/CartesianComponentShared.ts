import { Args } from '@storybook/react';

export const General: Args = {
  id: {
    description: `The unique id of this component, which will be used to generate unique clip path id internally.
      This props is suggested to be set in SSR.`,
    type: { name: 'string' },
    table: { category: 'General' },
  },
  name: {
    type: { name: 'string | number' },
    description: `The name of data. This option will be used in tooltip and legend to represent a line.
      If no value was set to this option, the value of dataKey will be used alternatively.`,
    table: { category: 'General' },
  },
  unit: {
    type: { name: 'string | number' },
    table: {
      category: 'General',
    },
  },
  xAxisId: {
    description: 'The id of x-axis which is corresponding to the data.',
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
  yAxisId: {
    description: 'The id of y-axis which is corresponding to the data.',
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
  dataKey: {
    description: `The key or getter of a group of data which should be unique in a LineChart.
      It could be an accessor function such as (row)=>value`,
    table: {
      type: { summary: 'string | number | function' },
      category: 'General',
    },
  },
};

export const Internal = {
  points: {
    description:
      'The coordinates of points in the line, usually calculated internally. In most cases this should not be used.',
    table: {
      type: {
        summary: 'array',
        detail: '[{x: 12, y: 12, value: 240}]',
      },
      category: 'Internal',
    },
  },
  data: { table: { category: 'Internal' } },
  layout: {
    description: 'The layout of line, usually inherited from parent.',
    table: {
      type: {
        summary: 'horizontal | vertical',
      },
      category: 'Internal',
    },
  },
};
