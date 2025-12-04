import { normalizeText } from './normalizeText';

/**
 * Calculate similarity score between two strings using Levenshtein distance.
 * Returns a score between 0 (completely different) and 1 (identical).
 * @param str1
 * @param str2
 */
export function calculateSimilarityScore(str1: string | undefined, str2: string | undefined): number {
  if (str1 === undefined && str2 === undefined) {
    return 1;
  }
  if (str1 === undefined || str2 === undefined) {
    return 0;
  }

  const normalized1 = normalizeText(str1);
  const normalized2 = normalizeText(str2);

  if (normalized1 === normalized2) {
    return 1;
  }

  // Levenshtein distance calculation
  const matrix: number[][] = [];
  const len1 = normalized1.length;
  const len2 = normalized2.length;

  if (len1 === 0) return len2 === 0 ? 1 : 0;
  if (len2 === 0) return 0;

  // Initialize matrix
  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  // Fill matrix
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = normalized1[i - 1] === normalized2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + cost, // substitution
      );
    }
  }

  const distance = matrix[len1][len2];
  const maxLength = Math.max(len1, len2);
  return 1 - distance / maxLength;
}
