/*
 * This file both exports the documentation of shared props separately, to be reused in places where only single props
 * are documented, as well as grouped in case a whole group is needed.
 */
import { StorybookArg } from '../../../StorybookArgs';

export const r: StorybookArg = {
  description: 'The radius of the dot.',
  control: { type: 'number' },
  table: {
    type: { summary: 'number' },
    defaultValue: { summary: 10 },
    category: 'General',
  },
  defaultValue: 10,
};

export const cx: StorybookArg = {
  description: 'The x-coordinate of the dots center.',
  table: {
    type: { summary: 'number' },
    category: 'General',
  },
};

export const cy: StorybookArg = {
  description: 'The y-coordinate of the dots center.',
  table: {
    type: { summary: 'number' },
    category: 'General',
  },
};
