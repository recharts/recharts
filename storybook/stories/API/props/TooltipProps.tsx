import { StorybookArgs } from '../../../StorybookArgs';

export const TooltipProps: StorybookArgs = {
  active: {
    description: `When set to true, the tooltip will remain visible, even after the user has moved off of the chart.
      Set \`defaultIndex\` if you want the tooltip to be visible by default, before first mouse enter.`,
    defaultValue: undefined,
    options: [true, false, undefined],
    control: {
      type: 'inline-radio',
    },
  },
  defaultIndex: {
    description: 'The index where the Tooltip should appear *before* the user has interacted with the chart.',
  },
  separator: {
    description: 'The separator between name and value.',
    defaultValue: ' : ',
    table: {
      type: { summary: 'string' },
      category: 'Content',
    },
  },
  offset: {
    description: `Gap (in px) between the position of tooltip and the active position.
      This number sets both horizontal and vertical offsets.
      The active position depends on the data point, and mouse cursor position.
      The offset can be negative.`,
    defaultValue: 10,
    table: {
      type: { summary: 'number' },
      category: 'Position',
    },
  },
  filterNull: {
    description: "When an item of the payload has value null or undefined, this item won't be displayed.",
    table: { type: { summary: 'boolean' }, category: 'Content' },
    defaultValue: true,
  },
  itemStyle: {
    description: 'The style of default tooltip content item which is a li element.',
    defaultValue: {},
    table: { type: { summary: 'Object' }, category: 'Styles' },
  },
  wrapperStyle: {
    description: 'The style of tooltip wrapper which is a dom element.',
    defaultValue: {},
    table: { type: { summary: 'Object' }, category: 'Styles' },
  },
  contentStyle: {
    description: 'The style of tooltip content which is a dom element.',
    defaultValue: {},
    table: { type: { summary: 'Object' }, category: 'Styles' },
  },
  labelStyle: {
    description: 'The style of default tooltip label which is a p element.',
    defaultValue: {},
    table: { type: { summary: 'Object' }, category: 'Styles' },
  },
  cursor: {
    description: `If set false, no cursor will be drawn when tooltip is active.
    If set an object, the option is the configuration of cursor.
    If set a React element, the option is the custom react element of drawing cursor.`,
    defaultValue: true,
    table: {
      type: {
        summary: 'Object | ReactElement | boolean',
      },
      category: 'Styles',
    },
  },
  viewBox: {
    description: `The box of viewing area.
    Has the shape of { x: number, y: number, width: number, height: number }.
    Usually calculated internally.`,
    defaultValue: { x: 0, y: 0, height: 0, width: 0 },
    table: {
      type: {
        summary: 'Object',
        detail: '{ x: number, y: number, width: number, height: number },',
      },
      category: 'Internal',
    },
  },
  allowEscapeViewBox: {
    description: 'Allows the tooltip to extend beyond the viewBox of the chart itself.',
    defaultValue: { x: false, y: false },
    table: {
      type: {
        summary: 'Object',
        detail: '{ x: boolean, y: boolean }',
      },
      category: 'Styles',
    },
  },
  position: {
    description: 'If this field is set, the tooltip position will be fixed and will not move anymore.',
    table: {
      category: 'Position',
      type: {
        summary: 'Object',
        detail: '{ x: number, y: number }',
      },
    },
  },
  coordinate: {
    description: 'The coordinate of tooltip position, usually calculated internally.',
    table: {
      category: 'Internal',
      type: {
        summary: 'Object',
        detail: '{ x: number, y: number }',
      },
    },
    defaultValue: '{ x: 0, y: 0 }',
  },
  payload: {
    description: 'The source data of the content to be displayed in the tooltip, usually calculated internally.',
    table: {
      category: 'Internal',
      type: {
        summary: 'Array',
        detail: "[{ name: '05-01', value: 12, unit: 'kg' }]",
      },
    },
  },
  label: {
    description: 'The label value which is active now, usually calculated internally.',
    table: {
      category: 'Internal',
      type: {
        summary: 'string | number',
      },
    },
  },
  content: {
    description: `If set a React element, the option is the custom react element of rendering tooltip.
       If set a function, the function will be called to render tooltip content.`,
    table: {
      type: {
        summary: 'ReactElement | Function',
        detail: `<Tooltip content={<CustomizedTooltip external={external} />} />
        <Tooltip content={renderTooltip} />`,
      },
      category: 'Content',
    },
  },
  formatter: {
    description: `The formatter function of value in tooltip.
    If you return an array, the first entry will be the formatted "value",
    and the second entry will be the formatted "name". If you return a nullish value
    nothing will be rendered for the tooltip name or value.`,
    table: {
      category: 'Content',
      type: {
        summary: 'Function',
        detail: `(value, name, props) => "formatted value"
        (value, name, props) => ["formatted value", "formatted name"]`,
      },
    },
  },
  labelFormatter: {
    description: 'The formatter function of label in tooltip.',
    table: {
      category: 'Content',
      type: {
        summary: 'Function',
      },
    },
  },
  itemSorter: {
    description: `How should payload inside tooltip be sorted.
      Can be either a string (the name of the key to sort by) or a function.
      The function should return one value to be compared. This sorts always in ascending order.`,
    defaultValue: 'name',
    options: ['name', 'value', 'dataKey'],
    control: {
      type: 'inline-radio',
    },
    table: {
      category: 'Content',
      type: {
        summary: 'name | value | dataKey | Function',
      },
    },
  },
  isAnimationActive: {
    description: 'If set false, animation of tooltip will be disabled.',
    defaultValue: 'true in CSR, and false in SSR',
    table: {
      category: 'Content',
      type: {
        summary: 'boolean',
      },
    },
  },
  animationDuration: {
    description: 'Specifies (in milliseconds) the duration of animation.',
    defaultValue: 1500,
    table: {
      category: 'Styles',
      type: {
        summary: 'number',
      },
    },
  },
  animationEasing: {
    description: 'The type of easing function.',
    defaultValue: 'ease',
    table: {
      category: 'Styles',
      type: {
        summary: 'string',
        detail: "'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'",
      },
    },
  },
  shared: {
    description: `If true, tooltip will appear on top of all bars on an axis tick.
    If false, tooltip will appear on individual bars.
    Currently only supported in BarChart and RadialBarChart.
    Defaults to true.`,
  },
  portal: {
    description: `If portal is defined, then Tooltip will use this element as a target
    for rendering using React Portal: https://react.dev/reference/react-dom/createPortal.
    If this is undefined then Tooltip renders inside the recharts-wrapper element with absolute positioning.`,
    table: {
      category: 'Position',
      type: {
        summary: 'HTMLElement | null',
      },
    },
  },
};
