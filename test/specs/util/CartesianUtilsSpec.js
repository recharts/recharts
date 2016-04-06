import { expect } from 'chai';
import { calculateActiveTickIndex, calculateDomainOfTicks
 } from '../../../src/util/CartesianUtils';

describe('calculateActiveTickIndex', () => {
  const ticks = [
    {coordinate: 0},
    {coordinate: 12},
    {coordinate: 14},
    {coordinate: 15},
  ];
  it('calculateActiveTickIndex(12, ticks) should return 1', () => {
    expect(calculateActiveTickIndex(12, ticks)).to.equal(1);
  });

  it('calculateActiveTickIndex(-1, ticks) should return 0', () => {
    expect(calculateActiveTickIndex(-1, ticks)).to.equal(0);
  });

  it('calculateActiveTickIndex(16, ticks) should return 3', () => {
    expect(calculateActiveTickIndex(16, ticks)).to.equal(3);
  });
});

describe('calculateDomainOfTicks', () => {
  const ticks = [1, 5, 2, 3, 3];

  it('calculateDomainOfTicks([1, 5, 2, 3, 3], "number") should return [1, 5]', () => {
    const result = calculateDomainOfTicks(ticks, 'number');
    expect(result).to.deep.equal([1, 5]);
  });

  it('calculateDomainOfTicks([1, 5, 2, 3, 3], "category") should return [1, 5, 2, 3, 3]', () => {
    const result = calculateDomainOfTicks(ticks, 'category');
    expect(result).to.deep.equal(ticks);
  });

});

