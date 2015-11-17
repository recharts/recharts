import React from 'react';
import {Surface, Radar} from 'recharts';

export default React.createClass({
  render () {
    let data = [
    {name: 'iphone4', value: 120, max: 800, min: 0, angle: 30},
    {name: 'iphone4s', value: 500, max: 800, min: 0, angle: 150},
    {name: 'iphone5', value: 600, max: 800, min: 0, angle: 250}],
      data02 = [
    {name: 'iphone4', value: 120, max: 600, min: 0, angle: 30},
    {name: 'iphone4s', value: 500, max: 600, min: 0, angle: 90},
    {name: 'iphone5', value: 600, max: 600, min: 0, angle: 120},
    {name: 'iphone5s', value: 600, max: 600, min: 0, angle: 180},
    {name: 'iphone6', value: 600, max: 600, min: 0, angle: 250},
    {name: 'iphone6 plus', value: 600, max: 600, min: 0, angle: 300}
    ];

    return (
      <Surface width={500} height={1000}>
        <Radar orientation='outer' cx={250} cy={250} concentricPathType='circle' outerRadius={160} data={data} />

        <Radar cx={250} cy={750} gridNumber={5} outerRadius={200} data={data02} />
      </Surface>
    );
  }
});


