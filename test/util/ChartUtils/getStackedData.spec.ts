import { Series, SeriesPoint } from 'victory-vendor/d3-shape';
import { getStackedData, offsetSign } from '../../../src/util/ChartUtils';
import { DataKey, StackOffsetType } from '../../../src/util/types';

function createDataKeyProps(dataKey: DataKey<any>) {
  return { props: { dataKey } };
}

export function createSeries(
  key: string,
  index: number,
  data: Array<SeriesPoint<Record<string, unknown>>> = [],
): Series<Record<string, unknown>, string> {
  return Object.assign(data, { key, index });
}

export function createSeriesPoint(
  first: number,
  second: number,
  data: Record<string, unknown>,
): SeriesPoint<Record<string, unknown>> {
  return Object.assign([], { data, 0: first, 1: second });
}

const mockData = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
];

const dataWithNegativeNumbers = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: -3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: -2000,
    pv: -9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: -1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: -3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

/**
 * If you see one of these tests failing with a message "serializes to the same string",
 * that is because the d3-shape library assigns abitrary property keys to an array.
 *
 * Jest doesn't like that. When it compares the two arrays it can see that it has extra property,
 * and if that extra property is different then it fails.
 * But when printing the array, it only prints the usual array elements, and ignores the extra properties.
 * Therefore the "serializes to the same string" problem.
 *
 * So when you see that error, try to compare the other properties, like `Series.key` and `SeriesPoint.data`.
 * Or print them with console.log, that will show the difference.
 */
