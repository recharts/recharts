import { onClick, onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseUp } from './EventHandlers';
import { StorybookArg, StorybookArgs } from '../../../StorybookArgs';

export const data: StorybookArg = {
  description: 'The source data, in which each element is an object.',
  table: {
    type: {
      summary: 'Array',
    },
    category: 'General',
  },
};

export const ChartSizeProps: StorybookArgs = {
  height: {
    description: 'The height of chart container.',
    table: {
      type: {
        summary: 'number',
      },
      category: 'General',
    },
  },
  width: {
    description: 'The width of chart container.',
    table: {
      type: {
        summary: 'number',
      },
      category: 'General',
    },
  },
};

export const margin = {
  description: 'The sizes of whitespace around the container.',
  table: {
    type: {
      summary: 'Object',
    },
    defaultValue: { top: 0, right: 0, bottom: 0, left: 0 },
    category: 'General',
  },
};

export const dataKey = {
  description: 'The key or getter of a group of data which should be unique in a chart.',
  table: {
    type: {
      summary: 'string | number | Function',
    },
    category: 'General',
  },
};

// These props are shared between the following charts:
// - AreaChart
// - BarChart
// - ComposedChart
// - LineChart
// - PieChart
// - RadarChart
// - RadialBarChart
// - ScatterChart
// - FunnelChart
export const CategoricalChartProps: StorybookArgs = {
  ...ChartSizeProps,
  data,
  margin,
  accessibilityLayer: {
    description: 'Turn on keyboard accessibility',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: false,
      category: 'General',
    },
  },
  role: {
    description: 'The ARIA role for the chart, which provides semantic information for screen reader users.',
    table: {
      type: {
        summary: 'String | undefined',
      },
      defaultValue: undefined,
      category: 'General',
    },
  },
  tabIndex: {
    description: 'If and where the chart should appear in the tab order',
    table: {
      type: {
        summary: 'number | undefined',
      },
      defaultValue: undefined,
      category: 'General',
    },
  },
  barCategoryGap: {
    description: 'The gap between two bar categories, which can be a percent value or a fixed value.',
    table: {
      type: {
        summary: 'Percentage | number',
      },
      defaultValue: '10%',
      category: 'Bar',
    },
  },
  style: {
    description: 'The style of chart.',
    table: {
      type: {
        summary: 'Object',
      },
      category: 'General',
    },
  },
  desc: {
    description: 'The description of chart.',
    table: {
      type: {
        summary: 'String',
      },
      category: 'General',
    },
  },
  barGap: {
    description: 'The gap between two bars in the same category.',
    table: {
      type: {
        summary: 'number',
      },
      defaultValue: 4,
      category: 'Bar',
    },
  },
  barSize: {
    description: `The width or height of each bar. If the barSize is not specified, the size of the bar
      will be calculated by the barCategoryGap, barGap and the quantity of bar groups.`,
    table: {
      type: {
        summary: 'number',
      },
      category: 'Bar',
    },
  },
  baseValue: {
    description: 'The base value of area.',
    table: {
      type: {
        summary: "number | 'dataMin' | 'dataMax' | 'auto'",
      },
      defaultValue: 'auto',
      category: 'Area',
    },
  },
  className: {
    table: {
      category: 'Internal',
    },
  },
  compact: {
    description: 'If true set, the chart will be rendered in compact mode.',
    table: {
      type: {
        summary: 'boolean | undefined',
      },
      defaultValue: undefined,
      category: 'General',
    },
  },
  cx: {
    description: 'The x-coordinate of the center of the circle.',
    table: {
      type: {
        summary: 'number',
      },
      category: 'Polar',
    },
  },
  cy: {
    description: 'The y-coordinate of the center of the circle.',
    table: {
      type: {
        summary: 'number',
      },
      category: 'Polar',
    },
  },
  defaultShowTooltip: {
    description: 'If true set, the tooltip will be displayed when the chart is rendered.',
    table: {
      type: {
        summary: 'boolean',
      },
      category: 'General',
    },
  },
  endAngle: { description: 'The end angle of polar chart.', table: { type: { summary: 'Number' }, category: 'Polar' } },

  id: {
    description: 'The unique id of chart.',
    table: {
      type: {
        summary: 'String',
      },
      category: 'General',
    },
  },
  innerRadius: {
    description: 'The inner radius of polar chart.',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'Polar',
    },
  },
  layout: {
    description: 'The layout of areas, bars, lines in the chart.',
    table: {
      type: {
        summary: "'horizontal' | 'vertical'",
      },
      defaultValue: "'horizontal'",
      category: 'General',
    },
  },
  maxBarSize: {
    description: 'The maximum size of bar.',
    table: {
      type: {
        summary: 'number',
      },
      category: 'Bar',
    },
  },
  onClick,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onMouseUp,
  outerRadius: {
    description: 'The outer radius of polar chart.',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'Polar',
    },
  },
  reverseStackOrder: {
    description: `If false set, stacked items will be rendered left to right. If true set, stacked items
      will be rendered right to left. (Render direction affects SVG layering, not x position.)`,
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: false,
      category: 'General',
    },
  },
  stackOffset: {
    description: `Determines how values are stacked:
    
- \`none\` is the default, it adds values on top of each other. No smarts. Negative values will overlap.
- \`expand\` make it so that the values always add up to 1 - so the chart will look like a rectangle.
- \`wiggle\` and \`silhouette\` tries to keep the chart centered.
- \`sign\` stacks positive values above zero and negative values below zero. Similar to \`none\` but handles negatives.
- \`positive\` ignores all negative values, and then behaves like \`none\`.

Also see https://d3js.org/d3-shape/stack#stack-offsets
(note that the \`diverging\` offset in d3 is named \`sign\` in recharts)
`,
    table: {
      type: {
        summary: "'expand' | 'none' | 'wiggle' | 'silhouette' | 'sign' | 'positive'",
      },
      defaultValue: "'none'",
      category: 'General',
    },
  },
  startAngle: {
    description: 'The start angle of polar chart.',
    table: { type: { summary: 'Number' }, category: 'Polar' },
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
      },
      defaultValue: "'index'",
      category: 'General',
    },
  },
  throttleDelay: {
    description: `The delay of throttle for mouse events, which can be used to avoid
      the performance problem when the chart is rendered in a heavy environment.`,
    table: {
      type: {
        summary: 'Number',
      },
      category: 'General',
    },
  },
  title: {
    description: 'The title of chart.',
    table: {
      type: {
        summary: 'String',
      },
      category: 'General',
    },
  },
};
