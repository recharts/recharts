import { diffChars } from 'diff';
import { normalizeText } from './normalizeText';

/**
 * Uses the 'diff' library to produce a colored diff between two strings.
 * The diff highlights additions in green and deletions in red.
 *
 * Returns undefined if there are no differences.
 * @param expected
 * @param actual
 */
export function coloredDiff(expected: string | undefined, actual: string | undefined): string | undefined {
  if (expected === undefined && actual === undefined) {
    return undefined;
  }
  if (expected === undefined) {
    return `${actual}`;
  }
  if (actual === undefined) {
    return `${expected}`;
  }
  const normalizedExpected = normalizeText(expected);
  const normalizedActual = normalizeText(actual);
  if (normalizedExpected === normalizedActual) {
    return undefined;
  }
  const diff = diffChars(normalizedExpected, normalizedActual);
  const hasDifferences = diff.some(part => part.added || part.removed);
  if (!hasDifferences) {
    return undefined;
  }
  let result = '';
  for (const part of diff) {
    let colorStart = '';
    let colorEnd = '';
    if (part.added) {
      colorStart = '+++';
      colorEnd = '<<<';
    } else if (part.removed) {
      colorStart = '---';
      colorEnd = '<<<';
    }
    result += colorStart + part.value + colorEnd;
  }
  return result;
}
