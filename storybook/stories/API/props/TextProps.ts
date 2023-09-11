import { Args } from '@storybook/react';

export const TextProps: Args = {
  content: {
    description: 'The content of text.',
  },
  lineHeight: {
    description: 'The height of each line of text in pixels.',
    table: {
      control: { type: 'string' },
    },
  },
  breakAll: {
    description: 'Break words if the text exceeds the width.',
    table: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
  maxLines: {
    description: 'The max number of lines for text wrapping.',
    table: {
      control: { type: 'number' },
    },
  },
  scaleToFit: {
    description: 'Scale the text to fit the width or not.',
    table: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },

  angle: {
    description: 'The rotate angle of Text. (Optional)',
    table: {
      control: { type: 'number' },
    },
  },

  width: {
    description:
      'The width of Text. When the width is specified to be a number,' +
      ' the text will warp auto by calculating the width of text. (Optional)',
    table: {
      control: { type: 'number' },
    },
  },

  textAnchor: {
    table: {
      summary: 'start | middle | end | inherit',
      control: { type: 'number' },
      defaultValue: 'start',
    },
  },

  verticalAnchor: {
    table: {
      summary: 'start | middle | end ',
      control: { type: 'number' },
      defaultValue: 'end',
    },
  },
};
