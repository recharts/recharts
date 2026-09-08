import * as React from 'react';
import { pageData } from '../../../storybook/stories/data';
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from '../../../src';

export const DataOnChartRoot = () => {
  return (
    <AreaChart width={800} height={500} data={pageData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" allowDuplicatedCategory={false} />
      <YAxis interval="preserveEnd" />
      <Legend />
      <Tooltip defaultIndex={3} />
      <Area dataKey="pv" stackId="a" />
      <Area dataKey="uv" stackId="a" />
    </AreaChart>
  );
};

const dataMerged = [
  {
    name: 'a',
    value1: 5,
    value2: 10,
    value3: 23,
  },
  {
    name: 'b',
    value1: 25,
    value2: 10,
    value3: 13,
  },
];

export const SingleDataArray = () => {
  return (
    <AreaChart width={500} height={400} data={dataMerged}>
      <XAxis dataKey="name" allowDuplicatedCategory={false} />
      <YAxis dataKey="sum" />
      <Legend />
      <Area dataKey="value1" stackId="1" />
      <Area dataKey="value2" stackId="1" />
      <Area dataKey="value3" stackId="1" />
      <Tooltip defaultIndex={1} />
    </AreaChart>
  );
};

export const SingleDataArrayWithoutXAxisDataKey = () => {
  return (
    <AreaChart width={500} height={400} data={dataMerged}>
      <XAxis allowDuplicatedCategory={false} />
      <YAxis dataKey="sum" />
      <Legend />
      <Area dataKey="value1" stackId="1" />
      <Area dataKey="value2" stackId="1" />
      <Area dataKey="value3" stackId="1" />
      <Tooltip defaultIndex={1} />
    </AreaChart>
  );
};

const data1Value1 = [
  { name: 'a', value1: 5 },
  { name: 'b', value1: 25 },
];
const data2Value2 = [
  { name: 'a', value2: 10 },
  { name: 'b', value2: 10 },
];
const data3Value3 = [
  { name: 'a', value3: 23 },
  { name: 'b', value3: 13 },
];

export const MultipleDataArraysExclusiveDataKey = () => {
  return (
    <AreaChart width={500} height={400}>
      <XAxis dataKey="name" allowDuplicatedCategory={false} />
      <YAxis dataKey="sum" />
      <Legend />
      <Area data={data1Value1} dataKey="value1" stackId="1" />
      <Area data={data2Value2} dataKey="value2" stackId="1" />
      <Area data={data3Value3} dataKey="value3" stackId="1" />
      <Tooltip defaultIndex={1} />
    </AreaChart>
  );
};

const data1 = [
  { name: 'a', value: 5 },
  { name: 'b', value: 25 },
];
const data2 = [
  { name: 'a', value: 10 },
  { name: 'b', value: 10 },
];
const data3 = [
  { name: 'a', value: 23 },
  { name: 'b', value: 13 },
];

export const MultipleDataArraysRepeatedDataKey = () => {
  // https://github.com/recharts/recharts/issues/6073
  return (
    <AreaChart width={500} height={400}>
      <XAxis dataKey="name" allowDuplicatedCategory={false} />
      <YAxis dataKey="value" />
      <Legend />
      <Area data={data1} dataKey="value" stackId="1" name="Area 1" id="area1" />
      <Area data={data2} dataKey="value" stackId="1" name="Area 2" />
      <Area data={data3} dataKey="value" stackId="1" name="Area 3" />
      <Tooltip defaultIndex={1} />
    </AreaChart>
  );
};

export const MultipleDataArraysRepeatedDataKeyWithoutXAxisDataKey = () => {
  return (
    <AreaChart width={500} height={400}>
      <XAxis allowDuplicatedCategory={false} />
      <YAxis dataKey="value" />
      <Legend />
      <Area data={data1} dataKey="value" stackId="1" name="Area 1" />
      <Area data={data2} dataKey="value" stackId="1" name="Area 2" />
      <Area data={data3} dataKey="value" stackId="1" name="Area 3" />
      <Tooltip defaultIndex={1} />
    </AreaChart>
  );
};

export const DataKeyOnYAxisMultipleDataArrays = () => {
  return (
    <AreaChart width={500} height={400}>
      <XAxis dataKey="name" allowDuplicatedCategory={false} />
      <YAxis dataKey="value" />
      <Legend />
      {/* @ts-expect-error looks like typescript is correct here, the chart does not render */}
      <Area data={data1} stackId="1" />
      {/* @ts-expect-error looks like typescript is correct here, the chart does not render */}
      <Area data={data2} stackId="1" />
      {/* @ts-expect-error looks like typescript is correct here, the chart does not render */}
      <Area data={data3} stackId="1" />
      <Tooltip defaultIndex={1} />
    </AreaChart>
  );
};
