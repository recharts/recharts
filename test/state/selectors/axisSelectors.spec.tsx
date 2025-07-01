import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { act, render } from '@testing-library/react';
import { Selector } from '@reduxjs/toolkit';
import { useAppSelector } from '../../../src/state/hooks';
import {
  BaseAxisWithScale,
  combineXAxisRange,
  implicitXAxis,
  implicitYAxis,
  implicitZAxis,
  mergeDomains,
  selectAllAppliedValues,
  selectAxisDomain,
  selectAxisDomainIncludingNiceTicks,
  selectAxisRangeWithReverse,
  selectAxisScale,
  selectAxisSettings,
  selectAxisWithScale,
  selectBaseAxis,
  selectCalculatedXAxisPadding,
  selectCartesianGraphicalItemsData,
  selectDisplayedData,
  selectErrorBarsSettings,
  selectHasBar,
  selectNiceTicks,
  selectSmallestDistanceBetweenValues,
  selectXAxisSettings,
} from '../../../src/state/selectors/axisSelectors';
import { createRechartsStore, RechartsRootState } from '../../../src/state/store';
import {
  Area,
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  ComposedChart,
  Customized,
  ErrorBar,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from '../../../src';
import { misbehavedData, PageData } from '../../_data';
import { ExpectAxisDomain, expectXAxisTicks } from '../../helper/expectAxisTicks';
import { addCartesianGraphicalItem, CartesianGraphicalItemSettings } from '../../../src/state/graphicalItemsSlice';
import { generateMockData } from '../../helper/generateMockData';
import { AxisId, XAxisSettings } from '../../../src/state/cartesianAxisSlice';
import { AxisDomain } from '../../../src/util/types';
import { ChartData } from '../../../src/state/chartDataSlice';
import { setLegendSize } from '../../../src/state/legendSlice';
import { setActiveMouseOverItemIndex } from '../../../src/state/tooltipSlice';
import { implicitAngleAxis, implicitRadiusAxis } from '../../../src/state/selectors/polarAxisSelectors';
import {
  shouldReturnFromInitialState,
  shouldReturnUndefinedOutOfContext,
  useAppSelectorWithStableTest,
} from '../../helper/selectorTestHelpers';
import { useIsPanorama } from '../../../src/context/PanoramaContext';
import { assertNotNull } from '../../helper/assertNotNull';
import { expectLastCalledWithScale } from '../../helper/expectScale';

const defaultAxisId: AxisId = 0;

const mockData = generateMockData(10, 982347);
const data1 = mockData.slice(0, 5);
const data2 = mockData.slice(5);

describe('selectAxisScale', () => {
  shouldReturnUndefinedOutOfContext(state => selectAxisScale(state, 'xAxis', 'foo', false));

  it('should return implicit scale if there is no XAxis with this ID', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(state =>
        selectAxisScale(state, 'xAxis', 'this id is not present in the chart', false),
      );
      spy(result);
      return null;
    };
    const { container } = render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Comp />
      </BarChart>,
    );
    expect(container.querySelector('.xAxis')).toBeVisible();
    expect(spy).toHaveBeenCalledTimes(2);
    expectLastCalledWithScale(spy, { domain: [0, 1, 2, 3, 4, 5], range: [5, 95] });
  });

  it('should return scale if there is an Axis in the chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(state => selectAxisScale(state, 'xAxis', '0', false));
      spy(result);
      return null;
    };
    const { container } = render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Comp />
      </BarChart>,
    );
    expect(container.querySelector('.xAxis')).toBeVisible();
    expect(spy).toHaveBeenCalledTimes(2);
    expectLastCalledWithScale(spy, {
      domain: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F'],
      range: [5, 95],
    });
  });

  it('should be stable', () => {
    const Comp = (): null => {
      const result1 = useAppSelectorWithStableTest(state => selectAxisScale(state, 'xAxis', '0', false));
      const result2 = useAppSelectorWithStableTest(state => selectAxisScale(state, 'xAxis', '0', false));
      expect(result1).toBe(result2);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Comp />
      </BarChart>,
    );
  });

  it('should be stable even when there are calls in-between to another axis', () => {
    const state = createRechartsStore().getState();
    const result1 = selectAxisScale(state, 'xAxis', defaultAxisId, false);
    const result2 = selectAxisScale(state, 'xAxis', defaultAxisId, false);
    expect(result1).toBe(result2);

    selectAxisScale(state, 'xAxis', 'foo', false);
    selectAxisScale(state, 'yAxis', defaultAxisId, false);
    selectAxisScale(state, 'yAxis', 'foo', false);
    const result4 = selectAxisScale(state, 'xAxis', defaultAxisId, false);
    expect(result1).toBe(result4);
  });

  it('should not recompute when an irrelevant property in the state changes', () => {
    const store = createRechartsStore();
    const result1 = selectAxisScale(store.getState(), 'xAxis', '0', false);
    store.dispatch(setActiveMouseOverItemIndex({ activeCoordinate: undefined, activeDataKey: 'x', activeIndex: '7' }));
    const result2 = selectAxisScale(store.getState(), 'xAxis', '0', false);
    expect(result1).toBe(result2);
  });

  it('should set the scale domain and range based on the axis type, and data', () => {
    const scaleDomainSpy = vi.fn();
    const scaleRangeSpy = vi.fn();
    const Comp = (): null => {
      const scale = useAppSelectorWithStableTest(state => selectAxisScale(state, 'xAxis', '0', false));
      scaleDomainSpy(scale?.domain());
      scaleRangeSpy(scale?.range());
      return null;
    };
    const { container } = render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Comp />
      </BarChart>,
    );
    expectXAxisTicks(container, [
      {
        textContent: 'Page A',
        x: '12.5',
        y: '73',
      },
      {
        textContent: 'Page B',
        x: '27.5',
        y: '73',
      },
      {
        textContent: 'Page C',
        x: '42.5',
        y: '73',
      },
      {
        textContent: 'Page D',
        x: '57.5',
        y: '73',
      },
      {
        textContent: 'Page E',
        x: '72.5',
        y: '73',
      },
      {
        textContent: 'Page F',
        x: '87.5',
        y: '73',
      },
    ]);
    expect(scaleDomainSpy).toHaveBeenLastCalledWith(['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F']);
    expect(scaleRangeSpy).toHaveBeenLastCalledWith([5, 95]);
  });
});

describe('selectBaseAxis', () => {
  shouldReturnUndefinedOutOfContext(state => selectBaseAxis(state, 'xAxis', '0'));

  it('should return implicit XAxis when called with initial state', () => {
    const initialState: RechartsRootState = createRechartsStore().getState();
    const result = selectBaseAxis(initialState, 'xAxis', '0');
    expect(result).toBe(implicitXAxis);
  });

  it('should return implicit YAxis when called with initial state', () => {
    const initialState: RechartsRootState = createRechartsStore().getState();
    const result = selectBaseAxis(initialState, 'yAxis', '0');
    expect(result).toBe(implicitYAxis);
  });

  it('should return implicit ZAxis when called with initial state', () => {
    const initialState: RechartsRootState = createRechartsStore().getState();
    const result = selectBaseAxis(initialState, 'zAxis', '0');
    expect(result).toBe(implicitZAxis);
  });

  it('should return implicit PolarAngleAxis when called with initial state', () => {
    const initialState: RechartsRootState = createRechartsStore().getState();
    const result = selectBaseAxis(initialState, 'angleAxis', '0');
    expect(result).toBe(implicitAngleAxis);
  });

  it('should return implicit RadiusAxis when called with initial state', () => {
    const initialState: RechartsRootState = createRechartsStore().getState();
    const result = selectBaseAxis(initialState, 'radiusAxis', '0');
    expect(result).toBe(implicitRadiusAxis);
  });

  it('should be stable', () => {
    const Comp = (): null => {
      const result1 = useAppSelector(state => selectBaseAxis(state, 'xAxis', '0'));
      const result2 = useAppSelector(state => selectBaseAxis(state, 'xAxis', '0'));
      expect(result1).toBe(result2);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Comp />
      </BarChart>,
    );
  });
});

describe('selectAxisRangeWithReverse', () => {
  const selector = (state: RechartsRootState) => selectAxisRangeWithReverse(state, 'xAxis', '0', false);

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, [5, 5]);

  it('should be stable', () => {
    const Comp = (): null => {
      const result1 = useAppSelector(state => selectAxisRangeWithReverse(state, 'xAxis', '0', false));
      const result2 = useAppSelector(state => selectAxisRangeWithReverse(state, 'xAxis', '0', false));
      expect(result1).toBe(result2);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Comp />
      </BarChart>,
    );
  });

  it('should not recompute when an irrelevant property in the state changes', () => {
    const store = createRechartsStore();
    const result1 = selectAxisRangeWithReverse(store.getState(), 'xAxis', '0', false);
    const xAxisRange1 = combineXAxisRange(store.getState(), '0', false);
    store.dispatch(setActiveMouseOverItemIndex({ activeCoordinate: undefined, activeDataKey: 'x', activeIndex: '7' }));
    const result2 = selectAxisRangeWithReverse(store.getState(), 'xAxis', '0', false);
    const xAxisRange2 = combineXAxisRange(store.getState(), '0', false);
    expect(xAxisRange1).toBe(xAxisRange2);
    expect(result1).toBe(result2);
  });
});

