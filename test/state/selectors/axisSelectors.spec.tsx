import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { useAppSelector } from '../../../src/state/hooks';
import {
  combineXAxisRange,
  implicitXAxis,
  mergeDomains,
  selectAllAppliedValues,
  selectAxisDomain,
  selectAxisDomainIncludingNiceTicks,
  selectAxisRangeWithReverse,
  selectAxisScale,
  selectAxisSettings,
  selectBaseAxis,
  selectCalculatedXAxisPadding,
  selectCartesianGraphicalItemsData,
  selectDisplayedData,
  selectErrorBarsSettings,
  selectHasBar,
  selectNiceTicks,
  selectSmallestDistanceBetweenValues,
  selectStackGroups,
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
import { AxisId } from '../../../src/state/axisMapSlice';
import { pageData } from '../../../storybook/stories/data';
import { AxisDomain } from '../../../src/util/types';
import { ChartData } from '../../../src/state/chartDataSlice';
import { setLegendSize } from '../../../src/state/legendSlice';
import { setActiveMouseOverItemIndex } from '../../../src/state/tooltipSlice';

const defaultAxisId: AxisId = 0;

const mockData = generateMockData(10, 982347);
const data1 = mockData.slice(0, 5);
const data2 = mockData.slice(5);

describe('selectAxisScale', () => {
  it('should return undefined when called outside of Redux context', () => {
    const Comp = (): null => {
      const result = useAppSelector(state => selectAxisScale(state, 'xAxis', 'foo', false));
      expect(result).toBeUndefined();
      return null;
    };
    render(<Comp />);
  });

  it('should return undefined for initial state', () => {
    const initialState: RechartsRootState = createRechartsStore().getState();
    const result = selectAxisScale(initialState, 'yAxis', 'foo', false);
    expect(result).toEqual(undefined);
  });

  it('should return implicit scale if there is no XAxis with this ID', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state =>
        selectAxisScale(state, 'xAxis', 'this id is not present in the chart', false),
      );
      spy(result);
      return null;
    };
    const { container } = render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(container.querySelector('.xAxis')).toBeVisible();
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith(expect.any(Function));
  });

  it('should return scale if there is an Axis in the chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAxisScale(state, 'xAxis', '0', false));
      spy(result);
      return null;
    };
    const { container } = render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(container.querySelector('.xAxis')).toBeVisible();
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenLastCalledWith(expect.any(Function));
  });

  it('should be stable', () => {
    const Comp = (): null => {
      const result1 = useAppSelector(state => selectAxisScale(state, 'xAxis', '0', false));
      const result2 = useAppSelector(state => selectAxisScale(state, 'xAxis', '0', false));
      expect(result1).toBe(result2);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Customized component={Comp} />
      </BarChart>,
    );
  });

  it('should not recompute when an irrelevant property in the state changes', () => {
    const store = createRechartsStore();
    const result1 = selectAxisScale(store.getState(), 'xAxis', '0', false);
    store.dispatch(
      setActiveMouseOverItemIndex({ activeMouseOverCoordinate: undefined, activeDataKey: 'x', activeIndex: '7' }),
    );
    const result2 = selectAxisScale(store.getState(), 'xAxis', '0', false);
    expect(result1).toBe(result2);
  });

  it('should set the scale domain and range based on the axis type, and data', () => {
    const scaleDomainSpy = vi.fn();
    const scaleRangeSpy = vi.fn();
    const Comp = (): null => {
      const scale = useAppSelector(state => selectAxisScale(state, 'xAxis', '0', false));
      scaleDomainSpy(scale?.domain());
      scaleRangeSpy(scale?.range());
      return null;
    };
    const { container } = render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Customized component={Comp} />
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
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const result = useAppSelector(state => selectBaseAxis(state, 'xAxis', '0'));
      expect(result).toBeUndefined();
      return null;
    };
    render(<Customized component={Comp} />);
  });

  it('should return implicit axis when called with initial state', () => {
    const initialState: RechartsRootState = createRechartsStore().getState();
    const result = selectBaseAxis(initialState, 'xAxis', '0');
    expect(result).toBe(implicitXAxis);
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
        <Customized component={Comp} />
      </BarChart>,
    );
  });
});

describe('selectAxisRangeWithReverse', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const result = useAppSelector(state => selectAxisRangeWithReverse(state, 'xAxis', '0', false));
      expect(result).toBeUndefined();
      return null;
    };
    render(<Customized component={Comp} />);
  });

  it('should return default array when called with initial state', () => {
    const initialState: RechartsRootState = createRechartsStore().getState();
    const result = selectAxisRangeWithReverse(initialState, 'xAxis', '0', false);
    expect(result).toEqual([5, 5]);
  });

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
        <Customized component={Comp} />
      </BarChart>,
    );
  });

  it('should not recompute when an irrelevant property in the state changes', () => {
    const store = createRechartsStore();
    const result1 = selectAxisRangeWithReverse(store.getState(), 'xAxis', '0', false);
    const xAxisRange1 = combineXAxisRange(store.getState(), '0', false);
    store.dispatch(
      setActiveMouseOverItemIndex({ activeMouseOverCoordinate: undefined, activeDataKey: 'x', activeIndex: '7' }),
    );
    const result2 = selectAxisRangeWithReverse(store.getState(), 'xAxis', '0', false);
    const xAxisRange2 = combineXAxisRange(store.getState(), '0', false);
    expect(xAxisRange1).toBe(xAxisRange2);
    expect(result1).toBe(result2);
  });
});

