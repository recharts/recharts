import React from 'react';
import {Surface, PolarAngleAxis} from 'recharts';

const ticks = [
  { value: '100', angle: 20 },
  { value: '200', angle: 80 },
  { value: '300', angle: 120 },
  { value: '400', angle: 180 },
  { value: '500', angle: 240 },
  { value: '600', angle: 290 },
];

export default React.createClass({
  handleActive(data, index, e) {
    console.log(data, index);
  },

  render () {
    return (
      <Surface width={500} height={500}>
        <PolarAngleAxis
          cx={250}
          cy={250}
          radius={200}
          ticks={ticks}
          stroke="#ccc"
          cursor="pointer"
          onClick={this.handleActive}
        />
      </Surface>
    );
  }
});