describe('selectAxisDomain', () => {
  const selector: Selector<RechartsRootState, ReturnType<typeof selectAxisDomain>, []> = state =>
    selectAxisDomain(state, 'xAxis', '0', false);

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, undefined);

  it('should return undefined if there is no data in the chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      const result = useAppSelectorWithStableTest(state => selectAxisDomain(state, 'xAxis', '0', isPanorama));
      spy(result);
      return null;
    };
    const { container } = render(
      <BarChart data={[]} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenCalledWith(undefined);
    expectXAxisTicks(container, []);
  });

  it('should gather data from all graphical items that match the axis ID', () => {
    const axisDomainSpy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      axisDomainSpy(useAppSelectorWithStableTest(state => selectAxisDomain(state, 'xAxis', defaultAxisId, isPanorama)));
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={data1} />
        <Line data={data2} />
        <XAxis dataKey="y" />
        <Comp />
      </LineChart>,
    );
    expect(axisDomainSpy).toHaveBeenLastCalledWith([481, 672, 721, 446, 598, 774, 687, 762, 439, 569]);
    expect(axisDomainSpy).toHaveBeenCalledTimes(2);
  });

  it('should be stable', () => {
    expect.assertions(2);
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      const result1 = useAppSelector(state => selectAxisDomain(state, 'xAxis', defaultAxisId, isPanorama));
      const result2 = useAppSelector(state => selectAxisDomain(state, 'xAxis', defaultAxisId, isPanorama));
      expect(result1).toBe(result2);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={data1} />
        <Line data={data2} />
        <XAxis dataKey="y" />
        <Comp />
      </LineChart>,
    );
  });

  it('should return domain from multiple axes', () => {
    const scaleLeftSpy = vi.fn();
    const scaleRightSpy = vi.fn();
    const domainLeftSpy = vi.fn();
    const domainRightSpy = vi.fn();
    const domainLeftIncludingNiceTicksSpy = vi.fn();
    const domainRightIncludingNiceTicksSpy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      domainLeftSpy(useAppSelectorWithStableTest(state => selectAxisDomain(state, 'yAxis', 'left', isPanorama)));
      domainLeftIncludingNiceTicksSpy(
        useAppSelectorWithStableTest(state => selectAxisDomainIncludingNiceTicks(state, 'yAxis', 'left', isPanorama)),
      );
      domainRightSpy(useAppSelectorWithStableTest(state => selectAxisDomain(state, 'yAxis', 'right', isPanorama)));
      domainRightIncludingNiceTicksSpy(
        useAppSelectorWithStableTest(state => selectAxisDomainIncludingNiceTicks(state, 'yAxis', 'right', isPanorama)),
      );
      const scaleLeft = useAppSelectorWithStableTest(state => selectAxisScale(state, 'yAxis', 'left', isPanorama));
      scaleLeftSpy(scaleLeft?.domain());
      const scaleRight = useAppSelectorWithStableTest(state => selectAxisScale(state, 'yAxis', 'right', isPanorama));
      scaleRightSpy(scaleRight?.domain());
      return null;
    };
    render(
      <LineChart
        width={500}
        height={300}
        data={PageData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
        <Tooltip />
        <Comp />
      </LineChart>,
    );
    expect(domainLeftSpy).toHaveBeenLastCalledWith([0, 9800]);
    expect(domainLeftIncludingNiceTicksSpy).toHaveBeenLastCalledWith([0, 10000]);
    expect(scaleLeftSpy).toHaveBeenLastCalledWith([0, 10000]);
    expect(domainRightSpy).toHaveBeenLastCalledWith([0, 400]);
    expect(domainRightIncludingNiceTicksSpy).toHaveBeenLastCalledWith([0, 400]);
    expect(scaleRightSpy).toHaveBeenLastCalledWith([0, 400]);
    expect(domainLeftSpy).toHaveBeenCalledTimes(3);
    expect(domainLeftIncludingNiceTicksSpy).toHaveBeenCalledTimes(3);
    expect(scaleLeftSpy).toHaveBeenCalledTimes(3);
    expect(domainRightSpy).toHaveBeenCalledTimes(3);
    expect(domainRightIncludingNiceTicksSpy).toHaveBeenCalledTimes(3);
    expect(scaleRightSpy).toHaveBeenCalledTimes(3);
  });

  it('should return nothing for graphical items that do not have any explicit data prop on them', () => {
    const domainSpy = vi.fn();
    const { container } = render(
      <ComposedChart data={PageData} width={100} height={100}>
        <Area dataKey="" />
        <Area dataKey="" data={[{ x: 10 }, { x: 20 }, { x: 30 }]} />
        <Line />
        <Line data={[{ x: 40 }, { x: 50 }, { x: 60 }]} />
        <Scatter />
        <Scatter data={[{ x: 70 }, { x: 80 }, { x: 90 }]} />
        <XAxis dataKey="x" />
        <Customized component={<ExpectAxisDomain axisType="xAxis" assert={domainSpy} />} />
      </ComposedChart>,
    );
    expectXAxisTicks(container, [
      {
        textContent: '10',
        x: '5',
        y: '73',
      },
      {
        textContent: '20',
        x: '16.25',
        y: '73',
      },
      {
        textContent: '30',
        x: '27.5',
        y: '73',
      },
      {
        textContent: '40',
        x: '38.75',
        y: '73',
      },
      {
        textContent: '50',
        x: '50',
        y: '73',
      },
      {
        textContent: '60',
        x: '61.25',
        y: '73',
      },
      {
        textContent: '70',
        x: '72.5',
        y: '73',
      },
      {
        textContent: '80',
        x: '83.75',
        y: '73',
      },
      {
        textContent: '90',
        x: '95',
        y: '73',
      },
    ]);
    expect(domainSpy).toHaveBeenLastCalledWith([10, 20, 30, 40, 50, 60, 70, 80, 90]);
    expect(domainSpy).toHaveBeenCalledTimes(3);
  });

  it('should return array indexes if there are multiple graphical items, and no explicit dataKey on the matching XAxis', () => {
    const domainSpy = vi.fn();
    const { container } = render(
      <ComposedChart data={PageData} width={100} height={100}>
        <Area dataKey="" />
        <Area dataKey="" data={[{ x: 10 }, { x: 20 }, { x: 30 }]} />
        <Line />
        <Line data={[{ x: 40 }, { x: 50 }, { x: 60 }]} />
        <Scatter />
        <Scatter data={[{ x: 70 }, { x: 80 }, { x: 90 }]} />
        <XAxis />
        <Customized component={<ExpectAxisDomain axisType="xAxis" assert={domainSpy} />} />
      </ComposedChart>,
    );
    expectXAxisTicks(container, [
      {
        textContent: '0',
        x: '5',
        y: '73',
      },
      {
        textContent: '1',
        x: '16.25',
        y: '73',
      },
      {
        textContent: '2',
        x: '27.5',
        y: '73',
      },
      {
        textContent: '3',
        x: '38.75',
        y: '73',
      },
      {
        textContent: '4',
        x: '50',
        y: '73',
      },
      {
        textContent: '5',
        x: '61.25',
        y: '73',
      },
      {
        textContent: '6',
        x: '72.5',
        y: '73',
      },
      {
        textContent: '7',
        x: '83.75',
        y: '73',
      },
      {
        textContent: '8',
        x: '95',
        y: '73',
      },
    ]);
    expect(domainSpy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    expect(domainSpy).toHaveBeenCalledTimes(3);
  });

  describe('XAxis with type = number', () => {
    it('should return highest and lowest number of the chart root data based on the axis dataKey', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        const result = useAppSelectorWithStableTest(state => selectAxisDomain(state, 'xAxis', '0', isPanorama));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={PageData} width={100} height={100}>
          <XAxis dataKey="uv" type="number" />
          <Comp />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith([0, 400]);
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '73',
        },
        {
          textContent: '100',
          x: '27.5',
          y: '73',
        },
        {
          textContent: '200',
          x: '50',
          y: '73',
        },
        {
          textContent: '300',
          x: '72.5',
          y: '73',
        },
        {
          textContent: '400',
          x: '95',
          y: '73',
        },
      ]);
    });

    it('should return undefined if the data is not numerical', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        const result = useAppSelectorWithStableTest(state => selectAxisDomain(state, 'xAxis', '0', isPanorama));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={PageData} width={100} height={100}>
          <XAxis dataKey="name" type="number" />
          <Comp />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith(undefined);
      expectXAxisTicks(container, []);
    });

    it('should not throw an error when the data includes a Symbol', () => {
      const data = [{ x: Symbol.for('unit test') }];
      const spy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        const result = useAppSelectorWithStableTest(state => selectAxisDomain(state, 'xAxis', 0, isPanorama));
        spy(result);
        return null;
      };
      render(
        <BarChart data={data} width={100} height={100}>
          <XAxis dataKey="x" type="number" />
          <Comp />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith(undefined);
      expect(spy).toHaveBeenCalledTimes(2);
    });

    it('should parse strings, and ignore values that are not numbers', () => {
      const data = [
        { x: '100' },
        { x: '9999' },
        { x: 200 },
        { x: 300 },
        { x: null },
        { x: undefined },
        { x: NaN },
        { x: {} },
        { x: [] as const },
        {
          x: () => {},
        },
        // { x: Symbol.for('unit test') },
      ];
      const spy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        const result = useAppSelectorWithStableTest(state => selectAxisDomain(state, 'xAxis', '0', isPanorama));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={data} width={100} height={100}>
          <XAxis dataKey="x" type="number" />
          <Comp />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith([0, 9999]);
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '5',
          y: '73',
        },
        {
          textContent: '2500',
          x: '27.5',
          y: '73',
        },
        {
          textContent: '5000',
          x: '50',
          y: '73',
        },
        {
          textContent: '7500',
          x: '72.5',
          y: '73',
        },
        {
          textContent: '10000',
          x: '95',
          y: '73',
        },
      ]);
    });

    it(`should squish all data defined on all items, ignore chart root data,
        compute min, max of the combination, and then readjust it based on nice ticks`, () => {
      const axisDomainSpy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        const result = useAppSelectorWithStableTest(state => selectAxisDomain(state, 'xAxis', 0, isPanorama));
        axisDomainSpy(result);
        return null;
      };
      const { container } = render(
        <ComposedChart
          data={[
            // by far the largest here, but ignored!
            { x: 100000, y: 99999 },
            { x: 20, y: 2 },
            { x: 30, y: 3 },
          ]}
          width={100}
          height={100}
        >
          <Area
            data={[
              { x: 40, y: 4 },
              { x: 50, y: 5 },
              { x: 60, y: 6 },
            ]}
            dataKey="y"
          />
          <Area
            data={[
              { x: 70, y: 7 },
              { x: 80, y: 8 },
              { x: 90, y: 9 },
            ]}
            dataKey=""
          />
          <Line
            data={[
              { x: 100, y: 10 },
              { x: 110, y: 11 },
              { x: 120, y: 12 },
            ]}
            dataKey="y"
          />
          <Line
            data={[
              { x: 130, y: 13 },
              { x: 140, y: 14 },
              { x: 150, y: 15 },
            ]}
          />
          <Scatter
            data={[
              { x: 160, y: 16 },
              { x: 170, y: 17 },
              { x: 180, y: 18 },
            ]}
            dataKey="y"
          />
          <Scatter
            data={[
              { x: 190, y: 19 },
              { x: 200, y: 20 },
              { x: 210, y: 21 },
            ]}
          />
          <XAxis dataKey="x" type="number" />
          <YAxis dataKey="y" type="number" />
          <Comp />
        </ComposedChart>,
      );
      expect(axisDomainSpy).toHaveBeenLastCalledWith([0, 210]);
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '65',
          y: '73',
        },
        {
          textContent: '55',
          x: '72.5',
          y: '73',
        },
        {
          textContent: '110',
          x: '80',
          y: '73',
        },
        {
          textContent: '165',
          x: '87.5',
          y: '73',
        },
        {
          textContent: '220',
          x: '95',
          y: '73',
        },
      ]);
    });
  });

  describe.each(['category', undefined] as const)('XAxis with type = %s', type => {
    it('should return all strings', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        const result = useAppSelectorWithStableTest(state => selectAxisDomain(state, 'xAxis', '0', isPanorama));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={PageData} width={100} height={100}>
          <XAxis dataKey="name" type={type} />
          <Comp />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith(['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F']);
      expectXAxisTicks(container, [
        {
          textContent: 'Page A',
          x: '12.5',
          y: '73',
        },
        {
          textContent: 'Page B',
          x: '27.5',
          y: '73',
        },
        {
          textContent: 'Page C',
          x: '42.5',
          y: '73',
        },
        {
          textContent: 'Page D',
          x: '57.5',
          y: '73',
        },
        {
          textContent: 'Page E',
          x: '72.5',
          y: '73',
        },
        {
          textContent: 'Page F',
          x: '87.5',
          y: '73',
        },
      ]);
    });

    it.each([true, undefined])(
      'should return domain as array indexes when allowDuplicatedCategory = %s',
      allowDuplicatedCategory => {
        const spy = vi.fn();
        const Comp = (): null => {
          const isPanorama = useIsPanorama();
          const result = useAppSelectorWithStableTest(state => selectAxisDomain(state, 'xAxis', '0', isPanorama));
          spy(result);
          return null;
        };
        const { container } = render(
          <BarChart data={PageData} width={100} height={100}>
            <XAxis dataKey="uv" type={type} allowDuplicatedCategory={allowDuplicatedCategory} />
            <Comp />
          </BarChart>,
        );
        expect(spy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5]);
        expectXAxisTicks(container, [
          {
            textContent: '400',
            x: '12.5',
            y: '73',
          },
          {
            textContent: '300',
            x: '27.5',
            y: '73',
          },
          {
            textContent: '300',
            x: '42.5',
            y: '73',
          },
          {
            textContent: '200',
            x: '57.5',
            y: '73',
          },
          {
            textContent: '278',
            x: '72.5',
            y: '73',
          },
          {
            textContent: '189',
            x: '87.5',
            y: '73',
          },
        ]);
      },
    );

    it('should filter out duplicates when allowDuplicatedCategory = false', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        const result = useAppSelectorWithStableTest(state => selectAxisDomain(state, 'xAxis', '0', isPanorama));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={PageData} width={100} height={100}>
          <XAxis dataKey="uv" type={type} allowDuplicatedCategory={false} />
          <Comp />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith([400, 300, 200, 278, 189]);
      expectXAxisTicks(container, [
        {
          textContent: '400',
          x: '14',
          y: '73',
        },
        {
          textContent: '300',
          x: '32',
          y: '73',
        },
        {
          textContent: '200',
          x: '50',
          y: '73',
        },
        {
          textContent: '278',
          x: '68',
          y: '73',
        },
        {
          textContent: '189',
          x: '86',
          y: '73',
        },
      ]);
    });

    it('with allowDuplicatedCategory=true, and the data has duplicates, it should return domain as array indexes', () => {
      const domainSpy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        const result = useAppSelectorWithStableTest(state => selectAxisDomain(state, 'xAxis', '0', isPanorama));
        domainSpy(result);
        return null;
      };
      const monthsWithDuplicatesData: ChartData = [
        { x: 'Jan' },
        { x: 'Jan' },
        { x: 'Feb' },
        { x: 'Feb' },
        { x: 'Mar' },
        { x: 'Mar' },
        { x: 'Apr' },
        { x: 'Apr' },
        { x: 'May' },
        { x: 'May' },
        { x: 'Jun' },
        { x: 'Jun' },
        { x: 'Jul' },
        { x: 'Jul' },
        { x: 'Aug' },
        { x: 'Aug' },
      ];
      const { container } = render(
        <BarChart data={monthsWithDuplicatesData} width={100} height={100}>
          <XAxis dataKey="x" type={type} allowDuplicatedCategory />
          <Comp />
        </BarChart>,
      );
      expect(domainSpy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
      expectXAxisTicks(container, [
        {
          textContent: 'Jan',
          x: '7.8125',
          y: '73',
        },
        {
          textContent: 'Jan',
          x: '13.4375',
          y: '73',
        },
        {
          textContent: 'Feb',
          x: '19.0625',
          y: '73',
        },
        {
          textContent: 'Feb',
          x: '24.6875',
          y: '73',
        },
        {
          textContent: 'Mar',
          x: '30.3125',
          y: '73',
        },
        {
          textContent: 'Mar',
          x: '35.9375',
          y: '73',
        },
        {
          textContent: 'Apr',
          x: '41.5625',
          y: '73',
        },
        {
          textContent: 'Apr',
          x: '47.1875',
          y: '73',
        },
        {
          textContent: 'May',
          x: '52.8125',
          y: '73',
        },
        {
          textContent: 'May',
          x: '58.4375',
          y: '73',
        },
        {
          textContent: 'Jun',
          x: '64.0625',
          y: '73',
        },
        {
          textContent: 'Jun',
          x: '69.6875',
          y: '73',
        },
        {
          textContent: 'Jul',
          x: '75.3125',
          y: '73',
        },
        {
          textContent: 'Jul',
          x: '80.9375',
          y: '73',
        },
        {
          textContent: 'Aug',
          x: '86.5625',
          y: '73',
        },
        {
          textContent: 'Aug',
          x: '92.1875',
          y: '73',
        },
      ]);
    });

    it('with allowDuplicatedCategory=true, and the data has duplicates that are not strings, it should return domain of values', () => {
      const domainSpy = vi.fn();
      const scaleSpy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        domainSpy(
          useAppSelectorWithStableTest(state => selectAxisDomainIncludingNiceTicks(state, 'xAxis', 0, isPanorama)),
        );
        const scale = useAppSelectorWithStableTest(state => selectAxisScale(state, 'xAxis', 0, false));
        scaleSpy(scale?.domain());
        return null;
      };
      const { container } = render(
        <BarChart data={misbehavedData} width={100} height={100}>
          <XAxis dataKey="x" type={type} allowDuplicatedCategory />
          <Comp />
        </BarChart>,
      );
      expect(domainSpy).toHaveBeenLastCalledWith(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']);
      expect(scaleSpy).toHaveBeenLastCalledWith(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']);
      expectXAxisTicks(container, [
        {
          textContent: 'Jan',
          x: '10.625',
          y: '73',
        },
        {
          textContent: 'Feb',
          x: '21.875',
          y: '73',
        },
        {
          textContent: 'Mar',
          x: '33.125',
          y: '73',
        },
        {
          textContent: 'Apr',
          x: '44.375',
          y: '73',
        },
        {
          textContent: 'May',
          x: '55.625',
          y: '73',
        },
        {
          textContent: 'Jun',
          x: '66.875',
          y: '73',
        },
        {
          textContent: 'Jul',
          x: '78.125',
          y: '73',
        },
        {
          textContent: 'Aug',
          x: '89.375',
          y: '73',
        },
      ]);
    });

    it('with allowDuplicatedCategory=true, but the data has no duplicates, it should return domain as strings', () => {
      const data = [{ x: 'Jan' }, { x: 'Feb' }, { x: 'Mar' }, { x: 'Apr' }, { x: 'May' }, { x: 'Jun' }];
      const spy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        const result = useAppSelectorWithStableTest(state => selectAxisDomain(state, 'xAxis', '0', isPanorama));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={data} width={100} height={100}>
          <XAxis dataKey="x" type={type} allowDuplicatedCategory />
          <Comp />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']);
      expectXAxisTicks(container, [
        {
          textContent: 'Jan',
          x: '12.5',
          y: '73',
        },
        {
          textContent: 'Feb',
          x: '27.5',
          y: '73',
        },
        {
          textContent: 'Mar',
          x: '42.5',
          y: '73',
        },
        {
          textContent: 'Apr',
          x: '57.5',
          y: '73',
        },
        {
          textContent: 'May',
          x: '72.5',
          y: '73',
        },
        {
          textContent: 'Jun',
          x: '87.5',
          y: '73',
        },
      ]);
    });

    it('with allowDuplicatedCategory=false, should return domain as deduplicated strings', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        const result = useAppSelectorWithStableTest(state => selectAxisDomain(state, 'xAxis', '0', isPanorama));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={misbehavedData} width={100} height={100}>
          <XAxis dataKey="x" type={type} allowDuplicatedCategory={false} />
          <Comp />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']);
      expectXAxisTicks(container, [
        {
          textContent: 'Jan',
          x: '10.625',
          y: '73',
        },
        {
          textContent: 'Feb',
          x: '21.875',
          y: '73',
        },
        {
          textContent: 'Mar',
          x: '33.125',
          y: '73',
        },
        {
          textContent: 'Apr',
          x: '44.375',
          y: '73',
        },
        {
          textContent: 'May',
          x: '55.625',
          y: '73',
        },
        {
          textContent: 'Jun',
          x: '66.875',
          y: '73',
        },
        {
          textContent: 'Jul',
          x: '78.125',
          y: '73',
        },
        {
          textContent: 'Aug',
          x: '89.375',
          y: '73',
        },
      ]);
    });

    it('should return array indexes if dataKey is undefined', () => {
      const data = [{ x: 'Monday' }, { x: 'Tuesday' }, { x: 'Wednesday' }];
      const spy = vi.fn();
      const Comp = (): null => {
        const isPanorama = useIsPanorama();
        const result = useAppSelectorWithStableTest(state => selectAxisDomain(state, 'xAxis', '0', isPanorama));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={data} width={100} height={100}>
          <XAxis type={type} allowDuplicatedCategory={false} />
          <Comp />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith([0, 1, 2]);
      expectXAxisTicks(container, [
        {
          textContent: '0',
          x: '20',
          y: '73',
        },
        {
          textContent: '1',
          x: '50',
          y: '73',
        },
        {
          textContent: '2',
          x: '80',
          y: '73',
        },
      ]);
    });
  });
});

