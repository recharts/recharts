import { describe, it, expect } from 'vitest';
import { parseInlineJsDocLink, parseJsDocLinkBody, renderJsDocMarkdown } from './jsDocMarkdown';

describe('parseJsDocLinkBody', () => {
  it.each([
    ['XAxis', { target: 'XAxis', label: 'XAxis' }],
    ['  XAxis  ', { target: 'XAxis', label: 'XAxis' }],
    ['XAxis the axis', { target: 'XAxis', label: 'the axis' }],
    ['XAxis|the axis', { target: 'XAxis', label: 'the axis' }],
    ['XAxis | the axis', { target: 'XAxis', label: 'the axis' }],
    ['https://example.com/a|b', { target: 'https://example.com/a', label: 'b' }],
  ])('should parse %j', (input, expected) => {
    expect(parseJsDocLinkBody(input)).toEqual(expected);
  });

  it.each(['', '   ', '|label'])('should return undefined when there is no target in %j', input => {
    expect(parseJsDocLinkBody(input)).toBeUndefined();
  });
});

describe('parseInlineJsDocLink', () => {
  it('should parse a link at the beginning of the text and report how much of the text it takes', () => {
    expect(parseInlineJsDocLink('{@link XAxis|the axis} and more {@link YAxis}')).toEqual({
      target: 'XAxis',
      label: 'the axis',
      raw: '{@link XAxis|the axis}',
    });
  });

  it('should accept a space after the at sign', () => {
    expect(parseInlineJsDocLink('{@ link XAxis}')).toEqual({ target: 'XAxis', label: 'XAxis', raw: '{@ link XAxis}' });
  });

  it.each([
    'See {@link XAxis}',
    '{@link XAxis',
    '{@link}',
    '{@link }',
    '{@linkcode XAxis}',
    '{@see XAxis}',
    '{ @link XAxis}',
  ])('should return undefined for %j', input => {
    expect(parseInlineJsDocLink(input)).toBeUndefined();
  });
});

