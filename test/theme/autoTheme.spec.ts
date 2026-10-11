import { describe, expect, it } from 'vitest';
import { autoTheme, darkPalette, darkTheme, lightPalette, lightTheme } from '../../src';
import { combineLightDark } from '../helper/combineLightDark';

/**
 * Collects every leaf value of a nested structure, keyed by its path.
 * @param value object, array or primitive
 * @param path path of `value`
 * @returns map from path to leaf value
 */
function leaves(value: unknown, path = '$'): Map<string, unknown> {
  const result = new Map<string, unknown>();
  if (Array.isArray(value)) {
    value.forEach((item, index) => leaves(item, `${path}[${index}]`).forEach((v, k) => result.set(k, v)));
  } else if (value != null && typeof value === 'object') {
    Object.entries(value).forEach(([key, item]) => leaves(item, `${path}.${key}`).forEach((v, k) => result.set(k, v)));
  } else {
    result.set(path, value);
  }
  return result;
}

describe('combineLightDark', () => {
  it('should keep values that are the same in both variants', () => {
    expect(combineLightDark({ a: 1, b: 'none', c: [2] }, { a: 1, b: 'none', c: [2] })).toEqual({
      a: 1,
      b: 'none',
      c: [2],
    });
  });

  it('should wrap colors that differ in light-dark()', () => {
    expect(combineLightDark({ fill: '#fff' }, { fill: '#18181b' })).toEqual({ fill: 'light-dark(#fff, #18181b)' });
  });

  it('should wrap only the color token of a space-separated value', () => {
    expect(combineLightDark({ border: '1px solid #a1a1aa' }, { border: '1px solid #71717a' })).toEqual({
      border: '1px solid light-dark(#a1a1aa, #71717a)',
    });
  });

  it('should combine arrays entry by entry', () => {
    expect(combineLightDark(['#000', '#111'], ['#fff', '#eee'])).toEqual([
      'light-dark(#000, #fff)',
      'light-dark(#111, #eee)',
    ]);
  });

  it('should throw when numbers differ', () => {
    expect(() => combineLightDark({ reference: { fillOpacity: 0.25 } }, { reference: { fillOpacity: 0.3 } })).toThrow(
      '$.reference.fillOpacity',
    );
  });

  it('should throw when strings that are not hex colors differ', () => {
    expect(() => combineLightDark({ strokeDasharray: '3 3' }, { strokeDasharray: '4 4' })).toThrow(
      'only hex colors may differ',
    );
    expect(() => combineLightDark({ fill: 'red' }, { fill: 'blue' })).toThrow('only hex colors may differ');
  });

  it('should throw when a string has a different number of tokens', () => {
    expect(() => combineLightDark({ border: '1px solid #fff' }, { border: '#000' })).toThrow('different number');
  });

  it('should throw when arrays have different length', () => {
    expect(() => combineLightDark({ items: ['#000'] }, { items: ['#000', '#fff'] })).toThrow('$.items');
  });

  it('should throw when a key is missing in one of the variants', () => {
    expect(() => combineLightDark<Record<string, string>>({ fill: '#000' }, { stroke: '#000' })).toThrow('"fill"');
  });
});

describe('autoTheme', () => {
  it('should equal lightTheme and darkTheme combined with light-dark()', () => {
    expect(autoTheme).toEqual(combineLightDark(lightTheme, darkTheme));
  });

  it('should have the same structure as lightTheme and darkTheme', () => {
    const autoLeaves = leaves(autoTheme);
    expect([...autoLeaves.keys()]).toEqual([...leaves(lightTheme).keys()]);
    expect([...autoLeaves.keys()]).toEqual([...leaves(darkTheme).keys()]);
  });

  it('should pair every value of lightTheme with the value of darkTheme at the same path', () => {
    const lightLeaves = leaves(lightTheme);
    const darkLeaves = leaves(darkTheme);
    leaves(autoTheme).forEach((autoValue, path) => {
      const lightValue = lightLeaves.get(path);
      const darkValue = darkLeaves.get(path);
      if (lightValue === darkValue) {
        expect(autoValue, path).toBe(lightValue);
      } else {
        expect(autoValue, path).toEqual(expect.stringContaining('light-dark('));
        expect(String(autoValue).replace(/light-dark\((#\w+), #\w+\)/g, '$1'), path).toBe(lightValue);
        expect(String(autoValue).replace(/light-dark\(#\w+, (#\w+)\)/g, '$1'), path).toBe(darkValue);
      }
    });
  });

  it('should pair the light and dark palettes entry by entry', () => {
    expect(autoTheme.graphicalItems).toHaveLength(lightPalette.length);
    autoTheme.graphicalItems.forEach((item, index) => {
      const color = `light-dark(${lightPalette[index]}, ${darkPalette[index]})`;
      expect(item.fill).toBe(color);
      expect(item.stroke).toBe(color);
      expect(item.active?.stroke).toBe(color);
    });
  });

  it('should use light-dark() for the page background and text color', () => {
    expect(autoTheme.pageBackground).toBe('light-dark(#fff, #18181b)');
    expect(autoTheme.typography?.color).toBe('light-dark(#18181b, #f4f4f5)');
    expect(autoTheme.tooltip?.contentStyle?.border).toBe('1px solid light-dark(#a1a1aa, #71717a)');
  });
});
