import React from 'react';
import { Args, Meta } from '@storybook/react-vite';
import {
  ResponsiveContainer,
  Label,
  Line,
  XAxis,
  LineChart,
  YAxis,
  Radar,
  RadarChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  CartesianGrid,
  PolarGrid,
} from '../../../../src';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { pageData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { positionProp } from '../props/LabelListProps';
import { DefaultZIndexes } from '../../../../src/zIndex/DefaultZIndexes';
import { StorybookArgs } from '../../../StorybookArgs';

const LabelProps: StorybookArgs = {
  value: {
    description: 'The value of label, which can be specified by this prop or the children of <Label />',
    control: { type: 'text' },
    table: {
      type: { summary: 'string | number' },
      category: 'Content',
    },
  },
  position: positionProp,
  offset: {
    description: 'The offset to the specified "position"',
    control: { type: 'number' },
    table: {
      type: { summary: 'number' },
      defaultValue: 5,
      category: 'Position',
    },
  },
  children: {
    description: 'The value of label, which can be specified by this props or the props "value". (Optional)',
    control: { type: 'text' },
    table: {
      type: { summary: 'string | number' },
      category: 'Content',
    },
  },
  content: {
    description:
      'If set a React element, the option is the custom react element of ' +
      'rendering label. If set a function, the function will be called to render label content. (Optional)',
    table: {
      type: { summary: 'ReactElement | Function' },
      category: 'Content',
    },
  },
  id: {
    description:
      'The unique id of this component, which will be used to generate ' +
      'unique clip path id internally. This props is suggested to be set in SSR. (Optional)',
    control: { type: 'text' },
    table: {
      type: { summary: 'string' },
      category: 'General',
    },
  },
  zIndex: {
    description: 'zIndex decides the vertical stacking order of components.',
    control: { type: 'number' },
    table: {
      type: { summary: 'number' },
      defaultValue: DefaultZIndexes.label,
      category: 'Position',
    },
  },
  angle: {
    description: 'The rotate angle of Text. (Optional)',
    control: { type: 'number' },
    table: {
      type: { summary: 'number' },
      defaultValue: 0,
      category: 'Position',
    },
  },
  textAnchor: {
    description:
      'The horizontal text anchor position. If undefined, it is set automatically based on the label position.',
    control: { type: 'select' },
    options: [undefined, 'start', 'middle', 'end', 'inherit'],
    table: {
      type: { summary: 'undefined | start | middle | end | inherit' },
      category: 'Position',
      defaultValue: undefined,
    },
  },
  textBreakAll: {
    description:
      'When true, enables character-level breaking instead of word-level breaking. When false, breaks at word boundaries.',
    control: { type: 'boolean' },
    table: {
      type: { summary: 'boolean' },
      defaultValue: false,
      category: 'Content',
    },
  },
  // Hide uninteresting props, these are more for internal use and set through context
  viewBox: { table: { disable: true } },
  parentViewBox: { table: { disable: true } },
  formatter: { table: { disable: true } },
  index: { table: { disable: true } },
  labelRef: { table: { disable: true } },
};

export default {
  argTypes: LabelProps,
  component: Label,
  // 👇 Disable auto-generated documentation for this component
  tags: ['!autodocs'],
} satisfies Meta<typeof Label>;

export const CartesianPositions = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={pageData}
          margin={{
            top: 100,
            bottom: 100,
            left: 100,
            right: 100,
          }}
        >
          <CartesianGrid />
          <Line type="monotone" dataKey="uv" stroke="#111" />
          <YAxis tick={false} />
          <XAxis dataKey="name" tick={false} />
          <Label value={`Position: ${args.position}`} {...args} />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: { ...getStoryArgsFromArgsTypesObject(LabelProps), position: 'center' },
};

export const PolarPositions = {
  render: (args: Args) => {
    return (
      <RadarChart
        width={800}
        height={800}
        data={pageData}
        margin={{
          top: 30,
          bottom: 30,
          left: 100,
          right: 100,
        }}
      >
        <Radar type="monotone" dataKey="uv" fill="rgba(0, 200, 200, 0.2)" />
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis tick={false} />
        <Label value={`Position: ${args.position}`} {...args} />
        <RechartsHookInspector />
      </RadarChart>
    );
  },
  args: { ...getStoryArgsFromArgsTypesObject(LabelProps), position: 'center' },
};
