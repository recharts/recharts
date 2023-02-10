import { scaleBand, scaleLinear } from 'victory-vendor/d3-scale';
import React from 'react';

import { Area, Bar, ErrorBar, Line, Scatter } from '../../src';
import {
  calculateActiveTickIndex,
  getBandSizeOfAxis,
  getDomainOfDataByKey,
  getDomainOfErrorBars,
  getDomainOfStackGroups,
  getTicksOfScale,
  getValueByDataKey,
  MAX_VALUE_REG,
  MIN_VALUE_REG,
  offsetSign,
  parseScale,
  parseSpecifiedDomain,
} from '../../src/util/ChartUtils';
import { DataKey } from '../../src/util/types';

describe('getBandSizeOfAxis', () => {
  it('DataUtils.getBandSizeOfAxis() should return 0 ', () => {
    expect(getBandSizeOfAxis()).toBe(0);
  });

  it('DataUtils.getBandSizeOfAxis({ type: "category", scale }) should return 0 ', () => {
    const axis = {
      type: 'category',
      scale: scaleBand().domain(['0', '1', '2', '3']).range([0, 100]),
    };
    expect(getBandSizeOfAxis(axis)).toBe(25);
  });

  it('DataUtils.getBandSizeOfAxis({ type: "number", scale }, ticks) should return 0 ', () => {
    const axis = { type: 'number' };
    const ticks = [{ coordinate: 13 }, { coordinate: 15 }, { coordinate: 20 }];
    expect(getBandSizeOfAxis(axis, ticks)).toBe(2);
  });
});

describe('parseSpecifiedDomain', () => {
  const domain = [20, 100];
  it('DataUtils.parseSpecifiedDomain(1, domain) should return domain ', () => {
    expect(parseSpecifiedDomain(1, domain)).toBe(domain);
  });

  it('DataUtils.parseSpecifiedDomain(["auto", "auto"], domain) should return domain ', () => {
    const result = parseSpecifiedDomain(['auto', 'auto'], domain);
    expect(result).toEqual(domain);
  });

  it('DataUtils.parseSpecifiedDomain([-1, 120], domain) should return input value ', () => {
    const result = parseSpecifiedDomain([-1, 120], domain);
    expect(result).toEqual([-1, 120]);
  });

  it('works with ["dataMin - 10", "dataMax + 10"], domain)', () => {
    const result = parseSpecifiedDomain(['dataMin - 10', 'dataMax + 10'], domain);
    expect(result).toEqual([10, 110]);
  });

  it('works with functions ', () => {
    const result = parseSpecifiedDomain(
      [(dataMin: number) => 0 - Math.abs(dataMin), (dataMax: number) => dataMax * 2],
      domain,
    );
    expect(result).toEqual([-20, 200]);
  });

  it('DataUtils.parseSpecifiedDomain(callback, domain) should execute the callback and return computed value ', () => {
    const result = parseSpecifiedDomain(
      ([dataMin, dataMax]: [number, number], _allowDataOverflow: boolean) => [dataMin / 4, dataMax * 4],
      domain,
    );
    expect(result).toEqual([5, 400]);
  });
});

describe('parseScale', () => {
  it('of "time" ', () => {
    const { scale } = parseScale({ scale: 'time' });
    expect(scale).toBeInstanceOf(Function);
  });

  it('of [12, 12] should return true', () => {
    const { scale } = parseScale({ scale: scaleLinear() });
    expect(scale).toBeInstanceOf(Function);
  });
});

describe('getValueByDataKey', () => {
  const data = { a: 1, b: 2, c: 3 };

  it('of function', () => {
    const fn: DataKey<typeof data> = entry => entry.a;

    expect(getValueByDataKey(data, fn)).toBe(1);
  });

  it('returns default value', () => {
    expect(getValueByDataKey(data, 'foo', 0)).toBe(0);
  });
});

