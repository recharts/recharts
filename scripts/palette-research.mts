/*
 * Research tool for the categorical palettes in src/theme/lightTheme.ts and src/theme/darkTheme.ts.
 *
 * It answers one question: what does it cost to darken the light palette so that every entry
 * reaches 4.5:1 against the page (WCAG text contrast), instead of today's 3:1? "Cost" is measured
 * as distinguishability of every prefix of the palette (in typical vision and under protanopia,
 * deuteranopia and tritanopia), the shared lightness/chroma band of entries 1-8, hue identity with
 * the dark palette, and drift from today's colors.
 *
 * This is a one-shot tool for developers. Nothing in the build, the tests or CI runs it.
 * Run it from the repository root with Node 24, which strips TypeScript types natively.
 * `--no-warnings` silences a harmless warning about the type of the imported test helper module:
 *
 *   node --no-warnings scripts/palette-research.mts ceilings
 *   node --no-warnings scripts/palette-research.mts candidates
 *   node --no-warnings scripts/palette-research.mts optimize --target T1 --hue-budget 8 --drift-weight 1 --no-loss 0.05 --seed 1
 *   node --no-warnings scripts/palette-research.mts reorder '#2373e6,#b65700,...' [--grouped]
 *   node --no-warnings scripts/palette-research.mts evaluate '#2373e6,#b65700,...'
 *
 * Every measurement goes through test/helper/a11y/color.ts, the same helpers that
 * test/theme/themeAccessibility.spec.ts uses, so the numbers match the test suite exactly.
 * Only the OKLCH conversion, used to move colors around, lives in this file.
 *
 * Targets:
 * - T1: every light entry has at least 4.5:1 against #fff as a stroke (enough for opaque fills,
 *   where an inside label in the page color has the same contrast as an outside label).
 * - T2: #fff text on the entry composited at fillOpacity 0.85 over #fff reaches 4.5:1
 *   (keeps today's 0.85 fills).
 *
 * The optimizer is a seeded simulated annealing over OKLCH L, C and h of all 12 light entries,
 * so the same arguments always give the same palette. Each run takes about a minute.
 *
 * The candidates of the original research (issue #7987):
 * - A, B1, B2, B-T2, E: `candidates`
 * - C-bal (recommended): `optimize --target T1 --hue-budget 8 --drift-weight 1 --no-loss 0.05 --seed 1`
 * - C-lock (hue locked): `optimize --target T1 --hue-budget 0 --drift-weight 1 --no-loss 0.05 --seed 1`
 * - C8 (more margin, more drift): `optimize --target T1 --hue-budget 8 --drift-weight 0.1 --seed 1`
 * - C-T2: `optimize --target T2 --hue-budget 8 --drift-weight 0.03 --seed 1`
 * - D: `reorder` on the B1 colors
 */
import {
  blendOver,
  type ColorVisionDeficiency,
  contrastRatio,
  formatHex,
  parseColor,
  perceptualDistance,
  type Rgb,
  simulateColorVisionDeficiency,
} from '../test/helper/a11y/color.ts';

/*
 * The palettes as shipped in 3.11, the reference every comparison is made against.
 * They are copied rather than imported so that the reference stays fixed if the theme files change.
 */
const NAMES = ['Blue', 'Orange', 'Aqua', 'Rose', 'Violet', 'Sky', 'Red', 'Green', 'Purple', 'Teal', 'Amber', 'Plum'];
const BASELINE_LIGHT = [
  '#2775e8', '#b65900', '#007c59', '#ae3b73', '#6f56b3', '#0582a1',
  '#b2392b', '#568b28', '#723984', '#00928e', '#ae7500', '#b862a7',
]; // prettier-ignore
const BASELINE_DARK = [
  '#5396ff', '#e97e2b', '#46d09f', '#e683ad', '#b8a4fe', '#0bb1da',
  '#ff9180', '#79b14e', '#ac71c0', '#01a19c', '#ffc470', '#ffaaec',
]; // prettier-ignore

const WHITE = parseColor('#fff');
const DARK_PAGE = parseColor('#18181b');
const FILL_OPACITY = 0.85;
const SANKEY_LINK_OPACITY = 0.4;
const WCAG_TEXT_CONTRAST = 4.5;

