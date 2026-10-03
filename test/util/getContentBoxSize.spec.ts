import { describe, it, expect, vi } from 'vitest';
import { getContentBoxSize } from '../../src/util/getContentBoxSize';
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

describe('getContentBoxSize', () => {
  it('returns the client size of an element without padding', () => {
    mockClientSize(400, 200);
    expect(getContentBoxSize(createElement())).toEqual({ width: 400, height: 200 });
  });

  it('subtracts padding on each side', () => {
    mockClientSize(400, 200);
    const element = createElement({ padding: '1px 2px 3px 4px' });
    expect(getContentBoxSize(element)).toEqual({ width: 394, height: 196 });
  });

  it('does not subtract border, because the client size already excludes it', () => {
    mockClientSize(400, 200);
    const element = createElement({ borderStyle: 'solid', borderWidth: '1px 2px 3px 4px' });
    expect(getContentBoxSize(element)).toEqual({ width: 400, height: 200 });
  });

  it('ignores the painted size, which a CSS transform scales', () => {
    mockClientSize(400, 200);
    const element = createElement({ padding: '10px' });
    vi.spyOn(element, 'getBoundingClientRect').mockReturnValue(getMockDomRect({ width: 210, height: 110 }));
    expect(getContentBoxSize(element)).toEqual({ width: 380, height: 180 });
  });

  it('never returns a negative size', () => {
    mockClientSize(10, 10);
    const element = createElement({ padding: '20px' });
    expect(getContentBoxSize(element)).toEqual({ width: 0, height: 0 });
  });
});
