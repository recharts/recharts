import React from 'react';
import {ComposedChart, Line, Bar, Area, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 1400},
              {name: 'Page B', uv: 300, pv: 4567, amt: 1506},
              {name: 'Page C', uv: 300, pv: 1398, amt: 989},
              {name: 'Page D', uv: 200, pv: 9800, amt: 1228},
              {name: 'Page E', uv: 278, pv: 3908, amt: 1100},
              {name: 'Page F', uv: 189, pv: 4800, amt: 1700}];

export default React.createClass({
  displayName: 'ComposedChartDemo',

  render () {
    return (
      <div className='line-charts'>
        <p>A simple ComposedChart</p>
        <div className='composed-chart-wrapper'>
          <ComposedChart width={400} height={400} data={data}
            margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <CartesianGrid stroke='#f5f5f5'/>
            <Line type='monotone' dataKey='uv' stroke='#ff7300'/>
            <Bar dataKey='pv' fill='#387908'/>
          </ComposedChart>
        </div>
      </div>
    );
  }
});
