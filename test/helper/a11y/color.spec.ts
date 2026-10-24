import type { ColorVisionDeficiency } from './color';
import {
  blendOver,
  ciede2000,
  contrastRatio,
  formatHex,
  parseColor,
  perceptualDistance,
  relativeLuminance,
  simulateColorVisionDeficiency,
  toLab,
} from './color';

describe('parseColor', () => {
  test.each([
    ['#fff', { r: 255, g: 255, b: 255 }],
    ['#000', { r: 0, g: 0, b: 0 }],
    ['#8884d8', { r: 136, g: 132, b: 216 }],
    ['#18181B', { r: 24, g: 24, b: 27 }],
    ['rgb(82, 82, 91)', { r: 82, g: 82, b: 91 }],
    ['rgba(82, 82, 91, 0.5)', { r: 82, g: 82, b: 91 }],
  ])('parses %s', (css, expected) => {
    expect(parseColor(css)).toEqual(expected);
  });

  test('throws on syntax it does not support', () => {
    expect(() => parseColor('rebeccapurple')).toThrow('Unsupported color syntax: "rebeccapurple"');
  });
});

describe('formatHex', () => {
  test('round trips a hex colour', () => {
    expect(formatHex(parseColor('#8884d8'))).toBe('#8884d8');
  });

  test('rounds and clamps out of range channels', () => {
    expect(formatHex({ r: -5, g: 127.6, b: 300 })).toBe('#0080ff');
  });
});

describe('relativeLuminance', () => {
  test('is 1 for white and 0 for black', () => {
    expect(relativeLuminance(parseColor('#fff'))).toBeCloseTo(1, 10);
    expect(relativeLuminance(parseColor('#000'))).toBeCloseTo(0, 10);
  });
});

describe('contrastRatio', () => {
  test('is 21 for black on white', () => {
    expect(contrastRatio(parseColor('#000'), parseColor('#fff'))).toBeCloseTo(21, 5);
  });

  test('is 1 for a colour against itself', () => {
    expect(contrastRatio(parseColor('#8884d8'), parseColor('#8884d8'))).toBeCloseTo(1, 10);
  });

  test('is symmetric', () => {
    const a = parseColor('#52525b');
    const b = parseColor('#fff');
    expect(contrastRatio(a, b)).toBeCloseTo(contrastRatio(b, a), 10);
  });

  /*
   * A spot check against a value that is easy to verify by hand in any of the
   * well known online contrast checkers, so that a refactor of the luminance
   * maths cannot quietly drift.
   */
  test('matches the published ratio for the default axis colour on white', () => {
    expect(contrastRatio(parseColor('#52525b'), parseColor('#fff'))).toBeCloseTo(7.73, 2);
  });
});

describe('blendOver', () => {
  test('a fully opaque foreground hides the background', () => {
    expect(blendOver(parseColor('#8884d8'), 1, parseColor('#fff'))).toEqual(parseColor('#8884d8'));
  });

  test('a fully transparent foreground leaves the background', () => {
    expect(blendOver(parseColor('#8884d8'), 0, parseColor('#fff'))).toEqual(parseColor('#fff'));
  });

  test('blends halfway at 50% opacity', () => {
    expect(formatHex(blendOver(parseColor('#000'), 0.5, parseColor('#fff')))).toBe('#808080');
  });
});

/*
 * The reference data published alongside the CIEDE2000 formula by Sharma, Wu
 * and Dalal. These 34 pairs are specifically chosen to exercise the parts of
 * the formula that implementations most often get wrong, above all the
 * discontinuity in the mean hue angle. An implementation that passes all of
 * them is almost certainly correct.
 *
 * @see {@link https://hajim.rochester.edu/ece/sites/gsharma/ciede2000/}
 */
