/*
 * This file both exports the documentation of shared props separately, to be reused in places where only single props
 * are documented, as well as grouped in case a whole group is needed.
 */

import { StorybookArg, StorybookArgs } from '../../../StorybookArgs';

export const radius: StorybookArg = {
  description:
    'If set a value, the option is the radius of all the rounderd corners. If set a array, the option' +
    ' are in turn the radiuses of top-left corner, top-right corner, bottom-right corner, bottom-left' +
    ' corner.',
  table: {
    type: { summary: 'number | number[]' },
    defaultValue: { summary: 0 },
    category: 'Style',
  },
};

export const isUpdateAnimationActive: StorybookArg = {
  description: 'If set false, animation of component updates will be disabled.',
  table: { category: 'Animation' },
};

/**
 * Caveat: If any prop is added here, it would falsely be add to the documentation of the component
 * where this group is used. If the group is to be extended, then only single props should be imported
 * by each component that does not use all of them.
 * */
export const RectangleProps: StorybookArgs = {
  radius,
  isUpdateAnimationActive,
};
