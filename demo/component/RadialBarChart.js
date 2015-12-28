import React, {PropTypes} from 'react';
import {RadialBarChart, RadialBarItem, Legend} from 'recharts';

export default React.createClass({
  render () {
    const data = [
      {name: '18-24岁', uv: 31.47, pv: 2400, fill: '#8884d8'},
      {name: '25-29岁', uv: 26.69, pv: 4567, fill: '#83a6ed'},
      {name: '30-34岁', uv: 15.69, pv: 1398, fill: '#8dd1e1'},
      {name: '35-39岁', uv: 8.22, pv: 9800, fill: '#82ca9d'},
      {name: '40-49岁', uv: 8.63, pv: 3908, fill: '#a4de6c'},
      {name: '50岁以上', uv: 2.63, pv: 4800, fill: '#d0ed57'},
      {name: '蒙面侠', uv: 6.67, pv: 4800, fill: '#ffc658'}
    ];

    const style = {
      top: 0,
      left: 350,
      lineHeight: '24px'
    };

    return (
      <div className='radial-bar-charts'>

        <p>玉玦图</p>
        <div className='radial-bar-chart-wrapper'>
          <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barRadius={10} data={data}>
            <RadialBarItem minAngle={15}  clockWise={true} dataKey='uv'/>
            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' style={style}/>
          </RadialBarChart>
        </div>
      </div>
    );
  }
});

