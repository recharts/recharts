// eslint-disable-next-line max-classes-per-file
import { expect, userEvent, within } from '@storybook/test';
import { StoryContext, StoryObj } from '@storybook/react';
import React, { PureComponent, useState } from 'react';
import { Impressions, impressionsData, logData, pageData } from '../data';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
  Brush,
  ReferenceArea,
} from '../../../src';
import { DataKey } from '../../../src/util/types';
import { RechartsHookInspector } from '../../storybook-addon-recharts/RechartsHookInspector';
import { CategoricalChartProps } from '../API/props/ChartProps';
import { getStoryArgsFromArgsTypesObject } from '../API/props/utils';
import { ManualAnimations } from '../../storybook-addon-recharts/ManualAnimations';

export default {
  component: LineChart,
  argTypes: CategoricalChartProps,
  docs: {
    autodocs: false,
  },
};

export const Simple = {
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{ stroke: 'gold', strokeWidth: 2 }} defaultIndex={3} />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
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

export const Tiny = {
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    width: 300,
    height: 100,
    data: pageData,
  },
};

export const Dashed = {
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
          <Legend />
          <Tooltip defaultIndex={3} active />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    width: 500,
    height: 300,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
  },
};

export const LogarithmicYAxis = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis
            scale="symlog"
            ticks={[0, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 10000000, 100000000, 1000000000, 10000000000]}
          />
          <Tooltip defaultIndex={1} />
          <Line
            type="monotone"
            dataKey="performance"
            name="Performance"
            stroke="#75ABBC"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            unit=" KFLOPS"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    width: 500,
    height: 300,
    data: logData,
    margin: {
      top: 20,
      right: 30,
      left: 50,
      bottom: 5,
    },
  },
};

export const Vertical = {
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Legend />
          <Tooltip defaultIndex={4} active />
          <Line dataKey="pv" stroke="#8884d8" />
          <Line dataKey="uv" stroke="#82ca9d" />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    layout: 'vertical',
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

export const BiAxial = {
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid yAxisId="left" strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Tooltip />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
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
export const VerticalWithSpecifiedDomain = {
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 'dataMax + 1000']} />
          <YAxis dataKey="name" type="category" />
          <Legend />
          <Line dataKey="pv" stroke="#8884d8" />
          <Line dataKey="uv" stroke="#82ca9d" />
          <Tooltip />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    layout: 'vertical',
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
export const ConnectNulls = {
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart {...args}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            <Tooltip />
            <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart {...args}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Line connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            <Tooltip />
            <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  },
  args: {
    width: 500,
    height: 200,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    },
    data: [
      { name: 'Page A', uv: 4000 },
      { name: 'Page B', uv: 3000 },
      { name: 'Page C', uv: 2000 },
      { name: 'Page D' },
      { name: 'Page E', uv: 1890 },
      { name: 'Page F', uv: 2390 },
      { name: 'Page G', uv: 3490 },
    ],
  },
};
export const WithXAxisPadding = {
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Tooltip />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    width: 500,
    height: 300,
    data: pageData,
  },
};
export const WithReferenceLines = {
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <ReferenceLine x="Page C" stroke="red" label="Anything" />
          <ReferenceLine y={1600} label="Something" stroke="red" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Tooltip />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 20,
      right: 50,
      left: 20,
      bottom: 5,
    },
  },
};
export const WithCustomizedDot = {
  render: (args: Record<string, any>, context: StoryContext) => {
    const CustomizedDot = (props: any) => {
      const { cx, cy, value } = props;

      if (value > 2500) {
        return (
          <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="red" viewBox="0 0 1024 1024">
            <path
              d={
                'M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76' +
                'c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 ' +
                '295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-' +
                '32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-' +
                '71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-' +
                '73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 ' +
                '88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-' +
                '18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 ' +
                '155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 ' +
                '9.568-31.2-9.12-40.096z'
              }
            />
          </svg>
        );
      }

      return (
        <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="green" viewBox="0 0 1024 1024">
          <path
            d={
              'M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2' +
              '-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-' +
              '179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 ' +
              '6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504' +
              '-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-' +
              '50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-' +
              '50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-' +
              '1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648' +
              ' 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q' +
              '37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-' +
              '26.624-55.296-100.352-88.576t-176.128-33.28z'
            }
          />
        </svg>
      );
    };

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={<CustomizedDot />} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Tooltip />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
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

export const ClipDot: StoryObj = {
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          data={[...pageData, { name: 'Page H', pv: 0 }, { name: 'Page I', uv: 0 }]}
        >
          <Line
            isAnimationActive={false}
            dataKey="uv"
            {...args}
            dot={{ clipDot: args.clipDot, r: 4, strokeWidth: 2, fill: '#ffffff', fillOpacity: 1 }}
          />
          <Line isAnimationActive={false} dataKey="pv" {...args} dot={{ clipDot: args.clipDot, r: 10 }} />
          <XAxis dataKey="name" allowDataOverflow />
          <YAxis allowDataOverflow />
          <Tooltip />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    clipDot: false,
  },
  parameters: {
    controls: { include: ['clipDot'] },
    docs: {
      description: {
        clipDot: `When \`allowDataOverflow\` is true on \`XAxis\` or \`YAxis\`, set
        \`clipDot\` within the dot object to determine if recharts should clip the dots at the end of the page.`,
      },
    },
  },
};

export const WithCustomizedLabel = {
  render: (args: Record<string, any>, context: StoryContext) => {
    class CustomizedLabel extends PureComponent {
      render() {
        const { x, y, stroke, value } = this.props as any;

        return (
          <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
            {value}
          </text>
        );
      }
    }

    class CustomizedAxisTick extends PureComponent {
      render() {
        const { x, y, payload } = this.props as any;

        return (
          <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
              {payload.value}
            </text>
          </g>
        );
      }
    }

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel />} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Tooltip />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 20,
      right: 30,
      left: 20,
      bottom: 10,
    },
  },
};

