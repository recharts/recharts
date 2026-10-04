function isRecord(value: unknown): value is Record<string, unknown> {
  return value != null && typeof value === 'object' && !Array.isArray(value);
}

const hexColor = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

function combineStrings(light: string, dark: string, path: string): string {
  const lightTokens = light.split(' ');
  const darkTokens = dark.split(' ');
  if (lightTokens.length !== darkTokens.length) {
    throw new Error(`Cannot combine "${light}" and "${dark}" at ${path}: they have a different number of tokens`);
  }
  return lightTokens
    .map((lightToken, index) => {
      const darkToken = darkTokens[index];
      if (lightToken === darkToken) {
        return lightToken;
      }
      if (darkToken == null || !hexColor.test(lightToken) || !hexColor.test(darkToken)) {
        throw new Error(`Cannot combine "${light}" and "${dark}" at ${path}: only hex colors may differ`);
      }
      return `light-dark(${lightToken}, ${darkToken})`;
    })
    .join(' ');
}

function combine(light: unknown, dark: unknown, path: string): unknown {
  if (light === dark) {
    return light;
  }
  if (typeof light === 'string' && typeof dark === 'string') {
    return combineStrings(light, dark, path);
  }
  if (Array.isArray(light) && Array.isArray(dark)) {
    if (light.length !== dark.length) {
      throw new Error(`Cannot combine arrays of different length at ${path}`);
    }
    return light.map((item, index) => combine(item, dark[index], `${path}[${index}]`));
  }
  if (isRecord(light) && isRecord(dark)) {
    const lightKeys = Object.keys(light);
    const darkKeys = Object.keys(dark);
    const missingKey = lightKeys.find(key => !(key in dark)) ?? darkKeys.find(key => !(key in light));
    if (missingKey !== undefined) {
      throw new Error(`Cannot combine objects at ${path}: "${missingKey}" is defined in only one of them`);
    }
    return Object.fromEntries(lightKeys.map(key => [key, combine(light[key], dark[key], `${path}.${key}`)]));
  }
  throw new Error(`Cannot combine ${String(light)} and ${String(dark)} at ${path}: only hex colors may differ`);
}

/**
 * Combines a light and a dark variant of the same structure into one,
 * by wrapping every color that differs in CSS `light-dark()`.
 *
 * Both inputs must have the same shape and differ only in hex colors.
 * Colors may appear on their own (`'#fff'`) or as a token of a space-separated value (`'1px solid #fff'`).
 * Any other difference throws, because `light-dark()` only accepts colors.
 *
 * @param light the variant for `color-scheme: light`
 * @param dark the variant for `color-scheme: dark`
 * @returns a value that follows the CSS `color-scheme` of the element it is applied to
 */
export function combineLightDark<T>(light: T, dark: T): T;
export function combineLightDark(light: unknown, dark: unknown): unknown {
  return combine(light, dark, '$');
}
