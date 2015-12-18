import React from 'react';
import {TreemapChart, TreemapItem} from 'recharts';

export default React.createClass({
  render () {
    const data = [
      {name:'呵呵', value:17061682925},
      {name:'呵呵', value:12490887132},
      {name:'呵呵', value:10772738863},
      {name:'呵呵', value:8236223813},
      {name:'呵呵', value:6583448127},

      {name:'呵呵', value:5834718183},
      {name:'呵呵', value:5559852006},
      {name:'呵呵', value:4651272674},
      {name:'呵呵', value:4248844205},
      {name:'呵呵', value:3862568602},
      //
      // {name:'呵呵', value:3803070009},
      // {name:'呵呵', value:3480361169},
      // {name:'呵呵', value:3476552989},
      // {name:'呵呵', value:3147229713},
      // {name:'呵呵', value:2907504853},
      //
      // {name:'呵呵', value:2555558916},
      // {name:'呵呵', value:2149183029},
      // {name:'呵呵', value:2107468912},
      // {name:'呵呵', value:2088055427},
      // {name:'呵呵', value:1885463047}
    ].reverse();

    const ColorPlatte = ['#8889DD','#9597E4','#8DC77B','#A5D297','#E2CF45','#F8C12D'].reverse();

    const allValue = data.reduce((a, b)=>(a + b.value),0);

    data.reduce((a, b, i)=>{
      const index = (a / allValue) < ((i+1) / data.length) ? Math.floor((a / allValue) * ColorPlatte.length) : i
      data[i].style = {
        fill: ColorPlatte[index]
      };
      return a + b.value;
    }, 0);
    return (
      <div className='treemap-charts'>
        <p>Treemap</p>
        <div className='treemap-chart-wrapper'>
          <TreemapChart
            width={1100}
            height={320}
            data={data}
            ratio={0.5 * (1 + Math.sqrt(5))}
            style={{
                stroke:'#fff',
                strokeWidth:3
              }}
            />
        </div>
      </div>
    );
  }
});
