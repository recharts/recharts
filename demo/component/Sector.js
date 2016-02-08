import React from 'react';
import { Surface, Sector } from 'recharts';

export default React.createClass({
  render () {
    return (
      <Surface width={500} height={500}>
        <Sector fill="#ff7902" cx={200} cy={300} innerRadius={150} outerRadius={200} endAngle={90} />
      </Surface>
    );
  }
});


