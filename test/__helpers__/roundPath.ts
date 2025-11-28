/**
 * Round a number to 6 decimal places
 */
export function round6(value: number): number {
  return Math.round(value * 1000000) / 1000000;
}

/**
 * Round numbers in an SVG path string
 */
export function roundPath(path: string): string {
  return path.replace(/(-?\d+\.\d+)/g, match => {
    const num = parseFloat(match);
    return round6(num).toString();
  });
}

/**
 * Round numbers in point objects like {x, y} or {cx, cy}
 */
export function roundPoints(point: { [key: string]: any }): { [key: string]: any } {
  const output: { [key: string]: any } = {};
  for (const key in point) {
    if (Object.prototype.hasOwnProperty.call(point, key)) {
      const value = point[key];
      if (typeof value === 'number') {
        output[key] = round6(value);
      } else if (typeof value === 'string') {
        // Try to parse as number, if successful round it
        const num = parseFloat(value);
        if (!Number.isNaN(num)) {
          output[key] = round6(num).toString();
        } else {
          output[key] = value;
        }
      } else {
        output[key] = value;
      }
    }
  }
  return output;
}

/**
 * Recursively round numbers in nested structures
 */
export const roundNumbers = (value: any): any => {
  if (typeof value === 'number') return round6(value);
  if (typeof value === 'string') {
    // Try to parse as number, if successful round it
    const num = parseFloat(value);
    if (!Number.isNaN(num)) {
      return round6(num).toString();
    }
    return value;
  }
  if (Array.isArray(value)) return value.map(roundNumbers);
  if (value && typeof value === 'object') {
    const output: any = {};
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        output[key] = roundNumbers(value[key]);
      }
    }
    return output;
  }
  return value;
};

/**
 * Round SVG path strings or point objects in arrays
 */
export const roundPointsOrPaths = (items: any): any => {
  if (!items) return items;
  return items.map((item: any) => {
    if (typeof item === 'string') return roundPath(item);
    if (Array.isArray(item)) return roundPointsOrPaths(item);
    if (typeof item === 'object') return roundPoints(item);
    return item;
  });
};
