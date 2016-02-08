import React from 'react';
import { TriangleChart, TriangleItem, Legend } from 'recharts';

const data01 = [
  { name: '上海', value: 500 },
  { name: '北京', value: 300 },
  { name: '浙江', value: 600 },
  { name: '广东', value: 200 },
  { name: '台湾', value: 178 },
  { name: '香港', value: 189 },
];

const data02 = [
  { name: '湖北', value: 2400 },
  { name: '湖南', value: 4567 },
  { name: '四川', value: 1398 },
  { name: '广西', value: 9800 },
  { name: '山西', value: 3908 },
  { name: '山东', value: 4800 },
];

const data03 = [
  { name: '青浦', value: 100 },
  { name: '松江', value: 300 },
  { name: '五环', value: 100 },
  { name: '六环', value: 80 },
  { name: '一环', value: 40 },
  { name: '二环', value: 30 },
  { name: '三环', value: 50 },
  { name: '杭州', value: 100 },
  { name: '义乌', value: 200 },
  { name: '广州', value: 150 },
  { name: '佛山', value: 50 },
  { name: '高雄', value: 200 },
  { name: '花莲', value: 34 },
  { name: '垦丁', value: 44 },
  { name: '九龙', value: 89 },
  { name: '离岛', value: 49 },
  { name: '北区', value: 51 },
];

export default React.createClass({
  render () {
    return (
      <div className='triangle-charts'>
        <p>Triangle Chart</p>
        <div className="triangle-chart-wrapper">
          <TriangleChart width={600} height={400}>
            <TriangleItem data={data01} fillOpacity={0.6} stroke="#ff7300" fill="#ff7300" overlapRatio={0.3} />
          </TriangleChart>
        </div>
      </div>
    );
  }
});
