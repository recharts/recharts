import React from 'react';
import { describe, expect, it, test, vi } from 'vitest';
import { act, render } from '@testing-library/react';
import {
  BaseAxisWithScale,
  mergeDomains,
  selectAllAppliedNumericalValuesIncludingErrorValues,
  selectAllAppliedValues,
  selectAllErrorBarSettings,
  selectAxisDomain,
  selectAxisDomainIncludingNiceTicks,
  selectAxisScale,
  selectAxisWithScale,
  selectCalculatedXAxisPadding,
  selectCartesianGraphicalItemsData,
  selectErrorBarsSettings,
  selectHasBar,
  selectNiceTicks,
  selectNumericalDomain,
  selectSmallestDistanceBetweenValues,
  selectXAxisSettings,
} from '../../../src/state/selectors/axisSelectors';
import { createRechartsStore, RechartsRootState } from '../../../src/state/store';
import {
  Area,
  Bar,
  BarChart,
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
import { addCartesianGraphicalItem } from '../../../src/state/graphicalItemsSlice';
import { generateMockData } from '../../helper/generateMockData';
import { defaultAxisId, XAxisSettings } from '../../../src/state/cartesianAxisSlice';
import { AxisDomain } from '../../../src/util/types';
import { ChartData } from '../../../src/state/chartDataSlice';
import {
  shouldReturnFromInitialState,
  shouldReturnUndefinedOutOfContext,
  assertStableBetweenRenders,
  useAppSelectorWithStableTest,
} from '../../helper/selectorTestHelpers';
import { useIsPanorama } from '../../../src/context/PanoramaContext';
import { assertNotNull } from '../../helper/assertNotNull';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { BarSettings } from '../../../src/state/types/BarSettings';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';

const mockData = generateMockData(10, 982347);
const data1 = mockData.slice(0, 5);
const data2 = mockData.slice(5);

describe('selectAxisDomain', () => {
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
    expect(domainSpy).toHaveBeenCalledTimes(2);
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
    expect(domainSpy).toHaveBeenCalledTimes(2);
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
      expectLastCalledWith(spy, [0, 400]);
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
      expectLastCalledWith(spy, undefined);
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
      expectLastCalledWith(spy, undefined);
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
      expectLastCalledWith(spy, [0, 9999]);
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
      expectLastCalledWith(spy, ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F']);
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
        expectLastCalledWith(spy, [0, 1, 2, 3, 4, 5]);
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
      expectLastCalledWith(spy, [400, 300, 200, 278, 189]);
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
      expectLastCalledWith(spy, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']);
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
      expectLastCalledWith(spy, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']);
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
      expectLastCalledWith(spy, [0, 1, 2]);
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
    expectLastCalledWith(spy, true);

    // returns false after Bar is removed from DOM
    rerender(
      <BarChart data={PageData} width={100} height={100}>
        <Comp />
      </BarChart>,
    );
    expect(container.querySelector('.recharts-bar')).toBeNull();
    expectLastCalledWith(spy, false);
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
    expectLastCalledWith(spy, false);
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
    expectLastCalledWith(spy, true);
    rerender(
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <Comp />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-bar')).toHaveLength(1);
    expectLastCalledWith(spy, true);
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
    expectLastCalledWith(spy, true);

    // returns false after the only RadialBar is removed from DOM
    rerender(
      <RadialBarChart data={PageData} width={100} height={100}>
        <Comp />
      </RadialBarChart>,
    );
    expect(container.querySelector('.recharts-radial-bar-sectors')).toBeNull();
    expectLastCalledWith(spy, false);
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
    expectLastCalledWith(spy, false);
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
    expectLastCalledWith(spy, 0);
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
    expectLastCalledWith(spy, 1.247917162580338);
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
    expectLastCalledWith(spy, 0.9955652016293147);
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
    expectLastCalledWith(spy, 0);
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
    expectLastCalledWith(spy, 0);
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
    expectLastCalledWith(spy, 0.02773149250178529);
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
    expectLastCalledWith(spy, 0.02773149250178529);
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
    expectLastCalledWith(spy, Infinity);
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
    expectLastCalledWith(spy, Infinity);
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
    expectLastCalledWith(spy, 0);
  });
});

describe('selectCartesianGraphicalItemsData', () => {
  const selector = (state: RechartsRootState) => selectCartesianGraphicalItemsData(state, 'xAxis', 'x');

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, []);

  it('should be stable', () => {
    const store = createRechartsStore();
    const settings: BarSettings = {
      maxBarSize: 0,
      minPointSize: undefined,
      id: 'id',
      isPanorama: false,
      type: 'bar',
      hide: false,
      stackId: 's-id',
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
    expectLastCalledWith(spy, []);
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
    expectLastCalledWith(spy, []);
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
    expectLastCalledWith(
      spy,
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
    expectLastCalledWith(spy, []);
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
    expectLastCalledWith(spy, []);
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
    expectLastCalledWith(spy, []);
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
    expectLastCalledWith(spy, [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 10 }, { value: 20 }, { value: 30 }]);
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
    expectLastCalledWith(spy, [{ value: 211 }, { value: 245 }, { value: 266 }, { value: 140 }, { value: 131 }]);
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
    expectLastCalledWith(spy, []);
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
    expect(xAxisSpy).toHaveBeenCalledTimes(2);
    expect(yAxisSpy).toHaveBeenCalledTimes(2);
  });

  describe('error bars settings', () => {
    describe('in BarChart', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <BarChart data={[{ x: 1 }, { x: 2 }, { x: 3 }]} width={100} height={100}>
          <Bar dataKey="x" isAnimationActive={false} id="bar-without-error-bars" />
          <Bar dataKey="x" isAnimationActive={false} id="my-bar-id">
            <ErrorBar dataKey="data-x" direction="x" />
            <ErrorBar dataKey="data-y" direction="y" />
          </Bar>
          <XAxis type="number" />
          {children}
        </BarChart>
      ));

      it('should select error bar state', () => {
        const { spy } = renderTestCase(selectAllErrorBarSettings);
        expectLastCalledWith(spy, {
          'my-bar-id': [
            {
              dataKey: 'data-x',
              direction: 'x',
            },
            {
              dataKey: 'data-y',
              direction: 'y',
            },
          ],
        });
      });

      it('should return XAxis error bars', () => {
        const { spy } = renderTestCase(state => selectErrorBarsSettings(state, 'xAxis', defaultAxisId));
        expectLastCalledWith(spy, [
          {
            dataKey: 'data-x',
            direction: 'x',
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should return YAxis error bars', () => {
        const { spy } = renderTestCase(state => selectErrorBarsSettings(state, 'yAxis', defaultAxisId));
        expectLastCalledWith(spy, [
          {
            dataKey: 'data-y',
            direction: 'y',
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(3);
      });
    });

    describe('in LineChart', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={100} height={100}>
          <Line data={PageData} isAnimationActive={false} dataKey="uv" id="line1" />
          <Line data={PageData} isAnimationActive={false} dataKey="pv" id="line2">
            <ErrorBar dataKey="pv" direction="x" />
            <ErrorBar dataKey="amt" direction="y" />
          </Line>
          <XAxis />
          <YAxis dataKey="uv" />
          {children}
        </LineChart>
      ));

      it('should select error bar state', () => {
        const { spy } = renderTestCase(selectAllErrorBarSettings);
        expectLastCalledWith(spy, {
          line2: [
            {
              dataKey: 'pv',
              direction: 'x',
            },
            {
              dataKey: 'amt',
              direction: 'y',
            },
          ],
        });
      });

      it('should return XAxis error bars', () => {
        const { spy } = renderTestCase(state => selectErrorBarsSettings(state, 'xAxis', defaultAxisId));
        expectLastCalledWith(spy, [
          {
            dataKey: 'pv',
            direction: 'x',
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should return YAxis error bars', () => {
        const { spy } = renderTestCase(state => selectErrorBarsSettings(state, 'yAxis', defaultAxisId));
        expectLastCalledWith(spy, [
          {
            dataKey: 'amt',
            direction: 'y',
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(3);
      });
    });

    describe('in Vertical LineChart', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <LineChart width={100} height={100} layout="vertical">
          <Line data={[{ x: 1 }, { x: 2 }, { x: 3 }]} isAnimationActive={false} id="line-without-bars" />
          <Line
            data={[{ x: 10 }, { x: 20 }, { x: 30 }]}
            isAnimationActive={false}
            dataKey="x"
            id="line-with-error-bars"
          >
            <ErrorBar dataKey="data-x" direction="x" />
            <ErrorBar dataKey="data-y" direction="y" />
          </Line>
          <XAxis />
          <YAxis dataKey="x" />
          {children}
        </LineChart>
      ));

      it('should select error bar state', () => {
        const { spy } = renderTestCase(selectAllErrorBarSettings);
        expectLastCalledWith(spy, {
          'line-with-error-bars': [
            {
              dataKey: 'data-x',
              direction: 'x',
            },
            {
              dataKey: 'data-y',
              direction: 'y',
            },
          ],
        });
      });

      it('should return XAxis error bars', () => {
        const { spy } = renderTestCase(state => selectErrorBarsSettings(state, 'xAxis', defaultAxisId));
        expectLastCalledWith(spy, [
          {
            dataKey: 'data-x',
            direction: 'x',
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(3);
      });

      it('should return YAxis error bars', () => {
        const { spy } = renderTestCase(state => selectErrorBarsSettings(state, 'yAxis', defaultAxisId));
        expectLastCalledWith(spy, [
          {
            dataKey: 'data-y',
            direction: 'y',
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(3);
      });
    });

    describe('in ScatterChart', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <ScatterChart width={100} height={100}>
          <Scatter
            data={[{ x: 1 }, { x: 2 }, { x: 3 }]}
            dataKey="x"
            isAnimationActive={false}
            id="scatter-without-bars"
          />
          <Scatter data={[{ x: 10 }, { x: 20 }, { x: 30 }]} isAnimationActive={false} id="scatter-with-error-bars">
            <ErrorBar dataKey="data-x" direction="x" />
            <ErrorBar dataKey="data-y" direction="y" />
          </Scatter>
          <XAxis />
          <YAxis dataKey="x" />
          {children}
        </ScatterChart>
      ));

      it('should select error bar state', () => {
        const { spy } = renderTestCase(selectAllErrorBarSettings);
        expectLastCalledWith(spy, {
          'scatter-with-error-bars': [
            {
              dataKey: 'data-x',
              direction: 'x',
            },
            {
              dataKey: 'data-y',
              direction: 'y',
            },
          ],
        });
      });

      it('should return XAxis error bars', () => {
        const { spy } = renderTestCase(state => selectErrorBarsSettings(state, 'xAxis', defaultAxisId));
        expectLastCalledWith(spy, [
          {
            dataKey: 'data-x',
            direction: 'x',
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(4);
      });

      it('should return YAxis error bars', () => {
        const { spy } = renderTestCase(state => selectErrorBarsSettings(state, 'yAxis', defaultAxisId));
        expectLastCalledWith(spy, [
          {
            dataKey: 'data-y',
            direction: 'y',
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(4);
      });
    });

    describe('in ComposedChart', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <ComposedChart data={[{ x: 1 }, { x: 2 }, { x: 3 }]} width={100} height={100}>
          <Bar dataKey="x" isAnimationActive={false} id="bar-without-error-bars" />
          <Bar dataKey="x" isAnimationActive={false} id="my-bar-id">
            <ErrorBar dataKey="data-x" direction="x" />
            <ErrorBar dataKey="data-y" direction="y" />
          </Bar>
          <Line data={[{ x: 10 }, { x: 20 }, { x: 30 }]} isAnimationActive={false} id="line-with-error-bars">
            <ErrorBar dataKey="data-x" direction="x" />
            <ErrorBar dataKey="data-y" direction="y" />
          </Line>
          <Scatter data={[{ x: 100 }, { x: 200 }, { x: 300 }]} isAnimationActive={false} id="scatter-with-error-bars">
            <ErrorBar dataKey="data-x" direction="x" />
            <ErrorBar dataKey="data-y" direction="y" />
          </Scatter>
          <XAxis type="number" />
          <YAxis dataKey="x" />
          {children}
        </ComposedChart>
      ));

      it('should select error bar state', () => {
        const { spy } = renderTestCase(selectAllErrorBarSettings);
        expectLastCalledWith(spy, {
          'my-bar-id': [
            {
              dataKey: 'data-x',
              direction: 'x',
            },
            {
              dataKey: 'data-y',
              direction: 'y',
            },
          ],
          'line-with-error-bars': [
            {
              dataKey: 'data-x',
              direction: 'x',
            },
            {
              dataKey: 'data-y',
              direction: 'y',
            },
          ],
          'scatter-with-error-bars': [
            {
              dataKey: 'data-x',
              direction: 'x',
            },
            {
              dataKey: 'data-y',
              direction: 'y',
            },
          ],
        });
      });

      it('should return XAxis error bars', () => {
        const { spy } = renderTestCase(state => selectErrorBarsSettings(state, 'xAxis', defaultAxisId));
        expectLastCalledWith(spy, [
          {
            dataKey: 'data-x',
            direction: 'x',
          },
          {
            dataKey: 'data-x',
            direction: 'x',
          },
          {
            dataKey: 'data-x',
            direction: 'x',
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(4);
      });

      it('should return YAxis error bars', () => {
        const { spy } = renderTestCase(state => selectErrorBarsSettings(state, 'yAxis', defaultAxisId));
        expectLastCalledWith(spy, [
          {
            dataKey: 'data-y',
            direction: 'y',
          },
          {
            dataKey: 'data-y',
            direction: 'y',
          },
          {
            dataKey: 'data-y',
            direction: 'y',
          },
        ]);
        expect(spy).toHaveBeenCalledTimes(4);
      });
    });
  });

  it('should be stable when empty', () => {
    const store = createRechartsStore();
    const result1 = selectErrorBarsSettings(store.getState(), 'xAxis', defaultAxisId);
    const result2 = selectErrorBarsSettings(store.getState(), 'xAxis', defaultAxisId);
    expect(result1).toBe(result2);
  });

  it('should be stable with data', () => {
    const store = createRechartsStore();
    const settings: BarSettings = {
      maxBarSize: 0,
      minPointSize: undefined,
      id: 'bar1',
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
    expectLastCalledWith(spy, undefined);
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

  describe('in chart with explicit axes', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={100} height={100} data={PageData}>
        <Line isAnimationActive={false} dataKey="pv" />
        <XAxis dataKey="name" />
        <YAxis />
        {children}
      </LineChart>
    ));

    it('should select XAxis settings', () => {
      const { spy } = renderTestCase(state => selectAxisWithScale(state, 'xAxis', defaultAxisId, false));
      expectLastCalledWith(spy, {
        allowDataOverflow: false,
        // @ts-expect-error extra properties not expected in the type
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
      expect(spy).toHaveBeenCalledTimes(2);
    });

    test('selectAllAppliedNumericalValuesIncludingErrorValues', () => {
      const { spy } = renderTestCase(state =>
        selectAllAppliedNumericalValuesIncludingErrorValues(state, 'yAxis', defaultAxisId, false),
      );
      expectLastCalledWith(spy, [
        {
          errorDomain: [],
          value: 2400,
        },
        {
          errorDomain: [],
          value: 4567,
        },
        {
          errorDomain: [],
          value: 1398,
        },
        {
          errorDomain: [],
          value: 9800,
        },
        {
          errorDomain: [],
          value: 3908,
        },
        {
          errorDomain: [],
          value: 4800,
        },
      ]);
    });

    test('selectAxisDomain', () => {
      const { spy } = renderTestCase(state => selectAxisDomain(state, 'yAxis', defaultAxisId, false));
      expectLastCalledWith(spy, [0, 9800]);
      expect(spy).toHaveBeenCalledTimes(2);
    });

    test('selectNumericalDomain', () => {
      const { spy } = renderTestCase(state => selectNumericalDomain(state, 'yAxis', defaultAxisId, false));
      expectLastCalledWith(spy, [0, 9800]);
      expect(spy).toHaveBeenCalledTimes(2);
    });

    it('should select YAxis settings', () => {
      const { spy } = renderTestCase(state => selectAxisWithScale(state, 'yAxis', defaultAxisId, false));
      expectLastCalledWith(spy, {
        allowDataOverflow: false,
        // @ts-expect-error extra properties not expected in the type
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
      expect(spy).toHaveBeenCalledTimes(2);
    });
  });

  it('should be stable between different renders', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={100} height={100} data={PageData}>
        <Line isAnimationActive={false} dataKey="pv" />
        <XAxis dataKey="name" />
        <YAxis />
        {children}
      </LineChart>
    ));

    assertStableBetweenRenders(renderTestCase, selector);
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
