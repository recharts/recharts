import React from 'react';
import { Args } from '@storybook/react-vite';
import { CartesianGrid, ResponsiveContainer, ComposedChart, XAxis, YAxis } from '../../../../src';
import { pageData } from '../../data';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { CartesianGridArgs } from '../arg-types/CartesianGridArgs';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';

export default {
  component: CartesianGrid,
  argTypes: CartesianGridArgs,
  args: {
    horizontal: true,
    vertical: true,
  },
};

export const API = {
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [500, 500];
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight}>
          <CartesianGrid {...args} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CartesianGridArgs),
    y: 0,
    x: 0,
    width: 500,
    height: 500,
    fillOpacity: 0.4,
    horizontalPoints: [10, 20, 30, 100, 400],
    verticalPoints: [100, 200, 300, 400],
    verticalFill: ['red', '#eee'],
    horizontalFill: ['#eee', 'yellow'],
    strokeDasharray: '10 10',
  },
};

export const MultipleGrids = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={500} height={500} data={pageData}>
          <XAxis dataKey="name" />
          <YAxis dataKey="pv" />
          {args.displayGridA && <CartesianGrid verticalFill={['#aaeeee', '#eeeeaa']} stroke="trasparent" />}
          {args.displayGridB && <CartesianGrid stroke="silver" strokeDasharray="3 3" strokeWidth={3} />}
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CartesianGridArgs),
    displayGridA: true,
    displayGridB: true,
  },
};
