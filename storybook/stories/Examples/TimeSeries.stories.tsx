/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { scaleTime } from 'd3-scale';
import { timeFormat } from 'd3-time-format';
import { timeDay, timeHour, timeMinute, timeMonth, timeSecond, timeWeek, timeYear } from 'd3-time';
import { timeData, temperatureData, particulateData } from '../data';
import { ComposedChart, Line, ResponsiveContainer, XAxis, Tooltip } from '../../../src';
import { Props as XAxisProps } from '../../../src/cartesian/XAxis';

export default {
  component: XAxis,
};

interface Args {
  data: { x: Date; y: number }[];
}

const StoryTemplate = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={timeData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis dataKey="x" {...args} domain={['auto', 'auto']} />
          <Line dataKey="y" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: timeData,
  },
};

interface MultipleDataSourceArgs {
  temperatureData: { begin: Date; temp: number }[];
  particulateData: { begin: Date; counts: number }[];
  allowSelectNearestValue: boolean;
}

const MultipleDataSourceStoryTemplate = {
  render: (args: MultipleDataSourceArgs) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis dataKey="begin" {...args} domain={['auto', 'auto']} />
          <Line data={temperatureData} key="temperature" dataKey="temp" />
          <Line data={particulateData} key="particulate" dataKey="counts" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    allowSelectNearestValue: true,
    temperatureData,
    particulateData,
  },
};

export const DefaultBehaviour = {
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data'],
    },
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: { type: 'radio' },
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: { type: 'radio' },
    },
  },
};

// https://github.com/d3/d3-time-format
const formatMillisecond = timeFormat('.%L'),
  formatSecond = timeFormat(':%S'),
  formatMinute = timeFormat('%I:%M'),
  formatHour = timeFormat('%I %p'),
  formatDay = timeFormat('%a %d'),
  formatWeek = timeFormat('%b %d'),
  formatMonth = timeFormat('%B'),
  formatYear = timeFormat('%Y');

function multiFormat(date: Date) {
  return (
    timeSecond(date) < date
      ? formatMillisecond
      : timeMinute(date) < date
      ? formatSecond
      : timeHour(date) < date
      ? formatMinute
      : timeDay(date) < date
      ? formatHour
      : timeMonth(date) < date
      ? timeWeek(date) < date
        ? formatDay
        : formatWeek
      : timeYear(date) < date
      ? formatMonth
      : formatYear
  )(date);
}

export const WithD3Scale = {
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime()
      .domain([Math.min(...numericValues), Math.max(...numericValues)])
      .nice();

    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat,
    };

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={timeData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  parameters: { controls: { include: ['data'] } },
};

export const MultipleDataSourceTooltip = {
  ...MultipleDataSourceStoryTemplate,

  parameters: {
    controls: {
      include: ['allowSelectNearestValue', 'temperatureData', 'particulateData'],
    },
  },
  argTypes: {
    allowSelectNearestValue: {
      control: 'boolean',
    },
  },
  render: (args: MultipleDataSourceArgs) => {
    const timeValues = args.particulateData.map(row => row.begin);

    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime()
      .domain([Math.min(...numericValues), Math.max(...numericValues)])
      .nice();

    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat,
      // allowSelectNearestValue: args.allowSelectNearestValue,
    };

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          // data={timeData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis dataKey="begin" {...args} {...xAxisArgs} />
          <Line data={temperatureData} key="temperature" dataKey="temp" />
          <Line data={particulateData} key="particulate" dataKey="counts" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
};
