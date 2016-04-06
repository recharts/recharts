import React from 'react';
import { expect } from 'chai';
import { LineChart, Line, Bar } from 'recharts';
import { getPresentationAttributes, filterEventAttributes,
  getDisplayName, withoutType, validateWidthHeight,
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

  it('filterEventAttributes return event attributes', () => {
    const result = filterEventAttributes(
      {
        a: 1,
        onMouseEnter: () => {}
      }
    );
    expect(result).to.include.keys('onMouseEnter');
    expect(result).to.not.include.keys('a');
  });

  it('filterEventAttributes return null when input is not a react element', () => {
    expect(filterEventAttributes(null)).to.equal(null);
    expect(filterEventAttributes(() => {})).to.equal(null);
  });

  it('validateWidthHeight return false when input is not a react element', () => {
    expect(validateWidthHeight({a: 1})).to.equal(false);
    expect(validateWidthHeight(() => {})).to.equal(false);
  });

  it('validateWidthHeight return false when a react element has width or height smaller than 0', () => {
    const wrapper = mount((
      <LineChart width={0} height={0}>
        <Line dataKey="a"/>
        <Line dataKey="b"/>
        <Bar dataKey="c"/>
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
        <Line dataKey="a"/>
        <Line dataKey="b"/>
        <Bar dataKey="c"/>
      </LineChart>
    ));
    const children = wrapper.props().children;

    expect(withoutType(children, Bar).length).to.equal(2);
    expect(withoutType(children, [Bar, Line]).length).to.equal(0);
  });



});
