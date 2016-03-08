import React from 'react';
import CustomLineDot from './CustomLineDot';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine,
  ReferenceDot, Tooltip, CartesianGrid, Legend, Brush } from 'recharts';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];

const data01 = [
  { day: '05-01', wether: 'sunny' },
  { day: '05-02', wether: 'sunny' },
  { day: '05-03', wether: 'cloudy' },
  { day: '05-04', wether: 'rain' },
  { day: '05-05', wether: 'rain' },
  { day: '05-06', wether: 'cloudy' },
  { day: '05-07', wether: 'cloudy' },
  { day: '05-08', wether: 'sunny' },
  { day: '05-09', wether: 'sunny' },
];

const renderSpecialDot = (props) => {
  const { cx, cy, stroke, key } = props;

  return <path d={`M${cx - 2},${cy - 2}h4v4h-4Z`} fill={stroke} key={key}/>;
};

const renderLabel = (props) => {
  const { x, y, textAnchor, key, value } = props;

  return <text x={x} y={y} dy={-10} textAnchor={textAnchor} key={key}>{value}</text>
};

export default React.createClass({
  displayName: 'LineChartDemo',

  render() {
    return (
      <div className='line-charts'>
        <p>A simple LineChart with fixed domain y-axis</p>
        <div className='line-chart-wrapper'>
          <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 40, bottom: 20, left: 20 }}>
            <CartesianGrid stroke='#f5f5f5'/>
            <Legend/>
            <XAxis />
            <YAxis />
            <Line type='monotone' dataKey='uv' stroke='#ff7300' dot={renderSpecialDot} label={renderLabel}/>
            <Brush dataKey="name" height={30} />
          </LineChart>
        </div>

        <p>A simple LineChart with customized line dot</p>
        <div className='line-chart-wrapper'>
          <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid stroke='#f5f5f5'/>
            <Legend/>
            <XAxis />
            <YAxis domain={[0, 500]}/>
            <Line type='monotone' dataKey='uv' dot={<CustomLineDot/>} stroke='#ff7300'/>
          </LineChart>
        </div>

        <p>LineChart with two y-axes</p>
        <div className='line-chart-wrapper' style={{ padding: 40 }}>
          <LineChart width={400} height={400} data={data}
            margin={{top: 10, bottom: 10, left: 30, right: 30}}>
            <XAxis dataKey='name'/>
            <Tooltip/>
            <CartesianGrid stroke='#f5f5f5'/>
            <Line type='monotone' dataKey='uv' stroke='#ff7300' yAxisId={0}/>
            <Line type='monotone' dataKey='pv' stroke='#387908' yAxisId={1}/>
          </LineChart>
        </div>

        <p>LineChart with three y-axes</p>
        <div className='line-chart-wrapper' style={{ margin: 40 }}>
          <LineChart width={600} height={400} data={data}>
            <YAxis type='number' yAxisId={0}/>
            <YAxis type='number' orientation='right' yAxisId={1}/>
            <YAxis type='number' orientation='right' yAxisId={2}/>
            <XAxis dataKey='name'/>
            <Tooltip/>
            <CartesianGrid stroke='#f5f5f5'/>
            <Line dataKey='uv' stroke='#ff7300' strokeWidth={2} yAxisId={0}/>
            <Line dataKey='pv' stroke='#387908' strokeWidth={2} yAxisId={1}/>
            <Line dataKey='amt' stroke='#38abc8' strokeWidth={2} yAxisId={2}/>
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

        <p>LineChart of discrete velues</p>
        <div className='line-chart-wrapper'>
          <LineChart width={400} height={400} data={data01} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <XAxis dataKey="day"/>
            <YAxis type="category"/>
            <Tooltip/>
            <Line type="stepAfter" dataKey='wether'  stroke='#ff7300'/>
          </LineChart>
        </div>
      </div>
    );
  }
});