const CIEDE2000_REFERENCE_DATA: ReadonlyArray<readonly [number, number, number, number, number, number, number]> = [
  [50.0, 2.6772, -79.7751, 50.0, 0.0, -82.7485, 2.0425],
  [50.0, 3.1571, -77.2803, 50.0, 0.0, -82.7485, 2.8615],
  [50.0, 2.8361, -74.02, 50.0, 0.0, -82.7485, 3.4412],
  [50.0, -1.3802, -84.2814, 50.0, 0.0, -82.7485, 1.0],
  [50.0, -1.1848, -84.8006, 50.0, 0.0, -82.7485, 1.0],
  [50.0, -0.9009, -85.5211, 50.0, 0.0, -82.7485, 1.0],
  [50.0, 0.0, 0.0, 50.0, -1.0, 2.0, 2.3669],
  [50.0, -1.0, 2.0, 50.0, 0.0, 0.0, 2.3669],
  [50.0, 2.49, -0.001, 50.0, -2.49, 0.0009, 7.1792],
  [50.0, 2.49, -0.001, 50.0, -2.49, 0.001, 7.1792],
  [50.0, 2.49, -0.001, 50.0, -2.49, 0.0011, 7.2195],
  [50.0, 2.49, -0.001, 50.0, -2.49, 0.0012, 7.2195],
  [50.0, -0.001, 2.49, 50.0, 0.0009, -2.49, 4.8045],
  [50.0, -0.001, 2.49, 50.0, 0.001, -2.49, 4.8045],
  [50.0, -0.001, 2.49, 50.0, 0.0011, -2.49, 4.7461],
  [50.0, 2.5, 0.0, 50.0, 0.0, -2.5, 4.3065],
  [50.0, 2.5, 0.0, 73.0, 25.0, -18.0, 27.1492],
  [50.0, 2.5, 0.0, 61.0, -5.0, 29.0, 22.8977],
  [50.0, 2.5, 0.0, 56.0, -27.0, -3.0, 31.903],
  [50.0, 2.5, 0.0, 58.0, 24.0, 15.0, 19.4535],
  [50.0, 2.5, 0.0, 50.0, 3.1736, 0.5854, 1.0],
  [50.0, 2.5, 0.0, 50.0, 3.2972, 0.0, 1.0],
  [50.0, 2.5, 0.0, 50.0, 1.8634, 0.5757, 1.0],
  [50.0, 2.5, 0.0, 50.0, 3.2592, 0.335, 1.0],
  [60.2574, -34.0099, 36.2677, 60.4626, -34.1751, 39.4387, 1.2644],
  [63.0109, -31.0961, -5.8663, 62.8187, -29.7946, -4.0864, 1.263],
  [61.2901, 3.7196, -5.3901, 61.4292, 2.248, -4.962, 1.8731],
  [35.0831, -44.1164, 3.7933, 35.0232, -40.0716, 1.5901, 1.8645],
  [22.7233, 20.0904, -46.694, 23.0331, 14.973, -42.5619, 2.0373],
  [36.4612, 47.858, 18.3852, 36.2715, 50.5065, 21.2231, 1.4146],
  [90.8027, -2.0831, 1.441, 91.1528, -1.6435, 0.0447, 1.4441],
  [90.9257, -0.5406, -0.9208, 88.6381, -0.8985, -0.7239, 1.5381],
  [6.7747, -0.2908, -2.4247, 5.8714, -0.0985, -2.2286, 0.6377],
  [2.0776, 0.0795, -1.135, 0.9033, -0.0636, -0.5514, 0.9082],
];

describe('ciede2000', () => {
  test.each(CIEDE2000_REFERENCE_DATA)(
    'Lab(%f, %f, %f) to Lab(%f, %f, %f) is %f',
    (l1, a1, b1, l2, a2, b2, expected) => {
      expect(ciede2000({ l: l1, a: a1, b: b1 }, { l: l2, a: a2, b: b2 })).toBeCloseTo(expected, 4);
    },
  );

  test('is zero for a colour against itself', () => {
    expect(ciede2000({ l: 50, a: 2.5, b: -1 }, { l: 50, a: 2.5, b: -1 })).toBe(0);
  });

  test('is symmetric', () => {
    const first = { l: 60.2574, a: -34.0099, b: 36.2677 };
    const second = { l: 60.4626, a: -34.1751, b: 39.4387 };
    expect(ciede2000(first, second)).toBeCloseTo(ciede2000(second, first), 10);
  });
});

