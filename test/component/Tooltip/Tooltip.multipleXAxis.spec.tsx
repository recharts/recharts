import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render } from '@testing-library/react';
import { ComposedChart, Line, Tooltip, XAxis, YAxis } from '../../../src';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { showTooltipOnCoordinate } from './tooltipTestHelpers';
import { composedChartMouseHoverTooltipSelector } from './tooltipMouseHoverSelectors';

describe('Tooltip with multiple X axes', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  const data1 = [
    { x: 'A', y: 10 },
    { x: 'B', y: 20 },
    { x: 'C', y: 30 },
  ];

  const data2 = [
    { x: 'A', z: 100 },
    { x: 'B', z: 200 },
    { x: 'C', z: 300 },
  ];

  it('should show payloads from both lines when hovering', () => {
    const onTooltipChange = vi.fn();

    const { container } = render(
      <ComposedChart width={500} height={300}>
        <XAxis dataKey="x" />
        <XAxis dataKey="x" xAxisId="second" orientation="top" />
        <YAxis />
        <Tooltip
          content={({ payload }) => {
            onTooltipChange(payload);
            return null;
          }}
        />
        <Line dataKey="y" data={data1} name="Line 1" />
        <Line dataKey="z" xAxisId="second" data={data2} name="Line 2" />
      </ComposedChart>,
    );

    // Hover over the chart at index 1 ('B')
    // In a 500px chart with 3 points, index 1 is roughly in the middle, but let's be safe.
    showTooltipOnCoordinate(container, composedChartMouseHoverTooltipSelector, { clientX: 250, clientY: 150 });

    // Verify payload
    const lastPayload = onTooltipChange.mock.calls[onTooltipChange.mock.calls.length - 1][0];
    expect(lastPayload).toBeDefined();
    expect(lastPayload.length).toBe(2);
    // Accomodate whatever index we hit, as long as both lines are present and match by index
    const names = lastPayload.map((p: any) => p.name);
    expect(names).toContain('Line 1');
    expect(names).toContain('Line 2');

    const line1 = lastPayload.find((p: any) => p.name === 'Line 1');
    const line2 = lastPayload.find((p: any) => p.name === 'Line 2');

    // They should both come from the same index
    if (line1.value === 20) {
      expect(line2.value).toBe(200);
    } else if (line1.value === 30) {
      expect(line2.value).toBe(300);
    }
  });

  it('should show payloads from both lines when they have different dataKeys (fallback to index)', () => {
    const onTooltipChange = vi.fn();
    const dataA = [
      { x1: 'A', y: 10 },
      { x1: 'B', y: 20 },
    ];
    const dataB = [
      { x2: 'A', z: 100 },
      { x2: 'B', z: 200 },
    ];

    const { container } = render(
      <ComposedChart width={500} height={300}>
        <XAxis dataKey="x1" />
        <XAxis dataKey="x2" xAxisId="second" hide />
        <YAxis />
        <Tooltip
          content={({ payload }) => {
            onTooltipChange(payload);
            return null;
          }}
        />
        <Line dataKey="y" data={dataA} name="Line 1" />
        <Line dataKey="z" xAxisId="second" data={dataB} name="Line 2" />
      </ComposedChart>,
    );

    showTooltipOnCoordinate(container, composedChartMouseHoverTooltipSelector, { clientX: 250, clientY: 150 });

    const lastPayload = onTooltipChange.mock.calls[onTooltipChange.mock.calls.length - 1][0];
    expect(lastPayload).toBeDefined();
    expect(lastPayload.length).toBe(2);

    const line1 = lastPayload.find((p: any) => p.name === 'Line 1');
    const line2 = lastPayload.find((p: any) => p.name === 'Line 2');

    expect(line1).toBeDefined();
    expect(line2).toBeDefined();
    // Verify fallback worked: Line 2 uses x2, but tooltip axis is x1.
    // It should still find the data by index.
    if (line1.value === 10) expect(line2.value).toBe(100);
    if (line1.value === 20) expect(line2.value).toBe(200);
  });
});
