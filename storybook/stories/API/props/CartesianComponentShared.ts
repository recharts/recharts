import { StorybookArg, StorybookArgs } from '../../../StorybookArgs';

export const dataKey: StorybookArg = {
  description: `The key or getter of a group of data.
      It could be an accessor function such as (row)=>value`,
  table: {
    type: { summary: 'string | number | function' },
    category: 'General',
  },
};

export const xAxisId: StorybookArg = {
  description: 'The id of x-axis which is corresponding to the data.',
  defaultValue: 0,
  table: { type: { summary: 'string | number' }, category: 'General' },
};
export const yAxisId: StorybookArg = {
  description: 'The id of y-axis which is corresponding to the data.',
  defaultValue: 0,
  table: { type: { summary: 'string | number' }, category: 'General' },
};

export const General: StorybookArgs = {
  dataKey,
  id: {
    description: `The unique id of this component, which will be used to generate unique clip path id internally.
      This props is suggested to be set in SSR.`,
    type: { name: 'string' },
    table: { category: 'General' },
  },
  name: {
    description: `The name of data. This option will be used in tooltip and legend to represent a line.
    If no value was set to this option, the value of dataKey will be used alternatively.`,
    table: {
      type: { summary: 'string | number' },
      category: 'General',
    },
  },
  unit: {
    table: {
      type: { summary: 'string | number' },
      category: 'General',
    },
  },
  xAxisId,
  yAxisId,
};
