import React from 'react';
import {PieChart, PieItem, Legend} from 'recharts';

export default React.createClass({
  render () {
    const data01 = [{name: '上海', value: 400}, {name: '北京', value: 300},
                  {name: '浙江', value: 300}, {name: '广东', value: 200},
                  {name: '台湾', value: 278}, {name: '香港', value: 189}]
    const data02 = [{name: '湖北', value: 2400}, {name: '湖南', value: 4567},
                  {name: '四川', value: 1398}, {name: '广西', value: 9800},
                  {name: '山西', value: 3908}, {name: '山东', value: 4800}];
    const data03 = [{name: '青浦', value: 100},
                    {name: '松江', value: 300},
                   {name: '五环', value: 100},
                   {name: '六环', value: 80},
                   {name: '一环', value: 40},
                   {name: '二环', value: 30},
                   {name: '三环', value: 50},
                  {name: '杭州', value: 100},
                  {name: '义乌', value: 200},
                   {name: '广州', value: 150},
                   {name: '佛山', value: 50},
                  {name: '高雄', value: 200},
                  {name: '花莲', value: 34},
                  {name: '垦丁', value: 44},
                  {name: '九龙', value: 89},
                  {name: '离岛', value: 49},
                  {name: '北区', value: 51}]

    return (
      <div className='pie-charts'>
        <p>最简单的饼图</p>
        <div className='pie-chart-wrapper'>
          <PieChart width={400} height={400}>
            <Legend/>
            <PieItem data={data01} cx={100} cy={200} outerRadius={80}/>
            <PieItem data={data02} cx={300} cy={200} outerRadius={80}/>
          </PieChart>
        </div>

        <p>双环图</p>
        <div className='pie-chart-wrapper'>
          <PieChart width={400} height={400}>
            <Legend verticalAlign='top'/>
            <PieItem data={data01} cx={200} cy={200} innerRadius={50} outerRadius={80}/>
            <PieItem data={data03} cx={200} cy={200} innerRadius={80} outerRadius={100}/>
          </PieChart>
        </div>

      </div>
    );
  }
});

