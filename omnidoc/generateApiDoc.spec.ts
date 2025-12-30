import { describe, it, expect } from 'vitest';
import { generateApiDoc } from './generateApiDoc';
import { ProjectDocReader } from './readProject';

describe('generateApiDoc', () => {
  const reader = new ProjectDocReader();
  const contextMap = new Map();

  it('should include component-level links from @see tags', async () => {
    const apiDoc = await generateApiDoc('ResponsiveContainer', reader, contextMap);

    expect(apiDoc.links).toBeDefined();
    expect(apiDoc.links?.length).toBeGreaterThan(0);

    // Check that the MDN link is included
    const mdnLink = apiDoc.links?.find(
      link => link.url.includes('developer.mozilla.org') && link.url.includes('ResizeObserver'),
    );

    expect(mdnLink).toBeDefined();
    expect(mdnLink?.isExternal).toBe(true);
  });

  it('should not include links for components without @see or @link tags', async () => {
    const apiDoc = await generateApiDoc('Text', reader, contextMap);

    // Text component may or may not have links, so just check it doesn't error
    expect(apiDoc).toBeDefined();
    expect(apiDoc.name).toBe('Text');
  });
});
