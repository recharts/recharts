import React from 'react';
import { curveCardinal } from 'victory-vendor/d3-shape';
import { Args } from '@storybook/react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip } from '../../../../src';
import { pageData } from '../../data';

const GeneralProps: Args = {
  layout: {
    description: 'The layout of area in the chart.',
    table: {
      type: {
        summary: '"horizontal" | "vertical"',
        defaultValue: 'horizontal',
      },
      category: 'General',
    },
  },
  syncId: {
    description: `If any two categorical charts(LineChart, AreaChart, BarChart, ComposedChart) have the same syncId, 
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
      In cases where data does not have the same length, this might yield unexpected results. In that case use 'value' 
      which will try to match other charts values, or a fully custom function which will receive tick, 
      data as argument and should return an index.`,
    table: {
      type: {
        summary: '"index" | "value" | "function"',
        defaultValue: 'index',
      },
      category: 'General',
    },
  },
  width: {
    description: 'The width of chart container.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: null,
      },
      category: 'General',
    },
  },
  height: {
    description: 'The height of chart container.',
    table: {
      type: {
        summary: 'Number',
        defaultValue: null,
      },
      category: 'General',
    },
  },
  data: {
    description: 'The source data, in which each element is an object.',
    table: {
      type: {
        summary: 'Array',
        defaultValue: null,
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
  stackOffset: {
    description: `The type of offset function used to generate the lower and upper values in the series array. 
      The four types are built-in offsets in d3-shape.`,
    table: {
      type: {
        summary: '"expand" | "none" | "wiggle" | "silhouette"',
        defaultValue: '"none"',
      },
      category: 'General',
    },
  },
  baseValue: {
    description: 'The base value of area.',
    table: {
      type: {
        summary: 'Number | "dataMin" | "dataMax" | "auto"',
        defaultValue: '"auto"',
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
  component: AreaChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <Area dataKey="pv" stroke="#2451B7" fill="url(#color)" />
          <Tooltip />
          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};

const stepAround = curveCardinal.tension(0.5);

export const CustomType = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <Area type={stepAround} dataKey="pv" stroke="#ff7300" fill="#ff7300" fillOpacity={0.9} />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};
