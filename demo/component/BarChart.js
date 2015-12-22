import React, {PropTypes} from 'react';
import {BarChart, BarItem, Brush, CartesianGrid, ReferenceLine, XAxis, YAxis, Tooltip} from 'recharts';

console.log(ReferenceLine);
const CustomBar = React.createClass({
  getPath () {
    const {x, y, width, height} = this.props;

    return `M${x},${y + height}
            C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
            C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
            Z`;
  },
  render () {
    const {fill} = this.props;

    return <path d={this.getPath()} stroke='none' fill={fill}/>;
  }
});
const BarTwo = React.createClass({
  getPath () {
    const {x, y, width, height} = this.props;
    const extend = width * 0.2;

    return `M${x - extend},${y + height}
            C${x - extend + width / 3},${y + height} ${x + width / 6},${y} ${x + width / 2}, ${y}
            C${x + 5 * width / 6},${y} ${x + extend + 2 * width / 3},${y + height} ${x + width + extend}, ${y + height}
            Z`;
  },
  render () {
    const {fill, fillOpacity} = this.props;

    return <path d={this.getPath()} stroke='none' fillOpacity={fillOpacity} fill={fill}/>;
  }
});

export default React.createClass({
  displayName: 'BarChartDemo',

  render () {
    const data = [
      {name: '美食', uv: 400, pv: 2400, fill: '#ffc34f'},
      {name: '美妆', uv: 300, pv: 4567, fill: '#fff553'},
      {name: '收纳', uv: 300, pv: 1398, fill: '#e0ff62'},
      {name: '数码', uv: 200, pv: 9800, fill: '#a9e470'},
      {name: '养生', uv: 278, pv: 3908, fill: '#89ca82'},
      {name: '音乐', uv: 189, pv: 4800, fill: '#8dd1e1'},
      {name: '游戏', uv: 189, pv: 4800, fill: '#9cacf1'},
      {name: '阅读', uv: 189, pv: 4800, fill: '#9390df'}
    ];
    const data2 = [
      {name: '201102', uv: -6.11, pv: 0},
      {name: '201103', uv: 0.39, pv: 0},
      {name: '201104', uv: -1.37, pv: 0},
      {name: '201105', uv: 1.16, pv: 0},
      {name: '201106', uv: 1.29, pv: 0},
      {name: '201107', uv: 0.09, pv: 0},
      {name: '201108', uv: 0.53, pv: 0},
      {name: '201109', uv: 2.52, pv: 0},
      {name: '201110', uv: 0.79, pv: 0},
      {name: '201111', uv: 2.94, pv: 0},
      {name: '201112', uv: 4.3, pv: 0},
      {name: '201201', uv: 7.41, pv: 14.21},
      {name: '201202', uv: -7.1, pv: 13.01},
      {name: '201203', uv: -1.17, pv: 11.26},
      {name: '201204', uv: -1.86, pv: 10.7},
      {name: '201205', uv: -0.16, pv: 9.26},
      {name: '201206', uv: -1.25, pv: 6.53},
      {name: '201207', uv: 0.22, pv: 6.66},
      {name: '201208', uv: 0.72, pv: 6.86},
      {name: '201209', uv: 1.82, pv: 6.12},
      {name: '201210', uv: 1.64, pv: 7.02},
      {name: '201211', uv: 3.16, pv: 7.25},
      {name: '201212', uv: 1.31, pv: 4.17},
      {name: '201301', uv: 2.91, pv: -0.19},
      {name: '201302', uv: -0.47, pv: 6.94},
      {name: '201303', uv: -4.15, pv: 3.71},
      {name: '201304', uv: -1.82, pv: 3.76},
      {name: '201305', uv: -0.93, pv: 2.95},
      {name: '201306', uv: -0.99, pv: 3.22},
      {name: '201307', uv: -0.52, pv: 2.46},
      {name: '201308', uv: 1.54, pv: 3.3},
      {name: '201309', uv: 2.05, pv: 3.54},
      {name: '201310', uv: 0.7, pv: 2.58},
      {name: '201311', uv: 2.25, pv: 1.59},
      {name: '201312', uv: 3.59, pv: 3.92},
      {name: '201401', uv: 3.63, pv: 4.64},
      {name: '201402', uv: -4.91, pv: -0.02},
      {name: '201403', uv: -2.66, pv: 1.54},
      {name: '201404', uv: -1.50, pv: 1.86},
      {name: '201405', uv: -0.19, pv: 2.62},
      {name: '201406', uv: -0.22, pv: 3.42},
      {name: '201407', uv: -0.58, pv: 3.35},
      {name: '201408', uv: 0.89, pv: 2.69},
      {name: '201409', uv: 2.22, pv: 2.86},
      {name: '201410', uv: 0.61, pv: 2.77},
      {name: '201411', uv: 2.37, pv: 2.97},
      {name: '201412', uv: 3.06, pv: 2.41},
      {name: '201501', uv: 1.07, pv: -0.13},
      {name: '201502', uv: 4.04, pv: 9.27},
      {name: '201503', uv: -5.14, pv: 6.48},
      {name: '201504', uv: -1.69, pv: 6.28},
      {name: '201505', uv: 0.51, pv: 7.03},
      {name: '201506', uv: 1.03, pv: 8.37},
      {name: '201507', uv: -1.14, pv: 7.76},
      {name: '201508', uv: 0.53, pv: 7.38},
      {name: '201509', uv: 1.51, pv: 6.63},
      {name: '201510', uv: -0.16, pv: 5.81},
      {name: '201511', uv: 3.27, pv: 6.74},
    ];

        // <p>最简单的柱图</p>
        // <div className='bar-chart-wrapper'>
        //   <BarChart width={400} height={400} data={data}>
        //     <XAxis dataKey='name'/>
        //     <YAxis/>
        //     <CartesianGrid vertical={false}/>
        //     <BarItem dataKey='uv' fill='#ff7300'/>
        //     <BarItem dataKey='pv' fill='#387908'/>
        //   </BarChart>
        // </div>

        // <p>水平朝向的柱图</p>
        // <div className='bar-chart-wrapper'>
        //   <BarChart width={400} height={400} data={data} layout='vertical'>
        //     <XAxis type='number'/>
        //     <YAxis dataKey='name' type='category'/>
        //     <CartesianGrid horizontal={false}/>
        //     <BarItem dataKey='uv' fill='#ff7300'/>
        //     <BarItem dataKey='pv' fill='#387908'/>
        //   </BarChart>
        // </div>

        // <p>微型图表－柱图</p>
        // <div className='bar-chart-wrapper'>
        //   <BarChart width={150} height={40} data={data}>
        //     <BarItem dataKey='uv' fill='#ff7300'/>
        //   </BarChart>
        // </div>

    return (
      <div className='bar-charts'>

        <p>有正负的柱图</p>
        <div className='bar-chart-wrapper'>
          <BarChart width={1100} height={250} barGap={2} barSize={6} data={data2} margin={{top: 20, right: 20, bottom: 0, left: 20}}>
            <XAxis dataKey='name'/>
            <YAxis tickCount={7}/>
            <BarItem dataKey='uv' name='月环比' fill='#8884d8'/>
            <BarItem dataKey='pv' name='年同比' fill='#82ca9d'/>
            <Tooltip/>
            <CartesianGrid/>
            <Brush dataKey='name' height={30}/>
            <ReferenceLine type='horizontal' value={0} stroke='#666'/>
          </BarChart>
        </div>

        <p>变形的柱图（一）</p>
        <div className='bar-chart-wrapper'>
          <BarChart width={500} height={250} barOffset={0} data={data}  margin={{top: 20, right: 20, bottom: 0, left: 20}}>
            <XAxis dataKey='name'/>
            <BarItem dataKey='uv' barGap={0} fill='#ff7300' component={<CustomBar/>}/>
          </BarChart>
        </div>

        <p>变形的柱图（二）</p>
        <div className='bar-chart-wrapper'>
          <BarChart width={500} height={250} barOffset={0} data={data} margin={{top: 20, right: 20, bottom: 0, left: 20}}>
            <XAxis dataKey='name'/>
            <BarItem dataKey='uv' barGap={0} component={<BarTwo/>}/>
          </BarChart>
        </div>
      </div>
    );
  }
});

