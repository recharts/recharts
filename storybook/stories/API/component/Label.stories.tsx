import React from 'react';
import { Args } from '@storybook/react-vite';
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

const LabelProps: Args = {
  formatter: {
    description: 'The formatter function of label value which has only one parameter - the value of label.',
    table: {
      control: { type: 'Function' },
      category: 'General',
    },
  },
  value: {
    description: 'The value of label, which can be specified by this props or the children of <Label />',
    table: {
      control: { type: 'String | Number' },
      summary: '<Label value="any" />',
      category: 'General',
    },
  },
  position: positionProp,
  offset: {
    description: 'The offset to the specified "position"',
    table: {
      control: { type: 'Number' },
      defaultValue: 5,
      category: 'General',
    },
  },
  children: {
    description: 'The value of label, which can be specified by this props or the props "value". (Optional)',
    table: {
      control: { type: 'String | Number' },
      summary: '<Label content={<CustomizedLabel external={external} />} />',
      category: 'General',
    },
  },
  content: {
    description:
      'If set a React element, the option is the custom react element of ' +
      'rendering label. If set a function, the function will be called to render label content. (Optional)',
    table: {
      control: { type: 'ReactElement | Function' },
      category: 'General',
    },
  },
  id: {
    description:
      'The unique id of this component, which will be used to generate ' +
      'unique clip path id internally. This props is suggested to be set in SSR. (Optional)',
    table: {
      control: { type: 'String' },
      category: 'General',
    },
  },
};

export default {
  argTypes: LabelProps,
  component: Label,
};

const availablePositions = [
  'top',
  'left',
  'right',
  'bottom',
  'inside',
  'outside',
  'insideLeft',
  'insideRight',
  'insideTop',
  'insideBottom',
  'insideTopLeft',
  'insideBottomLeft',
  'insideTopRight',
  'insideBottomRight',
  'insideStart',
  'insideEnd',
  'end',
  'center',
  'centerTop',
  'centerBottom',
  'middle',
] as const;

export const CartesianPositions = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={pageData}
          margin={{
            top: 30,
            bottom: 30,
            left: 100,
            right: 100,
          }}
        >
          <CartesianGrid />
          <Line type="monotone" dataKey="uv" stroke="#111" />
          <YAxis tick={false} />
          <XAxis dataKey="name" tick={false} />
          {availablePositions.map(position => (
            <Label key={position} value={`Position: ${position}`} position={position} className={position} {...args} />
          ))}
          <Label value="Position: x: 200, y: 100" position={{ x: 200, y: 100 }} className="custom-position" {...args} />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: { ...getStoryArgsFromArgsTypesObject(LabelProps) },
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
        {availablePositions.map(position => (
          <Label key={position} value={`Position: ${position}`} position={position} className={position} {...args} />
        ))}
        <Label value="Position: x: 200, y: 100" position={{ x: 200, y: 100 }} className="custom-position" {...args} />
        <RechartsHookInspector />
      </RadarChart>
    );
  },
  args: { ...getStoryArgsFromArgsTypesObject(LabelProps) },
};
