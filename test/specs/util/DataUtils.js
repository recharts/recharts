import React from 'react';
import { expect } from 'chai';
import DataUtils from '../../../src/util/DataUtils';

describe('DataUtils', () => {
  it('DataUtils.getPercentValue("25%", 1) should return 0.25 ', () => {
    expect(DataUtils.getPercentValue('25%', 1)).to.equal(0.25);
  });
  it('DataUtils.getPercentValue(1)) should return 1', () => {
    expect(DataUtils.getPercentValue(1)).to.equal(1);
  });
  it('DataUtils.getPercentValue("120%", 100)) should return 1', () => {
    expect(DataUtils.getPercentValue('120%', 100)).to.equal(100);
  });
});
