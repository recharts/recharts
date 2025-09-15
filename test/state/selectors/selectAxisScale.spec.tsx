import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { createRechartsStore, RechartsRootState } from '../../../src/state/store';
import { selectAxisScale } from '../../../src/state/selectors/axisSelectors';
import {
  assertStableBetweenRenders,
  shouldReturnUndefinedOutOfContext,
  useAppSelectorWithStableTest,
} from '../../helper/selectorTestHelpers';
import { Bar, BarChart, XAxis } from '../../../src';
import { expectXAxisTicks } from '../../helper/expectAxisTicks';
import { PageData } from '../../_data';
import { expectLastCalledWithScale } from '../../helper/expectScale';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { defaultAxisId } from '../../../src/state/cartesianAxisSlice';
import { setActiveMouseOverItemIndex } from '../../../src/state/tooltipSlice';

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

  it('should be stable between renders', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart data={PageData} width={100} height={100}>
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        {children}
      </BarChart>
    ));

    assertStableBetweenRenders(renderTestCase, (state: RechartsRootState) =>
      selectAxisScale(state, 'xAxis', '0', false),
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
