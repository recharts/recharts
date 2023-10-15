import { Meta } from '@storybook/react';
// eslint-disable-next-line max-classes-per-file
import React from 'react';
import {
  ScatterChart,
  LineChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LabelList,
  Cell,
  Scatter,
  ZAxis,
} from '../../../src';
import { Props as ScatterProps } from '../../../src/cartesian/Scatter';

export default {
  component: LineChart,
  docs: {
    autodocs: false,
  },
};

export const Simple: Meta<ScatterProps> = {
  args: {
    activeShape: { fill: 'red' },
    activeIndex: undefined,
  },
  render: args => {
    const data = [
      { x: 100, y: 200, z: 200 },
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter
            activeShape={args.activeShape}
            activeIndex={args.activeIndex}
            name="A school"
            data={data}
            fill="#8884d8"
          />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
};

export const ThreeDim = {
  render: () => {
    const data01 = [
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];
    const data02 = [
      { x: 200, y: 260, z: 240 },
      { x: 240, y: 290, z: 220 },
      { x: 190, y: 290, z: 250 },
      { x: 198, y: 250, z: 210 },
      { x: 180, y: 280, z: 260 },
      { x: 210, y: 220, z: 230 },
    ];

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <ZAxis type="number" dataKey="z" range={[60, 400]} name="score" unit="km" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="A school" data={data01} fill="#8884d8" shape="star" />
          <Scatter name="B school" data={data02} fill="#82ca9d" shape="triangle" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
};

export const JointLine = {
  render: () => {
    const data01 = [
      { x: 10, y: 30 },
      { x: 30, y: 200 },
      { x: 45, y: 100 },
      { x: 50, y: 400 },
      { x: 70, y: 150 },
      { x: 100, y: 250 },
    ];
    const data02 = [
      { x: 30, y: 20 },
      { x: 50, y: 180 },
      { x: 75, y: 240 },
      { x: 100, y: 100 },
      { x: 120, y: 190 },
    ];

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <ZAxis type="number" range={[100]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="A school" data={data01} fill="#8884d8" line shape="cross" />
          <Scatter name="B school" data={data02} fill="#82ca9d" line shape="diamond" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
};

export const BubbleChart = {
  render: () => {
    const data01 = [
      { hour: '12a', index: 1, value: 170 },
      { hour: '1a', index: 1, value: 180 },
      { hour: '2a', index: 1, value: 150 },
      { hour: '3a', index: 1, value: 120 },
      { hour: '4a', index: 1, value: 200 },
      { hour: '5a', index: 1, value: 300 },
      { hour: '6a', index: 1, value: 400 },
      { hour: '7a', index: 1, value: 200 },
      { hour: '8a', index: 1, value: 100 },
      { hour: '9a', index: 1, value: 150 },
      { hour: '10a', index: 1, value: 160 },
      { hour: '11a', index: 1, value: 170 },
      { hour: '12a', index: 1, value: 180 },
      { hour: '1p', index: 1, value: 144 },
      { hour: '2p', index: 1, value: 166 },
      { hour: '3p', index: 1, value: 145 },
      { hour: '4p', index: 1, value: 150 },
      { hour: '5p', index: 1, value: 170 },
      { hour: '6p', index: 1, value: 180 },
      { hour: '7p', index: 1, value: 165 },
      { hour: '8p', index: 1, value: 130 },
      { hour: '9p', index: 1, value: 140 },
      { hour: '10p', index: 1, value: 170 },
      { hour: '11p', index: 1, value: 180 },
    ];

    const data02 = [
      { hour: '12a', index: 1, value: 160 },
      { hour: '1a', index: 1, value: 180 },
      { hour: '2a', index: 1, value: 150 },
      { hour: '3a', index: 1, value: 120 },
      { hour: '4a', index: 1, value: 200 },
      { hour: '5a', index: 1, value: 300 },
      { hour: '6a', index: 1, value: 100 },
      { hour: '7a', index: 1, value: 200 },
      { hour: '8a', index: 1, value: 100 },
      { hour: '9a', index: 1, value: 150 },
      { hour: '10a', index: 1, value: 160 },
      { hour: '11a', index: 1, value: 160 },
      { hour: '12a', index: 1, value: 180 },
      { hour: '1p', index: 1, value: 144 },
      { hour: '2p', index: 1, value: 166 },
      { hour: '3p', index: 1, value: 145 },
      { hour: '4p', index: 1, value: 150 },
      { hour: '5p', index: 1, value: 160 },
      { hour: '6p', index: 1, value: 180 },
      { hour: '7p', index: 1, value: 165 },
      { hour: '8p', index: 1, value: 130 },
      { hour: '9p', index: 1, value: 140 },
      { hour: '10p', index: 1, value: 160 },
      { hour: '11p', index: 1, value: 180 },
    ];

    const parseDomain = () => [
      0,
      Math.max(
        Math.max.apply(
          null,
          data01.map(entry => entry.value),
        ),
        Math.max.apply(
          null,
          data02.map(entry => entry.value),
        ),
      ),
    ];

    const domain = parseDomain();
    const range = [16, 225];

    const renderTooltip = (props: any) => {
      const { active, payload } = props;

      if (active && payload && payload.length) {
        const data = payload[0] && payload[0].payload;

        return (
          <div
            style={{
              backgroundColor: '#fff',
              border: '1px solid #999',
              margin: 0,
              padding: 10,
            }}
          >
            <p>{data.hour}</p>
            <p>
              <span>value: </span>
              {data.value}
            </p>
          </div>
        );
      }

      return null;
    };

    return (
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={60}>
          <ScatterChart
            margin={{
              top: 10,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <XAxis
              type="category"
              dataKey="hour"
              interval={0}
              tick={{ fontSize: 0 }}
              tickLine={{ transform: 'translate(0, -6)' }}
            />
            <YAxis
              type="number"
              dataKey="index"
              name="sunday"
              height={10}
              width={80}
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: 'Sunday', position: 'insideRight' }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={renderTooltip} />
            <Scatter data={data01} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={60}>
          <ScatterChart
            width={800}
            height={60}
            margin={{
              top: 10,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <XAxis
              type="category"
              dataKey="hour"
              name="hour"
              interval={0}
              tick={{ fontSize: 0 }}
              tickLine={{ transform: 'translate(0, -6)' }}
            />
            <YAxis
              type="number"
              dataKey="index"
              height={10}
              width={80}
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: 'Monday', position: 'insideRight' }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={renderTooltip} />
            <Scatter data={data02} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={60}>
          <ScatterChart
            width={800}
            height={60}
            margin={{
              top: 10,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <XAxis
              type="category"
              dataKey="hour"
              name="hour"
              interval={0}
              tick={{ fontSize: 0 }}
              tickLine={{ transform: 'translate(0, -6)' }}
            />
            <YAxis
              type="number"
              dataKey="index"
              height={10}
              width={80}
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: 'Tuesday', position: 'insideRight' }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={renderTooltip} />
            <Scatter data={data01} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={60}>
          <ScatterChart
            width={800}
            height={60}
            margin={{
              top: 10,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <XAxis
              type="category"
              dataKey="hour"
              name="hour"
              interval={0}
              tick={{ fontSize: 0 }}
              tickLine={{ transform: 'translate(0, -6)' }}
            />
            <YAxis
              type="number"
              dataKey="index"
              height={10}
              width={80}
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: 'Wednesday', position: 'insideRight' }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={renderTooltip} />
            <Scatter data={data02} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={60}>
          <ScatterChart
            width={800}
            height={60}
            margin={{
              top: 10,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <XAxis
              type="category"
              dataKey="hour"
              name="hour"
              interval={0}
              tick={{ fontSize: 0 }}
              tickLine={{ transform: 'translate(0, -6)' }}
            />
            <YAxis
              type="number"
              dataKey="index"
              height={10}
              width={80}
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: 'Thursday', position: 'insideRight' }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={renderTooltip} />
            <Scatter data={data01} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={60}>
          <ScatterChart
            width={800}
            height={60}
            margin={{
              top: 10,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <XAxis
              type="category"
              dataKey="hour"
              name="hour"
              interval={0}
              tick={{ fontSize: 0 }}
              tickLine={{ transform: 'translate(0, -6)' }}
            />
            <YAxis
              type="number"
              dataKey="index"
              height={10}
              width={80}
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: 'Friday', position: 'insideRight' }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={renderTooltip} />
            <Scatter data={data02} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={60}>
          <ScatterChart
            width={800}
            height={60}
            margin={{
              top: 10,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <XAxis
              type="category"
              dataKey="hour"
              name="hour"
              interval={0}
              tickLine={{ transform: 'translate(0, -6)' }}
            />
            <YAxis
              type="number"
              dataKey="index"
              height={10}
              width={80}
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: 'Saturday', position: 'insideRight' }}
            />
            <ZAxis type="number" dataKey="value" domain={domain} range={range} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={renderTooltip} />
            <Scatter data={data01} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    );
  },
};

export const WithLabels = {
  render: () => {
    const data = [
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={data} fill="#8884d8">
            <LabelList dataKey="x" />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
};
export const MultipleYAxes = {
  render: () => {
    const data01 = [
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];
    const data02 = [
      { x: 300, y: 300, z: 200 },
      { x: 400, y: 500, z: 260 },
      { x: 200, y: 700, z: 400 },
      { x: 340, y: 350, z: 280 },
      { x: 560, y: 500, z: 500 },
      { x: 230, y: 780, z: 200 },
      { x: 500, y: 400, z: 200 },
      { x: 300, y: 500, z: 260 },
      { x: 240, y: 300, z: 400 },
      { x: 320, y: 550, z: 280 },
      { x: 500, y: 400, z: 500 },
      { x: 420, y: 280, z: 200 },
    ];

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis yAxisId="left" type="number" dataKey="y" name="weight" unit="kg" stroke="#8884d8" />
          <YAxis
            yAxisId="right"
            type="number"
            dataKey="y"
            name="weight"
            unit="kg"
            orientation="right"
            stroke="#82ca9d"
          />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter yAxisId="left" name="A school" data={data01} fill="#8884d8" />
          <Scatter yAxisId="right" name="A school" data={data02} fill="#82ca9d" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
};
export const WithCells = {
  render: () => {
    const data = [
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    return (
      <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="#8884d8">
          {data.map(({ x }, index) => (
            <Cell key={`cell-${x}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Scatter>
      </ScatterChart>
    );
  },
};
