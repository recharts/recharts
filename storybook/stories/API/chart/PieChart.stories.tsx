import React, { useEffect, useState } from 'react';
import { StoryContext } from '@storybook/react';
import { Label, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from '../../../../src';
import { pageData } from '../../data';
import { CategoricalChartProps } from '../props/ChartProps';
import { ActiveShapeProps } from '../props/ActiveShapeProps';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts/RechartsHookInspector';

export default {
  argTypes: {
    ...CategoricalChartProps,
    activeIndex: ActiveShapeProps.activeIndex,
    activeShape: ActiveShapeProps.activeShape,
  },
  component: PieChart,
};

export const Simple = {
  render: (args: Record<string, any>, context: StoryContext) => {
    const { data, activeShape } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart {...args}>
          <Pie data={data} dataKey="uv" activeShape={activeShape} />
          <Tooltip defaultIndex={3} />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </PieChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: pageData,
    activeShape: { fill: 'red' },
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};

export const Donut = {
  render: (args: Record<string, any>, context: StoryContext) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart {...args}>
          <Pie data={data} dataKey="uv" nameKey="name" innerRadius={50} outerRadius={80}>
            <Label position="center" fill="#000" fontSize={12} fontWeight="bold" dy={-7}>
              Donut
            </Label>
            <Label position="center" fontSize={12} fontWeight="bold" dy={8}>
              Chart
            </Label>
          </Pie>
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </PieChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: pageData,
  },
};

export const ChangingDataKey = {
  render: (args: Record<string, any>, context: StoryContext) => {
    const data1 = [
      { x: { value: 1 }, name: 'x1', fill: 'blue' },
      { x: { value: 2 }, name: 'x2', fill: 'red' },
      { x: { value: 3 }, name: 'x3', fill: 'green' },
    ];
    const data2 = [
      { y: { value: 3 }, name: 'y1', fill: 'blue' },
      { y: { value: 2 }, name: 'y2', fill: 'red' },
      { y: { value: 1 }, name: 'y3', fill: 'green' },
    ];

    const dataKey1 = (d: any) => {
      return d.x.value;
    };
    const dataKey2 = (d: any) => {
      return d.y.value;
    };

    const [useData2, setUseData2] = useState(false);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
      console.log('ChangingDataKey mounted');
      return () => {
        console.log('ChangingDataKey unmounted');
      };
    }, []);

    return (
      <>
        <button
          type="button"
          onClick={() => {
            setUseData2(false);
            setVisible(true);
          }}
        >
          Use data1
        </button>
        <button
          type="button"
          onClick={() => {
            setUseData2(true);
            setVisible(true);
          }}
        >
          Use data2
        </button>
        <button
          type="button"
          onClick={() => {
            setVisible(false);
          }}
        >
          Hide
        </button>
        <PieChart {...args} data={useData2 ? data2 : data1}>
          <Tooltip />
          <Legend />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          <Pie
            data={useData2 ? data2 : data1}
            name="Animated line"
            hide={!visible}
            type="monotone"
            dataKey={useData2 ? dataKey2 : dataKey1}
            stroke="#8884d8"
            strokeDasharray="5 5"
            label={{ fill: 'red' }}
            animationDuration={3000}
          />
        </PieChart>
      </>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    width: 500,
    height: 300,
    margin: {
      top: 30,
      right: 30,
      left: 20,
      bottom: 5,
    },
  },
};
