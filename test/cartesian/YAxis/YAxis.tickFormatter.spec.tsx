import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Line, LineChart, YAxis } from '../../../src';
import { PageData } from '../../_data';
import { expectYAxisTicks } from '../../helper/expectAxisTicks';

describe('YAxis with custom tickFormatter', () => {
  const tickFormatterSpy = vi.fn((value, index) => `formatted: ${value}: ${index}`);

  const renderTestCase = createSelectorTestCase(({ children }) => (
    <LineChart width={400} height={400} data={PageData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <YAxis type="category" dataKey="name" tickFormatter={tickFormatterSpy} />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      {children}
    </LineChart>
  ));

  it('should render ticks formatted with tickFormatter', () => {
    const { container } = renderTestCase();

    expect(container.querySelectorAll('.yAxis .recharts-cartesian-axis-tick')[0]).toHaveTextContent('0');
    expectYAxisTicks(container, [
      { textContent: 'formatted: Page A: 0', x: '72', y: '380' },
      { textContent: 'formatted: Page B: 1', x: '72', y: '308' },
      { textContent: 'formatted: Page C: 2', x: '72', y: '236' },
      { textContent: 'formatted: Page D: 3', x: '72', y: '164' },
      { textContent: 'formatted: Page E: 4', x: '72', y: '92' },
      { textContent: 'formatted: Page F: 5', x: '72', y: '20' },
    ]);
  });

  it('should call the tickFormatter with the correct parameters', () => {
    // https://github.com/recharts/recharts/issues/6010
    renderTestCase();

    expect(tickFormatterSpy).toHaveBeenCalledTimes(2 * PageData.length);
    // interesting that they are called upside down but ... that doesn't really matter
    expect(tickFormatterSpy).toHaveBeenNthCalledWith(1, 'Page F', 5);
    expect(tickFormatterSpy).toHaveBeenNthCalledWith(2, 'Page E', 4);
    expect(tickFormatterSpy).toHaveBeenNthCalledWith(3, 'Page D', 3);
    expect(tickFormatterSpy).toHaveBeenNthCalledWith(4, 'Page C', 2);
    expect(tickFormatterSpy).toHaveBeenNthCalledWith(5, 'Page B', 1);
    expect(tickFormatterSpy).toHaveBeenNthCalledWith(6, 'Page A', 0);
  });
});
