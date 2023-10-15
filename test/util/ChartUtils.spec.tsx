import { scaleBand, scaleLinear, scalePoint } from 'victory-vendor/d3-scale';
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
  parseSpecifiedDomain,
  getTicksOfAxis,
  getLegendProps,
} from '../../src/util/ChartUtils';
import { BaseAxisProps, DataKey } from '../../src/util/types';

describe('getTicksForAxis', () => {
  const Y_AXIS_EXAMPLE = {
    scale: scaleLinear(),
    allowDuplicatedCategory: true,
    allowDecimals: true,
    hide: false,
    orientation: 'left' as const,
    width: 60,
    height: 211.5,
    mirror: false,
    yAxisId: 0,
    tickCount: 5,
    type: 'number' as const,
    padding: {
      top: 0,
      bottom: 0,
    },
    allowDataOverflow: false,
    reversed: false,
    axisType: 'yAxis' as const,
    domain: [0, 1520],
    originalDomain: [0, 'auto' as const],
    isCategorical: false,
    layout: 'horizontal' as const,
    niceTicks: [0, 400, 800, 1200, 1600],
    realScaleType: 'linear' as const,
    x: 20,
    y: 20,
    bandSize: 0,
    className: 'recharts-yAxis yAxis',
    viewBox: {
      x: 0,
      y: 0,
      width: 782,
      height: 300,
    },
    stroke: '#666',
    tickLine: true,
    axisLine: true,
    tick: true,
    minTickGap: 5,
    tickSize: 6,
    tickMargin: 2,
    interval: 'preserveEnd' as const,
  };

  it('Returns null for null', () => {
    expect(getTicksOfAxis(null as never)).toBeNull();
  });

  it(`Ticks without a valid coordinate are filtered out,
  such as with a PointScale and an active Brush, filtering the domain.`, () => {
    const XAxisWithActiveBrush = {
      scale: scalePoint().domain(['13', '14', '15', '16', '17']).range([5, 866]),
      dataKey: 'name',
      interval: 0,
      ticks: ['12', '13', '14', '15', '16', '17', '18', '19'],
      allowDecimals: true,
      hide: false,
      orientation: 'bottom' as const,
      width: 772,
      height: 30,
      mirror: false,
      xAxisId: 0,
      tickCount: 5,
      type: 'category' as const,
      padding: {
        left: 0,
        right: 0,
      },
      allowDataOverflow: false,
      reversed: false,
      allowDuplicatedCategory: true,
      axisType: 'xAxis' as const,
      domain: ['13', '14', '15', '16', '17'],
      isCategorical: true,
      layout: 'horizontal' as const,
      realScaleType: 'point' as const,
      x: 5,
      y: 325,
      bandSize: 0,
      className: 'recharts-xAxis xAxis',
      viewBox: {
        x: 0,
        y: 0,
        width: 782,
        height: 400,
      },
      stroke: '#666',
      tickLine: true,
      axisLine: true,
      tick: true,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
    };

    expect(getTicksOfAxis(XAxisWithActiveBrush, true, undefined)).toEqual([
      {
        coordinate: 5,
        offset: 0,
        value: '13',
      },
      {
        coordinate: 220.25,
        offset: 0,
        value: '14',
      },
      {
        coordinate: 435.5,
        offset: 0,
        value: '15',
      },
      {
        coordinate: 650.75,
        offset: 0,
        value: '16',
      },
      {
        coordinate: 866,
        offset: 0,
        value: '17',
      },
    ]);
  });

  it('Works for yAxis', () => {
    expect(getTicksOfAxis(Y_AXIS_EXAMPLE, true, undefined)).toEqual([
      { coordinate: 0, offset: 0, value: 0 },
      { coordinate: 400, offset: 0, value: 400 },
      { coordinate: 800, offset: 0, value: 800 },
      { coordinate: 1200, offset: 0, value: 1200 },
      { coordinate: 1600, offset: 0, value: 1600 },
    ]);
  });

  it('Tick coordinates depend on scale', () => {
    const axis = {
      ...Y_AXIS_EXAMPLE,
      scale: scaleLinear().domain([0, 1600]).range([0, 1000]),
    };

    expect(getTicksOfAxis(axis, true, undefined)).toEqual([
      { coordinate: 0, offset: 0, value: 0 },
      { coordinate: 250, offset: 0, value: 400 },
      { coordinate: 500, offset: 0, value: 800 },
      { coordinate: 750, offset: 0, value: 1200 },
      { coordinate: 1000, offset: 0, value: 1600 },
    ]);
  });
});

