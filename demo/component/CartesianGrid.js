import React, { Component } from 'react';
import { Surface, CartesianGrid } from 'recharts';

export default class Demo extends Component {

  static displayName = 'CartesianGridDemo';

  render () {
    let horizontalPoints = [10, 20, 30, 100, 400];
    let verticalPoints = [100, 200, 300, 400];
    let verticalFill=['#5ab8ff', '#eee'];
    let horizontalFill=['#faffb0', '#ededed'];

    return (
      <div>
        <Surface width={500} height={500}>
          <CartesianGrid
            width={500}
            height={500}
            verticalPoints={verticalPoints}
            horizontalPoints={horizontalPoints}
          />
        </Surface>
        <br/>
        <Surface width={500} height={500}>
          <CartesianGrid
            width={500}
            height={500}
            fillOpacity={0.4}
            verticalFill={verticalFill}
            horizontalFill={horizontalFill}
            verticalPoints={verticalPoints}
            horizontalPoints={horizontalPoints}
          />
        </Surface>
      </div>
    );
  }
}
