import React, { type ReactNode } from 'react';
import { act } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Bar, BarChart, Pie, PieChart, Tooltip, XAxis, YAxis } from '../../../src';
import { useAppDispatch } from '../../../src/state/hooks';
import { setMouseOverAxisIndex } from '../../../src/state/tooltipSlice';
import { setAxisViewport, setZoom } from '../../../src/state/zoomSlice';
import { selectChartOffsetInternal } from '../../../src/state/selectors/selectChartOffsetInternal';
import {
  selectActiveTooltipCoordinate,
  selectTooltipAxisScale,
  selectTooltipAxisTicks,
  selectTooltipPointerCoordinate,
} from '../../../src/state/selectors/tooltipSelectors';
import type { AppDispatch } from '../../../src/state/store';
import type { CartesianLayout, ChartOffsetInternal, Coordinate, TickItem } from '../../../src/util/types';
import { assertNotNull } from '../../helper/assertNotNull';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { useAppSelectorWithStableTest } from '../../helper/selectorTestHelpers';

const cartesianData = [
  { name: 'A', value: 10 },
  { name: 'B', value: 20 },
  { name: 'C', value: 30 },
  { name: 'D', value: 40 },
];

const pieData = [
  { name: 'A', value: 1 },
  { name: 'B', value: 2 },
  { name: 'C', value: 3 },
];

type ProbeCallbacks = {
  onDispatch: (dispatch: AppDispatch) => void;
  onTicks: (ticks: ReadonlyArray<TickItem> | undefined) => void;
  onOffset: (offset: ChartOffsetInternal | undefined) => void;
  onPointer: (coordinate: Coordinate | undefined) => void;
};

function SelectorProbes({ onDispatch, onTicks, onOffset, onPointer }: ProbeCallbacks): null {
  onDispatch(useAppDispatch());
  onTicks(useAppSelectorWithStableTest(selectTooltipAxisTicks));
  onOffset(useAppSelectorWithStableTest(selectChartOffsetInternal));
  onPointer(useAppSelectorWithStableTest(selectTooltipPointerCoordinate));
  return null;
}

function createCartesianChart(
  layout: CartesianLayout,
  defaultIndex: number | undefined,
  callbacks: ProbeCallbacks,
): React.ComponentType<{ children: ReactNode }> {
  return function CartesianChart({ children }): React.JSX.Element {
    return (
      <BarChart
        width={320}
        height={240}
        layout={layout}
        data={cartesianData}
        margin={{ top: 10, right: 20, bottom: 30, left: 40 }}
      >
        {layout === 'horizontal' ? <XAxis dataKey="name" /> : <XAxis type="number" dataKey="value" />}
        {layout === 'horizontal' ? <YAxis /> : <YAxis type="category" dataKey="name" />}
        <Bar dataKey="value" />
        <Tooltip defaultIndex={defaultIndex} />
        <SelectorProbes {...callbacks} />
        {children}
      </BarChart>
    );
  };
}

function createPieChart(callbacks: ProbeCallbacks): React.ComponentType<{ children: ReactNode }> {
  return function PieChartTestCase({ children }): React.JSX.Element {
    return (
      <PieChart width={320} height={240} margin={{ top: 10, right: 20, bottom: 30, left: 40 }}>
        <Pie data={pieData} dataKey="value" nameKey="name" />
        <Tooltip defaultIndex={1} />
        <SelectorProbes {...callbacks} />
        {children}
      </PieChart>
    );
  };
}

function getLastValue<T>(spy: { mock: { calls: ReadonlyArray<ReadonlyArray<T | undefined>> } }): T {
  const call = spy.mock.calls[spy.mock.calls.length - 1];
  const value = call?.[0];
  assertNotNull(value);
  return value;
}

function dispatchAndFlush(dispatch: AppDispatch | undefined, action: Parameters<AppDispatch>[0]): void {
  assertNotNull(dispatch);
  act(() => {
    dispatch(action);
    vi.runOnlyPendingTimers();
  });
}

