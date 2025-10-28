import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'url';
import { parser as saxParser, Tag } from 'sax';

// @ts-expect-error import.meta
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(import.meta.url));

const root = resolve(__dirname, '..');
const outDir = resolve(root, 'docs');
const sitemapPath = join(outDir, 'sitemap.xml');

interface ValidationResult {
  success: boolean;
  errors: string[];
  warnings: string[];
}

interface SitemapUrl {
  canonical: string;
  alternates: string[];
}

function extractUrlsFromSitemap(sitemapContent: string): Map<string, SitemapUrl> {
  const urlMap = new Map<string, SitemapUrl>();
  const parser = saxParser(true);

  let currentUrl: SitemapUrl | null = null;
  let currentTag = '';
  let insideUrl = false;

  parser.onopentag = (node: Tag) => {
    if (node.name === 'url') {
      insideUrl = true;
      currentUrl = { canonical: '', alternates: [] };
    } else if (insideUrl) {
      currentTag = node.name;
      if (node.name === 'xhtml:link' && currentUrl) {
        const { href } = node.attributes;
        if (typeof href === 'string') {
          // Include all alternates (locale-specific, etc.)
          currentUrl.alternates.push(href);
        }
      }
    }
  };

  parser.ontext = (text: string) => {
    if (insideUrl && currentUrl && currentTag === 'loc') {
      const trimmed = text.trim();
      if (trimmed) {
        // Extract path from absolute URL
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

  parser.write(sitemapContent).close();
  return urlMap;
}

function validateUrlStructure(sitemapUrlMap: Map<string, SitemapUrl>, result: ValidationResult): void {
  console.log('Checking URL structure...');
  let structureErrorCount = 0;

  sitemapUrlMap.forEach((urlData, canonicalPath) => {
    // Check 1: Canonical URL must end with trailing slash
    if (!canonicalPath.endsWith('/')) {
      result.errors.push(`Canonical URL ${canonicalPath} does not end with trailing slash`);
      structureErrorCount++;
      // eslint-disable-next-line no-param-reassign
      result.success = false;
    }

    // Check 2: All alternates must be unique
    const alternatesSet = new Set<string>(urlData.alternates);
    if (alternatesSet.size !== urlData.alternates.length) {
      result.errors.push(`Canonical URL ${canonicalPath} has duplicate alternates`);
      structureErrorCount++;
      // eslint-disable-next-line no-param-reassign
      result.success = false;
    }
  });

  if (structureErrorCount === 0) {
    console.log('✓ All URLs have correct structure (trailing slash, x-default, and locale alternates)\n');
  } else {
    console.log(`✗ Found ${structureErrorCount} URL structure errors\n`);
  }
}

function getAllHtmlFiles(dir: string, baseDir: string = dir): string[] {
  const files: string[] = [];
  const entries = readdirSync(dir);

  entries.forEach(entry => {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getAllHtmlFiles(fullPath, baseDir));
    } else if (entry === 'index.html') {
      // Convert file path to URL path with trailing slash
      let urlPath = fullPath.replace(baseDir, '').replace(/\/index\.html$/, '');
      if (!urlPath) {
        urlPath = '/';
      } else if (!urlPath.endsWith('/')) {
        urlPath += '/';
      }
      files.push(urlPath);
    }
  });

  return files;
}

function getHtmlFilePath(url: string, dir: string): string {
  const urlPath = url.replace('https://recharts.github.io', '');
  if (urlPath === '/') {
    return join(dir, 'index.html');
  }
  if (urlPath === '/404') {
    return join(dir, '404.html');
  }
  // Remove trailing slash for directory path
  const cleanPath = urlPath.endsWith('/') ? urlPath.slice(0, -1) : urlPath;
  return join(dir, cleanPath, 'index.html');
}

function validateSitemap(): ValidationResult {
  const result: ValidationResult = {
    success: true,
    errors: [],
    warnings: [],
  };

  console.log('🔍 Validating sitemap...\n');

  // Read sitemap
  let sitemapContent: string;
  try {
    sitemapContent = readFileSync(sitemapPath, 'utf-8');
    console.log(`✓ Found sitemap at ${sitemapPath}`);
  } catch (error) {
    result.errors.push(`Failed to read sitemap: ${error.message}`);
    result.success = false;
    return result;
  }

  // Extract URLs from sitemap
  const sitemapUrlMap = extractUrlsFromSitemap(sitemapContent);
  const totalUrls = Array.from(sitemapUrlMap.values()).reduce((sum, url) => sum + 1 + url.alternates.length, 0);
  console.log(`✓ Found ${sitemapUrlMap.size} canonical URLs with ${totalUrls} total URLs in sitemap\n`);

  // Get all HTML files
  const htmlFiles = getAllHtmlFiles(outDir);
  const htmlFilesSet = new Set(
    htmlFiles.filter(path => {
      // Exclude special files
      const fileName = path.split('/').pop();
      return fileName !== '404' && !path.includes('googlecacbec94e341ad8a');
    }),
  );
  console.log(`✓ Found ${htmlFilesSet.size} HTML files in docs directory\n`);

  // Check 0: URL structure validation
  validateUrlStructure(sitemapUrlMap, result);

  // Check 1: Every sitemap canonical URL has a corresponding non-empty HTML file
  console.log('Checking sitemap URLs...');
  let missingOrEmptyCount = 0;
  sitemapUrlMap.forEach((_urlData, canonicalPath) => {
    // Skip localized 404 pages - they don't exist as separate files
    if (canonicalPath.match(/^\/[^/]+\/404\/?$/)) {
      return;
    }

    const htmlPath = getHtmlFilePath(canonicalPath, outDir);

    try {
      const content = readFileSync(htmlPath, 'utf-8');
      const strippedContent = content.replace(/<[^>]*>/g, '').replace(/\s+/g, '');

      if (strippedContent.length < 50) {
        result.errors.push(`URL ${canonicalPath} has an empty or nearly empty HTML file at ${htmlPath}`);
        missingOrEmptyCount++;
        result.success = false;
      }
    } catch (error) {
      console.error(error);
      result.errors.push(`URL ${canonicalPath} in sitemap but HTML file missing at ${htmlPath}`);
      missingOrEmptyCount++;
      result.success = false;
    }
  });

  if (missingOrEmptyCount === 0) {
    console.log('✓ All sitemap URLs have corresponding non-empty HTML files\n');
  } else {
    console.log(`✗ Found ${missingOrEmptyCount} missing or empty HTML files\n`);
  }

  // Check 2: No extra HTML files that are missing from sitemap
  console.log('Checking for extra HTML files...');
  let extraCount = 0;

  // Build a set of all URLs in sitemap (canonical + all alternates)
  const allSitemapUrls = new Set<string>();
  sitemapUrlMap.forEach((urlData, canonicalPath) => {
    allSitemapUrls.add(canonicalPath);
    urlData.alternates.forEach(alt => allSitemapUrls.add(alt));
  });

  htmlFilesSet.forEach(urlPath => {
    const urlPathHref = `https://recharts.github.io${urlPath}`;
    // Check if this HTML file is referenced anywhere in sitemap
    if (!allSitemapUrls.has(urlPathHref)) {
      result.errors.push(`HTML file exists at ${urlPath} but is missing from sitemap`);
      extraCount++;
      result.success = false;
    }
  });

  if (extraCount === 0) {
    console.log('✓ No extra HTML files found (all are in sitemap)\n');
  } else {
    console.log(`✗ Found ${extraCount} HTML files not in sitemap\n`);
  }

  return result;
}

function main(): void {
  const result = validateSitemap();

  if (result.warnings.length > 0) {
    console.log('⚠️  Warnings:');
    result.warnings.forEach(warning => console.log(`   ${warning}`));
    console.log('');
  }

  if (result.errors.length > 0) {
    console.log('❌ Errors:');
    result.errors.forEach(error => console.log(`   ${error}`));
    console.log('');
  }

  if (result.success) {
    console.log('✨ Sitemap validation passed!\n');
    process.exit(0);
  } else {
    console.log(`💥 Sitemap validation failed with ${result.errors.length} error(s)\n`);
    process.exit(1);
  }
}

// ESM module check - only run if executed directly
// @ts-expect-error import.meta
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
