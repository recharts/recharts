import React from 'react';
import { Surface, Radar, RadarChart, PolarGrid, Legend,
         PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import DemoRadarItem from './DemoRadarItem';

const data = [
    { subject: 'Math', A: 120, B: 110, fullMark: 150 },
    { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
    { subject: 'English', A: 86, B: 130, fullMark: 150 },
    { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
    { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
    { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

class RadarChartDemo extends React.Component {
  render() {
    return (
      <div>
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
          <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
          <PolarGrid />
          <Legend />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis hide domain={[0, 150]}/>
        </RadarChart>
      </div>
    );
  }
}
        // <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        //   <Radar dataKey="value"/>
        //   <PolarGrid />
        //   <PolarAngleAxis />
        //   <PolarRadiusAxis />
        // </RadarChart>

        // <RadarChart cx={300} cy={250} startAngle={45} innerRadius={0} outerRadius={150}
        //   width={600} height={500} data={data}
        // >
        //   <Radar dataKey="value" fill="#9597E4" fillOpacity={0.6} stroke="#8889DD" strokeWidth={3} />
        //   <PolarGrid />
        //   <PolarAngleAxis />
        //   <PolarRadiusAxis orient="middle" angle={67.5}/>
        // </RadarChart>

        // <RadarChart cx={300} cy={250} startAngle={0} innerRadius={0} outerRadius={150} clockWise
        //   width={600} height={500} data={data} shape={<DemoRadarItem />}
        // >
        //   <Radar dataKey="value" />
        //   <Radar dataKey="half" />
        //   <PolarGrid gridType="polygon" gridCount={4} />
        //   <PolarAngleAxis dataKey="name" radius={210} orient="inner" fill="#8889DD" fontSize={8} />
        //   <PolarRadiusAxis orient="right" fill="#666"/>
        // </RadarChart>

export default RadarChartDemo;
