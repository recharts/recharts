import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ZoomPanContainer } from '../../src/context/zoomPanContext';

// minimal svg wrapper for events
function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <svg width={100} height={100}>
      {children}
    </svg>
  );
}

describe('ZoomPanContainer', () => {
  it('zooms with wheel event', () => {
    const { getByTestId } = render(
      <Wrapper>
        <ZoomPanContainer config={{ mode: 'xy' }}>
          <g data-testid="content" />
        </ZoomPanContainer>
      </Wrapper>,
    );
    const g = getByTestId('content').parentElement as SVGGElement;
    fireEvent.wheel(g, { deltaY: -100 });
    expect(g.getAttribute('transform')).not.toBe('translate(0 0) scale(1 1)');
  });

  it('resets on double click', () => {
    const { getByTestId } = render(
      <Wrapper>
        <ZoomPanContainer config={{ mode: 'xy' }}>
          <g data-testid="content" />
        </ZoomPanContainer>
      </Wrapper>,
    );
    const g = getByTestId('content').parentElement as SVGGElement;
    fireEvent.wheel(g, { deltaY: -100 });
    fireEvent.dblClick(g);
    expect(g.getAttribute('transform')).toBe('translate(0 0) scale(1 1)');
  });
});
