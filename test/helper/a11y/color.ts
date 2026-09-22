/*
 * Colour maths for the automated accessibility checks.
 *
 * Everything here is pure arithmetic on colour values, so it runs in plain Node
 * without a DOM. That is deliberate: the theme level checks in
 * test/theme/themeAccessibility.spec.ts only need the colour tokens that
 * Recharts ships, never a rendered chart.
 *
 * Note that axe-core cannot do any of this for us. Its `color-contrast` rule
 * reads the CSS `color` property and gives up as soon as it walks into an
 * `<svg>`, so every SVG `<text>` in a chart comes back as "incomplete" rather
 * than as a pass or a violation.
 */

/**
 * A colour in the sRGB colour space, with each channel in the 0-255 range.
 */
export type Rgb = {
  readonly r: number;
  readonly g: number;
  readonly b: number;
};

/**
 * A colour in the CIE L*a*b* colour space, relative to the D65 white point.
 */
export type Lab = {
  /** Lightness, 0 (black) to 100 (white). */
  readonly l: number;
  /** Green-red axis, unbounded but usually within -128 to 127. */
  readonly a: number;
  /** Blue-yellow axis, unbounded but usually within -128 to 127. */
  readonly b: number;
};

/**
 * The three forms of dichromacy, where one of the three cone types is missing
 * altogether. These are the most severe form of each kind of colour vision
 * deficiency, which makes them the right worst case to test a palette against.
 */
export type ColorVisionDeficiency = 'protanopia' | 'deuteranopia' | 'tritanopia';

const HEX_SHORT = /^#([\da-f])([\da-f])([\da-f])$/i;
const HEX_LONG = /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i;
const RGB_FUNCTION = /^rgb\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*\)$/i;

/**
 * Parse the subset of CSS colour syntax that the Recharts themes actually use:
 * `#rgb`, `#rrggbb` and `rgb()` / `rgba()`.
 *
 * Alpha is intentionally not parsed. Recharts expresses transparency through
 * the separate `fillOpacity` and `strokeOpacity` properties, so mixing a second
 * source of alpha in here would hide which one a failing check came from.
 * Use {@link blendOver} with the opacity from the theme instead.
 * @param css The colour to parse.
 * @returns The parsed colour.
 * @throws If the colour uses syntax this function does not support.
 */
export function parseColor(css: string): Rgb {
  const short = HEX_SHORT.exec(css);
  if (short != null) {
    return {
      r: parseInt(`${short[1]}${short[1]}`, 16),
      g: parseInt(`${short[2]}${short[2]}`, 16),
      b: parseInt(`${short[3]}${short[3]}`, 16),
    };
  }

  const long = HEX_LONG.exec(css);
  if (long != null) {
    return { r: parseInt(long[1], 16), g: parseInt(long[2], 16), b: parseInt(long[3], 16) };
  }

  const functional = RGB_FUNCTION.exec(css);
  if (functional != null) {
    return { r: Number(functional[1]), g: Number(functional[2]), b: Number(functional[3]) };
  }

  throw new Error(`Unsupported color syntax: "${css}"`);
}

/**
 * Format a colour as a `#rrggbb` string, for readable assertion messages.
 * @param rgb The colour to format.
 * @returns The colour as a lowercase hex string.
 */
export function formatHex({ r, g, b }: Rgb): string {
  const channel = (value: number) =>
    Math.round(Math.min(255, Math.max(0, value)))
      .toString(16)
      .padStart(2, '0');
  return `#${channel(r)}${channel(g)}${channel(b)}`;
}

/**
 * Remove the sRGB transfer function, turning a display-encoded channel into a
 * linear-light one. Both the WCAG luminance formula and the colour vision
 * deficiency matrices are defined on linear light.
 * @param channel A channel value in the 0-255 range.
 * @returns The linear-light value, in the 0-1 range.
 */
