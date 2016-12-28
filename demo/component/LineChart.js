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

        <p>A simple LineChart with customized line dot</p>
        <div className='line-chart-wrapper'>
          <LineChart
            width={400}
            height={400}
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            syncId="test"
          >
            <CartesianGrid stroke='#f5f5f5'/>
            <Legend />
            <XAxis />
            <YAxis scale={scale} domain={[0.01, 'auto']} ticks={[0.01, 0.1, 1, 10, 100, 1000]} />
            <Tooltip />
            <Line type='monotone' dataKey='uv' dot={<CustomLineDot/>} stroke='#ff7300' />
          </LineChart>
        </div>

        <p>LineChart with two y-axes</p>
        <div className='line-chart-wrapper' style={{ padding: 40 }}>
          <LineChart
            width={400}
            height={400}
            data={data}
            margin={{top: 10, bottom: 10, left: 30, right: 30}}
            onClick={this.handleClick}
          >
            <XAxis dataKey='name' interval="preserveStartEnd" />
            <Tooltip/>
            <CartesianGrid stroke='#f5f5f5'/>
            <Line type='monotone' dataKey='uv' stroke='#ff7300' yAxisId={0} activeDot={{fill: '#ff7300', stroke: 'none'}}/>
            <Line type='monotone' dataKey='pv' stroke='#387908' yAxisId={1} activeDot={{fill: '#387908', stroke: 'none', r: 6}}/>
          </LineChart>
        </div>

        <p>LineChart with three y-axes</p>
        <div className='line-chart-wrapper' style={{ margin: 40 }}>
          <LineChart width={600} height={400} data={data}>
            <YAxis type='number' yAxisId={0} ticks={[0, 250]}/>
            <YAxis type='number' orientation='right' yAxisId={1}/>
            <YAxis type='number' orientation='right' yAxisId={2}/>
            <XAxis dataKey='name'/>
            <Tooltip position={{y: 200}} />
            <CartesianGrid stroke='#f5f5f5'/>
            <Line dataKey='uv' stroke='#ff7300' strokeWidth={2} yAxisId={0}/>
            <Line dataKey='pv' stroke='#387908' strokeWidth={2} yAxisId={1}/>
            <Line dataKey='amt' stroke='#38abc8' strokeWidth={2} yAxisId={2}/>
          </LineChart>
        </div>

        <p>LineChart when data change</p>
        <a
          href="javascript:void(0)"
          className="btn"

          onClick={() => { this.setState({ data: this.state.data === data ? data02 : data }); }}
        >
          change data
        </a>
        <div className="line-chart-wrapper">
          <LineChart
            width={400}
            height={400}
            data={this.state.data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <Legend />
            <XAxis />
            <YAxis />
            <Line type="monotone" dataKey="uv" dot={<CustomLineDot/>} stroke="#ff7300" />
          </LineChart>
        </div>

        <p>LineChart of vertical layout</p>
        <div className='line-chart-wrapper' style={{ margin: 40 }}>
          <LineChart width={400} height={400} data={data} layout='vertical'
            margin={{top: 5, right: 20, left: 20, bottom: 5}}>
            <YAxis type='category' dataKey='name'/>
            <XAxis type='number' xAxisId={0} orientation='top'/>
            <XAxis type='number' xAxisId={1} orientation='bottom'/>
            <CartesianGrid stroke='#f5f5f5'/>
            <Line dataKey='uv' type="monotone" stroke='#ff7300' strokeWidth={2} xAxisId={0} />
            <Line dataKey='pv' type="monotone" stroke='#387908' strokeWidth={2} xAxisId={1} />
          </LineChart>
        </div>

        <p>LineChart of discrete values</p>
        <div className="line-chart-wrapper">
          <LineChart
              width={400} height={400} data={data01}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <XAxis dataKey="day" />
            <YAxis type="category" />
            <Tooltip />
            <Line type="stepAfter" dataKey="weather" stroke="#ff7300" />
          </LineChart>
        </div>
      </div>
    );
  }
});
