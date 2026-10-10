import * as React from 'react';
import { render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { renderSelectionOverlay, SelectionStyle } from '../../../src/chart/zoom/SelectionOverlay';
import { SelectionRect } from '../../../src/chart/zoom/ZoomGestureApi';

const SELECTION: SelectionRect = { x: 10, y: 20, width: 30, height: 40 };

function Overlay({
  selection,
  element,
  selectionStyle,
}: {
  selection: SelectionRect | null;
  element: HTMLElement | null;
  selectionStyle?: SelectionStyle;
}): React.ReactPortal | null {
  return renderSelectionOverlay(selection, element, selectionStyle);
}

describe('renderSelectionOverlay', () => {
  let host: HTMLElement;

  const renderOverlay = (
    selection: SelectionRect | null,
    element: HTMLElement | null = host,
    selectionStyle?: SelectionStyle,
  ): HTMLElement | null => {
    render(<Overlay selection={selection} element={element} selectionStyle={selectionStyle} />);
    return host.querySelector<HTMLElement>('.recharts-zoom-selection');
  };

  beforeEach(() => {
    host = document.createElement('div');
    document.body.appendChild(host);
  });

  afterEach(() => {
    host.remove();
  });

  it('renders nothing when there is no selection', () => {
    expect(renderOverlay(null)).toBeNull();
  });

  it('renders nothing when the wrapper element is not mounted yet', () => {
    render(<Overlay selection={SELECTION} element={null} />);
    expect(document.querySelector('.recharts-zoom-selection')).toBeNull();
  });

  it('portals the rectangle into the given element', () => {
    const rect = renderOverlay(SELECTION);

    expect(rect).not.toBeNull();
    expect(rect!.parentElement).toBe(host);
  });

  it('positions the rectangle from the selection geometry', () => {
    const rect = renderOverlay(SELECTION)!;

    expect(rect.style.position).toBe('absolute');
    expect(rect.style.left).toBe('10px');
    expect(rect.style.top).toBe('20px');
    expect(rect.style.width).toBe('30px');
    expect(rect.style.height).toBe('40px');
  });

  it('does not intercept pointer events', () => {
    expect(renderOverlay(SELECTION)!.style.pointerEvents).toBe('none');
  });

  it('renders a zero-sized rectangle at the drag origin', () => {
    const rect = renderOverlay({ x: 5, y: 6, width: 0, height: 0 })!;

    expect(rect.style.width).toBe('0px');
    expect(rect.style.height).toBe('0px');
  });

  it('appends a custom className to the stable one', () => {
    const rect = renderOverlay(SELECTION, host, { className: 'my-selection' })!;

    expect(rect).toHaveClass('recharts-zoom-selection');
    expect(rect).toHaveClass('my-selection');
  });

  it('lets a custom style override the defaults', () => {
    const rect = renderOverlay(SELECTION, host, { style: { background: 'red', border: '2px dashed red' } })!;

    expect(rect.style.background).toBe('red');
    expect(rect.style.borderWidth).toBe('2px');
    expect(rect.style.borderStyle).toBe('dashed');
    // Geometry is still driven by the selection.
    expect(rect.style.left).toBe('10px');
  });
});
