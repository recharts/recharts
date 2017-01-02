import React from 'react';
import { expect } from 'chai';
import { LineChart, Line, Bar } from 'recharts';
import { getPresentationAttributes, filterEventAttributes, filterEventsOfChild,
  getDisplayName, withoutType, validateWidthHeight, filterSvgElements,
} from '../../../src/util/ReactUtils';
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

  it('getDisplayName return the same of function when has a function as input', () => {
    function test() {

    }
    const result = getDisplayName(test);

    expect(result).to.equal('test');
  });

  it('getDisplayName return the "Component" when has an object as input', () => {
    const test = {};
    const result = getDisplayName(test);

    expect(result).to.equal('Component');
  });

  it('filterEventAttributes return event attributes', () => {
    const result = filterEventAttributes(
      {
        a: 1,
        onMouseEnter: () => {},
      }
    );
    expect(result).to.include.keys('onMouseEnter');
    expect(result).to.not.include.keys('a');
  });

  it('filterEventAttributes return null when input is not a react element', () => {
    expect(filterEventAttributes(null)).to.equal(null);
    expect(filterEventAttributes(() => {})).to.equal(null);
    expect(filterEventAttributes(1)).to.equal(null);
  });

  it('filterEventsOfChild return null when input is not a props', () => {
    expect(filterEventsOfChild(null)).to.equal(null);
    expect(filterEventsOfChild(1)).to.equal(null);
  });

  it('validateWidthHeight return false when input is not a react element', () => {
    expect(validateWidthHeight({ a: 1 })).to.equal(false);
    expect(validateWidthHeight(() => {})).to.equal(false);
  });

  it('validateWidthHeight return false when a react element has width or height smaller than 0', () => {
    const wrapper = mount((
      <LineChart width={0} height={0}>
        <Line dataKey="a" />
        <Line dataKey="b" />
        <Bar dataKey="c" />
      </LineChart>
    ));
    expect(validateWidthHeight(wrapper)).to.equal(false);
  });

  it('getPresentationAttributes return presentation attributes', () => {
    const result = getPresentationAttributes(
      {
        stroke: '#000',
        fill: '#000',
        r: 6,
      }
    );

    expect(result).to.include.keys('stroke', 'fill', 'r');
  });

  it('withoutType return children except specified type', () => {
    const wrapper = mount((
      <LineChart width={200} height={200}>
        <Line dataKey="a" />
        <Line dataKey="b" />
        <Bar dataKey="c" />
      </LineChart>
    ));
    const children = wrapper.props().children;

    expect(withoutType(children, Bar).length).to.equal(2);
    expect(withoutType(children, [Bar, Line]).length).to.equal(0);
  });


  it('filterSvgElements filter children which are svg elements', () => {
    const wrapper = mount((
      <LineChart width={200} height={200}>
        <Line dataKey="a" />
        <Line dataKey="b" />
        <rect x="0" y="0" width="20" height="20" />
        <text x="0" y="0">12</text>
      </LineChart>
    ));
    const children = wrapper.props().children;

    expect(filterSvgElements(children).length).to.equal(2);
  });

  it('isChildrenEqual when children has no null children', () => {
    const wrapper = mount((
      <LineChart width={200} height={200}>
        <Line dataKey="a" />
        <Line dataKey="b" />
        <rect x="0" y="0" width="20" height="20" />
        <text x="0" y="0">12</text>
      </LineChart>
    ));

    expect(wrapper.props.children).to.equal(wrapper.props.children);
  });

  it('isChildrenEqual when children has null children', () => {
    const wrapper = mount((
      <LineChart width={200} height={200}>
        <Line dataKey="a" />
        <Line dataKey="b" />
        <rect x="0" y="0" width="20" height="20" />
        <text x="0" y="0">12</text>
        {null}
      </LineChart>
    ));

    expect(wrapper.props.children).to.equal(wrapper.props.children);
  });
});
