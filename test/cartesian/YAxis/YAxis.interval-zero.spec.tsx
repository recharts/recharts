import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Line, LineChart, XAxis, YAxis } from '../../../src';

describe('YAxis interval={0} with custom ticks - comprehensive tests', () => {
  const data = [
    { name: 'A', value: -30 },
    { name: 'B', value: -10 },
    { name: 'C', value: 0 },
    { name: 'D', value: 10 },
    { name: 'E', value: 30 },
  ];

  const customTicks = [-35, -25, -15, -5, 0, 5, 15, 25, 35];

  it('should display all 9 ticks with interval={0} - standard size', () => {
    const { container } = render(
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis domain={[-35, 35]} interval={0} ticks={customTicks} />
        <Line dataKey="value" />
      </LineChart>,
    );

    const allTicks = container.querySelectorAll('.recharts-yAxis-tick-labels .recharts-cartesian-axis-tick-value');
    expect(allTicks.length).toBe(9);

    const tickTexts = Array.from(allTicks).map(tick => tick.textContent);
    expect(tickTexts).toEqual(['-35', '-25', '-15', '-5', '0', '5', '15', '25', '35']);
  });

  it('should display all 9 ticks with interval={0} - small height', () => {
    const { container } = render(
      <LineChart width={500} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis domain={[-35, 35]} interval={0} ticks={customTicks} />
        <Line dataKey="value" />
      </LineChart>,
    );

    const allTicks = container.querySelectorAll('.recharts-yAxis-tick-labels .recharts-cartesian-axis-tick-value');
    expect(allTicks.length).toBe(9);

    const tickTexts = Array.from(allTicks).map(tick => tick.textContent);
    expect(tickTexts).toContain('0'); // Ensure 0 is present
  });

  it('should display all 9 ticks with interval={0} and large minTickGap', () => {
    const { container } = render(
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis domain={[-35, 35]} interval={0} ticks={customTicks} minTickGap={20} />
        <Line dataKey="value" />
      </LineChart>,
    );

    const allTicks = container.querySelectorAll('.recharts-yAxis-tick-labels .recharts-cartesian-axis-tick-value');
    // With interval={0}, ALL ticks should be shown regardless of minTickGap
    expect(allTicks.length).toBe(9);

    const tickTexts = Array.from(allTicks).map(tick => tick.textContent);
    expect(tickTexts).toContain('0');
  });

  it('should respect interval={1} and skip every other tick', () => {
    const { container } = render(
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis domain={[-35, 35]} interval={1} ticks={customTicks} />
        <Line dataKey="value" />
      </LineChart>,
    );

    const allTicks = container.querySelectorAll('.recharts-yAxis-tick-labels .recharts-cartesian-axis-tick-value');
    // interval={1} means show every other tick: indices 0, 2, 4, 6, 8
    expect(allTicks.length).toBe(5);

    const tickTexts = Array.from(allTicks).map(tick => tick.textContent);
    expect(tickTexts).toEqual(['-35', '-15', '0', '15', '35']);
  });
});
