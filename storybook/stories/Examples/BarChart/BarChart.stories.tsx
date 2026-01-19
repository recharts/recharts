import React, { useState } from 'react';
import { Args } from '@storybook/react-vite';
import { pageData, rangeData } from '../../data';
import {
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  ErrorBar,
  LabelList,
  Legend,
  LegendPayload,
  Rectangle,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from '../../../../src';
import { getStoryArgsFromArgsTypesObject } from '../../API/props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { BarChartArgs } from '../../API/arg-types/BarChartArgs';

export default {
  argTypes: BarChartArgs,
  component: BarChart,
  docs: {
    autodocs: false,
  },
};

export const StackedAndDynamic = {
  render: (args: Args) => {
    const [focusedDataKey, setFocusedDataKey] = useState<string | null>(null);
    const [locked, setLocked] = useState<boolean>(false);

    const onLegendMouseEnter = (payload: LegendPayload) => {
      if (!locked) {
        setFocusedDataKey(String(payload.dataKey));
      }
    };

    const onLegendMouseOut = () => {
      if (!locked) {
        setFocusedDataKey(null);
      }
    };

    const onLegendClick = (payload: LegendPayload) => {
      if (focusedDataKey === String(payload.dataKey)) {
        if (locked) {
          setFocusedDataKey(null);
          setLocked(false);
        } else {
          setLocked(true);
        }
      } else {
        setFocusedDataKey(String(payload.dataKey));
        setLocked(true);
      }
    };

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend onMouseEnter={onLegendMouseEnter} onMouseOut={onLegendMouseOut} onClick={onLegendClick} />
          <Bar
            hide={focusedDataKey != null && focusedDataKey !== 'pv'}
            dataKey="pv"
            stackId="a"
            fill="#8884d8"
            activeBar={{ fill: 'gold' }}
          />
          <Bar
            hide={focusedDataKey != null && focusedDataKey !== 'uv'}
            dataKey="uv"
            stackId="a"
            fill="#82ca9d"
            activeBar={{ fill: 'silver' }}
          />
          <Tooltip shared={false} defaultIndex={1} />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 20,
      right: 30,
      left: 20,
      bottom: 5,
    },
  },
};

const pvErrorData = pageData.map(d => ({ ...d, pvError: [100, 200] }));

export const StackedWithErrorBar = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Legend />
          <Tooltip />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d">
            <ErrorBar dataKey="pvError" width={5} stroke="red" direction="x" />
          </Bar>
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    data: pvErrorData,
    margin: {
      top: 20,
      right: 30,
      left: 20,
      bottom: 5,
    },
    layout: 'vertical',
  },
};

const dataForBrush = [
  { name: '1', uv: 300, pv: 456 },
  { name: '2', uv: -145, pv: 230 },
  { name: '3', uv: -100, pv: 345 },
  { name: '4', uv: -8, pv: 450 },
  { name: '5', uv: 100, pv: 321 },
  { name: '6', uv: 9, pv: 235 },
  { name: '7', uv: 53, pv: 267 },
  { name: '8', uv: 252, pv: -378 },
  { name: '9', uv: 79, pv: -210 },
  { name: '10', uv: 294, pv: -23 },
  { name: '12', uv: 43, pv: 45 },
  { name: '13', uv: -74, pv: 90 },
  { name: '14', uv: -71, pv: 130 },
  { name: '15', uv: -117, pv: 11 },
  { name: '16', uv: -186, pv: 107 },
  { name: '17', uv: -16, pv: 926 },
  { name: '18', uv: -125, pv: 653 },
  { name: '19', uv: 222, pv: 366 },
  { name: '20', uv: 372, pv: 486 },
  { name: '21', uv: 182, pv: 512 },
  { name: '22', uv: 164, pv: 302 },
  { name: '23', uv: 316, pv: 425 },
  { name: '24', uv: 131, pv: 467 },
  { name: '25', uv: 291, pv: -190 },
  { name: '26', uv: -47, pv: 194 },
  { name: '27', uv: -415, pv: 371 },
  { name: '28', uv: -182, pv: 376 },
  { name: '29', uv: -93, pv: 295 },
  { name: '30', uv: -99, pv: 322 },
  { name: '31', uv: -52, pv: 246 },
  { name: '32', uv: 154, pv: 33 },
  { name: '33', uv: 205, pv: 354 },
  { name: '34', uv: 70, pv: 258 },
  { name: '35', uv: -25, pv: 359 },
  { name: '36', uv: -59, pv: 192 },
  { name: '37', uv: -63, pv: 464 },
  { name: '38', uv: -91, pv: -2 },
  { name: '39', uv: -66, pv: 154 },
  { name: '40', uv: -50, pv: 186 },
];

export const XAxisTickMarginWithBrushDy = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tickMargin={30} />
          <YAxis />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
          <Tooltip />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="name" height={30} dy={30} stroke="#8884d8" />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    data: dataForBrush,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 35,
    },
  },
};

export const StackedWithBrush = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
          <Tooltip defaultIndex={1} />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" activeBar={{ fill: 'gold' }} />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" activeBar={{ fill: 'silver' }} />
          <Brush dataKey="name" height={30} stroke="#8884d8" />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
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

export const HasLabelBasedOnSeparateDataKey = {
  render: (args: Args) => {
    const dataWithLabel = pageData.map(({ name, uv, pv }) => ({
      name,
      uv,
      pv,
      label: uv > pv ? 'UV greater' : 'PV greater',
    }));
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args} data={dataWithLabel}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip />
          <Bar dataKey="pv" fill="#8884d8" label={{ dataKey: 'label', position: 'top', fill: '#111' }} />
          <Bar dataKey="uv" fill="#82ca9d" />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
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

export const NoPadding = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
          <Tooltip />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
    barSize: 20,
  },
};

