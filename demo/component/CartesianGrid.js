import React from 'react';
import { Surface, CartesianGrid } from 'recharts';

export default React.createClass({
  render () {
    let horizontalPoints = [10, 20, 30, 100, 400];
    let verticalPoints = [100, 200, 300, 400];

    return (
      <Surface width={500} height={500}>
        <CartesianGrid
          width={500}
          height={500}
          verticalPoints={verticalPoints}
          horizontalPoints={horizontalPoints}
        />
      </Surface>
    );
  }
});

