import { StoryContext } from '@storybook/react';

/**
 * storybook-addon-recharts adds some more properties to the StoryContext.
 */
export type RechartsStoryContext = StoryContext & {
  rechartsInspectorEnabled: boolean;
};
