// The Line props are shared between multiple components, such as the Line and the Area.

import { Args } from '@storybook/react';

export const hide = {
  description: 'Hides the component when true, useful when toggling visibility state via legend',
  type: { name: 'boolean' },
  defaultValue: false,
  table: { category: 'Style' },
};

export const GeneralStyle: Args = {
  fill: {
    control: { type: 'color' },
    table: { category: 'Style' },
  },
  stroke: {
    control: { type: 'color' },
    table: { category: 'Style' },
  },
  strokeDasharray: {
    description: `The pattern of dashes and gaps used to paint the line.
      https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray`,
    table: {
      type: {
        summary: 'string',
      },
      category: 'Style',
    },
  },
  strokeWidth: {
    description: 'The width of the stroke.',
    table: {
      type: {
        summary: 'string | number',
      },
      category: 'Style',
    },
    defaultValue: 1,
  },
  strokeOpacity: {
    description: 'The opacity of the stroke.',
    table: {
      type: {
        summary: 'string | number',
      },
      category: 'Style',
    },
    defaultValue: 1,
  },
};

export const LineStyle: Args = {
  ...GeneralStyle,
  connectNulls: {
    description: 'Whether to connect a graph line across null points.',
    table: {
      type: {
        summary: 'boolean',
      },
      category: 'Style',
    },
    defaultValue: false,
  },
  dot: {
    description: `If false set, dots will not be drawn. If true set, dots will be drawn which have the props
      calculated internally. If object set, dots will be drawn which have the props mergered by the internal
      calculated props and the option. If ReactElement set, the option can be the custom dot element.If set
      a function, the function will be called to render customized dot.`,
    table: {
      type: {
        summary: 'Boolean | Object | ReactElement | Function',
        detail:
          '<Line dataKey="value" dot={false} />\n' +
          '<Line dataKey="value" dot={{ stroke: \'red\', strokeWidth: 2 }} />\n' +
          '<Line dataKey="value" dot={<CustomizedDot />} />\n' +
          '<Line dataKey="value" dot={renderDot} />',
      },
      category: 'Style',
      defaultValue: true,
    },
  },
  hide,
  label: {
    description: `If false set, labels will not be drawn. If true set, labels will be drawn which have
      the props calculated internally. If object set, labels will be drawn which have the props mergered
      by the internal calculated props and the option. If ReactElement set, the option can be the custom
      label element. If set a function, the function will be called to render customized label.`,
    table: {
      type: {
        summary: 'Boolean | Object | ReactElement | Function',
        detail:
          '<Line dataKey="value" label />\n' +
          '<Line dataKey="value" label={{ fill: \'red\', fontSize: 20 }} />\n' +
          '<Line dataKey="value" label={<CustomizedLabel />} />\n' +
          '<Line dataKey="value" label={renderLabel} />',
      },
      defaultValue: false,
      category: 'Style',
    },
  },
  type: {
    description: `The interpolation type of line. It's the same as type in Area.
      And customized interpolation function can be set to type. https://github.com/d3/d3-shape#curves`,
    options: [
      'basis',
      'basisClosed',
      'basisOpen',
      'bumpX',
      'bumpY',
      'bump',
      'linear',
      'linearClosed',
      'natural',
      'monotoneX',
      'monotoneY',
      'monotone',
      'step',
      'stepBefore',
      'stepAfter',
    ],
    default: 'linear',
    control: {
      type: 'select',
    },
    table: {
      category: 'Style',
    },
  },
};