describe('selectHasBar', () => {
  shouldReturnUndefinedOutOfContext(selectHasBar);
  shouldReturnFromInitialState(selectHasBar, false);

  it('should return true if there is a Bar in the chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(selectHasBar);
      spy(result);
      return null;
    };
    const { container, rerender } = render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <Comp />
      </BarChart>,
    );
    expect(container.querySelector('.recharts-bar')).toBeVisible();
    expect(spy).toHaveBeenLastCalledWith(true);

    // returns false after Bar is removed from DOM
    rerender(
      <BarChart data={PageData} width={100} height={100}>
        <Comp />
      </BarChart>,
    );
    expect(container.querySelector('.recharts-bar')).toBeNull();
    expect(spy).toHaveBeenLastCalledWith(false);
  });

  it('should return false if there is no Bar in the chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(selectHasBar);
      spy(result);
      return null;
    };
    const { container } = render(
      <BarChart data={PageData} width={100} height={100}>
        <Line dataKey="uv" />
        <Comp />
      </BarChart>,
    );
    expect(container.querySelector('.recharts-bar')).toBeNull();
    expect(spy).toHaveBeenLastCalledWith(false);
  });

  it('should return true if there are two Bars in the chart and then I remove one', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(selectHasBar);
      spy(result);
      return null;
    };
    const { container, rerender } = render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <Bar dataKey="pv" />
        <Comp />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-bar')).toHaveLength(2);
    expect(spy).toHaveBeenLastCalledWith(true);
    rerender(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <Comp />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-bar')).toHaveLength(1);
    expect(spy).toHaveBeenLastCalledWith(true);
  });

  it('should return true if there is RadialBar in RadialChart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(selectHasBar);
      spy(result);
      return null;
    };
    const { container, rerender } = render(
      <RadialBarChart data={PageData} width={100} height={100}>
        <RadialBar dataKey="uv" />
        <Comp />
      </RadialBarChart>,
    );
    expect(container.querySelector('.recharts-radial-bar-sectors')).toBeVisible();
    expect(spy).toHaveBeenLastCalledWith(true);

    // returns false after the only RadialBar is removed from DOM
    rerender(
      <RadialBarChart data={PageData} width={100} height={100}>
        <Comp />
      </RadialBarChart>,
    );
    expect(container.querySelector('.recharts-radial-bar-sectors')).toBeNull();
    expect(spy).toHaveBeenLastCalledWith(false);
  });

  it('should return false if RadialBarChart has no RadialBar in it', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(selectHasBar);
      spy(result);
      return null;
    };
    const { container } = render(
      <RadialBarChart data={PageData} width={100} height={100}>
        <Comp />
      </RadialBarChart>,
    );
    expect(container.querySelector('.recharts-radial-bar-sectors')).toBeNull();
    expect(spy).toHaveBeenLastCalledWith(false);
  });
});

