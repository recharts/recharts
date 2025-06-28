import { Position } from './storybook-addon-recharts/constants';

/**
 * Storybook context has many properties in it. The official type exports Record<string, any> which is not helping.
 * So here is a strict type that only contains the properties we need.
 */
export type RechartsStoryContext = {
  /**
   * The position of the Recharts hook inspector.
   */
  rechartsInspectorPosition: Position;
  /**
   * Function to set the position of the Recharts hook inspector.
   */
  rechartsSetInspectorPosition: (newPosition: Position) => void;
};
