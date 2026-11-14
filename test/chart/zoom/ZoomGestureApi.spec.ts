import { afterEach, describe, expect, it } from 'vitest';
import {
  isInteractiveZoomTarget,
  suppressTouchBrowserDecorations,
  TOUCH_DECORATION_CLASS,
} from '../../../src/chart/zoom/ZoomGestureApi';

function createWrapper(surfaceContent = '<g id="mark"></g>'): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<svg class="recharts-surface">${surfaceContent}</svg>`;
  document.body.appendChild(wrapper);
  return wrapper;
}

describe('isInteractiveZoomTarget', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('returns false for a non-element target', () => {
    expect(isInteractiveZoomTarget(null)).toBe(false);
    expect(isInteractiveZoomTarget(window)).toBe(false);
  });

  it.each([
    ['<button></button>', 'button'],
    ['<a href="#x"></a>', 'a'],
    ['<input />', 'input'],
    ['<select></select>', 'select'],
    ['<textarea></textarea>', 'textarea'],
    ['<summary></summary>', 'summary'],
    ['<div contenteditable="true"></div>', 'div'],
    ['<div role="button"></div>', 'div'],
    ['<div role="slider"></div>', 'div'],
    ['<div data-recharts-zoom-scrollbar="true"></div>', 'div'],
    ['<div data-recharts-zoom-interaction-island="true"></div>', 'div'],
  ])('treats %s as interactive', (html, selector) => {
    const host = createWrapper();
    host.insertAdjacentHTML('beforeend', html);
    expect(isInteractiveZoomTarget(host.querySelector(selector))).toBe(true);
  });

  it('treats a descendant of an interactive element as interactive', () => {
    const host = createWrapper();
    host.insertAdjacentHTML('beforeend', '<button><span id="label"></span></button>');
    expect(isInteractiveZoomTarget(host.querySelector('#label'))).toBe(true);
  });

  it('does not treat a plain chart element as interactive', () => {
    const host = createWrapper();
    expect(isInteractiveZoomTarget(host.querySelector('#mark'))).toBe(false);
  });

  it('does not treat an anchor without href as interactive', () => {
    const host = createWrapper();
    host.insertAdjacentHTML('beforeend', '<a id="no-href"></a>');
    expect(isInteractiveZoomTarget(host.querySelector('#no-href'))).toBe(false);
  });
});

describe('suppressTouchBrowserDecorations', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('marks the wrapper and suppresses selection on the surface', () => {
    const wrapper = createWrapper();
    const mark = wrapper.querySelector<SVGElement>('#mark')!;

    const cleanup = suppressTouchBrowserDecorations(wrapper);

    expect(wrapper.classList.contains(TOUCH_DECORATION_CLASS)).toBe(true);
    expect(wrapper.querySelector('style[data-recharts-zoom-touch-style]')).not.toBeNull();
    expect(mark.style.getPropertyValue('user-select')).toBe('none');

    cleanup();

    expect(wrapper.classList.contains(TOUCH_DECORATION_CLASS)).toBe(false);
    expect(wrapper.querySelector('style[data-recharts-zoom-touch-style]')).toBeNull();
    expect(mark.style.getPropertyValue('user-select')).toBe('');
  });

  it('restores a pre-existing inline value', () => {
    const wrapper = createWrapper();
    const mark = wrapper.querySelector<SVGElement>('#mark')!;
    mark.style.setProperty('user-select', 'text');

    suppressTouchBrowserDecorations(wrapper)();

    expect(mark.style.getPropertyValue('user-select')).toBe('text');
  });

  /*
   * Snapshotting only the value silently downgraded a consumer's inline `!important`, because
   * setProperty defaults to no priority when restoring.
   */
  it('restores a pre-existing inline !important priority', () => {
    const wrapper = createWrapper();
    const mark = wrapper.querySelector<SVGElement>('#mark')!;
    mark.style.setProperty('user-select', 'text', 'important');

    suppressTouchBrowserDecorations(wrapper)();

    expect(mark.style.getPropertyValue('user-select')).toBe('text');
    expect(mark.style.getPropertyPriority('user-select')).toBe('important');
  });

  it('does not invent a priority for a property that had none', () => {
    const wrapper = createWrapper();
    const mark = wrapper.querySelector<SVGElement>('#mark')!;
    mark.style.setProperty('-webkit-user-select', 'text');

    suppressTouchBrowserDecorations(wrapper)();

    expect(mark.style.getPropertyPriority('-webkit-user-select')).toBe('');
  });

  it('leaves a class the caller already had', () => {
    const wrapper = createWrapper();
    wrapper.classList.add(TOUCH_DECORATION_CLASS);

    suppressTouchBrowserDecorations(wrapper)();

    expect(wrapper.classList.contains(TOUCH_DECORATION_CLASS)).toBe(true);
  });

  it('skips interactive targets and their descendants', () => {
    const wrapper = createWrapper('<foreignObject><button id="btn"><span id="label"></span></button></foreignObject>');
    const button = wrapper.querySelector<HTMLElement>('#btn')!;
    const label = wrapper.querySelector<HTMLElement>('#label')!;

    suppressTouchBrowserDecorations(wrapper);

    expect(button.style.getPropertyValue('user-select')).toBe('');
    expect(label.style.getPropertyValue('user-select')).toBe('');
  });

  it('keeps the decorations while a second caller still needs them', () => {
    const wrapper = createWrapper();
    const mark = wrapper.querySelector<SVGElement>('#mark')!;

    const first = suppressTouchBrowserDecorations(wrapper);
    const second = suppressTouchBrowserDecorations(wrapper);

    first();
    expect(mark.style.getPropertyValue('user-select')).toBe('none');
    expect(wrapper.classList.contains(TOUCH_DECORATION_CLASS)).toBe(true);

    second();
    expect(mark.style.getPropertyValue('user-select')).toBe('');
    expect(wrapper.classList.contains(TOUCH_DECORATION_CLASS)).toBe(false);
  });

  it('can be installed again after a full cleanup', () => {
    const wrapper = createWrapper();
    const mark = wrapper.querySelector<SVGElement>('#mark')!;

    suppressTouchBrowserDecorations(wrapper)();
    const cleanup = suppressTouchBrowserDecorations(wrapper);

    expect(mark.style.getPropertyValue('user-select')).toBe('none');
    cleanup();
    expect(mark.style.getPropertyValue('user-select')).toBe('');
  });
});
