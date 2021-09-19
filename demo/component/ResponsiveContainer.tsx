import React, { Component } from 'react';
import { changeNumberOfData } from './utils';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
  Line, LineChart, Legend, ResponsiveContainer, PieChart, Pie, Bar,
  BarChart, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ComposedChart,
  RadialBarChart, RadialBar, Treemap } from 'recharts';
import * as _ from 'lodash';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, time: 1 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, time: 3 },
];
const data01 = [
  { day: '05-01', weather: 'sunny' },
  { day: '05-02', weather: 'sunny' },
  { day: '05-03', weather: 'cloudy' },
  { day: '05-04', weather: 'rain' },
  { day: '05-05', weather: 'rain' },
  { day: '05-06', weather: 'cloudy' },
  { day: '05-07', weather: 'cloudy' },
  { day: '05-08', weather: 'sunny' },
  { day: '05-09', weather: 'sunny' },
];
const data02 = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
];

const data03 = [
  { name: 'Group A', value: 400, v: 89 },
  { name: 'Group B', value: 300, v: 100 },
  { name: 'Group C', value: null, v: 200 },
  { name: 'Group D', value: 200, v: 20 },
  { name: 'Group E', value: 278, v: 40 },
  { name: 'Group F', value: 189, v: 60 },
];

const dataBch = [
  { name: 'food', uv: 2400, pv: 2013, amt: 4500, time: 1 },
  { name: 'cosmetic', uv: 3300, pv: 2000, amt: 6500, time: 2 },
  { name: 'storage', uv: 3200, pv: 1398, amt: 5000, time: 3 },
  { name: 'digital', uv: 2800, pv: 2800, amt: 4000, time: 4 },
];

