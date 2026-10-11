import { describe, it } from 'vitest';
import React from 'react';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Line, LineChart, Tooltip, XAxis, YAxis } from '../../../src';
import { PageData } from '../../_data';
import { expectYAxisTicks } from '../../helper/expectAxisTicks';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';
import { expectLines } from '../../helper/expectLine';
import { selectAxisDomain } from '../../../src/state/selectors/axisSelectors';
import { expectTooltipPayload, showTooltip } from '../../component/Tooltip/tooltipTestHelpers';
import { lineChartMouseHoverTooltipSelector } from '../../component/Tooltip/tooltipMouseHoverSelectors';

/**
 * In a horizontal chart, YAxis is the axis where graphical items display their value.
 * Here the YAxis has type=category and its own dataKey, and the Line has a different dataKey.
 * These tests record which of the two dataKeys is used where.
 */
describe('YAxis with type=category and dataKey, and Line with a different dataKey, in horizontal layout', () => {
  const renderTestCase = createSelectorTestCase(({ children }) => (
    <LineChart width={400} height={400} data={PageData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <XAxis />
      <YAxis type="category" dataKey="name" />
      <Line dataKey="uv" isAnimationActive={false} />
      <Tooltip />
      {children}
    </LineChart>
  ));

  it('should select YAxis domain', () => {
    const { spy } = renderTestCase(state => selectAxisDomain(state, 'yAxis', 0, false));
    expectLastCalledWith(spy, ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F']);
  });

  it('should render YAxis ticks', () => {
    const { container } = renderTestCase();
    expectYAxisTicks(container, [
      { textContent: 'Page A', x: '72', y: '350' },
      { textContent: 'Page B', x: '72', y: '284' },
      { textContent: 'Page C', x: '72', y: '218' },
      { textContent: 'Page D', x: '72', y: '152' },
      { textContent: 'Page E', x: '72', y: '86' },
      { textContent: 'Page F', x: '72', y: '20' },
    ]);
  });

  it('should render the Line', () => {
    const { container } = renderTestCase();
    // the `uv` values are not in the YAxis domain, so the Line has no points to draw
    expectLines(container, [{ d: null }]);
  });

  it('should render the Line value in Tooltip', () => {
    const { container } = renderTestCase();
    showTooltip(container, lineChartMouseHoverTooltipSelector);
    expectTooltipPayload(container, '2', ['uv : 300']);
  });
});
