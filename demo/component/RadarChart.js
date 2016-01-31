import React from 'react';
import { Surface, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import DemoRadarItem from './DemoRadarItem';

class RadarChartDemo extends React.Component {
  render() {
    const data = [
        { name: 'A', value: 420, half: 610 },
        { name: 'B', value: 460, half: 230 },
        { name: 'C', value: 999, half: 500 },
        { name: 'D', value: 500, half: 750 },
        { name: 'E', value: 864, half: 632 },
        { name: 'F', value: 650, half: 405 },
        { name: 'G', value: 765, half: 183 },
        { name: 'H', value: 365, half: 583 },
    ];

    return (
      <div>
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
          <Radar dataKey="value"/>
          <PolarGrid />
          <PolarAngleAxis />
          <PolarRadiusAxis />
        </RadarChart>

        <RadarChart cx={300} cy={250} startAngle={45} innerRadius={0} outerRadius={150}
          width={600} height={500} data={data}
        >
          <Radar dataKey="value" fill="#9597E4" fillOpacity={0.6} stroke="#8889DD" strokeWidth={3} />
          <PolarGrid />
          <PolarAngleAxis />
          <PolarRadiusAxis orient="middle" angle={67.5}/>
        </RadarChart>

        <RadarChart cx={300} cy={250} startAngle={0} innerRadius={0} outerRadius={150} clockWise
          width={600} height={500} data={data} shape={<DemoRadarItem />}
        >
          <Radar dataKey="value" />
          <Radar dataKey="half" />
          <PolarGrid gridType="polygon" gridCount={4} />
          <PolarAngleAxis dataKey="name" radius={210} orient="inner" fill="#8889DD" fontSize={8} />
          <PolarRadiusAxis orient="right" fill="#666"/>
        </RadarChart>
      </div>
    );
  }
}

export default RadarChartDemo;
