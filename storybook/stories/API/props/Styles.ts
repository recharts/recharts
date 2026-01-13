// The Line props are shared between multiple components, such as the Line and the Area.
import { StorybookArgs } from '../../../StorybookArgs';

export const GeneralStyle: StorybookArgs = {
  fill: {
    control: { type: 'color' },
    table: { category: 'Style' },
  },
  stroke: {
    control: { type: 'color' },
    table: { category: 'Style' },
  },
  strokeDasharray: {
    description: `The pattern of dashes and gaps used to paint the line.
      https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray`,
    table: {
      type: {
        summary: 'string',
      },
      category: 'Style',
    },
  },
  strokeWidth: {
    description: 'The width of the stroke.',
    table: {
      type: {
        summary: 'string | number',
      },
      category: 'Style',
    },
    defaultValue: 1,
  },
  strokeOpacity: {
    description: 'The opacity of the stroke.',
    table: {
      type: {
        summary: 'string | number',
      },
      category: 'Style',
    },
    defaultValue: 1,
  },
};
