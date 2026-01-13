/*
 * This file both exports the documentation of shared props separately, to be reused in places where only single props
 * are documented, as well as grouped in case a whole group is needed.
 */

import { StorybookArg } from '../../../StorybookArgs';

export const isUpdateAnimationActive: StorybookArg = {
  description: 'If set false, animation of component updates will be disabled.',
  defaultValue: 'auto',
  table: { category: 'Animation' },
};