// ------------------------------------------------------------------------------------------------
// OKLCH, using Björn Ottosson's reference matrices
// ------------------------------------------------------------------------------------------------

type Oklch = { L: number; C: number; h: number };

const toLinear = (channel: number) => {
  const value = channel / 255;
  return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
};
const fromLinear = (value: number) => 255 * (value <= 0.0031308 ? 12.92 * value : 1.055 * value ** (1 / 2.4) - 0.055);

function rgbToOklch({ r, g, b }: Rgb): Oklch {
  const lr = toLinear(r);
  const lg = toLinear(g);
  const lb = toLinear(b);
  const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const a = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const bb = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  const h = (Math.atan2(bb, a) * 180) / Math.PI;
  return { L, C: Math.hypot(a, bb), h: h < 0 ? h + 360 : h };
}

/** Linear-light sRGB, possibly outside the 0-1 range when the color is out of gamut. */
function oklchToLinear({ L, C, h }: Oklch) {
  const rad = (h * Math.PI) / 180;
  const a = C * Math.cos(rad);
  const b = C * Math.sin(rad);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}

const inGamut = (color: Oklch) => oklchToLinear(color).every(v => v >= -1e-6 && v <= 1 + 1e-6);

function maxChroma(L: number, h: number): number {
  let lo = 0;
  let hi = 0.5;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (inGamut({ L, C: mid, h })) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return lo;
}

/** Bring a color into the sRGB gamut by lowering chroma only, so lightness and hue stay put. */
const clampChroma = (color: Oklch): Oklch => (inGamut(color) ? color : { ...color, C: maxChroma(color.L, color.h) });

function oklchToHex(color: Oklch): string {
  const [r, g, b] = oklchToLinear(color).map(v => fromLinear(Math.min(1, Math.max(0, v))));
  return formatHex({ r, g, b });
}

const hexToOklch = (hex: string) => rgbToOklch(parseColor(hex));

/** Signed hue difference from a to b, in degrees, in the -180..180 range. */
function hueDiff(a: number, b: number): number {
  let d = b - a;
  while (d > 180) d -= 360;
  while (d < -180) d += 360;
  return d;
}

// ------------------------------------------------------------------------------------------------
// Measurements, all through the repository's color helpers
// ------------------------------------------------------------------------------------------------

type Target = 'T1' | 'T2';
type Vision = 'normal' | ColorVisionDeficiency;
const VISIONS: ReadonlyArray<Vision> = ['normal', 'protanopia', 'deuteranopia', 'tritanopia'];

const strokeContrast = (hex: string, page = WHITE) => contrastRatio(parseColor(hex), page);
const painted = (hex: string, opacity: number, page = WHITE) => blendOver(parseColor(hex), opacity, page);
const fillContrast = (hex: string, opacity = FILL_OPACITY, page = WHITE) =>
  contrastRatio(painted(hex, opacity, page), page);
/** T2: #fff text on the entry composited at 0.85 over #fff. */
const whiteTextOnFill = (hex: string) => contrastRatio(WHITE, painted(hex, FILL_OPACITY));
const passes = (hex: string, target: Target) =>
  (target === 'T1' ? strokeContrast(hex) : whiteTextOnFill(hex)) >= WCAG_TEXT_CONTRAST;
const see = (color: Rgb, vision: Vision) =>
  vision === 'normal' ? color : simulateColorVisionDeficiency(color, vision);
const drift = (hex: string, i: number) => perceptualDistance(parseColor(hex), parseColor(BASELINE_LIGHT[i]));
const totalDrift = (hexes: ReadonlyArray<string>) => hexes.reduce((sum, hex, i) => sum + drift(hex, i), 0);

type Pair = { distance: number; first: number; second: number };

/** The closest pair within the first N colors, for every N = 2..length (index N of the result). */
function prefixMinima(colors: ReadonlyArray<Rgb>, vision: Vision): Pair[] {
  const seen = colors.map(c => see(c, vision));
  const result: Pair[] = [];
  let closest: Pair = { distance: Infinity, first: -1, second: -1 };
  for (let n = 2; n <= seen.length; n++) {
    const j = n - 1;
    for (let i = 0; i < j; i++) {
      const distance = perceptualDistance(seen[i], seen[j]);
      if (distance < closest.distance) {
        closest = { distance, first: i, second: j };
      }
    }
    result[n] = closest;
  }
  return result;
}

