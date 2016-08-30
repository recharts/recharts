import React from 'react';
import { Surface, Pie } from 'recharts';

const data = [
  { name: 'iphone4', value: 120, fill: '#ff7300' },
  { name: 'iphone4s', value: 500, fill: '#e5671a' },
  { name: 'iphone5', value: 600, fill: '#907213' }
];

export default React.createClass({
  displayName: 'PieDemo',

  render () {
    return (
      <Surface width={500} height={500}>
        <Pie startAngle={180} endAngle={0} cx={250} cy={250} outerRadius={200} innerRadius={180} data={data} paddingAngle={10}/>
        <line x1={0} y1={250} x2={500} y2={250} stroke="black"/>
      </Surface>
    );
  }
});