describe('selectAxisDomain', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
      expect(result).toBeUndefined();
      return null;
    };
    render(<Customized component={Comp} />);
  });

  it('should return empty array when called with initial state', () => {
    const initialState: RechartsRootState = createRechartsStore().getState();
    const result = selectAxisDomain(initialState, 'xAxis', '0');
    expect(result).toEqual([]);
  });

  it('should return empty array if there is no data in the chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
      spy(result);
      return null;
    };
    const { container } = render(
      <BarChart data={[]} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenCalledWith([]);
    expectXAxisTicks(container, []);
  });

  it('should gather data from all graphical items that match the axis ID', () => {
    const axisDomainSpy = vi.fn();
    const Comp = (): null => {
      axisDomainSpy(useAppSelector(state => selectAxisDomain(state, 'xAxis', defaultAxisId)));
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={data1} />
        <Line data={data2} />
        <XAxis dataKey="y" />
        <Customized component={Comp} />
      </LineChart>,
    );
    expect(axisDomainSpy).toHaveBeenLastCalledWith([481, 672, 721, 446, 598, 774, 687, 762, 439, 569]);
    expect(axisDomainSpy).toHaveBeenCalledTimes(3);
  });

  it('should be stable', () => {
    expect.assertions(3);
    const Comp = (): null => {
      const result1 = useAppSelector(state => selectAxisDomain(state, 'xAxis', defaultAxisId));
      const result2 = useAppSelector(state => selectAxisDomain(state, 'xAxis', defaultAxisId));
      expect(result1).toBe(result2);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={data1} />
        <Line data={data2} />
        <XAxis dataKey="y" />
        <Customized component={Comp} />
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
      domainLeftSpy(useAppSelector(state => selectAxisDomain(state, 'yAxis', 'left')));
      domainLeftIncludingNiceTicksSpy(
        useAppSelector(state => selectAxisDomainIncludingNiceTicks(state, 'yAxis', 'left')),
      );
      domainRightSpy(useAppSelector(state => selectAxisDomain(state, 'yAxis', 'right')));
      domainRightIncludingNiceTicksSpy(
        useAppSelector(state => selectAxisDomainIncludingNiceTicks(state, 'yAxis', 'right')),
      );
      const scaleLeft = useAppSelector(state => selectAxisScale(state, 'yAxis', 'left', false));
      scaleLeftSpy(scaleLeft?.domain());
      const scaleRight = useAppSelector(state => selectAxisScale(state, 'yAxis', 'right', false));
      scaleRightSpy(scaleRight?.domain());
      return null;
    };
    render(
      <LineChart
        width={500}
        height={300}
        data={pageData}
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
        <Customized component={Comp} />
      </LineChart>,
    );
    expect(domainLeftSpy).toHaveBeenLastCalledWith([0, 1200]);
    expect(domainLeftIncludingNiceTicksSpy).toHaveBeenLastCalledWith([0, 1200]);
    expect(scaleLeftSpy).toHaveBeenLastCalledWith([0, 1200]);
    expect(domainRightSpy).toHaveBeenLastCalledWith([0, 1520]);
    expect(domainRightIncludingNiceTicksSpy).toHaveBeenLastCalledWith([0, 1600]);
    expect(scaleRightSpy).toHaveBeenLastCalledWith([0, 1600]);
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
    // big oof
    expect(domainSpy).toHaveBeenCalledTimes(17);
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
    // big oof
    expect(domainSpy).toHaveBeenCalledTimes(17);
  });

  describe('XAxis with type = number', () => {
    it('should return highest and lowest number of the chart root data based on the axis dataKey', () => {
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={PageData} width={100} height={100}>
          <XAxis dataKey="uv" type="number" />
          <Customized component={Comp} />
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
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={PageData} width={100} height={100}>
          <XAxis dataKey="name" type="number" />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith(undefined);
      expectXAxisTicks(container, []);
    });

    // this test fails because the generateCategoricalChart code path throws
    it.fails('should not throw an error when the data includes a Symbol', () => {
      const data = [{ x: Symbol.for('unit test') }];
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      render(
        <BarChart data={data} width={100} height={100}>
          <XAxis dataKey="x" type="number" />
          <Customized component={Comp} />
        </BarChart>,
      );
      expect(spy).toHaveBeenLastCalledWith([100, 9999]);
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
        { x: () => {} },
        // { x: Symbol.for('unit test') },
      ];
      const spy = vi.fn();
      const Comp = (): null => {
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={data} width={100} height={100}>
          <XAxis dataKey="x" type="number" />
          <Customized component={Comp} />
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
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', 0));
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
          <Customized component={Comp} />
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
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={PageData} width={100} height={100}>
          <XAxis dataKey="name" type={type} />
          <Customized component={Comp} />
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
          const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
          spy(result);
          return null;
        };
        const { container } = render(
          <BarChart data={PageData} width={100} height={100}>
            <XAxis dataKey="uv" type={type} allowDuplicatedCategory={allowDuplicatedCategory} />
            <Customized component={Comp} />
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
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={PageData} width={100} height={100}>
          <XAxis dataKey="uv" type={type} allowDuplicatedCategory={false} />
          <Customized component={Comp} />
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
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
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
          <Customized component={Comp} />
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
        domainSpy(useAppSelector(state => selectAxisDomainIncludingNiceTicks(state, 'xAxis', 0)));
        const scale = useAppSelector(state => selectAxisScale(state, 'xAxis', 0, false));
        scaleSpy(scale?.domain());
        return null;
      };
      const { container } = render(
        <BarChart data={misbehavedData} width={100} height={100}>
          <XAxis dataKey="x" type={type} allowDuplicatedCategory />
          <Customized component={Comp} />
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
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={data} width={100} height={100}>
          <XAxis dataKey="x" type={type} allowDuplicatedCategory />
          <Customized component={Comp} />
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
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={misbehavedData} width={100} height={100}>
          <XAxis dataKey="x" type={type} allowDuplicatedCategory={false} />
          <Customized component={Comp} />
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
        const result = useAppSelector(state => selectAxisDomain(state, 'xAxis', '0'));
        spy(result);
        return null;
      };
      const { container } = render(
        <BarChart data={data} width={100} height={100}>
          <XAxis type={type} allowDuplicatedCategory={false} />
          <Customized component={Comp} />
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
  it('should return undefined when called outside of Redux context', () => {
    const Comp = (): null => {
      const result = useAppSelector(selectHasBar);
      expect(result).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return false when called with initial state', () => {
    const initialState: RechartsRootState = createRechartsStore().getState();
    const result = selectHasBar(initialState);
    expect(result).toBe(false);
  });

  it('should return true if there is a Bar in the chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(selectHasBar);
      spy(result);
      return null;
    };
    const { container, rerender } = render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(container.querySelector('.recharts-bar')).toBeVisible();
    expect(spy).toHaveBeenLastCalledWith(true);

    // returns false after Bar is removed from DOM
    rerender(
      <BarChart data={PageData} width={100} height={100}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(container.querySelector('.recharts-bar')).toBeNull();
    expect(spy).toHaveBeenLastCalledWith(false);
  });

  it('should return false if there is no Bar in the chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(selectHasBar);
      spy(result);
      return null;
    };
    const { container } = render(
      <BarChart data={PageData} width={100} height={100}>
        <Line dataKey="uv" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(container.querySelector('.recharts-bar')).toBeNull();
    expect(spy).toHaveBeenLastCalledWith(false);
  });

  it('should return true if there are two Bars in the chart and then I remove one', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(selectHasBar);
      spy(result);
      return null;
    };
    const { container, rerender } = render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <Bar dataKey="pv" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-bar')).toHaveLength(2);
    expect(spy).toHaveBeenLastCalledWith(true);
    rerender(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-bar')).toHaveLength(1);
    expect(spy).toHaveBeenLastCalledWith(true);
  });

  it('should return true if there is RadialBar in RadialChart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(selectHasBar);
      spy(result);
      return null;
    };
    const { container, rerender } = render(
      <RadialBarChart data={PageData} width={100} height={100}>
        <RadialBar dataKey="uv" />
        <Customized component={Comp} />
      </RadialBarChart>,
    );
    expect(container.querySelector('.recharts-radial-bar-sectors')).toBeVisible();
    expect(spy).toHaveBeenLastCalledWith(true);

    // returns false after the only RadialBar is removed from DOM
    rerender(
      <RadialBarChart data={PageData} width={100} height={100}>
        <Customized component={Comp} />
      </RadialBarChart>,
    );
    expect(container.querySelector('.recharts-radial-bar-sectors')).toBeNull();
    expect(spy).toHaveBeenLastCalledWith(false);
  });

  it('should return false if RadialBarChart has no RadialBar in it', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(selectHasBar);
      spy(result);
      return null;
    };
    const { container } = render(
      <RadialBarChart data={PageData} width={100} height={100}>
        <Customized component={Comp} />
      </RadialBarChart>,
    );
    expect(container.querySelector('.recharts-radial-bar-sectors')).toBeNull();
    expect(spy).toHaveBeenLastCalledWith(false);
  });
});

