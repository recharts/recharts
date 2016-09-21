import React from 'react';
import { changeNumberOfData } from './utils';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Brush,
  ReferenceArea, ReferenceLine, ReferenceDot, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 2500, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 1220, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 2300, pv: 4300, amt: 2100 },
];
const data01 = [
  { day: '05-01', weather: 'sunny' },
  { day: '05-02', weather: 'sunny' },
  { day: '05-03', weather: 'cloudy' },
  { day: '05-04', weather: 'rain' },
  { day: '05-05', weather: 'rain' },
  { day: '05-06', weather: 'cloudy' },
  { day: '05-07', weather: 'cloudy' },
  { day: '05-08', weather: 'sunny' },
  { day: '05-09', weather: 'sunny' },
];
const data02 = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
];

const initilaState = { data, data01, data02 };

const CustomTooltip = React.createClass({
  render() {
    const { active, payload, external, label } = this.props;

    if (active) {
      const style = {
        padding: 6,
        backgroundColor: '#fff',
        border: '1px solid #ccc',
      };

      const currData = external.filter(entry => (entry.name === label))[0];

      return (
        <div className="area-chart-tooltip" style={style}>
          <p>{payload[0].name + ' : '}<em>{payload[0].value}</em></p>
          <p>{'uv : '}<em>{currData.uv}</em></p>
        </div>
      );
    }

    return null;
  },
});

const renderCustomizedActiveDot = (props) => {
  const { cx, cy, stroke, index, dataKey } = props;

  return <path d={`M${cx - 2},${cy - 2}h4v4h-4Z`} fill={stroke} key={`dot-${dataKey}`}/>;
};

const renderLabel = (props) => {
  const { x, y, textAnchor, value, index } = props;

  return <text x={x} y={y} dy={-10} textAnchor={textAnchor} key={`label-${index}`}>{value[1]}</text>
};

const RenderRect = (props) => {
  return <rect x={20} y={20} width={100} height={20} stroke="#000"/>;
};

function CustomizedAxisTick(props) {
  const { x, y, stroke, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={-12} textAnchor="end" fill="#999" fontSize="12">{payload.value}</text>
    </g>
  );
}