type Grid = Record<Vision, number[]>;

/**
 * Prefix minima per vision, taking the worse of fills composited at 0.85 (what the tests measure)
 * and opaque colors (lines, and fills under T1).
 */
function prefixGrid(hexes: ReadonlyArray<string>): Grid {
  const translucent = hexes.map(h => painted(h, FILL_OPACITY));
  const opaque = hexes.map(h => parseColor(h));
  const minima = (vision: Vision) => {
    const a = prefixMinima(translucent, vision);
    const b = prefixMinima(opaque, vision);
    return a.map((pair, n) => Math.min(pair.distance, b[n].distance));
  };
  return {
    normal: minima('normal'),
    protanopia: minima('protanopia'),
    deuteranopia: minima('deuteranopia'),
    tritanopia: minima('tritanopia'),
  };
}

const BASELINE_GRID = prefixGrid(BASELINE_LIGHT);

/**
 * How the prefix margins compare with today's palette. 0 means "same as today".
 * Each (prefix N, vision) cell adds w_N * ln(D / D_today), where losses count 3x, gains are capped
 * at +50 %, and the prefixes most charts use (N = 3..8) weigh 3x.
 */
function marginScore(grid: Grid): number {
  let score = 0;
  for (const vision of VISIONS) {
    for (let n = 2; n < grid[vision].length; n++) {
      const weight = n >= 3 && n <= 8 ? 3 : 1;
      const ratio = Math.log(grid[vision][n] / BASELINE_GRID[vision][n]);
      score += weight * (ratio < 0 ? 3 * ratio : Math.min(ratio, Math.log(1.5)));
    }
  }
  return score;
}

/** Re-run the assertions of test/theme/themeAccessibility.spec.ts for a light palette painted at `opacity`. */
function simulateTests(hexes: ReadonlyArray<string>, opacity: number): string[] {
  const failures: string[] = [];
  const colors = hexes.map(h => painted(h, opacity));
  hexes.forEach((hex, i) => {
    if (contrastRatio(colors[i], WHITE) < 3) failures.push(`${hex} fill < 3`);
    if (strokeContrast(hex) < 3) failures.push(`${hex} stroke < 3`);
    if (fillContrast(hex, SANKEY_LINK_OPACITY) < 1.5) failures.push(`${hex} Sankey link < 1.5`);
  });
  for (const vision of VISIONS) {
    const closest = prefixMinima(colors, vision)[hexes.length];
    const floor = vision === 'normal' ? 10 : 2;
    if (closest.distance < floor) {
      failures.push(
        `${vision} ${closest.distance.toFixed(2)} < ${floor} (${hexes[closest.first]} / ${hexes[closest.second]})`,
      );
    }
  }
  return failures;
}

// ------------------------------------------------------------------------------------------------
// Simple candidates
// ------------------------------------------------------------------------------------------------

/** The highest OKLCH L at this hue and chroma (chroma clamped to the gamut) whose hex reaches the target. */
function ceilingL(C: number, h: number, target: Target): number {
  let lo = 0.2;
  let hi = 0.95;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (passes(oklchToHex(clampChroma({ L: mid, C, h })), target)) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return lo;
}

/** Darken in OKLCH L, hue and chroma kept (or clamped to the gamut), just until the rounded hex passes. */
function darkenTo(hex: string, target: Target): string {
  if (passes(hex, target)) {
    return hex;
  }
  const color = hexToOklch(hex);
  for (let L = Math.min(ceilingL(color.C, color.h, target), color.L); L > 0.2; L -= 0.0002) {
    const candidate = oklchToHex(clampChroma({ L, C: color.C, h: color.h }));
    if (passes(candidate, target)) {
      return candidate;
    }
  }
  throw new Error(`No darker ${hex} reaches ${target}`);
}