describe('toLab', () => {
  test('white is L=100 with no chroma', () => {
    const white = toLab(parseColor('#fff'));
    expect(white.l).toBeCloseTo(100, 4);
    expect(white.a).toBeCloseTo(0, 4);
    expect(white.b).toBeCloseTo(0, 4);
  });

  test('black is L=0 with no chroma', () => {
    const black = toLab(parseColor('#000'));
    expect(black.l).toBeCloseTo(0, 4);
    expect(black.a).toBeCloseTo(0, 4);
    expect(black.b).toBeCloseTo(0, 4);
  });

  test('mid grey sits halfway up the lightness axis', () => {
    const grey = toLab(parseColor('#777777'));
    expect(grey.l).toBeCloseTo(50, 0);
    expect(grey.a).toBeCloseTo(0, 4);
    expect(grey.b).toBeCloseTo(0, 4);
  });
});

describe('simulateColorVisionDeficiency', () => {
  test.each(['protanopia', 'deuteranopia', 'tritanopia'] as const)('leaves white unchanged under %s', deficiency => {
    expect(formatHex(simulateColorVisionDeficiency(parseColor('#fff'), deficiency))).toBe('#ffffff');
  });

  test.each(['protanopia', 'deuteranopia', 'tritanopia'] as const)('leaves black unchanged under %s', deficiency => {
    expect(formatHex(simulateColorVisionDeficiency(parseColor('#000'), deficiency))).toBe('#000000');
  });

  /**
   * How much closer two colours appear once the deficiency is simulated.
   * @param first One colour, as CSS.
   * @param second The other colour, as CSS.
   * @param deficiency Which kind of dichromacy to simulate.
   * @returns The simulated distance as a fraction of the distance in typical vision.
   */
  function collapseFactor(first: string, second: string, deficiency: ColorVisionDeficiency): number {
    const a = parseColor(first);
    const b = parseColor(second);
    return (
      perceptualDistance(simulateColorVisionDeficiency(a, deficiency), simulateColorVisionDeficiency(b, deficiency)) /
      perceptualDistance(a, b)
    );
  }

  /*
   * Each kind of dichromacy has a signature pair of colours that it confuses:
   * red with green for the two red-green forms, and yellow with white for the
   * much rarer blue-yellow form. Asserting on those pairs pins the matrices to
   * the effect they are supposed to reproduce, rather than to the exact numbers
   * that fall out of them.
   */
  test('collapses red and green under deuteranopia', () => {
    expect(collapseFactor('#ff0000', '#00ff00', 'deuteranopia')).toBeLessThan(0.25);
  });

  test('collapses red and green under protanopia', () => {
    expect(collapseFactor('#ff0000', '#00ff00', 'protanopia')).toBeLessThan(0.5);
  });

  test('collapses yellow and white under tritanopia', () => {
    expect(collapseFactor('#ffff00', '#ffffff', 'tritanopia')).toBeLessThan(0.5);
  });

  /*
   * The negative control. A simulation that made every pair of colours collapse
   * would pass the assertions above while telling us nothing.
   */
  test('keeps blue and yellow apart under both red-green deficiencies', () => {
    expect(collapseFactor('#0000ff', '#ffff00', 'deuteranopia')).toBeGreaterThan(0.8);
    expect(collapseFactor('#0000ff', '#ffff00', 'protanopia')).toBeGreaterThan(0.8);
  });

  test('keeps red and green apart under tritanopia', () => {
    expect(collapseFactor('#ff0000', '#00ff00', 'tritanopia')).toBeGreaterThan(0.8);
  });
});