export default React.createClass({
  displayName: 'AreaChartDemo',

  getInitialState() {
    return initilaState;
  },

  handleChangeData() {
    this.setState(() => _.mapValues(initilaState, changeNumberOfData));
  },

  render() {
    const { data, data01, data02 } = this.state;

    return (
      <div className="area-charts">
        <a
          href="javascript: void(0);"
          className="btn update"
          onClick={this.handleChangeData}
        >
          change data
        </a>
        <br/>

        <p>Stacked AreaChart</p>
        <div className="area-chart-wrapper">
          <AreaChart width={800} height={400} data={this.state.data}
            margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
            syncId="test"
          >
            <XAxis dataKey="name" label="province"/>
            <YAxis />
            <Tooltip />
            <Area
              stackId="0"
              type="monotone"
              dataKey="uv"
              stroke="#ff7300"
              fill="#ff7300"
              dot
              activeDot={renderCustomizedActiveDot}
            />
            <Area
              stackId="0"
              type="monotone"
              dataKey="amt"
              stroke="#82ca9d"
              fill="#82ca9d"
              dot
              activeDot={renderCustomizedActiveDot}
            />
            <Area
              stackId="0"
              type="monotone"
              dataKey="pv"
              stroke="#387908"
              fill="#387908"
              animationBegin={1300}
              label={renderLabel}
              dot
              activeDot={renderCustomizedActiveDot}
            />
          </AreaChart>
        </div>

        <p>Stacked AreaChart | Stack Offset Expand</p>
        <div className="area-chart-wrapper">
          <AreaChart width={400} height={300} data={this.state.data}
            margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
            stackOffset="expand"
            syncId="test"
          >
            <XAxis />
            <YAxis />
            <Tooltip />
            <Area stackId="0"
              type="monotone"
              dataKey="uv"
              stroke="#ff7300"
              fill="#ff7300"
              dot
              activeDot={renderCustomizedActiveDot}
            />
            <Area stackId="0"
              type="monotone"
              dataKey="pv"
              stroke="#387908"
              fill="#387908"
              animationBegin={1300}
              label={renderLabel}
              dot
              activeDot={renderCustomizedActiveDot}
            />
          </AreaChart>
        </div>

        <p>Stacked AreaChart | Stack Offset Silhouette</p>
        <div className="area-chart-wrapper">
          <AreaChart width={800} height={400} data={this.state.data}
            margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
            stackOffset="silhouette"
          >
            <XAxis dataKey="name" label="province" />
            <YAxis />
            <Tooltip />
            <Area stackId="0"
              type="monotone"
              dataKey="uv"
              stroke="#ff7300"
              fill="#ff7300"
              dot
              activeDot={renderCustomizedActiveDot}
            />
            <Area stackId="0"
              type="monotone"
              dataKey="pv"
              stroke="#387908"
              fill="#387908"
              animationBegin={1300}
              label={renderLabel}
              dot
              activeDot={renderCustomizedActiveDot}
            />
          </AreaChart>
        </div>

        <p>Tiny AreaChart</p>
        <div className="area-chart-wrapper">
          <AreaChart width={100}
            height={50}
            data={data.slice(0, 1)}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
          >
            <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
          </AreaChart>
        </div>

        <p>AreaChart with three y-axes</p>
        <div className="area-chart-wrapper">
          <AreaChart width={600}
            height={400}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <YAxis label="uv" type="number" yAxisId={0} stroke="#ff7300" />
            <YAxis label="pv" type="number" orientation="right" yAxisId={1} stroke="#387908" />
            <YAxis label="amt"
              type="number"
              orientation="right"
              yAxisId={2}
              stroke="#38abc8"
            />
            <XAxis dataKey="name" interval={0}/>
            <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" strokeWidth={2} yAxisId={0} />
            <Area dataKey="pv" stroke="#387908" fill="#387908" strokeWidth={2} yAxisId={1} />
            <Area dataKey="amt" stroke="#38abc8" fill="#38abc8" strokeWidth={2} yAxisId={2} />
          </AreaChart>
        </div>

        <p>AreaChart of vertical layout </p>
        <div className="area-chart-wrapper" style={{ margin: 40 }}>
          <AreaChart width={400} height={400} data={data} layout="vertical"
            margin={{ top: 5, right: 30, bottom: 5, left: 5 }}
          >
            <YAxis type="category" dataKey="name" />
            <XAxis type="number" xAxisId={0} orientation="top" />
            <XAxis type="number" xAxisId={1} orientation="bottom" />
            <Area dataKey="uv"
              type="monotone"
              stroke="#ff7300"
              fill="#ff7300"
              strokeWidth={2}
              xAxisId={0}
            />
            <Area dataKey="pv"
              type="monotone"
              stroke="#387908"
              fill="#387908"
              strokeWidth={2}
              xAxisId={1}
            />
            <Tooltip />
          </AreaChart>
        </div>

        <p>AreaChart with custom tooltip</p>
        <div className="area-chart-wrapper">
          <AreaChart width={900}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, bottom: 10, left: 10 }}
          >
            <XAxis dataKey="name" hasTick />
            <YAxis tickCount={7} hasTick />
            <Tooltip content={<CustomTooltip external={data} />} />
            <CartesianGrid stroke="#f5f5f5" />
            <ReferenceArea x1="Page A" x2="Page E" />
            <ReferenceLine y={7500} stroke="#387908"/>
            <ReferenceDot x="Page C" y={1398} r={10} fill="#387908" isFront/>
            <Area type="monotone"
              dataKey="pv"
              stroke="#ff7300"
              fill="#ff7300"
              fillOpacity={0.9}
            />
          </AreaChart>
        </div>

        <p>AreaChart filled with linear gradient</p>
        <div>
          <AreaChart width={800} height={400} data={this.state.data}
            margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
          >
            <defs>
              <linearGradient id="MyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgba(0, 136, 254, 0.8)" />
                <stop offset="95%" stopColor="rgba(0, 136, 254, 0)" />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" label="province" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#0088FE"
              strokeWidth="2"
              fillOpacity="1"
              fill="url(#MyGradient)"
              dot
            />
          </AreaChart>
        </div>

        <p>AreaChart of discrete values</p>
        <div className="area-chart-wrapper">
          <AreaChart
              width={400} height={400} data={data01}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <XAxis dataKey="day" />
            <YAxis type="category" />
            <Tooltip />
            <Area type="stepAfter" dataKey="weather" stroke="#0088FE" />
          </AreaChart>
        </div>

      </div>
    );
  },
});