export const HighlightAndZoom = {
  render: (args: Record<string, any>, context: StoryContext) => {
    const initialState = {
      data: impressionsData,
      left: 'dataMin',
      right: 'dataMax',
      refAreaLeft: '',
      refAreaRight: '',
      top: 'dataMax+1',
      bottom: 'dataMin-1',
      top2: 'dataMax+20',
      bottom2: 'dataMin-20',
      animation: true,
    };

    const getAxisYDomain = (
      from: string | undefined,
      to: string | undefined,
      ref: keyof Impressions,
      offset: number,
    ): (number | string)[] => {
      if (from && to) {
        const refData = impressionsData.slice(Number(from) - 1, Number(to));
        let [bottom, top] = [refData[0][ref], refData[0][ref]];
        refData.forEach(d => {
          if (d[ref] > top) top = d[ref];
          if (d[ref] < bottom) bottom = d[ref];
        });

        return [(bottom | 0) - offset, (top | 0) + offset];
      }
      return [initialState.bottom, initialState.top];
    };

    const [zoomGraph, setZoomGraph] = useState(initialState);

    const zoom = () => {
      let { refAreaLeft, refAreaRight } = zoomGraph;
      const { data } = zoomGraph;

      if (refAreaLeft === refAreaRight || refAreaRight === '') {
        setZoomGraph(prev => ({
          ...prev,
          refAreaLeft: '',
          refAreaRight: '',
        }));
        return;
      }

      // xAxis domain
      if (refAreaLeft && refAreaRight && refAreaLeft > refAreaRight)
        [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

      // yAxis domain
      const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'cost', 1);
      const [bottom2, top2] = getAxisYDomain(refAreaLeft, refAreaRight, 'impression', 50);

      // @ts-expect-error this storybook needs types
      setZoomGraph(prev => ({
        ...prev,
        refAreaLeft: '',
        refAreaRight: '',
        data: data?.slice(),
        left: refAreaLeft,
        right: refAreaRight,
        bottom,
        top,
        bottom2,
        top2,
      }));
    };

    const zoomOut = () => {
      const { data } = zoomGraph;
      setZoomGraph(prev => ({
        ...prev,
        data: data?.slice(),
        refAreaLeft: '',
        refAreaRight: '',
        left: 'dataMin',
        right: 'dataMax',
        top: 'dataMax+1',
        bottom: 'dataMin',
        top2: 'dataMax+50',
        bottom2: 'dataMin+50',
      }));
    };

    const { data, left, right, refAreaLeft, refAreaRight, top, bottom, top2, bottom2 } = zoomGraph;

    return (
      <div className="highlight-bar-charts" style={{ userSelect: 'none', width: '100%' }}>
        <button type="button" className="btn update" onClick={() => zoomOut()}>
          Zoom Out
        </button>

        <ResponsiveContainer minHeight={500}>
          <LineChart
            {...args}
            data={data}
            onMouseDown={e => setZoomGraph(prev => ({ ...prev, refAreaLeft: e.activeLabel }))}
            onMouseMove={e => zoomGraph.refAreaLeft && setZoomGraph(prev => ({ ...prev, refAreaRight: e.activeLabel }))}
            onMouseUp={() => zoom()}
          >
            <CartesianGrid yAxisId="1" strokeDasharray="3 3" />
            <XAxis allowDataOverflow dataKey="name" domain={left && right ? [left, right] : undefined} type="number" />
            <YAxis allowDataOverflow domain={[bottom, top]} type="number" yAxisId="1" />
            <YAxis orientation="right" allowDataOverflow domain={[bottom2, top2]} type="number" yAxisId="2" />
            <Line yAxisId="1" type="natural" dataKey="cost" stroke="#8884d8" animationDuration={300} />
            <Line yAxisId="2" type="natural" dataKey="impression" stroke="#82ca9d" animationDuration={300} />

            {refAreaLeft && refAreaRight ? (
              <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />
            ) : null}
            <Tooltip />
            <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    width: 800,
    height: 400,
  },
};

export const LineChartHasMultiSeries = {
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Line dataKey="uv" />
          <Line dataKey="pv" />
          <Line dataKey="amt" />
          <Tooltip />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    width: 500,
    height: 300,
    data: pageData,
  },
};

