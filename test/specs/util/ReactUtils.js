import React from 'react';
import { expect, assert } from 'chai';
import { ScatterChart, Scatter, CartesianGrid, Tooltip, XAxis, YAxis, ZAxis, CartesianAxis } from 'recharts';
import { getPresentationAttributes, getEventAttributes } from '../../../src/util/ReactUtils';
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

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ScatterChart color={"#000000"} onClick={() => {}} width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey={"x"} name="stature" unit="cm"/>
        <YAxis dataKey={"y"} name="weight" unit="kg"/>
        <ZAxis dataKey={"z"} range={[4, 20]} name="score" unit="km"/>
        <CartesianGrid />
        <Scatter name="A school" data={data01} fillOpactity={0.3} fill="#ff7300"/>
        <Scatter name="B school" data={data02} fill="#347300"/>
        <Tooltip/>
      </ScatterChart>
    );
  });

  it('ReactUtils', () => {
    assert.isObject(getEventAttributes(wrapper.props()), 'getEventAttributes is an object');
  });

  it('ReactUtils', () => {
    assert.isObject(getPresentationAttributes(wrapper.props()), 'getPresentationAttributes is an object');
  });
});
