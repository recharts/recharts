import React, { Component } from 'react';
import { Surface, CartesianGrid } from 'recharts';

export default class Demo extends Component {

  static displayName = 'CartesianGridDemo';

  render () {
    let horizontalPoints = [10, 20, 30, 100, 400];
    let verticalPoints = [100, 200, 300, 400];
    let verticalFill=['#5ab8ff', '#eee'];

    return (
      <div>
        <Surface width={500} height={500}>
          <CartesianGrid
            width={500}
            height={500}
            verticalPoints={verticalPoints}
            horizontalPoints={horizontalPoints}
            verticalFill={verticalFill}
            fillOpacityVertical={0.2}
          />
        </Surface>
      </div>
    );
  }
}

