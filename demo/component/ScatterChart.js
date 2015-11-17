import React from 'react';
import {ScatterChart, ScatterItem, XAxis, YAxis, ZAxis} from 'recharts';

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
        <p>最简单的散点图</p>
        <div className='scatter-chart-wrapper'>
          <ScatterChart width={400} height={400}>
            <XAxis dataKey={'x'}/>
            <YAxis dataKey={'y'}/>
            <ScatterItem name='上海中学生' data={data01} fill='#ff7300'/>
          </ScatterChart>
        </div>

        <p>最简单的散点图</p>
        <div className='scatter-chart-wrapper'>
          <ScatterChart width={400} height={400}>
            <XAxis dataKey={'x'}/>
            <YAxis dataKey={'y'}/>
            <ZAxis dataKey={'z'} range={[4, 20]}/>
            <ScatterItem name='上海中学生' data={data01} fillOpactity={0.3} fill='#ff7300'/>
            <ScatterItem name='北京中学生' data={data02} fill='#347300'/>
          </ScatterChart>
        </div>

      </div>
    );
  }
});
