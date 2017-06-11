import React from 'react';
import { expect } from 'chai';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { mount, render } from 'enzyme';
import sinon from 'sinon';

describe('<RadarChart />', () => {
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

  it('Render 1 polygon in a simple Radar', () => {
    const wrapper = render(
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        <Radar dataKey="value" />
      </RadarChart>
    );
    expect(wrapper.find('polygon').length).to.equal(1);
  });

  it('Render 8 dots when dot is setted to be true', () => {
    const wrapper = render(
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        <Radar isAnimationActive={false} dot dataKey="value" />
      </RadarChart>
    );
    expect(wrapper.find('.recharts-radar-dot').length).to.equal(8);
  });

  it('Render 8 labels when dot is setted to be true', () => {
    const wrapper = render(
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        <Radar isAnimationActive={false} label dataKey="value" />
      </RadarChart>
    );
    expect(wrapper.find('.recharts-label').length).to.equal(8);
  });

  it('Render 1 PolarGrid 1 PolarAngleAxis and 1 PolarRadiusAxis in simple Radar', () => {
    const wrapper = render(
      <RadarChart cx={300} cy={250} startAngle={45} innerRadius={20} outerRadius={150} width={600} height={500} data={data}>
        <Radar dataKey="value" fill="#9597E4" fillOpacity={0.6} stroke="#8889DD" strokeWidth={3} />
        <PolarGrid />
        <PolarAngleAxis />
        <PolarRadiusAxis orient="middle" angle={67.5} />
      </RadarChart>
    );
    expect(wrapper.find('.recharts-polar-grid').length).to.equal(1);
    expect(wrapper.find('.recharts-polar-angle-axis').length).to.equal(1);
    expect(wrapper.find('.recharts-polar-radius-axis').length).to.equal(1);
  });

  it('Render 8 angle grid angle line, 8 angle axis ticks, and 3 radius axis ticks', () => {
    const wrapper = render(
      <RadarChart cx={300} cy={250} startAngle={45} innerRadius={20} outerRadius={150} width={600} height={500} data={data} >
        <Radar dataKey="value" fill="#9597E4" fillOpacity={0.6} stroke="#8889DD" strokeWidth={3} />
        <PolarGrid />
        <PolarAngleAxis />
        <PolarRadiusAxis orient="middle" angle={67.5} />
      </RadarChart>
    );
    expect(wrapper.find('.recharts-polar-grid .recharts-polar-grid-angle line').length).to.equal(8);
    expect(wrapper.find('.recharts-polar-angle-axis .recharts-polar-angle-axis-tick').length).to.equal(8);
    expect(wrapper.find('.recharts-polar-radius-axis .recharts-polar-radius-axis-tick').length).to.equal(5);
  });

  it('click on Sector should invoke onClick callback', () => {
    const onClick = sinon.spy(Radar.prototype, 'render');
    const wrapper = mount(
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        <Radar dataKey="value" onClick={onClick} />
      </RadarChart>
    );
    const radars = wrapper.find(Radar);
    const radar = radars.at(0);

    radar.simulate('click');
    expect(onClick.callCount).to.equal(1);
  });
});
