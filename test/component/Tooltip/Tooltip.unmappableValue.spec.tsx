/*
 * A `type="number"` axis with a value the scale cannot map drops that value from the tooltip ticks.
 * `TickItem.index` is assigned before the drop, so from there on it differs from the position in the ticks,
 * which is the index space of the active index resolver, the label, the payload and the keyboard.
 * https://github.com/recharts/recharts/pull/8317#discussion_r4718929264
 */
import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createSelectorTestCase, createSynchronisedSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Line, LineChart, Tooltip, TooltipContentProps, XAxis, YAxis } from '../../../src';
import { selectActiveTooltipIndex, selectTooltipAxisTicks } from '../../../src/state/selectors/tooltipSelectors';
import { selectChartOffsetInternal } from '../../../src/state/selectors/selectChartOffsetInternal';
import { expectTooltipNotVisible, expectTooltipPayload, showTooltipOnCoordinate } from './tooltipTestHelpers';
import { lineChartMouseHoverTooltipSelector } from './tooltipMouseHoverSelectors';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';
import { SyncMethod } from '../../../src/synchronisation/types';

describe('Tooltip on a number axis with a value the scale cannot map', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  const data = [
    { x: 'bad', y: 1 },
    { x: 5, y: 2 },
    { x: 20, y: 3 },
    { x: 6, y: 4 },
  ];

  const makeChart =
    (content?: (props: TooltipContentProps) => React.ReactNode) =>
    ({ children }: { children?: React.ReactNode }) => (
      <LineChart width={500} height={300} data={data} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
        <XAxis dataKey="x" type="number" domain={[0, 10]} allowDataOverflow />
        <YAxis />
        <Tooltip content={content} />
        <Line dataKey="y" isAnimationActive={false} />
        {children}
      </LineChart>
    );

  it('should drop the value from the ticks and keep the domain guard active', () => {
    const { spy } = createSelectorTestCase(makeChart())(selectTooltipAxisTicks);
    expectLastCalledWith(
      spy,
      expect.arrayContaining([
        expect.objectContaining({ value: 5, index: 1 }),
        expect.objectContaining({ value: 20, index: 2 }),
        expect.objectContaining({ value: 6, index: 3 }),
      ]),
    );
    const ticks = spy.mock.calls[spy.mock.calls.length - 1][0];
    expect(ticks).toHaveLength(3);
  });

  it('should show the tooltip of the hovered value and not of the tick at the position of its index', () => {
    const offsetSpy = createSelectorTestCase(makeChart())(selectChartOffsetInternal).spy;
    const offset = offsetSpy.mock.calls[offsetSpy.mock.calls.length - 1][0];
    const content = vi.fn((_props: TooltipContentProps) => <div />);
    const { container, spy } = createSelectorTestCase(makeChart(content))(selectActiveTooltipIndex);

    // The chart is 500 wide with the plot area from 70 to 490, the domain is [0, 10]: 5 is at 280 and 6 at 322.
    const coordinateOf = (value: number) => Math.round(offset.left + ((value - 0) / (10 - 0)) * (490 - offset.left));

    showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, { clientX: coordinateOf(5), clientY: 150 });
    expectLastCalledWith(spy, '0');
    const hoveredFive: TooltipContentProps = content.mock.calls[content.mock.calls.length - 1][0];
    expect(hoveredFive.active).toBe(true);
    expect(hoveredFive.activeIndex).toBe('0');
    expect(hoveredFive.label).toBe(5);
    expect(hoveredFive.payload.map(entry => entry.payload)).toEqual([{ x: 5, y: 2 }]);

    showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, { clientX: coordinateOf(6), clientY: 150 });
    expectLastCalledWith(spy, '2');
    const hoveredSix: TooltipContentProps = content.mock.calls[content.mock.calls.length - 1][0];
    expect(hoveredSix.active).toBe(true);
    expect(hoveredSix.activeIndex).toBe('2');
    expect(hoveredSix.label).toBe(6);
    expect(hoveredSix.payload.map(entry => entry.payload)).toEqual([{ x: 6, y: 4 }]);
  });
});