describe('selectCalculatedPadding', () => {
  const selector = (state: RechartsRootState) => selectCalculatedXAxisPadding(state, 0);

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, 0);

  it('should return 0 when padding is explicitly provided on XAxis', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(state => selectCalculatedXAxisPadding(state, 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="name" padding={{ left: 11, right: 13 }} />
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0);
  });

  it('should return a number when padding is "gap"', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(state => selectCalculatedXAxisPadding(state, 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="pv" padding="gap" type="number" />
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(1.247917162580338);
  });

  it('should return a number when padding is "no-gap"', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(state => selectCalculatedXAxisPadding(state, 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="pv" padding="no-gap" type="number" />
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0.9955652016293147);
  });

  it('should return 0 when padding=no-gap and there is only one data point on the chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(state => selectCalculatedXAxisPadding(state, 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={[PageData[0]]} width={100} height={100}>
        <XAxis dataKey="pv" padding="no-gap" type="number" />
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0);
  });

  it('should return 0 when padding is an object', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(state => selectCalculatedXAxisPadding(state, 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="pv" padding={{ left: 11, right: 13 }} type="number" />
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0);
  });
});

describe('selectSmallestDistanceBetweenValues', () => {
  const selector = (state: RechartsRootState) => selectSmallestDistanceBetweenValues(state, 'xAxis', 0, false);

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, undefined);

  it('should return undefined if there is no data in the chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(selector);
      spy(result);
      return null;
    };
    const { container } = render(
      <BarChart data={[]} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenCalledWith(undefined);
    expectXAxisTicks(container, []);
  });

  it.each([undefined, 'category'] as const)('should return undefined if XAxis type=%s', type => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(selector);
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="pv" />
        <XAxis dataKey="name" type={type} />
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenCalledWith(undefined);
  });

  it('should return the smallest distance, in percent, between values if type=number', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(selector);
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="pv" type="number" />
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0.02773149250178529);
  });

  it('should return the smallest distance, in percent, between values if type=number', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(selector);
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="pv" type="number" />
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0.02773149250178529);
  });

  it('should return Infinity, if the data is an empty array', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(selector);
      spy(result);
      return null;
    };
    render(
      <BarChart data={[]} width={100} height={100}>
        <XAxis dataKey="pv" type="number" />
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(Infinity);
  });

  it('should return Infinity, if the data has only one entry', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(selector);
      spy(result);
      return null;
    };
    render(
      <BarChart data={[PageData[0]]} width={100} height={100}>
        <XAxis dataKey="pv" type="number" />
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(Infinity);
  });

  it('should return 0 if the data has two items with the same value', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(selector);
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="uv" type="number" />
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0);
  });
});

describe('selectCartesianGraphicalItemsData', () => {
  const selector = (state: RechartsRootState) => selectCartesianGraphicalItemsData(state, 'xAxis', 'x');

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, []);

  it('should be stable', () => {
    const store = createRechartsStore();
    const settings: CartesianGraphicalItemSettings = {
      isPanorama: false,
      type: 'bar',
      hide: false,
      stackId: 's-id',
      errorBars: [],
      dataKey: 'dataKey',
      data: PageData,
      xAxisId: 'x',
      yAxisId: 'y',
      zAxisId: 0,
      barSize: '',
    };
    store.dispatch(addCartesianGraphicalItem(settings));
    const result1 = selectCartesianGraphicalItemsData(store.getState(), 'xAxis', 'x');
    const result2 = selectCartesianGraphicalItemsData(store.getState(), 'xAxis', 'x');
    expect(result1).toBe(result2);
  });

  it('should return empty array in an empty chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelectorWithStableTest(state =>
        selectCartesianGraphicalItemsData(state, 'xAxis', defaultAxisId),
      );
      spy(tooltipData);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([]);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should return empty array in a chart with root data', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelectorWithStableTest(state =>
        selectCartesianGraphicalItemsData(state, 'xAxis', defaultAxisId),
      );
      spy(tooltipData);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <Comp />
        <Bar dataKey="pv" />
        <Bar dataKey="uv" />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([]);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should return all data defined on graphical items', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const graphicalItemsData = useAppSelectorWithStableTest(state =>
        selectCartesianGraphicalItemsData(state, 'xAxis', defaultAxisId),
      );
      spy(graphicalItemsData);
      return null;
    };
    render(
      <ComposedChart data={PageData} width={100} height={100}>
        <Area dataKey="" data={[1, 2, 3]} />
        <Area dataKey="" data={[10, 20, 30]} />
        <Line data={[4, 5, 6]} />
        <Line data={[40, 50, 60]} />
        <Scatter data={[7, 8, 9]} />
        <Scatter data={[70, 80, 90]} />
        <Comp />
      </ComposedChart>,
    );
    // as opposed to the tooltip data selector - this one stores all original data without transformation.
    expect(spy).toHaveBeenLastCalledWith(
      // the arrayContaining is there because it ignores elements order.
      expect.arrayContaining([7, 8, 9, 70, 80, 90, 1, 2, 3, 10, 20, 30, 4, 5, 6, 40, 50, 60]),
    );
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should return nothing for graphical items that do not have any explicit data prop on them', () => {
    const graphicalItemsDataSpy = vi.fn();
    const domainSpy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelectorWithStableTest(state =>
        selectCartesianGraphicalItemsData(state, 'xAxis', defaultAxisId),
      );
      graphicalItemsDataSpy(tooltipData);
      return null;
    };
    const { container } = render(
      <ComposedChart data={PageData} width={100} height={100}>
        <Area dataKey="" />
        <Area dataKey="" data={[{ x: 10 }, { x: 20 }, { x: 30 }]} />
        <Line />
        <Line data={[{ x: 40 }, { x: 50 }, { x: 60 }]} />
        <Scatter />
        <Scatter data={[{ x: 70 }, { x: 80 }, { x: 90 }]} />
        <XAxis />
        <Comp />
        <Customized component={<ExpectAxisDomain axisType="xAxis" assert={domainSpy} />} />
      </ComposedChart>,
    );
    // Scatter - surprises again - and provides empty array instead of proper undefined like the other elements! Coincidentally that makes no difference
    expect(graphicalItemsDataSpy).toHaveBeenLastCalledWith(
      // the order is arbitrary
      expect.arrayContaining([
        { x: 70 },
        { x: 80 },
        { x: 90 },
        { x: 10 },
        { x: 20 },
        { x: 30 },
        { x: 40 },
        { x: 50 },
        { x: 60 },
      ]),
    );
    expectXAxisTicks(container, [
      {
        textContent: '0',
        x: '5',
        y: '73',
      },
      {
        textContent: '1',
        x: '16.25',
        y: '73',
      },
      {
        textContent: '2',
        x: '27.5',
        y: '73',
      },
      {
        textContent: '3',
        x: '38.75',
        y: '73',
      },
      {
        textContent: '4',
        x: '50',
        y: '73',
      },
      {
        textContent: '5',
        x: '61.25',
        y: '73',
      },
      {
        textContent: '6',
        x: '72.5',
        y: '73',
      },
      {
        textContent: '7',
        x: '83.75',
        y: '73',
      },
      {
        textContent: '8',
        x: '95',
        y: '73',
      },
    ]);
    expect(domainSpy).toHaveBeenLastCalledWith([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('should not return any data defined on Pies - that one will have its own independent selector', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelectorWithStableTest(state =>
        selectCartesianGraphicalItemsData(state, 'xAxis', defaultAxisId),
      );
      spy(tooltipData);
      return null;
    };
    render(
      <PieChart width={100} height={100}>
        <Comp />
        <Pie data={[{ x: 1 }, { x: 2 }, { x: 3 }]} dataKey="x" />
        <Pie data={[{ y: 10 }, { y: 20 }, { y: 30 }]} dataKey="y" />
      </PieChart>,
    );
    /*
     * okay Pie surprises again - it adds ton of extra other properties to the original array
     * and then it pretends it was there from the start.
     * Well in this test let's pretend that's not happening and assume it provides the original array instead.
     */
    expect(spy).toHaveBeenLastCalledWith([]);
  });
});

