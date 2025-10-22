import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'url';

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

function extractUrlsFromSitemap(sitemapContent: string): Set<string> {
  const urls = new Set<string>();

  // Extract primary URLs from <loc> tags
  const locPattern = /<loc>(.*?)<\/loc>/g;
  let match;

  function add(url: string) {
    // sitemap has absolute URLs so first we remove that part
    const path = url.replace('https://recharts.github.io', '');
    // now we handle trivial cases
    if (path == null || path === '/') {
      return urls.add('/');
    }
    // some routes in sitemap end with a slash and some don't so let's normalize it
    return urls.add(path.replace(/\/$/, ''));
  }

  // eslint-disable-next-line no-cond-assign
  while ((match = locPattern.exec(sitemapContent)) !== null) {
    const url = match[1];
    add(url);
  }

  // Extract alternate URLs from xhtml:link tags
  const altPattern = /<xhtml:link[^>]+href="([^"]+)"/g;
  // eslint-disable-next-line no-cond-assign
  while ((match = altPattern.exec(sitemapContent)) !== null) {
    const url = match[1];
    add(url);
  }

  return urls;
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
      // Convert file path to URL path
      let urlPath = fullPath.replace(baseDir, '').replace(/\/index\.html$/, '');
      if (!urlPath) {
        urlPath = '/';
      }
      files.push(urlPath);
    }
  });

  return files;
}

function getHtmlFilePath(urlPath: string, dir: string): string {
  if (urlPath === '/') {
    return join(dir, 'index.html');
  }
  if (urlPath === '/404') {
    return join(dir, '404.html');
  }
  return join(dir, urlPath, 'index.html');
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
  const sitemapUrls = extractUrlsFromSitemap(sitemapContent);
  console.log(`✓ Found ${sitemapUrls.size} URLs in sitemap\n`);

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

  // Check 1: Every sitemap URL has a corresponding non-empty HTML file
  console.log('Checking sitemap URLs...');
  let missingOrEmptyCount = 0;
  sitemapUrls.forEach(urlPath => {
    // Skip localized 404 pages - they don't exist as separate files
    if (urlPath.match(/^\/[^/]+\/404$/)) {
      return;
    }

    const htmlPath = getHtmlFilePath(urlPath, outDir);

    try {
      const content = readFileSync(htmlPath, 'utf-8');
      const strippedContent = content.replace(/<[^>]*>/g, '').replace(/\s+/g, '');

      if (strippedContent.length < 50) {
        result.errors.push(`URL ${urlPath} has an empty or nearly empty HTML file at ${htmlPath}`);
        missingOrEmptyCount++;
        result.success = false;
      }
    } catch (error) {
      console.error(error);
      result.errors.push(`URL ${urlPath} in sitemap but HTML file missing at ${htmlPath}`);
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
  htmlFilesSet.forEach(urlPath => {
    if (!sitemapUrls.has(urlPath)) {
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

function main() {
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

main();
