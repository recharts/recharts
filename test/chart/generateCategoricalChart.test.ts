import { ReactElement } from 'react';
import { getAxisMapByAxes, CategoricalChartProps } from '../../src/chart/generateCategoricalChart';
import { AxisStackGroups } from '../../src/util/ChartUtils';

const data = [
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
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

describe('generateCategoricalChart', () => {
  const graphicalItems: Array<ReactElement> = [
    // @ts-expect-error this isn't a proper ReactElement
    {
      props: {
        type: 'monotone',
        dataKey: 'uv',
        stroke: '#8884d8',
        fill: '#8884d8',
        fillOpacity: 0.6,
        xAxisId: 0,
        yAxisId: 0,
        legendType: 'line',
        connectNulls: false,
        points: [] as any[],
        dot: false,
        activeDot: true,
        hide: false,
        isAnimationActive: true,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: 'ease',
      },
    },
  ];

  const axisProps = {
    allowDecimals: true,
    hide: false,
    orientation: 'bottom',
    width: 0,
    height: 30,
    mirror: false,
    tickCount: 2,
    type: 'category',
    padding: { left: 0, right: 0 },
    allowDataOverflow: false,
    scale: 'auto',
    reversed: false,
    allowDuplicatedCategory: true,
  };

  const xAxes: ReadonlyArray<ReactElement> = [
    // @ts-expect-error this isn't a proper ReactElement
    {
      props: { ...axisProps, xAxisId: 0, dataKey: 'name' },
    },
  ];

  const yAxes: ReadonlyArray<ReactElement> = [
    // @ts-expect-error this isn't a proper ReactElement
    {
      props: {
        ...axisProps,
        orientation: 'left',
        width: 0,
        height: 30,
        mirror: false,
        yAxisId: 0,
        tickCount: 2,
        type: 'number',
        dataKey: 'uv',
      },
    },
  ];

  describe('getAxisMapByAxes', () => {
    const props: CategoricalChartProps = {
      data,
      margin: { top: 10, right: 30, left: 0, bottom: 0 },
      layout: 'horizontal',
      stackOffset: 'none',
      barCategoryGap: '10%',
      barGap: 4,
      reverseStackOrder: false,
      syncMethod: 'index',
      width: 415,
      height: 500,
    };

    const stackGroups: AxisStackGroups = {
      '0': {
        hasStack: false,
        stackGroups: {
          _stackId_49: {
            cateAxisId: 'xAxisId',
            items: graphicalItems,
            numericAxisId: '',
          },
        },
      },
    };

    const input = {
      axes: xAxes,
      graphicalItems,
      stackGroups,
      axisType: 'xAxis',
      axisIdKey: 'xAxisId',
      dataStartIndex: 0,
      dataEndIndex: 5,
    };

    test('xAxis categorical - should have domain of the categorical data sent', () => {
      const res = getAxisMapByAxes(props, {
        axes: xAxes,
        graphicalItems,
        stackGroups,
        axisType: 'xAxis',
        axisIdKey: 'xAxisId',
        dataStartIndex: 0,
        dataEndIndex: 5,
      });

      expect(res).toEqual(
        expect.objectContaining({
          '0': {
            dataKey: 'name',
            allowDecimals: true,
            hide: false,
            orientation: 'bottom',
            width: 0,
            height: 30,
            mirror: false,
            xAxisId: 0,
            tickCount: 2,
            type: 'category',
            padding: { left: 0, right: 0 },
            allowDataOverflow: false,
            scale: 'auto',
            reversed: false,
            allowDuplicatedCategory: true,
            axisType: 'xAxis',
            domain: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F'],
            categoricalDomain: undefined,
            duplicateDomain: undefined,
            originalDomain: undefined,
            isCategorical: true,
            layout: 'horizontal',
          },
        }),
      );
    });

    test('yAxis numerical - should have originalDomain of [0, `auto`] and auto domain data sent', () => {
      // override data to represent yAxis domain generation
      // eslint-disable-next-line no-underscore-dangle
      stackGroups[0].stackGroups._stackId_49.cateAxisId = 'yAxisId';

      type SecondParam<F extends Function> = F extends (...args: infer A) => any ? A[1] : never;
      const yAxisInput: SecondParam<typeof getAxisMapByAxes> = {
        ...input,
        axisIdKey: 'yAxisId',
        axisType: 'yAxis',
        axes: yAxes,
      };

      const res = getAxisMapByAxes(props, yAxisInput);

      expect(res).toEqual(
        expect.objectContaining({
          '0': {
            dataKey: 'uv',
            allowDecimals: true,
            hide: false,
            orientation: 'left',
            width: 0,
            height: 30,
            mirror: false,
            yAxisId: 0,
            tickCount: 2,
            type: 'number',
            padding: { left: 0, right: 0 },
            allowDataOverflow: false,
            scale: 'auto',
            reversed: false,
            allowDuplicatedCategory: true,
            axisType: 'yAxis',
            domain: [0, 1520],
            categoricalDomain: undefined,
            duplicateDomain: undefined,
            originalDomain: [0, 'auto'],
            isCategorical: false,
            layout: 'horizontal',
          },
        }),
      );
    });
  });
});
