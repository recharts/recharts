/**
 * Normalize text for fuzzy comparison by:
 * - Converting to lowercase
 * - Removing extra whitespace (including newlines)
 * - Trimming leading/trailing whitespace
 */
export function normalizeText(text: string | undefined): string {
  if (!text) {
    return '';
  }
  return text.toLowerCase().replace(/\s+/g, ' ').trim();
}
