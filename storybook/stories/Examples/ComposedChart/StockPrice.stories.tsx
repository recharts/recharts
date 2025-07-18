/* eslint-disable no-shadow */
import React from 'react';
import { Args } from '@storybook/react-vite';
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  Cell,
  Legend,
  Tooltip,
} from '../../../../src';
import { stockData } from '../../data';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import type { RechartsStoryContext } from '../../../storybook-addon-recharts/RechartsStoryContext';

export default {
  component: ComposedChart,
};

const Candlestick = (props: {
  x: number;
  y: number;
  width: number;
  height: number;
  low: number;
  high: number;
  openClose: [number, number];
}) => {
  const {
    x,
    y,
    width,
    height,
    low,
    high,
    openClose: [open, close],
  } = props;
  const isGrowing = open < close;
  const color = isGrowing ? 'blue' : 'red';
  const ratio = Math.abs(height / (open - close));

  return (
    <g stroke={color} fill="none" strokeWidth="2">
      <path
        d={`
          M ${x},${y}
          L ${x},${y + height}
          L ${x + width},${y + height}
          L ${x + width},${y}
          L ${x},${y}
        `}
      />
      {/* bottom line */}
      {isGrowing ? (
        <path
          d={`
            M ${x + width / 2}, ${y + height}
            v ${(open - low) * ratio}
          `}
        />
      ) : (
        <path
          d={`
            M ${x + width / 2}, ${y}
            v ${(close - low) * ratio}
          `}
        />
      )}
      {/* top line */}
      {isGrowing ? (
        <path
          d={`
            M ${x + width / 2}, ${y}
            v ${(close - high) * ratio}
          `}
        />
      ) : (
        <path
          d={`
            M ${x + width / 2}, ${y + height}
            v ${(open - high) * ratio}
          `}
        />
      )}
    </g>
  );
};

const CustomTooltip = ({ active, payload }: { active: boolean; payload: Record<string, any> }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{ backgroundColor: '#fff', padding: '5px 10px', borderRadius: '10px', border: '1px solid black' }}
      >
        <p className="label">{payload[0].payload.date}</p>
        <p className="label">{`high : ${payload[0].payload.high}`}</p>
        <p className="label">{`low : ${payload[0].payload.low}`}</p>
        <p className="label">{`open : ${payload[0].payload.openClose[0]}`}</p>
        <p className="label">{`close : ${payload[0].payload.openClose[1]}`}</p>
      </div>
    );
  }

  return null;
};

export const StockPriceChart = {
  render: (args: Args, context: RechartsStoryContext) => {
    const { data } = args;

    const minValue = data.reduce((minValue: number, { low, openClose: [open, close] }: any) => {
      const currentMin = Math.min(low, open, close);
      return minValue === null || currentMin < minValue ? currentMin : minValue;
    }, null);
    const maxValue = data.reduce((maxValue: number, { high, openClose: [open, close] }: any) => {
      const currentMax = Math.max(high, open, close);
      return currentMax > maxValue ? currentMax : maxValue;
    }, minValue);

    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="date" />
          <YAxis domain={[minValue, maxValue]} />
          <Legend />
          <Tooltip content={props => <CustomTooltip {...props} />} />
          {/* @ts-expect-error custom components do not have a good type support */}
          <Bar dataKey="openClose" fill="#8884d8" shape={<Candlestick />}>
            {data.map(({ date }: any) => (
              <Cell key={`cell-${date}`} />
            ))}
          </Bar>
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: stockData,
  },
};
