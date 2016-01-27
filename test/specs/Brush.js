import ReactDOM from 'react-dom';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { Surface, Brush } from 'recharts';

describe('<Brush />', () => {
  let data = [
    '2015-10-01', '2015-10-02', '2015-10-03', '2015-10-04', '2015-10-05',
    '2015-10-06', '2015-10-07', '2015-10-08', '2015-10-09', '2015-10-10',
    '2015-10-11', '2015-10-12', '2015-10-13', '2015-10-14', '2015-10-15',
    '2015-10-16', '2015-10-17', '2015-10-18', '2015-10-19', '2015-10-20',
    '2015-10-21', '2015-10-22', '2015-10-23', '2015-10-24', '2015-10-25',
    '2015-10-26', '2015-10-27', '2015-10-28', '2015-10-29', '2015-10-30',
  ];
  let component = ReactTestUtils.renderIntoDocument(
    <Surface width={800} height={200}>
      <Brush x={100} y={50} width={400} height={40} data={data}/>
    </Surface>
  );

  it('renders 2 brushes in simple Brush', () => {
    const wrapper = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'layer-brush');
    expect(wrapper.length).to.equal(2);
  });

  // it('renders 1 brush-texts when hover on Brush', () => {
  //   const node = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'layer-recharts-bursh');
  //   ReactTestUtils.SimulateNative.mouseMove(node[0]);
  //   const wrapper = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'recharts-brush-texts');
  //   expect(wrapper.length).to.equal(1);
  // });
});