describe('getStackedData', () => {
  it('should return empty array if there is no data', () => {
    expect(getStackedData([], [], 'none')).toEqual([]);
  });

  it('should return empty array if there is some data but no data keys', () => {
    expect(getStackedData([{ x: 1 }], [], 'none')).toEqual([]);
  });

  it('should return one empty array for each dataKey even if it is not part of the data', () => {
    const result = getStackedData(
      [],
      [createDataKeyProps('x'), createDataKeyProps('y'), createDataKeyProps('z')],
      'none',
    );
    const expected = [createSeries('x', 0), createSeries('y', 1), createSeries('z', 2)];
    expect(result).toEqual(expected);
  });

  it('should return one empty array for each data key even if it is not part of the data', () => {
    const result = getStackedData(
      [],
      [createDataKeyProps('x'), createDataKeyProps('y'), createDataKeyProps('z')],
      'none',
    );
    const expected = [createSeries('x', 0), createSeries('y', 1), createSeries('z', 2)];
    expect(result).toEqual(expected);
  });

  const allOffsets: StackOffsetType[] = ['expand', 'none', 'positive', 'sign', 'silhouette', 'wiggle'];
  describe.each(allOffsets)('with offset %s', offset => {
    it('should stack numerical data', () => {
      const dataKeys = [createDataKeyProps('uv'), createDataKeyProps('pv')];
      const result = getStackedData(mockData, dataKeys, offset);
      expect(result).toHaveLength(dataKeys.length);
      result.forEach(series => {
        expect(series).toHaveLength(mockData.length);
        series.forEach(point => {
          expect(point[0]).toEqual(expect.any(Number));
          expect(point[1]).toEqual(expect.any(Number));
          expect(point[0]).not.toBeNaN();
          expect(point[1]).not.toBeNaN();
        });
      });
    });

    it('should stack data when dataKey is a function', () => {
      const dataKeys = [createDataKeyProps(o => o.uv + 100), createDataKeyProps(o => o.pv - 100)];
      const result = getStackedData(mockData, dataKeys, offset);
      expect(result).toHaveLength(dataKeys.length);
      result.forEach(series => {
        expect(series).toHaveLength(mockData.length);
        series.forEach(point => {
          expect(point[0]).toEqual(expect.any(Number));
          expect(point[1]).toEqual(expect.any(Number));
          expect(point[0]).not.toBeNaN();
          expect(point[1]).not.toBeNaN();
        });
      });
    });
  });

  it('should stack numerical data with offset: none', () => {
    const result = getStackedData(mockData, [createDataKeyProps('uv'), createDataKeyProps('pv')], 'none');
    const firstSeries = createSeries('uv', 0, [
      createSeriesPoint(0, 590, mockData[0]),
      createSeriesPoint(0, 868, mockData[1]),
    ]);
    const secondSeries = createSeries('pv', 1, [
      createSeriesPoint(590, 1390, mockData[0]),
      createSeriesPoint(868, 1835, mockData[1]),
    ]);
    const expected = [firstSeries, secondSeries];
    expect(result).toEqual(expected);
  });

  it('should stack numerical data with offset: sign', () => {
    const result = getStackedData(
      dataWithNegativeNumbers,
      [createDataKeyProps('uv'), createDataKeyProps('pv')],
      'sign',
    );
    const uvSeries = createSeries('uv', 0, [
      createSeriesPoint(0, 4000, dataWithNegativeNumbers[0]),
      createSeriesPoint(0, -3000, dataWithNegativeNumbers[1]),
      createSeriesPoint(0, -2000, dataWithNegativeNumbers[2]),
      createSeriesPoint(0, 2780, dataWithNegativeNumbers[3]),
      createSeriesPoint(0, -1890, dataWithNegativeNumbers[4]),
      createSeriesPoint(0, 2390, dataWithNegativeNumbers[5]),
      createSeriesPoint(0, 3490, dataWithNegativeNumbers[6]),
    ]);
    const pvSeries = createSeries('pv', 1, [
      createSeriesPoint(4000, 6400, dataWithNegativeNumbers[0]),
      createSeriesPoint(0, 1398, dataWithNegativeNumbers[1]),
      createSeriesPoint(-2000, -11800, dataWithNegativeNumbers[2]),
      createSeriesPoint(2780, 6688, dataWithNegativeNumbers[3]),
      createSeriesPoint(0, 4800, dataWithNegativeNumbers[4]),
      createSeriesPoint(0, -3800, dataWithNegativeNumbers[5]),
      createSeriesPoint(3490, 7790, dataWithNegativeNumbers[6]),
    ]);
    const expected = [uvSeries, pvSeries];
    expect(result).toEqual(expected);
  });

  it('with offset: positive should ignore all negative data points', () => {
    const dataKeys = [createDataKeyProps('uv'), createDataKeyProps('pv')];
    const result = getStackedData(dataWithNegativeNumbers, dataKeys, 'positive');
    const uvSeries = createSeries('uv', 0, [
      createSeriesPoint(0, 4000, dataWithNegativeNumbers[0]),
      createSeriesPoint(0, 0, dataWithNegativeNumbers[1]),
      createSeriesPoint(0, 0, dataWithNegativeNumbers[2]),
      createSeriesPoint(0, 2780, dataWithNegativeNumbers[3]),
      createSeriesPoint(0, 0, dataWithNegativeNumbers[4]),
      createSeriesPoint(0, 2390, dataWithNegativeNumbers[5]),
      createSeriesPoint(0, 3490, dataWithNegativeNumbers[6]),
    ]);
    const pvSeries = createSeries('pv', 1, [
      createSeriesPoint(4000, 6400, dataWithNegativeNumbers[0]),
      createSeriesPoint(0, 1398, dataWithNegativeNumbers[1]),
      createSeriesPoint(0, 0, dataWithNegativeNumbers[2]),
      createSeriesPoint(2780, 6688, dataWithNegativeNumbers[3]),
      createSeriesPoint(0, 4800, dataWithNegativeNumbers[4]),
      createSeriesPoint(0, 0, dataWithNegativeNumbers[5]),
      createSeriesPoint(3490, 7790, dataWithNegativeNumbers[6]),
    ]);
    const expected = [uvSeries, pvSeries];
    expect(result).toEqual(expected);
  });

  it('should stack data when dataKey is a function with offset: none', () => {
    const result = getStackedData(
      mockData,
      [createDataKeyProps(o => o.uv + 100), createDataKeyProps(o => o.pv - 100)],
      'none',
    );
    const firstSeries = createSeries('uv', 0, [
      createSeriesPoint(0, 690, mockData[0]),
      createSeriesPoint(0, 968, mockData[1]),
    ]);
    const secondSeries = createSeries('pv', 1, [
      createSeriesPoint(690, 1390, mockData[0]),
      createSeriesPoint(968, 1835, mockData[1]),
    ]);
    const expected = [firstSeries, secondSeries];
    /*
     * Direct comparison with .toEqual doesn't work because the `key` property is a function
     * and jest always rejects when comparing functions.
     */
    expect(result).toHaveLength(expected.length);
    expect(result[0]).toHaveLength(firstSeries.length);
    expect(result[1]).toHaveLength(secondSeries.length);
    result[0].forEach((point, index) => {
      expect(point).toEqual(firstSeries[index]);
    });
    result[1].forEach((point, index) => {
      expect(point).toEqual(secondSeries[index]);
    });
  });

  test('offset: positive should turn data that are not numbers to zero', () => {
    const mockCategoryData = [
      {
        name: 'x',
      },
      {
        name: 'y',
      },
      {
        name: 'z',
      },
    ];
    const result = getStackedData(mockCategoryData, [createDataKeyProps('x')], 'positive');
    const expected = [
      createSeries('x', 0, [
        createSeriesPoint(0, 0, mockCategoryData[0]),
        createSeriesPoint(0, 0, mockCategoryData[1]),
        createSeriesPoint(0, 0, mockCategoryData[2]),
      ]),
    ];
    expect(result).toEqual(expected);
  });

  test('offset: sign should turn data that are not numbers to zero', () => {
    const mockCategoryData = [
      {
        name: 'x',
      },
      {
        name: '',
      },
      {
        name: NaN,
      },
      {
        name: function anon() {
          return 0;
        },
      },
    ];
    const result = getStackedData(mockCategoryData, [createDataKeyProps('x')], 'sign');
    const expected = [
      createSeries('x', 0, [
        createSeriesPoint(0, 0, mockCategoryData[0]),
        createSeriesPoint(0, 0, mockCategoryData[1]),
        createSeriesPoint(0, 0, mockCategoryData[2]),
        createSeriesPoint(0, 0, mockCategoryData[3]),
      ]),
    ];
    expect(result).toEqual(expected);
  });

  test('offsetSign should mutate data in place', () => {
    const data = [
      createSeries('', 0, [createSeriesPoint(0, 1, {}), createSeriesPoint(0, 2, {}), createSeriesPoint(0, -5, {})]),
      createSeries('', 1, [createSeriesPoint(0, -1, {}), createSeriesPoint(0, 2, {}), createSeriesPoint(0, -5, {})]),
    ];
    const expected = [
      createSeries('', 0, [createSeriesPoint(0, 1, {}), createSeriesPoint(0, 2, {}), createSeriesPoint(0, -5, {})]),
      createSeries('', 1, [createSeriesPoint(0, -1, {}), createSeriesPoint(2, 4, {}), createSeriesPoint(-5, -10, {})]),
    ];
    offsetSign(data, []);
    expect(data).toEqual(expected);
  });
});
