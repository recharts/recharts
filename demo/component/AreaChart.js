import React from 'react';
import {AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';

const CustomTooltip = React.createClass({

  render () {
    const {active, payload, external, label} = this.props;
    if (active) {
      const style = {
        padding: 6,
        backgroundColor: '#fff',
        border: '1px solid #ccc'
      };
      const currData = external.filter(entry => (entry.name === label))[0];

      return (
        <div className='area-chart-tooltip' style={style}>
          <p>{payload[0].key + ' : '}<em>{payload[0].value}</em></p>
          <p>{'uv : '}<em>{currData.uv}</em></p>
        </div>
      );
    }

    return null;
  }
});

export default React.createClass({
  displayName: 'AreaChartDemo',

  render () {
    const data = [
      {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 300, pv: 1398, amt: 2400},
      {name: 'Page C', uv: 200, pv: 9800, amt: 2400},
      {name: 'Page D', uv: 278, pv: 3908, amt: 2400},
      {name: 'Page E', uv: 189, pv: 4800, amt: 2400}
    ];

    return (
      <div className='area-charts'>
        <p>AreaChart with custom tooltip</p>
        <div className='area-chart-wrapper'>
          <AreaChart width={900} height={250} data={data} margin={{top: 10, right: 20, bottom: 10, left: 10}}>
            <XAxis dataKey='name' hasTick/>
            <YAxis tickCount={7} hasTick/>
            <Tooltip customContent={<CustomTooltip external={data}/>}/>
            <CartesianGrid stroke='#f5f5f5'/>
            <Area type='monotone' dataKey='pv' stroke='#ff7300' fill='#ff7300' fillOpacity={0.25}/>
          </AreaChart>
        </div>

        <p>Simple AreaChart</p>
        <div className='area-chart-wrapper'>
          <AreaChart width={100} height={50} data={data}>
            <Area type='monotone' dataKey='uv' stroke='#ff7300' fill='#ff7300'/>
          </AreaChart>
        </div>

        <p>AreaChart with two y-axes</p>
        <div className='area-chart-wrapper' style={{padding: 40}}>
          <AreaChart width={400} height={400} data={data}
            margin={{top: 5, right: 20, left: 20, bottom: 5}}>
            <XAxis dataKey='name'/>
            <Tooltip />
            <Area type='monotone' dataKey='uv' stroke='#ff7300' fill='#ff7300' yAxisId={0}/>
            <Area type='monotone' dataKey='pv' stroke='#387908' fill='#387908' yAxisId={1}/>
          </AreaChart>
        </div>

        <p>AreaChart with three y-axes</p>
        <div className='area-chart-wrapper'>
          <AreaChart width={600} height={400} data={data}>
            <YAxis type='number' yAxisId={0} stroke="#ff7300"/>
            <YAxis type='number' orient='right' yAxisId={1} stroke="#387908"/>
            <YAxis type='number' orient='right' yAxisId={2} stroke="#38abc8"/>
            <XAxis dataKey='name'/>
            <Area dataKey='uv' stroke='#ff7300' fill='#ff7300' strokeWidth={2} yAxisId={0}/>
            <Area dataKey='pv' stroke='#387908' fill='#387908' strokeWidth={2} yAxisId={1}/>
            <Area dataKey='amt' stroke='#38abc8' fill='#38abc8' strokeWidth={2} yAxisId={2}/>
          </AreaChart>
        </div>

        <p>AreaChart of vertical layout </p>
        <div className='area-chart-wrapper' style={{margin: 40}}>
          <AreaChart width={400} height={400} data={data} layout='vertical'>
            <YAxis type='category' dataKey='name'/>
            <XAxis type='number' xAxisId={0} orient='top'/>
            <XAxis type='number' xAxisId={1} orient='bottom'/>
            <Area dataKey='uv' dataKeyName='月环比' stroke='#ff7300' fill='#ff7300' strokeWidth={2} xAxisId={0} />
            <Area dataKey='pv' dataKeyName='年同比' stroke='#387908' fill='#387908' strokeWidth={2} xAxisId={1} />
            <Tooltip/>
          </AreaChart>
        </div>

      </div>
    );
  }
});