describe('getBandSizeOfAxis', () => {
  it('DataUtils.getBandSizeOfAxis() should return 0 ', () => {
    expect(getBandSizeOfAxis()).toBe(0);
  });

  it('DataUtils.getBandSizeOfAxis({ type: "category", scale }) should return 0 ', () => {
    const axis: BaseAxisProps = {
      type: 'category',
      scale: scaleBand().domain(['0', '1', '2', '3']).range([0, 100]),
    };
    expect(getBandSizeOfAxis(axis)).toBe(25);
  });

  it('DataUtils.getBandSizeOfAxis({ type: "number", scale }, ticks) should return 0 ', () => {
    const axis: BaseAxisProps = { type: 'number' };
    const ticks = [{ coordinate: 13 }, { coordinate: 15 }, { coordinate: 20 }];
    expect(getBandSizeOfAxis(axis, ticks)).toBe(2);
  });
});

describe('parseSpecifiedDomain', () => {
  const domain: [number, number] = [20, 100];
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

describe('getValueByDataKey', () => {
  const data: Record<string, unknown> = {
    a: 1,
    b: 2,
    c: 3,
    1: 4,
    u: undefined,
    n: null,
    nested: { obj: { children: 7 } },
    arr: [{ x: 6 }, { y: 5 }],
    nan: NaN,
  };

  it('should call dataKey if it is a function', () => {
    const fn: DataKey<typeof data> = entry => entry.a;
    expect(getValueByDataKey(data, fn)).toBe(1);
    expect(getValueByDataKey(data, fn, 9)).toBe(1);
  });

  it('should return data from object root', () => {
    expect(getValueByDataKey(data, 'a')).toEqual(1);
    expect(getValueByDataKey(data, 'a', 9)).toEqual(1);
  });

  it('should return data nested in the object', () => {
    expect(getValueByDataKey(data, 'nested.obj.children')).toEqual(7);
    expect(getValueByDataKey(data, 'nested.obj.children', 9)).toEqual(7);
  });

  it('should return data nested in the object inside array', () => {
    expect(getValueByDataKey(data, 'arr[1].y')).toEqual(5);
    expect(getValueByDataKey(data, 'arr[1].y', 9)).toEqual(5);
  });

  it('should read numeric keys', () => {
    expect(getValueByDataKey(data, 1)).toEqual(4);
    expect(getValueByDataKey(data, 1, 9)).toEqual(4);
    expect(getValueByDataKey(data, '1')).toEqual(4);
    expect(getValueByDataKey(data, '1', 9)).toEqual(4);
  });

  it('should return default value if the data object path is not defined', () => {
    expect(getValueByDataKey(data, 'foo', 0)).toBe(0);
    expect(getValueByDataKey(data, 'foo')).toBe(undefined);
  });

  it('should return default value if the data object path exists but contains undefined', () => {
    expect(getValueByDataKey(data, 'd', 0)).toBe(0);
    expect(getValueByDataKey(data, 'd')).toBe(undefined);
  });

  it('should return default value if the data object path exists but contains null', () => {
    expect(getValueByDataKey(data, 'd', 0)).toBe(0);
    expect(getValueByDataKey(data, 'd')).toBe(undefined);
  });

  it('should return NaN if the data object path exists and contains NaN', () => {
    expect(getValueByDataKey(data, 'nan', 0)).toBe(NaN);
    expect(getValueByDataKey(data, 'nan')).toBe(NaN);
  });

  it('should return defaultValue if dataKey is undefined', () => {
    /*
     * The function does not really make sense without the dataKey
     * and so the type says it's mandatory.
     *
     * However! Lots of props have the dataKey as optional, the "strictNullChecks" typescript config is turned off,
     * and many places do not have null runtime checks.
     */
    expect(getValueByDataKey(data, undefined as never, 7)).toEqual(7);
  });

  it('should return undefined if both dataKey and defaultValue are undefined', () => {
    expect(getValueByDataKey(data, undefined as never, undefined)).toEqual(undefined);
  });

  test.each([null, undefined])('should return defaultValue if data object is %s', d => {
    expect(getValueByDataKey(d, () => 1, 7)).toEqual(7);
  });

  test.each([
    NaN,
    [],
    {},
    function anon() {
      return 8;
    },
  ])('should return result of function getter if data object is %s', d => {
    expect(getValueByDataKey(d, () => 1, 7)).toEqual(1);
  });
});

describe('getTicksOfScale', () => {
  it('of linear scale with auto domain', () => {
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

  it('of linear scale with specified domain', () => {
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

describe('exports for backwards-compatibility', () => {
  test('getLegendProps should be exported', () => {
    expect(getLegendProps).toBeInstanceOf(Function);
  });
});
