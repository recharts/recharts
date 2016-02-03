import React from 'react';
import { expect } from 'chai';
import { Surface, Curve } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Curve />', () => {
  const points = [
    { x: 10, y: 10 },
    { x: 25, y: 40 },
    { x: 40, y: 10 },
    { x: 55, y: 40 },
    { x: 70, y: 10 },
  ];

  const points02 = [
    { x: 10, y: 100 },
    { x: 25, y: 400 },
    { x: 40, y: 100 },
    { x: 55, y: 400 },
    { x: 70, y: 100 },
  ];

  it('renders 1 curve', () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Curve stroke="#000" fill="none" type="monotone" points={points} />
      </Surface>
    );

    expect(wrapper.find('.recharts-curve').length).to.equal(1);
  });

  it('renders 1 vertical layout area', () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Curve stroke="#000" fill="none" type="monotone" points={points} baseLineType="vertical" baseLine={0} />
      </Surface>
    );

    expect(wrapper.find('.recharts-curve').length).to.equal(1);
  });

  it('renders 1 horizontal layout area', () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Curve stroke="#000" fill="none" type="monotone" points={points} baseLineType="horizontal" baseLine={0} />
      </Surface>
    );

    expect(wrapper.find('.recharts-curve').length).to.equal(1);
  });

  it('renders 1 area', () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Curve stroke="#000" fill="none" type="monotone" points={points} baseLineType="curve" baseLine={points02} />
      </Surface>
    );

    expect(wrapper.find('.recharts-curve').length).to.equal(1);
  });

  it('Not render when points is empty', () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Curve stroke="#000" fill="none" type="monotone" points={[]} />
      </Surface>
    );

    expect(wrapper.find('.recharts-curve').length).to.equal(0);
  });
});
