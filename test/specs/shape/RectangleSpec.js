import React from 'react';
import { expect } from 'chai';
import { Surface, Rectangle } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Rectangle />', () => {
  it('Render 1 rectangle in simple Rectangle', () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Rectangle x={50} y={50} width={80} height={100} radius={[5, 10, 8, 15]} fill="#ff7300" />
      </Surface>
    );

    expect(wrapper.find('.recharts-rectangle').length).to.equal(1);
  });

  it('Render 1 rectangle in simple Rectangle', () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Rectangle x={50} y={50} width={80} height={100} radius={5} fill="#ff7300" />
      </Surface>
    );

    expect(wrapper.find('.recharts-rectangle').length).to.equal(1);
  });

  it('Render 4 arc when height < 0', () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Rectangle x={50} y={200} width={80} height={-100} radius={5} fill="#ff7300" />
      </Surface>
    );

    const rects = wrapper.find('.recharts-rectangle');
    expect(rects.length).to.equal(1);
    const path = rects[0].attribs.d;
    expect(path).to.not.be.empty;
    expect(path.length - path.split('A').join('').length).to.equal(4);
  });

  it("Dont't Render anything when height === 0 || width === 0", () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Rectangle x={50} y={200} width={80} height={0} radius={5} fill="#ff7300" />
        <Rectangle x={50} y={200} width={0} height={30} radius={5} fill="#ff7300" />
      </Surface>
    );

    const rects = wrapper.find('.recharts-rectangle');
    expect(rects.length).to.equal(0);
  });

  it('Don\'t render any path when x, y, width or height is not a number', () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Rectangle x="a" y={50} width={80} height={100} fill="#ff7300" />
        <Rectangle x={50} y="b" width={80} height={100} fill="#ff7300" />
        <Rectangle x={50} y={50} width="c" height={100} fill="#ff7300" />
        <Rectangle x={50} y={50} width={80} height="d" fill="#ff7300" />
      </Surface>
    );

    expect(wrapper.find('.recharts-rectangle').length).to.equal(0);
  });
});