/** The smallest uniform OKLCH L shift that makes every given entry reach the target. */
function uniformShift(hexes: ReadonlyArray<string>, target: Target): { dL: number; hexes: string[] } {
  for (let dL = 0; dL > -0.3; dL -= 0.0005) {
    const shifted = hexes.map(hex => {
      const color = hexToOklch(hex);
      return oklchToHex(clampChroma({ ...color, L: color.L + dL }));
    });
    if (shifted.every(hex => passes(hex, target))) {
      return { dL, hexes: shifted };
    }
  }
  throw new Error(`No uniform shift reaches ${target}`);
}

// ------------------------------------------------------------------------------------------------
// Optimizer
// ------------------------------------------------------------------------------------------------

type OptimizeOptions = {
  target: Target;
  /** How far, in OKLCH degrees, any entry may move from today's hue. 0 locks the hue. */
  hueBudget: number;
  /** Penalty per unit of summed CIEDE2000 drift from today's colors. */
  driftWeight: number;
  /** If set, no prefix N <= 8 may lose more than this fraction against today, in any vision. */
  noLoss: number | null;
  seed: number;
  iterations: number;
};

function optimize(options: OptimizeOptions): string[] {
  const { target, hueBudget, driftWeight, noLoss, iterations, seed: initialSeed } = options;
  let seed = initialSeed;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  const gaussian = () => Math.sqrt(-2 * Math.log(random() + 1e-12)) * Math.cos(2 * Math.PI * random());

  const today = BASELINE_LIGHT.map(hexToOklch);
  const BAND_L_SPREAD = 0.062; // today's L spread over entries 1-8
  const BAND_C_SPREAD = 0.088; // today's C spread over entries 1-8
  /*
   * Darkening budget: no entry goes more than 0.05 below the lightness its own hue needs for the target
   * (or below today's L - 0.05 if it already passes). Without it, Amber turns into brown.
   */
  const minL = today.map(c => Math.min(c.L, ceilingL(c.C, c.h, target)) - 0.05);

  type State = Oklch[];
  const hexesOf = (state: State) => state.map(c => oklchToHex(clampChroma(c)));

  function feasible(state: State, hexes: string[]): boolean {
    for (let i = 0; i < 12; i++) {
      if (!passes(hexes[i], target)) return false;
      // 0.6 degrees of slack because rounding to #rrggbb moves the hue a little
      if (Math.abs(hueDiff(today[i].h, hexToOklch(hexes[i]).h)) > hueBudget + 0.6) return false;
      if (state[i].C < 0.6 * today[i].C || state[i].C > today[i].C + 0.03) return false;
      if (state[i].L < minL[i]) return false;
    }
    return true;
  }

  function objective(hexes: string[]): number {
    const grid = prefixGrid(hexes);
    const below = (value: number, floor: number) => Math.max(0, floor - value) * 20;
    // the test floors (10 and 2) plus a small buffer
    let penalty =
      below(grid.normal[12], 10.5) +
      below(grid.protanopia[12], 2.5) +
      below(grid.deuteranopia[12], 2.5) +
      below(grid.tritanopia[12], 2.5);
    if (noLoss != null) {
      for (const vision of VISIONS) {
        for (let n = 2; n <= 8; n++) {
          penalty += 200 * Math.max(0, 1 - noLoss - grid[vision][n] / BASELINE_GRID[vision][n]);
        }
      }
    }
    // The band is a soft constraint, so that the search can walk in from an infeasible start.
    const band = hexes.slice(0, 8).map(hexToOklch);
    const spread = (values: number[]) => Math.max(...values) - Math.min(...values);
    penalty += 500 * Math.max(0, spread(band.map(c => c.L)) - BAND_L_SPREAD);
    penalty += 500 * Math.max(0, spread(band.map(c => c.C)) - BAND_C_SPREAD);
    return marginScore(grid) - penalty - driftWeight * totalDrift(hexes);
  }

  // Start from the minimal per-entry darkening, with the hue reset to today's.
  let current: State = BASELINE_LIGHT.map((hex, i) => ({ ...hexToOklch(darkenTo(hex, target)), h: today[i].h }));
  let currentHexes = hexesOf(current);
  let currentValue = objective(currentHexes);
  let best = { value: currentValue, hexes: currentHexes };

  for (let iteration = 0; iteration < iterations; iteration++) {
    const temperature = 2 * (1 - iteration / iterations) ** 2 + 0.002;
    const next = current.map(c => ({ ...c }));
    const k = Math.floor(random() * 12);
    const step = 0.3 + temperature;
    next[k].L += gaussian() * 0.008 * step;
    next[k].C += gaussian() * 0.006 * step;
    if (hueBudget > 0) {
      next[k].h += gaussian() * 1.5 * step;
    }
    next[k] = clampChroma(next[k]);
    const nextHexes = hexesOf(next);
    if (!feasible(next, nextHexes)) {
      continue;
    }
    const value = objective(nextHexes);
    if (value > currentValue || random() < Math.exp((value - currentValue) / temperature)) {
      current = next;
      currentHexes = nextHexes;
      currentValue = value;
      if (value > best.value) {
        best = { value, hexes: nextHexes };
      }
    }
  }

  // Greedy polish around the best state found.
  let state: State = best.hexes.map((hex, i) => ({
    ...hexToOklch(hex),
    h: hueBudget === 0 ? today[i].h : hexToOklch(hex).h,
  }));
  const moves = [
    [0.002, 0, 0],
    [-0.002, 0, 0],
    [0, 0.002, 0],
    [0, -0.002, 0],
    [0, 0, 0.5],
    [0, 0, -0.5],
  ];
  let improved = true;
  while (improved) {
    improved = false;
    for (let k = 0; k < 12; k++) {
      for (const [dL, dC, dh] of moves) {
        if (hueBudget === 0 && dh !== 0) continue;
        const next = state.map(c => ({ ...c }));
        next[k] = clampChroma({ L: next[k].L + dL, C: next[k].C + dC, h: next[k].h + dh });
        const nextHexes = hexesOf(next);
        if (!feasible(next, nextHexes)) continue;
        const value = objective(nextHexes);
        if (value > best.value + 1e-9) {
          best = { value, hexes: nextHexes };
          state = next;
          improved = true;
        }
      }
    }
  }
  return best.hexes;
}

