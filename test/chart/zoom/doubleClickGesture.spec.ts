import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { installDoubleClickGesture } from '../../../src/chart/zoom/doubleClickGesture';
import { cleanupMockZoomApi, createMockZoomApi, MockZoomApi } from './zoomGestureTestHelpers';

const doubleClick = (target: Element, clientX = 50, clientY = 50): void => {
  target.dispatchEvent(new MouseEvent('dblclick', { bubbles: true, cancelable: true, clientX, clientY }));
};

describe('installDoubleClickGesture', () => {
  let api: MockZoomApi, uninstall: () => void;

  const install = (): void => {
    uninstall = installDoubleClickGesture(api);
  };

  beforeEach(() => {
    api = createMockZoomApi();
  });

  afterEach(() => {
    uninstall?.();
    cleanupMockZoomApi(api);
  });

  it('resets the zoom when double-clicking the plot', () => {
    install();
    doubleClick(api.element, 25, 75);

    expect(api.reset).toHaveBeenCalledTimes(1);
    expect(api.refreshPointer).toHaveBeenCalledWith(25, 75);
  });

  it.each(['xAxis', 'yAxis'] as const)('resets when double-clicking the %s band', region => {
    api.pointerRegion.mockReturnValue(region);
    install();
    doubleClick(api.element);

    expect(api.reset).toHaveBeenCalledTimes(1);
  });

  it('does nothing outside the chart', () => {
    api.pointerRegion.mockReturnValue('outside');
    install();
    doubleClick(api.element);

    expect(api.reset).not.toHaveBeenCalled();
  });

  it('does nothing when doubleClickReset is off', () => {
    api = createMockZoomApi({ doubleClickReset: false });
    install();
    doubleClick(api.element);

    expect(api.reset).not.toHaveBeenCalled();
  });

  it('ignores interactive targets', () => {
    const button = document.createElement('button');
    api.element.appendChild(button);
    install();
    doubleClick(button);

    expect(api.reset).not.toHaveBeenCalled();
  });

  it('ignores a descendant of an interactive target', () => {
    const button = document.createElement('button');
    const label = document.createElement('span');
    button.appendChild(label);
    api.element.appendChild(button);
    install();
    doubleClick(label);

    expect(api.reset).not.toHaveBeenCalled();
  });

  it('leaves a scrollbar double-click to the scrollbar itself', () => {
    const scrollbar = document.createElement('div');
    scrollbar.setAttribute('data-recharts-zoom-scrollbar', 'true');
    api.element.appendChild(scrollbar);
    install();
    doubleClick(scrollbar);

    expect(api.reset).not.toHaveBeenCalled();
  });

  it('stops resetting after cleanup', () => {
    install();
    uninstall();
    doubleClick(api.element);

    expect(api.reset).not.toHaveBeenCalled();
  });
});
