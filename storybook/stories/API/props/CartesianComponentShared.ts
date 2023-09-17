import { StorybookArg, StorybookArgs } from '../../../StorybookArgs';

export const dataKey: StorybookArg = {
  description: `The key or getter of a group of data.
      It could be an accessor function such as (row)=>value`,
  table: {
    type: { summary: 'string | number | function' },
    category: 'General',
  },
};

export const nameKey: StorybookArg = {
  description: "The key of each sector's name.",
  table: {
    type: { summary: 'String' },
    category: 'General',
  },
};

export const activeShape: StorybookArg = {
  description: '',
  table: {
    type: {
      summary: 'Object | ReactElement | Function',
    },
    category: 'General',
  },
};

export const trapezoids: StorybookArg = {
  description: 'The coordinates of all trapezoids in the chart, usually calculated internally',
  table: {
    type: {
      summary: 'Array',
      detail: '[{x: 12, y: 12, upperWidth: 240, lowerWidth: 22, height: 80}]',
    },
  },
};

export const xAxisId: StorybookArg = {
  description: 'The id of x-axis which is corresponding to the data.',
  table: { type: { summary: 'string | number' }, category: 'General' },
};
export const yAxisId: StorybookArg = {
  description: 'The id of y-axis which is corresponding to the data.',
  table: { type: { summary: 'string | number' }, category: 'General' },
};
export const zAxisId: StorybookArg = {
  description: 'The id of z-axis which is corresponding to the data.',
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

export const points: StorybookArg = {
  description:
    'The coordinates of points in the line, usually calculated internally. In most cases this should not be used.',
  table: {
    type: {
      summary: 'array',
      detail: '[{x: 12, y: 12, value: 240}]',
    },
    category: 'Internal',
  },
};

export const data: StorybookArg = { table: { category: 'Internal' } };
export const layout: StorybookArg = {
  description: 'The layout of line, usually inherited from parent.',
  table: {
    type: {
      summary: 'horizontal | vertical',
    },
    category: 'Internal',
  },
};
export const Internal: StorybookArgs = {
  points,
  data,
  layout,
};
