import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { Line, LineChart, XAxis } from '../../src';
import { expectXAxisTicks } from '../helper/expectAxisTicks';
import { PageData } from '../_data';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';

describe('XAxis with custom tickFormatter', () => {
  const tickFormatterSpy = vi.fn((value, index) => `formatted: ${value}: ${index}`);

  const renderTestCase = createSelectorTestCase(({ children }) => (
    <LineChart width={400} height={400} data={PageData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <XAxis dataKey="name" tickFormatter={tickFormatterSpy} />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      {children}
    </LineChart>
  ));

  it('should render ticks formatted with tickFormatter', () => {
    const { container } = renderTestCase();

    expect(container.querySelectorAll('.xAxis .recharts-cartesian-axis-tick')[0]).toHaveTextContent('0');
    expectXAxisTicks(container, [
      { textContent: 'formatted: Page A: 0', x: '20', y: '358' },
      { textContent: 'formatted: Page B: 1', x: '92', y: '358' },
      { textContent: 'formatted: Page C: 2', x: '164', y: '358' },
      { textContent: 'formatted: Page D: 3', x: '236', y: '358' },
      { textContent: 'formatted: Page E: 4', x: '308', y: '358' },
      { textContent: 'formatted: Page F: 5', x: '380', y: '358' },
    ]);
  });

  it('should call the tickFormatter with the correct parameters', () => {
    // https://github.com/recharts/recharts/issues/6010
    renderTestCase();

    // expect(tickFormatterSpy).toHaveBeenCalledTimes(6);
    expect(tickFormatterSpy.mock.calls[0]).toEqual(['Page A', 0]);
    expect(tickFormatterSpy.mock.calls[1]).toEqual(['Page B', 1]);
    expect(tickFormatterSpy.mock.calls[2]).toEqual(['Page C', 2]);
    expect(tickFormatterSpy.mock.calls[3]).toEqual(['Page D', 3]);
    expect(tickFormatterSpy.mock.calls[4]).toEqual(['Page E', 4]);
    expect(tickFormatterSpy.mock.calls[5]).toEqual(['Page F', 5]);
  });
});
