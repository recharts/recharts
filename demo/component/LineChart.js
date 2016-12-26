import React from 'react';
import CustomLineDot from './CustomLineDot';
import { changeNumberOfData } from './utils';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine,
  ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar } from 'recharts';
import { scalePow, scaleLog } from 'd3-scale';

const data = [
  { name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
  { name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400, uvError: 28 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
  { name: 'Page G', uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
  { name: 'Page H', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
  { name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
  { name: 'Page J', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
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
  { name: 'Page A', uv: 300, pv: 2600, amt: 3400 },
  { name: 'Page B', uv: 400, pv: 4367, amt: 6400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
  { name: 'Page G', uv: 189, pv: 4800, amt: 2400 },
];

const initilaState = {
  data,
  data01,
  data02,
  opacity: 1,
  anotherState: false,
};

const renderSpecialDot = (props) => {
  const { cx, cy, stroke, key } = props;

  if (cx === +cx && cy === +cy) {
    return <path d={`M${cx - 2},${cy - 2}h4v4h-4Z`} fill={stroke} key={key}/>;
  }

  return null;
};

const renderLabel = (props) => {
  const { x, y, textAnchor, key, value } = props;

  if (x === +x && y === +y) {
    return <text x={x} y={y} dy={-10} textAnchor={textAnchor} key={key}>{value}</text>
  }

  return null;
};

const scale = scaleLog().base(10).nice();
const specifiedDomain = [0.01, 'auto'];
const specifiedTicks = [0.01, 0.1, 1, 10, 100, 1000];
const specifiedMargin = { top: 20, right: 20, bottom: 20, left: 20 };

export default React.createClass({
  displayName: 'LineChartDemo',

  getInitialState() {
    return initilaState;
  },

  handleChangeData() {
    this.setState(() => _.mapValues(initilaState, changeNumberOfData));
  },

  handleClick(data, e) {
    console.log(data);
  },

  handleLegendMouseEnter() {
    this.setState({
      opacity: 0.5,
    });
  },

  handleLegendMouseLeave() {
    this.setState({
      opacity: 1,
    });
  },

  handleChangeAnotherState() {
    this.setState({
      anotherState: !this.state.anotherState,
    })
  },

  render() {
    const { data, data01, data02, opacity } = this.state;

    return (
      <div className='line-charts'>
        <a
          href="javascript: void(0);"
          className="btn update"
          onClick={this.handleChangeData}
        >
          change data
        </a>
        <button onClick={this.handleChangeAnotherState}>switch another state</button>
        <br/>

        <p>A simple LineChart with fixed domain y-axis</p>
        <div className='line-chart-wrapper'>
          <LineChart width={400} height={400} data={data02} syncId="test">
            <CartesianGrid stroke='#f5f5f5' />
            <Legend
              onMouseEnter={this.handleLegendMouseEnter}
              onMouseLeave={this.handleLegendMouseLeave}
            />
            <XAxis type="number" dataKey="pv" />
            <YAxis type="number" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#ff7300"
              dot={renderSpecialDot}
              label={renderLabel}
              strokeOpacity={opacity}
              strokeDasharray="3 3"
            />
            <Brush dataKey="name" height={30} />
          </LineChart>
        </div>


      </div>
    );
  }
});
