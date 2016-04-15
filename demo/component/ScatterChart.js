import React from 'react';
import { ScatterChart, Scatter, CartesianGrid, Tooltip, Legend,
 XAxis, YAxis, ZAxis, ReferenceLine } from 'recharts';

const data01 = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const data02 = [
  { x: 200, y: 260, z: 240 },
  { x: 240, y: 290, z: 220 },
  { x: 190, y: 290, z: 250 },
  { x: 198, y: 250, z: 210 },
  { x: 180, y: 280, z: 260 },
  { x: 210, y: 220, z: 230 },
];

const data03 = [
  { x: 10, y: 30 },
  { x: 30, y: 200 },
  { x: 45, y: 100 },
  { x: 50, y: 400 },
  { x: 70, y: 150 },
  { x: 100, y: 250 },
];

const data04 = [
  { x: 30, y: 20 },
  { x: 50, y: 180 },
  { x: 75, y: 240 },
  { x: 100, y: 100 },
  { x: 120, y: 190 },
];

export default React.createClass({
  render () {
    return (
      <div className="scatter-charts">
        <p>Simple ScatterChart</p>
        <div className="scatter-chart-wrapper">
          <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 0, left: 20 }}>
            <XAxis dataKey={'x'} name="stature" unit="cm" />
            <YAxis dataKey={'y'} name="weight" unit="kg" />
            <Scatter name="A school" data={data01} fill="#ff7300" />
            <CartesianGrid />
            <Tooltip />
            <Legend/>
          </ScatterChart>
        </div>

        <p>ScatterChart of three dimension data</p>
        <div className="scatter-chart-wrapper">
          <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 0, left: 20 }}>
            <XAxis dataKey={'x'} name="stature" unit="cm" />
            <YAxis dataKey={'y'} name="weight" unit="kg" />
            <ZAxis dataKey={'z'} range={[50, 1200]} name="score" unit="km" />
            <CartesianGrid />
            <Scatter name="A school" data={data01} fillOpactity={0.3} fill="#ff7300" />
            <Scatter name="B school" data={data02} fill="#347300" />
            <Tooltip/>
            <Legend/>
          </ScatterChart>
        </div>

        <p>ScatterChart which has joint line</p>
        <div className="scatter-chart-wrapper">
          <ScatterChart width={800} height={400} margin={{ top: 20, right: 20, bottom: 0, left: 20 }}>
            <XAxis dataKey={'x'} name="stature" unit="cm" />
            <YAxis dataKey={'y'} name="weight" unit="kg" />
            <ZAxis range={[64]} />
            <Scatter line shape="star" data={data03} fill="#ff7300" />
            <Scatter line shape="square" data={data04} fill="#347300" />
            <CartesianGrid />
            <Tooltip cursor={{ stroke: '#808080', strokeDasharray: '5 5' }}/>
            <Legend/>
          </ScatterChart>
        </div>
      </div>
    );
  }
});
