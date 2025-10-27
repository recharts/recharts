import { readFileSync, writeFileSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
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

function postprocessSitemap() {
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
        const href = node.attributes.href as string;
        const hreflang = node.attributes.hreflang as string;
        if (href && hreflang) {
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

  let addedCount = 0;

  urlEntries.forEach(entry => {
    const { loc } = entry;

    // Determine canonical URL (with trailing slash) and alternate (without)
    const isRootUrl = loc.endsWith('recharts.github.io/');
    const canonicalUrl = isRootUrl || loc.endsWith('/') ? loc : `${loc}/`;
    const shouldAddNonTrailingSlashAlternate = !isRootUrl;

    output += '<url>';
    output += `<loc>${canonicalUrl}</loc>`;
    if (entry.lastmod) output += `<lastmod>${entry.lastmod}</lastmod>`;
    output += `<changefreq>${entry.changefreq}</changefreq>`;
    output += `<priority>${entry.priority}</priority>`;

    // Add non-trailing-slash alternate (x-default) for all non-root URLs
    if (shouldAddNonTrailingSlashAlternate) {
      const noTrailingSlash = canonicalUrl.slice(0, -1);
      output += `<xhtml:link rel="alternate" hreflang="x-default" href="${noTrailingSlash}"/>`;
      addedCount++;
    }

    // Re-add existing alternates (locale links) - skip x-default as we add it ourselves
    // Also ensure locale alternates have trailing slashes to match HTML file structure
    entry.alternates.forEach(alt => {
      if (alt.hreflang !== 'x-default') {
        // Ensure locale URLs also have trailing slashes
        let altHref = alt.href;
        if (!altHref.endsWith('/') && !altHref.endsWith('recharts.github.io')) {
          altHref += '/';
        }
        output += `<xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${altHref}"/>`;
      }
    });

    output += '</url>';
  });

  output += '</urlset>';

  writeFileSync(sitemapPath, output);
  console.log(`✓ Added ${addedCount} non-trailing-slash alternates to sitemap`);
  console.log('✨ Sitemap postprocessing complete!\n');
}

postprocessSitemap();
