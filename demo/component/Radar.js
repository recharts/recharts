'use strict';

import React from 'react/addons';
import {Surface, Radar} from 'recharts';

export default React.createClass({
  render () {
    let data = [
    {name: 'iphone4', value: 120, fill: '#ff7300'},
    {name: 'iphone4s', value: 500, fill: '#e5671a'},
    {name: 'iphone5', value: 600, fill: '#907213'}],
      data02 = [
    {name: 'iphone4', value: 120, fill: '#ff7300'},
    {name: 'iphone4s', value: 500, fill: '#e5671a'},
    {name: 'iphone5', value: 600, fill: '#907213'},
    {name: 'iphone5s', value: 600, fill: '#907213'},
    {name: 'iphone6', value: 600, fill: '#907213'},
    {name: 'iphone6 plus', value: 600, fill: '#907213'},
    ];

    return (
      <Surface width={500} height={1000}>
        <Radar cx={250} cy={250} concentricPathType='circle' outerRadius={200} data={data} />

        <Radar cx={250} cy={750} gridNumber={5} outerRadius={200} data={data02} />
      </Surface>
    );
  }
});


