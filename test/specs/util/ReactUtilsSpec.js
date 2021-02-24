import React from 'react';
import { expect } from 'chai';
import { LineChart, Line, Bar } from 'recharts';
import {
  getDisplayName,
  withoutType,
  validateWidthHeight,
  filterSvgElements,
  isSingleChildEqual,
  isChildrenEqual,
  findAllByType,
} from '../../../src/util/ReactUtils';
import { filterProps, adaptEventHandlers, adaptEventsOfChild } from '../../../src/util/types';
import { mount, render } from 'enzyme';

describe('ReactUtils', () => {
  it('getDisplayName return empty string when has a null as input', () => {
    const result = getDisplayName(null);

    expect(result).to.equal('');
  });

  it('getDisplayName return the same string when has a string as input', () => {
    const result = getDisplayName('test');

    expect(result).to.equal('test');
  });

  it('getDisplayName return the "Component" when has an object as input', () => {
    const test = {};
    const result = getDisplayName(test);

    expect(result).to.equal('Component');
  });

  it('adaptEventHandlers return event attributes', () => {
    const result = adaptEventHandlers({
      a: 1,
      onMouseEnter: () => {},
    });
    expect(result).to.include.keys('onMouseEnter');
    expect(result).to.not.include.keys('a');
  });

  it('adaptEventHandlers return null when input is not a react element', () => {
    expect(adaptEventHandlers(null)).to.equal(null);
    expect(adaptEventHandlers(() => {})).to.equal(null);
    expect(adaptEventHandlers(1)).to.equal(null);
  });

  it('adaptEventsOfChild return null when input is not a props', () => {
    expect(adaptEventsOfChild(null)).to.equal(null);
    expect(adaptEventsOfChild(1)).to.equal(null);
  });

  it('validateWidthHeight return false when input is not a react element', () => {
    expect(validateWidthHeight({ a: 1 })).to.equal(false);
    expect(validateWidthHeight(() => {})).to.equal(false);
  });

  it('validateWidthHeight return false when a react element has width or height smaller than 0', () => {
    const wrapper = mount(
      <LineChart width={0} height={0}>
        <Line dataKey="a" />
        <Line dataKey="b" />
        <Bar dataKey="c" />
      </LineChart>,
    );
    expect(validateWidthHeight(wrapper)).to.equal(false);
  });

  it('filterProps return presentation attributes', () => {
    const result = filterProps({
      stroke: '#000',
      fill: '#000',
      r: 6,
    });

    expect(result).to.include.keys('stroke', 'fill', 'r');
  });

  it('withoutType return children except specified type', () => {
    const wrapper = mount(
      <LineChart width={200} height={200}>
        <Line dataKey="a" />
        <Line dataKey="b" />
        <Bar dataKey="c" />
      </LineChart>,
    );
    const children = wrapper.props().children;

    expect(withoutType(children, Bar).length).to.equal(2);
    expect(withoutType(children, [Bar, Line]).length).to.equal(0);
  });

  it('filterSvgElements filter children which are svg elements', () => {
    const wrapper = mount(
      <LineChart width={200} height={200}>
        <Line dataKey="a" />
        <Line dataKey="b" />
        <rect x="0" y="0" width="20" height="20" />
        <text x="0" y="0">
          12
        </text>
      </LineChart>,
    );
    const children = wrapper.props().children;

    expect(filterSvgElements(children).length).to.equal(2);
  });

  it('isChildrenEqual when children has no null children', () => {
    const wrapper = mount(
      <LineChart width={200} height={200}>
        <Line dataKey="a" />
        <Line dataKey="b" />
        <rect x="0" y="0" width="20" height="20" />
        <text x="0" y="0">
          12
        </text>
      </LineChart>,
    );
    const children = wrapper.props().children;

    expect(isChildrenEqual(children, children)).to.be.true;
  });

  it('isChildrenEqual when children has null children', () => {
    const wrapper = mount(
      <LineChart width={200} height={200}>
        <Line dataKey="a" />
        <Line dataKey="b" />
        <rect x="0" y="0" width="20" height="20" />
        <text x="0" y="0">
          12
        </text>
        {null}
      </LineChart>,
    );
    const anotherWrapper = mount(
      <LineChart width={200} height={200}>
        <Line dataKey="a" />
        <Line dataKey="b" />
        <rect x="0" y="0" width="20" height="20" />
        <text x="0" y="0">
          12
        </text>
        {null}
      </LineChart>,
    );
    const children = wrapper.props().children;
    const anotherChildren = anotherWrapper.props().children;

    expect(isChildrenEqual(children, anotherChildren)).to.be.true;
  });

  it('isChildrenEqual return true when children has same props', () => {
    const wrapper = mount(
      <LineChart width={200} height={200}>
        <Line dataKey="a" />
        <Line dataKey="b" />
        <rect x="0" y="0" width="20" height="20" />
        <text x="0" y="0">
          12
        </text>
      </LineChart>,
    );
    const newWrapper = mount(
      <LineChart width={200} height={200}>
        <Line dataKey="a" />
        <Line dataKey="b" />
        <rect x="0" y="0" width="20" height="20" />
      </LineChart>,
    );

    expect(isChildrenEqual(wrapper.props().children, newWrapper.props().children)).to.be.false;
  });
  it('isChildrenEqual return false when single child are not equal', () => {
    const wrapper = mount(
      <LineChart width={200} height={200}>
        <Line dataKey="a" />
      </LineChart>,
    );
    const newWrapper = mount(
      <LineChart width={200} height={200}>
        <Line dataKey="b" />
      </LineChart>,
    );

    expect(isChildrenEqual(wrapper.props().children, newWrapper.props().children)).to.be.false;
  });

  it("isChildrenEqual return false when one has child and another don't has child", () => {
    const wrapper = mount(
      <LineChart width={200} height={200}>
        {null}
      </LineChart>,
    );
    const newWrapper = mount(
      <LineChart width={200} height={200}>
        <Line dataKey="b" />
      </LineChart>,
    );

    expect(isChildrenEqual(wrapper.props().children, newWrapper.props().children)).to.be.false;
  });

  it('isChildrenEqual return true when only has a child in an array', () => {
    const linesA = ['any'].map(entry => {
      return <Line dataKey={entry} />;
    });
    linesA.props = { any: 'A' };
    const linesB = ['any'].map(entry => {
      return <Line dataKey={entry} />;
    });
    linesB.props = { any: 'B' };

    const wrapper = mount(
      <LineChart width={200} height={200}>
        {linesA}
      </LineChart>,
    );
    const newWrapper = mount(
      <LineChart width={200} height={200}>
        {linesB}
      </LineChart>,
    );

    expect(isChildrenEqual(wrapper.props().children, newWrapper.props().children)).to.be.true;
  });

  it('findAllByType returns children that matched the type', () => {
    const children = [<div />, <Line key="a" />, null, <Bar />, undefined, <Line key="b" />, <Line key="c" />];
    const lineChildren = findAllByType(children, Line.displayName);
    expect(lineChildren.length).to.equal(3);
    expect(lineChildren.map(child => child.key)).to.deep.equal(['a', 'b', 'c']);
  });

  it('findAllByType includes children inside of the fragment', () => {
    const children = [
      <Line key="a" />,
      <div />,
      <>
        <Line key="b" />
        <Line key="c" />
        <Bar />
        <>
          <Line key="d" />,
        </>
      </>,
    ];
    const lineChildren = findAllByType(children, Line.displayName);
    expect(lineChildren.length).to.equal(4);
    expect(lineChildren.map(child => child.key)).to.deep.equal(['a', 'b', 'c', 'd']);
  });
});
