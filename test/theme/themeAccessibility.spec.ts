import { darkTheme } from '../../src/theme/darkTheme';
import { emptyTheme } from '../../src/theme/emptyTheme';
import { lightTheme } from '../../src/theme/lightTheme';
import { GraphicalItemStyle, RechartsTheme } from '../../src/theme/RechartsTheme';
import {
  blendOver,
  ColorVisionDeficiency,
  contrastRatio,
  parseColor,
  perceptualDistance,
  Rgb,
  simulateColorVisionDeficiency,
} from '../helper/a11y/color';

/*
 * Accessibility checks for the colour tokens that Recharts ships.
 *
 * These run in plain jsdom because they never look at a rendered chart: they
 * only read the theme objects. That makes them the cheapest and most direct
 * place to catch a palette regression, since a bad token here is wrong in every
 * chart at once. Checks that need real layout, such as whether two tick labels
 * overlap, cannot live here at all, because jsdom gives SVG text no dimensions
 * and does not implement getBBox.
 */

type ThemeName = 'light' | 'dark';

/**
 * The colour carrying properties shared by the various style shapes in a theme.
 *
 * The theme types make `stroke` required on some shapes and optional on others,
 * which is right for the library but gets in the way here, where every check
 * reads the same three properties off whichever shape it was handed.
 */
type ColorTokens = {
  readonly stroke?: string;
  readonly fill?: string;
  readonly fillOpacity?: number | string;
};

/**
 * The colour a chart is painted on top of.
 *
 * Recharts does not paint a chart background itself, so strictly speaking this
 * is a property of the host page rather than of the theme. Each theme is
 * nonetheless designed for one, and states it indirectly through the background
 * it gives the Tooltip and Legend surfaces. The test below keeps these two in
 * step so this assumption cannot quietly go stale.
 */
const CHART_BACKGROUND: Record<ThemeName, string> = {
  light: '#fff',
  dark: '#18181b',
};

const THEMES: Record<ThemeName, RechartsTheme> = {
  light: lightTheme,
  dark: darkTheme,
};

const THEME_NAMES = Object.keys(THEMES) as ReadonlyArray<ThemeName>;

/**
 * The contrast WCAG 2.2 asks for between normal-sized text and its background.
 * @see {@link https://www.w3.org/TR/WCAG22/#contrast-minimum}
 */
const WCAG_TEXT_CONTRAST = 4.5;

/**
 * The contrast WCAG 2.2 asks for between its background and either a user
 * interface component or a "graphical object required to understand the
 * content", which is what a bar, a line or an axis is.
 * @see {@link https://www.w3.org/TR/WCAG22/#non-text-contrast}
 */
const WCAG_NON_TEXT_CONTRAST = 3;

/**
 * A CIEDE2000 difference of roughly 1 is the smallest a person can notice under
 * ideal conditions. Two series colours closer together than this threshold are
 * for practical purposes the same colour, and the chart stops being readable
 * however good the legend is.
 */
const INDISTINGUISHABLE = 2;

/**
 * How far apart the series colours should be for a reader with typical colour
 * vision. This is far above the threshold of noticing, because series colours
 * have to be told apart at a glance, across a chart, in small marks such as a
 * one pixel line or a scatter dot.
 */
const COMFORTABLY_DISTINCT = 10;

/**
 * Narrow a value read off a theme to a colour, failing loudly rather than
 * silently skipping the check if the shape of the theme ever changes.
 * @param value The value read from the theme.
 * @param description What was being read, for the error message.
 * @returns The parsed colour.
 */
function requireColor(value: unknown, description: string): Rgb {
  if (typeof value !== 'string') {
    return expect.unreachable(`Expected ${description} to be a color string but found ${JSON.stringify(value)}`);
  }
  return parseColor(value);
}

/**
 * Read an opacity off a theme, defaulting to fully opaque.
 * @param value The `fillOpacity` or `strokeOpacity` from the theme.
 * @returns The opacity as a number between 0 and 1.
 */
function toOpacity(value: number | string | undefined): number {
  if (value == null) {
    return 1;
  }
  return typeof value === 'number' ? value : Number(value);
}

/**
 * The colour a filled shape actually ends up as once its `fillOpacity` has been
 * composited over the background. Comparing the raw `fill` against the
 * background instead would describe a colour that never reaches the screen.
 * @param style The style to read `fill` and `fillOpacity` from.
 * @param background The opaque colour behind the shape.
 * @param description What is being read, for the error message.
 * @returns The opaque colour as painted.
 */
