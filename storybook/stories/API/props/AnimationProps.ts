/*
 * This file both exports the documentation of shared props separately, to be reused in places where only single props
 * are documented, as well as grouped in case a whole group is needed.
 */
import { StorybookArg, StorybookArgs } from '../../../StorybookArgs';

export const animateNewValues: StorybookArg = { table: { category: 'Animation' } };
export const animationBegin: StorybookArg = {
  description: 'Specifies when the animation should begin, the unit of this option is ms.',
  type: { name: 'number' },
  defaultValue: 0,
  table: {
    defaultValue: { summary: '0' },
    category: 'Animation',
  },
};
export const animationDuration: StorybookArg = {
  table: {
    category: 'Animation',
  },
};
export const animationEasing: StorybookArg = {
  table: {
    category: 'Animation',
  },
};
export const animationId: StorybookArg = { table: { category: 'Animation' } };
export const isAnimationActive: StorybookArg = {
  description: 'If set false, animation of component will be disabled.',
  table: {
    type: { summary: 'boolean' },
    defaultValue: { summary: 'true in CSR, and false in SSR' },
    category: 'Animation',
  },
  defaultValue: true,
};

/**
 * Caveat: If any prop is added here, it would falsely be add to the documentation of the component where this group
 * is used. If the group is to be extended, then only single props should be imported by each component that does not
 * use all of them.
 * */
export const AnimationProps: StorybookArgs = {
  animateNewValues,
  animationBegin,
  animationEasing,
  animationDuration,
  animationId,
  isAnimationActive,
};
