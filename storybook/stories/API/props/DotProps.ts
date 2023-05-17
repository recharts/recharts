/*
 * This file both exports the documentation of shared props separately, to be reused in places where only single props
 * are documented, as well as grouped in case a whole group is needed.
 */
import { Args } from '@storybook/react';

export const r = {
  description: 'The radius of the dot.',
  control: { type: 'number' },
  table: {
    type: { summary: 'number' },
    defaultValue: { summary: 10 },
    category: 'General',
  },
  defaultValue: 10,
};

export const cx = {
  description: 'The x-coordinate of the dots center.',
  table: {
    type: { summary: 'number' },
    category: 'General',
  },
};

export const cy = {
  description: 'The y-coordinate of the dots center.',
  table: {
    type: { summary: 'number' },
    category: 'General',
  },
};

/**
 * Caveat: If any prop is added here, it would falsely be add to the documentation of the component where this group
 * is used. If the group is to be extended, then only single props should be imported by each component that does not
 * use all of them.
 * */
export const DotProps: Args = {
  r,
  cx,
  cy,
};
