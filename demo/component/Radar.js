import React from 'react';
import { Surface, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import DemoRadarItem from './DemoRadarItem';

class RadarDemo extends React.Component {
  render() {
    const data = [
        { name: 'iPhone 3GS', value: 420, half: 210 },
        { name: 'iPhone 4', value: 460, half: 230 },
        { name: 'iPhone 4s', value: 999, half: 500 },
        { name: 'iPhone 5', value: 500, half: 250 },
        { name: 'iPhone 5s', value: 864, half: 432 },
        { name: 'iPhone 6', value: 650, half: 325 },
        { name: 'iPhone 6s', value: 765, half: 383 },
        { name: 'iPhone 5se', value: 365, half: 183 },
    ];

    // return (
    //   <Surface width={500} height={1000}>
    //     <Radar orientation="outer" cx={250} cy={250} concentricPathType="circle" outerRadius={160} data={data} />
    //     <Radar cx={250} cy={750} gridNumber={5} outerRadius={200} data={data02} />
    //   </Surface>
    // );

    return (
      <div>
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
          <Radar />
          <PolarGrid />
          <PolarAngleAxis />
          <PolarRadiusAxis />
        </RadarChart>

        <RadarChart cx={300} cy={250} startAngle={45} innerRadius={20} outerRadius={150}
          width={600} height={500} data={data}
        >
          <Radar dataKey="value" fill="#9597E4" fillOpacity={0.6} stroke="#8889DD" strokeWidth={3} />
          <PolarGrid />
          <PolarAngleAxis />
          <PolarRadiusAxis orient="middle" angle={67.5}/>
        </RadarChart>

        <RadarChart cx={300} cy={250} startAngle={0} innerRadius={20} outerRadius={150} clockWise
          width={600} height={500} data={data} shape={<DemoRadarItem />}
        >
          <Radar dataKey="value" />
          <Radar dataKey="half" />
          <PolarGrid innerRadius={0} outerRadius={180} gridType="polygon" gridCount={4} />
          <PolarAngleAxis dataKey="name" outerRadius={220} orient="inner" fill="#8889DD" fontSize={8} />
          <PolarRadiusAxis orient="right" startAngle={45} fill="#333"/>
        </RadarChart>
      </div>
    );
  }
}

export default RadarDemo;
