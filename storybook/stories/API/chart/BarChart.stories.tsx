import React from 'react';
import { Args } from '@storybook/react';
import { Bar, BarChart, ResponsiveContainer, XAxis } from '../../../../src';
import { pageData } from '../../data';

const GeneralProps: Args = {
  layout: {
    description: 'The layout of bars in the chart.',
    table: {
      type: {
        summary: "'horizontal' | 'vertical'",
        defaultValue: "'horizontal'",
      },
      category: 'General',
    },
  },
  syncId: {
    description: `If any two categorical charts (LineChart, AreaChart, BarChart, ComposedChart) have the same syncId, 
    these two charts can sync the position tooltip, and the startIndex, endIndex of Brush.`,
    table: {
      type: {
        summary: 'String',
      },
      category: 'General',
    },
  },
  syncMethod: {
    description: `When syncId is provided, allows customization of how the charts will synchronize tooltips and 
    brushes. Using 'index' (default setting), other charts will reuse current datum's index within the data array. 
      In cases where data does not have the same length, this might yield unexpected results. In that case 
      use 'value' which will try to match other charts values, or a fully custom function which will receive tick, 
      data as argument and should return an index.`,
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
  barCategoryGap: {
    description: 'The gap between two bar categories, which can be a percent value or a fixed value.',
    table: {
      type: {
        summary: 'Percentage | Number',
        defaultValue: '10%',
      },
      category: 'General',
    },
  },
  barGap: {
    description: 'The gap between two bars in the same category.',
    table: {
      type: {
        summary: 'Percentage | Number',
        defaultValue: 4,
      },
      category: 'General',
    },
  },
  barSize: {
    description: `The width or height of each bar. If the barSize is not specified, the size of the 
      bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.`,
    table: {
      type: {
        summary: 'Number',
        defaultValue: undefined,
      },
      category: 'General',
    },
  },
  maxBarSize: {
    description:
      'The maximum width of all the bars in a horizontal BarChart, or maximum height in a vertical BarChart.',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'General',
    },
  },
  stackOffset: {
    description: `The type of offset function used to generate the lower and upper 
      values in the series array. The four types are built-in offsets in d3-shape.`,
    table: {
      type: {
        summary: "'expand' | 'none' | 'wiggle' | 'silhouette' | 'sign'",
        defaultValue: "'none'",
      },
      category: 'General',
    },
  },
  reverseStackOrder: {
    description: `If false set, stacked items will be rendered left to right. If true set, stacked items 
      will be rendered right to left. (Render direction affects SVG layering, not x position.)`,
    table: {
      type: {
        summary: 'Boolean',
        defaultValue: false,
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
  component: BarChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart {...args}>
          <Bar dataKey="uv" />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};

export const BarInBar = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart {...args}>
          <Bar dataKey="uv" fill="green" xAxisId="one" barSize={50} />
          <XAxis xAxisId="one" />
          {/* The smaller bar must be rendered in front of the larger one to be visible. */}
          <Bar dataKey="pv" fill="red" xAxisId="two" barSize={30} />
          <XAxis xAxisId="two" hide />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};
