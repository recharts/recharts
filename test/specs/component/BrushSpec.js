import React from 'react';
import { expect } from 'chai';
import { Surface, Brush } from 'recharts';
import Layer from '../../../src/container/Layer';
import { mount, render } from 'enzyme';

describe('<Brush />', () => {
  const data = [
    '2015-10-01', '2015-10-02', '2015-10-03', '2015-10-04', '2015-10-05',
    '2015-10-06', '2015-10-07', '2015-10-08', '2015-10-09', '2015-10-10',
    '2015-10-11', '2015-10-12', '2015-10-13', '2015-10-14', '2015-10-15',
    '2015-10-16', '2015-10-17', '2015-10-18', '2015-10-19', '2015-10-20',
    '2015-10-21', '2015-10-22', '2015-10-23', '2015-10-24', '2015-10-25',
    '2015-10-26', '2015-10-27', '2015-10-28', '2015-10-29', '2015-10-30',
  ];

  it('renders 2 travellers and 1 slide in simple Brush', () => {
    const wrapper = render(
      <Surface width={800} height={200}>
        <Brush x={100} y={50} width={400} height={40} data={data}/>
      </Surface>
    );
    expect(wrapper.find('.recharts-brush-traveller').length).to.equal(2);
    expect(wrapper.find('.recharts-brush-slide').length).to.equal(1);
  });

  it('mouse enter on brush will set isTextActive true', () => {
    const wrapper = mount(
      <Brush x={100} y={50} width={400} height={40} data={data}/>
    );
    const layers = wrapper.find(Layer);
    const brushLayer = layers.at(1);
    brushLayer.simulate('mouseEnter');
    expect(wrapper.state().isTextActive).to.equal(true);
  });
});
