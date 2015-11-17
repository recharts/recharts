import React from 'react';
import {Surface, Legend} from 'recharts';

export default React.createClass({
  render () {
    let data = [{value: '苹果', color: '#ff7300'}, {value: '三星', color: '#bb7300'}, {value: '华为', color: '#887300'}, {value: '索尼', color: '#667300'}];
    let data2 = [{value: '苹果', type: 'scatter', color: '#ff7300'}, {value: '三星', type: 'scatter', color: '#bb7300'}, {value: '华为', type: 'scatter', color: '#bb0067'}, {value: '索尼', type: 'scatter', color: '#167300'}];
    let data3 = [{value: '苹果', type: 'line', color: '#ff7300'}, {value: '三星', type: 'line', color: '#bb7300'}, {value: '华为', type: 'line', color: '#bb7300'}, {value: '索尼', type: 'line', color: '#ff7812'}];

    return (
      <div>
        <Legend width={200} height={30} data={data} />
        <Legend layout='vertical' width={200} height={100} data={data2} />
        <Legend width={200} height={30} data={data3} />
      </div>
    );
  }
});

