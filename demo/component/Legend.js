import React, { Component } from 'react';
import { Surface, Legend } from 'recharts';

const data = [
  { value: 'Apple', color: '#ff7300' },
  { value: 'Samsung', color: '#bb7300' },
  { value: 'Huawei', color: '#887300' },
  { value: 'Sony', color: '#667300' },
];

const data2 = [
  { value: 'Apple', type: 'circle', color: '#ff7300' },
  { value: 'Samsung', type: 'circle', color: '#bb7300' },
  { value: 'Huawei', type: 'circle', color: '#bb0067' },
  { value: 'Sony', type: 'circle', color: '#167300' },
];

const data3 = [
  { value: 'Apple', type: 'line', color: '#ff7300' },
  { value: 'Samsung', type: 'line', color: '#bb7300' },
  { value: 'Huawei', type: 'line', color: '#bb7300' },
  { value: 'Sony', type: 'line', color: '#ff7812' },
];

const data4 = [
  { value: 'Apple', color: '#ff7300' },
  { value: 'Samsung', color: '#bb7300' },
  { value: 'Huawei', color: '#bb7300' },
  { value: 'Sony', type: 'none' },
];

export default class LegendDemo extends Component {

  static displayName = 'LegendDemo';

  render() {
    return (
      <div>
        <div style={{ position: 'relative', height: 200 }}>
          <Legend width={500} height={30} payload={data} />
        </div>

        <div style={{ position: 'relative', height: 200, left: 100 }}>
          <Legend layout="vertical" width={200} height={100} payload={data2} />
        </div>

        <div style={{ position: 'relative', height: 200 }}>
          <Legend width={200} height={30} payload={data3} />
        </div>

        <div style={{ position: 'relative', height: 200 }}>
          <Legend width={200} height={30} payload={data4} />
        </div>
      </div>
    );
  }
}
