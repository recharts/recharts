import { StorybookArgs } from '../../../StorybookArgs';

export const ActiveShapeProps: StorybookArgs = {
  activeIndex: {
    description:
      'The index of the individual shapes of the graph element to be marked as active, and render props.activeShape',
    table: {
      category: 'General',
    },
  },
  shape: {
    description: 'The customized shape to be rendered.',
    table: {
      type: {
        summary: 'Function | boolean | ReactElement | object',
      },
      defaultValue: undefined,
      category: 'General',
    },
  },
  activeShape: {
    description: 'The customized shape to be rendered if activeIndex or activeTooltipIndex match',
    table: {
      type: {
        summary: 'Function | boolean | ReactElement | object',
      },
      defaultValue: undefined,
      category: 'General',
    },
  },
};
