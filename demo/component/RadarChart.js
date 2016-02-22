import React from 'react';
import { Surface, Radar, RadarChart, PolarGrid, Legend,
         PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
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
        <p>A simple RadarChart</p>
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
        </RadarChart>

        <p>A RadarChart of two students' score</p>
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <PolarGrid />
          <Legend />
          <PolarRadiusAxis domain={[0, 150]} label="score"/>
        </RadarChart>

        <p>RadarChart wrapped by ResponsiveContainer</p>
        <div style={{ width: '100%', height: '100%' }}>
          <ResponsiveContainer>
            <RadarChart data={data}>
              <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}


export default RadarChartDemo;
