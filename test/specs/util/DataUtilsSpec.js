import { expect } from 'chai';
import { getPercentValue, validateCoordinateInRange,
  getBandSizeOfScale, getAnyElementOfObject,
  parseSpecifiedDomain, getCategoryOffsetOfDomain } from '../../../src/util/DataUtils';

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
  it('DataUtils.parseSpecifiedDomain(1, categoricalDomain, false, true) should return categoricalDomain', () => {
    const result = parseSpecifiedDomain(1, categoricalDomain, false, true);
    expect(result).to.deep.equal(categoricalDomain);
  });

  it('DataUtils.parseSpecifiedDomain(["auto", "auto"], categoricalDomain, false, true) should return categoricalDomain', () => {
    const result = parseSpecifiedDomain(['auto', 'auto'], categoricalDomain, false, true);
    expect(result).to.deep.equal(categoricalDomain);
  });

  it('DataUtils.parseSpecifiedDomain([-1, 2], categoricalDomain, false, true) should return [-1, 0, 1, 2, 3, 4]', () => {
    const result = parseSpecifiedDomain([-1, 2], categoricalDomain, false, true);
    expect(result).to.deep.equal([-1, 0, 1, 2, 3, 4]);
  });

  it('DataUtils.parseSpecifiedDomain([-1, 2], categoricalDomain, true, true) should return [-1, 0, 1, 2]', () => {
    const result = parseSpecifiedDomain([-1, 2], categoricalDomain, true, true);
    expect(result).to.deep.equal([-1, 0, 1, 2]);
  });

  it('DataUtils.parseSpecifiedDomain(["auto", "auto"], [1], false, true) should return [1]', () => {
    const result = parseSpecifiedDomain(['auto', 'auto'], [1], false, true);
    expect(result).to.deep.equal([1]);
  });

  it('DataUtils.parseSpecifiedDomain([0, 1], ["foo", "bar", "baz"], false, true) should return ["foo", "bar", "baz"]', () => {
    const result = parseSpecifiedDomain([0, 1], ['foo', 'bar', 'baz'], false, true);
    expect(result).to.deep.equal(['foo', 'bar', 'baz']);
  });

  it('DataUtils.parseSpecifiedDomain([0, 1], ["foo", "bar", "baz"], true, true) should return ["foo", "bar"]', () => {
    const result = parseSpecifiedDomain([0, 1], ['foo', 'bar', 'baz'], true, true);
    expect(result).to.deep.equal(['foo', 'bar']);
  });

  it('DataUtils.parseSpecifiedDomain([1, 2], ["foo", "bar", "baz"], false, true) should return ["foo", "bar", "baz"]', () => {
    const result = parseSpecifiedDomain([1, 2], ['foo', 'bar', 'baz'], false, true);
    expect(result).to.deep.equal(['foo', 'bar', 'baz']);
  });

  it('DataUtils.parseSpecifiedDomain([1, 2], ["foo", "bar", "baz"], true, true) should return ["bar", "baz"]', () => {
    const result = parseSpecifiedDomain([1, 2], ['foo', 'bar', 'baz'], true, true);
    expect(result).to.deep.equal(['bar', 'baz']);
  });

  it('DataUtils.parseSpecifiedDomain([-1, 3], ["foo", "bar", "baz"], false, true) should return [-1, "foo", "bar", "baz", 3]', () => {
    const result = parseSpecifiedDomain([-1, 3], ['foo', 'bar', 'baz'], false, true);
    expect(result).to.deep.equal([-1, 'foo', 'bar', 'baz', 3]);
  });
});

describe('getCategoryOffsetOfDomain', () => {
  it('DataUtils.getCategoryOffsetOfDomain([0, 1, 2, 3]) should return 0', () => {
    const result = getCategoryOffsetOfDomain([0, 1, 2, 3]);
    expect(result).to.equal(0);
  });

  it('DataUtils.getCategoryOffsetOfDomain([-2, -1, 0, 1, 2, 3]) should return 2', () => {
    const result = getCategoryOffsetOfDomain([-2, -1, 0, 1, 2, 3]);
    expect(result).to.equal(2);
  });

  it('DataUtils.getCategoryOffsetOfDomain([-2, -1, "foo", "bar"]) should return 2', () => {
    const result = getCategoryOffsetOfDomain([-2, -1, 'foo', 'bar']);
    expect(result).to.equal(2);
  });
});
