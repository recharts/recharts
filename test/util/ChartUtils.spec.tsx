import { scaleBand, scaleLinear, scalePoint } from 'victory-vendor/d3-scale';
import {
  calculateActiveTickIndex,
  getBandSizeOfAxis,
  getDomainOfStackGroups,
  getValueByDataKey,
  MAX_VALUE_REG,
  MIN_VALUE_REG,
  getTicksOfAxis,
  AxisPropsNeededForTicksGenerator,
  isCategoricalAxis,
} from '../../src/util/ChartUtils';
import { AxisType, DataKey, LayoutType, TickItem } from '../../src/util/types';
import { BaseAxisWithScale } from '../../src/state/selectors/axisSelectors';

describe('getTicksForAxis', () => {
  const Y_AXIS_EXAMPLE: AxisPropsNeededForTicksGenerator = {
    // @ts-expect-error we need to wrap the d3 scales in unified interface
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
    niceTicks: [0, 400, 800, 1200, 1600] as const,
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
    const XAxisWithActiveBrush: AxisPropsNeededForTicksGenerator = {
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: scalePoint().domain(['13', '14', '15', '16', '17']).range([5, 866]),
      dataKey: 'name',
      interval: 0,
      ticks: ['12', '13', '14', '15', '16', '17', '18', '19'] as const,
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
        index: 1,
        offset: 0,
        value: '13',
      },
      {
        coordinate: 220.25,
        index: 2,
        offset: 0,
        value: '14',
      },
      {
        coordinate: 435.5,
        index: 3,
        offset: 0,
        value: '15',
      },
      {
        coordinate: 650.75,
        index: 4,
        offset: 0,
        value: '16',
      },
      {
        coordinate: 866,
        index: 5,
        offset: 0,
        value: '17',
      },
    ]);
  });

  it('Works for yAxis', () => {
    expect(getTicksOfAxis(Y_AXIS_EXAMPLE, true, undefined)).toEqual([
      { coordinate: 0, offset: 0, value: 0, index: 0 },
      { coordinate: 400, offset: 0, value: 400, index: 1 },
      { coordinate: 800, offset: 0, value: 800, index: 2 },
      { coordinate: 1200, offset: 0, value: 1200, index: 3 },
      { coordinate: 1600, offset: 0, value: 1600, index: 4 },
    ]);
  });

  it('Tick coordinates depend on scale', () => {
    const axis: AxisPropsNeededForTicksGenerator = {
      ...Y_AXIS_EXAMPLE,
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: scaleLinear().domain([0, 1600]).range([0, 1000]),
    };

    expect(getTicksOfAxis(axis, true, undefined)).toEqual([
      { coordinate: 0, offset: 0, value: 0, index: 0 },
      { coordinate: 250, offset: 0, value: 400, index: 1 },
      { coordinate: 500, offset: 0, value: 800, index: 2 },
      { coordinate: 750, offset: 0, value: 1200, index: 3 },
      { coordinate: 1000, offset: 0, value: 1600, index: 4 },
    ]);
  });
});

describe('getBandSizeOfAxis', () => {
  it('DataUtils.getBandSizeOfAxis() should return 0 ', () => {
    expect(getBandSizeOfAxis()).toBe(0);
  });

  it('should return band size of scale, if available', () => {
    const axis: BaseAxisWithScale = {
      type: 'category',
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: scaleBand().domain(['0', '1', '2', '3']).range([0, 100]),
    };
    expect(getBandSizeOfAxis(axis)).toBe(25);
  });

  it('should compute band size from data if scale does not return explicit band size', () => {
    const axis: BaseAxisWithScale = {
      type: 'number',
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: scaleLinear(),
    };
    const ticks: ReadonlyArray<TickItem> = [
      { coordinate: 13, index: 0, value: 'a' },
      { coordinate: 15, index: 1, value: 'b' },
      { coordinate: 20, index: 2, value: 'c' },
    ];
    expect(getBandSizeOfAxis(axis, ticks)).toBe(2);
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

describe('calculateActiveTickIndex', () => {
  const ticks: ReadonlyArray<TickItem> = [
    { coordinate: 0, index: 0, value: 'a' },
    { coordinate: 12, index: 1, value: 'b' },
    { coordinate: 14, index: 2, value: 'c' },
    { coordinate: 15, index: 3, value: 'd' },
  ];
  it('calculateActiveTickIndex(12, ticks) should return 1', () => {
    expect(calculateActiveTickIndex(12, ticks, [], 'radiusAxis', [0, 100])).toBe(1);
  });

  it('calculateActiveTickIndex(-1, ticks) should return 0', () => {
    expect(calculateActiveTickIndex(-1, ticks, [], 'radiusAxis', [0, 100])).toBe(0);
  });

  it('calculateActiveTickIndex(16, ticks) should return 3', () => {
    expect(calculateActiveTickIndex(16, ticks, [], 'radiusAxis', [0, 100])).toBe(3);
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

describe('isCategoricalAxis', () => {
  const casesWhereTrue: {
    name: string;
    layout: LayoutType;
    axisType: AxisType;
  }[] = [
    {
      name: 'xAxis in horizontal layout',
      layout: 'horizontal',
      axisType: 'xAxis',
    },
    {
      name: 'yAxis in vertical layout',
      layout: 'vertical',
      axisType: 'yAxis',
    },
    {
      name: 'angleAxis in centric layout',
      layout: 'centric',
      axisType: 'angleAxis',
    },
    {
      name: 'radiusAxis in radial layout',
      layout: 'radial',
      axisType: 'radiusAxis',
    },
  ];

  const casesWhereFalse: {
    name: string;
    layout: LayoutType;
    axisType: AxisType;
  }[] = [
    {
      name: 'xAxis in vertical layout',
      layout: 'vertical',
      axisType: 'xAxis',
    },
    {
      name: 'yAxis in horizontal layout',
      layout: 'horizontal',
      axisType: 'yAxis',
    },
    {
      name: 'angleAxis in radial layout',
      layout: 'radial',
      axisType: 'angleAxis',
    },
    {
      name: 'radiusAxis in centric layout',
      layout: 'centric',
      axisType: 'radiusAxis',
    },
    {
      name: 'xAxis in radial layout',
      layout: 'radial',
      axisType: 'xAxis',
    },
    {
      name: 'yAxis in centric layout',
      layout: 'centric',
      axisType: 'yAxis',
    },
    {
      name: 'angleAxis in horizontal layout',
      layout: 'horizontal',
      axisType: 'angleAxis',
    },
    {
      name: 'radiusAxis in vertical layout',
      layout: 'vertical',
      axisType: 'radiusAxis',
    },
    {
      name: 'xAxis in centric layout',
      layout: 'centric',
      axisType: 'xAxis',
    },
    {
      name: 'yAxis in radial layout',
      layout: 'radial',
      axisType: 'yAxis',
    },
  ];
  test.each(casesWhereTrue)('it should return true for $axisType axis in $layout chart', ({ axisType, layout }) => {
    expect(isCategoricalAxis(layout, axisType)).toBe(true);
  });

  test.each(casesWhereFalse)('it should return false for $axisType axis in $layout chart', ({ axisType, layout }) => {
    expect(isCategoricalAxis(layout, axisType)).toBe(false);
  });
});
