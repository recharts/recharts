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

describe('getContentBoxSize', () => {
  it('returns the layout size of an element without padding or border', () => {
    mockHTMLElementProperty('offsetWidth', 400);
    mockHTMLElementProperty('offsetHeight', 200);
    expect(getContentBoxSize(createElement())).toEqual({ width: 400, height: 200 });
  });

  it('subtracts padding on each side', () => {
    mockHTMLElementProperty('offsetWidth', 400);
    mockHTMLElementProperty('offsetHeight', 200);
    const element = createElement({ padding: '1px 2px 3px 4px' });
    expect(getContentBoxSize(element)).toEqual({ width: 394, height: 196 });
  });

  it('subtracts border on each side', () => {
    mockHTMLElementProperty('offsetWidth', 400);
    mockHTMLElementProperty('offsetHeight', 200);
    const element = createElement({ borderStyle: 'solid', borderWidth: '1px 2px 3px 4px' });
    expect(getContentBoxSize(element)).toEqual({ width: 394, height: 196 });
  });

  it('ignores the painted size, which a CSS transform scales', () => {
    mockHTMLElementProperty('offsetWidth', 400);
    mockHTMLElementProperty('offsetHeight', 200);
    const element = createElement({ padding: '10px' });
    vi.spyOn(element, 'getBoundingClientRect').mockReturnValue(getMockDomRect({ width: 210, height: 110 }));
    expect(getContentBoxSize(element)).toEqual({ width: 380, height: 180 });
  });

  it('never returns a negative size', () => {
    mockHTMLElementProperty('offsetWidth', 10);
    mockHTMLElementProperty('offsetHeight', 10);
    const element = createElement({ padding: '20px' });
    expect(getContentBoxSize(element)).toEqual({ width: 0, height: 0 });
  });
});
