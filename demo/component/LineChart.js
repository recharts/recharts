'use strict';

import React from 'react/addons';
import {LineChart, LineItem, XAxis, YAxis} from 'recharts';

export default React.createClass({
  render () {
    const data = [{name: '上海', uv: 400, pv: 2400}, {name: '北京', uv: 300, pv: 4567},
                  {name: '杭州', uv: 300, pv: 1398}, {name: '上饶', uv: 200, pv: 9800}];


    return (
      <div className='line-charts'>
        <div className='line-chart-wrapper' style={{padding: 20}}>
          <LineChart width={400} height={400} data={data}>
            <XAxis dataKey='name'/>
            <LineItem dataKey='uv' yAxisId={0}/>
            <LineItem dataKey='pv' yAxisId={1}/>
          </LineChart>
        </div>
        <div className='line-chart-wrapper' style={{margin: 40}}>
          <LineChart width={400} height={400} data={data}>
            <YAxis type='category' yAxisId={0}/>
            <YAxis type='number' orient='right' yAxisId={1}/>
            <XAxis dataKey='name'/>
            <LineItem dataKey='uv' stroke='#ff7300' strokeWidth={2} yAxisId={0}/>
            <LineItem dataKey='pv' stroke='#387908' strokeWidth={2} yAxisId={1}/>
          </LineChart>
        </div>
      </div>
    );
  }
});

