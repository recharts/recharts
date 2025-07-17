import { StorybookArgs } from '../../../StorybookArgs';
import { sharedAxisProps } from './SharedAxisProps';

export const YAxisProps: StorybookArgs = {
  ...sharedAxisProps,
  xAxisId: {
    description: 'The unique id of x-axis.',
    table: {
      type: {
        summary: 'String | Number',
      },
      defaultValue: 0,
      category: 'General',
    },
  },
  width: {
    description: 'The width of axis element in pixels. When set to "auto", the width will be calculated dynamically.',
    table: {
      type: {
        summary: 'Number | "auto"',
      },
      defaultValue: 60,
      category: 'Layout',
    },
    control: {
      type: 'text',
    },
  },
  orientation: {
    description: 'The orientation of axis',
    table: {
      type: {
        summary: "'left' , 'right'",
      },
      defaultValue: 'left',
      category: 'Layout',
    },
  },
  type: {
    description: 'The type of axis.',
    table: {
      type: {
        summary: "'number' | 'category'",
      },
      defaultValue: 'number',
      category: 'General',
    },
  },
  padding: {
    description: 'Specify the padding of x-axis.',
    table: {
      type: {
        summary: '{ top: number, bottom: number }',
      },
      defaultValue: { top: 0, bottom: 0 },
      category: 'Ticks',
    },
  },
};