describe('Tooltip synchronised to a chart whose number axis has a value the scale cannot map', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  const data = [
    { x: 'bad', y: 1 },
    { x: 5, y: 2 },
    { x: 20, y: 3 },
    { x: 6, y: 4 },
  ];

  /*
   * The source chart is a category chart whose categories are the values of the receiving chart's ticks,
   * so that its label is matched against them by `syncMethod="value"` and by a custom method alike.
   */
  const sourceData = [
    { name: '5', y: 1 },
    { name: '20', y: 2 },
    { name: '6', y: 3 },
  ];

  const makeSourceChart = ({ children }: { children?: React.ReactNode }) => (
    <LineChart syncId="unmappableValueSync" data={sourceData} width={400} height={400}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line dataKey="y" isAnimationActive={false} />
      {children}
    </LineChart>
  );

  const makeReceivingChart =
    (syncMethod: SyncMethod) =>
    ({ children }: { children?: React.ReactNode }) => (
      <LineChart syncId="unmappableValueSync" syncMethod={syncMethod} data={data} width={400} height={400}>
        <XAxis dataKey="x" type="number" domain={[0, 10]} allowDataOverflow />
        <YAxis />
        <Tooltip />
        <Line dataKey="y" isAnimationActive={false} />
        {children}
      </LineChart>
    );

  const matchTheLabel: SyncMethod = (ticks, { activeLabel }) =>
    ticks.findIndex(tick => String(tick.value) === String(activeLabel));

  const syncMethods: ReadonlyArray<{ name: string; syncMethod: SyncMethod }> = [
    { name: 'value', syncMethod: 'value' },
    { name: 'a custom function', syncMethod: matchTheLabel },
  ];

  it.each(syncMethods)(
    'with syncMethod=$name, should show the row of the synchronised value and not of the tick at the position of its index',
    ({ syncMethod }) => {
      const renderTestCase = createSynchronisedSelectorTestCase(makeSourceChart, makeReceivingChart(syncMethod));
      const { wrapperA, wrapperB, spyA, spyB, debug } = renderTestCase(selectTooltipAxisTicks);

      // The source chart is 400 wide with the plot area from 65 to 395; its three categories are at the middle of their bands.
      const sourceTicks: ReadonlyArray<{ value: unknown; coordinate: number }> =
        spyA.mock.calls[spyA.mock.calls.length - 1][0];
      const xOf = (category: string) => {
        const tick = sourceTicks.find(t => String(t.value) === category);
        expect(tick).toBeDefined();
        return tick?.coordinate ?? 0;
      };
      // The ticks of the receiving chart keep the index they had before the drop, so here it is not their position.
      expectLastCalledWith(
        spyB,
        expect.arrayContaining([
          expect.objectContaining({ value: 5, index: 1 }),
          expect.objectContaining({ value: 20, index: 2 }),
          expect.objectContaining({ value: 6, index: 3 }),
        ]),
      );

      expectTooltipNotVisible(wrapperA);
      expectTooltipNotVisible(wrapperB);

      showTooltipOnCoordinate(wrapperA, lineChartMouseHoverTooltipSelector, { clientX: xOf('5'), clientY: 200 }, debug);
      expectTooltipPayload(wrapperA, '5', ['y : 1']);
      // The value 5 is the tick at position 0; the tick at the position of its index, 1, is 20, which is outside the domain.
      expectTooltipPayload(wrapperB, '5', ['y : 2']);

      showTooltipOnCoordinate(
        wrapperA,
        lineChartMouseHoverTooltipSelector,
        { clientX: xOf('20'), clientY: 200 },
        debug,
      );
      expectTooltipPayload(wrapperA, '20', ['y : 2']);
      // 20 is outside the domain of the receiving chart, so its tooltip stays hidden instead of showing the row of 6.
      expectTooltipNotVisible(wrapperB);

      showTooltipOnCoordinate(wrapperA, lineChartMouseHoverTooltipSelector, { clientX: xOf('6'), clientY: 200 }, debug);
      expectTooltipPayload(wrapperA, '6', ['y : 3']);
      expectTooltipPayload(wrapperB, '6', ['y : 4']);
    },
  );
});
