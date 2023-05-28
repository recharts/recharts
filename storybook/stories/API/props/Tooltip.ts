import { Args } from '@storybook/react';

export const tooltipType = {
  table: { category: 'Tooltip' },
  control: { type: 'select' },
  options: ['responsive', 'none'],
};

export const activeDot = {
  description: `The active dot is shown when a user enters a line chart and this chart has tooltip.
      If set to false, no active dot will be drawn. If set to true, active dot will be drawn with the
      props calculated internally. If passed an object, active dot will be drawn, and the internally
      calculated props will be merged with the key value pairs of the passed object. If passed a ReactElement,
      the option can be the custom active dot element. If passed a function, the function will be called to
      render a customized active dot.`,
  table: {
    type: {
      summary: 'Boolean | Object | ReactElement | Function',
      detail: `'<Line dataKey="value" activeDot={false} />\n' +
      '<Line dataKey="value" activeDot={{ stroke: 'red', strokeWidth: 2 }} />\n' +
      '<Line dataKey="value" activeDot={<CustomizedDot />} />\n' +
      '<Line dataKey="value" activeDot={renderDot} />'`,
    },
    defaultValue: true,
    category: 'Tooltip',
  },
};

export const ResponsiveProps: Args = {
  activeDot,
  tooltipType,
};
