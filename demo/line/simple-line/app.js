'use strict';

import React from 'react/addons';
import Curve from '../../../src/js/shape/Curve';
import Rectangle from '../../../src/js/shape/Rectangle';
import Sector from '../../../src/js/shape/Sector';
import Pie from '../../../src/js/chart/Pie';
import Legend from '../../../src/js/component/Legend';

const App = React.createClass({
  render () {
    return (
      <svg width="1000" height="1000">
        <Curve stroke='#000' fill='none' type='smooth' points={[{x: 10, y: 10}, {x: 25, y: 40}, {x: 40, y: 10}, {x: 55, y: 40}, {x: 70, y: 10}]} />
        <Rectangle x={50} y={50} width={80} height={100} radius={[5, 10, 8, 15]} fill='#ff7300'/>
        <Sector fill='#ff7902' cx={200} cy={300} innerRadius={150} outerRadius={200} endAngle={90} />
        <Pie cx={500} cy={500}
          innerRadius={40}
          outerRadius={50}
          data={[{name: 'test1', value: 100, fill: '#ff7300'}, {name: 'test2', value: 200, fill: '#345789'}]}/>

        <Legend
          x={50} y={800}
          width={400} height={60}
          data={[{type: 'square', value: '中国'}, {type: 'square', value: '美国'}, {type: 'square', value: '英国'}, {type: 'square', value: '菲律宾'}]} />
      </svg>
    );
  }
});

React.render(<App />, document.getElementById('mod-chart'));