describe('renderJsDocMarkdown', () => {
  it('should convert {@link url} to HTML anchor tag', () => {
    const input = 'Check {@link https://example.com} for details';
    const expected = '<p>Check <a href="https://example.com">https://example.com</a> for details</p>\n';
    expect(renderJsDocMarkdown(input)).toBe(expected);
  });

  it('should convert {@link url text} to HTML anchor tag with custom text', () => {
    const input = 'Check {@link https://example.com example site} for details';
    const expected = '<p>Check <a href="https://example.com">example site</a> for details</p>\n';
    expect(renderJsDocMarkdown(input)).toBe(expected);
  });

  it('should convert {@link url|text} to HTML anchor tag with custom text', () => {
    const input = 'Check {@link https://example.com|example site} for details';
    const expected = '<p>Check <a href="https://example.com">example site</a> for details</p>\n';
    expect(renderJsDocMarkdown(input)).toBe(expected);
  });

  it('should handle {@ link} with space after @ symbol', () => {
    const input = 'Uses {@ link https://developer.mozilla.org/API ResizeObserver} API';
    const expected = '<p>Uses <a href="https://developer.mozilla.org/API">ResizeObserver</a> API</p>\n';
    expect(renderJsDocMarkdown(input)).toBe(expected);
  });

  it('should convert multiple inline links', () => {
    const input = 'See {@link https://a.com A} and {@link https://b.com B}';
    const expected = '<p>See <a href="https://a.com">A</a> and <a href="https://b.com">B</a></p>\n';
    expect(renderJsDocMarkdown(input)).toBe(expected);
  });

  it('should render markdown in text without links', () => {
    expect(renderJsDocMarkdown('Just `plain` text without any links')).toBe(
      '<p>Just <code>plain</code> text without any links</p>\n',
    );
  });

  it('should convert {@link ComponentName} to LinkToApi for names with their own API page', () => {
    const input = 'Use {@link Rectangle} or {@link Line} components';
    const expected = '<p>Use <LinkToApi>Rectangle</LinkToApi> or <LinkToApi>Line</LinkToApi> components</p>\n';
    expect(renderJsDocMarkdown(input, ['Rectangle', 'Line'])).toBe(expected);
  });

  it('should not read underscores in a link target as markdown emphasis', () => {
    const input = 'Use {@link some_long_name} or {@link https://example.com/a_b_c}';
    const expected =
      '<p>Use <LinkToApi>some_long_name</LinkToApi> or <a href="https://example.com/a_b_c">https://example.com/a_b_c</a></p>\n';
    expect(renderJsDocMarkdown(input, ['some_long_name'])).toBe(expected);
  });

  it('should leave links inside of code alone', () => {
    const input = 'Write `{@link SomeType}` in your JSDoc.';
    const expected = '<p>Write <code>{@link SomeType}</code> in your JSDoc.</p>\n';
    expect(renderJsDocMarkdown(input, [])).toBe(expected);
  });

  it('should leave unknown symbol references untouched when the list of API pages is not provided', () => {
    const input = 'See {@link SomeUnknownComponent}';
    const expected = '<p>See <a href="SomeUnknownComponent">SomeUnknownComponent</a></p>\n';
    expect(renderJsDocMarkdown(input)).toBe(expected);
  });

  describe('links to symbols without their own API page', () => {
    it('should remove the whole sentence that contains the link', () => {
      const input = [
        'Controls how Recharts calculates "nice" tick values for this axis.',
        "Options: `'none'`, `'auto'`, `'adaptive'`, `'snap125'`.",
        'See {@link NiceTicksAlgorithm} for a full description of each option.',
      ].join('\n');
      const expected = [
        '<p>Controls how Recharts calculates &quot;nice&quot; tick values for this axis.',
        'Options: <code>&#39;none&#39;</code>, <code>&#39;auto&#39;</code>, <code>&#39;adaptive&#39;</code>, <code>&#39;snap125&#39;</code>.</p>\n',
      ].join('\n');
      expect(renderJsDocMarkdown(input, ['XAxis'])).toBe(expected);
    });

    it('should remove a sentence from the middle and keep its neighbours', () => {
      const input = 'First sentence. See {@link SomeType} for details. Use {@link XAxis} instead.';
      const expected = '<p>First sentence. Use <LinkToApi>XAxis</LinkToApi> instead.</p>\n';
      expect(renderJsDocMarkdown(input, ['XAxis'])).toBe(expected);
    });

    it('should remove a sentence that spans multiple lines', () => {
      const input = 'First sentence.\nSee {@link SomeType}\nfor details.\n\nSecond paragraph.';
      const expected = '<p>First sentence.</p>\n<p>Second paragraph.</p>\n';
      expect(renderJsDocMarkdown(input, [])).toBe(expected);
    });

    it('should not reach across paragraphs when the sentence has no punctuation', () => {
      const input = 'First paragraph\n\nSee {@link SomeType}\n\nThird paragraph';
      const expected = '<p>First paragraph</p>\n<p>Third paragraph</p>\n';
      expect(renderJsDocMarkdown(input, [])).toBe(expected);
    });

    it('should remove only the list item that contains the link', () => {
      const input = 'Options:\n- one\n- two, see {@link SomeType}\n- three';
      const expected = '<p>Options:</p>\n<ul>\n<li>one</li>\n<li>three</li>\n</ul>\n';
      expect(renderJsDocMarkdown(input, [])).toBe(expected);
    });

    it('should remove a numbered list item together with its number', () => {
      const input = '1. See {@link SomeType}.\n2. Keep.';
      const expected = '<ol>\n<li>Keep.</li>\n</ol>\n';
      expect(renderJsDocMarkdown(input, [])).toBe(expected);
    });

    it('should remove the list when none of its items are left', () => {
      const input = 'Options:\n\n- see {@link SomeType}\n- or {@link OtherType}';
      const expected = '<p>Options:</p>\n';
      expect(renderJsDocMarkdown(input, [])).toBe(expected);
    });

    it('should check the link target and not its text', () => {
      const input = 'Goes on {@link XAxis|the axis}. Uses {@link SomeType|XAxis} too.';
      const expected = '<p>Goes on <LinkToApi>the axis</LinkToApi>.</p>\n';
      expect(renderJsDocMarkdown(input, ['XAxis'])).toBe(expected);
    });

    it('should not end a sentence at punctuation inside of code, links, or numbers', () => {
      const input =
        'Since 3.5 use `a.b. C` or {@link https://example.com/a.b. Docs} and never {@link SomeType}. Last sentence.';
      const expected = '<p>Last sentence.</p>\n';
      expect(renderJsDocMarkdown(input, [])).toBe(expected);
    });

    it('should find the link inside of other formatting', () => {
      const input = 'First sentence. See **{@link SomeType}** for details.';
      const expected = '<p>First sentence.</p>\n';
      expect(renderJsDocMarkdown(input, [])).toBe(expected);
    });

    it('should return empty string if nothing else is left', () => {
      expect(renderJsDocMarkdown('See {@link SomeUnknownComponent}', [])).toBe('');
    });

    it('should keep sentences with external links and paths', () => {
      const input = 'See {@link https://example.com/a.b docs}. Also {@link /guide/axisTicks/ the guide}.';
      const expected =
        '<p>See <a href="https://example.com/a.b">docs</a>. Also <a href="/guide/axisTicks/">the guide</a>.</p>\n';
      expect(renderJsDocMarkdown(input, [])).toBe(expected);
    });

    it('should render the link as plain text where sentences can not be removed', () => {
      const input = '| name | type |\n|---|---|\n| a | {@link SomeType} |';
      expect(renderJsDocMarkdown(input, [])).toContain('<td>SomeType</td>');
    });
  });
});
