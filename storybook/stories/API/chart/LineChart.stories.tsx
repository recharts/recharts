import React from 'react';
import { Args } from '@storybook/react';
import { pageData } from '../../data';
import { Line, LineChart, ResponsiveContainer } from '../../../../src';

const GeneralProps: Args = {
  layout: {
    description: 'The layout of lines in the chart.',
    table: {
      type: {
        summary: "'horizontal' | 'vertical'",
        defaultValue: "'horizontal'",
      },
      category: 'General',
    },
  },
  syncId: {
    description: `If any two categorical charts(LineChart, AreaChart, BarChart, ComposedChart) have the 
    same syncId, these two charts can sync the position tooltip, and the startIndex, endIndex of Brush.`,
    table: {
      type: {
        summary: 'String',
      },
      category: 'General',
    },
  },
  syncMethod: {
    description: `When syncId is provided, allows customization of how the charts will synchronize tooltips 
    and brushes. Using 'index' (default setting), other charts will reuse current datum's index within the 
    data array. In cases where data does not have the same length, this might yield unexpected results. 
    In that case use 'value' which will try to match other charts values, or a fully custom function which 
    will receive tick, data as argument and should return an index.`,
    table: {
      type: {
        summary: "'index' | 'value' | function",
        defaultValue: "'index'",
      },
      category: 'General',
    },
  },
  width: {
    description: 'The width of chart container.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: undefined,
      },
      category: 'General',
    },
  },
  height: {
    description: 'The height of chart container.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: undefined,
      },
      category: 'General',
    },
  },
  data: {
    description: 'The source data, in which each element is an object.',
    table: {
      type: {
        summary: 'Array',
        defaultValue: undefined,
      },
      category: 'General',
    },
  },
  margin: {
    description: 'The sizes of whitespace around the container.',
    table: {
      type: {
        summary: 'Object',
        defaultValue: { top: 5, right: 5, bottom: 5, left: 5 },
      },
      category: 'General',
    },
  },
  onClick: {
    description: 'The customized event handler of click in this chart.',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseEnter: {
    description: 'The customized event handler of mouseenter in this chart.',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseMove: {
    description: 'The customized event handler of mousemove in this chart.',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
  onMouseLeave: {
    description: 'The customized event handler of mouseleave in this chart.',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'General',
    },
  },
};

export default {
  argTypes: {
    ...GeneralProps,
  },
  component: LineChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line dataKey="uv" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};