/**
 * Steepest-ascent search over pairwise swaps of the palette order, maximizing the margin score.
 * With `grouped`, entries only swap within 1-8 or within 9-12, so the band stays in front.
 */
function reorder(hexes: ReadonlyArray<string>, grouped: boolean): number[] {
  let seed = 7;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  /** A random position to swap with position k, from the same group when `grouped`. */
  const swapPartner = (k: number, r: number) => {
    if (!grouped) {
      return Math.floor(r * hexes.length);
    }
    return k < 8 ? Math.floor(r * 8) : 8 + Math.floor(r * 4);
  };
  const scoreOf = (order: number[]) => marginScore(prefixGrid(order.map(i => hexes[i])));
  const identity = [...hexes.keys()];
  let best = { score: scoreOf(identity), order: identity };
  for (let restart = 0; restart < 30; restart++) {
    let order = [...identity];
    if (restart > 0) {
      for (let k = 0; k < order.length; k++) {
        const j = swapPartner(k, random());
        [order[k], order[j]] = [order[j], order[k]];
      }
    }
    let score = scoreOf(order);
    for (;;) {
      let step = { score, order };
      for (let i = 0; i < order.length; i++) {
        for (let j = i + 1; j < order.length; j++) {
          if (grouped && i < 8 !== j < 8) continue;
          const swapped = [...order];
          [swapped[i], swapped[j]] = [swapped[j], swapped[i]];
          const value = scoreOf(swapped);
          if (value > step.score) step = { score: value, order: swapped };
        }
      }
      if (step.score <= score + 1e-9) break;
      ({ score, order } = step);
    }
    if (score > best.score) best = { score, order };
  }
  return best.order;
}

// ------------------------------------------------------------------------------------------------
// Reports
// ------------------------------------------------------------------------------------------------

const fixed = (value: number, digits = 2) => value.toFixed(digits);
const signed = (value: number, digits = 1) => `${value >= 0 ? '+' : '-'}${Math.abs(value).toFixed(digits)}`;

