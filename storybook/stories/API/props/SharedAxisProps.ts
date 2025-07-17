import { StorybookArgs } from '../../../StorybookArgs';

export const sharedAxisProps: StorybookArgs = {
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
  allowDecimals: {
    description: 'Allow the ticks to be decimals or not.',
    table: {
      type: {
        summary: 'Boolean',
      },
      defaultValue: true,
      category: 'Ticks',
    },
  },
  allowDataOverflow: {
    description: `When domain of the axis is specified and the type of the axis is 'number',
      if allowDataOverflow is set to be false, the domain will be adjusted when the minimum value
      of data is smaller than domain[0] or the maximum value of data is greater than domain[1]
      so that the axis displays all data values. If set to true, graphic elements (line, area, bars)
      will be clipped to conform to the specified domain.`,
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: false,
      category: 'Domain',
    },
  },
  allowDuplicatedCategory: {
    description: 'Allow the axis has duplicated categories or not when the type of axis is "category".',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: true,
      category: 'Domain',
    },
  },
  angle: {
    description: 'The angle of axis ticks.',
    table: {
      type: {
        summary: 'Number',
      },
      defaultValue: 0,
      category: 'Ticks',
    },
  },
  tickCount: {
    description: "The count of axis ticks. Not used if 'type' is 'category'.",
    table: {
      type: {
        summary: 'Number',
      },
      defaultValue: 5,
      category: 'Ticks',
    },
  },
  domain: {
    description: `Specify the domain of axis when the axis is a number axis. The length of domain should be 2,
      and we will validate the values in domain. And each element in the array can be a number,
      'auto', 'dataMin', 'dataMax', a string like 'dataMin - 20', 'dataMax + 100', or a function
      that accepts a single argument and returns a number. If any element of domain is set to be
      'auto', comprehensible scale ticks will be calculated, and the final domain of axis is generated
      by the ticks. If a function, receives '[dataMin, dataMax]', and must return a computed domain
      as '[min, max]'.`,
    table: {
      type: {
        summary: 'Array | Function',
      },
      defaultValue: [0, 'auto'],
      category: 'Domain',
    },
  },
  interval: {
    description: `If set 0, all the ticks will be shown. If set preserveStart", "preserveEnd" or "preserveStartEnd",
      the ticks which is to be shown or hidden will be calculated automatically.`,
    table: {
      type: {
        summary: '"preserveStart" | "preserveEnd" | "preserveStartEnd" | Number',
      },
      defaultValue: 'preserveEnd',
      category: 'Ticks',
    },
  },
  minTickGap: {
    description: 'The minimum gap between two adjacent labels.',
    table: {
      type: {
        summary: 'Number',
      },
      defaultValue: 5,
      category: 'Ticks',
    },
  },
  axisLine: {
    description:
      'If set false, no axis line will be drawn. If set a object, the option is the configuration of axis line.',
    table: {
      type: {
        summary: 'Boolean | Object',
      },
      defaultValue: true,
      category: 'General',
    },
  },
  tickLine: {
    description:
      'If set false, no axis tick lines will be drawn. If set a object, the option is the configuration of tick lines.',
    table: {
      type: {
        summary: 'Boolean | Object',
      },
      defaultValue: true,
      category: 'Ticks',
    },
  },
  tickSize: {
    description: 'The length of tick line.',
    table: {
      type: {
        summary: 'Number',
      },
      defaultValue: 6,
      category: 'Ticks',
    },
  },
  tickFormatter: {
    description: 'The formatter function of tick.',
    table: {
      type: {
        summary: 'Function',
      },
      category: 'Ticks',
    },
  },
  ticks: {
    description: 'Set the values of axis ticks manually.',
    table: {
      type: {
        summary: 'Array',
      },
      category: 'Ticks',
    },
  },
  tick: {
    description: `If set false, no ticks will be drawn. If set a object, the option is the configuration of ticks.
      If set a React element, the option is the custom react element of drawing ticks.`,
    table: {
      type: {
        summary: 'Boolean | Object | ReactElement',
      },
      category: 'Ticks',
    },
  },
  mirror: {
    description:
      'If set true, flips ticks around the horizontal axis line, displaying the labels inside the chart instead of outside.',
    table: {
      type: {
        summary: 'Boolean',
      },
      defaultValue: false,
      category: 'General',
    },
  },
  reversed: {
    description: 'Reverses ticks left-to-right.',
    table: {
      type: {
        summary: 'Boolean',
      },
      defaultValue: false,
      category: 'General',
    },
  },
  label: {
    description: `If set a string or a number, default label will be drawn, and the option is content.
      If set a React element, the option is the custom react element of drawing label.
      If an object, the option is the props of a new Label instance.`,
    table: {
      type: {
        summary: 'String | Number | ReactElement | Object',
      },
      category: 'General',
    },
  },
  scale: {
    description: `If set to 'auto', the scale function is decided by the type of chart, and the props type.
      \nWhen set to 'time', make sure to also set type to 'number' and to include a domain.`,
    table: {
      type: {
        summary: `'auto' | 'linear' | 'pow' | 'sqrt' | 'log' | 'identity' | 'time' |
          'band' | 'point' | 'ordinal' | 'quantile' | 'quantize' | 'utc' | 'sequential' | 'threshold' | Function`,
      },
      defaultValue: 'auto',
      category: 'General',
    },
  },
  unit: {
    description:
      'The unit of data displayed in the axis. This option will be used to represent an index unit in a scatter chart.',
    table: {
      type: {
        summary: 'String | Number',
      },
      category: 'General',
    },
  },
  name: {
    description:
      'The name of data displayed in the axis. This option will be used to represent an index in a scatter chart.',
    table: {
      type: {
        summary: 'String | Number',
      },
      category: 'General',
    },
  },
  tickMargin: {
    description: 'The margin between tick line and tick.',
    table: {
      type: {
        summary: 'Number',
      },
      category: 'General',
    },
  },
};