export const LineChartAxisInterval = {
  render: () => {
    return (
      <>
        <LineChart width={200} height={100} data={pageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval="preserveEnd" />
          <YAxis interval="preserveEnd" />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>

        <LineChart width={200} height={100} data={pageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval="preserveStart" />
          <YAxis interval="preserveStart" />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>

        <LineChart width={200} height={100} data={pageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval="preserveStartEnd" />
          <YAxis interval="preserveStartEnd" />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>

        <LineChart width={200} height={100} data={pageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} angle={30} dx={20} />
          <YAxis />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </>
    );
  },
};

export const NegativeValuesWithReferenceLines = {
  render: (args: Record<string, any>, context: StoryContext) => {
    const data = [
      {
        x: -50,
        y: -50,
      },
      {
        x: 0,
        y: 0,
      },
      {
        x: 50,
        y: 50,
      },
      {
        x: 100,
        y: 100,
      },
      {
        x: 150,
        y: 150,
      },
      {
        x: 200,
        y: 200,
      },
      {
        x: 250,
        y: 250,
      },
      {
        x: 350,
        y: 350,
      },
      {
        x: 400,
        y: 400,
      },
      {
        x: 450,
        y: 450,
      },
      {
        x: 500,
        y: 500,
      },
    ];

    const minX = Math.min(...data.map(d => d.x));
    const minY = Math.min(...data.map(d => d.y));

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />

          <YAxis
            dataKey="y"
            domain={['auto', 'auto']}
            type="number"
            interval={0}
            label={{
              value: `y`,
              style: { textAnchor: 'middle' },
              angle: -90,
              position: 'left',
              offset: 0,
            }}
            allowDataOverflow
            strokeWidth={minX < 0 ? 0 : 1}
          />

          <XAxis
            dataKey="x"
            domain={['auto', 'auto']}
            interval={0}
            type="number"
            label={{
              key: 'xAxisLabel',
              value: 'x',
              position: 'bottom',
            }}
            allowDataOverflow
            strokeWidth={minY < 0 ? 0 : 1}
          />

          {minY < 0 && <ReferenceLine y={0} stroke="gray" strokeWidth={1.5} strokeOpacity={0.65} />}
          {minX < 0 && <ReferenceLine x={0} stroke="gray" strokeWidth={1.5} strokeOpacity={0.65} />}

          <Line strokeWidth={2} data={data} dot={false} type="monotone" dataKey="y" stroke="black" tooltipType="none" />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    width: 500,
    height: 300,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    },
  },
};

export const ToggleChildrenComponentsExceptCartesianGrid: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText('Page A')).toBeInTheDocument();
    await userEvent.click(canvas.getByTestId('toggle'));
    expect(canvas.queryByText('Page A')).not.toBeInTheDocument();
  },
  render: (args: Record<string, any>, context: StoryContext) => {
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
        pv: 9800,
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
        uv: 1890,
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

    const yAxes = [
      { yAxisId: 'one', dataKey: 'pv', orientation: 'left' },
      { yAxisId: 'two', dataKey: 'uv', orientation: 'left' },
    ] as const;

    const [isBtnClicked, setBtnClicked] = useState(false);

    const yAxisComponents = yAxes.map(({ yAxisId, dataKey, orientation }) => (
      <YAxis
        key={dataKey}
        axisLine={{ display: 'none' }}
        tickLine={{ display: 'none' }}
        orientation={orientation}
        dataKey={dataKey}
        yAxisId={yAxisId}
        tick={{
          fill: '#555',
          fontSize: 16,
          fontWeight: 'bold',
        }}
      />
    ));

    return (
      <div>
        <button data-testid="toggle" type="button" onClick={() => setBtnClicked(clicked => !clicked)}>
          Click Me to Simulate Legend
        </button>
        <LineChart {...args} data={data}>
          <CartesianGrid data-testid="cartesian" strokeDasharray="3 3" />
          {isBtnClicked ? null : (
            <>
              <XAxis
                dataKey="name"
                type="category"
                allowDuplicatedCategory={false}
                interval={0}
                ticks={['Page A', 'Page C', 'Page F']}
                tick={{ fontSize: 14 }}
                tickMargin={25}
              />
              {yAxisComponents}
              <Line
                name="PV"
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                yAxisId={yAxisComponents[0].props.yAxisId}
                dot={false}
              />
              <Line
                name="UV"
                type="monotone"
                dataKey="uv"
                stroke="#82ca9d"
                yAxisId={yAxisComponents[1].props.yAxisId}
                dot={false}
              />
              <Tooltip />
              <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
            </>
          )}
        </LineChart>
        <Legend />
      </div>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: pageData,
    width: 1300,
    height: 400,
    margin: { right: 30, bottom: 40 },
    layout: 'horizontal',
  },
};

