import ReactDOM from 'react-dom';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { PieChart, Pie } from 'recharts';

describe('<ScatterChart />', () => {
  const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
    {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
    {name: 'Group E', value: 278}, {name: 'Group F', value: 189}];
  
  let component = ReactTestUtils.renderIntoDocument(
    <PieChart width={800} height={400}>
      <Pie isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#ff7300" label/>
    </PieChart>
  );

  it('renders 6 sectors circles in simple PieChart', () => {
    const wrapper = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'recharts-sector');
    expect(wrapper.length).to.equal(6);
  });
});