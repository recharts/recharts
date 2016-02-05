import React from 'react';
import {PieChart, Pie, Legend, ResponsiveContainer} from 'recharts';

export default React.createClass({
  render () {
    const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                  {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]

    const data02 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
                  {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
                  {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];
    const data03 = [{name: 'A1', value: 100},
                    {name: 'A2', value: 300},
                   {name: 'B1', value: 100},
                   {name: 'B2', value: 80},
                   {name: 'B3', value: 40},
                   {name: 'B4', value: 30},
                   {name: 'B5', value: 50},
                  {name: 'C1', value: 100},
                  {name: 'C2', value: 200},
                   {name: 'D1', value: 150},
                   {name: 'D2', value: 50},
                  {name: 'E1', value: 200},
                  {name: 'E2', value: 34},
                  {name: 'E3', value: 44},
                  {name: 'F1', value: 89},
                  {name: 'F2', value: 49},
                  {name: 'F3', value: 51}]

    return (
      <div className='pie-charts'>

        <p>Simple PieChart</p>
        <div className='pie-chart-wrapper'>
          <PieChart width={800} height={400}>
            <Legend />
            <Pie isAnimationActive={false} data={data01} cx={200} cy={200} startAngle={180} endAngle={0} outerRadius={80} fill="#ff7300" label/>
            <Pie data={data02} cx={600} cy={200} startAngle={180} endAngle={-180} outerRadius={80} fill="#387908" label/>
          </PieChart>
        </div>


        <p>PieChart with two donut</p>
        <div className='pie-chart-wrapper'>
          <PieChart width={400} height={400}>
            <Legend verticalAlign='top'/>
            <Pie data={data01} cx={200} cy={200} innerRadius={50} outerRadius={80}/>
            <Pie data={data03} cx={200} cy={200} innerRadius={80} outerRadius={100}/>
          </PieChart>
        </div>

        <p>PieChart wrapped by ResponsiveContainer</p>
        <div className='pie-chart-wrapper' style={{width: '50%', height: '100%', backgroundColor: '#f5f5f5'}}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={data01} innerRadius="25%" outerRadius="40%"/>
              <Pie data={data03} innerRadius="45%" outerRadius="80%"/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
});