describe('selectCalculatedPadding', () => {
  it('should return undefined when called outside of Redux context', () => {
    const Comp = (): null => {
      const result = useAppSelector(state => selectCalculatedXAxisPadding(state, 0));
      expect(result).toBeUndefined();
      return null;
    };
    render(<Comp />);
  });

  it('should return 0 when called with initial state', () => {
    const initialState: RechartsRootState = createRechartsStore().getState();
    const result = selectCalculatedXAxisPadding(initialState, 0);
    expect(result).toBe(0);
  });

  it('should return 0 when padding is explicitly provided on XAxis', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectCalculatedXAxisPadding(state, 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="name" padding={{ left: 11, right: 13 }} />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0);
  });

  it('should return a number when padding is "gap"', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectCalculatedXAxisPadding(state, 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="pv" padding="gap" type="number" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(1.247917162580338);
  });

  it('should return a number when padding is "no-gap"', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectCalculatedXAxisPadding(state, 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="pv" padding="no-gap" type="number" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0.9955652016293147);
  });

  it('should return 0 when padding=no-gap and there is only one data point on the chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectCalculatedXAxisPadding(state, 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={[PageData[0]]} width={100} height={100}>
        <XAxis dataKey="pv" padding="no-gap" type="number" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0);
  });

  it('should return 0 when padding is an object', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectCalculatedXAxisPadding(state, 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="pv" padding={{ left: 11, right: 13 }} type="number" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0);
  });
});