function toLinear(channel: number): number {
  const value = channel / 255;
  return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

/**
 * Apply the sRGB transfer function, the inverse of {@link toLinear}.
 * @param value A linear-light value, in the 0-1 range.
 * @returns The display-encoded channel, in the 0-255 range.
 */
function fromLinear(value: number): number {
  const clamped = Math.min(1, Math.max(0, value));
  return 255 * (clamped <= 0.0031308 ? 12.92 * clamped : 1.055 * clamped ** (1 / 2.4) - 0.055);
}

/**
 * Composite a partially transparent colour over an opaque one, the way a
 * browser composites a `fill` with a `fill-opacity` over whatever is behind it.
 * @param foreground The colour being painted.
 * @param alpha The opacity of the foreground, 0 to 1.
 * @param background The opaque colour underneath.
 * @returns The resulting opaque colour.
 */
export function blendOver(foreground: Rgb, alpha: number, background: Rgb): Rgb {
  const mix = (a: number, b: number) => a * alpha + b * (1 - alpha);
  return {
    r: mix(foreground.r, background.r),
    g: mix(foreground.g, background.g),
    b: mix(foreground.b, background.b),
  };
}

/**
 * Relative luminance as defined by WCAG 2.
 * @param rgb The colour to measure.
 * @returns The relative luminance, 0 (black) to 1 (white).
 * @see {@link https://www.w3.org/TR/WCAG22/#dfn-relative-luminance}
 */
export function relativeLuminance({ r, g, b }: Rgb): number {
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

/**
 * The WCAG 2 contrast ratio between two opaque colours.
 *
 * Both arguments must already be opaque. Blend any `fillOpacity` or
 * `strokeOpacity` in with {@link blendOver} first, otherwise the result
 * describes a colour that is never painted.
 * @param a One colour.
 * @param b The other colour.
 * @returns The contrast ratio, from 1 (identical) to 21 (black on white).
 * @see {@link https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio}
 */
export function contrastRatio(a: Rgb, b: Rgb): number {
  const lighter = Math.max(relativeLuminance(a), relativeLuminance(b));
  const darker = Math.min(relativeLuminance(a), relativeLuminance(b));
  return (lighter + 0.05) / (darker + 0.05);
}

const D65_X = 0.95047;
const D65_Z = 1.08883;

/**
 * Convert sRGB to CIE L*a*b* relative to the D65 white point.
 * @param rgb The colour to convert.
 * @returns The same colour in L*a*b*.
 */
export function toLab({ r, g, b }: Rgb): Lab {
  const lr = toLinear(r);
  const lg = toLinear(g);
  const lb = toLinear(b);

  const x = (0.4124564 * lr + 0.3575761 * lg + 0.1804375 * lb) / D65_X;
  const y = 0.2126729 * lr + 0.7151522 * lg + 0.072175 * lb;
  const z = (0.0193339 * lr + 0.119192 * lg + 0.9503041 * lb) / D65_Z;

  const f = (t: number) => (t > 216 / 24389 ? Math.cbrt(t) : (841 / 108) * t + 4 / 29);
  const fx = f(x);
  const fy = f(y);
  const fz = f(z);

  return { l: 116 * fy - 16, a: 500 * (fx - fy), b: 200 * (fy - fz) };
}

const DEGREES = 180 / Math.PI;
const RADIANS = Math.PI / 180;

/**
 * The hue angle of an (a, b) pair, normalised to the 0-360 degree range.
 * @param b The blue-yellow coordinate.
 * @param a The green-red coordinate.
 * @returns The hue angle in degrees, or 0 when the colour is achromatic.
 */
function hueAngle(b: number, a: number): number {
  if (a === 0 && b === 0) {
    return 0;
  }
  const angle = Math.atan2(b, a) * DEGREES;
  return angle < 0 ? angle + 360 : angle;
}

/**
 * The CIEDE2000 colour difference between two L*a*b* colours.
 *
 * This is the metric to reach for when asking "can somebody tell these two
 * colours apart", because unlike a plain Euclidean distance it corrects for the
 * fact that human vision is far less sensitive to hue differences among
 * saturated blues than among other hues. A difference of roughly 1.0 is the
 * smallest a person can notice under ideal conditions.
 * @param first One colour.
 * @param second The other colour.
 * @returns The colour difference, where larger means more distinguishable.
 * @see {@link https://en.wikipedia.org/wiki/Color_difference}
 */
export function ciede2000(first: Lab, second: Lab): number {
  const { l: l1, a: a1, b: b1 } = first;
  const { l: l2, a: a2, b: b2 } = second;

  const c1 = Math.hypot(a1, b1);
  const c2 = Math.hypot(a2, b2);
  const cMean = (c1 + c2) / 2;
  const g = 0.5 * (1 - Math.sqrt(cMean ** 7 / (cMean ** 7 + 25 ** 7)));

  const a1p = (1 + g) * a1;
  const a2p = (1 + g) * a2;
  const c1p = Math.hypot(a1p, b1);
  const c2p = Math.hypot(a2p, b2);
  const h1p = hueAngle(b1, a1p);
  const h2p = hueAngle(b2, a2p);

  const deltaL = l2 - l1;
  const deltaC = c2p - c1p;

  let deltaHueAngle = 0;
  if (c1p * c2p !== 0) {
    deltaHueAngle = h2p - h1p;
    if (deltaHueAngle > 180) {
      deltaHueAngle -= 360;
    } else if (deltaHueAngle < -180) {
      deltaHueAngle += 360;
    }
  }
  const deltaH = 2 * Math.sqrt(c1p * c2p) * Math.sin((deltaHueAngle * RADIANS) / 2);

  const lMeanP = (l1 + l2) / 2;
  const cMeanP = (c1p + c2p) / 2;

  let hMeanP: number;
  if (c1p * c2p === 0) {
    hMeanP = h1p + h2p;
  } else if (Math.abs(h1p - h2p) <= 180) {
    hMeanP = (h1p + h2p) / 2;
  } else if (h1p + h2p < 360) {
    hMeanP = (h1p + h2p + 360) / 2;
  } else {
    hMeanP = (h1p + h2p - 360) / 2;
  }

  const t =
    1 -
    0.17 * Math.cos((hMeanP - 30) * RADIANS) +
    0.24 * Math.cos(2 * hMeanP * RADIANS) +
    0.32 * Math.cos((3 * hMeanP + 6) * RADIANS) -
    0.2 * Math.cos((4 * hMeanP - 63) * RADIANS);

  const sL = 1 + (0.015 * (lMeanP - 50) ** 2) / Math.sqrt(20 + (lMeanP - 50) ** 2);
  const sC = 1 + 0.045 * cMeanP;
  const sH = 1 + 0.015 * cMeanP * t;

  const deltaTheta = 30 * Math.exp(-(((hMeanP - 275) / 25) ** 2));
  const rC = 2 * Math.sqrt(cMeanP ** 7 / (cMeanP ** 7 + 25 ** 7));
  const rT = -Math.sin(2 * deltaTheta * RADIANS) * rC;

  const lTerm = deltaL / sL;
  const cTerm = deltaC / sC;
  const hTerm = deltaH / sH;

  return Math.sqrt(lTerm ** 2 + cTerm ** 2 + hTerm ** 2 + rT * cTerm * hTerm);
}

/**
 * Linear-light RGB mixing matrices for full dichromacy, from Machado, Oliveira
 * and Fernandes (2009). These are the severity 1.0 entries of their tables.
 * @see {@link https://www.inf.ufrgs.br/~oliveira/pubs_files/CVD_Simulation/CVD_Simulation.html}
 */
const DEFICIENCY_MATRICES: Record<ColorVisionDeficiency, ReadonlyArray<readonly [number, number, number]>> = {
  protanopia: [
    [0.152286, 1.052583, -0.204868],
    [0.114503, 0.786281, 0.099216],
    [-0.003882, -0.048116, 1.051998],
  ],
  deuteranopia: [
    [0.367322, 0.860646, -0.227968],
    [0.280085, 0.672501, 0.047413],
    [-0.01182, 0.04294, 0.968881],
  ],
  tritanopia: [
    [1.255528, -0.076749, -0.178779],
    [-0.078411, 0.930809, 0.147602],
    [0.004733, 0.691367, 0.3039],
  ],
};

/**
 * Simulate how a colour appears to somebody with the given colour vision
 * deficiency.
 *
 * The simulation is only ever an approximation of a subjective experience, and
 * it does not replace asking real people. It is still useful in an automated
 * test, because a palette whose colours collapse onto each other under
 * simulation will certainly be hard to read for some portion of real readers.
 * @param rgb The colour as somebody with typical colour vision sees it.
 * @param deficiency Which kind of dichromacy to simulate.
 * @returns The approximate appearance of the colour.
 */
export function simulateColorVisionDeficiency(rgb: Rgb, deficiency: ColorVisionDeficiency): Rgb {
  const matrix = DEFICIENCY_MATRICES[deficiency];
  const linear = [toLinear(rgb.r), toLinear(rgb.g), toLinear(rgb.b)] as const;
  const mixed = matrix.map(row => row[0] * linear[0] + row[1] * linear[1] + row[2] * linear[2]);
  return { r: fromLinear(mixed[0]), g: fromLinear(mixed[1]), b: fromLinear(mixed[2]) };
}

/**
 * How easy it is to tell two colours apart, as a CIEDE2000 difference.
 * @param a One colour.
 * @param b The other colour.
 * @returns The colour difference, where larger means more distinguishable.
 */
export function perceptualDistance(a: Rgb, b: Rgb): number {
  return ciede2000(toLab(a), toLab(b));
}
