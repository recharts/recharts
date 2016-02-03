import React from 'react';
import { expect } from 'chai';
import LodashUtils from '../../../src/util/LodashUtils';

describe('LodashUtils', () => {

  it('LodashUtils.isString should return true of input "test"', () => {
    expect(LodashUtils.isString('test')).to.equal(true);
  });
  it('LodashUtils.isString should return true of input 1', () => {
    expect(LodashUtils.isString(1)).to.equal(false);
  });

  it('LodashUtils.isArray should return true of input []', () => {
    expect(LodashUtils.isArray([])).to.equal(true);
  });
  it('LodashUtils.isArray should return true of input "test"', () => {
    expect(LodashUtils.isArray("test")).to.equal(false);
  });

  it('LodashUtils.isNumber should return true of input 0', () => {
    expect(LodashUtils.isNumber(0)).to.equal(true);
  });
  it('LodashUtils.isNumber should return true of input "test"', () => {
    expect(LodashUtils.isNumber("test")).to.equal(false);
  });

  it('LodashUtils.isFunction should return true of input () => {}', () => {
    expect(LodashUtils.isFunction(() => {})).to.equal(true);
  });
  it('LodashUtils.isFunction should return true of input 0', () => {
    expect(LodashUtils.isFunction(0)).to.equal(false);
  });

  it('LodashUtils.range(1, 5) should return [1, 2, 3, 4]', () => {
    expect(LodashUtils.range(1, 5)).to.eql([1, 2, 3, 4]);
  });

  it('LodashUtils.getPercentValue("25%", 1) should return 0.25 ', () => {
    expect(LodashUtils.getPercentValue('25%', 1)).to.equal(0.25);
  });
  it('LodashUtils.getPercentValue(1)) should return 1', () => {
    expect(LodashUtils.getPercentValue(1)).to.equal(1);
  });
  it('LodashUtils.getPercentValue("120%", 100)) should return 1', () => {
    expect(LodashUtils.getPercentValue("120%", 100)).to.equal(100);
  });

  it('LodashUtils.getElementOfObject({a: 1, b: 2})) should return 1', () => {
    expect(LodashUtils.getElementOfObject({a: 1, b: 2})).to.equal(1);
  });

  it('LodashUtils.toPercentage(0.25)) should return 25%', () => {
    expect(LodashUtils.toPercentage(0.25)).to.equal('25%');
  });

  it('LodashUtils.toFixed(101, 2) should return 101.00', () => {
    const num = '101.00';
    expect(LodashUtils.toFixed(101, 2).toString()).to.eql(num);
  });

  it('LodashUtils.getUniqueId should generate a unique id each time', () => {
    const id01 = LodashUtils.getUniqueId();
    const id02 = LodashUtils.getUniqueId();

    expect(id01).to.not.equal(id02);
  });
});