function paintedFill(style: ColorTokens, background: Rgb, description: string): Rgb {
  return blendOver(requireColor(style.fill, `${description}.fill`), toOpacity(style.fillOpacity), background);
}

/**
 * The series colours of a theme, as painted on that theme's background.
 * @param theme The theme to read.
 * @param background The opaque colour behind the chart.
 * @returns One opaque colour per entry in `graphicalItems`.
 */
function paintedSeriesColors(theme: RechartsTheme, background: Rgb): ReadonlyArray<Rgb> {
  return theme.graphicalItems.map((item, index) => paintedFill(item, background, `graphicalItems[${index}]`));
}

/**
 * The closest pair of colours in a list, as seen with the given vision.
 * @param colors The colours to compare, already composited onto the background.
 * @param vision Whose vision to simulate, or 'normal' for typical colour vision.
 * @returns The smallest CIEDE2000 difference and the indices of the pair.
 */
function closestPair(
  colors: ReadonlyArray<Rgb>,
  vision: ColorVisionDeficiency | 'normal',
): { distance: number; first: number; second: number } {
  const seen = colors.map(color => (vision === 'normal' ? color : simulateColorVisionDeficiency(color, vision)));
  let closest = { distance: Infinity, first: -1, second: -1 };
  for (let i = 0; i < seen.length; i++) {
    for (let j = i + 1; j < seen.length; j++) {
      const distance = perceptualDistance(seen[i], seen[j]);
      if (distance < closest.distance) {
        closest = { distance, first: i, second: j };
      }
    }
  }
  return closest;
}

/*
 * Strokes that carry meaning: the reader has to be able to find the axis, see
 * how far an error bar reaches, and see where the brush sits. These are the
 * strokes WCAG 1.4.11 covers.
 *
 * Deliberately absent are `grid`, `cursor`, `reference` and `barBackground`.
 * Those are decorative backdrops that sit behind the data rather than carrying
 * it, and WCAG exempts decoration from the non-text contrast requirement. They
 * are low contrast on purpose, so that they stay out of the way of the data,
 * and their numbers are in the snapshot report at the bottom of this file
 * rather than under an assertion.
 */
const MEANINGFUL_STROKES = ['axis', 'errorBar', 'brush'] as const;

describe.each(THEME_NAMES)('%s theme', themeName => {
  const theme = THEMES[themeName];
  const background = parseColor(CHART_BACKGROUND[themeName]);

  test('the background this test assumes is the one the theme gives its own surfaces', () => {
    expect(requireColor(theme.tooltip?.contentStyle?.backgroundColor, 'tooltip.contentStyle')).toEqual(background);
    expect(requireColor(theme.legend?.wrapperStyle?.backgroundColor, 'legend.wrapperStyle')).toEqual(background);
  });

  test('text is legible on the chart background', () => {
    const text = requireColor(theme.typography?.color, 'typography.color');
    expect(contrastRatio(text, background)).toBeGreaterThanOrEqual(WCAG_TEXT_CONTRAST);
  });

  test.each(MEANINGFUL_STROKES)('the %s stroke is visible against the background', key => {
    const style: ColorTokens | undefined = theme[key];
    const stroke = requireColor(style?.stroke, `${key}.stroke`);
    expect(contrastRatio(stroke, background)).toBeGreaterThanOrEqual(WCAG_NON_TEXT_CONTRAST);
  });

  test('every series colour is distinguishable from every other one in typical vision', () => {
    const closest = closestPair(paintedSeriesColors(theme, background), 'normal');
    expect(closest.distance).toBeGreaterThanOrEqual(COMFORTABLY_DISTINCT);
  });

  test.each(['protanopia', 'deuteranopia', 'tritanopia'] as const)(
    'no two series colours collapse into one another under %s',
    deficiency => {
      const colors = paintedSeriesColors(theme, background);
      const closest = closestPair(colors, deficiency);
      const label = `${theme.graphicalItems[closest.first]?.fill} and ${theme.graphicalItems[closest.second]?.fill}`;
      expect(closest.distance, `${label} are too close together under ${deficiency}`).toBeGreaterThanOrEqual(
        INDISTINGUISHABLE,
      );
    },
  );
});

/*
 * Both themes hold every series colour to the full WCAG 1.4.11 requirement,
 * as a stroke and as a fill composited at the theme's `fillOpacity`. The floor
 * is kept per theme so that a future theme can document a deliberate gap here,
 * with the exact numbers in the snapshot at the bottom of this file.
 */
