import React from 'react';
import { Args } from '@storybook/react-vite';
import { ComposedChart, Area, ResponsiveContainer, Legend, Tooltip, XAxis, YAxis } from '../../../../src';
import { pageData } from '../../data';
import { LineStyle } from '../props/Styles';
import { AnimationProps } from '../props/AnimationProps';
import { legendType } from '../props/Legend';
import { General as GeneralProps, data } from '../props/CartesianComponentShared';
import { ResponsiveProps } from '../props/Tooltip';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { StorybookArgs } from '../../../StorybookArgs';

const AreaSpecificProps = {
  // These two props are not documented on the website. Further investigation is required to document them.
  baseValue: { table: { category: 'Other' } },
  isRange: { table: { category: 'Other' } },
  stackId: {
    description: `The id of group which this area should be stacked into. If no id is specified,
    the area will not be stacked. When two components have the same value axis and same stackId,
    then they are stacked in order.`,
    table: {
      type: {
        summary: 'string | number',
      },
      category: 'General',
    },
  },
};

const AreaArgTypes: StorybookArgs = {
  ...AreaSpecificProps,
  ...LineStyle,
  stroke: {
    control: { type: 'color' },
    table: {
      category: 'Style',
      defaultValue: { summary: '#3182bd' },
    },
  },
  dot: {
    description: `If false set, dots will not be drawn. If true set, dots will be drawn which have the props
    calculated internally. If object set, dots will be drawn which have the props merged by the internal
    calculated props and the option. If ReactElement set, the option can be the custom dot element.If set
    a function, the function will be called to render customized dot.`,
    defaultValue: false,
    table: {
      type: {
        summary: 'Boolean | Object | ReactElement | Function',
      },
      category: 'Style',
    },
  },
  ...AnimationProps,
  legendType,
  ...GeneralProps,
  data,
  ...ResponsiveProps,
  // Other
  baseLine: { table: { category: 'Other' } },
};

export default {
  component: Area,
  argTypes: AreaArgTypes,
};

const [surfaceWidth, surfaceHeight] = [600, 300];

export const API = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart
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
          {/* All components are added to show the interaction with the Area properties */}
          <Area fill="red" stackId="1" dataKey="pv" />
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
          {/* The target component */}
          <Area dataKey="uv" {...args} />
          <Tooltip />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaArgTypes),
    isAnimationActive: true,
    type: 'linear',
    connectNulls: true,
    stroke: 'red',
    fill: 'teal',
    strokeDasharray: '4 1',
    label: { fill: 'red', fontSize: 20 },
    dot: { stroke: 'green', strokeWidth: 2 },
    activeDot: { stroke: 'green', strokeWidth: 2 },
    tooltipType: 'responsive',
    dataKey: 'uv',
    unit: ' Visitors',
    stackId: 1,
  },
};