describe('selectDisplayedData', () => {
  const selector = (state: RechartsRootState) => selectDisplayedData(state, 'xAxis', defaultAxisId, false);

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, []);

  it('should return empty in an empty chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(selector);
      spy(result);
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([]);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should return the original data if there is no axis with matching ID', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(selector);
      spy(result);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={data1} />
        <Line data={data2} />
        <Comp />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([
      {
        label: 'Iter: 0',
        x: 211,
        y: 481,
        z: 1798,
      },
      {
        label: 'Iter: 1',
        x: 245,
        y: 672,
        z: 1087,
      },
      {
        label: 'Iter: 2',
        x: 266,
        y: 721,
        z: 1631,
      },
      {
        label: 'Iter: 3',
        x: 140,
        y: 446,
        z: 1932,
      },
      {
        label: 'Iter: 4',
        x: 131,
        y: 598,
        z: 1184,
      },
      {
        label: 'Iter: 5',
        x: 280,
        y: 774,
        z: 1811,
      },
      {
        label: 'Iter: 6',
        x: 294,
        y: 687,
        z: 1229,
      },
      {
        label: 'Iter: 7',
        x: 239,
        y: 762,
        z: 1410,
      },
      {
        label: 'Iter: 8',
        x: 293,
        y: 439,
        z: 1557,
      },
      {
        label: 'Iter: 9',
        x: 244,
        y: 569,
        z: 1305,
      },
    ]);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should be stable', () => {
    const Comp = (): null => {
      const result1 = useAppSelectorWithStableTest(selector);
      const result2 = useAppSelectorWithStableTest(selector);
      expect(result1).toBe(result2);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={data1} />
        <Line data={data2} />
        <Comp />
      </LineChart>,
    );
  });

  it('should not recompute when an irrelevant property in the state changes', () => {
    const store = createRechartsStore();
    const result1 = selectDisplayedData(store.getState(), 'xAxis', '0', false);
    store.dispatch(setLegendSize({ width: 10, height: 20 }));
    const result2 = selectDisplayedData(store.getState(), 'xAxis', '0', false);
    expect(result1).toBe(result2);
  });

  it('should return the original data if there is no axis with matching ID but graphical items have dataKeys', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(selector);
      spy(result);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line dataKey="x" data={data1} />
        <Line dataKey="y" data={data2} />
        <Comp />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([
      {
        label: 'Iter: 0',
        x: 211,
        y: 481,
        z: 1798,
      },
      {
        label: 'Iter: 1',
        x: 245,
        y: 672,
        z: 1087,
      },
      {
        label: 'Iter: 2',
        x: 266,
        y: 721,
        z: 1631,
      },
      {
        label: 'Iter: 3',
        x: 140,
        y: 446,
        z: 1932,
      },
      {
        label: 'Iter: 4',
        x: 131,
        y: 598,
        z: 1184,
      },
      {
        label: 'Iter: 5',
        x: 280,
        y: 774,
        z: 1811,
      },
      {
        label: 'Iter: 6',
        x: 294,
        y: 687,
        z: 1229,
      },
      {
        label: 'Iter: 7',
        x: 239,
        y: 762,
        z: 1410,
      },
      {
        label: 'Iter: 8',
        x: 293,
        y: 439,
        z: 1557,
      },
      {
        label: 'Iter: 9',
        x: 244,
        y: 569,
        z: 1305,
      },
    ]);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should return data defined in all graphical items based on the input dataKey, and default axis ID', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      const result = useAppSelectorWithStableTest(state =>
        selectAllAppliedValues(state, 'xAxis', defaultAxisId, isPanorama),
      );
      spy(result);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={data1} />
        <Line data={data2} />
        <XAxis dataKey="x" />
        <Comp />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([
      { value: 211 },
      { value: 245 },
      { value: 266 },
      { value: 140 },
      { value: 131 },
      { value: 280 },
      { value: 294 },
      { value: 239 },
      { value: 293 },
      { value: 244 },
    ]);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should return data defined in graphical items with matching axis ID', () => {
    const displayedDataSpy1 = vi.fn();
    const displayedDataSpy2 = vi.fn();
    const axisDomainSpy1 = vi.fn();
    const axisDomainSpy2 = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      displayedDataSpy1(
        useAppSelectorWithStableTest(state => selectDisplayedData(state, 'xAxis', 'my axis id', isPanorama)),
      );
      displayedDataSpy2(
        useAppSelectorWithStableTest(state => selectDisplayedData(state, 'xAxis', 'some other ID', isPanorama)),
      );
      axisDomainSpy1(useAppSelectorWithStableTest(state => selectAxisDomain(state, 'xAxis', 'my axis id', isPanorama)));
      axisDomainSpy2(
        useAppSelectorWithStableTest(state => selectAxisDomain(state, 'xAxis', 'some other ID', isPanorama)),
      );
      return null;
    };
    const { container } = render(
      <LineChart width={100} height={100}>
        <Line data={data2} xAxisId="my axis id" />
        <XAxis dataKey="x" xAxisId="my axis id" />
        <Line data={data1} xAxisId="some other ID" />
        <XAxis dataKey="y" xAxisId="some other ID" />
        <Comp />
      </LineChart>,
    );
    const allAxes = container.querySelectorAll('.recharts-xAxis');
    expect(allAxes).toHaveLength(2);
    expectXAxisTicks(allAxes[0], [
      {
        textContent: '280',
        x: '5',
        y: '43',
      },
      {
        textContent: '294',
        x: '27.5',
        y: '43',
      },
      {
        textContent: '239',
        x: '50',
        y: '43',
      },
      {
        textContent: '293',
        x: '72.5',
        y: '43',
      },
      {
        textContent: '244',
        x: '95',
        y: '43',
      },
    ]);
    expectXAxisTicks(allAxes[1], [
      {
        textContent: '481',
        x: '5',
        y: '73',
      },
      {
        textContent: '672',
        x: '27.5',
        y: '73',
      },
      {
        textContent: '721',
        x: '50',
        y: '73',
      },
      {
        textContent: '446',
        x: '72.5',
        y: '73',
      },
      {
        textContent: '598',
        x: '95',
        y: '73',
      },
    ]);
    expect(axisDomainSpy1).toHaveBeenLastCalledWith([280, 294, 239, 293, 244]);
    expect(axisDomainSpy2).toHaveBeenLastCalledWith([481, 672, 721, 446, 598]);
    expect(axisDomainSpy1).toHaveBeenCalledTimes(2);
    expect(axisDomainSpy2).toHaveBeenCalledTimes(2);
    expect(displayedDataSpy1).toHaveBeenLastCalledWith(data2);
    expect(displayedDataSpy2).toHaveBeenLastCalledWith(data1);
    expect(displayedDataSpy1).toHaveBeenCalledTimes(2);
    expect(displayedDataSpy2).toHaveBeenCalledTimes(2);
  });

  it('should gather data from all graphical items that match the axis ID', () => {
    const displayedDataSpy = vi.fn();
    const Comp = (): null => {
      displayedDataSpy(useAppSelectorWithStableTest(selector));
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={data1} />
        <Line data={data2} />
        <XAxis dataKey="y" />
        <Comp />
      </LineChart>,
    );
    expect(displayedDataSpy).toHaveBeenLastCalledWith(mockData);
    expect(displayedDataSpy).toHaveBeenCalledTimes(2);
  });

  it('should return data defined in the chart root', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(selector);
      spy(result);
      return null;
    };
    render(
      <LineChart data={data1} width={100} height={100}>
        <Line />
        <XAxis dataKey="x" />
        <Comp />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([
      {
        label: 'Iter: 0',
        x: 211,
        y: 481,
        z: 1798,
      },
      {
        label: 'Iter: 1',
        x: 245,
        y: 672,
        z: 1087,
      },
      {
        label: 'Iter: 2',
        x: 266,
        y: 721,
        z: 1631,
      },
      {
        label: 'Iter: 3',
        x: 140,
        y: 446,
        z: 1932,
      },
      {
        label: 'Iter: 4',
        x: 131,
        y: 598,
        z: 1184,
      },
    ]);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should return data defined in the chart root regardless of the axis ID match', () => {
    const displayedDataSpy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      const result = useAppSelectorWithStableTest(state =>
        selectDisplayedData(state, 'xAxis', 'axis with this ID is not present', isPanorama),
      );
      displayedDataSpy(result);
      return null;
    };
    render(
      <LineChart data={data1} width={100} height={100}>
        <Comp />
        <XAxis dataKey="x" />
      </LineChart>,
    );
    expect(displayedDataSpy).toHaveBeenLastCalledWith([
      {
        label: 'Iter: 0',
        x: 211,
        y: 481,
        z: 1798,
      },
      {
        label: 'Iter: 1',
        x: 245,
        y: 672,
        z: 1087,
      },
      {
        label: 'Iter: 2',
        x: 266,
        y: 721,
        z: 1631,
      },
      {
        label: 'Iter: 3',
        x: 140,
        y: 446,
        z: 1932,
      },
      {
        label: 'Iter: 4',
        x: 131,
        y: 598,
        z: 1184,
      },
    ]);
    expect(displayedDataSpy).toHaveBeenCalledTimes(1);
  });

  it('should slice chart root data by dataStartIndex and dataEndIndex', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(selector);
      spy(result);
      return null;
    };
    render(
      <LineChart data={mockData} width={100} height={100}>
        <Line />
        <Brush startIndex={1} endIndex={4} />
        <XAxis dataKey="x" />
        <Comp />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([
      {
        label: 'Iter: 1',
        x: 245,
        y: 672,
        z: 1087,
      },
      {
        label: 'Iter: 2',
        x: 266,
        y: 721,
        z: 1631,
      },
      {
        label: 'Iter: 3',
        x: 140,
        y: 446,
        z: 1932,
      },
      {
        label: 'Iter: 4',
        x: 131,
        y: 598,
        z: 1184,
      },
    ]);
    expect(spy).toHaveBeenCalledTimes(2);
  });
});

