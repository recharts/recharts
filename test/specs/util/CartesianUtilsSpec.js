import { expect } from 'chai';
import { scaleLinear, scaleBand } from 'd3-scale';
import {
  calculateActiveTickIndex,
  calculateDomainOfTicks,
  getDomainOfStackGroups,
  getDomainOfDataByKey,
  offsetSign,
  getTicksOfScale,
  appendOffsetOfLegend,
} from '../../../src/util/CartesianUtils';

describe('calculateActiveTickIndex', () => {
  const ticks = [
    { coordinate: 0, index: 0 },
    { coordinate: 12, index: 1 },
    { coordinate: 14, index: 2 },
    { coordinate: 15, index: 3 },
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

describe('getDomainOfStackGroups', () => {
  let stackData;

  before(() => {
    stackData = {
      a: {
        stackedData: [[[10, 14], [12, 16]], [[8, 14], [34, 11]]],
      },
      b: {
        stackedData: [[[9, 13], [11, 15]], [[12, 14], [25, 22]]],
      },
    };
  });

  it('correctly calculates the highest and lowest values in a stack of many values', () => {
    expect(getDomainOfStackGroups(stackData, 0, 1)).to.deep.equal([8, 34]);
  });

  it('deals with a null value without assuming it should be === 0', () => {
    stackData.a.stackedData[0][0][0] = null;

    expect(getDomainOfStackGroups(stackData, 0, 1)).to.deep.equal([8, 34]);
  });

  it('domain of all nulls should return [0, 0]', () => {
    stackData = {
      a: { stackedData: [[[null, null]]] },
    };

    expect(getDomainOfStackGroups(stackData, 0, 1)).to.deep.equal([0, 0]);
  });
});

describe('getDomainOfDataByKey', () => {
  describe('with type === "number"', () => {
    const data = [
      {
        x: 1,
        actual: 35.4,
        benchmark: 35.4,
      }, {
        x: 2,
        actual: 40,
      }, {
        x: 3,
        actual: 40.7,
      }, {
        x: 4,
        actual: 42.5,
      }, {
        x: 5,
        benchmark: 31.86,
      },
    ];

    it('should calculate the correct domain for a simple linear set', () => {
      expect(getDomainOfDataByKey(data, 'x', 'number')).to.deep.equal([1, 5]);
    });

    it('should calculate the correct domain even if there is no data for certain items in the set', () => {
      expect(getDomainOfDataByKey(data, 'actual', 'number')).to.deep.equal([35.4, 42.5]);
      expect(getDomainOfDataByKey(data, 'benchmark', 'number')).to.deep.equal([31.86, 35.4]);
    });
  });
});

describe('offsetSign', () => {
  describe('of data', () => {
    const data = [
      [[0, 1], [0, 2], [0, -5]],
      [[0, -1], [0, 2], [0, -5]],
    ];
    const offsetData = offsetSign(data);

    it('should change', () => {
      expect(data).to.deep.equal([[[0, 1], [0, 2], [0, -5]], [[0, -1], [2, 4], [-5, -10]]]);
    });
  });
});

describe('getTicksOfScale', () => {
  describe('of linear scale with auto domain', () => {
    const scale = scaleLinear();
    const opts = {
      scale: 'linear',
      type: 'number',
      tickCount: 5,
      originalDomain: ['auto', 'auto'],
      allowDecimals: true,
    };
    const result = getTicksOfScale(scale, opts);

    expect(result.niceTicks).to.deep.equal([0, 0.25, 0.5, 0.75, 1]);
  });

  describe('of linear scale with specified domain', () => {
    const scale = scaleLinear();
    const opts = {
      scale: 'linear',
      type: 'number',
      tickCount: 5,
      originalDomain: [0, 100],
      allowDecimals: true,
    };
    const result = getTicksOfScale(scale, opts);

    expect(result.niceTicks).to.deep.equal([0, 0.25, 0.5, 0.75, 1]);
  });
});


