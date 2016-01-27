import ReactDOM from 'react-dom';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { Surface, PolarGrid } from 'recharts';

describe('<PolarGrid />', () => {
  let polarAngles = [0, 30, 60, 90, 145, 180, 200, 270, 300],
    polarRadius = [10, 20, 40, 80];

  let component = ReactTestUtils.renderIntoDocument(
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
    const wrapper = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'line');
    expect(wrapper.length).to.equal(9);
  });

  it('renders 4 polygon in simple PolarGrid', () => {
    const wrapper = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'concentric-polygon');
    expect(wrapper.length).to.equal(4);
  });
});