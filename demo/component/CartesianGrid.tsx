import React, { Component } from 'react';
import { Surface, CartesianGrid } from 'recharts';

export default class Demo extends Component<any, any> {

  static displayName = 'CartesianGridDemo';

  render () {
    let horizontalPoints = [10, 20, 30, 100, 400];
    let verticalPoints = [100, 200, 300, 400];

    let verticalFill=['red', '#eee'];
    let horizontalFill=['#eee', 'yellow'];

    return (
      <div>
        <Surface width={500} height={500}>
          <CartesianGrid
            x={0}
            y={0}
            width={500}
            height={500}
            fillOpacity={0.4}
            verticalPoints={verticalPoints}
            horizontalPoints={horizontalPoints}
            verticalFill={verticalFill}
            horizontalFill={horizontalFill}
          />
        </Surface>
      </div>
    );
  }
}

