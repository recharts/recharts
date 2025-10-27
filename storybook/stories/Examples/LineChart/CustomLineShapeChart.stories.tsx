import { Args } from '@storybook/react-vite';
import React, { ReactElement } from 'react';
import {
  CartesianGrid,
  Curve,
  CurveProps,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from '../../../../src';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { CategoricalChartProps } from '../../API/props/ChartProps';
import { pageData } from '../../data';
import { isWellBehavedNumber } from '../../../../src/util/isWellBehavedNumber';

export default {
  component: LineChart,
  argTypes: CategoricalChartProps,
  docs: {
    autodocs: false,
  },
};

type CustomLineShape = {
  tick: ReactElement;
  tickInterval?: number;
};

const CustomLineShape = (props: CustomLineShape) => {
  const { tick, tickInterval = 30, ...restProps } = props as CustomLineShape & CurveProps;
  const { points } = restProps;

  const ticks: ReactElement[] = [];

  if (points) {
    for (let i = 1, c = points.length; i < c; ++i) {
      let counter = 0;

      const p1 = points[i - 1]!;
      const p2 = points[i]!;

      if (
        isWellBehavedNumber(p1.x) &&
        isWellBehavedNumber(p1.y) &&
        isWellBehavedNumber(p2.x) &&
        isWellBehavedNumber(p2.y)
      ) {
        let l = Math.abs(p1.x - p2.x);
        const dx = (p2.x - p1.x) / l;
        const dy = (p2.y - p1.y) / l;
        const a = (Math.atan2(dy, dx) * 180) / Math.PI;

        const tickCount = Math.abs(Math.floor(l / tickInterval - 1));
        const tickLength = l / tickCount;
        let tickRemaining = tickInterval / 2;

        let { x, y } = p1;
        while (l - tickRemaining > 0) {
          l -= tickRemaining;

          x += dx * tickRemaining;
          y += dy * tickRemaining;

          ticks.push(
            <g key={`${i}-${++counter}`} transform={`translate(${x} ${y}) rotate(${a})`}>
              {tick}
            </g>,
          );

          tickRemaining = tickLength;
        }
      }
    }
  }

  return (
    <g style={{ color: restProps.stroke }}>
      <Curve {...restProps} />
      {ticks}
    </g>
  );
};

export const CustomLineShapeChart = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{ stroke: 'gold', strokeWidth: 2 }} defaultIndex={3} />
          <Line
            type="linear"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            shape={<CustomLineShape tick={<circle r={5} fill="currentColor" />} />}
          />
          <Line
            type="linear"
            dataKey="uv"
            stroke="#82ca9d"
            shape={<CustomLineShape tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />}
          />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
  },
};
