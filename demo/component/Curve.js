import React from 'react';
import { Surface, Curve } from 'recharts';

export default React.createClass({
  render () {
    let points = [
      { x: 10, y: 10 },
      { x: 25, y: 40 },
      { x: 40, y: 10 },
      { x: 55, y: 40 },
      { x: 70, y: 10 }
    ];

    return (
      <Surface width={400} height={400}>
        <Curve stroke="#000" fill="none" type="monotone" points={points} />
      </Surface>
    );
  }
});


