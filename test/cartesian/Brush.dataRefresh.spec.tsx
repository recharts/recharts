import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Brush, BrushProps, Line, LineChart } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';

const data = [{ value: 10 }, { value: 20 }, { value: 30 }, { value: 40 }];

function Chart({ chartData, ...brushProps }: { chartData: typeof data } & BrushProps) {
  return (
    <LineChart width={400} height={200} data={chartData}>
      <Line dataKey="value" isAnimationActive={false} />
      <Brush x={10} width={305} {...brushProps} />
    </LineChart>
  );
}

function flushUpdates() {
  act(() => {
    vi.runOnlyPendingTimers();
  });
}

function positions(container: Element) {
  return Array.from(container.querySelectorAll('.recharts-brush-traveller rect')).map(rect => rect.getAttribute('x'));
}

describe.each([false, true])('Brush data refresh (StrictMode: %s)', strict => {
  const wrapper = strict ? React.StrictMode : React.Fragment;

  it('preserves controlled handle positions after replacing the data array', () => {
    const { container, rerender } = render(<Chart chartData={data} startIndex={0} endIndex={2} />, { wrapper });
    flushUpdates();
    expect(positions(container)).toEqual(['10', '210']);

    rerender(<Chart chartData={[...data]} startIndex={0} endIndex={2} />);
    flushUpdates();
    expect(positions(container)).toEqual(['10', '210']);
  });

  it('keeps focus and emits the controlled range on keyboard input after a refresh', () => {
    const onChange = vi.fn();
    const { rerender } = render(<Chart chartData={data} startIndex={0} endIndex={2} onChange={onChange} />, {
      wrapper,
    });
    flushUpdates();
    const startHandle = screen.getAllByRole('slider')[0];
    assertNotNull(startHandle);
    act(() => startHandle.focus());

    rerender(<Chart chartData={[...data]} startIndex={0} endIndex={2} onChange={onChange} />);
    flushUpdates();
    expect(startHandle).toHaveFocus();
    expect(onChange).not.toHaveBeenCalled();
    fireEvent.keyDown(startHandle, { key: 'ArrowRight' });
    flushUpdates();
    expect(onChange).toHaveBeenLastCalledWith({ startIndex: 1, endIndex: 2 });
  });

  it('keeps out-of-range controlled indices clamped after a refresh', () => {
    const { container, rerender } = render(<Chart chartData={data} startIndex={-3} endIndex={100} />, { wrapper });
    flushUpdates();
    expect(positions(container)).toEqual(['10', '310']);
    rerender(<Chart chartData={[...data]} startIndex={-3} endIndex={100} />);
    flushUpdates();
    expect(positions(container)).toEqual(['10', '310']);
  });

  it('clamps the controlled end handle when the dataset shrinks', () => {
    const { container, rerender } = render(<Chart chartData={data} startIndex={0} endIndex={2} />, { wrapper });
    flushUpdates();
    rerender(<Chart chartData={data.slice(0, 2)} startIndex={0} endIndex={2} />);
    flushUpdates();
    expect(positions(container)).toEqual(['10', '310']);
  });

  it.each([
    { startIndex: -3, endIndex: 2, expected: ['10', '210'] },
    { startIndex: 1, endIndex: 100, expected: ['110', '310'] },
  ])('clamps prop-only updates ($startIndex, $endIndex)', ({ startIndex, endIndex, expected }) => {
    const onChange = vi.fn();
    const { container, rerender } = render(<Chart chartData={data} startIndex={1} endIndex={2} onChange={onChange} />, {
      wrapper,
    });
    flushUpdates();
    expect(positions(container)).toEqual(['110', '210']);

    rerender(<Chart chartData={data} startIndex={startIndex} endIndex={endIndex} onChange={onChange} />);
    flushUpdates();
    expect(positions(container)).toEqual(expected);
    expect(onChange).not.toHaveBeenCalled();

    rerender(<Chart chartData={data} startIndex={1} endIndex={2} onChange={onChange} />);
    flushUpdates();
    expect(positions(container)).toEqual(['110', '210']);
  });

  it.each([
    { startIndex: 1, endIndex: undefined, expected: ['110', '310'] },
    { startIndex: undefined, endIndex: 2, expected: ['10', '210'] },
  ])('preserves a partially controlled selection ($startIndex, $endIndex)', ({ startIndex, endIndex, expected }) => {
    const { container, rerender } = render(<Chart chartData={data} startIndex={startIndex} endIndex={endIndex} />, {
      wrapper,
    });
    flushUpdates();
    expect(positions(container)).toEqual(expected);
    rerender(<Chart chartData={[...data]} startIndex={startIndex} endIndex={endIndex} />);
    flushUpdates();
    expect(positions(container)).toEqual(expected);
  });

  it('retains the existing reset behavior for an uncontrolled selection', () => {
    const { container, rerender } = render(<Chart chartData={data} />, { wrapper });
    flushUpdates();
    const startHandle = screen.getAllByRole('slider')[0];
    assertNotNull(startHandle);
    fireEvent.keyDown(startHandle, { key: 'ArrowRight' });
    flushUpdates();
    expect(positions(container)).toEqual(['110', '310']);

    rerender(<Chart chartData={[...data]} />);
    flushUpdates();
    expect(positions(container)).toEqual(['10', '310']);
  });
});
