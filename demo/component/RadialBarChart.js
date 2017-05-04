import React, { Component } from 'react';
import { RadialBarChart, RadialBar, Cell, Legend, Tooltip, ResponsiveContainer,
  LabelList, PolarAngleAxis } from 'recharts';
import { changeNumberOfData } from './utils';
import { scaleOrdinal, schemeCategory10 } from 'd3-scale';

const colors = scaleOrdinal(schemeCategory10).range();

const data = [
  { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
  { name: '25-29', uv: 26.69, pv: 4500, fill: '#83a6ed' },
  { name: '30-34', uv: 15.69, pv: -1398, fill: '#8dd1e1' },
  { name: '35-39', uv: 8.22, pv: 2800, fill: '#82ca9d' },
  { name: '40-49', uv: 8.63, pv: 1908, fill: '#a4de6c' },
  { name: '50+', uv: 2.63, pv: -2800, fill: '#d0ed57' },
  { name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658' },
];

const initilaState = { data };

export default class Demo extends Component {

  static displayName = 'RadialBarChartDemo';

  state = initilaState;

  handleChangeData = () => {
    this.setState(() => _.mapValues(initilaState, changeNumberOfData));
  };

  render () {
    const { data } = this.state;
    const style = {
      lineHeight: '24px',
      left: 300,
    };

    const label = {
      orientation: 'outer'
    };

    return (
      <div className='radial-bar-charts'>
        <a
          href="javascript: void(0);"
          className="btn update"
          onClick={this.handleChangeData}
        >
          change data
        </a>
        <br/>
        <p>RadialBarChart</p>
        <div className="radial-bar-chart-wrapper">
          <RadialBarChart
            width={500}
            height={300}
            cx={150}
            cy={150}
            innerRadius={20}
            outerRadius={140}
            barSize={10}
            data={data}
          >
            <RadialBar minPointSize={15} background dataKey="uv" >
              {
                data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]}/>
                ))
              }
              <LabelList position="insideEnd" fill="#fff" fontSize={10} />
            </RadialBar>
            <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            <Tooltip/>
          </RadialBarChart>
        </div>

        <p>RadialBarChart with positive and negative value</p>
        <div className="radial-bar-chart-wrapper">
          <RadialBarChart
            width={500}
            height={300}
            cx={150}
            cy={150}
            innerRadius={20}
            outerRadius={140}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar background dataKey="pv">
              <LabelList position="end" />
            </RadialBar>
            <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            <Tooltip/>
          </RadialBarChart>
        </div>

        <p>RadialBarChart wrapped by ResponsiveContainer</p>
        <div className="radial-bar-chart-wrapper">
          <ResponsiveContainer>
            <RadialBarChart
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="20%"
              outerRadius="90%"
            >
              <RadialBar minPointSize={15} label={label} background dataKey="uv" />
              <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        <p>Stacked RadialBarChart wrapped by ResponsiveContainer</p>
        <div className="radial-bar-chart-wrapper">
          <ResponsiveContainer>
            <RadialBarChart
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="20%"
              outerRadius="90%"
            >
              <PolarAngleAxis type="number" range={[0, 300]} />
              <RadialBar stackId="stack" minPointSize={15} background dataKey="uv">
                {
                  data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#8884d8" />
                  ))
                }
              </RadialBar>
              <RadialBar stackId="stack" minPointSize={15} dataKey="uv" animationBegin={1500}>
                {
                  data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#83a6ed" />
                  ))
                }
              </RadialBar>
              <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

      </div>
    );
  }
}

