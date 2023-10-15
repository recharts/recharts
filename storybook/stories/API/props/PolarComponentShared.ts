import { StorybookArg, StorybookArgs } from '../../../StorybookArgs';
import { dataKey } from './CartesianComponentShared';

export const General: StorybookArgs = {
  angleAxisId: {
    description: 'The id of angle axis which is corresponding to the data.',
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
  stackId: {
    description: 'The stack id of bar, when two bars have the same stackId, then two bars are stacked in order.',
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
  radiusAxisId: {
    description: 'The id of radius axis which is corresponding to the data.',
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
};

export const data: StorybookArg = { table: { category: 'Internal' } };

export const Internal: StorybookArgs = {
  data,
  dataKey,
};
