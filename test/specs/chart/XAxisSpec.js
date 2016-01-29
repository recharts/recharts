import React from 'react';
import { expect } from 'chai';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianAxis } from 'recharts';
import { mount, render } from 'enzyme';

describe('<XAxis />', () => {
  const data = [{x: 100, y: 200, z: 200}, {x: 120, y: 100, z: 260},
    {x: 170, y: 300, z: 400}, {x: 140, y: 250, z: 280},
    {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}];
  
  let wrapper = mount(
    <ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
      <XAxis dataKey={'x'} name='stature' unit='cm'/>
      <YAxis dataKey={'y'} name='weight' unit='kg'/>
      <Scatter name='A school' data={data} fill='#ff7300'/>
    </ScatterChart>
  );

  it('renders 1 x-CartesianAxis and 1 y-CartesianAxis ticks in ScatterChart', () => {
    expect(wrapper.find(CartesianAxis).length).to.equal(2);
  });
});