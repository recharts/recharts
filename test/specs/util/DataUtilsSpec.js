import { expect } from 'chai';
import { getPercentValue, validateCoordinateInRange,
  getBandSizeOfScale, getAnyElementOfObject,
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

describe('getBandSizeOfScale', () => {
  it('DataUtils.getBandSizeOfScale() should return 0 ', () => {
    expect(getBandSizeOfScale()).to.equal(0);
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

  it('DataUtils.parseSpecifiedDomain(["auto", "auto"], domain) should return domain ', () => {
    const result = parseSpecifiedDomain(['auto', 'auto'], domain);
    expect(result).to.deep.equal(domain);
  });

  it('DataUtils.parseSpecifiedDomain([-1, 120], domain) should return [-1, 120] ', () => {
    const result = parseSpecifiedDomain([-1, 120], domain);
    expect(result).to.deep.equal([-1, 120]);
  });

  const categoricalDomain = [0, 1, 2, 3, 4];
  it('DataUtils.parseSpecifiedDomain(1, categoricalDomain) should return categoricalDomain', () => {
    const result = parseSpecifiedDomain(1, categoricalDomain);
    expect(result).to.deep.equal(categoricalDomain);
  });

  it('DataUtils.parseSpecifiedDomain(["auto", "auto"], categoricalDomain) should return categoricalDomain', () => {
    const result = parseSpecifiedDomain(['auto', 'auto'], categoricalDomain);
    expect(result).to.deep.equal(categoricalDomain);
  });

  it('DataUtils.parseSpecifiedDomain([-1, 2], categoricalDomain) should return [-1, 0, 1, 2, 3, 4]', () => {
    const result = parseSpecifiedDomain([-1, 2], categoricalDomain);
    expect(result).to.deep.equal([-1, 0, 1, 2, 3, 4]);
  });

  it('DataUtils.parseSpecifiedDomain([-1, 2], categoricalDomain, true) should return [-1, 0, 1, 2]', () => {
    const result = parseSpecifiedDomain([-1, 2], categoricalDomain, true);
    expect(result).to.deep.equal([-1, 0, 1, 2]);
  });

  it('DataUtils.parseSpecifiedDomain(["auto", "auto"], [1]) should return [1]', () => {
    const result = parseSpecifiedDomain(['auto', 'auto'], [1]);
    expect(result).to.deep.equal([1]);
  });
});
