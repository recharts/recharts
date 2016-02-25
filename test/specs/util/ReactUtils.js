import React from 'react';
import { expect } from 'chai';
import { ScatterChart, Scatter, CartesianGrid, Tooltip, XAxis, YAxis, ZAxis, CartesianAxis } from 'recharts';
import { getPresentationAttributes, filterEventAttributes,
  getDisplayName
} from '../../../src/util/ReactUtils';
import { mount, render } from 'enzyme';

describe('ReactUtils', () => {

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

  it('getPresentationAttributes return presentation attributes', () => {
    const result = getPresentationAttributes(
      {
        stroke: '#000',
        fill: '#000',
        r: 6,
      }
    );

    expect(result).to.include.keys('stroke', 'fill');
    expect(result).to.not.include.keys('r');
  });


});
