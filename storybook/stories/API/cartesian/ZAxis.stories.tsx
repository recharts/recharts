import React from 'react';
import { Args } from '@storybook/react-vite';
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
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { ZAxisArgs } from '../arg-types/ZAxisArgs';

export default {
  argTypes: ZAxisArgs,
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
    ...getStoryArgsFromArgsTypesObject(ZAxisArgs),
    unit: 'km',
    name: 'A name',
    dataKey: 'pv',
    range: [0, 2000],
    type: 'number',
    scale: 'auto',
  },
};
