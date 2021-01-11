import React, { Component } from 'react';
import { BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: -3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: -2000, pv: -9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: -1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: -3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

export default class PieDemo extends React.Component {
  static displayName = 'PieDemo';

  render () {
    return (
      <BarChart width={600} height={300} data={data} stackOffset="positive"
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <ReferenceLine y={0} stroke='#000'/>
       <Bar dataKey="pv" fill="#8884d8" stackId="stack" />
       <Bar dataKey="uv" fill="#82ca9d" stackId="stack" />
      </BarChart>
    );
  }
}


