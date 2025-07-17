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
  className: {
    table: {
      category: 'Internal',
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
  syncId: {
    description: `If any two categorical charts(LineChart, AreaChart, BarChart, ComposedChart) have the same syncId,
      these two charts can sync the position tooltip, and the startIndex, endIndex of Brush.`,
    control: {
      type: 'text',
    },
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
    control: {
      type: 'radio',
    },
    options: ['index', 'value'],
    defaultValue: 'index',
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
    control: {
      type: 'text',
    },
    table: {
      type: {
        summary: 'String',
      },
      category: 'General',
    },
  },
};
