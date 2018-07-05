import { expect } from 'chai';
import { scaleLinear, scaleBand } from 'd3-scale';
import { getPercentValue, getBandSizeOfAxis, getAnyElementOfObject,
  calculateDomainOfTicks, parseSpecifiedDomain, hasDuplicate, parseScale,
  getTicksOfScale, getValueByDataKey, mathSign, offsetSign
} from '../../../src/util/DataUtils';

describe('getPercentValue', () => {
  it('DataUtils.getPercentValue("25%", 1) should return 0.25 ', () => {
    expect(getPercentValue('25%', 1)).to.equal(0.25);
  });
  it('DataUtils.getPercentValue("25%", "a") should return 0 ', () => {
    expect(getPercentValue('25%', 'a')).to.equal(0);
  });
  it('DataUtils.getPercentValue(1)) should return 1', () => {
    expect(getPercentValue(1)).to.equal(1);
  });
  it('DataUtils.getPercentValue("120%", 100)) should return 120', () => {
    expect(getPercentValue('120%', 100)).to.equal(120);
  });

  it('DataUtils.getPercentValue("120%", 100, 0, true)) should return 100', () => {
    expect(getPercentValue('120%', 100, 0, true)).to.equal(100);
  });
});

describe('getAnyElementOfObject', () => {
  it('DataUtils.getAnyElementOfObject() should return null ', () => {
    expect(getAnyElementOfObject()).to.equal(null);
  });

  it('DataUtils.getAnyElementOfObject({}) should return null ', () => {
    expect(getAnyElementOfObject({})).to.equal(null);
  });
});

describe('hasDuplicate', () => {
  it('of an object should return false when input value is not an array', () => {
    expect(hasDuplicate({})).to.be.false;
  });

  it('of [12, 12] should return true', () => {
    expect(hasDuplicate([12, 12])).to.be.true;
  });
});

describe('mathSign', () => {

  it('(0)', () => {
    expect(mathSign(0)).to.equal(0);
  });

  it('(100)', () => {
    expect(mathSign(100)).to.equal(1);
  });

  it('(-100)', () => {
    expect(mathSign(-100)).to.equal(-1);
  });
});