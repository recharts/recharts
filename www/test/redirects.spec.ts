import { describe, it, expect } from 'vitest';
import { redirects } from '../src/routes/redirects';

describe('redirects', () => {
  it('should have complete redirect mappings', () => {
    expect(redirects).toMatchInlineSnapshot(`
      {
        "/api/SankeyChart/": "/api/Sankey/",
        "/en-US/api/SankeyChart/": "/en-US/api/Sankey/",
        "/zh-CN/api/SankeyChart/": "/zh-CN/api/Sankey/",
      }
    `);
  });
});