describe('selectAllAppliedValues', () => {
  const selector = (state: RechartsRootState) => selectAllAppliedValues(state, 'xAxis', defaultAxisId, false);

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, []);

  it('should return empty array in an empty chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      const result = useAppSelectorWithStableTest(state =>
        selectAllAppliedValues(state, 'xAxis', defaultAxisId, isPanorama),
      );
      spy(result);
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([]);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should return empty array if there is no axis with matching ID', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      const result = useAppSelectorWithStableTest(state =>
        selectAllAppliedValues(state, 'xAxis', defaultAxisId, isPanorama),
      );
      spy(result);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line />
        <Comp />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([]);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should return all data defined in all graphical items based on the input dataKey, and default axis ID', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      const result = useAppSelectorWithStableTest(state =>
        selectAllAppliedValues(state, 'xAxis', defaultAxisId, isPanorama),
      );
      spy(result);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={[{ x: 1 }, { x: 2 }, { x: 3 }]} />
        <Line data={[{ x: 10 }, { x: 20 }, { x: 30 }]} />
        <XAxis dataKey="x" />
        <Comp />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 10 },
      { value: 20 },
      { value: 30 },
    ]);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should return data defined in the chart root', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      const result = useAppSelectorWithStableTest(state =>
        selectAllAppliedValues(state, 'xAxis', defaultAxisId, isPanorama),
      );
      spy(result);
      return null;
    };
    render(
      <LineChart data={data1} width={100} height={100}>
        <Line />
        <XAxis dataKey="x" />
        <Comp />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([
      { value: 211 },
      { value: 245 },
      { value: 266 },
      { value: 140 },
      { value: 131 },
    ]);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should return values as full input objects if the axis ID does not match anything in the data', () => {
    const displayedDataSpy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      const result = useAppSelectorWithStableTest(state =>
        selectAllAppliedValues(state, 'xAxis', 'axis with this ID is not present', isPanorama),
      );
      displayedDataSpy(result);
      return null;
    };
    render(
      <LineChart data={data1} width={100} height={100}>
        <Comp />
        <XAxis dataKey="this dataKey is not present in the input data" />
      </LineChart>,
    );
    expect(displayedDataSpy).toHaveBeenLastCalledWith([
      {
        value: {
          label: 'Iter: 0',
          x: 211,
          y: 481,
          z: 1798,
        },
      },
      {
        value: {
          label: 'Iter: 1',
          x: 245,
          y: 672,
          z: 1087,
        },
      },
      {
        value: {
          label: 'Iter: 2',
          x: 266,
          y: 721,
          z: 1631,
        },
      },
      {
        value: {
          label: 'Iter: 3',
          x: 140,
          y: 446,
          z: 1932,
        },
      },
      {
        value: {
          label: 'Iter: 4',
          x: 131,
          y: 598,
          z: 1184,
        },
      },
    ]);
    expect(displayedDataSpy).toHaveBeenCalledTimes(1);
  });
});

describe('selectErrorBarsSettings', () => {
  const selector = (state: RechartsRootState) => selectErrorBarsSettings(state, 'xAxis', defaultAxisId);

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, []);

  it('should return empty array in a chart with no ErrorBars', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelectorWithStableTest(state => selectErrorBarsSettings(state, 'xAxis', defaultAxisId));
      spy(result);
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Bar isAnimationActive={false} />
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([]);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should return empty array if there is no axis with matching ID', () => {
    const xAxisSpy = vi.fn();
    const yAxisSpy = vi.fn();
    const Comp = (): null => {
      xAxisSpy(useAppSelectorWithStableTest(state => selectErrorBarsSettings(state, 'xAxis', 'foo')));
      yAxisSpy(useAppSelectorWithStableTest(state => selectErrorBarsSettings(state, 'yAxis', 'bar')));
      return null;
    };
    render(
      <LineChart width={100} height={100} data={PageData}>
        <Line isAnimationActive={false}>
          <ErrorBar dataKey="data-x" direction="x" />
          <ErrorBar dataKey="data-y" direction="y" />
        </Line>
        <XAxis type="number" />
        <Comp />
      </LineChart>,
    );
    // There are ErrorBars but they are specified for another XAxis
    expect(xAxisSpy).toHaveBeenLastCalledWith([]);
    expect(yAxisSpy).toHaveBeenLastCalledWith([]);
    expect(xAxisSpy).toHaveBeenCalledTimes(3);
    expect(yAxisSpy).toHaveBeenCalledTimes(3);
  });

  it('should return bars settings if present in BarChart', () => {
    const xAxisSpy = vi.fn();
    const yAxisSpy = vi.fn();
    const Comp = (): null => {
      xAxisSpy(useAppSelectorWithStableTest(state => selectErrorBarsSettings(state, 'xAxis', defaultAxisId)));
      yAxisSpy(useAppSelectorWithStableTest(state => selectErrorBarsSettings(state, 'yAxis', defaultAxisId)));
      return null;
    };
    render(
      <BarChart data={[{ x: 1 }, { x: 2 }, { x: 3 }]} width={100} height={100}>
        <Bar dataKey="x" isAnimationActive={false}>
          <ErrorBar dataKey="data-x" direction="x" />
          <ErrorBar dataKey="data-y" direction="y" />
        </Bar>
        <Comp />
        <XAxis type="number" />
      </BarChart>,
    );
    expect(xAxisSpy).toHaveBeenLastCalledWith([
      {
        dataKey: 'data-x',
        direction: 'x',
      },
    ]);
    expect(yAxisSpy).toHaveBeenLastCalledWith([
      {
        dataKey: 'data-y',
        direction: 'y',
      },
    ]);
    expect(xAxisSpy).toHaveBeenCalledTimes(3);
    expect(yAxisSpy).toHaveBeenCalledTimes(3);
  });

  it('should return bars settings if present in LineChart', () => {
    const xAxisSpy = vi.fn();
    const yAxisSpy = vi.fn();
    const Comp = (): null => {
      xAxisSpy(useAppSelectorWithStableTest(state => selectErrorBarsSettings(state, 'xAxis', defaultAxisId)));
      yAxisSpy(useAppSelectorWithStableTest(state => selectErrorBarsSettings(state, 'yAxis', defaultAxisId)));
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={[{ x: 1 }, { x: 2 }, { x: 3 }]} />
        <Line data={[{ x: 10 }, { x: 20 }, { x: 30 }]} isAnimationActive={false} dataKey="x">
          <ErrorBar dataKey="data-x" direction="x" />
          <ErrorBar dataKey="data-y" direction="y" />
        </Line>
        <Comp />
        <XAxis type="number" />
      </LineChart>,
    );
    expect(xAxisSpy).toHaveBeenLastCalledWith([
      {
        dataKey: 'data-x',
        direction: 'x',
      },
    ]);
    expect(yAxisSpy).toHaveBeenLastCalledWith([
      {
        dataKey: 'data-y',
        direction: 'y',
      },
    ]);
    expect(xAxisSpy).toHaveBeenCalledTimes(3);
    expect(yAxisSpy).toHaveBeenCalledTimes(3);
  });

  it('should return bars settings if present in vertical LineChart', () => {
    const xAxisSpy = vi.fn();
    const yAxisSpy = vi.fn();
    const Comp = (): null => {
      xAxisSpy(useAppSelectorWithStableTest(state => selectErrorBarsSettings(state, 'xAxis', defaultAxisId)));
      yAxisSpy(useAppSelectorWithStableTest(state => selectErrorBarsSettings(state, 'yAxis', defaultAxisId)));
      return null;
    };
    render(
      <LineChart width={100} height={100} layout="vertical">
        <Line data={[{ x: 1 }, { x: 2 }, { x: 3 }]} />
        <Line data={[{ x: 10 }, { x: 20 }, { x: 30 }]} isAnimationActive={false} dataKey="x">
          <ErrorBar dataKey="data-x" direction="x" />
          <ErrorBar dataKey="data-y" direction="y" />
        </Line>
        <Comp />
        <XAxis type="number" />
      </LineChart>,
    );
    expect(xAxisSpy).toHaveBeenLastCalledWith([
      {
        dataKey: 'data-x',
        direction: 'x',
      },
    ]);
    expect(yAxisSpy).toHaveBeenLastCalledWith([
      {
        dataKey: 'data-y',
        direction: 'y',
      },
    ]);
    expect(xAxisSpy).toHaveBeenCalledTimes(3);
    expect(yAxisSpy).toHaveBeenCalledTimes(3);
  });

  it('should return bars settings if present in ScatterChart', () => {
    const xAxisErrorBarSpy = vi.fn();
    const yAxisErrorBarSpy = vi.fn();
    const yAxisSpy = vi.fn();
    const Comp = (): null => {
      xAxisErrorBarSpy(useAppSelectorWithStableTest(state => selectErrorBarsSettings(state, 'xAxis', defaultAxisId)));
      yAxisErrorBarSpy(useAppSelectorWithStableTest(state => selectErrorBarsSettings(state, 'yAxis', defaultAxisId)));
      yAxisSpy(useAppSelectorWithStableTest(state => selectAxisSettings(state, 'yAxis', defaultAxisId)));
      return null;
    };
    render(
      <ScatterChart width={100} height={100}>
        <Scatter data={[{ x: 1 }, { x: 2 }, { x: 3 }]} dataKey="x" isAnimationActive={false}>
          <ErrorBar dataKey="data-x" direction="x" />
          <ErrorBar dataKey="data-y" direction="y" />
        </Scatter>
        <Comp />
        <XAxis type="number" />
      </ScatterChart>,
    );
    expect(yAxisSpy).toHaveBeenLastCalledWith({
      allowDataOverflow: false,
      allowDecimals: true,
      allowDuplicatedCategory: true,
      angle: 0,
      dataKey: undefined,
      domain: [0, 'auto'],
      hide: true,
      id: 0,
      includeHidden: false,
      interval: 'preserveEnd',
      minTickGap: 5,
      mirror: false,
      name: undefined,
      orientation: 'left',
      padding: {
        bottom: 0,
        top: 0,
      },
      reversed: false,
      scale: 'auto',
      tick: true,
      tickCount: 5,
      tickFormatter: undefined,
      ticks: undefined,
      type: 'number',
      unit: undefined,
      width: 60,
    });
    expect(xAxisErrorBarSpy).toHaveBeenLastCalledWith([
      {
        dataKey: 'data-x',
        direction: 'x',
      },
    ]);
    expect(yAxisErrorBarSpy).toHaveBeenLastCalledWith([
      {
        dataKey: 'data-y',
        direction: 'y',
      },
    ]);
    expect(xAxisErrorBarSpy).toHaveBeenCalledTimes(5);
    expect(yAxisErrorBarSpy).toHaveBeenCalledTimes(5);
  });

  it('should report all relevant error bars on Bar, Line, and Scatter', () => {
    const xAxisSpy = vi.fn();
    const yAxisSpy = vi.fn();
    const Comp = (): null => {
      xAxisSpy(useAppSelectorWithStableTest(state => selectErrorBarsSettings(state, 'xAxis', defaultAxisId)));
      yAxisSpy(useAppSelectorWithStableTest(state => selectErrorBarsSettings(state, 'yAxis', defaultAxisId)));
      return null;
    };
    render(
      <ComposedChart data={[{ x: 1 }, { x: 2 }, { x: 3 }]} width={100} height={100}>
        <Bar dataKey="x" isAnimationActive={false}>
          <ErrorBar dataKey="a" direction="x" />
          <ErrorBar dataKey="b" direction="y" />
        </Bar>
        <Line data={[{ x: 10 }, { x: 20 }, { x: 30 }]} isAnimationActive={false}>
          <ErrorBar dataKey="c" direction="x" />
          <ErrorBar dataKey="d" direction="y" />
        </Line>
        <Scatter data={[{ x: 100 }, { x: 200 }, { x: 300 }]} isAnimationActive={false}>
          <ErrorBar dataKey="e" direction="x" />
          <ErrorBar dataKey="f" direction="y" />
        </Scatter>
        <Comp />
        <XAxis type="number" />
        <YAxis dataKey="x" />
      </ComposedChart>,
    );
    expect(xAxisSpy).toHaveBeenLastCalledWith([
      {
        dataKey: 'a',
        direction: 'x',
      },
      {
        dataKey: 'c',
        direction: 'x',
      },
      {
        dataKey: 'e',
        direction: 'x',
      },
    ]);
    expect(yAxisSpy).toHaveBeenLastCalledWith([
      {
        dataKey: 'b',
        direction: 'y',
      },
      {
        dataKey: 'd',
        direction: 'y',
      },
      {
        dataKey: 'f',
        direction: 'y',
      },
    ]);
    expect(xAxisSpy).toHaveBeenCalledTimes(5);
    expect(yAxisSpy).toHaveBeenCalledTimes(5);
  });

  it('should be stable when empty', () => {
    const store = createRechartsStore();
    const result1 = selectErrorBarsSettings(store.getState(), 'xAxis', defaultAxisId);
    const result2 = selectErrorBarsSettings(store.getState(), 'xAxis', defaultAxisId);
    expect(result1).toBe(result2);
  });

  it('should be stable with data', () => {
    const store = createRechartsStore();
    const settings: CartesianGraphicalItemSettings = {
      isPanorama: false,
      barSize: undefined,
      type: 'bar',
      hide: false,
      stackId: 'q',
      dataKey: 'x',
      data: [],
      xAxisId: '',
      yAxisId: '',
      zAxisId: 0,
      errorBars: [
        {
          direction: 'x',
          dataKey: '',
        },
      ],
    };
    store.dispatch(addCartesianGraphicalItem(settings));
    const result1 = selectErrorBarsSettings(store.getState(), 'xAxis', defaultAxisId);
    const result2 = selectErrorBarsSettings(store.getState(), 'xAxis', defaultAxisId);
    expect(result1).toBe(result2);
  });
});

