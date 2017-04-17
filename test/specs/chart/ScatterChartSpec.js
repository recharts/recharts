import React from 'react';
import { expect } from 'chai';
import { ScatterChart, Scatter, CartesianGrid, Tooltip, XAxis, YAxis, ZAxis,
  CartesianAxis, Legend, Cross, Symbols } from 'recharts';
import { mount, render } from 'enzyme';

describe('ScatterChart of three dimension data', () => {
  const data01 = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];

  const data02 = [
    { x: 200, y: 260, z: 240 },
    { x: 240, y: 290, z: 220 },
    { x: 190, y: 290, z: 250 },
    { x: 198, y: 250, z: 210 },
    { x: 180, y: 280, z: 260 },
    { x: 210, y: 220, z: 230 },
  ];

  it('Render 2 Scatter', () => {
    const wrapper = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <ZAxis dataKey="z" range={[4, 20]} name="score" unit="km" />
        <CartesianGrid />
        <Scatter name="A school" data={data01} fillOpacity={0.3} fill="#ff7300" />
        <Scatter name="B school" data={data02} fill="#347300" />
        <Tooltip />
        <Legend />
      </ScatterChart>
    );

    expect(wrapper.find('.recharts-scatter').length).to.equal(2);
    expect(wrapper.find('.recharts-legend-item').length).to.equal(2);
    expect(wrapper.find('.recharts-scatter-symbol').length).to.equal(data01.length + data02.length);
    expect(wrapper.find('.recharts-scatter-symbol path').length).to.equal(data01.length + data02.length);
  });

  it('Don\'t render any symbols when data is empty', () => {
    const wrapper = render(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <ZAxis dataKey="z" range={[4, 20]} name="score" unit="km" />
        <CartesianGrid />
        <Scatter name="A school" data={[]} fillOpacity={0.3} fill="#ff7300" />
        <Tooltip />
        <Legend layout="vertical" />
      </ScatterChart>
    );

    expect(wrapper.find('.recharts-symbol').length).to.equal(0);
  });

  it('mouse enter on one circle will trigger one Cross', () => {
    const wrapper = mount(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <ZAxis dataKey="z" range={[4, 20]} name="score" unit="km" />
        <CartesianGrid />
        <Scatter name="A school" data={data01} fillOpacity={0.3} fill="#ff7300" />
        <Scatter name="B school" data={data02} fill="#347300" />
        <Tooltip />
        <Legend />
      </ScatterChart>
    );

    const symbols = wrapper.find(Symbols);
    const firstSymbol = symbols.first();
    firstSymbol.simulate('mouseEnter');
  });

});

describe('ScatterChart of two dimension data', () => {
  const data = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];

  const wrapper = render(
    <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <XAxis dataKey={'x'} name="stature" unit="cm" />
      <YAxis dataKey={'y'} name="weight" unit="kg" />
      <Scatter line name="A school" data={data} fill="#ff7300" />
    </ScatterChart>
  );

  it('renders 6 circles in simple ScatterChart', () => {
    expect(wrapper.find('.recharts-symbols').length).to.equal(6);
  });
  it('renders 1 jointed line when line is setted to be true', () => {
    expect(wrapper.find('.recharts-scatter-line').length).to.equal(1);
  });

});
