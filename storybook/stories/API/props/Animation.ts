/*
 * This file both exports the documentation of shared props separately, to be reused in places where only single props
 * are documented, as well as grouped in case a whole group is needed.
 */

export const animateNewValues = { table: { category: 'Animation' } };
export const animationBegin = {
  description: 'Specifies when the animation should begin, the unit of this option is ms.',
  type: { name: 'number' },
  defaultValue: 0,
  table: { category: 'Animation' },
};
export const animationDuration = {
  description: 'Specifies the duration of animation, the unit of this option is ms.',
  type: { name: 'number' },
  defaultValue: 1500,
  table: { category: 'Animation' },
};
export const animationEasing = {
  description: 'The type of easing function.',
  type: { name: 'ease | ease-in | ease-out | ease-in-out | linear' },
  defaultValue: 'ease',
  table: { category: 'Animation' },
};
export const animationId = { table: { category: 'Animation' } };
export const isAnimationActive = {
  description: 'If set false, animation of component will be disabled.',
  table: { type: { summary: 'boolean' }, category: 'Animation' },
  defaultValue: 'true in CSR, and false in SSR',
};

// Caveat: If any prop is added here, it would falsely be add to the documentation of the component where this group is used.
// If the group is to be extended, then only single props should be imported by each component that does not use all of them.
export const Animation = {
  animateNewValues,
  animationBegin,
  animationEasing,
  animationDuration,
  animationId,
  isAnimationActive,
};