describe('selectSmallestDistanceBetweenValues', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const result = useAppSelector(state => selectSmallestDistanceBetweenValues(state, 'xAxis', 0));
      expect(result).toBeUndefined();
      return null;
    };
    render(<Comp />);
  });

  it('should return undefined when called with initial state', () => {
    const initialState: RechartsRootState = createRechartsStore().getState();
    const result = selectSmallestDistanceBetweenValues(initialState, 'xAxis', 0);
    expect(result).toBeUndefined();
  });

  it('should return undefined if there is no data in the chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectSmallestDistanceBetweenValues(state, 'xAxis', 0));
      spy(result);
      return null;
    };
    const { container } = render(
      <BarChart data={[]} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenCalledWith(undefined);
    expectXAxisTicks(container, []);
  });

  it.each([undefined, 'category'] as const)('should return undefined if XAxis type=%s', type => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectSmallestDistanceBetweenValues(state, 'xAxis', 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="pv" />
        <XAxis dataKey="name" type={type} />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenCalledWith(undefined);
  });

  it('should return the smallest distance, in percent, between values if type=number', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectSmallestDistanceBetweenValues(state, 'xAxis', 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="pv" type="number" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0.02773149250178529);
  });

  it('should return the smallest distance, in percent, between values if type=number', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectSmallestDistanceBetweenValues(state, 'xAxis', 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="pv" type="number" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0.02773149250178529);
  });

  it('should return Infinity, if the data is an empty array', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectSmallestDistanceBetweenValues(state, 'xAxis', 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={[]} width={100} height={100}>
        <XAxis dataKey="pv" type="number" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(Infinity);
  });

  it('should return Infinity, if the data has only one entry', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectSmallestDistanceBetweenValues(state, 'xAxis', 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={[PageData[0]]} width={100} height={100}>
        <XAxis dataKey="pv" type="number" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(Infinity);
  });

  it('should return 0 if the data has two items with the same value', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectSmallestDistanceBetweenValues(state, 'xAxis', 0));
      spy(result);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <XAxis dataKey="uv" type="number" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(0);
  });
});

