import React from 'react';
import { expect } from 'chai';
import { Surface, Brush, LineChart, Line } from 'recharts';
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

  it('Render 2 travellers and 1 slide in simple Brush', () => {
    const wrapper = render(
      <Brush x={100} y={50} width={400} height={40} data={data} />
    );
    expect(wrapper.find('.recharts-brush-traveller').length).to.equal(2);
    expect(wrapper.find('.recharts-brush-slide').length).to.equal(1);
  });

  it("Don't render any travellers or slide when data is empty in simple Brush", () => {
    const wrapper = render(
      <Brush x={100} y={50} width={400} height={40} data={[]} />
    );
    expect(wrapper.find('.recharts-brush-traveller').length).to.equal(0);
    expect(wrapper.find('.recharts-brush-slide').length).to.equal(0);
  });

  it('Render panorama when specified LineChart as child', () => {
    const wrapper = render(
      <Brush x={100} y={50} width={400} height={40} data={data}>
        <LineChart>
          <Line />
        </LineChart>
      </Brush>
    );

    expect(wrapper.find('.recharts-line').length).to.equal(1);
  });

  it('mouse enter and mouse leave on traveller will set isTextActive true', () => {
    const wrapper = mount(
      <Brush x={100} y={50} width={400} height={40} data={data} />
    );
    const layers = wrapper.find('.recharts-brush-traveller');
    const treavellerLayer = layers.at(1);
    treavellerLayer.simulate('mouseEnter');
    expect(wrapper.state().isTextActive).to.equal(true);
    treavellerLayer.simulate('mouseLeave');
    expect(wrapper.state().isTextActive).to.equal(false);
  });

  it('mouse down on brush traveller will set isTravellerMoving true', () => {
    const wrapper = mount(
      <Brush x={100} y={50} width={400} height={40} data={data} />
    );
    const layers = wrapper.find('.recharts-brush-traveller');
    const treavellerLayer = layers.at(1);
    treavellerLayer.simulate('mouseDown');
    expect(wrapper.state().isTravellerMoving).to.equal(true);

    wrapper.simulate('mouseMove');
  });

  it('mouse down on brush slide will set isSlideMoving true', () => {
    const wrapper = mount(
      <Brush x={100} y={50} width={400} height={40} data={data} />
    );
    const slide = wrapper.find('.recharts-brush-slide');
    slide.simulate('mouseDown');
    expect(wrapper.state().isSlideMoving).to.equal(true);

    wrapper.simulate('mouseMove');
    wrapper.simulate('mouseLeave');
  });
});
