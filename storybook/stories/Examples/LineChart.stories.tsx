// eslint-disable-next-line max-classes-per-file
import React, { PureComponent, useState } from 'react';
import { StoryObj } from '@storybook/react';
import { Impressions, impressionsData, pageData } from '../data';
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
  AreaChart,
  Area,
  Brush,
  ReferenceArea,
} from '../../../src';

export default {
  component: LineChart,
  docs: {
    autodocs: false,
  },
};

export const Simple = {
  render: () => {
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
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
};

export const Tiny = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={pageData}>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    );
  },
};

export const Dashed = {
  render: () => {
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
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
};

export const Vertical = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          layout="vertical"
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
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Line dataKey="pv" stroke="#8884d8" />
          <Line dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
};
export const BiAxial = {
  render: () => {
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
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
};
export const VerticalWithSpecifiedDomain = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          layout="vertical"
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
          <XAxis type="number" domain={[0, 'dataMax + 1000']} />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Line dataKey="pv" stroke="#8884d8" />
          <Line dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
};
export const ConnectNulls = {
  render: () => {
    const data = [
      { name: 'Page A', uv: 4000 },
      { name: 'Page B', uv: 3000 },
      { name: 'Page C', uv: 2000 },
      { name: 'Page D' },
      { name: 'Page E', uv: 1890 },
      { name: 'Page F', uv: 2390 },
      { name: 'Page G', uv: 3490 },
    ];

    return (
      <>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  },
};
export const WithXAxisPadding = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={pageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
};
export const WithReferenceLines = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={pageData}
          margin={{
            top: 20,
            right: 50,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine x="Page C" stroke="red" label="Anything" />
          <ReferenceLine y={1600} label="Something" stroke="red" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
};
export const WithCustomizedDot = {
  render: () => {
    const CustomizedDot = (props: any) => {
      const { cx, cy, value } = props;

      if (value > 2500) {
        return (
          <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="red" viewBox="0 0 1024 1024">
            <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
          </svg>
        );
      }

      return (
        <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="green" viewBox="0 0 1024 1024">
          <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
        </svg>
      );
    };

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
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={<CustomizedDot />} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
};

export const ClipDot: StoryObj = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          data={pageData}
        >
          <Line
            isAnimationActive={false}
            dataKey="uv"
            {...args}
            dot={{ clipDot: args.clipDot, r: 4, strokeWidth: 2, fill: '#ffffff', fillOpacity: 1 }}
          />
          <Tooltip />
          <XAxis dataKey="name" allowDataOverflow />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
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
  render: () => {
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
        <LineChart
          width={500}
          height={300}
          data={pageData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel />} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
};

export const Synchronized = {
  render: () => {
    return (
      <>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={pageData}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        <p>Maybe some other content</p>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={pageData}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
            <Brush />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={pageData}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </>
    );
  },
};

export const HighlightAndZoom = {
  render: () => {
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

      setZoomGraph(
        prev =>
          ({
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
          } as any),
      );
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
            width={800}
            height={400}
            data={data}
            onMouseDown={e => setZoomGraph(prev => ({ ...prev, refAreaLeft: e.activeLabel }))}
            onMouseMove={e => zoomGraph.refAreaLeft && setZoomGraph(prev => ({ ...prev, refAreaRight: e.activeLabel }))}
            onMouseUp={() => zoom()}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis allowDataOverflow dataKey="name" domain={left && right ? [left, right] : undefined} type="number" />
            <YAxis allowDataOverflow domain={[bottom, top]} type="number" yAxisId="1" />
            <YAxis orientation="right" allowDataOverflow domain={[bottom2, top2]} type="number" yAxisId="2" />
            <Tooltip />
            <Line yAxisId="1" type="natural" dataKey="cost" stroke="#8884d8" animationDuration={300} />
            <Line yAxisId="2" type="natural" dataKey="impression" stroke="#82ca9d" animationDuration={300} />

            {refAreaLeft && refAreaRight ? (
              <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />
            ) : null}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
};

export const LineChartHasMultiSeries = {
  render: () => {
    const series = [
      {
        name: 'Series 1',
        data: [
          { category: 'A', value: Math.random() },
          { category: 'B', value: Math.random() },
          { category: 'C', value: Math.random() },
        ],
      },
      {
        name: 'Series 2',
        data: [
          { category: 'B', value: Math.random() },
          { category: 'C', value: Math.random() },
          { category: 'D', value: Math.random() },
        ],
      },
      {
        name: 'Series 3',
        data: [
          { category: 'C', value: Math.random() },
          { category: 'D', value: Math.random() },
          { category: 'E', value: Math.random() },
        ],
      },
    ];

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend />
          {series.map(s => (
            <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
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
  render: () => {
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
        <LineChart
          width={500}
          height={300}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
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
        </LineChart>
      </ResponsiveContainer>
    );
  },
};
