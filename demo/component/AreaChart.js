import React from 'react';
import {AreaChart, AreaItem, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';

const CustomTooltip = React.createClass({

  render () {
    const {active, data, external, label} = this.props;
    if (active) {
      const currData = external.filter(entry => (entry.name === label));

      return (
        <div className='area-chart-tooltip'>
          <p>{data[0].key}<em>{data[0].value}</em></p>
          <p>{'同比上周搜索涨幅：'}<em>{currData.length && currData[0].pv}</em></p>
        </div>
      );
    }

    return null;
  }
});

export default React.createClass({
  displayName: 'AreaChartDemo',

  render () {
    const data = [{name: '上海', uv: 400, pv: 2400, amt: 2400},
                  {name: '北京', uv: 300, pv: 4567, amt: 2400},
                  {name: '杭州', uv: 300, pv: 1398, amt: 2400},
                  {name: '上饶', uv: 200, pv: 9800, amt: 2400},
                  {name: '台湾', uv: 278, pv: 3908, amt: 2400},
                  {name: '香港', uv: 189, pv: 4800, amt: 2400}];

    return (
      <div className='area-charts'>
        <p>阿里指数</p>
        <div className='area-chart-wrapper'>
          <AreaChart width={900} height={250} data={data} margin={{top: 10, right: 20, bottom: 10, left: 10}}>
            <XAxis dataKey='name' hasTick={true}/>
            <YAxis tickCount={7} hasTick={true}/>
            <Tooltip component={<CustomTooltip external={data}/>}/>
            <CartesianGrid stroke='#f5f5f5'/>
            <AreaItem type='monotone' dataKey='uv' stroke='#7d79d4' fill='#7d79d4' fillOpacity={0.25}/>
          </AreaChart>
        </div>

        <p>最简单的面积图</p>
        <div className='area-chart-wrapper'>
          <AreaChart width={100} height={50} data={data}>
            <AreaItem type='monotone' dataKey='uv' stroke='#ff7300' fill='#ff7300'/>
          </AreaChart>
        </div>

        <p>双轴图</p>
        <div className='area-chart-wrapper' style={{padding: 40}}>
          <AreaChart width={400} height={400} data={data}
            margin={{top: 5, right: 20, left: 20, bottom: 5}}>
            <XAxis dataKey='name'/>
            <Tooltip/>
            <AreaItem type='monotone' dataKey='uv' stroke='#ff7300' fill='#ff7300' yAxisId={0}/>
            <AreaItem type='monotone' dataKey='pv' stroke='#387908' fill='#387908' yAxisId={1}/>
          </AreaChart>
        </div>
        <p>双轴图（线图默认是水平方向的，容器有margin）</p>
        <div className='area-chart-wrapper' style={{margin: 40}}>
          <AreaChart width={400} height={400} data={data}>
            <YAxis type='number' yAxisId={0}/>
            <YAxis type='number' orient='right' yAxisId={1}/>
            <YAxis type='number' orient='right' yAxisId={2}/>
            <XAxis dataKey='name'/>
            <AreaItem dataKey='uv' stroke='#ff7300' fill='#ff7300' strokeWidth={2} yAxisId={0}/>
            <AreaItem dataKey='pv' stroke='#387908' fill='#387908' strokeWidth={2} yAxisId={1}/>
            <AreaItem dataKey='amt' stroke='#38abc8' fill='#38abc8' strokeWidth={2} yAxisId={2}/>
          </AreaChart>
        </div>

        <p>竖直方向的线图</p>
        <div className='area-chart-wrapper' style={{margin: 40}}>
          <AreaChart width={400} height={400} data={data} layout='vertical'>
            <YAxis type='category' dataKey='name'/>
            <XAxis type='number' xAxisId={0} orient='top'/>
            <XAxis type='number' xAxisId={1} orient='bottom'/>
            <AreaItem dataKey='uv' dataKeyName='月环比' stroke='#ff7300' fill='#ff7300' strokeWidth={2} xAxisId={0} />
            <AreaItem dataKey='pv' dataKeyName='年同比' stroke='#387908' fill='#387908' strokeWidth={2} xAxisId={1} />
            <Tooltip/>
          </AreaChart>
        </div>

      </div>
    );
  }
});
