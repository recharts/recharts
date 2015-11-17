import React from 'react';
import {PieChart, PieItem} from 'recharts';

export default React.createClass({
  render () {
    const data01 = [{name: '上海', value: 400, fill: '#dd7300'}, {name: '北京', value: 300, fill: '#387908'},
                  {name: '杭州', value: 300, fill: '#ddee00'}, {name: '上饶', value: 200, fill: '#aaee00'},
                  {name: '台湾', value: 278, fill: '#99eeff'}, {name: '香港', value: 189, fill: '#7733ee'}]
    const data02 = [{name: '上海', value: 2400}, {name: '北京', value: 4567},
                  {name: '杭州', value: 1398}, {name: '上饶', value: 9800},
                  {name: '台湾', value: 3908}, {name: '香港', value: 4800}];

    return (
      <div className='pie-charts'>
        <p>最简单的饼图</p>
        <div className='pie-chart-wrapper'>
          <PieChart width={400} height={400}>
            <PieItem data={data01} cx={100} cy={200} outerRadius={80} fill='#ff7300'/>
            <PieItem data={data02} cx={300} cy={200} outerRadius={80} fill='#ff7300'/>
          </PieChart>
        </div>

        <p>双环图</p>
        <div className='pie-chart-wrapper'>
          <PieChart width={400} height={400}>
            <PieItem data={data01} cx={200} cy={200} innerRadius={50} outerRadius={80} fill='#ff7300'/>
            <PieItem data={data02} cx={200} cy={200} innerRadius={80} outerRadius={100} fill='#ff7300'/>
          </PieChart>
        </div>

      </div>
    );
  }
});

