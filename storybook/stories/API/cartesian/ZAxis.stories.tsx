import React from 'react';
import { Args, ArgTypes } from '@storybook/react-vite';
import {
  ScatterChart,
  Scatter,
  ZAxis,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from '../../../../src';
import { pageData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { SCALE_TYPES } from '../../../../src/util/ReactUtils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';

const ZAxisArgTypes: ArgTypes = {
  zAxisId: {
    description: 'The id of z-axis which is corresponding to the data.',
    table: {
      type: { summary: 'string | number' },
      defaultValue: { summary: '0' },
      category: 'General',
    },
  },
  unit: {
    description: 'The unit of data displayed in the axis.',
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
  range: {
    description: 'The range of axis.',
    table: {
      type: { summary: 'number[]' },
      defaultValue: { summary: '[64,64]' },
      category: 'General',
    },
  },
  scale: {
    description: 'If "auto" set, the scale function is decided by the type of chart, and the props type.',
    options: SCALE_TYPES,
    control: {
      type: 'select',
    },
    table: {
      type: { summary: 'ScaleType | Function' },
      defaultValue: { summary: 'auto' },
      category: 'General',
    },
  },
  domain: {
    description: 'The domain of scale in this axis.',
    table: { type: { summary: 'AxisDomain' }, category: 'General' },
  },
};

export default {
  argTypes: ZAxisArgTypes,
  component: ZAxis,
};

export const API = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 0, left: 20 }}>
          <XAxis type="number" dataKey="uv" />
          <YAxis type="number" dataKey="amt" />
          <ZAxis {...args} />
          <CartesianGrid />
          <Scatter name="pageData" data={pageData} />
          <Tooltip />
          <RechartsHookInspector />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ZAxisArgTypes),
    unit: 'km',
    name: 'A name',
    dataKey: 'pv',
    range: [0, 2000],
    type: 'number',
    scale: 'auto',
  },
};
