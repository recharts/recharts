import { describe, it, expect, beforeEach, vi } from 'vitest';
import { parser as saxParser } from 'sax';

// Mock the file system
vi.mock('node:fs', () => ({
  readFileSync: vi.fn(),
  readdirSync: vi.fn(),
  statSync: vi.fn(),
}));

describe('validate-sitemap URL count validation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should calculate total URLs correctly (canonical + alternates)', () => {
    // Create a mock sitemap with known number of URLs
    const mockSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://recharts.github.io/</loc>
    <xhtml:link rel="alternate" hreflang="en-US" href="https://recharts.github.io/en-US/"/>
    <xhtml:link rel="alternate" hreflang="zh-CN" href="https://recharts.github.io/zh-CN/"/>
  </url>
  <url>
    <loc>https://recharts.github.io/guide/</loc>
    <xhtml:link rel="alternate" hreflang="en-US" href="https://recharts.github.io/en-US/guide/"/>
    <xhtml:link rel="alternate" hreflang="zh-CN" href="https://recharts.github.io/zh-CN/guide/"/>
  </url>
</urlset>`;

    // Parse the sitemap and count URLs
    const urlMap = new Map<string, { canonical: string; alternates: string[] }>();
    const parser = saxParser(true);

    let currentUrl: { canonical: string; alternates: string[] } | null = null;
    let currentTag = '';
    let insideUrl = false;

    parser.onopentag = (node: any) => {
      if (node.name === 'url') {
        insideUrl = true;
        currentUrl = { canonical: '', alternates: [] };
      } else if (insideUrl) {
        currentTag = node.name;
        if (node.name === 'xhtml:link' && currentUrl) {
          const { href } = node.attributes;
          if (typeof href === 'string') {
            currentUrl.alternates.push(href);
          }
        }
      }
    };

    parser.ontext = (text: string) => {
      if (insideUrl && currentUrl && currentTag === 'loc') {
        const trimmed = text.trim();
        if (trimmed) {
          currentUrl.canonical = trimmed;
        }
      }
    };

    parser.onclosetag = (tagName: string) => {
      if (tagName === 'url' && currentUrl && currentUrl.canonical) {
        urlMap.set(currentUrl.canonical, currentUrl);
        currentUrl = null;
        insideUrl = false;
      }
      if (tagName !== 'url') {
        currentTag = '';
      }
    };

    parser.write(mockSitemap).close();

    // Calculate total URLs (canonical + alternates)
    const totalUrls = Array.from(urlMap.values()).reduce((sum, url) => sum + 1 + url.alternates.length, 0);

    // Expected: 2 canonical URLs + (2 alternates * 2 URLs) = 6 total URLs
    expect(urlMap.size).toBe(2);
    expect(totalUrls).toBe(6);
  });

  it('should accept sitemap with exactly 1000 total URLs', () => {
    // Create a sitemap with exactly 1000 URLs
    let mockSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Add 1000 URLs (no alternates)
    for (let i = 0; i < 1000; i++) {
      mockSitemap += `
  <url>
    <loc>https://recharts.github.io/page-${i}/</loc>
  </url>`;
    }

    mockSitemap += '\n</urlset>';

    const urlMap = new Map<string, { canonical: string; alternates: string[] }>();
    const parser = saxParser(true);

    let currentUrl: { canonical: string; alternates: string[] } | null = null;
    let currentTag = '';
    let insideUrl = false;

    parser.onopentag = (node: any) => {
      if (node.name === 'url') {
        insideUrl = true;
        currentUrl = { canonical: '', alternates: [] };
      } else if (insideUrl) {
        currentTag = node.name;
      }
    };

    parser.ontext = (text: string) => {
      if (insideUrl && currentUrl && currentTag === 'loc') {
        const trimmed = text.trim();
        if (trimmed) {
          currentUrl.canonical = trimmed;
        }
      }
    };

    parser.onclosetag = (tagName: string) => {
      if (tagName === 'url' && currentUrl && currentUrl.canonical) {
        urlMap.set(currentUrl.canonical, currentUrl);
        currentUrl = null;
        insideUrl = false;
      }
      if (tagName !== 'url') {
        currentTag = '';
      }
    };

    parser.write(mockSitemap).close();

    const totalUrls = Array.from(urlMap.values()).reduce((sum, url) => sum + 1 + url.alternates.length, 0);

    expect(totalUrls).toBe(1000);

    // Validation should pass
    const MAX_URLS = 1000;
    expect(totalUrls).toBeLessThanOrEqual(MAX_URLS);
  });

  it('should reject sitemap with more than 1000 total URLs', () => {
    // Create a sitemap with 1001 URLs
    let mockSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Add 1001 URLs (no alternates)
    for (let i = 0; i < 1001; i++) {
      mockSitemap += `
  <url>
    <loc>https://recharts.github.io/page-${i}/</loc>
  </url>`;
    }

    mockSitemap += '\n</urlset>';

    const urlMap = new Map<string, { canonical: string; alternates: string[] }>();
    const parser = saxParser(true);

    let currentUrl: { canonical: string; alternates: string[] } | null = null;
    let currentTag = '';
    let insideUrl = false;

    parser.onopentag = (node: any) => {
      if (node.name === 'url') {
        insideUrl = true;
        currentUrl = { canonical: '', alternates: [] };
      } else if (insideUrl) {
        currentTag = node.name;
      }
    };

    parser.ontext = (text: string) => {
      if (insideUrl && currentUrl && currentTag === 'loc') {
        const trimmed = text.trim();
        if (trimmed) {
          currentUrl.canonical = trimmed;
        }
      }
    };

    parser.onclosetag = (tagName: string) => {
      if (tagName === 'url' && currentUrl && currentUrl.canonical) {
        urlMap.set(currentUrl.canonical, currentUrl);
        currentUrl = null;
        insideUrl = false;
      }
      if (tagName !== 'url') {
        currentTag = '';
      }
    };

    parser.write(mockSitemap).close();

    const totalUrls = Array.from(urlMap.values()).reduce((sum, url) => sum + 1 + url.alternates.length, 0);

    expect(totalUrls).toBe(1001);

    // Validation should fail
    const MAX_URLS = 1000;
    expect(totalUrls).toBeGreaterThan(MAX_URLS);
  });

  it('should count alternates in total URL count', () => {
    // Create a sitemap with 334 canonical URLs each with 2 alternates
    // Total: 334 * 3 = 1002 URLs (should fail)
    let mockSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

    for (let i = 0; i < 334; i++) {
      mockSitemap += `
  <url>
    <loc>https://recharts.github.io/page-${i}/</loc>
    <xhtml:link rel="alternate" hreflang="en-US" href="https://recharts.github.io/en-US/page-${i}/"/>
    <xhtml:link rel="alternate" hreflang="zh-CN" href="https://recharts.github.io/zh-CN/page-${i}/"/>
  </url>`;
    }

    mockSitemap += '\n</urlset>';

    const urlMap = new Map<string, { canonical: string; alternates: string[] }>();
    const parser = saxParser(true);

    let currentUrl: { canonical: string; alternates: string[] } | null = null;
    let currentTag = '';
    let insideUrl = false;

    parser.onopentag = (node: any) => {
      if (node.name === 'url') {
        insideUrl = true;
        currentUrl = { canonical: '', alternates: [] };
      } else if (insideUrl) {
        currentTag = node.name;
        if (node.name === 'xhtml:link' && currentUrl) {
          const { href } = node.attributes;
          if (typeof href === 'string') {
            currentUrl.alternates.push(href);
          }
        }
      }
    };

    parser.ontext = (text: string) => {
      if (insideUrl && currentUrl && currentTag === 'loc') {
        const trimmed = text.trim();
        if (trimmed) {
          currentUrl.canonical = trimmed;
        }
      }
    };

    parser.onclosetag = (tagName: string) => {
      if (tagName === 'url' && currentUrl && currentUrl.canonical) {
        urlMap.set(currentUrl.canonical, currentUrl);
        currentUrl = null;
        insideUrl = false;
      }
      if (tagName !== 'url') {
        currentTag = '';
      }
    };

    parser.write(mockSitemap).close();

    const totalUrls = Array.from(urlMap.values()).reduce((sum, url) => sum + 1 + url.alternates.length, 0);

    // Should be 334 canonical + 668 alternates = 1002
    expect(urlMap.size).toBe(334);
    expect(totalUrls).toBe(1002);

    // Validation should fail
    const MAX_URLS = 1000;
    expect(totalUrls).toBeGreaterThan(MAX_URLS);
  });
});
