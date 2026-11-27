import { describe, it, expect, vi } from 'vitest';
import { getElementSize } from '../../src/util/useElementSize';
import { getMockDomRect } from '../helper/mockGetBoundingClientRect';
import { mockHTMLElementProperty } from '../helper/mockHTMLElementProperty';

function createElement(style: Partial<CSSStyleDeclaration> = {}): HTMLElement {
  const element = document.createElement('div');
  Object.assign(element.style, style);
  document.body.appendChild(element);
  return element;
}

/**
 * jsdom does not do layout, so mock clientWidth and clientHeight:
 * the size of the content box plus padding, without border and scrollbar.
 * @param width clientWidth
 * @param height clientHeight
 */
function mockClientSize(width: number, height: number) {
  mockHTMLElementProperty('clientWidth', width);
  mockHTMLElementProperty('clientHeight', height);
}

describe('getElementSize with content-box', () => {
  it('returns the client size of an element without padding', () => {
    mockClientSize(400, 200);
    expect(getElementSize(createElement(), 'content-box')).toEqual({ width: 400, height: 200 });
  });

  it('subtracts padding on each side', () => {
    mockClientSize(400, 200);
    const element = createElement({ padding: '1px 2px 3px 4px' });
    expect(getElementSize(element, 'content-box')).toEqual({ width: 394, height: 196 });
  });

  it('does not subtract border, because the client size already excludes it', () => {
    mockClientSize(400, 200);
    const element = createElement({ borderStyle: 'solid', borderWidth: '1px 2px 3px 4px' });
    expect(getElementSize(element, 'content-box')).toEqual({ width: 400, height: 200 });
  });

  it('ignores the painted size, which a CSS transform scales', () => {
    mockClientSize(400, 200);
    const element = createElement({ padding: '10px' });
    vi.spyOn(element, 'getBoundingClientRect').mockReturnValue(getMockDomRect({ width: 210, height: 110 }));
    expect(getElementSize(element, 'content-box')).toEqual({ width: 380, height: 180 });
  });

  it('never returns a negative size', () => {
    mockClientSize(10, 10);
    const element = createElement({ padding: '20px' });
    expect(getElementSize(element, 'content-box')).toEqual({ width: 0, height: 0 });
  });
});

describe('getElementSize with border-box', () => {
  it('falls back to the offset size when the computed size is not in pixels', () => {
    mockHTMLElementProperty('offsetWidth', 120);
    mockHTMLElementProperty('offsetHeight', 60);
    const element = createElement({ padding: '10px', borderStyle: 'solid', borderWidth: '5px' });
    expect(getElementSize(element, 'border-box')).toEqual({ width: 120, height: 60 });
  });

  it('ignores the painted size, which a CSS transform scales', () => {
    mockHTMLElementProperty('offsetWidth', 120);
    mockHTMLElementProperty('offsetHeight', 60);
    const element = createElement();
    vi.spyOn(element, 'getBoundingClientRect').mockReturnValue(getMockDomRect({ width: 60, height: 30 }));
    expect(getElementSize(element, 'border-box')).toEqual({ width: 120, height: 60 });
  });

  it('keeps fractional pixels, and adds padding and border to the computed width and height', () => {
    const element = createElement({
      width: '100.5px',
      height: '20.25px',
      padding: '2px',
      borderStyle: 'solid',
      borderWidth: '1px',
    });
    expect(getElementSize(element, 'border-box')).toEqual({ width: 106.5, height: 26.25 });
  });

  it('returns the computed width and height as they are with box-sizing: border-box', () => {
    const element = createElement({
      boxSizing: 'border-box',
      width: '100.5px',
      height: '20.25px',
      padding: '2px',
    });
    expect(getElementSize(element, 'border-box')).toEqual({ width: 100.5, height: 20.25 });
  });
});
