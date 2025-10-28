import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'url';
import { parser as saxParser, Tag } from 'sax';

// @ts-expect-error import.meta
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(import.meta.url));

const root = resolve(__dirname, '..');
const outDir = resolve(root, 'docs');
const sitemapPath = join(outDir, 'sitemap.xml');

interface AlternateLink {
  href: string;
  hreflang: string;
}

interface UrlEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
  alternates: AlternateLink[];
}

function makeCanonicalUrl(url: string): string {
  if (url.endsWith('/')) {
    return url;
  }
  return `${url}/`;
}

function makeAlternateUrl(url: string): string {
  if (url.endsWith('/')) {
    return url.slice(0, -1);
  }
  return url;
}

function postprocessSitemap(): void {
  console.log('\n🔧 Postprocessing sitemap...\n');

  const sitemapContent = readFileSync(sitemapPath, 'utf-8');
  const parser = saxParser(true);
  const urlEntries: UrlEntry[] = [];
  let currentUrl: UrlEntry | null = null;
  let currentTag = '';
  let insideUrl = false;

  parser.onopentag = (node: Tag) => {
    if (node.name === 'url') {
      insideUrl = true;
      currentUrl = {
        loc: '',
        lastmod: '',
        changefreq: 'daily',
        priority: '1.0',
        alternates: [],
      };
    } else if (insideUrl && currentUrl) {
      currentTag = node.name;
      if (node.name === 'xhtml:link') {
        const { href, hreflang } = node.attributes;
        if (typeof href === 'string' && typeof hreflang === 'string') {
          currentUrl.alternates.push({ href, hreflang });
        }
      }
    }
  };

  parser.ontext = (text: string) => {
    if (insideUrl && currentUrl) {
      const trimmed = text.trim();
      if (trimmed) {
        if (currentTag === 'loc') {
          currentUrl.loc = trimmed;
        } else if (currentTag === 'lastmod') {
          currentUrl.lastmod = trimmed;
        } else if (currentTag === 'changefreq') {
          currentUrl.changefreq = trimmed;
        } else if (currentTag === 'priority') {
          currentUrl.priority = trimmed;
        }
      }
    }
  };

  parser.onclosetag = (tagName: string) => {
    if (tagName === 'url' && currentUrl) {
      urlEntries.push(currentUrl);
      currentUrl = null;
      insideUrl = false;
    }
    if (tagName !== 'url') {
      currentTag = '';
    }
  };

  parser.write(sitemapContent).close();

  // Now rebuild the sitemap with alternates
  let output = '<?xml version="1.0" encoding="UTF-8"?>';
  output += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"';
  output += ' xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"';
  output += ' xmlns:xhtml="http://www.w3.org/1999/xhtml"';
  output += ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"';
  output += ' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">';

  let processedCount = 0;

  urlEntries.forEach(entry => {
    const { loc } = entry;

    // Security: Validate URL starts with expected domain
    if (!loc.startsWith('https://recharts.github.io')) {
      console.warn(`⚠️  Skipping invalid URL: ${loc}`);
      return;
    }

    output += '<url>';
    // Determine canonical URL (with trailing slash) and set that as the default
    output += `<loc>${makeCanonicalUrl(loc)}</loc>`;
    // add x-default for the canonical variant
    output += `<xhtml:link rel="alternate" hreflang="x-default" href="${makeCanonicalUrl(loc)}"/>`;
    // Add xhtml:link for canonical URL without trailing slash
    output += `<xhtml:link rel="alternate" href="${makeAlternateUrl(loc)}"/>`;

    // Add locale alternates with and without trailing slashes to match HTML file structure
    entry.alternates.forEach(alt => {
      // Security: Validate alternate URL
      if (!alt.href.startsWith('https://recharts.github.io')) {
        return;
      }

      output += `<xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${makeCanonicalUrl(alt.href)}"/>`;
      output += `<xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${makeAlternateUrl(alt.href)}"/>`;
    });

    // other metadata
    if (entry.lastmod) {
      output += `<lastmod>${entry.lastmod}</lastmod>`;
    }
    output += `<changefreq>${entry.changefreq}</changefreq>`;
    output += `<priority>${entry.priority}</priority>`;

    output += '</url>';
    processedCount++;
  });

  output += '</urlset>';

  writeFileSync(sitemapPath, output);
  console.log(`✓ Processed ${processedCount} URLs with locale alternates`);
  console.log('✨ Sitemap postprocessing complete!\n');
}

// ESM module check - only run if executed directly
// @ts-expect-error import.meta
if (import.meta.url === `file://${process.argv[1]}`) {
  postprocessSitemap();
}