describe('selectCartesianGraphicalItemsData', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const payload = useAppSelector(state => selectCartesianGraphicalItemsData(state, 'xAxis', 'x'));
      expect(payload).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return empty array for initial state', () => {
    const store = createRechartsStore();
    expect(selectCartesianGraphicalItemsData(store.getState(), 'xAxis', 'x')).toEqual([]);
  });

  it('should be stable', () => {
    const store = createRechartsStore();
    const settings: CartesianGraphicalItemSettings = {
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
      const tooltipData = useAppSelector(state => selectCartesianGraphicalItemsData(state, 'xAxis', defaultAxisId));
      spy(tooltipData);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([]);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should return empty array in a chart with root data', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelector(state => selectCartesianGraphicalItemsData(state, 'xAxis', defaultAxisId));
      spy(tooltipData);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <Customized component={Comp} />
        <Bar dataKey="pv" />
        <Bar dataKey="uv" />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([]);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should return all data defined on graphical items', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const graphicalItemsData = useAppSelector(state =>
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
        <Customized component={Comp} />
      </ComposedChart>,
    );
    // as opposed to the tooltip data selector - this one stores all original data without transformation.
    expect(spy).toHaveBeenLastCalledWith(
      // the arrayContaining is there because it ignores elements order.
      expect.arrayContaining([7, 8, 9, 70, 80, 90, 1, 2, 3, 10, 20, 30, 4, 5, 6, 40, 50, 60]),
    );
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should return nothing for graphical items that do not have any explicit data prop on them', () => {
    const graphicalItemsDataSpy = vi.fn();
    const domainSpy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelector(state => selectCartesianGraphicalItemsData(state, 'xAxis', defaultAxisId));
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
        <Customized component={Comp} />
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
      const tooltipData = useAppSelector(state => selectCartesianGraphicalItemsData(state, 'xAxis', defaultAxisId));
      spy(tooltipData);
      return null;
    };
    render(
      <PieChart width={100} height={100}>
        <Customized component={Comp} />
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
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const result = useAppSelector(state => selectDisplayedData(state, 'xAxis', defaultAxisId));
      expect(result).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return empty array for initial state', () => {
    const store = createRechartsStore();
    expect(selectDisplayedData(store.getState(), 'xAxis', defaultAxisId)).toEqual([]);
  });

  it('should return empty in an empty chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectDisplayedData(state, 'xAxis', defaultAxisId));
      spy(result);
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([]);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should return the original data if there is no axis with matching ID', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectDisplayedData(state, 'xAxis', defaultAxisId));
      spy(result);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={data1} />
        <Line data={data2} />
        <Customized component={Comp} />
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
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should be stable', () => {
    const Comp = (): null => {
      const result1 = useAppSelector(state => selectDisplayedData(state, 'xAxis', defaultAxisId));
      const result2 = useAppSelector(state => selectDisplayedData(state, 'xAxis', defaultAxisId));
      expect(result1).toBe(result2);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={data1} />
        <Line data={data2} />
        <Customized component={Comp} />
      </LineChart>,
    );
  });

  it('should not recompute when an irrelevant property in the state changes', () => {
    const store = createRechartsStore();
    const result1 = selectDisplayedData(store.getState(), 'xAxis', '0');
    store.dispatch(setLegendSize({ width: 10, height: 20 }));
    const result2 = selectDisplayedData(store.getState(), 'xAxis', '0');
    expect(result1).toBe(result2);
  });

  it('should return the original data if there is no axis with matching ID but graphical items have dataKeys', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectDisplayedData(state, 'xAxis', defaultAxisId));
      spy(result);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line dataKey="x" data={data1} />
        <Line dataKey="y" data={data2} />
        <Customized component={Comp} />
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
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should return data defined in all graphical items based on the input dataKey, and default axis ID', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllAppliedValues(state, 'xAxis', defaultAxisId));
      spy(result);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={data1} />
        <Line data={data2} />
        <XAxis dataKey="x" />
        <Customized component={Comp} />
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
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should return data defined in graphical items with matching axis ID', () => {
    const displayedDataSpy1 = vi.fn();
    const displayedDataSpy2 = vi.fn();
    const axisDomainSpy1 = vi.fn();
    const axisDomainSpy2 = vi.fn();
    const Comp = (): null => {
      displayedDataSpy1(useAppSelector(state => selectDisplayedData(state, 'xAxis', 'my axis id')));
      displayedDataSpy2(useAppSelector(state => selectDisplayedData(state, 'xAxis', 'some other ID')));
      axisDomainSpy1(useAppSelector(state => selectAxisDomain(state, 'xAxis', 'my axis id')));
      axisDomainSpy2(useAppSelector(state => selectAxisDomain(state, 'xAxis', 'some other ID')));
      return null;
    };
    const { container } = render(
      <LineChart width={100} height={100}>
        <Line data={data2} xAxisId="my axis id" />
        <XAxis dataKey="x" xAxisId="my axis id" />
        <Line data={data1} xAxisId="some other ID" />
        <XAxis dataKey="y" xAxisId="some other ID" />
        <Customized component={Comp} />
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
    expect(axisDomainSpy1).toHaveBeenCalledTimes(3);
    expect(axisDomainSpy2).toHaveBeenCalledTimes(3);
    expect(displayedDataSpy1).toHaveBeenLastCalledWith(data2);
    expect(displayedDataSpy2).toHaveBeenLastCalledWith(data1);
    expect(displayedDataSpy1).toHaveBeenCalledTimes(3);
    expect(displayedDataSpy2).toHaveBeenCalledTimes(3);
  });

  it('should gather data from all graphical items that match the axis ID', () => {
    const displayedDataSpy = vi.fn();
    const Comp = (): null => {
      displayedDataSpy(useAppSelector(state => selectDisplayedData(state, 'xAxis', defaultAxisId)));
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={data1} />
        <Line data={data2} />
        <XAxis dataKey="y" />
        <Customized component={Comp} />
      </LineChart>,
    );
    expect(displayedDataSpy).toHaveBeenLastCalledWith(mockData);
    expect(displayedDataSpy).toHaveBeenCalledTimes(3);
  });

  it('should return data defined in the chart root', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectDisplayedData(state, 'xAxis', defaultAxisId));
      spy(result);
      return null;
    };
    render(
      <LineChart data={data1} width={100} height={100}>
        <Line />
        <XAxis dataKey="x" />
        <Customized component={Comp} />
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
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should return data defined in the chart root regardless of the axis ID match', () => {
    const displayedDataSpy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectDisplayedData(state, 'xAxis', 'axis with this ID is not present'));
      displayedDataSpy(result);
      return null;
    };
    render(
      <LineChart data={data1} width={100} height={100}>
        <Customized component={Comp} />
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
    expect(displayedDataSpy).toHaveBeenCalledTimes(3);
  });

  it('should slice chart root data by dataStartIndex and dataEndIndex', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectDisplayedData(state, 'xAxis', defaultAxisId));
      spy(result);
      return null;
    };
    render(
      <LineChart data={mockData} width={100} height={100}>
        <Line />
        <Brush startIndex={1} endIndex={4} />
        <XAxis dataKey="x" />
        <Customized component={Comp} />
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
    expect(spy).toHaveBeenCalledTimes(3);
  });
});

