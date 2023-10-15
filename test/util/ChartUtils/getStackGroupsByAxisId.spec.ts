import { ReactElement } from 'react';
import { getStackGroupsByAxisId } from '../../../src/util/ChartUtils';
import { createSeries, createSeriesPoint } from './getStackedData.spec';

function makeItem(props: {}): ReactElement {
  // @ts-expect-error incomplete mock of ReactElement
  return {
    props,
  };
}

const data: ReadonlyArray<Record<string, unknown>> = [
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
  {
    name: 'Page C',
    uv: 729,
    pv: 918,
    amt: 123,
  },
  {
    name: 'Page D',
    uv: 943,
    pv: 185,
    amt: 52,
  },
  {
    name: 'Page E',
    uv: 9834,
    pv: 293,
    amt: 4568,
  },
];

let items: Array<ReactElement>;

describe('getStackGroupsByAxisId', () => {
  beforeEach(() => {
    items = [
      makeItem({ dataKey: 'uv', stackId: 'a', numericAxisId: 'x' }),
      makeItem({ dataKey: 'pv', stackId: 'a', numericAxisId: 'y' }),
    ];
  });
  it('should group data by axisId and then stackId', () => {
    const result = getStackGroupsByAxisId(data, items, 'numericAxisId', 'cateAxisId', 'none', false);

    expect(Object.keys(result)).toEqual(['x', 'y']);

    expect(result.x).toEqual({
      hasStack: true,
      stackGroups: {
        a: {
          cateAxisId: 'cateAxisId',
          items: [{ props: { dataKey: 'uv', numericAxisId: 'x', stackId: 'a' } }],
          numericAxisId: 'numericAxisId',
          stackedData: [
            createSeries('uv', 0, [
              createSeriesPoint(0, 590, data[0]),
              createSeriesPoint(0, 868, data[1]),
              createSeriesPoint(0, 729, data[2]),
              createSeriesPoint(0, 943, data[3]),
              createSeriesPoint(0, 9834, data[4]),
            ]),
          ],
        },
      },
    });

    expect(result.y).toEqual({
      hasStack: true,
      stackGroups: {
        a: {
          cateAxisId: 'cateAxisId',
          items: [{ props: { dataKey: 'pv', numericAxisId: 'y', stackId: 'a' } }],
          numericAxisId: 'numericAxisId',
          stackedData: [
            createSeries('pv', 0, [
              createSeriesPoint(0, 800, data[0]),
              createSeriesPoint(0, 967, data[1]),
              createSeriesPoint(0, 918, data[2]),
              createSeriesPoint(0, 185, data[3]),
              createSeriesPoint(0, 293, data[4]),
            ]),
          ],
        },
      },
    });
  });

  it('should return Series with no SeriesPoints if data is an empty array', () => {
    const result = getStackGroupsByAxisId([], items, 'numericAxisId', 'cateAxisId', 'none', false);

    expect(result.x).toEqual({
      hasStack: true,
      stackGroups: {
        a: {
          cateAxisId: 'cateAxisId',
          items: [{ props: { dataKey: 'uv', numericAxisId: 'x', stackId: 'a' } }],
          numericAxisId: 'numericAxisId',
          stackedData: [createSeries('uv', 0, [])],
        },
      },
    });

    expect(result.y).toEqual({
      hasStack: true,
      stackGroups: {
        a: {
          cateAxisId: 'cateAxisId',
          items: [{ props: { dataKey: 'pv', numericAxisId: 'y', stackId: 'a' } }],
          numericAxisId: 'numericAxisId',
          stackedData: [createSeries('pv', 0, [])],
        },
      },
    });
  });

  it('should return null if data is undefined', () => {
    const result = getStackGroupsByAxisId(undefined, items, 'numericAxisId', 'cateAxisId', 'none', false);
    expect(result).toEqual(null);
  });

  it('should return empty object if items are empty', () => {
    const result = getStackGroupsByAxisId(data, [], 'numericAxisId', 'cateAxisId', 'none', false);
    expect(result).toEqual({});
  });

  it('should return empty object if all items have hide: true', () => {
    const allHiddenItems = [
      makeItem({ dataKey: 'uv', stackId: 'a', numericAxisId: 'x', hide: true }),
      makeItem({ dataKey: 'pv', stackId: 'a', numericAxisId: 'y', hide: true }),
    ];
    const result = getStackGroupsByAxisId(data, allHiddenItems, 'numericAxisId', 'cateAxisId', 'none', false);
    expect(result).toEqual({});
  });

  it('if reverseStackOrder is true the result should be exactly the same as if it is false', () => {
    const result = getStackGroupsByAxisId([], items, 'numericAxisId', 'cateAxisId', 'none', true);

    expect(result.x).toEqual({
      hasStack: true,
      stackGroups: {
        a: {
          cateAxisId: 'cateAxisId',
          items: [{ props: { dataKey: 'uv', numericAxisId: 'x', stackId: 'a' } }],
          numericAxisId: 'numericAxisId',
          stackedData: [createSeries('uv', 0, [])],
        },
      },
    });

    expect(result.y).toEqual({
      hasStack: true,
      stackGroups: {
        a: {
          cateAxisId: 'cateAxisId',
          items: [{ props: { dataKey: 'pv', numericAxisId: 'y', stackId: 'a' } }],
          numericAxisId: 'numericAxisId',
          stackedData: [createSeries('pv', 0, [])],
        },
      },
    });
  });

  it('if reverseStackOrder is true the order of axis in the result object should be flipped', () => {
    const resultFalse = getStackGroupsByAxisId([], items, 'numericAxisId', 'cateAxisId', 'none', false);
    expect(Object.keys(resultFalse)).toEqual(['x', 'y']);
    const resultTrue = getStackGroupsByAxisId([], items, 'numericAxisId', 'cateAxisId', 'none', true);
    expect(Object.keys(resultTrue)).toEqual(['y', 'x']);
  });

  it('should mutate items array if reverseStackOrder is true', () => {
    const itemsInput = [makeItem({ name: 'a' }), makeItem({ name: 'b' }), makeItem({ name: 'c' })];
    getStackGroupsByAxisId(data, itemsInput, 'numericAxisId', 'cateAxisId', 'none', true);
    expect(itemsInput).toEqual([makeItem({ name: 'c' }), makeItem({ name: 'b' }), makeItem({ name: 'a' })]);
  });

  it('should autogenerate stackId and do not generate stackedData if stackId is not defined', () => {
    const itemsWithoutStackId = [
      makeItem({ dataKey: 'uv', numericAxisId: 'x' }),
      makeItem({ dataKey: 'pv', numericAxisId: 'y' }),
    ];
    const result = getStackGroupsByAxisId(data, itemsWithoutStackId, 'numericAxisId', 'cateAxisId', 'none', false);

    expect(Object.keys(result)).toEqual(['x', 'y']);

    expect(result.x).toEqual({
      hasStack: false,
      stackGroups: {
        _stackId_4: {
          cateAxisId: 'cateAxisId',
          items: [{ props: { dataKey: 'uv', numericAxisId: 'x' } }],
          numericAxisId: 'numericAxisId',
        },
      },
    });

    expect(result.y).toEqual({
      hasStack: false,
      stackGroups: {
        _stackId_5: {
          cateAxisId: 'cateAxisId',
          items: [{ props: { dataKey: 'pv', numericAxisId: 'y' } }],
          numericAxisId: 'numericAxisId',
        },
      },
    });
  });
});
