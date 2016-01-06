import React from 'react';
import {TreemapChart, TreemapItem} from 'recharts';
import DemoTreemapItem from './DemoTreemapItem';

class DemoTreemapChart extends React.Component {
  static displayName = 'DemoTreemapChart';

  render () {
    const data = [
      {rank:'1', name:'呵呵', value:17061682925},
      {rank:'2', name:'呵呵', value:12490887132},
      {rank:'3', name:'呵呵', value:10772738863},
      {rank:'4', name:'呵呵', value:8236223813},
      {rank:'5', name:'呵呵', value:6583448127},

      {rank:'6', name:'呵呵', value:5834718183},
      {rank:'7', name:'呵呵', value:5559852006},
      {rank:'8', name:'呵呵', value:4651272674},
      {rank:'9', name:'呵呵', value:4248844205},
      {rank:'10', name:'呵呵', value:3862568602},

      {rank:'11', name:'呵呵', value:3803070009},
      {rank:'12', name:'呵呵', value:3480361169},
      {rank:'13', name:'呵呵', value:3476552989},
      {rank:'14', name:'呵呵', value:3147229713},
      {rank:'15', name:'呵呵', value:2907504853},

      {rank:'16', name:'呵呵', value:2555558916},
      {rank:'17', name:'呵呵', value:2149183029},
      {rank:'18', name:'呵呵', value:2107468912},
      {rank:'19', name:'呵呵', value:2088055427},
      {rank:'20', name:'呵呵', value:1885463047}
    ].reverse();

    const ColorPlatte = ['#8889DD','#9597E4','#8DC77B','#A5D297','#E2CF45','#F8C12D'].reverse();

    const allValue = data.reduce((a, b)=>(a + b.value),0);
    let treemapItemColor = [];
    data.reduce((a, b, i)=>{
      const index =
        ((a + b.value) / allValue) - ((i + 1) / data.length) < 1E-10 ?
        Math.ceil(((a + b.value) / allValue) * ColorPlatte.length) - 1
        : i;
      treemapItemColor.push(ColorPlatte[index])
      return a + b.value;
    }, 0);

    return (
      <div className='treemap-charts'>
        <p>Treemap</p>
        <div className='treemap-chart-wrapper'>
          <TreemapChart width={1000} height={500} data={data} ratio={0.5 * (1 + Math.sqrt(5))}>
            <TreemapItem element={
              <DemoTreemapItem treemapItemColor={treemapItemColor}/>
            }/>
          </TreemapChart>
        </div>
      </div>
    );
  }
}

export default DemoTreemapChart;