const data04 = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const data05 = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
  { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
  { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

const data06 = [
  { name: 'Page A', uv: 590, pv: 800, amt: 1400},
  { name: 'Page B', uv: 868, pv: 967, amt: 1506},
  { name: 'Page C', uv: 1397, pv: 1098, amt: 989},
  { name: 'Page D', uv: 1480, pv: 1200, amt: 1228},
  { name: 'Page E', uv: 1520, pv: 1108, amt: 1100},
  { name: 'Page F', uv: 1400, pv: 680, amt: 1700}
];

const data07 = [
  { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8'},
  { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed'},
  { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1'},
  { name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d'},
  { name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c'},
  { name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57'},
  { name: 'unknown', uv: 6.67, pv: 4800, fill: '#ffc658'}
];

const data08 = [
  {
    name: 'axis',
    children: [
      { name: 'Axes', size: 1302 },
      { name: 'Axis', size: 24593 },
      { name: 'AxisGridLine', size: 652 },
      { name: 'AxisLabel', size: 636 },
      { name: 'CartesianAxes', size: 6703 },
    ],
  },
  {
    name: 'controls',
    children: [
      { name: 'AnchorControl', size: 2138 },
      { name: 'ClickControl', size: 3824 },
      { name: 'Control', size: 1353 },
      { name: 'ControlList', size: 4665 },
      { name: 'DragControl', size: 2649 },
      { name: 'ExpandControl', size: 2832 },
      { name: 'HoverControl', size: 4896 },
      { name: 'IControl', size: 763 },
      { name: 'PanZoomControl', size: 5222 },
      { name: 'SelectionControl', size: 7862 },
      { name: 'TooltipControl', size: 8435 },
    ],
  },
  {
    name: 'data',
    children: [
      { name: 'Data', size: 20544 },
      { name: 'DataList', size: 19788 },
      { name: 'DataSprite', size: 10349 },
      { name: 'EdgeSprite', size: 3301 },
      { name: 'NodeSprite', size: 19382 },
      {
        name: 'render',
        children: [
          { name: 'ArrowType', size: 698 },
          { name: 'EdgeRenderer', size: 5569 },
          { name: 'IRenderer', size: 353 },
          { name: 'ShapeRenderer', size: 2247 },
        ],
      },
      { name: 'ScaleBinding', size: 11275 },
      { name: 'Tree', size: 7147 },
      { name: 'TreeBuilder', size: 9930 },
    ],
  },
  {
    name: 'events',
    children: [
      { name: 'DataEvent', size: 7313 },
      { name: 'SelectionEvent', size: 6880 },
      { name: 'TooltipEvent', size: 3701 },
      { name: 'VisualizationEvent', size: 2117 },
    ],
  },
  {
    name: 'legend',
    children: [
      { name: 'Legend', size: 20859 },
      { name: 'LegendItem', size: 4614 },
      { name: 'LegendRange', size: 10530 },
    ],
  },
];
const data09 = [
  { name: 'Page A', uv: 4000 },
  { name: 'Page B', uv: 3000 },
  { name: 'Page C', uv: 2000 },
  { name: 'Page D'},
  { name: 'Page E', uv: 1890 },
  { name: 'Page F', uv: 2390 },
  { name: 'Page G', uv: 3490 },
];

const initialState = { data, data01, data02 };

export default class Demo extends Component {

  static displayName = 'ResponsiveContainerDemo';

  state = initialState;

  handleChangeData = () => {
    this.setState(() => _.mapValues(initialState, changeNumberOfData));
  };

  render() {
    const { data, data01, data02 } = this.state;

    return (
      <div className="area-charts">
        <a
          href="javascript: void(0);"
          className="btn update"
          onClick={this.handleChangeData}
        >
          change data
        </a>
        <br />

        <p>Stacked AreaChart in ResponseContainer</p>
        <div className="area-chart-wrapper" style={{ width: '100%', height: '400px' }}>
          <ResponsiveContainer>
            <AreaChart
              data={this.state.data}
              margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
              syncId="test"
            >
              <XAxis dataKey="time" type="number" label="province" />
              <YAxis />
              <Tooltip />
              <Area
                stackId="0"
                type="monotone"
                dataKey="pv"
                stroke="#387908"
                fill="#387908"
                animationBegin={1300}
                dot
              />
              <Legend />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <p>PieChart wrapped by ResponsiveContainer</p>
        <div className="pie-chart-wrapper" style={{ width: '100%', height: '400px', backgroundColor: '#f5f5f5' }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={data03} nameKey="name" dataKey="v" innerRadius="45%" outerRadius="80%" />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <p>A simple LineChart</p>
        <div className="line-chart-wrapper" style={{ width: '100%', height: '400px', backgroundColor: '#f5f5f5' }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <p>A simple BarChart</p>
        <div className="line-chart-wrapper" style={{ width: '100%', height: '400px', backgroundColor: '#f5f5f5' }}>
          <ResponsiveContainer>
            <BarChart width={400} height={400} data={dataBch}>
              <XAxis dataKey="name" />
              <YAxis yAxisId="a" />
              <YAxis yAxisId="b" orientation="right" />
              <Legend />
              <Tooltip />
              <CartesianGrid vertical={false} />
              <Bar yAxisId="a" dataKey="uv" >
                {
                  data.map((entry, index) => (
                    <Cell key={`cell-${index}`} />
                  ))
                }
              </Bar>
              <Bar yAxisId="b" dataKey="pv" label>
                {
                  data.map((entry, index) => (
                    <Cell key={`cell-${index}`} />
                  ))
                }
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>


        <p>MORE EXAMPLES!</p>
        <div className="line-chart-wrapper" style={{ float: 'left', width: '50%', height: '400px', backgroundColor: '#f5f5f5' }}>
          <ResponsiveContainer>
            <LineChart
              data={data04}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="line-chart-wrapper" style={{ float: 'left', width: '50%', height: '400px', backgroundColor: '#f5f5f5' }}>
          <ResponsiveContainer>
            <BarChart data={data04}>
              <XAxis dataKey="name" />
              <YAxis yAxisId="a" />
              <YAxis yAxisId="b" orientation="right" />
              <Legend />
              <Tooltip />
              <CartesianGrid vertical={false} />
              <Bar yAxisId="a" dataKey="uv" >
                {
                  data.map((entry, index) => (
                    <Cell key={`cell-${index}`} />
                  ))
                }
              </Bar>
              <Bar yAxisId="b" dataKey="pv" label>
                {
                  data.map((entry, index) => (
                    <Cell key={`cell-${index}`} />
                  ))
                }
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="line-chart-wrapper" style={{ float: 'left', width: '50%', height: '400px', backgroundColor: '#f5f5f5' }}>
          <ResponsiveContainer>
            <RadarChart outerRadius={150} data={data05}>
              <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <PolarGrid radialLines={true} />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="line-chart-wrapper" style={{ float: 'left', width: '50%', height: '400px', backgroundColor: '#f5f5f5' }}>
          <ResponsiveContainer>
            <ComposedChart
              data={data06}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="pv" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="line-chart-wrapper" style={{ float: 'left', width: '100%', height: '400px', backgroundColor: '#f5f5f5' }}>
          <ResponsiveContainer>
            <RadialBarChart innerRadius={20} outerRadius={140} barSize={20} data={data07}>
              <RadialBar label background dataKey="uv" />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        <div className="line-chart-wrapper" style={{ float: 'left', width: '100%', height: '600px', backgroundColor: '#f5f5f5' }}>
          <ResponsiveContainer>
            <Treemap
              data={data08}
              dataKey="size"
              aspectRatio={4 / 3}
              stroke="#fff"
              fill="#8884d8"
            />
          </ResponsiveContainer>
        </div>
        <div className="line-chart-wrapper" style={{ float: 'left', width: '100%', height: '400px', backgroundColor: '#f5f5f5' }}>
          <ResponsiveContainer>
            <AreaChart
              data={data09}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
          <ResponsiveContainer>
            <AreaChart
              data={data09}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
