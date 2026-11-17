import React from 'react';
import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Surface, Text } from '../../src';
import * as DOMUtils from '../../src/util/DOMUtils';
import { Global } from '../../src/util/Global';
import { getWordsByLines } from '../../src/component/Text';

/**
 * Every grapheme cluster measures as one glyph width (20), regardless of how many
 * code points it contains. The ellipsis measures as one narrow glyph (10).
 */
function mockGraphemeWidths() {
  const segmenter =
    typeof Intl.Segmenter === 'function' ? new Intl.Segmenter(undefined, { granularity: 'grapheme' }) : null;
  vi.spyOn(DOMUtils, 'getStringSize').mockImplementation(text => {
    const units =
      segmenter == null ? Array.from(String(text)) : Array.from(segmenter.segment(String(text)), word => word.segment);
    return {
      width: units.reduce((sum, unit) => sum + (unit === '\u2026' ? 10 : 20), 0),
      height: 17,
    };
  });
}

const FAMILY = '\u{1F468}\u200D\u{1F469}\u200D\u{1F467}'; // family emoji: 5 code points, 1 grapheme
const COMBINING_AND_FLAG = 'e\u0301b\u{1F1EE}\u{1F1F3}'; // e + combining acute, b, regional indicators: 5 code points, 3 graphemes

describe('<Text breakAll /> grapheme clusters', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('keeps a ZWJ emoji sequence on one line when the whole grapheme fits the width', () => {
    mockGraphemeWidths();

    const { container } = render(
      <Surface width={300} height={300}>
        <Text width={45} breakAll>
          {`${FAMILY}ab`}
        </Text>
      </Surface>,
    );

    const lines = Array.from(container.querySelectorAll('text > tspan'), line => line.textContent);
    // grapheme units: [family(20), a(20), b(20)] -> family+a (40) fits, b wraps
    expect(lines).toEqual([`${FAMILY}a`, 'b']);
  });

  it('does not truncate through a ZWJ emoji sequence when maxLines adds an ellipsis', () => {
    mockGraphemeWidths();

    const { container } = render(
      <Surface width={300} height={300}>
        <Text width={40} maxLines={1} breakAll>
          {`${FAMILY}abc`}
        </Text>
      </Surface>,
    );

    const lines = Array.from(container.querySelectorAll('text > tspan'), line => line.textContent);
    // grapheme units: family(20) + ellipsis(10) fits in 40 -> family stays intact, no dangling ZWJ
    expect(lines).toEqual([`${FAMILY}\u2026`]);
  });

  it('keeps combining marks and regional indicators together with their base characters', () => {
    mockGraphemeWidths();

    const { container } = render(
      <Surface width={300} height={300}>
        <Text width={45} breakAll>
          {COMBINING_AND_FLAG}
        </Text>
      </Surface>,
    );

    const lines = Array.from(container.querySelectorAll('text > tspan'), line => line.textContent);
    // grapheme units: [e+acute(20), b(20), flag(20)] -> e+b fits, flag wraps whole
    expect(lines).toEqual(['e\u0301b', '\u{1F1EE}\u{1F1F3}']);
  });

  it('falls back to code-point splitting when Intl.Segmenter is unavailable', () => {
    vi.stubGlobal('Intl', { ...Intl, Segmenter: undefined });
    mockGraphemeWidths();

    const { container } = render(
      <Surface width={300} height={300}>
        <Text width={45} breakAll>
          {`${FAMILY}ab`}
        </Text>
      </Surface>,
    );

    const lines = Array.from(container.querySelectorAll('text > tspan'), line => line.textContent);
    // previous behavior: code-point units tear the cluster
    expect(lines).toEqual(['\u{1F468}\u200D', '\u{1F469}\u200D', '\u{1F467}a', 'b']);
  });

  it('never runs wrapping or segmentation in the server branch (Global.isSsr)', () => {
    mockGraphemeWidths();
    const originalIsSsr = Global.isSsr;
    Global.isSsr = true;
    try {
      // The server branch skips width calculation entirely (getWordsByLines guards on Global.isSsr),
      // so the text is returned unwrapped and grapheme clusters are trivially intact.
      const withSegmenter = getWordsByLines({ width: 45, breakAll: true, children: `${FAMILY}ab` });
      expect(withSegmenter).toHaveLength(1);
      expect(withSegmenter[0].words.join('')).toBe(`${FAMILY}ab`);

      // Server output is identical when Intl.Segmenter is missing: the server branch never
      // depends on segmentation support.
      vi.stubGlobal('Intl', { ...Intl, Segmenter: undefined });
      const withoutSegmenter = getWordsByLines({ width: 45, breakAll: true, children: `${FAMILY}ab` });
      expect(withoutSegmenter).toEqual(withSegmenter);
    } finally {
      Global.isSsr = originalIsSsr;
    }
  });
});
