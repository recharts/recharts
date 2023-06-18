import React, { useState } from 'react';
import { pageData } from '../data';
import {
  AreaChart,
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
  Cell,
  ComposedChart,
  LabelList,
  Brush,
  ErrorBar,
} from '../../../src';

export default {
  component: AreaChart,
  docs: {
    autodocs: false,
  },
};

export const Tiny = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={pageData}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  },
};

export const Simple = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={pageData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  },
};

export const Stacked = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={pageData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  },
};

const pvErrorData = pageData.map(d => ({ ...d, pvError: [100, 200] }));

export const StackedWithErrorBar = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={pvErrorData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d">
            <ErrorBar dataKey="pvError" width={5} stroke="red" direction="x" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  },
};

export const Mix = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={pageData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
          <Bar dataKey="uv" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    );
  },
};

export const CustomShape = {
  render: () => {
    const getPath = (x: number, y: number, width: number, height: number) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props: any) => {
      const { fill, x, y, width, height } = props;

      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    return (
      <BarChart
        width={500}
        height={300}
        data={pageData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {pageData.map(({ name }, index) => (
            <Cell key={`cell-${name}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    );
  },
};

export const PositiveAndNegative = {
  render: () => {
    const data = [
      {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: -3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: -2000,
        pv: -9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: -1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: 2390,
        pv: -3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  },
};

export const WithBrush = {
  render: () => {
    const data = [
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

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="name" height={30} stroke="#8884d8" />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  },
};

export const WithCustomizedEvent = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={300}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          data={pageData}
        >
          <Bar onClick={(_data, index) => setActiveIndex(index)} dataKey="uv" isAnimationActive={false}>
            {pageData.map(({ name }, index: number) => (
              <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${name}`} />
            ))}
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
};

export const WithMinHeight = {
  render: () => {
    const data = [
      {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 2000,
        pv: 8,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: 18,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];

    const renderCustomizedLabel = (props: any) => {
      const { x, y, width, value } = props;
      const radius = 10;

      return (
        <g>
          <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
          <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
            {value.split(' ')[1]}
          </text>
        </g>
      );
    };

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
            <LabelList dataKey="name" content={renderCustomizedLabel} />
          </Bar>
          <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
        </BarChart>
      </ResponsiveContainer>
    );
  },
};

export const StackedBySign = {
  render: () => {
    const data = [
      {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: -3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: -2000,
        pv: -9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: -1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: 2390,
        pv: -3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          stackOffset="sign"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="pv" fill="#8884d8" stackId="stack" />
          <Bar dataKey="uv" fill="#82ca9d" stackId="stack" />
        </BarChart>
      </ResponsiveContainer>
    );
  },
};

export const Biaxial = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={pageData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  },
};

export const HasBackground = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={pageData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  },
};

export const WithMultiXAxis = {
  render: () => {
    const data = [
      {
        date: '2000-01',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        date: '2000-02',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        date: '2000-03',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        date: '2000-04',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        date: '2000-05',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        date: '2000-06',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        date: '2000-07',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        date: '2000-08',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        date: '2000-09',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        date: '2000-10',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        date: '2000-11',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        date: '2000-12',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
    ];

    const monthTickFormatter = (tick: any) => {
      const date = new Date(tick);

      return date.getMonth() + 1;
    };

    const renderQuarterTick = (tickProps: any) => {
      const { x, y, payload } = tickProps;
      const { value, offset } = payload;
      const date = new Date(value);
      const month = date.getMonth();
      const quarterNo = Math.floor(month / 3) + 1;
      if (month % 3 === 1) {
        return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
      }

      const isLast = month === 11;

      if (month % 3 === 0 || isLast) {
        const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;

        return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
      }
      return null;
    };

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={monthTickFormatter as any} />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            interval={0}
            tick={renderQuarterTick}
            height={1}
            scale="band"
            xAxisId="quarter"
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  },
};

export const NoPadding = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={pageData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    );
  },
};
