import React from 'react';
import { ResponsiveContainer, Tooltip, LineChart, Line } from '../../../../src';
import { pageData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { StorybookArgs } from '../../../StorybookArgs';

const TooltipProps: StorybookArgs = {
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
  active: {
    description:
      'If set true, the tooltip is displayed. If set false, the tooltip is hidden. Usually calculated internally.',
    defaultValue: false,
    table: {
      category: 'Internal',
      type: {
        summary: 'boolean',
      },
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
    and the second entry will be the formatted "name".`,
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
    description: 'Sort function of payload',
    defaultValue: () => -1,
    table: {
      category: 'Content',
      type: {
        summary: 'Function',
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
  animationBegin: {
    description: 'Specifies (in milliseconds) when the animation should begin.',
    defaultValue: 0,
    table: {
      category: 'Styles',
      type: {
        summary: 'number',
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
};

export default {
  argTypes: TooltipProps,
  component: Tooltip,
};

export const API = {
  render: (args: Record<string, any>) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <LineChart
          width={surfaceWidth}
          height={surfaceHeight}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          data={pageData}
        >
          {/* The target component */}
          <Tooltip {...args} />
          <Line dataKey="uv" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    // This API story should have explicit values for all props
    ...getStoryArgsFromArgsTypesObject(TooltipProps),
    trigger: 'hover',
    shared: false,
    useTranslate3d: false,
  },
};