describe('selectNiceTicks', () => {
  const selector = (state: RechartsRootState) => selectNiceTicks(state, 'xAxis', defaultAxisId, false);

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, undefined);

  it('should return undefined in a chart with no XAxis', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      const result = useAppSelectorWithStableTest(state => selectNiceTicks(state, 'xAxis', defaultAxisId, isPanorama));
      spy(result);
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Bar isAnimationActive={false} />
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(undefined);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should return undefined if there is no axis with matching ID', () => {
    const xAxisSpy = vi.fn();
    const yAxisSpy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      xAxisSpy(useAppSelectorWithStableTest(state => selectNiceTicks(state, 'xAxis', 'foo', isPanorama)));
      yAxisSpy(useAppSelectorWithStableTest(state => selectNiceTicks(state, 'yAxis', 'bar', isPanorama)));
      return null;
    };
    render(
      <LineChart width={100} height={100} data={PageData}>
        <Line isAnimationActive={false} />
        <XAxis type="number" />
        <Comp />
      </LineChart>,
    );
    // There is an XAxis but it has a different ID
    expect(xAxisSpy).toHaveBeenLastCalledWith(undefined);
    expect(yAxisSpy).toHaveBeenLastCalledWith(undefined);
    expect(xAxisSpy).toHaveBeenCalledTimes(1);
    expect(yAxisSpy).toHaveBeenCalledTimes(1);
  });

  // https://github.com/recharts/recharts/issues/6011
  it('should return undefined followed by a well-formed domain in vertical orientation with a single datapoint', () => {
    const xAxisSpy = vi.fn();
    const yAxisSpy = vi.fn();
    const errSpy = vi.fn();
    vi.spyOn(console, 'error').mockImplementation(errSpy);

    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      xAxisSpy(useAppSelectorWithStableTest(state => selectNiceTicks(state, 'xAxis', defaultAxisId, isPanorama)));
      yAxisSpy(useAppSelectorWithStableTest(state => selectNiceTicks(state, 'yAxis', defaultAxisId, isPanorama)));
      return null;
    };
    render(
      <LineChart width={100} height={100} data={[PageData[0]]} layout="vertical">
        <Line isAnimationActive={false} />
        <XAxis type="number" dataKey="uv" />
        <YAxis type="category" dataKey="name" />
        <Comp />
      </LineChart>,
    );

    expect(errSpy).not.toHaveBeenCalledWith(new Error('[DecimalError] Invalid argument: undefined'));
    // the first render was previously passing a malformed domain with a single datapoint in vertical orientation, 2nd render has always resolved correctly
    expect(xAxisSpy).toHaveBeenNthCalledWith(1, undefined);
    expect(xAxisSpy).toHaveBeenLastCalledWith([0, 100, 200, 300, 400]);
    expect(yAxisSpy).toHaveBeenLastCalledWith(undefined);

    expect(xAxisSpy).toHaveBeenCalledTimes(2);
    expect(yAxisSpy).toHaveBeenCalledTimes(2);
  });

  const casesThatProduceNiceTicks: ReadonlyArray<{ domain: AxisDomain; expectedTicks: ReadonlyArray<number> }> = [
    { domain: undefined, expectedTicks: [0, 100, 200, 300, 400] },
    { domain: ['auto', 'auto'], expectedTicks: [180, 240, 300, 360, 420] },
    { domain: [-500, 'auto'], expectedTicks: [-500, -250, 0, 250, 500] },
    { domain: ['auto', 3000], expectedTicks: [0, 750, 1500, 2250, 3000] },
  ];

  it.each(casesThatProduceNiceTicks)('should return nice ticks when domain=%s', ({ domain, expectedTicks }) => {
    const niceTicksSpy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      const result = useAppSelectorWithStableTest(state => selectNiceTicks(state, 'xAxis', defaultAxisId, isPanorama));
      niceTicksSpy(result);
      return null;
    };
    render(
      <LineChart width={100} height={100} data={PageData}>
        <Line dataKey="pv" isAnimationActive={false} />
        <XAxis type="number" dataKey="uv" domain={domain} />
        <Comp />
      </LineChart>,
    );
    expect(niceTicksSpy).toHaveBeenLastCalledWith(expectedTicks);
    expect(niceTicksSpy).toHaveBeenCalledTimes(2);
  });
});

describe('mergeDomains', () => {
  it('should return undefined when called without domains', () => {
    expect(mergeDomains()).toEqual(undefined);
    expect(mergeDomains(undefined)).toEqual(undefined);
  });

  it('should return the same domain when called with a single domain', () => {
    expect(mergeDomains([100, 200])).toEqual([100, 200]);
    expect(mergeDomains(undefined, [100, 200], undefined)).toEqual([100, 200]);
  });

  it('should find min, max when called with multiple domains', () => {
    expect(mergeDomains([100, 200], [150, 250])).toEqual([100, 250]);
    expect(mergeDomains([100, 200], [150, 250], [0, 50])).toEqual([0, 250]);
  });

  it('should ignore domains that are undefined', () => {
    expect(mergeDomains([100, 200], [150, 250])).toEqual([100, 250]);
    expect(mergeDomains([100, 200], [150, 250], undefined, [0, 50])).toEqual([0, 250]);
  });
});

