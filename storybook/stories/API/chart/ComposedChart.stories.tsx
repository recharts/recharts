import React from 'react';
import { Args } from '@storybook/react';
import { pageData, timeData } from '../../data';
import {
  Area,
  Bar,
  Brush,
  CartesianGrid,
  ComposedChart as Composed,
  Legend,
  Line,
  LineChart,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from '../../../../src';

const GeneralProps: Args = {
  layout: {
    description: 'The layout of areas, bars, lines in the chart.',
    table: {
      type: {
        summary: "'horizontal' | 'vertical'",
        defaultValue: "'horizontal'",
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
    which will try to match other charts values, or a fully custom function which will receive tick, data as argument 
    and should return an index.`,
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
      },
      category: 'General',
    },
  },
  height: {
    description: 'The height of chart container.',
    table: {
      type: {
        summary: 'Number',
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
        summary: 'Number',
        defaultValue: 4,
      },
      category: 'General',
    },
  },
  barSize: {
    description: `The width or height of each bar. If the barSize is not specified, the size of the bar 
      will be calculated by the barCategoryGap, barGap and the quantity of bar groups.`,
    table: {
      type: {
        summary: 'Number',
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
  baseValue: {
    description: 'The base value of area.',
    table: {
      type: {
        summary: "Number | 'dataMin' | 'dataMax' | 'auto'",
        defaultValue: 'auto',
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
  component: Composed,
};

// This render template can be shared across multiple stories.
// All stories use the same data, but pass different children.
const HorizontalChartTemplate = {
  render: (args: any) => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <Composed
          {...args}
          data={pageData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          {args.children}
        </Composed>
      </ResponsiveContainer>
    );
  },
};

export const SimpleChart = {
  ...HorizontalChartTemplate,
  args: {
    data: pageData,
    children: (
      <>
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="uv" />
        <Line dataKey="pv" />
      </>
    ),
  },
};

export const ComplexChart = {
  ...HorizontalChartTemplate,
  args: {
    data: pageData,
    children: (
      <>
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="uv" fill="#ff7300" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
        <ReferenceDot x="Page C" y={1300} stroke="red" />
        <Brush>
          <LineChart>
            <Line dataKey="uv" stroke="#ff7300" dot={false} />
          </LineChart>
        </Brush>
      </>
    ),
  },
};

export const LineBarAreaScatter = {
  ...HorizontalChartTemplate,
  args: {
    data: pageData,
    children: (
      <>
        <XAxis dataKey="name" />
        <YAxis />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Scatter dataKey="pv" fill="red" />
        <Brush />
      </>
    ),
  },
};

export const LineBarHorizontal = {
  ...HorizontalChartTemplate,
  args: {
    data: pageData,
    children: (
      <>
        <XAxis />
        <YAxis />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="pv" stroke="#ff7300" />
      </>
    ),
  },
};

export const LineBarAreaScatterTimeScale = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <div style={{ width: '600px', margin: 'auto' }}>
          <p>A ComposedChart of time scale</p>
          <div className="composed-chart-wrapper">
            <Composed
              width={600}
              height={400}
              data={args.timeData}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis
                dataKey="x"
                domain={[args.from.getTime(), args.to.getTime()]}
                scale="time"
                type="number"
                tick={{ fontSize: 10, fill: 'red' }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="y" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="y" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="y" stroke="#ff7300" />
            </Composed>
          </div>
        </div>
      </ResponsiveContainer>
    );
  },
  args: {
    from: new Date('2019-07-04T00:00:00.000Z'),
    to: new Date('2019-07-10T00:00:00.000Z'),
    timeData,
    data: pageData,
  },
};

// TODO: Add a template for vertical stories.
