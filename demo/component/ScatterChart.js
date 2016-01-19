import React from 'react';
import {ScatterChart, Scatter, CartesianGrid, Tooltip, XAxis, YAxis, ZAxis} from 'recharts';

export default React.createClass({
  render () {
    const data01 = [{x: 100, y: 200, z: 200}, {x: 120, y: 100, z: 260},
                  {x: 170, y: 300, z: 400}, {x: 140, y: 250, z: 280},
                  {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}]
    const data02 = [{x: 200, y: 260, z: 240}, {x: 240, y: 290, z: 220},
                  {x: 190, y: 290, z: 250}, {x: 198, y: 250, z: 210},
                  {x: 180, y: 280, z: 260}, {x: 210, y: 220, z: 230}];

    return (
      <div className='scatter-charts'>
        <p>Simple ScatterChart</p>
        <div className='scatter-chart-wrapper'>
          <ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <XAxis dataKey={'x'} name='身高' unit='cm'/>
            <YAxis dataKey={'y'} name='体重' unit='kg'/>
            <Scatter name='上海中学生' data={data01} fill='#ff7300'/>
            <CartesianGrid />
            <Tooltip/>
          </ScatterChart>
        </div>

        <p>ScatterChart of three dimension data</p>
        <div className='scatter-chart-wrapper'>
          <ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <XAxis dataKey={'x'} name='身高' unit='cm'/>
            <YAxis dataKey={'y'} name='体重' unit='kg'/>
            <ZAxis dataKey={'z'} range={[4, 20]} name='离家距离' unit='km'/>
            <CartesianGrid />
            <Scatter name='上海中学生' data={data01} fillOpactity={0.3} fill='#ff7300'/>
            <Scatter name='北京中学生' data={data02} fill='#347300'/>
            <Tooltip/>
          </ScatterChart>
        </div>

      </div>
    );
  }
});
