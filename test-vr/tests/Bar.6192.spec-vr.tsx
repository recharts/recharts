/**
 * @fileOverview https://github.com/recharts/recharts/issues/6192
 */
import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, Bar, Legend, Area, CartesianGrid } from '../../src';

test('ComposedChart with stacked Area and Bar', async ({ mount }) => {
  const data = [
    {
      date: '2025-06-30T17:00:00.000Z',
      day: 1,
      wins: 0,
      losses: 0,
    },
    {
      date: '2025-07-01T17:00:00.000Z',
      day: 2,
      wins: 0,
      losses: 0,
    },
    {
      date: '2025-07-02T17:00:00.000Z',
      day: 3,
      wins: 0,
      losses: 0,
    },
    {
      date: '2025-07-03T17:00:00.000Z',
      day: 4,
      wins: 0,
      losses: 0,
    },
    {
      date: '2025-07-04T17:00:00.000Z',
      day: 5,
      wins: 0,
      losses: 0,
    },
    {
      date: '2025-07-05T17:00:00.000Z',
      day: 6,
      wins: 0,
      losses: 0,
    },
    {
      date: '2025-07-06T17:00:00.000Z',
      day: 7,
      wins: 0,
      losses: 0,
    },
    {
      date: '2025-07-07T17:00:00.000Z',
      day: 8,
      wins: 0,
      losses: 0,
    },
    {
      date: '2025-07-08T17:00:00.000Z',
      day: 9,
      wins: 0,
      losses: -1,
    },
    {
      date: '2025-07-09T17:00:00.000Z',
      day: 10,
      wins: 0,
      losses: 0,
    },
    {
      date: '2025-07-10T17:00:00.000Z',
      day: 11,
      wins: 0,
      losses: 0,
    },
    {
      date: '2025-07-11T17:00:00.000Z',
      day: 12,
      wins: 0,
      losses: 0,
    },
    {
      date: '2025-07-12T17:00:00.000Z',
      day: 13,
      wins: 0,
      losses: 0,
    },
    {
      date: '2025-07-13T17:00:00.000Z',
      day: 14,
      wins: 0,
      losses: -1,
      kd: 3,
    },
    {
      date: '2025-07-14T17:00:00.000Z',
      day: 15,
      wins: 0,
      losses: 0,
    },
    {
      date: '2025-07-15T17:00:00.000Z',
      day: 16,
      wins: 9,
      losses: -14,
      kd: 57.82608695652175,
    },
    {
      date: '2025-07-16T17:00:00.000Z',
      day: 17,
      wins: 15,
      losses: -20,
      kd: 33.67832611832612,
    },
    {
      date: '2025-07-17T17:00:00.000Z',
      day: 18,
      wins: 0,
      losses: 0,
    },
    {
      date: '2025-07-18T17:00:00.000Z',
      day: 19,
      wins: 1,
      losses: -7,
      kd: 18.486309523809524,
    },
    {
      date: '2025-07-19T17:00:00.000Z',
      day: 20,
      wins: 9,
      losses: -10,
      kd: 29.372009569377994,
    },
    {
      date: '2025-07-20T17:00:00.000Z',
      day: 21,
      wins: 4,
      losses: -6,
      kd: 37.660000000000004,
    },
    {
      date: '2025-07-21T17:00:00.000Z',
      day: 22,
      wins: 3,
      losses: -5,
      kd: 32.4375,
    },
    {
      date: '2025-07-22T17:00:00.000Z',
      day: 23,
      wins: 1,
      losses: -6,
      kd: 23.176691729323306,
    },
    {
      date: '2025-07-23T17:00:00.000Z',
      day: 24,
      wins: 0,
      losses: 0,
    },
    {
      date: '2025-07-24T17:00:00.000Z',
      day: 25,
      wins: 0,
      losses: 0,
    },
    {
      date: '2025-07-25T17:00:00.000Z',
      day: 26,
      wins: 5,
      losses: -11,
      kd: 8.298579545454546,
    },
    {
      date: '2025-07-26T17:00:00.000Z',
      day: 27,
      wins: 1,
      losses: 0,
      kd: 103,
    },
    {
      date: '2025-07-27T17:00:00.000Z',
      day: 28,
      wins: 2,
      losses: -2,
      kd: 23.791666666666664,
    },
    {
      date: '2025-07-28T17:00:00.000Z',
      day: 29,
      wins: 0,
      losses: -3,
      kd: 11.953333333333333,
    },
    {
      date: '2025-07-29T17:00:00.000Z',
      day: 30,
      wins: 0,
      losses: -1,
      kd: 6,
    },
    {
      date: '2025-07-30T17:00:00.000Z',
      day: 31,
      wins: 7,
      losses: -9,
      kd: 9.988308949822109,
    },
    {
      date: '2025-07-31T17:00:00.000Z',
      day: 1,
      wins: 3,
      losses: -5,
      kd: 9.764204545454545,
    },
    {
      date: '2025-08-01T17:00:00.000Z',
      day: 2,
      wins: 7,
      losses: -8,
      kd: 7.0369973544973545,
    },
    {
      date: '2025-08-02T17:00:00.000Z',
      day: 3,
      wins: 7,
      losses: -7,
      kd: 4.979556032939491,
    },
    {
      date: '2025-08-03T17:00:00.000Z',
      day: 4,
      wins: 0,
      losses: -2,
      kd: 3.840909090909091,
    },
    {
      date: '2025-08-04T17:00:00.000Z',
      day: 5,
      wins: 3,
      losses: -5,
      kd: 24.165674603174605,
    },
    {
      date: '2025-08-05T17:00:00.000Z',
      day: 6,
      wins: 20,
      losses: -7,
      kd: 20.590225040633534,
    },
    {
      date: '2025-08-06T17:00:00.000Z',
      day: 7,
      wins: 9,
      losses: -3,
      kd: 34.494336219336226,
    },
    {
      date: '2025-08-07T17:00:00.000Z',
      day: 8,
      wins: 0,
      losses: 0,
    },
    {
      date: '2025-08-08T17:00:00.000Z',
      day: 9,
      wins: 0,
      losses: 0,
    },
  ];

  const component = await mount(
    <div style={{ height: '20rem', backgroundColor: 'black' }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          stackOffset="sign"
          margin={{
            top: 5,
            right: 0,
            left: -20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="fillKD" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="gold" stopOpacity={0.8} />
              <stop offset="95%" stopColor="gold" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#ffffff" strokeOpacity="0.2" />
          <XAxis dataKey="day" strokeOpacity="0" tick={{ fill: '#ffffff', fillOpacity: '0.6' }} tickLine={false} />
          <YAxis strokeOpacity="0" tick={{ fill: '#ffffff', fillOpacity: '0.6' }} tickLine={false} />
          <Area
            name="Av"
            dataKey="kd"
            fill="url(#fillKD)"
            type="monotoneX"
            stroke="gold"
            strokeWidth={2}
            dot={false}
            connectNulls
            pointerEvents="none"
          />
          <Bar name="Wi" dataKey="wins" fill="#ffffff" opacity={0.8} stackId="date" cursor="pointer" />
          <Bar name="Lo" dataKey="losses" fill="red" opacity={0.8} stackId="date" cursor="pointer" />
          <Legend verticalAlign="bottom" wrapperStyle={{ left: 0, width: '100%' }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>,
  );
  await expect(component).toHaveScreenshot();
});