describe('selectAxisWithScale', () => {
  const selector = (state: RechartsRootState) => selectAxisWithScale(state, 'xAxis', defaultAxisId, false);

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, undefined);

  it('should return undefined in a chart with no data', () => {
    const xAxisSpy = vi.fn();
    const yAxisSpy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      xAxisSpy(useAppSelectorWithStableTest(state => selectAxisWithScale(state, 'xAxis', defaultAxisId, isPanorama)));
      yAxisSpy(useAppSelectorWithStableTest(state => selectAxisWithScale(state, 'xAxis', defaultAxisId, isPanorama)));
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Bar isAnimationActive={false} />
        <Comp />
      </BarChart>,
    );
    expect(xAxisSpy).toHaveBeenLastCalledWith(undefined);
    expect(xAxisSpy).toHaveBeenCalledTimes(1);
    expect(yAxisSpy).toHaveBeenLastCalledWith(undefined);
    expect(yAxisSpy).toHaveBeenCalledTimes(1);
  });

  it('should return implicit XAxis if there is no axis with matching ID, but undefined YAxis', () => {
    const xAxisSpy = vi.fn();
    const yAxisSpy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      xAxisSpy(useAppSelectorWithStableTest(state => selectAxisWithScale(state, 'xAxis', 'foo', isPanorama)));
      yAxisSpy(useAppSelectorWithStableTest(state => selectAxisWithScale(state, 'yAxis', 'bar', isPanorama)));
      return null;
    };
    render(
      <LineChart width={100} height={100} data={PageData}>
        <Line isAnimationActive={false} />
        <XAxis type="number" />
        <Comp />
      </LineChart>,
    );
    // There is an XAxis but it has a different ID
    expect(xAxisSpy).toHaveBeenLastCalledWith({
      allowDataOverflow: false,
      allowDecimals: true,
      allowDuplicatedCategory: true,
      angle: 0,
      dataKey: undefined,
      domain: undefined,
      height: 30,
      hide: true,
      id: 0,
      includeHidden: false,
      interval: 'preserveEnd',
      minTickGap: 5,
      mirror: false,
      name: undefined,
      orientation: 'bottom',
      padding: {
        left: 0,
        right: 0,
      },
      reversed: false,
      scale: expect.toBeRechartsScale({ domain: [0, 1, 2, 3, 4, 5], range: [5, 95] }),
      tick: true,
      tickCount: 5,
      tickFormatter: undefined,
      ticks: undefined,
      type: 'category',
      unit: undefined,
    });
    expect(yAxisSpy).toHaveBeenLastCalledWith(undefined);
    expect(xAxisSpy).toHaveBeenCalledTimes(2);
    expect(yAxisSpy).toHaveBeenCalledTimes(2);
  });

  it('should return axis object in a chart with explicit axes', () => {
    const xAxisSpy = vi.fn();
    const yAxisSpy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      xAxisSpy(useAppSelectorWithStableTest(state => selectAxisWithScale(state, 'xAxis', defaultAxisId, isPanorama)));
      yAxisSpy(useAppSelectorWithStableTest(state => selectAxisWithScale(state, 'yAxis', defaultAxisId, isPanorama)));
      return null;
    };
    render(
      <LineChart width={100} height={100} data={PageData}>
        <Line isAnimationActive={false} dataKey="pv" />
        <XAxis dataKey="name" />
        <YAxis />
        <Comp />
      </LineChart>,
    );
    expect(xAxisSpy).toHaveBeenLastCalledWith({
      allowDataOverflow: false,
      allowDecimals: true,
      allowDuplicatedCategory: true,
      angle: 0,
      dataKey: 'name',
      domain: undefined,
      height: 30,
      hide: false,
      id: defaultAxisId,
      includeHidden: false,
      interval: 'preserveEnd',
      minTickGap: 5,
      mirror: false,
      name: undefined,
      orientation: 'bottom',
      padding: {
        left: 0,
        right: 0,
      },
      reversed: false,
      scale: expect.toBeRechartsScale({
        domain: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F'],
        range: [65, 95],
      }),
      tick: true,
      tickCount: 5,
      tickFormatter: undefined,
      ticks: undefined,
      type: 'category',
      unit: undefined,
    });
    expect(yAxisSpy).toHaveBeenLastCalledWith({
      allowDataOverflow: false,
      allowDecimals: true,
      allowDuplicatedCategory: true,
      angle: 0,
      dataKey: undefined,
      domain: undefined,
      hide: false,
      id: 0,
      includeHidden: false,
      interval: 'preserveEnd',
      minTickGap: 5,
      mirror: false,
      name: undefined,
      orientation: 'left',
      padding: {
        bottom: 0,
        top: 0,
      },
      reversed: false,
      scale: expect.toBeRechartsScale({ domain: [0, 10000], range: [65, 5] }),
      tick: true,
      tickCount: 5,
      tickFormatter: undefined,
      ticks: undefined,
      type: 'number',
      unit: undefined,
      width: 60,
    });
    expect(xAxisSpy).toHaveBeenCalledTimes(2);
    expect(yAxisSpy).toHaveBeenCalledTimes(2);
  });

  it('should be stable between different calls', () => {
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      const x1 = useAppSelectorWithStableTest(state => selectAxisWithScale(state, 'xAxis', defaultAxisId, isPanorama));
      const y1 = useAppSelectorWithStableTest(state => selectAxisWithScale(state, 'yAxis', defaultAxisId, isPanorama));
      const x2 = useAppSelectorWithStableTest(state => selectAxisWithScale(state, 'xAxis', defaultAxisId, isPanorama));
      const y2 = useAppSelectorWithStableTest(state => selectAxisWithScale(state, 'yAxis', defaultAxisId, isPanorama));

      expect(x1).toBe(x2);
      expect(y1).toBe(y2);
      return null;
    };
    render(
      <LineChart width={100} height={100} data={PageData}>
        <Line isAnimationActive={false} dataKey="pv" />
        <XAxis dataKey="name" />
        <YAxis />
        <Comp />
      </LineChart>,
    );
  });

  // https://github.com/recharts/recharts/issues/5625
  it('may call the selector again when unrelated props change but it should keep passing the same instance', () => {
    const xAxisSpy = vi.fn();
    const yAxisSpy = vi.fn();

    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      xAxisSpy(useAppSelectorWithStableTest(state => selectAxisWithScale(state, 'xAxis', defaultAxisId, isPanorama)));
      yAxisSpy(useAppSelectorWithStableTest(state => selectAxisWithScale(state, 'yAxis', defaultAxisId, isPanorama)));
      return null;
    };
    const TestCase = () => {
      const [dataKey, setDataKey] = React.useState('uv');
      return (
        <>
          {dataKey === 'uv' ? (
            <button type="button" onClick={() => setDataKey('pv')}>
              Change DataKey to pv
            </button>
          ) : (
            <button type="button" onClick={() => setDataKey('uv')}>
              Change DataKey to uv
            </button>
          )}
          <LineChart width={100} height={100} data={PageData}>
            <Line isAnimationActive={false} dataKey={dataKey} />
            <XAxis dataKey="name" />
            <YAxis />
            <Comp />
          </LineChart>
        </>
      );
    };

    const { container } = render(<TestCase />);

    expect(xAxisSpy).toHaveBeenCalledTimes(2);
    const expectedXAxis: XAxisSettings & BaseAxisWithScale = {
      allowDataOverflow: false,
      allowDecimals: true,
      allowDuplicatedCategory: true,
      angle: 0,
      dataKey: 'name',
      domain: undefined,
      height: 30,
      hide: false,
      id: defaultAxisId,
      includeHidden: false,
      interval: 'preserveEnd',
      minTickGap: 5,
      mirror: false,
      name: undefined,
      orientation: 'bottom',
      padding: {
        left: 0,
        right: 0,
      },
      reversed: false,
      scale: expect.toBeRechartsScale({
        domain: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F'],
        range: [65, 95],
      }),
      tick: true,
      tickCount: 5,
      tickFormatter: undefined,
      ticks: undefined,
      type: 'category',
      unit: undefined,
    };
    // Second call is when the chart is populated
    expect(xAxisSpy).toHaveBeenNthCalledWith(2, expectedXAxis);

    expect(yAxisSpy).toHaveBeenCalledTimes(2);
    expect(yAxisSpy).toHaveBeenNthCalledWith(1, undefined);
    expect(yAxisSpy).toHaveBeenNthCalledWith(2, {
      allowDataOverflow: false,
      allowDecimals: true,
      allowDuplicatedCategory: true,
      angle: 0,
      dataKey: undefined,
      domain: undefined,
      hide: false,
      id: 0,
      includeHidden: false,
      interval: 'preserveEnd',
      minTickGap: 5,
      mirror: false,
      name: undefined,
      orientation: 'left',
      padding: {
        bottom: 0,
        top: 0,
      },
      reversed: false,
      scale: expect.toBeRechartsScale({ domain: [0, 400], range: [65, 5] }),
      tick: true,
      tickCount: 5,
      tickFormatter: undefined,
      ticks: undefined,
      type: 'number',
      unit: undefined,
      width: 60,
    });

    const button = container.querySelector('button');
    assertNotNull(button);
    act(() => {
      button.click();
    });

    expect(xAxisSpy).toHaveBeenCalledTimes(4);
    expect(xAxisSpy).toHaveBeenNthCalledWith(3, expectedXAxis);
    expect(xAxisSpy).toHaveBeenNthCalledWith(4, expectedXAxis);
    expect(xAxisSpy.mock.calls[1][0]).toBe(xAxisSpy.mock.calls[2][0]);

    /*
     * This is not very intuitive but correct. The scale is different instance
     * because at this point, the chart is re-rendering which means the Line gets removed and then added back with new props.
     *
     * Call with index 2 is the render after Line has been removed.
     * That means the selectors run again because the chart might have changed.
     *
     * Call with index 3 is the render from when the Line is present in the store again.
     * It doesn't have data prop - but it could! - so the selectors do one extra run to verify that.
     *
     * The end result is that the scale is different instance but the same values.
     * The `expect.toBeRechartsScale` verifies that domain equals and range equals - which they do - but instances don't.
     *
     */
    expect(xAxisSpy.mock.calls[2][0]).not.toEqual(xAxisSpy.mock.calls[3][0]);
    expect(xAxisSpy.mock.calls[2][0].scale).not.toEqual(xAxisSpy.mock.calls[3][0].scale);
  });
});

describe('selectXAxisSettings', () => {
  it('should be stable', () => {
    const state = createRechartsStore().getState();
    const result1 = selectXAxisSettings(state, defaultAxisId);
    const result2 = selectXAxisSettings(state, defaultAxisId);
    expect(result1).toBe(result2);

    selectXAxisSettings(state, 'foo');
    const result4 = selectXAxisSettings(state, defaultAxisId);
    expect(result1).toBe(result4);
  });
});
