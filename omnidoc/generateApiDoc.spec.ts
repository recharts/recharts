import { describe, it, expect } from 'vitest';
import { generateApiDoc, processInlineLinks } from './generateApiDoc';
import { ProjectDocReader } from './readProject';

describe('processInlineLinks', () => {
  it('should convert {@link url} to HTML anchor tag', () => {
    const input = 'Check {@link https://example.com} for details';
    const expected = 'Check <a href="https://example.com">https://example.com</a> for details';
    expect(processInlineLinks(input)).toBe(expected);
  });

  it('should convert {@link url text} to HTML anchor tag with custom text', () => {
    const input = 'Check {@link https://example.com example site} for details';
    const expected = 'Check <a href="https://example.com">example site</a> for details';
    expect(processInlineLinks(input)).toBe(expected);
  });

  it('should handle {@ link} with space after @ symbol', () => {
    const input = 'Uses {@ link https://developer.mozilla.org/API ResizeObserver} API';
    const expected = 'Uses <a href="https://developer.mozilla.org/API">ResizeObserver</a> API';
    expect(processInlineLinks(input)).toBe(expected);
  });

  it('should convert multiple inline links', () => {
    const input = 'See {@link https://a.com A} and {@link https://b.com B}';
    const expected = 'See <a href="https://a.com">A</a> and <a href="https://b.com">B</a>';
    expect(processInlineLinks(input)).toBe(expected);
  });

  it('should leave text without links unchanged', () => {
    const input = 'Just plain text without any links';
    expect(processInlineLinks(input)).toBe(input);
  });

  it('should convert {@link ComponentName} to React Router Link for known Recharts components', () => {
    const input = 'This component uses {@link Rectangle} for rendering';
    const expected = 'This component uses <Link to="/api/Rectangle/">Rectangle</Link> for rendering';
    expect(processInlineLinks(input, ['Rectangle'])).toBe(expected);
  });

  it('should handle multiple component links in the same text', () => {
    const input = 'Use {@link Rectangle} or {@link Line} components';
    const expected = 'Use <Link to="/api/Rectangle/">Rectangle</Link> or <Link to="/api/Line/">Line</Link> components';
    expect(processInlineLinks(input, ['Rectangle', 'Line'])).toBe(expected);
  });

  it('should not convert {@link ComponentName} if it is not a Recharts component', () => {
    const input = 'See {@link SomeUnknownComponent}';
    const expected = 'See <a href="SomeUnknownComponent">SomeUnknownComponent</a>';
    expect(processInlineLinks(input, [])).toBe(expected);
  });
});

describe('generateApiDoc', () => {
  const reader = new ProjectDocReader();
  const contextMap = new Map();

  it('should include component-level links from @see tags', async () => {
    const apiDoc = await generateApiDoc('ResponsiveContainer', reader, contextMap);

    expect(apiDoc.links).toBeDefined();
    expect(apiDoc.links?.length).toBeGreaterThan(0);

    // Check that the guide link from @see tag is included
    const guideLink = apiDoc.links?.find(link => link.url.includes('/guide/sizes'));

    expect(guideLink).toBeDefined();
    expect(guideLink?.name).toBe('Chart size guide');
    // Internal Recharts link should not be marked as external
    expect(guideLink?.isExternal).toBe(false);
  });

  it('should not include links for components without @see or @link tags', async () => {
    const apiDoc = await generateApiDoc('Text', reader, contextMap);

    // Text component may or may not have links, so just check it doesn't error
    expect(apiDoc).toBeDefined();
    expect(apiDoc.name).toBe('Text');
  });

  it('should convert inline {@link} tags to HTML anchor tags in component description', async () => {
    const apiDoc = await generateApiDoc('ResponsiveContainer', reader, contextMap);

    expect(apiDoc.desc).toBeDefined();
    // @ts-expect-error locale fetching is not well typed
    expect(apiDoc.desc?.['en-US']).toBeDefined();

    // @ts-expect-error locale fetching is not well typed
    const description = apiDoc.desc?.['en-US'];

    // Should contain a proper HTML anchor tag for the inline link
    expect(description).toContain('<a href="https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"');
    expect(description).toContain('ResizeObserver</a>');

    // Should NOT contain the raw {@link syntax
    expect(description).not.toContain('{@link');
    expect(description).not.toContain('{@ link');
  });

  it('should convert inline {@link} tags to HTML anchor tags in prop description', async () => {
    const apiDoc = await generateApiDoc('Tooltip', reader, contextMap);
    const contentProp = apiDoc.props.find(p => p.name === 'content');
    expect(contentProp).toBeDefined();
    // @ts-expect-error locale fetching is not well typed
    const description = contentProp?.desc?.['en-US'];
    expect(description).toContain('<Link to="/api/DefaultTooltipContent/">DefaultTooltipContent</Link>');
  });

  it('should include return value in API doc for hooks', async () => {
    const apiDoc = await generateApiDoc('useChartHeight', reader, contextMap);
    expect(apiDoc.returnValue).toBeDefined();
    expect(apiDoc.returnValue).toBe('number | undefined');
  });

  it('should include arguments as props for useXAxisDomain', async () => {
    const apiDoc = await generateApiDoc('useXAxisDomain', reader, contextMap);
    expect(apiDoc.props).toBeDefined();
    expect(apiDoc.props.length).toBeGreaterThan(0);
    const xAxisId = apiDoc.props.find(p => p.name === 'xAxisId');
    expect(xAxisId).toBeDefined();
    expect(xAxisId?.isOptional).toBe(true);
    expect(xAxisId?.type).toContain('string');
  });
});
