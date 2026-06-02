import { describe, it, expect, vi } from 'vitest';
import React, { useState } from 'react';
import { render, act } from '@testing-library/react';
import { LineChart, Line, XAxis, YAxis } from '../../src';

describe('Dynamic zIndex updates', () => {
  it('should keep the line in the DOM when zIndex changes dynamically', () => {
    const data = [
      { name: 'A', uv: 400, pv: 2400 },
      { name: 'B', uv: 300, pv: 4567 },
    ];

    function ChartWithDynamicZIndex() {
      const [zIndex, setZIndex] = useState(10);

      return (
        <div>
          <button type="button" onClick={() => setZIndex(z => z + 1)}>
            Increment zIndex
          </button>
          <LineChart width={400} height={400} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Line dataKey="uv" stroke="#8884d8" zIndex={zIndex} isAnimationActive={false} />
            <Line dataKey="pv" stroke="#82ca9d" isAnimationActive={false} />
          </LineChart>
        </div>
      );
    }

    const { container, getByText } = render(<ChartWithDynamicZIndex />);
    act(() => {
      vi.runAllTimers();
    });

    const initialLines = container.querySelectorAll('.recharts-line');
    expect(initialLines.length).toBe(2);

    const button = getByText('Increment zIndex');

    // Rapid zIndex updates should not cause lines to disappear
    act(() => {
      button.click();
    });
    act(() => {
      vi.runAllTimers();
    });

    let lines = container.querySelectorAll('.recharts-line');
    expect(lines.length).toBe(2);

    act(() => {
      button.click();
    });
    act(() => {
      vi.runAllTimers();
    });

    lines = container.querySelectorAll('.recharts-line');
    expect(lines.length).toBe(2);
  });
});
