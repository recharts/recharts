import React from 'react';
import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Surface, Text } from '../../src';
import * as DOMUtils from '../../src/util/DOMUtils';

const FAMILY = '\u{1F468}\u200D\u{1F469}\u200D\u{1F467}';

describe('<Text /> maxLines search boundary', () => {
  afterEach(() => vi.unstubAllGlobals());

  it.each([
    ['word wrapping', 'abW', false, false, 'ab…'],
    ['character wrapping', 'abW', true, false, 'ab…'],
    ['single overflowing glyph', 'W', false, false, '…'],
    ['single overflowing grapheme', FAMILY, true, false, '…'],
    ['grapheme prefix', `${FAMILY}W`, true, false, `${FAMILY}…`],
    ['code-point fallback', 'abW', true, true, 'ab…'],
    ['supplementary code-point fallback', '😀W', true, true, '😀…'],
  ])('truncates at the last fitting prefix: %s', (_, children, breakAll, noSegmenter, expected) => {
    const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
    vi.spyOn(DOMUtils, 'getStringSize').mockImplementation(text => ({
      width: Array.from(segmenter.segment(String(text)), part => part.segment).reduce((sum, unit) => {
        if (unit === '…') {
          return sum + 5;
        }
        return sum + (unit === 'W' || children === FAMILY ? 80 : 10);
      }, 0),
      height: 17,
    }));
    if (noSegmenter) {
      vi.stubGlobal('Intl', { ...Intl, Segmenter: undefined });
    }
    const { container } = render(
      <Surface width={300} height={300}>
        <Text width={30} maxLines={1} breakAll={breakAll}>
          {children}
        </Text>
      </Surface>,
    );
    expect(Array.from(container.querySelectorAll('text > tspan'), line => line.textContent)).toEqual([expected]);
  });

  it.each([
    ['text fits without suffix', 'ab', 30, false, ['ab']],
    ['interior boundary', 'abcdW', 30, false, ['ab…']],
    ['ellipsis cannot fit', 'W', 3, false, ['W']],
    ['scaleToFit bypasses truncation', 'abW', 30, true, ['abW']],
  ])('keeps existing behavior: %s', (_, children, width, scaleToFit, expected) => {
    vi.spyOn(DOMUtils, 'getStringSize').mockImplementation(text => ({
      width: Array.from(String(text)).reduce((sum, unit) => {
        if (unit === '…') {
          return sum + 5;
        }
        return sum + (unit === 'W' ? 80 : 10);
      }, 0),
      height: 17,
    }));
    const { container } = render(
      <Surface width={300} height={300}>
        <Text width={width} maxLines={1} scaleToFit={scaleToFit} breakAll>
          {children}
        </Text>
      </Surface>,
    );
    expect(Array.from(container.querySelectorAll('text > tspan'), line => line.textContent)).toEqual(expected);
  });
});
