import React from 'react';
import { expect } from 'chai';
import { Surface, Scatter, Symbols, Layer } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Scatter />', () => {
  const data = [
    { cx: 10, cy: 50, size: 64, payload: { x: 12, y: 23, z: 78 } },
    { cx: 50, cy: 50, size: 64, payload: { x: 12, y: 23, z: 78 } },
    { cx: 90, cy: 50, size: 64, payload: { x: 12, y: 23, z: 78 } },
    { cx: 130, cy: 50, size: 64, payload: { x: 12, y: 23, z: 78 } },
    { cx: 170, cy: 50, size: 64, payload: { x: 12, y: 23, z: 78 } },
  ];

  it('Render symbols in a simple Scatter', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Scatter
          points={data}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-scatter-symbol').length).to.equal(data.length);
  });


  it('Don\'t render any symbols when data is empty', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Scatter
          points={[]}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-scatter-symbol').length).to.equal(0);
  });

  it('Render customized symbols when shape is set to be a ReactElement', () => {
    const CustomizedShape = ({ cx, cy }) =>
      <circle cx={cx} cy={cy} r={5} className="customized-shape" />
    ;
    const wrapper = render(
      <Surface width={500} height={500}>
        <Scatter
          isAnimationActive={false}
          shape={<CustomizedShape />}
          points={data}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-shape').length).to.equal(data.length);
  });

  it('Render customized symbols when shape is set to be a function', () => {
    const renderCustomizedShape = ({ cx, cy }) =>
      <circle cx={cx} cy={cy} r={5} className="customized-shape" />
    ;
    const wrapper = render(
      <Surface width={500} height={500}>
        <Scatter
          isAnimationActive={false}
          shape={renderCustomizedShape}
          points={data}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-shape').length).to.equal(data.length);
  });

  it('Render customized line when line is set to be a ReactElement', () => {
    const CustomizedLine = ({ points }) =>
      <path d="M0,0L200,200" className="customized-line" />
    ;
    const wrapper = render(
      <Surface width={500} height={500}>
        <Scatter
          isAnimationActive={false}
          line={<CustomizedLine />}
          points={data}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-line').length).to.equal(1);
  });

  it('Render customized line when line is set to be a function', () => {
    const renderCustomizedLine = ({ points }) =>
      <path d="M0,0L200,200" className="customized-line" />
    ;
    const wrapper = render(
      <Surface width={500} height={500}>
        <Scatter
          isAnimationActive={false}
          line={renderCustomizedLine}
          points={data}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-line').length).to.equal(1);
  });


  it('mouse enter or mouse leave a symbol', () => {
    const wrapper = mount(
      <Surface width={500} height={500}>
        <Scatter
          isAnimationActive={false}
          points={data}
        />
      </Surface>
    );
    const layers = wrapper.find(Layer);
    const syb = layers.at(5);

    syb.simulate('mouseEnter');
    syb.simulate('mouseLeave');
    syb.simulate('click');
  });

});