const SERIES_CONTRAST_FLOOR: Record<ThemeName, number> = {
  light: WCAG_NON_TEXT_CONTRAST,
  dark: WCAG_NON_TEXT_CONTRAST,
};

describe('series colour contrast against the chart background', () => {
  test.each(THEME_NAMES)('the %s theme is held to the full WCAG 1.4.11 requirement', themeName => {
    expect(SERIES_CONTRAST_FLOOR[themeName]).toBeGreaterThanOrEqual(WCAG_NON_TEXT_CONTRAST);
  });

  describe.each(THEME_NAMES)('%s theme', themeName => {
    const theme = THEMES[themeName];
    const background = parseColor(CHART_BACKGROUND[themeName]);
    const floor = SERIES_CONTRAST_FLOOR[themeName];

    const entries: ReadonlyArray<[string, GraphicalItemStyle]> = theme.graphicalItems.map((item, index) => [
      `graphicalItems[${index}] ${item.fill}`,
      item,
    ]);

    test.each(entries)('%s is visible as a filled shape', (description, item) => {
      expect(contrastRatio(paintedFill(item, background, description), background)).toBeGreaterThanOrEqual(floor);
    });

    test.each(entries)('%s is visible as a line', (description, item) => {
      const stroke = requireColor(item.stroke, `${description}.stroke`);
      expect(contrastRatio(stroke, background)).toBeGreaterThanOrEqual(floor);
    });
  });
});

describe('emptyTheme', () => {
  /*
   * emptyTheme exists to hand every decision back to the browser, so it has no
   * colours to check. If somebody ever adds one, this test fails and asks for
   * the new colour to be brought under the checks above.
   */
  test('declares no colours, so there is nothing to check', () => {
    expect(emptyTheme).toEqual({ graphicalItems: [{}] });
  });
});

/**
 * Render every number these checks are built on as a readable table.
 *
 * The assertions above are deliberately narrow: they only cover the things that
 * should never regress. This report covers everything, including the tokens
 * that are intentionally low contrast and the exact size of the light theme's
 * gap, so that a change to any colour token turns into a reviewable diff
 * instead of passing unnoticed.
 * @param themeName Which theme to report on.
 * @returns The report, one measurement per line.
 */
function accessibilityReport(themeName: ThemeName): string {
  const theme = THEMES[themeName];
  const background = parseColor(CHART_BACKGROUND[themeName]);
  const lines: string[] = [`${themeName} theme on ${CHART_BACKGROUND[themeName]}`, ''];

  const ratio = (value: number) => value.toFixed(2).padStart(6);

  lines.push(`text                 ${ratio(contrastRatio(requireColor(theme.typography?.color, 'text'), background))}`);

  lines.push('', 'strokes and fills');
  const styleKeys = ['axis', 'errorBar', 'brush', 'grid', 'reference', 'cursor', 'barBackground'] as const;
  for (const key of styleKeys) {
    const style: ColorTokens | undefined = theme[key];
    if (style?.stroke != null) {
      lines.push(`${`  ${key}.stroke`.padEnd(24)}${ratio(contrastRatio(parseColor(style.stroke), background))}`);
    }
    if (style?.fill != null && style.fill !== 'none') {
      const painted = paintedFill(style, background, key);
      lines.push(`${`  ${key}.fill`.padEnd(24)}${ratio(contrastRatio(painted, background))}`);
    }
  }

  lines.push('', 'series colours');
  theme.graphicalItems.forEach((item, index) => {
    const fill = ratio(contrastRatio(paintedFill(item, background, `graphicalItems[${index}]`), background));
    const stroke = ratio(contrastRatio(requireColor(item.stroke, 'stroke'), background));
    lines.push(`${`  ${item.fill}`.padEnd(14)}fill ${fill}   stroke ${stroke}`);
  });

  lines.push('', 'closest pair of series colours');
  const colors = paintedSeriesColors(theme, background);
  for (const vision of ['normal', 'protanopia', 'deuteranopia', 'tritanopia'] as const) {
    const closest = closestPair(colors, vision);
    const pair = `${theme.graphicalItems[closest.first]?.fill} / ${theme.graphicalItems[closest.second]?.fill}`;
    lines.push(`${`  ${vision}`.padEnd(16)}${closest.distance.toFixed(1).padStart(5)}   ${pair}`);
  }

  return lines.join('\n');
}

describe('the numbers behind these checks', () => {
  test.each(THEME_NAMES)('%s theme report', themeName => {
    expect(accessibilityReport(themeName)).toMatchSnapshot();
  });
});
