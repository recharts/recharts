import React from 'react';
import { Args } from '@storybook/react';
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

const GeneralProps: Args = {
  zAxisId: {
    description: 'The id of z-axis which is corresponding to the data.',
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
  unit: {
    description: 'The unit of data displayed in the axis.',
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
  range: {
    description: 'The range of axis.',
    table: { type: { summary: 'number[]' }, category: 'General' },
  },
  scale: {
    description: 'If "auto" set, the scale function is decided by the type of chart, and the props type.',
    options: SCALE_TYPES,
    default: 'auto',
    control: {
      type: 'select',
    },
    table: { type: { summary: 'ScaleType | Function' }, category: 'General' },
  },
  domain: {
    description: 'The domain of scale in this axis.',
    table: { type: { summary: 'AxisDomain' }, category: 'General' },
  },
};

export default {
  argTypes: {
    ...GeneralProps,
  },
  component: ZAxis,
};

export const API = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 0, left: 20 }}>
          <XAxis type="number" dataKey="uv" />
          <YAxis type="number" dataKey="amt" />
          <ZAxis {...args} />
          <CartesianGrid />
          <Scatter name="pageData" data={pageData} />
          <Tooltip />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
    unit: 'km',
    name: 'A name',
    dataKey: 'pv',
    range: [0, 2000],
    type: 'number',
    scale: 'auto',
  },
};
