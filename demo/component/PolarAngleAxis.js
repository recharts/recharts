'use strict';

import React from 'react/addons';
import {Surface, PolarAngleAxis} from 'recharts';

export default React.createClass({
  render () {
    let ticks = [
        {value: '100', angle: 20},
        {value: '200', angle: 80},
        {value: '300', angle: 120},
        {value: '400', angle: 180},
        {value: '500', angle: 240},
        {value: '600', angle: 290}
      ];

    return (
      <Surface width={500} height={500}>
        <PolarAngleAxis
          cx={250}
          cy={250}
          outerRadius={200}
          ticks={ticks}/>
      </Surface>
    );
  }
});

