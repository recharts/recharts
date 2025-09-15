import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { createRechartsStore, RechartsRootState } from '../../../src/state/store';
import {
  selectAllAppliedValues,
  selectAxisDomain,
  selectDisplayedData,
} from '../../../src/state/selectors/axisSelectors';
import { defaultAxisId } from '../../../src/state/cartesianAxisSlice';
import {
  assertStableBetweenRenders,
  shouldReturnFromInitialState,
  shouldReturnUndefinedOutOfContext,
  useAppSelectorWithStableTest,
} from '../../helper/selectorTestHelpers';
import { useIsPanorama } from '../../../src/context/PanoramaContext';
import { BarChart, Brush, Line, LineChart, XAxis } from '../../../src';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';
import { generateMockData } from '../../helper/generateMockData';
import { setLegendSize } from '../../../src/state/legendSlice';
import { expectXAxisTicks } from '../../helper/expectAxisTicks';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';

const mockData = generateMockData(10, 982347);
const data1 = mockData.slice(0, 5);
const data2 = mockData.slice(5);

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
    expectLastCalledWith(spy, []);
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
    expectLastCalledWith(spy, [
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

  it('should be stable between renders', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={100} height={100}>
        <Line data={data1} />
        <Line data={data2} />
        {children}
      </LineChart>
    ));

    assertStableBetweenRenders(renderTestCase, selector);
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
    expectLastCalledWith(spy, [
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
    expectLastCalledWith(spy, [
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
    expectLastCalledWith(spy, [
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
    expectLastCalledWith(spy, [
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
