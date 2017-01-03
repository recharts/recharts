import { expect } from 'chai';
import { scaleLinear, scaleBand } from 'd3-scale';
import { getPercentValue, validateCoordinateInRange,
  getBandSizeOfAxis, getAnyElementOfObject,
  parseSpecifiedDomain } from '../../../src/util/DataUtils';

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

describe('validateCoordinateInRange', () => {
  it('DataUtils.validateCoordinateInRange(1) should return false ', () => {
    expect(validateCoordinateInRange(1)).to.equal(false);
  });
});

describe('getBandSizeOfAxis', () => {
  it('DataUtils.getBandSizeOfAxis() should return 0 ', () => {
    expect(getBandSizeOfAxis()).to.equal(0);
  });

  it('DataUtils.getBandSizeOfAxis({ type: "category", scale }) should return 0 ', () => {
    const axis = { type: 'category', scale: scaleBand().domain([0, 1, 2, 3]).range([0, 100]) };
    expect(getBandSizeOfAxis(axis)).to.equal(25);
  });

  it('DataUtils.getBandSizeOfAxis({ type: "number", scale }, ticks) should return 0 ', () => {
    const axis = { type: 'number' };
    const ticks = [{ coordinate: 13 }, { coordinate: 15 }, { coordinate: 20 }];
    expect(getBandSizeOfAxis(axis, ticks)).to.equal(2);
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

describe('parseSpecifiedDomain', () => {
  const domain = [20, 100];
  it('DataUtils.parseSpecifiedDomain(1, domain) should return domain ', () => {
    expect(parseSpecifiedDomain(1, domain)).to.equal(domain);
  });

  it('DataUtils.parseSpecifiedDomain(["auto", "auto"], domain) should return null ', () => {
    const result = parseSpecifiedDomain(['auto', 'auto'], domain);
    expect(result).to.deep.equal(domain);
  });

  it('DataUtils.parseSpecifiedDomain([-1, 120], domain) should return null ', () => {
    const result = parseSpecifiedDomain([-1, 120], domain);
    expect(result).to.deep.equal([-1, 120]);
  });
});
