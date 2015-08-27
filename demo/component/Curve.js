'use strict';

import React from 'react/addons';
import {Surface, Curve} from 'recharts';

export default React.createClass({
  render () {
    let points = [{x: 10, y: 10}, {x: 25, y: 40}, {x: 40, y: 10}, {x: 55, y: 40}, {x: 70, y: 10}];

    return (
      <Surface>
        <Curve stroke='#000' fill='none' type='smooth' points={points} />
      </Surface>
    );
  }
});


