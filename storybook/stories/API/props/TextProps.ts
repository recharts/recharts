import { StorybookArgs } from '../../../StorybookArgs';

export const TextProps: StorybookArgs = {
  content: {
    description: 'The content of text.',
  },
  lineHeight: {
    description: 'The height of each line of text in pixels.',
    table: {
      type: { summary: 'string' },
    },
  },
  breakAll: {
    description: 'Break words if the text exceeds the width.',
    defaultValue: true,
  },
  maxLines: {
    description: 'The max number of lines for text wrapping.',
    table: {
      type: { summary: 'number' },
    },
  },
  scaleToFit: {
    description: 'Scale the text to fit the width or not.',
    table: {
      type: { summary: 'boolean' },
    },
    defaultValue: false,
  },

  angle: {
    description: 'The rotate angle of Text. (Optional)',
    table: {
      type: { summary: 'number' },
    },
  },

  width: {
    description:
      'The width of Text. When the width is specified to be a number,' +
      ' the text will warp auto by calculating the width of text. (Optional)',
    table: {
      type: { summary: 'number' },
    },
  },

  textAnchor: {
    table: {
      type: { summary: 'start | middle | end | inherit' },
    },
    defaultValue: 'start',
  },

  verticalAnchor: {
    table: {
      type: {
        summary: 'start | middle | end ',
      },
    },
    defaultValue: 'end',
  },
};
