import React, { Component } from 'react';
import { PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer, Sector,
  Label, LabelList } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { changeNumberOfData } from './utils';

const colors = scaleOrdinal(schemeCategory10).range();

const data01 = [
  { name: 'Group A', value: 400, v: 89 },
  { name: 'Group B', value: 300, v: 100 },
  { name: 'Group C', value: 200, v: 200 },
  { name: 'Group D', value: 200, v: 20 },
  { name: 'Group E', value: 278, v: 40 },
  { name: 'Group F', value: 189, v: 60 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];

const data03 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
  { name: 'E1', value: 200 },
  { name: 'E2', value: 34 },
  { name: 'E3', value: 44 },
  { name: 'F1', value: 89 },
  { name: 'F2', value: 49 },
  { name: 'F3', value: 51 },
];

const initialState = { data01, data02, data03 };

const renderLabelContent = (props) => {
  const { value, percent, x, y, midAngle } = props;

  return (
    <g transform={`translate(${x}, ${y})`} textAnchor={ (midAngle < -90 || midAngle >= 90) ? 'end' : 'start'}>
      <text x={0} y={0}>{`Count: ${value}`}</text>
      <text x={0} y={20}>{`(Percent: ${(percent * 100).toFixed(2)}%)`}</text>
    </g>
  );
};
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
        {`Count ${payload.value}`}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(percent: ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class Demo extends Component {

  static displayName = 'PieChartDemo';

  onPieEnter = (data, index, e) => {
    this.setState({
      activeIndex: index,
    });
  };

  state = {
    ...initialState,
    activeIndex: 0,
    animation: false,
  };

  handleChangeData = () => {
    this.setState(() => _.mapValues(initialState, changeNumberOfData));
  };

  handleChangeAnimation = () => {
    this.setState({
      animation: !this.state.animation,
    });
  };

  handlePieChartEnter = (a, b, c) => {
    console.log(a, b, c);
  };

  handleEnter = (e, activeIndex) => this.setState({ activeIndex });
  handleLeave = () => this.setState({ activeIndex: -1 });

  render () {
    const { data01, data02, data03 } = this.state;

    return (
      <div className="pie-charts">
        <a
          href="javascript: void(0);"
          className="btn update"
          onClick={this.handleChangeData}
        >
          change data
        </a>
        <br/>
        <p>Simple PieChart</p>
        <div className="pie-chart-wrapper">
          <button onClick={this.handleChangeAnimation}>change animation</button>
          <PieChart width={800} height={400}>
            <Legend />
            <Pie
              data={data01}
              dataKey="value"
              cx={200}
              cy={200}
              startAngle={180}
              endAngle={0}
              outerRadius={80}
              label
            >
              {
                data01.map((entry, index) => (
                  <Cell key={`slice-${index}`} fill={colors[index % 10]}/>
                ))
              }
              <Label value="test" position="outside" />
              <LabelList position="outside" />
            </Pie>
            <Pie
              data={data02}
              dataKey="value"
              cx={600}
              cy={200}
              startAngle={180}
              endAngle={-180}
              innerRadius={60}
              outerRadius={80}
              label={renderLabelContent}
              paddingAngle={5}
              isAnimationActive={this.state.animation}
            >
              {
                data02.map((entry, index) => (
                  <Cell key={`slice-${index}`} fill={colors[index % 10]}/>
                ))
              }
              <Label width={50} position="center">
                测试换行 测试杭欢
              </Label>
            </Pie>
          </PieChart>
        </div>


        <p>PieChart with two donut</p>
        <div className="pie-chart-wrapper">
          <PieChart width={400} height={400}>
            <Legend verticalAlign="top"/>
            <Pie data={data01} dataKey="value" cx={200} cy={200} innerRadius={50} outerRadius={80}/>
            <Pie data={data03} dataKey="value" cx={200} cy={200} innerRadius={80} outerRadius={100}/>
          </PieChart>
        </div>

        <p>PieChart wrapped by ResponsiveContainer</p>
        <div className="pie-chart-wrapper" style={{ width: '50%', height: '100%', backgroundColor: '#f5f5f5' }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={data01} nameKey="name" dataKey="value" innerRadius="25%" outerRadius="40%"/>
              <Pie data={data01} dataKey="v" innerRadius="45%" outerRadius="80%"/>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <p>PieChart wrapped by ResponsiveContainer</p>
        <div className="pie-chart-wrapper" style={{ width: '50%', height: '100%', backgroundColor: '#f5f5f5' }}>
          <ResponsiveContainer>
            <PieChart onMouseEnter={this.handlePieChartEnter}>
              <Pie
                data={data01}
                dataKey="value"
                innerRadius="25%"
                outerRadius="40%"
                activeIndex={this.state.activeIndex}
                activeShape={renderActiveShape}
                onMouseEnter={this.onPieEnter}
                isAnimationActive={false}
              >
                {
                  data01.map((entry, index) => (
                    <Cell key={`slice-${index}`} fill={colors[index % 10]}/>
                  ))
                }
                <Label value="test" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <p>PieChart has bug about tooltip</p>
        <div className="pie-chart-wrapper" style={{ width: '50%', height: '100%', backgroundColor: '#f5f5f5' }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data01}
                dataKey="value"
                innerRadius="25%"
                outerRadius="40%"
                onMouseEnter={this.handleEnter}
                onMouseLeave={this.handleLeave}
              >
                <Tooltip />
                {
                  data01.map((entry, index) => (
                    <Cell
                      key={`slice-${index}`}
                      fill={colors[index % 10]}
                      fillOpacity={this.state.activeIndex === index ? 1 : 0.25}
                    />
                  ))
                }
                <Label value="test" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

