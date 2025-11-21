/*
 * This file both exports the documentation of shared props separately, to be reused in places where only single props
 * are documented, as well as grouped in case a whole group is needed.
 */
import { StorybookArg, StorybookArgs } from '../../../StorybookArgs';

export const animateNewValues: StorybookArg = { table: { category: 'Animation' }, defaultValue: true };
export const animationBegin: StorybookArg = {
  description: 'Delays the start of the animation by the specified number of milliseconds.',
  type: { name: 'number' },
  defaultValue: 0,
  table: {
    category: 'Animation',
  },
};
export const animationDuration: StorybookArg = {
  defaultValue: 1500,
  table: {
    category: 'Animation',
  },
};
export const animationEasing: StorybookArg = {
  defaultValue: 'ease',
  table: {
    category: 'Animation',
  },
};

export const isAnimationActive: StorybookArg = {
  description: 'If set false, animation of component will be disabled.',
  defaultValue: 'auto',
  table: {
    type: { summary: 'boolean | "auto"' },
    category: 'Animation',
  },
};

/**
 * Caveat: If any prop is added here, it would falsely be add to the documentation of the component where this group
 * is used. If the group is to be extended, then only single props should be imported by each component that does not
 * use all of them.
 * */
export const AnimationProps: StorybookArgs = {
  animationBegin,
  animationEasing,
  animationDuration,
  isAnimationActive,
};
