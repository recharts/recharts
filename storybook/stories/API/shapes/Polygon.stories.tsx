import React from 'react';
import { Args } from '@storybook/react-vite';
import { ComposedChart, Polygon, ResponsiveContainer } from '../../../../src';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { PolygonArgs } from '../arg-types/PolygonArgs';

const pointDefault = [
  { x: 100, y: 100 },
  { x: 300, y: 100 },
  { x: 100, y: 300 },
  { x: 300, y: 300 },
];

export default {
  component: Polygon,
  argTypes: PolygonArgs,
};

export const API = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          width={500}
          height={300}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Polygon {...args} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    points: pointDefault,
    stroke: '#000',
    fill: 'red',
  },
};

export const UsingConnectNulls = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          width={250}
          height={250}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Polygon {...args} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    points: [{ x: 50, y: 50 }, { x: 0, y: 100 }, { x: 0, y: 200 }, { x: 100, y: 200 }, { x: 100, y: 100 }, null],
    stroke: '#000',
    fill: 'red',
    connectNulls: true,
  },
};

export const UsingBaselinePoints = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          width={250}
          height={250}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Polygon {...args} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    points: [
      { x: 40, y: 20 },
      { x: 60, y: 20 },
      { x: 60, y: 60 },
      { x: 70, y: 60 },
      { x: 50, y: 90 },
      { x: 30, y: 60 },
      { x: 40, y: 60 },
    ],
    baseLinePoints: [
      { x: 15, y: 95 },
      { x: 85, y: 95 },
    ],
    stroke: '#000',
    fill: 'red',
    connectNulls: false,
  },
};