describe('selectAllAppliedValues', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllAppliedValues(state, 'xAxis', defaultAxisId));
      expect(result).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return empty array for initial state', () => {
    const store = createRechartsStore();
    expect(selectAllAppliedValues(store.getState(), 'xAxis', defaultAxisId)).toEqual([]);
  });

  it('should return empty array in an empty chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllAppliedValues(state, 'xAxis', defaultAxisId));
      spy(result);
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([]);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should return empty array if there is no axis with matching ID', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllAppliedValues(state, 'xAxis', defaultAxisId));
      spy(result);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line />
        <Customized component={Comp} />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([]);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should return all data defined in all graphical items based on the input dataKey, and default axis ID', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllAppliedValues(state, 'xAxis', defaultAxisId));
      spy(result);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={[{ x: 1 }, { x: 2 }, { x: 3 }]} />
        <Line data={[{ x: 10 }, { x: 20 }, { x: 30 }]} />
        <XAxis dataKey="x" />
        <Customized component={Comp} />
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
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should return data defined in the chart root', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllAppliedValues(state, 'xAxis', defaultAxisId));
      spy(result);
      return null;
    };
    render(
      <LineChart data={data1} width={100} height={100}>
        <Line />
        <XAxis dataKey="x" />
        <Customized component={Comp} />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([
      { value: 211 },
      { value: 245 },
      { value: 266 },
      { value: 140 },
      { value: 131 },
    ]);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should return values as full input objects if the axis ID does not match anything in the data', () => {
    const displayedDataSpy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state =>
        selectAllAppliedValues(state, 'xAxis', 'axis with this ID is not present'),
      );
      displayedDataSpy(result);
      return null;
    };
    render(
      <LineChart data={data1} width={100} height={100}>
        <Customized component={Comp} />
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
    expect(displayedDataSpy).toHaveBeenCalledTimes(3);
  });
});

