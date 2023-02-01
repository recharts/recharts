import React from 'react';
import { format, parseISO, subDays } from 'date-fns';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta } from '@storybook/react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../..';
import { TimeSeriesData } from '../../data';

function randomizeData(dataArray: any) {
  dataArray.splice(0, dataArray.length);
  for (let num = 30; num >= 0; num--) {
    dataArray.push({
      date: subDays(new Date(), num).toISOString().substring(0, 10),
      value: 1 + Math.random(),
    });
  }
}

const data: TimeSeriesData[] = [];
randomizeData(data);

export default {
  title: 'Recharts/Chart/Area Chart',
  component: AreaChart,
} as ComponentMeta<typeof AreaChart>;

export const Simple = {
  render: (args: any) => {
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            randomizeData(args.data);
          }}
        >
          Change Data
        </button>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={args.data}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tickFormatter={(str: string) => {
                const date = parseISO(str);
                if (date.getDate() % 7 === 0) {
                  return format(date, 'MMM, d');
                }
                return '';
              }}
            />

            <YAxis
              dataKey="value"
              axisLine={false}
              tickLine={false}
              tickCount={8}
              tickFormatter={(number: number) => `$${number.toFixed(2)}`}
            />

            <Tooltip />

            <CartesianGrid opacity={0.1} vertical={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  },
  args: {
    data,
  },
};
