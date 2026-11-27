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
    // YAxis is the value axis, and there the Line dataKey wins over the YAxis dataKey
    expectLastCalledWith(spy, [400, 300, 300, 200, 278, 189]);
  });

  it('should render YAxis ticks', () => {
    const { container } = renderTestCase();
    expectYAxisTicks(container, [
      { textContent: '400', x: '72', y: '350' },
      { textContent: '300', x: '72', y: '267.5' },
      { textContent: '200', x: '72', y: '185' },
      { textContent: '278', x: '72', y: '102.5' },
      { textContent: '189', x: '72', y: '20' },
    ]);
  });

  it('should render the Line', () => {
    const { container } = renderTestCase();
    // the YAxis domain is made of the `uv` values, so each point sits on the category of its own value
    expectLines(container, [{ d: 'M80,350L140,267.5L200,267.5L260,185L320,102.5L380,20' }]);
  });

  it('should render the Line value in Tooltip', () => {
    const { container } = renderTestCase();
    showTooltip(container, lineChartMouseHoverTooltipSelector);
    expectTooltipPayload(container, '2', ['uv : 300']);
  });
});
