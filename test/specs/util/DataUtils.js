import React from 'react';
import { expect } from 'chai';
import { getPercentValue } from '../../../src/util/DataUtils';

describe('DataUtils', () => {
  it('DataUtils.getPercentValue("25%", 1) should return 0.25 ', () => {
    expect(getPercentValue('25%', 1)).to.equal(0.25);
  });
  it('DataUtils.getPercentValue(1)) should return 1', () => {
    expect(getPercentValue(1)).to.equal(1);
  });
  it('DataUtils.getPercentValue("120%", 100)) should return 1', () => {
    expect(getPercentValue('120%', 100)).to.equal(100);
  });
});
