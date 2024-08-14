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
    control: {
      type: 'number',
    },
    table: {
      type: {
        summary: 'number',
      },
      category: 'General',
    },
  },
  width: {
    description: 'The width of chart container.',
    control: {
      type: 'number',
    },
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
    defaultValue: { top: 5, right: 5, bottom: 5, left: 5 },
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
  dataKey: {
    description: `Can be used to mirror dataKey used on children components, using it as this level will force
the chart to animate between two states even though the data array stays the same. Useful to animate when
toggling between multiple dataKey.`,
    table: {
      type: {
        summary: 'string | number | function | undefined',
      },
      category: 'General',
    },
  },
  data,
  margin,
  accessibilityLayer: {
    description: 'Turn on accessibility support for keyboard-only and screen reader users.',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: true,
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

  defaultShowTooltip: {
    description: 'If true set, the tooltip will be displayed when the chart is rendered.',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: false,
      category: 'General',
    },
  },
  id: {
    description: 'The unique id of chart.',
    table: {
      type: {
        summary: 'String',
      },
      category: 'General',
    },
  },
  layout: {
    description: 'The layout of areas, bars, lines in the chart.',
    options: ['horizontal', 'vertical'],
    control: {
      type: 'radio',
    },
    table: {
      type: {
        summary: 'horizontal | vertical',
      },
      defaultValue: 'horizontal',
      category: 'General',
    },
  },
  onClick,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onMouseUp,
  reverseStackOrder: {
    description: `If \`false\`, stacked items will be rendered left to right. If \`true\`, stacked items
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
    options: ['sign', 'expand', 'none', 'wiggle', 'silhouette', 'positive'],
    control: {
      type: 'radio',
    },
    table: {
      type: {
        summary: 'expand | none | wiggle | silhouette | sign | positive',
      },
      defaultValue: 'none',
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
