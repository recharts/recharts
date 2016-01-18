import React from 'react';
import {LineChart, LineItem, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
              {name: 'Page B', uv: 300, pv: 4567, amt: 2400},
              {name: 'Page C', uv: 300, pv: 1398, amt: 2400},
              {name: 'Page D', uv: 200, pv: 9800, amt: 2400},
              {name: 'Page E', uv: 278, pv: 3908, amt: 2400},
              {name: 'Page F', uv: 189, pv: 4800, amt: 2400}];

export default React.createClass({
  displayName: 'LineChartDemo',

  render () {
    return (
      <div className='line-charts'>
        <p>A simple LineChart</p>
        <div className='line-chart-wrapper'>
          <LineChart width={400} height={400} data={data}>
            <CartesianGrid stroke='#f5f5f5'/>
            <LineItem type='monotone' dataKey='uv' stroke='#ff7300'/>
          </LineChart>
        </div>

        <p>LineChart with two y-axes</p>
        <div className='line-chart-wrapper' style={{padding: 40}}>
          <LineChart width={400} height={400} data={data}
            margin={{top: 5, right: 20, left: 10, bottom: 5}}>
            <XAxis dataKey='name'/>
            <Tooltip/>
            <CartesianGrid stroke='#f5f5f5'/>
            <LineItem type='monotone' dataKey='uv' stroke='#ff7300' yAxisId={0}/>
            <LineItem type='monotone' dataKey='pv' stroke='#387908' yAxisId={1}/>
          </LineChart>
        </div>

        <p>LineChart with three y-axes</p>
        <div className='line-chart-wrapper' style={{margin: 40}}>
          <LineChart width={600} height={400} data={data}>
            <YAxis type='number' yAxisId={0}/>
            <YAxis type='number' orient='right' yAxisId={1}/>
            <YAxis type='number' orient='right' yAxisId={2}/>
            <XAxis dataKey='name'/>
            <Tooltip/>
            <CartesianGrid stroke='#f5f5f5'/>
            <LineItem dataKey='uv' stroke='#ff7300' strokeWidth={2} yAxisId={0}/>
            <LineItem dataKey='pv' stroke='#387908' strokeWidth={2} yAxisId={1}/>
            <LineItem dataKey='amt' stroke='#38abc8' strokeWidth={2} yAxisId={2}/>
          </LineChart>
        </div>

        <p>LineChart of vertical layout</p>
        <div className='line-chart-wrapper' style={{margin: 40}}>
          <LineChart width={400} height={400} data={data} layout='vertical'>
            <YAxis type='category' dataKey='name'/>
            <XAxis type='number' xAxisId={0} orient='top'/>
            <XAxis type='number' xAxisId={1} orient='bottom'/>
            <CartesianGrid stroke='#f5f5f5'/>
            <LineItem dataKey='uv' stroke='#ff7300' strokeWidth={2} xAxisId={0} />
            <LineItem dataKey='pv' stroke='#387908' strokeWidth={2} xAxisId={1} />
          </LineChart>
        </div>


      </div>
    );
  }
});
