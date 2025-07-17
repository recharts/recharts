import { StorybookArgs } from '../../../StorybookArgs';
import { sharedAxisProps } from './SharedAxisProps';

export const XAxisProps: StorybookArgs = {
  ...sharedAxisProps,
  hide: {
    description: 'If set true, the axis do not display in the chart.',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: false,
      category: 'General',
    },
  },
  includeHidden: {
    description: 'Consider hidden graphical elements when computing domain.',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: false,
      category: 'Domain',
    },
  },
  dataKey: {
    description: 'The key of data displayed in the axis.',
    table: {
      type: {
        summary: 'String | Number | Function',
      },
      category: 'General',
    },
  },
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
  height: {
    description: 'The height of axis element in pixels.',
    table: {
      type: {
        summary: 'Number',
      },
      defaultValue: 30,
      category: 'Layout',
    },
  },
  orientation: {
    description: 'The orientation of axis',
    table: {
      type: {
        summary: "'bottom' , 'top'",
      },
      defaultValue: 'bottom',
      category: 'Layout',
    },
  },
  type: {
    description: 'The type of axis.',
    table: {
      type: {
        summary: "'number' | 'category'",
      },
      defaultValue: 'category',
      category: 'General',
    },
  },
  padding: {
    description: 'Specify the padding of x-axis.',
    table: {
      type: {
        summary: 'Object | "gap" | "no-gap"',
      },
      defaultValue: { left: 0, right: 0 },
      category: 'Ticks',
    },
  },
};