/** Print every metric for a light palette of 12 entries, in today's order. */
function evaluate(title: string, hexes: ReadonlyArray<string>) {
  console.log(`\n=== ${title}\n${hexes.join(' ')}\n`);
  console.table(
    hexes.map((hex, i) => {
      const color = hexToOklch(hex);
      const before = hexToOklch(BASELINE_LIGHT[i]);
      return {
        name: NAMES[i],
        hex,
        stroke: fixed(strokeContrast(hex)),
        'fill 0.85': fixed(fillContrast(hex)),
        T2: fixed(whiteTextOnFill(hex)),
        L: fixed(color.L, 3),
        C: fixed(color.C, 3),
        h: fixed(color.h, 1),
        'ΔE today': fixed(drift(hex, i), 1),
        ΔL: signed(color.L - before.L, 3),
        ΔC: signed(color.C - before.C, 3),
        Δh: signed(hueDiff(before.h, color.h)),
        'Δh to dark': signed(hueDiff(hexToOklch(BASELINE_DARK[i]).h, color.h)),
      };
    }),
  );

  const grid = prefixGrid(hexes);
  console.log('Prefix minima (worse of 0.85 and opaque) and change against today:');
  console.table(
    Array.from({ length: hexes.length - 1 }, (_, k) => {
      const n = k + 2;
      return {
        N: n,
        ...Object.fromEntries(
          VISIONS.map(v => [v, `${fixed(grid[v][n], 1)} (${signed(grid[v][n] - BASELINE_GRID[v][n])})`]),
        ),
      };
    }),
  );

  const band = hexes.slice(0, 8).map(hexToOklch);
  const spread = (values: number[]) => Math.max(...values) - Math.min(...values);
  console.log(`margin score       ${fixed(marginScore(grid))}`);
  console.log(`drift, sum of ΔE   ${fixed(totalDrift(hexes), 1)}`);
  console.log(
    `band 1-8 spread    L ${fixed(spread(band.map(c => c.L)), 3)}, C ${fixed(spread(band.map(c => c.C)), 3)}`,
  );
  console.log(
    `dark entries, opaque, min contrast against #18181b ${fixed(Math.min(...BASELINE_DARK.map(h => strokeContrast(h, DARK_PAGE))))}`,
  );
  for (const opacity of [FILL_OPACITY, 1]) {
    const failures = simulateTests(hexes, opacity);
    console.log(
      `themeAccessibility.spec.ts at fillOpacity ${opacity}: ${failures.length === 0 ? 'pass' : `FAIL ${failures.join('; ')}`}`,
    );
  }
}

function printCeilings() {
  console.log('Round trip hex -> OKLCH -> hex:');
  const mismatches = [...BASELINE_LIGHT, ...BASELINE_DARK].filter(hex => oklchToHex(hexToOklch(hex)) !== hex);
  console.log(
    mismatches.length === 0 ? '  all 24 palette entries round-trip exactly' : `  MISMATCH ${mismatches.join(' ')}`,
  );
  console.log("\nHighest OKLCH L that reaches each target, at today's hue and chroma:");
  console.table(
    BASELINE_LIGHT.map((hex, i) => {
      const color = hexToOklch(hex);
      const t1 = ceilingL(color.C, color.h, 'T1');
      const t2 = ceilingL(color.C, color.h, 'T2');
      return {
        name: NAMES[i],
        hex,
        L: fixed(color.L, 3),
        'T1 ceiling': fixed(t1, 3),
        'ΔL for T1': color.L > t1 ? signed(t1 - color.L, 3) : 'passes',
        'T2 ceiling': fixed(t2, 3),
        'ΔL for T2': color.L > t2 ? signed(t2 - color.L, 3) : 'passes',
        'stroke at T2': fixed(strokeContrast(darkenTo(hex, 'T2'))),
      };
    }),
  );
}

