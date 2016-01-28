import React from 'react';
import { expect } from 'chai';
import { Surface, PolarGrid } from 'recharts';
import { render } from 'enzyme';

describe('<PolarGrid />', () => {
  let polarAngles = [0, 30, 60, 90, 145, 180, 200, 270, 300],
    polarRadius = [10, 20, 40, 80];

  let wrapper = render(
    <Surface width={500} height={500}>
      <PolarGrid
        cx={250}
        cy={250}
        outerRadius={200}
        width={500}
        height={500}
        polarAngles={polarAngles}
        polarRadius={polarRadius} />
    </Surface>
  );

  it('renders 9 lines in simple PolarGrid', () => {
    expect(wrapper.find('line').length).to.equal(9);
  });

  it('renders 4 polygon in simple PolarGrid', () => {
    expect(wrapper.find('.concentric-polygon').length).to.equal(4);
  });
});