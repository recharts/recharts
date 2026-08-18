import React, { ReactNode } from 'react';
import { describe, expect, it } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useCells } from '../../src/util/useCells';
import { Cell } from '../../src/component/Cell';
import { LabelList } from '../../src/component/LabelList';

function renderUseCells(initialChildren: ReactNode) {
  return renderHook(({ children }) => useCells(children), {
    initialProps: { children: initialChildren },
  });
}

describe('useCells', () => {
  it('should return an empty array when there are no children', () => {
    const { result } = renderUseCells(undefined);

    expect(result.current).toEqual([]);
  });

  it('should return an empty array when no child is a Cell', () => {
    const { result } = renderUseCells(<LabelList dataKey="pv" />);

    expect(result.current).toEqual([]);
  });

  it('should return the same empty array reference across renders', () => {
    const { result, rerender } = renderUseCells(<LabelList dataKey="pv" />);
    const first = result.current;

    rerender({ children: <LabelList dataKey="pv" /> });

    expect(result.current).toBe(first);
  });

  it('should return the Cell children and skip everything else', () => {
    const { result } = renderUseCells(
      <>
        <LabelList dataKey="pv" />
        <Cell fill="green" />
        <Cell fill="blue" />
      </>,
    );

    expect(result.current).toHaveLength(2);
    expect(result.current.map(cell => cell.props.fill)).toEqual(['green', 'blue']);
  });

  it('should return the same reference when the cells re-render unchanged', () => {
    const { result, rerender } = renderUseCells(
      <>
        <Cell fill="green" />
        <Cell fill="blue" />
      </>,
    );
    const first = result.current;

    rerender({
      children: (
        <>
          <Cell fill="green" />
          <Cell fill="blue" />
        </>
      ),
    });

    expect(result.current).toBe(first);
  });

  it('should return the same reference when a Cell prop is an equal-but-new object', () => {
    const { result, rerender } = renderUseCells(<Cell style={{ opacity: 0.5 }} />);
    const first = result.current;

    rerender({ children: <Cell style={{ opacity: 0.5 }} /> });

    expect(result.current).toBe(first);
  });

  it('should return a new reference when a Cell prop changes', () => {
    const { result, rerender } = renderUseCells(<Cell fill="green" />);
    const first = result.current;

    rerender({ children: <Cell fill="orange" /> });

    expect(result.current).not.toBe(first);
    expect(result.current[0]?.props.fill).toBe('orange');
  });

  it('should return a new reference when a Cell is added', () => {
    const { result, rerender } = renderUseCells(<Cell fill="green" />);
    const first = result.current;

    rerender({
      children: (
        <>
          <Cell fill="green" />
          <Cell fill="blue" />
        </>
      ),
    });

    expect(result.current).not.toBe(first);
    expect(result.current).toHaveLength(2);
  });

  it('should return the shared empty array when the last Cell is removed', () => {
    const { result, rerender } = renderUseCells(<Cell fill="green" />);

    rerender({ children: <LabelList dataKey="pv" /> });
    const afterRemoval = result.current;

    expect(afterRemoval).toEqual([]);

    rerender({ children: undefined });

    expect(result.current).toBe(afterRemoval);
  });
});