function printCandidates() {
  const minimal = BASELINE_LIGHT.map(hex => darkenTo(hex, 'T1'));
  evaluate('A: minimal per-entry darkening (T1)', minimal);

  const tail = minimal.slice(8);
  const shifted = uniformShift(BASELINE_LIGHT.slice(0, 8), 'T1');
  evaluate(`B1: entries 1-8 shifted by ΔL ${fixed(shifted.dL, 4)}, tail as A (T1)`, [...shifted.hexes, ...tail]);

  const commonL = 0.553; // the lowest per-hue T1 ceiling (Aqua)
  const flat = BASELINE_LIGHT.slice(0, 8).map(hex => {
    const color = hexToOklch(hex);
    return darkenTo(oklchToHex(clampChroma({ ...color, L: commonL })), 'T1');
  });
  evaluate(`B2: entries 1-8 at one L = ${commonL}, tail as A (T1)`, [...flat, ...tail]);

  const shiftedT2 = uniformShift(BASELINE_LIGHT.slice(0, 8), 'T2');
  evaluate(`B-T2: entries 1-8 shifted by ΔL ${fixed(shiftedT2.dL, 4)}, tail minimal (T2)`, [
    ...shiftedT2.hexes,
    ...BASELINE_LIGHT.slice(8).map(hex => darkenTo(hex, 'T2')),
  ]);

  console.log("\n=== E: only the six entries that already reach T1, in today's order");
  const kept = [1, 2, 3, 4, 6, 8];
  const grid = prefixGrid(kept.map(i => BASELINE_LIGHT[i]));
  console.table(
    Array.from({ length: kept.length - 1 }, (_, k) => {
      const n = k + 2;
      return {
        N: n,
        ...Object.fromEntries(
          VISIONS.map(v => [v, `${fixed(grid[v][n], 1)} (${signed(grid[v][n] - BASELINE_GRID[v][n])})`]),
        ),
      };
    }),
  );
}

// ------------------------------------------------------------------------------------------------
// Command line
// ------------------------------------------------------------------------------------------------

function option(args: string[], name: string, fallback: string): string {
  const index = args.indexOf(`--${name}`);
  return index === -1 ? fallback : args[index + 1];
}

function parsePalette(value: string | undefined): string[] {
  const hexes = (value ?? '').split(/[\s,]+/).filter(Boolean);
  if (hexes.length !== 12) {
    throw new Error('Expected 12 hex colors, separated by commas or spaces');
  }
  return hexes.map(hex => formatHex(parseColor(hex)));
}

const [command, ...args] = process.argv.slice(2);
switch (command) {
  case 'ceilings':
    printCeilings();
    break;
  case 'candidates':
    printCandidates();
    break;
  case 'optimize': {
    const target = option(args, 'target', 'T1');
    if (target !== 'T1' && target !== 'T2') {
      throw new Error('--target must be T1 or T2');
    }
    const noLoss = option(args, 'no-loss', '');
    const options: OptimizeOptions = {
      target,
      hueBudget: Number(option(args, 'hue-budget', '0')),
      driftWeight: Number(option(args, 'drift-weight', '1')),
      noLoss: noLoss === '' ? null : Number(noLoss),
      seed: Number(option(args, 'seed', '1')),
      iterations: Number(option(args, 'iterations', '1000000')),
    };
    evaluate(`optimize ${JSON.stringify(options)}`, optimize(options));
    break;
  }
  case 'reorder': {
    const hexes = parsePalette(args[0]);
    const order = reorder(hexes, args.includes('--grouped'));
    console.log(`order: ${order.map(i => `${i + 1} ${NAMES[i]}`).join(', ')}`);
    console.log(`moved: ${order.filter((entry, i) => entry !== i).length} of ${order.length}`);
    console.log(
      `margin score: ${fixed(marginScore(prefixGrid(hexes)))} -> ${fixed(marginScore(prefixGrid(order.map(i => hexes[i]))))}`,
    );
    console.log(order.map(i => hexes[i]).join(','));
    break;
  }
  case 'evaluate':
    evaluate('evaluate', parsePalette(args[0]));
    break;
  default:
    console.log(
      'usage: node --no-warnings scripts/palette-research.mts <ceilings | candidates | optimize | reorder <hexes> | evaluate <hexes>>',
    );
    console.log(
      'optimize options: --target T1|T2 --hue-budget <deg> --drift-weight <w> --no-loss <fraction> --seed <n> --iterations <n>',
    );
}