const dataWithSmallValuesAndZero = [
  {
    name: 'Page D',
    uv: 1397,
    pv: 0,
  },
  {
    name: 'Page E',
    uv: 0,
    pv: 1,
  },
  {
    name: 'Page F',
    uv: 1520,
    pv: 1108,
  },
  {
    name: 'Page G',
    uv: 2,
    pv: 680,
  },
];

export const WithMinPointSize = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="pv" fill="purple" minPointSize={value => (value === 0 ? 0 : 2)} stackId="a" />
          <Bar dataKey="uv" fill="green" minPointSize={value => (value === 0 ? 0 : 2)} stackId="a" />
          <Bar dataKey="uv" fill="blue" minPointSize={value => (value === 0 ? 0 : 2)} />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    data: dataWithSmallValuesAndZero,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
  },
};

export const OneDataPointPercentSize = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey={v => v[0]} type="number" domain={[0, 10]} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey={v => v[1]} />
          <Tooltip />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    data: [[4.5, 10]],
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
    /* When there's only one data point on a numerical domain, we cannot automatically calculate the bar size */
    barSize: '30%',
  },
};

export const RangedBarChart = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey="day" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="temperature" fill="violet" stroke="indigo" />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    data: rangeData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
    /* When there's only one data point on a numerical domain, we cannot automatically calculate the bar size */
    barSize: '30%',
  },
};

const MyCustomCursor = (props: any) => {
  // do something here to make your cursor different
  return <Rectangle {...props} fill="red" fillOpacity={0.6} stroke="#111" />;
};

export const CustomCursorBarChart = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="uv" fill="violet" stroke="indigo" />
          <Tooltip cursor={<MyCustomCursor />} />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
    /* When there's only one data point on a numerical domain, we cannot automatically calculate the bar size */
    barSize: '30%',
  },
};

export const ChangingDataKey = {
  render: (args: Args) => {
    const data1 = [
      { x: { value: 1 }, name: 'x1' },
      { x: { value: 2 }, name: 'x2' },
      { x: { value: 3 }, name: 'x3' },
    ];
    const data2 = [
      { y: { value: 3 }, name: 'y1' },
      { y: { value: 2 }, name: 'y2' },
      { y: { value: 1 }, name: 'y3' },
    ];

    const dataKey1 = (d: any) => {
      return d.x.value;
    };
    const dataKey2 = (d: any) => {
      return d.y.value;
    };

    const [useData2, setUseData2] = useState(false);
    const [visible, setVisible] = useState(true);

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
        <BarChart {...args} data={useData2 ? data2 : data1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis dataKey={useData2 ? dataKey2 : dataKey1} />
          <Tooltip />
          <Legend />
          <RechartsHookInspector />
          <Bar
            name="Animated Bar"
            hide={!visible}
            type="monotone"
            dataKey={useData2 ? dataKey2 : dataKey1}
            stroke="#8884d8"
            strokeDasharray="5 5"
            label={{ fill: 'red' }}
            animationDuration={1000}
          />
        </BarChart>
      </>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
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

export const ChangingDataKeyAndStacked = {
  render: (args: Args) => {
    const [useData2, setUseData2] = useState(false);
    const [visible, setVisible] = useState(true);

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
        <BarChart {...args} data={pageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis dataKey="uv" />
          <Tooltip />
          <Legend />
          <RechartsHookInspector />
          <Bar
            name="Animated Bar 1"
            hide={!visible}
            dataKey={useData2 ? 'uv' : 'pv'}
            stackId={1}
            stroke="green"
            strokeDasharray="5 5"
            label={{ fill: 'red' }}
            animationDuration={3000}
          />
          <Bar
            name="Animated Bar 2"
            hide={!visible}
            dataKey={useData2 ? 'pv' : 'amt'}
            stackId={1}
            stroke="yellow"
            strokeDasharray="5 5"
            label={{ fill: 'red' }}
            animationDuration={1000}
          />
        </BarChart>
      </>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
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

export const ChangingData = {
  render: (args: Args) => {
    type MyDataShape = Array<{ number: number }>;

    const [data, setData] = useState<MyDataShape>([{ number: 10 }]);

    const reset = () => {
      setData([{ number: 10 }]);
    };

    const changeSynchronously = () => {
      setData([{ number: 50 }]);
    };

    const changeAsynchronously = () => {
      setData([{ number: 90 }]);

      setTimeout(() => {
        setData([{ number: 30 }]);
      }, 150);
    };

    return (
      <div style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
        <BarChart {...args} data={data}>
          <YAxis hide domain={[0, 100]} />
          <Bar dataKey="number" fill="chocolate" background={{ fill: 'bisque' }} />
          <RechartsHookInspector />
        </BarChart>

        <button type="button" onClick={changeSynchronously}>
          Change data synchronously
        </button>

        <button type="button" onClick={changeAsynchronously}>
          Change data with setTimeout
        </button>

        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 100,
    height: 100,
  },
};

export const VerticalWithLabelLists = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={250} {...args} layout="vertical">
          <Bar dataKey="value" fill="#aebbae" isAnimationActive={false}>
            <LabelList dataKey="value" position="insideLeft" />
            <LabelList dataKey="label" position="right" />
          </Bar>

          <XAxis dataKey="value" type="number" />
          <YAxis dataKey="label" hide type="category" />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    width: 500,
    height: 300,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
    data: [
      {
        label: 'World Trade Organization',
        value: 74,
      },
      {
        label: 'African Development Bank',
        value: 8,
      },
      {
        label: 'International Bank for Reconstruction and Development',
        value: 5,
      },
    ],
  },
};
