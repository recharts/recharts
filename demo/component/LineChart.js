import React, { Component } from 'react';
import CustomLineDot from './CustomLineDot';
import { changeNumberOfData } from './utils';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine,
  ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
  Label, LabelList } from 'recharts';
import { scalePow, scaleLog } from 'd3-scale';

function Hello() {
  return <div>Hello</div>;
}

const data = [
  { name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
  { name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20 },
  { name: 'Page E', uv: 278, pv: null, amt: 2400, uvError: 28 },
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

const data03 = [
  { date: 'Jan 04 2016', price: 105.35 },
  { date: 'Jan 05 2016', price: 102.71 },
  { date: 'Jan 06 2016', price: 100.7 },
  { date: 'Jan 07 2016', price: 96.45 },
  { date: 'Jan 08 2016', price: 96.96 },
  { date: 'Jan 11 2016', price: 98.53 },
  { date: 'Jan 12 2016', price: 99.96 },
  { date: 'Jan 13 2016', price: 97.39 },
  { date: 'Jan 14 2016', price: 99.52 },
  { date: 'Jan 15 2016', price: 97.13 },
  { date: 'Jan 19 2016', price: 96.66 },
  { date: 'Jan 20 2016', price: 96.79 },
  { date: 'Jan 21 2016', price: 96.3 },
  { date: 'Jan 22 2016', price: 101.42 },
  { date: 'Jan 25 2016', price: 99.44 },
  { date: 'Jan 26 2016', price: 99.99 },
  { date: 'Jan 27 2016', price: 93.42 },
  { date: 'Jan 28 2016', price: 94.09 },
  { date: 'Jan 29 2016', price: 97.34 },
  { date: 'Feb 01 2016', price: 96.43 },
  { date: 'Feb 02 2016', price: 94.48 },
  { date: 'Feb 03 2016', price: 96.35 },
  { date: 'Feb 04 2016', price: 96.6 },
  { date: 'Feb 05 2016', price: 94.02 },
  { date: 'Feb 08 2016', price: 95.01 },
  { date: 'Feb 09 2016', price: 94.99 },
  { date: 'Feb 10 2016', price: 94.27 },
  { date: 'Feb 11 2016', price: 93.7 },
  { date: 'Feb 12 2016', price: 93.99 },
  { date: 'Feb 16 2016', price: 96.64 },
  { date: 'Feb 17 2016', price: 98.12 },
  { date: 'Feb 18 2016', price: 96.26 },
  { date: 'Feb 19 2016', price: 96.04 },
  { date: 'Feb 22 2016', price: 96.88 },
  { date: 'Feb 23 2016', price: 94.69 },
  { date: 'Feb 24 2016', price: 96.1 },
  { date: 'Feb 25 2016', price: 96.76 },
  { date: 'Feb 26 2016', price: 96.91 },
  { date: 'Feb 29 2016', price: 96.69 },
  { date: 'Mar 01 2016', price: 100.53 },
  { date: 'Mar 02 2016', price: 100.75 },
  { date: 'Mar 03 2016', price: 101.5 },
  { date: 'Mar 04 2016', price: 103.01 },
  { date: 'Mar 07 2016', price: 101.87 },
  { date: 'Mar 08 2016', price: 101.03 },
  { date: 'Mar 09 2016', price: 101.12 },
  { date: 'Mar 10 2016', price: 101.17 },
  { date: 'Mar 11 2016', price: 102.26 },
  { date: 'Mar 14 2016', price: 102.52 },
  { date: 'Mar 15 2016', price: 104.58 },
  { date: 'Mar 16 2016', price: 105.97 },
  { date: 'Mar 17 2016', price: 105.8 },
  { date: 'Mar 18 2016', price: 105.92 },
  { date: 'Mar 21 2016', price: 105.91 },
  { date: 'Mar 22 2016', price: 106.72 },
  { date: 'Mar 23 2016', price: 106.13 },
  { date: 'Mar 24 2016', price: 105.67 },
  { date: 'Mar 28 2016', price: 105.19 },
  { date: 'Mar 29 2016', price: 107.68 },
  { date: 'Mar 30 2016', price: 109.56 },
  { date: 'Mar 31 2016', price: 108.99 },
  { date: 'Apr 01 2016', price: 109.99 },
  { date: 'Apr 04 2016', price: 111.12 },
  { date: 'Apr 05 2016', price: 109.81 },
  { date: 'Apr 06 2016', price: 110.96 },
  { date: 'Apr 07 2016', price: 108.54 },
  { date: 'Apr 08 2016', price: 108.66 },
  { date: 'Apr 11 2016', price: 109.02 },
  { date: 'Apr 12 2016', price: 110.44 },
  { date: 'Apr 13 2016', price: 112.04 },
  { date: 'Apr 14 2016', price: 112.1 },
  { date: 'Apr 15 2016', price: 109.85 },
  { date: 'Apr 18 2016', price: 107.48 },
  { date: 'Apr 19 2016', price: 106.91 },
  { date: 'Apr 20 2016', price: 107.13 },
  { date: 'Apr 21 2016', price: 105.97 },
  { date: 'Apr 22 2016', price: 105.68 },
  { date: 'Apr 25 2016', price: 105.08 },
  { date: 'Apr 26 2016', price: 104.35 },
  { date: 'Apr 27 2016', price: 97.82 },
  { date: 'Apr 28 2016', price: 94.83 },
  { date: 'Apr 29 2016', price: 93.74 },
  { date: 'May 02 2016', price: 93.64 },
  { date: 'May 03 2016', price: 95.18 },
  { date: 'May 04 2016', price: 94.19 },
  { date: 'May 05 2016', price: 93.24 },
  { date: 'May 06 2016', price: 92.72 },
  { date: 'May 09 2016', price: 92.79 },
  { date: 'May 10 2016', price: 93.42 },
  { date: 'May 11 2016', price: 92.51 },
  { date: 'May 12 2016', price: 90.34 },
  { date: 'May 13 2016', price: 90.52 },
  { date: 'May 16 2016', price: 93.88 },
  { date: 'May 17 2016', price: 93.49 },
  { date: 'May 18 2016', price: 94.56 },
  { date: 'May 19 2016', price: 94.2 },
  { date: 'May 20 2016', price: 95.22 },
  { date: 'May 23 2016', price: 96.43 },
  { date: 'May 24 2016', price: 97.9 },
  { date: 'May 25 2016', price: 99.62 },
  { date: 'May 26 2016', price: 100.41 },
  { date: 'May 27 2016', price: 100.35 },
  { date: 'May 31 2016', price: 99.86 },
  { date: 'Jun 01 2016', price: 98.46 },
  { date: 'Jun 02 2016', price: 97.72 },
  { date: 'Jun 03 2016', price: 97.92 },
  { date: 'Jun 06 2016', price: 98.63 },
  { date: 'Jun 07 2016', price: 99.03 },
  { date: 'Jun 08 2016', price: 98.94 },
  { date: 'Jun 09 2016', price: 99.65 },
  { date: 'Jun 10 2016', price: 98.83 },
  { date: 'Jun 13 2016', price: 97.34 },
  { date: 'Jun 14 2016', price: 97.46 },
  { date: 'Jun 15 2016', price: 97.14 },
  { date: 'Jun 16 2016', price: 97.55 },
  { date: 'Jun 17 2016', price: 95.33 },
  { date: 'Jun 20 2016', price: 95.1 },
  { date: 'Jun 21 2016', price: 95.91 },
  { date: 'Jun 22 2016', price: 95.55 },
  { date: 'Jun 23 2016', price: 96.1 },
  { date: 'Jun 24 2016', price: 93.4 },
  { date: 'Jun 27 2016', price: 92.04 },
  { date: 'Jun 28 2016', price: 93.59 },
  { date: 'Jun 29 2016', price: 94.4 },
  { date: 'Jun 30 2016', price: 95.6 },
  { date: 'Jul 01 2016', price: 95.89 },
  { date: 'Jul 05 2016', price: 94.99 },
  { date: 'Jul 06 2016', price: 95.53 },
  { date: 'Jul 07 2016', price: 95.94 },
  { date: 'Jul 08 2016', price: 96.68 },
  { date: 'Jul 11 2016', price: 96.98 },
  { date: 'Jul 12 2016', price: 97.42 },
  { date: 'Jul 13 2016', price: 96.87 },
  { date: 'Jul 14 2016', price: 98.79 },
  { date: 'Jul 15 2016', price: 98.78 },
  { date: 'Jul 18 2016', price: 99.83 },
  { date: 'Jul 19 2016', price: 99.87 },
  { date: 'Jul 20 2016', price: 99.96 },
  { date: 'Jul 21 2016', price: 99.43 },
  { date: 'Jul 22 2016', price: 98.66 },
  { date: 'Jul 25 2016', price: 97.34 },
  { date: 'Jul 26 2016', price: 96.67 },
  { date: 'Jul 27 2016', price: 102.95 },
  { date: 'Jul 28 2016', price: 104.34 },
  { date: 'Jul 29 2016', price: 104.21 },
  { date: 'Aug 01 2016', price: 106.05 },
  { date: 'Aug 02 2016', price: 104.48 },
  { date: 'Aug 03 2016', price: 105.79 },
  { date: 'Aug 04 2016', price: 105.87 },
  { date: 'Aug 05 2016', price: 107.48 },
  { date: 'Aug 08 2016', price: 108.37 },
  { date: 'Aug 09 2016', price: 108.81 },
  { date: 'Aug 10 2016', price: 108 },
  { date: 'Aug 11 2016', price: 107.93 },
  { date: 'Aug 12 2016', price: 108.18 },
  { date: 'Aug 15 2016', price: 109.48 },
  { date: 'Aug 16 2016', price: 109.38 },
  { date: 'Aug 17 2016', price: 109.22 },
  { date: 'Aug 18 2016', price: 109.08 },
  { date: 'Aug 19 2016', price: 109.36 },
  { date: 'Aug 22 2016', price: 108.51 },
  { date: 'Aug 23 2016', price: 108.85 },
  { date: 'Aug 24 2016', price: 108.03 },
  { date: 'Aug 25 2016', price: 107.57 },
  { date: 'Aug 26 2016', price: 106.94 },
  { date: 'Aug 29 2016', price: 106.82 },
  { date: 'Aug 30 2016', price: 106 },
  { date: 'Aug 31 2016', price: 106.1 },
  { date: 'Sept 01 2016', price: 106.73 },
  { date: 'Sept 02 2016', price: 107.73 },
  { date: 'Sept 06 2016', price: 107.7 },
  { date: 'Sept 07 2016', price: 108.36 },
  { date: 'Sept 08 2016', price: 105.52 },
  { date: 'Sept 09 2016', price: 103.13 },
  { date: 'Sept 12 2016', price: 105.44 },
  { date: 'Sept 13 2016', price: 107.95 },
  { date: 'Sept 14 2016', price: 111.77 },
  { date: 'Sept 15 2016', price: 115.57 },
  { date: 'Sept 16 2016', price: 114.92 },
  { date: 'Sept 19 2016', price: 113.58 },
  { date: 'Sept 20 2016', price: 113.57 },
  { date: 'Sept 21 2016', price: 113.55 },
  { date: 'Sept 22 2016', price: 114.62 },
  { date: 'Sept 23 2016', price: 112.71 },
  { date: 'Sept 26 2016', price: 112.88 },
  { date: 'Sept 27 2016', price: 113.09 },
  { date: 'Sept 28 2016', price: 113.95 },
  { date: 'Sept 29 2016', price: 112.18 },
  { date: 'Sept 30 2016', price: 113.05 },
  { date: 'Oct 03 2016', price: 112.52 },
  { date: 'Oct 04 2016', price: 113 },
  { date: 'Oct 05 2016', price: 113.05 },
  { date: 'Oct 06 2016', price: 113.89 },
  { date: 'Oct 07 2016', price: 114.06 },
  { date: 'Oct 10 2016', price: 116.05 },
  { date: 'Oct 11 2016', price: 116.3 },
  { date: 'Oct 12 2016', price: 117.34 },
  { date: 'Oct 13 2016', price: 116.98 },
  { date: 'Oct 14 2016', price: 117.63 },
  { date: 'Oct 17 2016', price: 117.55 },
  { date: 'Oct 18 2016', price: 117.47 },
  { date: 'Oct 19 2016', price: 117.12 },
  { date: 'Oct 20 2016', price: 117.06 },
  { date: 'Oct 21 2016', price: 116.6 },
  { date: 'Oct 24 2016', price: 117.65 },
  { date: 'Oct 25 2016', price: 118.25 },
  { date: 'Oct 26 2016', price: 115.59 },
  { date: 'Oct 27 2016', price: 114.48 },
  { date: 'Oct 28 2016', price: 113.72 },
  { date: 'Oct 31 2016', price: 113.54 },
  { date: 'Nov 01 2016', price: 111.49 },
  { date: 'Nov 02 2016', price: 111.59 },
  { date: 'Nov 03 2016', price: 109.83 },
  { date: 'Nov 04 2016', price: 108.84 },
  { date: 'Nov 07 2016', price: 110.41 },
  { date: 'Nov 08 2016', price: 111.06 },
  { date: 'Nov 09 2016', price: 110.88 },
  { date: 'Nov 10 2016', price: 107.79 },
  { date: 'Nov 11 2016', price: 108.43 },
  { date: 'Nov 14 2016', price: 105.71 },
  { date: 'Nov 15 2016', price: 107.11 },
  { date: 'Nov 16 2016', price: 109.99 },
  { date: 'Nov 17 2016', price: 109.95 },
  { date: 'Nov 18 2016', price: 110.06 },
  { date: 'Nov 21 2016', price: 111.73 },
  { date: 'Nov 22 2016', price: 111.8 },
  { date: 'Nov 23 2016', price: 111.23 },
  { date: 'Nov 25 2016', price: 111.79 },
  { date: 'Nov 28 2016', price: 111.57 },
  { date: 'Nov 29 2016', price: 111.46 },
  { date: 'Nov 30 2016', price: 110.52 },
  { date: 'Dec 01 2016', price: 109.49 },
  { date: 'Dec 02 2016', price: 109.9 },
  { date: 'Dec 05 2016', price: 109.11 },
  { date: 'Dec 06 2016', price: 109.95 },
  { date: 'Dec 07 2016', price: 111.03 },
  { date: 'Dec 08 2016', price: 112.12 },
  { date: 'Dec 09 2016', price: 113.95 },
  { date: 'Dec 12 2016', price: 113.3 },
  { date: 'Dec 13 2016', price: 115.19 },
  { date: 'Dec 14 2016', price: 115.19 },
  { date: 'Dec 15 2016', price: 115.82 },
  { date: 'Dec 16 2016', price: 115.97 },
  { date: 'Dec 19 2016', price: 116.64 },
  { date: 'Dec 20 2016', price: 116.95 },
  { date: 'Dec 21 2016', price: 117.06 },
  { date: 'Dec 22 2016', price: 116.29 },
  { date: 'Dec 23 2016', price: 116.52 },
  { date: 'Dec 27 2016', price: 117.26 },
  { date: 'Dec 28 2016', price: 116.76 },
  { date: 'Dec 29 2016', price: 116.73 },
  { date: 'Dec 30 2016', price: 115.82 },
];

const initialState = {
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

export default class Demo extends Component {

  static displayName = 'LineChartDemo';

  state = initialState;

  handleChangeData = () => {
    this.setState(() => _.mapValues(initialState, changeNumberOfData));
  };

  handleClick = (data, e) => {
    console.log(data);
  };

  handleLineClick = (data, e) => {
    console.log('callback', data, e);
  };

  handleLegendMouseEnter = () => {
    this.setState({
      opacity: 0.5,
    });
  };

  handleClickDot = (data, e) => {
    console.log('dot click', data, e);
  }

  handleLegendMouseLeave = () => {
    this.setState({
      opacity: 1,
    });
  };

  handleChangeAnotherState = () => {
    this.setState({
      anotherState: !this.state.anotherState,
    })
  };

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
            <CartesianGrid stroke='#f5f5f5' fill="#e6e6e6" />
            <Legend
              onMouseEnter={this.handleLegendMouseEnter}
              onMouseLeave={this.handleLegendMouseLeave}
            />
            <XAxis type="number" dataKey="pv" height={40} label={<Hello />}>
              <Label value="x轴" position="insideBottom" />
            </XAxis>
            <YAxis type="number" unit="%">
              <Label value="y轴" position="insideLeft" angle={90} />
            </YAxis>
            <Tooltip />
            <Line
              key="uv"
              type="monotone"
              dataKey="uv"
              stroke="#ff7300"
              dot={renderSpecialDot}
              strokeOpacity={opacity}
              strokeDasharray="3 3"
            >
              <LabelList position="bottom" offset={10} dataKey="name" />
            </Line>
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
        <button onClick={() => this.setState({newLine: !this.state.newLine})}>Add another line</button>
        <div className='line-chart-wrapper' style={{ padding: 40 }}>
          <LineChart
            width={400}
            height={400}
            data={data}
            margin={{top: 10, bottom: 10, left: 30, right: 30}}
          >
            <XAxis dataKey='name' />
            <CartesianGrid stroke='#f5f5f5'/>
            <Brush />
            <Tooltip filterNull={false} />
            <Line
              type="monotone"
              key="0"
              dataKey="uv"
              stroke="#ff7300"
              strokeWidth={5}
              yAxisId={0}
              activeDot={{ onClick: this.handleClickDot }}
              onClick={this.handleLineClick}
            />
            {this.state.newLine && <Line type='monotone' key={'1'} dataKey='amt' stroke='#132908' yAxisId={1} activeDot={{fill: '#132908', stroke: 'none', r: 6}}/>}
            <Line type='monotone' key={'2'} dataKey='pv' stroke='#387908' yAxisId={1} activeDot={{fill: '#387908', stroke: 'none', r: 6}}/>
          </LineChart>
        </div>

        <p>LineChart with three y-axes</p>
        <div className='line-chart-wrapper' style={{ margin: 40 }}>
          <LineChart width={600} height={400} data={data}>
            <YAxis type='number' yAxisId={0} domain={[0, 1020]}/>
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
            <Tooltip />
            <XAxis />
            <YAxis domain={[0, 800]} allowDataOverflow />
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

        <p>LineChart with panoramic brush</p>
        <div className="line-chart-wrapper">
          <LineChart
            width={600} height={400} data={data03}
            margin={{ top: 40, right: 40, bottom: 20, left: 20 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="date" label="Date" />
            <YAxis domain={['auto', 'auto']} label="Stock Price" />
            <Tooltip />
            <Line dataKey="price" stroke="#ff7300" dot={false} />
            <Brush dataKey="date" startIndex={data03.length - 40}>
              <AreaChart>
                <CartesianGrid />
                <YAxis hide domain={['auto', 'auto']} />
                <Area dataKey="price" stroke="#ff7300" fill="#ff7300" dot={false} />
              </AreaChart>
            </Brush>
          </LineChart>
        </div>
      </div>
    );
  }
}
