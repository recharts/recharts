/*
 * A `type="number"` axis with a value the scale cannot map drops that value from the tooltip ticks.
 * `TickItem.index` is assigned before the drop, so from there on it differs from the position in the ticks,
 * which is the index space of the active index resolver, the label, the payload and the keyboard.
 * https://github.com/recharts/recharts/pull/8317#discussion_r4718929264
 */
import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Line, LineChart, Tooltip, TooltipContentProps, XAxis, YAxis } from '../../../src';
import { selectActiveTooltipIndex, selectTooltipAxisTicks } from '../../../src/state/selectors/tooltipSelectors';
import { selectChartOffsetInternal } from '../../../src/state/selectors/selectChartOffsetInternal';
import { showTooltipOnCoordinate } from './tooltipTestHelpers';
import { lineChartMouseHoverTooltipSelector } from './tooltipMouseHoverSelectors';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';

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