describe('tooltip selectors with zoom', () => {
  it('applies the x viewport to a horizontal tooltip scale', () => {
    let dispatch: AppDispatch | undefined;
    const callbacks: ProbeCallbacks = {
      onDispatch: value => {
        dispatch = value;
      },
      onTicks: () => {},
      onOffset: () => {},
      onPointer: () => {},
    };
    const renderTestCase = createSelectorTestCase(createCartesianChart('horizontal', undefined, callbacks));
    const { spy } = renderTestCase(selectTooltipAxisScale);
    const fullScale = getLastValue(spy);

    dispatchAndFlush(dispatch, setAxisViewport({ dimension: 'x', viewport: { startRatio: 0.25, endRatio: 0.75 } }));

    const zoomedScale = getLastValue(spy);
    const fullRange = fullScale.range();
    const zoomedRange = zoomedScale.range();
    expect(zoomedRange[1] - zoomedRange[0]).toBeCloseTo((fullRange[1] - fullRange[0]) * 2);
  });

  it('applies the y viewport to a vertical tooltip scale', () => {
    let dispatch: AppDispatch | undefined;
    const callbacks: ProbeCallbacks = {
      onDispatch: value => {
        dispatch = value;
      },
      onTicks: () => {},
      onOffset: () => {},
      onPointer: () => {},
    };
    const renderTestCase = createSelectorTestCase(createCartesianChart('vertical', undefined, callbacks));
    const { spy } = renderTestCase(selectTooltipAxisScale);
    const fullScale = getLastValue(spy);

    dispatchAndFlush(dispatch, setAxisViewport({ dimension: 'y', viewport: { startRatio: 0.25, endRatio: 0.75 } }));

    const zoomedScale = getLastValue(spy);
    const fullRange = fullScale.range();
    const zoomedRange = zoomedScale.range();
    expect(zoomedRange[1] - zoomedRange[0]).toBeCloseTo((fullRange[1] - fullRange[0]) * 2);
  });

  it('keeps the stored perpendicular coordinate while following a zoomed horizontal index', () => {
    let dispatch: AppDispatch | undefined, ticks: ReadonlyArray<TickItem> | undefined;
    const callbacks: ProbeCallbacks = {
      onDispatch: value => {
        dispatch = value;
      },
      onTicks: value => {
        ticks = value;
      },
      onOffset: () => {},
      onPointer: () => {},
    };
    const renderTestCase = createSelectorTestCase(createCartesianChart('horizontal', undefined, callbacks));
    const { spy } = renderTestCase(selectTooltipPointerCoordinate);
    const stored = { x: 17, y: 83 };

    const chartDispatch = dispatch;
    assertNotNull(chartDispatch);
    act(() => {
      chartDispatch(setAxisViewport({ dimension: 'x', viewport: { startRatio: 0.25, endRatio: 0.75 } }));
      chartDispatch(setMouseOverAxisIndex({ activeIndex: '1', activeDataKey: undefined, activeCoordinate: stored }));
      vi.runOnlyPendingTimers();
    });

    const activeTick = ticks?.find(tick => tick.index === 1);
    assertNotNull(activeTick);
    expect(getLastValue(spy)).toEqual({ x: activeTick.coordinate, y: stored.y });
  });

  it('keeps the stored perpendicular coordinate while following a zoomed vertical index', () => {
    let dispatch: AppDispatch | undefined, ticks: ReadonlyArray<TickItem> | undefined;
    const callbacks: ProbeCallbacks = {
      onDispatch: value => {
        dispatch = value;
      },
      onTicks: value => {
        ticks = value;
      },
      onOffset: () => {},
      onPointer: () => {},
    };
    const renderTestCase = createSelectorTestCase(createCartesianChart('vertical', undefined, callbacks));
    const { spy } = renderTestCase(selectTooltipPointerCoordinate);
    const stored = { x: 71, y: 19 };

    const chartDispatch = dispatch;
    assertNotNull(chartDispatch);
    act(() => {
      chartDispatch(setAxisViewport({ dimension: 'y', viewport: { startRatio: 0.25, endRatio: 0.75 } }));
      chartDispatch(setMouseOverAxisIndex({ activeIndex: '2', activeDataKey: undefined, activeCoordinate: stored }));
      vi.runOnlyPendingTimers();
    });

    const activeTick = ticks?.find(tick => tick.index === 2);
    assertNotNull(activeTick);
    expect(getLastValue(spy)).toEqual({ x: stored.x, y: activeTick.coordinate });
  });

  it('falls back to the default index coordinate without stored interaction coordinates', () => {
    let dispatch: AppDispatch | undefined,
      ticks: ReadonlyArray<TickItem> | undefined,
      offset: ChartOffsetInternal | undefined;
    const callbacks: ProbeCallbacks = {
      onDispatch: value => {
        dispatch = value;
      },
      onTicks: value => {
        ticks = value;
      },
      onOffset: value => {
        offset = value;
      },
      onPointer: () => {},
    };
    const renderTestCase = createSelectorTestCase(createCartesianChart('horizontal', 2, callbacks));
    const { spy } = renderTestCase(selectTooltipPointerCoordinate);

    expect(dispatch).toBeDefined();
    const activeTick = ticks?.find(tick => tick.index === 2);
    assertNotNull(activeTick);
    assertNotNull(offset);
    const chartOffset = offset;
    expect(getLastValue(spy)).toEqual({
      x: activeTick.coordinate,
      y: (chartOffset.top + 240) / 2,
    });
  });

  it('projects camera-chart tooltip coordinates through the uniform zoom viewport', () => {
    let dispatch: AppDispatch | undefined, offset: ChartOffsetInternal | undefined, rawPointer: Coordinate | undefined;
    const callbacks: ProbeCallbacks = {
      onDispatch: value => {
        dispatch = value;
      },
      onTicks: () => {},
      onOffset: value => {
        offset = value;
      },
      onPointer: value => {
        rawPointer = value;
      },
    };
    const renderTestCase = createSelectorTestCase(createPieChart(callbacks));
    const { spy } = renderTestCase(selectActiveTooltipCoordinate);

    dispatchAndFlush(
      dispatch,
      setZoom({
        x: { startRatio: 0.25, endRatio: 0.75 },
        y: { startRatio: 0.25, endRatio: 0.75 },
      }),
    );

    assertNotNull(rawPointer);
    const raw = rawPointer;
    assertNotNull(offset);
    const chartOffset = offset;
    const projected = getLastValue(spy);
    const expectedX = chartOffset.left + (raw.x - chartOffset.left - chartOffset.width * 0.25) * 2;
    const expectedY = chartOffset.top + (raw.y - chartOffset.top - chartOffset.height * 0.25) * 2;

    expect(projected?.x).toBeCloseTo(expectedX);
    expect(projected?.y).toBeCloseTo(expectedY);
  });
});
