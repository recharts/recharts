import { StorybookArg } from '../../../StorybookArgs';

export const dataKey: StorybookArg = {
  description: `The key or getter of a group of data.
      It could be an accessor function such as (row)=>value`,
  table: {
    type: { summary: 'string | number | function' },
    category: 'General',
  },
};
