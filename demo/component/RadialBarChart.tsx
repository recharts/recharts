import React, { Component } from 'react';
import * as _ from 'lodash';
import {
  RadialBarChart,
  RadialBar,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  PolarAngleAxis,
} from 'recharts';
import { scaleOrdinal } from 'victory-vendor/d3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { changeNumberOfData } from './utils';

const colors = scaleOrdinal(schemeCategory10).range();

const data = [
  { name: '18-24', uv: 60, amt: 31.47, pv: 2400, fill: '#8884d8' },
  { name: '25-29', uv: 50, amt: 26.69, pv: 4500, fill: '#83a6ed' },
  { name: '30-34', uv: 30, amt: 15.69, pv: -1398, fill: '#8dd1e1' },
  { name: '35-39', uv: 59, amt: 8.22, pv: 2800, fill: '#82ca9d' },
  { name: '40-49', uv: 48, amt: 8.63, pv: 1908, fill: '#a4de6c' },
  { name: '50+', uv: 62, amt: 2.63, pv: -2800, fill: '#d0ed57' },
  { name: 'unknown', uv: 38, amt: 6.67, pv: 4800, fill: '#ffc658' },
];

const initialState = { data };

export default class Demo extends Component {
  static displayName = 'RadialBarChartDemo';

  state = initialState;

  chartRef = React.createRef<any>();

  handleChangeData = () => {
    this.setState(() => _.mapValues(initialState, changeNumberOfData));
  };

  componentDidMount() {
    if (this.chartRef) {
      console.log(this.chartRef.current.getItemByXY({ x: 150, y: 100 }));
    }
  }

  render() {
    const { data } = this.state;
    const style = {
      lineHeight: '24px',
      left: 300,
    };

    const label = {
      orientation: 'outer',
    };

    return (
      <div className="radial-bar-charts">
        <a href="javascript: void(0);" className="btn update" onClick={this.handleChangeData}>
          change data
        </a>
        <br />
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
            ref={this.chartRef}
          >
            <RadialBar minPointSize={15} background dataKey="uv">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index] as string} />
              ))}
              <LabelList position="insideEnd" fill="#fff" fontSize={10} />
            </RadialBar>
            <Legend
              iconSize={10}
              width={120}
              height={140}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style}
            />
            <Tooltip />
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
            <Legend
              iconSize={10}
              width={120}
              height={140}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style}
            />
            <Tooltip />
          </RadialBarChart>
        </div>

        <p>RadialBarChart which has two RadialBar</p>
        <div className="radial-bar-chart-wrapper">
          <ResponsiveContainer>
            <RadialBarChart
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="20%"
              outerRadius="90%"
              startAngle={180}
              endAngle={0}
            >
              <RadialBar minPointSize={15} background dataKey="uv" />
              <RadialBar minPointSize={15} background dataKey="amt" />
              <Tooltip shared />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        <p>RadialBarChart wrapped by ResponsiveContainer</p>
        <div className="radial-bar-chart-wrapper">
          <ResponsiveContainer>
            <RadialBarChart data={data} cx="50%" cy="50%" innerRadius="20%" outerRadius="90%">
              <Tooltip shared={false} />
              <RadialBar minPointSize={15} label={label} background dataKey="uv" />
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
              startAngle={0}
              endAngle={180}
            >
              <Tooltip shared={false} />
              <PolarAngleAxis type="number" domain={[0, 100]} />
              <RadialBar stackId="stack" minPointSize={15} background dataKey="uv">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#8884d8" />
                ))}
              </RadialBar>
              <RadialBar stackId="stack" minPointSize={15} dataKey="uv" animationBegin={1500}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#83a6ed" />
                ))}
              </RadialBar>
              <Legend
                iconSize={10}
                width={120}
                height={140}
                layout="vertical"
                verticalAlign="middle"
                wrapperStyle={style}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
