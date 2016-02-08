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
        <Pie cx={250} cy={250} outerRadius={200} innerRadius={100} data={data} />
      </Surface>
    );
  }
});


