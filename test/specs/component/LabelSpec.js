import React from 'react';
import { mount, render } from 'enzyme';
import { expect } from 'chai';
import { Surface, Label } from 'recharts';

describe('<Label />', () => {
   const polarViewBox = {
      cx: 50,
      cy: 50,
      innerRadius: 20,
      outerRadius: 80,
      startAngle: 0,
      endAngle: 90,
    };
  it('Render polar labels (postion="center")', () => {
    const wrapper = render(
      <Surface>
        <Label viewBox={polarViewBox} value="text" position="center" />
      </Surface>
    );

    expect(wrapper.find('.recharts-label').length).to.equal(1);
  });

  it('Render polar labels (position="outside")', () => {
    const wrapper = render(
      <Surface>
        <Label viewBox={polarViewBox} value="text" position="outside" />
      </Surface>
    );

    expect(wrapper.find('.recharts-label').length).to.equal(1);
  });

  it('Render radial labels (position="insideStart")', () => {
    const wrapper = render(
      <Surface>
        <Label viewBox={polarViewBox} value="text" position="insideStart" />
      </Surface>
    );

    expect(wrapper.find('.recharts-radial-bar-label').length).to.equal(1);
  });

  it('Render radial labels (position="insideEnd")', () => {
    const wrapper = render(
      <Surface>
        <Label viewBox={polarViewBox} value="text" position="insideEnd" />
      </Surface>
    );

    expect(wrapper.find('.recharts-radial-bar-label').length).to.equal(1);
  });
  it('Render radial labels (position="end")', () => {
    const wrapper = render(
      <Surface>
        <Label viewBox={polarViewBox} value="text" position="end" />
      </Surface>
    );

    expect(wrapper.find('.recharts-radial-bar-label').length).to.equal(1);
  });
});