describe('offsetSign', () => {
  describe('of data', () => {
    const data = [
      [
        [0, 1],
        [0, 2],
        [0, -5],
      ],
      [
        [0, -1],
        [0, 2],
        [0, -5],
      ],
    ];

    offsetSign(data);

    it('should change', () => {
      expect(data).toEqual([
        [
          [0, 1],
          [0, 2],
          [0, -5],
        ],
        [
          [0, -1],
          [2, 4],
          [-5, -10],
        ],
      ]);
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

    expect(result?.niceTicks).toEqual([0, 0.25, 0.5, 0.75, 1]);
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

    expect(result?.niceTicks).toEqual([0, 0.25, 0.5, 0.75, 1]);
  });
});

describe('calculateActiveTickIndex', () => {
  const ticks = [
    { coordinate: 0, index: 0 },
    { coordinate: 12, index: 1 },
    { coordinate: 14, index: 2 },
    { coordinate: 15, index: 3 },
  ];
  it('calculateActiveTickIndex(12, ticks) should return 1', () => {
    expect(calculateActiveTickIndex(12, ticks)).toBe(1);
  });

  it('calculateActiveTickIndex(-1, ticks) should return 0', () => {
    expect(calculateActiveTickIndex(-1, ticks)).toBe(0);
  });

  it('calculateActiveTickIndex(16, ticks) should return 3', () => {
    expect(calculateActiveTickIndex(16, ticks)).toBe(3);
  });
});

describe('getDomainOfStackGroups', () => {
  let stackData: any;

  beforeEach(() => {
    stackData = {
      a: {
        stackedData: [
          [
            [10, 14],
            [12, 16],
          ],
          [
            [8, 14],
            [34, 11],
          ],
        ],
      },
      b: {
        stackedData: [
          [
            [9, 13],
            [11, 15],
          ],
          [
            [12, 14],
            [25, 22],
          ],
        ],
      },
    };
  });

  it('correctly calculates the highest and lowest values in a stack of many values', () => {
    expect(getDomainOfStackGroups(stackData, 0, 1)).toEqual([8, 34]);
  });

  it('deals with a null value without assuming it should be === 0', () => {
    stackData.a.stackedData[0][0][0] = null;

    expect(getDomainOfStackGroups(stackData, 0, 1)).toEqual([8, 34]);
  });

  it('domain of all nulls should return [0, 0]', () => {
    stackData = {
      a: { stackedData: [[[null, null]]] },
    };

    expect(getDomainOfStackGroups(stackData, 0, 1)).toEqual([0, 0]);
  });
});

describe('MIN_VALUE_REG ', () => {
  it('.exec("dataMin - 0.233") is true', () => {
    expect(MIN_VALUE_REG.test('dataMin - 0.233')).toBe(true);
  });

  it('.exec("dataMin - 233") is true', () => {
    expect(MIN_VALUE_REG.test('dataMin - 233')).toBe(true);
  });

  it('.exec("dataMin - 233,") is false', () => {
    expect(MIN_VALUE_REG.test('dataMin - 233,')).toBe(false);
  });
});

describe('MAX_VALUE_REG ', () => {
  it('.exec("dataMax + 0.233") is true', () => {
    expect(MAX_VALUE_REG.test('dataMax + 0.233')).toBe(true);
  });

  it('.exec("dataMax + 233") is true', () => {
    expect(MAX_VALUE_REG.test('dataMax + 233')).toBe(true);
  });

  it('.exec("dataMax + 233,") is false', () => {
    expect(MAX_VALUE_REG.test('dataMax + 233,')).toBe(false);
  });
});

describe('getDomainOfDataByKey', () => {
  describe('with type === "number"', () => {
    const data = [
      {
        x: 1,
        y: 4,
        actual: 35.4,
        benchmark: 35.4,
      },
      {
        x: 2,
        y: 3,
        actual: 40,
      },
      {
        x: 3,
        y: 2,
        actual: 40.7,
      },
      {
        x: 4,
        y: 1,
        actual: 42.5,
      },
      {
        x: 5,
        y: 0,
        benchmark: 31.86,
      },
    ];

    it('should calculate the correct domain for a simple linear set', () => {
      expect(getDomainOfDataByKey(data, 'x', 'number')).toEqual([1, 5]);
      expect(getDomainOfDataByKey(data, 'y', 'number')).toEqual([0, 4]);
    });

    it('should calculate the correct domain even if there is no data for certain items in the set', () => {
      expect(getDomainOfDataByKey(data, 'actual', 'number')).toEqual([35.4, 42.5]);
      expect(getDomainOfDataByKey(data, 'benchmark', 'number')).toEqual([31.86, 35.4]);
    });
  });
});

describe('getDomainOfErrorBars', () => {
  const data = [
    {
      x: 1,
      y: 100,
      error: 10,
      error2: 15,
    },
    {
      x: 2,
      y: 200,
      error: 20,
      error2: 15,
    },
  ];

  describe('within Line component', () => {
    const line = (
      <Line dataKey="y">
        <ErrorBar dataKey="error" />
      </Line>
    );
    describe('with horizontal layout', () => {
      it('should not include error bars in xAxis domain', () => {
        expect(getDomainOfErrorBars(data, line, 'x', 'horizontal', 'xAxis')).toBeNull();
      });
      it('should include error bars in yAxis domain', () => {
        expect(getDomainOfErrorBars(data, line, 'y', 'horizontal', 'yAxis')).toEqual([90, 220]);
      });
    });

    describe('with vertical layout', () => {
      it('should include error bars in xAxis domain', () => {
        expect(getDomainOfErrorBars(data, line, 'x', 'vertical', 'xAxis')).toEqual([-18, 22]);
      });
      it('should not include error bars in yAxis domain', () => {
        expect(getDomainOfErrorBars(data, line, 'y', 'vertical', 'yAxis')).toBeNull();
      });
    });
  });

  describe('within Bar component', () => {
    const bar = (
      <Bar dataKey="y">
        <ErrorBar dataKey="error" />
      </Bar>
    );

    describe('with horizontal layout', () => {
      it('should not include error bars in xAxis domain', () => {
        expect(getDomainOfErrorBars(data, bar, 'x', 'horizontal', 'xAxis')).toBeNull();
      });
      it('should include error bars in yAxis domain', () => {
        expect(getDomainOfErrorBars(data, bar, 'y', 'horizontal', 'yAxis')).toEqual([90, 220]);
      });
    });

    describe('with vertical layout', () => {
      it('should include error bars in xAxis domain', () => {
        expect(getDomainOfErrorBars(data, bar, 'x', 'vertical', 'xAxis')).toEqual([-18, 22]);
      });
      it('should not include error bars in yAxis domain', () => {
        expect(getDomainOfErrorBars(data, bar, 'y', 'vertical', 'yAxis')).toBeNull();
      });
    });
  });

  describe('within Area component', () => {
    const area = (
      <Area dataKey="y">
        <ErrorBar dataKey="error" />
      </Area>
    );

    describe('with horizontal layout', () => {
      it('should not include error bars in xAxis domain', () => {
        expect(getDomainOfErrorBars(data, area, 'x', 'horizontal', 'xAxis')).toBeNull();
      });
      it('should include error bars in yAxis domain', () => {
        expect(getDomainOfErrorBars(data, area, 'y', 'horizontal', 'yAxis')).toEqual([90, 220]);
      });
    });

    describe('with vertical layout', () => {
      it('should include error bars in xAxis domain', () => {
        expect(getDomainOfErrorBars(data, area, 'x', 'vertical', 'xAxis')).toEqual([-18, 22]);
      });
      it('should not include error bars in yAxis domain', () => {
        expect(getDomainOfErrorBars(data, area, 'y', 'vertical', 'yAxis')).toBeNull();
      });
    });
  });

  describe('within Scatter component', () => {
    const scatter = (
      <Scatter>
        <ErrorBar dataKey="error" direction="y" />
        <ErrorBar dataKey="error2" direction="x" />
      </Scatter>
    );

    it('should only include error bars with direction y in xAxis domain', () => {
      expect(getDomainOfErrorBars(data, scatter, 'x', undefined, 'xAxis')).toEqual([-14, 17]);
    });
    it('should only include error bars with direction x in yAxis domain', () => {
      expect(getDomainOfErrorBars(data, scatter, 'y', undefined, 'yAxis')).toEqual([90, 220]);
    });
  });

  describe('with multiple ErrorBar children with same direction', () => {
    const line = (
      <Line dataKey="y">
        <ErrorBar dataKey="error" />
        <ErrorBar dataKey="error2" />
      </Line>
    );

    it('should return maximum domain of error bars', () => {
      expect(getDomainOfErrorBars(data, line, 'y', 'horizontal', 'yAxis')).toEqual([85, 220]);
    });
  });
});
