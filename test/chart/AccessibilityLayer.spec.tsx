import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Area, AreaChart, Legend, Tooltip, XAxis, YAxis } from '../../src';

describe('AccessibilityLayer', () => {
  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
    { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
    { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
  ];

  test('Add tabindex and role to the svg element', () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data} accessibilityLayer>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>,
    );

    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg).not.toBeUndefined();
    expect(svg).toHaveAttribute('role', 'img');
    expect(svg).toHaveAttribute('tabindex', '0');
  });

  test('When chart receives focus, show the tooltip for the first point', () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data} accessibilityLayer>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
        <Tooltip />
        <Legend />
        <XAxis dataKey="name" />
        <YAxis />
      </AreaChart>,
    );

    // Confirm that the tooltip container exists, but isn't displaying anything
    const tooltip = container.querySelector('.recharts-tooltip-wrapper');
    expect(tooltip?.textContent).toBe('');

    // Once the chart receives focus, the tooltip should display
    container.querySelector('svg')?.focus();
    expect(tooltip).toHaveTextContent('Page A');
  });

  test('Chart updates when it receives left/right arrow keystrokes', () => {
    const { container } = render(
      <AreaChart width={100} height={50} data={data} accessibilityLayer>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
        <Tooltip />
        <Legend />
        <XAxis dataKey="name" />
        <YAxis />
      </AreaChart>,
    );

    const svg = container.querySelector('svg');
    const tooltip = container.querySelector('.recharts-tooltip-wrapper');

    expect(tooltip?.textContent).toBe('');

    // Once the chart receives focus, the tooltip should display
    svg?.focus();
    expect(tooltip).toHaveTextContent('Page A');

    if (svg === null) {
      return;
    }

    fireEvent.keyDown(svg, {
      key: 'ArrowRight',
    });

    expect(tooltip).toHaveTextContent('Page B');
  });
});
