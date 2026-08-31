import * as React from 'react';
import { Bar, BarChart, BarStack, XAxis, YAxis } from '../../../src';

const rangedStackedBarData = [
  { name: 'A', value1: -100, value2: -200, value3: 300 },
  { name: 'B', value1: -300, value2: 100, value3: 200 },
  { name: 'C', value1: 200, value2: 300, value3: -100 },
  { name: 'D', value1: 400, value2: -100, value3: -300 },
];

// stackOffset="none" is the documented default, for both BarChart and BarStack —
// each pair below asserts that leaving the prop unset renders identically to
// setting it explicitly.

export const BarChartWithStackOffset = (props: {
  stackOffset?: React.ComponentProps<typeof BarChart>['stackOffset'];
}) => (
  <BarChart data={rangedStackedBarData} width={200} height={200} stackOffset={props.stackOffset}>
    <YAxis />
    <XAxis dataKey="name" />
    <Bar dataKey="value1" stackId="a" isAnimationActive={false} fill="red" />
    <Bar dataKey="value2" stackId="a" isAnimationActive={false} fill="green" />
    <Bar dataKey="value3" stackId="a" isAnimationActive={false} fill="blue" />
  </BarChart>
);

export const BarStackWithStackOffset = (props: {
  stackOffset?: React.ComponentProps<typeof BarChart>['stackOffset'];
}) => (
  <BarChart data={rangedStackedBarData} width={200} height={200} stackOffset={props.stackOffset}>
    <YAxis />
    <XAxis dataKey="name" />
    <BarStack radius={[10, 20, 30, 40]}>
      <Bar dataKey="value1" isAnimationActive={false} fill="red" />
      <Bar dataKey="value2" isAnimationActive={false} fill="green" />
      <Bar dataKey="value3" isAnimationActive={false} fill="blue" />
    </BarStack>
  </BarChart>
);
