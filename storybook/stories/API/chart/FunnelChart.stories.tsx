import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Funnel, FunnelChart, FunnelProps, LabelList, Legend, ResponsiveContainer, Tooltip } from '../../../../src';
import { CategoricalChartProps } from '../props/ChartProps';
import { ActiveShapeProps } from '../props/ActiveShapeProps';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { pageDataWithFillColor } from '../../data';

export default {
  argTypes: {
    ...CategoricalChartProps,
    ...ActiveShapeProps,
  },
  component: FunnelChart,
};

export const Simple: Meta<FunnelProps> = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={200}>
        <FunnelChart accessibilityLayer data={data}>
          <Funnel
            width={400}
            dataKey="value"
            stroke="#424242"
            isAnimationActive
            lastShapeType="rectangle"
            shape={args.shape}
            activeShape={args.activeShape}
          >
            <LabelList dataKey="name" fill="#000" position="right" stroke="none" />
          </Funnel>
          <Tooltip />
        </FunnelChart>
      </ResponsiveContainer>
    );
  },
  args: {
    shape: {},
    activeShape: { fill: 'gold', stroke: 'purple' },
    data: [
      {
        fill: '#EEEEEE',
        name: 'A',
        value: 1009,
      },
      {
        fill: '#E0E0E0',
        name: 'B',
        value: 903,
      },
      {
        fill: '#BDBDBD',
        name: 'C',
        value: 756,
      },
      {
        fill: '#9E9E9E',
        name: 'D',
        value: 622,
      },
      {
        fill: '#757575',
        name: 'E',
        value: 602,
      },
      {
        fill: '#424242',
        name: 'F',
        value: 580,
      },
      {
        fill: '#424242',
        name: 'F',
        value: 580,
      },
    ],
  },
};

export const WithChangingDataKey: StoryObj = {
  render: (args: Record<string, any>) => {
    const [dataKey, setDataKey] = React.useState('amt');
    return (
      <>
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onChange={e => 'value' in e.target && typeof e.target.value === 'string' && setDataKey(e.target.value)}
        >
          <label htmlFor="dataKey-amt" style={{ display: 'flex', flexDirection: 'row' }}>
            <input type="radio" id="dataKey-amt" name="dataKey" value="amt" defaultChecked={dataKey === 'amt'} />
            dataKey 1
          </label>
          <label htmlFor="dataKey-pv" style={{ display: 'flex', flexDirection: 'row' }}>
            <input type="radio" id="dataKey-pv" name="dataKey" value="pv" defaultChecked={dataKey === 'pv'} />
            dataKey 2
          </label>
          <label htmlFor="dataKey-empty" style={{ display: 'flex', flexDirection: 'row' }}>
            <input
              type="radio"
              id="dataKey-empty"
              name="dataKey"
              value="hidden"
              defaultChecked={dataKey === 'hidden'}
            />
            Hidden
          </label>
        </form>
        <FunnelChart {...args}>
          <Legend />
          <Funnel
            dataKey={dataKey}
            fill="orange"
            fillOpacity={0.5}
            stroke="blue"
            strokeDasharray="3 3"
            lastShapeType="rectangle"
            label={{ dataKey: 'name', stroke: 'none', fill: 'black', strokeDasharray: '0 0' }}
          />
          <Tooltip />
        </FunnelChart>
      </>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: pageDataWithFillColor,
    width: 360,
    height: 360,
  },
};
