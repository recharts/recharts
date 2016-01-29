import React from 'react';
import { expect } from 'chai';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Radar />', () => {
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

  it('renders 1 polygon in simple Radar', () => {
    const wrapper = render(
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        <Radar />
      </RadarChart>
    );
    expect(wrapper.find('polygon').length).to.equal(1);
  });

  it('renders 1 PolarGrid 1 PolarAngleAxis and 1 PolarRadiusAxis in simple Radar', () => {
    const wrapper = render(
      <RadarChart cx={300} cy={250} startAngle={45} innerRadius={20} outerRadius={150} width={600} height={500} data={data}>
        <Radar dataKey="value" fill="#9597E4" fillOpacity={0.6} stroke="#8889DD" strokeWidth={3} />
        <PolarGrid />
        <PolarAngleAxis />
        <PolarRadiusAxis orient="middle" angle={67.5}/>
      </RadarChart>
    );
    expect(wrapper.find('.layer-polar-grid').length).to.equal(1);
    expect(wrapper.find('.layer-polar-angle-axis').length).to.equal(1);
    expect(wrapper.find('.layer-polar-radius-axis').length).to.equal(1);
  });

  it('renders 8 angle grid angle line, 8 angle axis ticks, and 3 radius axis ticks', () => {
    const wrapper = render(
      <RadarChart cx={300} cy={250} startAngle={45} innerRadius={20} outerRadius={150} width={600} height={500} data={data} >
        <Radar dataKey="value" fill="#9597E4" fillOpacity={0.6} stroke="#8889DD" strokeWidth={3} />
        <PolarGrid />
        <PolarAngleAxis />
        <PolarRadiusAxis orient="middle" angle={67.5}/>
      </RadarChart>
    );
    expect(wrapper.find('.layer-polar-grid .layer-grid-angle line').length).to.equal(8);
    expect(wrapper.find('.layer-polar-angle-axis .axis-tick text').length).to.equal(8);
    expect(wrapper.find('.layer-polar-radius-axis .axis-ticks text').length).to.equal(3);
  });
});
