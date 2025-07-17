/*
 * This file both exports the documentation of shared props separately, to be reused in places where only single props
 * are documented, as well as grouped in case a whole group is needed.
 */

import { StorybookArgs } from '../../../StorybookArgs';

/**
 * Caveat: If any prop is added here, it would falsely be add to the documentation of the component
 * where this group is used. If the group is to be extended, then only single props should be imported
 * by each component that does not use all of them.
 * */
export const SectorProps: StorybookArgs = {
  cx: {
    description: 'The x-coordinate of center.',
    table: {
      type: { summary: 'Number' },
      defaultValue: { summary: 0 },
    },
  },
  cy: {
    description: 'The y-coordinate of center.',
    table: {
      type: { summary: 'Number' },
      defaultValue: { summary: 0 },
    },
  },
  innerRadius: {
    description: 'The inner radius of the sector.',
    table: {
      type: { summary: 'Number' },
      defaultValue: { summary: 0 },
    },
  },
  outerRadius: {
    description: 'The outer radius of the sector.',
    table: {
      type: { summary: 'Number' },
      defaultValue: { summary: 0 },
    },
  },
  startAngle: {
    description: 'The start angle of the sector.',
    table: {
      type: { summary: 'Number' },
      defaultValue: { summary: 0 },
    },
  },
  endAngle: {
    description: 'The end angle of the sector.',
    table: {
      type: { summary: 'Number' },
      defaultValue: { summary: 0 },
    },
  },
  cornerRadius: {
    description: 'The radius of corners.',
    table: {
      type: { summary: 'Number' },
      defaultValue: { summary: 0 },
    },
  },
  forceCornerRadius: {
    description: 'Whether or not force to render round corner when the angle of sector is very small',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
};