export const WithBrush: StoryObj = {
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <ResponsiveContainer>
        <LineChart {...args}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Legend />
          <Brush dataKey="name" startIndex={2} height={30} stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Tooltip />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: pageData,
  },
};

export const HideOnLegendClick: StoryObj = {
  render: (args: Record<string, any>, context: StoryContext) => {
    const [activeSeries, setActiveSeries] = React.useState<Array<string>>([]);

    const handleLegendClick = (dataKey?: DataKey<any>) => {
      if (typeof dataKey !== 'string') {
        return;
      }
      if (activeSeries.includes(dataKey)) {
        setActiveSeries(activeSeries.filter(el => el !== dataKey));
      } else {
        setActiveSeries(prev => [...prev, dataKey]);
      }
    };

    return (
      <ResponsiveContainer height={400}>
        <LineChart {...args}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Legend height={36} iconType="circle" onClick={props => handleLegendClick(props.dataKey)} />

          <Line hide={activeSeries.includes('uv')} type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          <Line hide={activeSeries.includes('pv')} type="monotone" dataKey="pv" stroke="#987" fill="#8884d8" />
          <Tooltip />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: pageData,
  },
};

export const LineTrailingIcon: StoryObj = {
  render: (args: Record<string, any>, context: StoryContext) => {
    const lastDotKey = 'lastDot';

    return (
      <ResponsiveContainer>
        <LineChart {...args}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line
            type="monotone"
            dataKey={lastDotKey}
            legendType="none"
            tooltipType="none"
            dot={{ stroke: 'red', strokeWidth: 1, r: 4 }}
          />
          <Tooltip />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: pageData.map((entry, index) => ({
      ...entry,
      lastDot: index === pageData.length - 1 ? entry.pv : undefined,
    })),
  },
};

export const ReversedXAxis = {
  render: (args: Record<string, any>, context: StoryContext) => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" reversed />
          <YAxis />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Tooltip />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
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

export const ChangingDataKey = {
  render: (args: Record<string, any>, context: StoryContext) => {
    const data1 = [
      { x: { value: 1 }, name: 'x1' },
      { x: { value: 2 }, name: 'x2' },
      { x: { value: 3 }, name: 'x3' },
    ];
    const data2 = [
      { y: { value: 3 }, name: 'y1' },
      { y: { value: 2 }, name: 'y2' },
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
      <ManualAnimations isEnabled={context.rechartsInspectorEnabled}>
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
        <LineChart {...args} data={useData2 ? data2 : data1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis dataKey={useData2 ? dataKey2 : dataKey1} />
          <Tooltip />
          <Legend />
          <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
          <Line
            name="Animated line"
            hide={!visible}
            type="monotone"
            dataKey={useData2 ? dataKey2 : dataKey1}
            stroke="#8884d8"
            strokeDasharray="5 5"
            activeDot={{ r: 8 }}
            label={{ fill: 'red', dy: -25 }}
          />
        </LineChart>
      </ManualAnimations>
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
