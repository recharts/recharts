import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { describe, test } from 'vitest';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from '../../src';
import { PageData } from '../_data';
import { expectTooltipPayload } from '../component/Tooltip/tooltipTestHelpers';

describe('AccessibilityLayer vertical', () => {
  test('ArrowUp and ArrowDown should navigate between bars in a vertical chart', () => {
    const { container } = render(
      <BarChart width={500} height={500} data={PageData} layout="vertical" accessibilityLayer>
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>,
    );

    const svg = container.querySelector('svg.recharts-surface');
    if (!svg) throw new Error('SVG not found');

    // Focus the chart
    act(() => {
      (svg as HTMLElement).focus();
    });

    // Tooltip should show first item (Page A)
    expectTooltipPayload(container, 'Page A', ['uv : 400']);

    // ArrowDown should go to Page B
    fireEvent.keyDown(svg, { key: 'ArrowDown' });
    expectTooltipPayload(container, 'Page B', ['uv : 300']);

    // ArrowUp should go back to Page A
    fireEvent.keyDown(svg, { key: 'ArrowUp' });
    expectTooltipPayload(container, 'Page A', ['uv : 400']);
  });

  test('ArrowUp and ArrowDown should also navigate in a horizontal chart', () => {
    const { container } = render(
      <BarChart width={500} height={500} data={PageData} layout="horizontal" accessibilityLayer>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>,
    );

    const svg = container.querySelector('svg.recharts-surface');
    if (!svg) throw new Error('SVG not found');

    act(() => {
      (svg as HTMLElement).focus();
    });

    expectTooltipPayload(container, 'Page A', ['uv : 400']);

    fireEvent.keyDown(svg, { key: 'ArrowDown' });
    expectTooltipPayload(container, 'Page B', ['uv : 300']);

    fireEvent.keyDown(svg, { key: 'ArrowUp' });
    expectTooltipPayload(container, 'Page A', ['uv : 400']);
  });
});
