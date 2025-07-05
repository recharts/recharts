import { StoryContext, StrictArgs } from '@storybook/react';
import { Position } from './constants';

export type RechartsContextProperties = {
  rechartsInspectorEnabled: boolean;
  /**
   * The position of the Recharts hook inspector.
   */
  rechartsInspectorPosition: Position;
  /**
   * Function to set the position of the Recharts hook inspector.
   */
  rechartsSetInspectorPosition: (newPosition: Position) => void;
};

/**
 * storybook-addon-recharts adds some more properties to the StoryContext.
 */
export type RechartsStoryContext<T = StrictArgs> = StoryContext<T> & RechartsContextProperties;