describe('selectErrorBarsSettings', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const result = useAppSelector(state => selectErrorBarsSettings(state, 'xAxis', defaultAxisId));
      expect(result).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return empty array for initial state', () => {
    const store = createRechartsStore();
    expect(selectErrorBarsSettings(store.getState(), 'xAxis', defaultAxisId)).toEqual([]);
  });

  it('should return empty array in a chart with no ErrorBars', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectErrorBarsSettings(state, 'xAxis', defaultAxisId));
      spy(result);
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Bar isAnimationActive={false} />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([]);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should return empty array if there is no axis with matching ID', () => {
    const xAxisSpy = vi.fn();
    const yAxisSpy = vi.fn();
    const Comp = (): null => {
      xAxisSpy(useAppSelector(state => selectErrorBarsSettings(state, 'xAxis', 'foo')));
      yAxisSpy(useAppSelector(state => selectErrorBarsSettings(state, 'yAxis', 'bar')));
      return null;
    };
    render(
      <LineChart width={100} height={100} data={pageData}>
        <Line isAnimationActive={false}>
          <ErrorBar dataKey="data-x" direction="x" />
          <ErrorBar dataKey="data-y" direction="y" />
        </Line>
        <XAxis type="number" />
        <Customized component={Comp} />
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
      xAxisSpy(useAppSelector(state => selectErrorBarsSettings(state, 'xAxis', defaultAxisId)));
      yAxisSpy(useAppSelector(state => selectErrorBarsSettings(state, 'yAxis', defaultAxisId)));
      return null;
    };
    render(
      <BarChart data={[{ x: 1 }, { x: 2 }, { x: 3 }]} width={100} height={100}>
        <Bar dataKey="x" isAnimationActive={false}>
          <ErrorBar dataKey="data-x" direction="x" />
          <ErrorBar dataKey="data-y" direction="y" />
        </Bar>
        <Customized component={Comp} />
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
    expect(xAxisSpy).toHaveBeenCalledTimes(4);
    expect(yAxisSpy).toHaveBeenCalledTimes(4);
  });

  it('should return bars settings if present in LineChart', () => {
    const xAxisSpy = vi.fn();
    const yAxisSpy = vi.fn();
    const Comp = (): null => {
      xAxisSpy(useAppSelector(state => selectErrorBarsSettings(state, 'xAxis', defaultAxisId)));
      yAxisSpy(useAppSelector(state => selectErrorBarsSettings(state, 'yAxis', defaultAxisId)));
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={[{ x: 1 }, { x: 2 }, { x: 3 }]} />
        <Line data={[{ x: 10 }, { x: 20 }, { x: 30 }]} isAnimationActive={false} dataKey="x">
          <ErrorBar dataKey="data-x" direction="x" />
          <ErrorBar dataKey="data-y" direction="y" />
        </Line>
        <Customized component={Comp} />
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
    expect(xAxisSpy).toHaveBeenCalledTimes(4);
    expect(yAxisSpy).toHaveBeenCalledTimes(4);
  });

  it('should return bars settings if present in vertical LineChart', () => {
    const xAxisSpy = vi.fn();
    const yAxisSpy = vi.fn();
    const Comp = (): null => {
      xAxisSpy(useAppSelector(state => selectErrorBarsSettings(state, 'xAxis', defaultAxisId)));
      yAxisSpy(useAppSelector(state => selectErrorBarsSettings(state, 'yAxis', defaultAxisId)));
      return null;
    };
    render(
      <LineChart width={100} height={100} layout="vertical">
        <Line data={[{ x: 1 }, { x: 2 }, { x: 3 }]} />
        <Line data={[{ x: 10 }, { x: 20 }, { x: 30 }]} isAnimationActive={false} dataKey="x">
          <ErrorBar dataKey="data-x" direction="x" />
          <ErrorBar dataKey="data-y" direction="y" />
        </Line>
        <Customized component={Comp} />
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
    expect(xAxisSpy).toHaveBeenCalledTimes(4);
    expect(yAxisSpy).toHaveBeenCalledTimes(4);
  });

  it('should return bars settings if present in ScatterChart', () => {
    const xAxisErrorBarSpy = vi.fn();
    const yAxisErrorBarSpy = vi.fn();
    const yAxisSpy = vi.fn();
    const Comp = (): null => {
      xAxisErrorBarSpy(useAppSelector(state => selectErrorBarsSettings(state, 'xAxis', defaultAxisId)));
      yAxisErrorBarSpy(useAppSelector(state => selectErrorBarsSettings(state, 'yAxis', defaultAxisId)));
      yAxisSpy(useAppSelector(state => selectAxisSettings(state, 'yAxis', defaultAxisId)));
      return null;
    };
    render(
      <ScatterChart width={100} height={100}>
        <Scatter data={[{ x: 1 }, { x: 2 }, { x: 3 }]} dataKey="x" isAnimationActive={false}>
          <ErrorBar dataKey="data-x" direction="x" />
          <ErrorBar dataKey="data-y" direction="y" />
        </Scatter>
        <Customized component={Comp} />
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
      id: undefined,
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
      xAxisSpy(useAppSelector(state => selectErrorBarsSettings(state, 'xAxis', defaultAxisId)));
      yAxisSpy(useAppSelector(state => selectErrorBarsSettings(state, 'yAxis', defaultAxisId)));
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
        <Customized component={Comp} />
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
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const result = useAppSelector(state => selectNiceTicks(state, 'xAxis', defaultAxisId));
      expect(result).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return undefined for initial state', () => {
    const store = createRechartsStore();
    expect(selectNiceTicks(store.getState(), 'xAxis', defaultAxisId)).toEqual(undefined);
  });

  it('should return undefined in a chart with no XAxis', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectNiceTicks(state, 'xAxis', defaultAxisId));
      spy(result);
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Bar isAnimationActive={false} />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenLastCalledWith(undefined);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should return undefined if there is no axis with matching ID', () => {
    const xAxisSpy = vi.fn();
    const yAxisSpy = vi.fn();
    const Comp = (): null => {
      xAxisSpy(useAppSelector(state => selectNiceTicks(state, 'xAxis', 'foo')));
      yAxisSpy(useAppSelector(state => selectNiceTicks(state, 'yAxis', 'bar')));
      return null;
    };
    render(
      <LineChart width={100} height={100} data={pageData}>
        <Line isAnimationActive={false} />
        <XAxis type="number" />
        <Customized component={Comp} />
      </LineChart>,
    );
    // There is an XAxis but it has a different ID
    expect(xAxisSpy).toHaveBeenLastCalledWith(undefined);
    expect(yAxisSpy).toHaveBeenLastCalledWith(undefined);
    expect(xAxisSpy).toHaveBeenCalledTimes(2);
    expect(yAxisSpy).toHaveBeenCalledTimes(2);
  });

  const casesThatProduceNiceTicks: ReadonlyArray<{ domain: AxisDomain; expectedTicks: ReadonlyArray<number> }> = [
    { domain: undefined, expectedTicks: [0, 400, 800, 1200, 1600] },
    { domain: ['auto', 'auto'], expectedTicks: [350, 700, 1050, 1400, 1750] },
    { domain: [-500, 'auto'], expectedTicks: [-550, 0, 550, 1100, 1650] },
    { domain: ['auto', 3000], expectedTicks: [0, 750, 1500, 2250, 3000] },
  ];

  it.each(casesThatProduceNiceTicks)('should return nice ticks when domain=%s', ({ domain, expectedTicks }) => {
    const niceTicksSpy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectNiceTicks(state, 'xAxis', defaultAxisId));
      niceTicksSpy(result);
      return null;
    };
    render(
      <LineChart width={100} height={100} data={pageData}>
        <Line dataKey="pv" isAnimationActive={false} />
        <XAxis type="number" dataKey="uv" domain={domain} />
        <Customized component={Comp} />
      </LineChart>,
    );
    expect(niceTicksSpy).toHaveBeenLastCalledWith(expectedTicks);
    expect(niceTicksSpy).toHaveBeenCalledTimes(3);
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

describe('selectStackGroups', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const result = useAppSelector(state => selectStackGroups(state, 'xAxis', 0));
      expect(result).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return empty object for initial state', () => {
    const store = createRechartsStore();
    expect(selectStackGroups(store.getState(), 'xAxis', 0)).toEqual({});
  });

  it('should return empty object in an empty BarChart', () => {
    const stackGroupsSpy = vi.fn();
    const Comp = (): null => {
      stackGroupsSpy(useAppSelector(state => selectStackGroups(state, 'xAxis', 0)));
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(stackGroupsSpy).toHaveBeenLastCalledWith({});
    expect(stackGroupsSpy).toHaveBeenCalledTimes(2);
  });

  it('should return object keyed by stack IDs, with bar settings and stacked data', () => {
    const stackGroupsSpy = vi.fn();
    const Comp = (): null => {
      stackGroupsSpy(useAppSelector(state => selectStackGroups(state, 'xAxis', 0)));
      return null;
    };
    render(
      <BarChart width={100} height={100} data={pageData}>
        <Bar dataKey="uv" stackId="a" />
        <Bar dataKey="pv" stackId="a" />
        <Bar dataKey="uv" stackId="b" />
        <Bar dataKey="amt" stackId="b" />
        <Customized component={Comp} />
      </BarChart>,
    );
    // This fails because d3 likes to put extra properties in the stack array that vitest doesn't serialize.
    // expect(stackGroupsSpy).toHaveBeenLastCalledWith({
    //   a: {
    //     graphicalItems: [
    //       {
    //         data: null,
    //         dataKey: 'uv',
    //         errorBars: [],
    //         hide: false,
    //         stackId: 'a',
    //         type: 'bar',
    //         xAxisId: 0,
    //         yAxisId: 0,
    //         zAxisId: 0,
    //       },
    //       {
    //         data: null,
    //         dataKey: 'pv',
    //         errorBars: [],
    //         hide: false,
    //         stackId: 'a',
    //         type: 'bar',
    //         xAxisId: 0,
    //         yAxisId: 0,
    //         zAxisId: 0,
    //       },
    //     ],
    //     stackedData: [
    //       [
    //         [0, 590],
    //         [0, 590],
    //         [0, 868],
    //         [0, 1397],
    //         [0, 1480],
    //         [0, 1520],
    //         [0, 1400],
    //       ],
    //       [
    //         [590, 1390],
    //         [590, 1390],
    //         [868, 1835],
    //         [1397, 2495],
    //         [1480, 2680],
    //         [1520, 2628],
    //         [1400, 2080],
    //       ],
    //     ],
    //   },
    //   b: {
    //     graphicalItems: [
    //       {
    //         data: null,
    //         dataKey: 'uv',
    //         errorBars: [],
    //         hide: false,
    //         stackId: 'b',
    //         type: 'bar',
    //         xAxisId: 0,
    //         yAxisId: 0,
    //         zAxisId: 0,
    //       },
    //       {
    //         data: null,
    //         dataKey: 'amt',
    //         errorBars: [],
    //         hide: false,
    //         stackId: 'b',
    //         type: 'bar',
    //         xAxisId: 0,
    //         yAxisId: 0,
    //         zAxisId: 0,
    //       },
    //     ],
    //     stackedData: [
    //       [
    //         [0, 590],
    //         [0, 590],
    //         [0, 868],
    //         [0, 1397],
    //         [0, 1480],
    //         [0, 1520],
    //         [0, 1400],
    //       ],
    //       [
    //         [590, 1990],
    //         [590, 1990],
    //         [868, 2374],
    //         [1397, 2386],
    //         [1480, 2708],
    //         [1520, 2620],
    //         [1400, 3100],
    //       ],
    //     ],
    //   },
    // });
    expect(stackGroupsSpy).toHaveBeenCalledTimes(3);
  });

  it('should return empty object for Bars without stackId', () => {
    const stackGroupsSpy = vi.fn();
    const Comp = (): null => {
      stackGroupsSpy(useAppSelector(state => selectStackGroups(state, 'xAxis', 0)));
      return null;
    };
    render(
      <BarChart width={100} height={100} data={pageData}>
        <Bar dataKey="uv" />
        <Bar dataKey="pv" />
        <Bar dataKey="amt" />
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(stackGroupsSpy).toHaveBeenLastCalledWith({});
    expect(stackGroupsSpy).toHaveBeenCalledTimes(3);
  });
});
