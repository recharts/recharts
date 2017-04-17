import React, { Component } from 'react';
import { Surface, Radar, RadarChart, PolarGrid, Legend, Tooltip,
  PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  LabelList, Label } from 'recharts';
import DemoRadarItem from './DemoRadarItem';
import { changeNumberOfData } from './utils';

const data = [
  { subject: 'Math', A: 120, B: 110 },
  { subject: 'Chinese', A: 98, B: 130 },
  { subject: 'English', A: 86, B: 130 },
  { subject: 'Geography', A: 99, B: 100 },
  { subject: 'Physics', A: 85, B: 90 },
  { subject: 'History', A: 65, B: 85 },
];

const initilaState = { data };

export default class Demo extends Component {

  static displayName = 'RadarChartDemo';

  constructor() {
    super();

    this.state = initilaState;
    this.handleChangeData = this.handleChangeData.bind(this);
  }

  handleChangeData() {
    this.setState(() => _.mapValues(initilaState, changeNumberOfData));
  }

  handleMouseEnter(props) {
    console.log(props);
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <a
          href="javascript: void(0);"
          className="btn update"
          onClick={this.handleChangeData}
        >
          change data
        </a>
        <br/>
        <p>A simple RadarChart</p>
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>

        <p>A RadarChart of two students' score</p>
        <RadarChart
          cx={300}
          cy={250}
          outerRadius={150}
          width={600}
          height={500}
          data={data}
        >
          <PolarGrid />
          <Tooltip />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
            onMouseEnter={this.handleMouseEnter}
          />
          <Radar
            name="Lily"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
            animationBegin={180}
          />
          <Legend />
          <PolarRadiusAxis domain={[0, 150]} label="score"/>
        </RadarChart>

        <p>RadarChart wrapped by ResponsiveContainer</p>
        <div style={{ width: '100%', height: '100%' }}>
          <ResponsiveContainer>
            <RadarChart data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Tooltip />
              <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}>
                <LabelList />
              </Radar>
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}