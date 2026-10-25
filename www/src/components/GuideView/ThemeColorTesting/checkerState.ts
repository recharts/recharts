import { darkTheme, lightTheme, type RechartsTheme } from 'recharts';
import {
  analyzeTheme,
  type CheckId,
  type CheckResult,
  type Fix,
  type ThemeReport,
  parseColor,
  type ThemeCheckOptions,
  WCAG_CONTRAST,
} from '@recharts/devtools/theme';

export type PresetName = 'lightTheme' | 'darkTheme';

export const PRESETS: Readonly<Record<PresetName, RechartsTheme>> = { lightTheme, darkTheme };

/**
 * What the visitor can edit. `toTheme` turns it into a real `RechartsTheme`, which is what the checks,
 * the preview charts and the generated unit test all use.
 */
export type CheckerState = {
  preset: PresetName;
  series: ReadonlyArray<string>;
  fillOpacity: number;
  pageBackground: string;
  labelColor: string;
  /** Whether the charts show labels, so whether the label color matters. */
  labels: boolean;
  /** Whether series touch each other without a border, like pie slices: then they need 3:1 between them. */
  seriesTouch: boolean;
  severity: number;
  seriesDifference: number;
  seriesDifferenceCvd: number;
};

/**
 * Recharts' own requirements for series differences, from test/theme/themeAccessibility.spec.ts.
 * They are project choices, not standards.
 */
export const RECHARTS_SERIES_DIFFERENCE = 10;
export const RECHARTS_SERIES_DIFFERENCE_CVD = 2;

export function stateFromPreset(preset: PresetName): CheckerState {
  const theme = PRESETS[preset];
  const fillOpacity = theme.graphicalItems[0]?.fillOpacity;
  const labelColor = theme.typography?.color;
  return {
    preset,
    series: theme.graphicalItems.map(item => item.fill ?? item.stroke ?? '#000000'),
    fillOpacity: typeof fillOpacity === 'number' ? fillOpacity : 1,
    pageBackground: theme.pageBackground ?? '#ffffff',
    labelColor: typeof labelColor === 'string' ? labelColor : '#000000',
    labels: true,
    seriesTouch: false,
    severity: 1,
    seriesDifference: RECHARTS_SERIES_DIFFERENCE,
    seriesDifferenceCvd: RECHARTS_SERIES_DIFFERENCE_CVD,
  };
}

export function isValidColor(color: string): boolean {
  try {
    parseColor(color);
    return true;
  } catch {
    return false;
  }
}

/** The edited theme: the preset, with the colors from the editor. */
export function toTheme(state: CheckerState): RechartsTheme {
  const base = PRESETS[state.preset];
  return {
    ...base,
    pageBackground: state.pageBackground,
    typography: { ...base.typography, color: state.labelColor },
    graphicalItems: state.series.map(color => ({
      fill: color,
      stroke: color,
      fillOpacity: state.fillOpacity,
      active: { fill: state.pageBackground, stroke: color, strokeWidth: 2 },
    })),
  };
}

export function toOptions(state: CheckerState): ThemeCheckOptions {
  return {
    severity: state.severity,
    thresholds: {
      seriesDifference: state.seriesDifference,
      seriesDifferenceCvd: state.seriesDifferenceCvd,
      seriesContrast: state.seriesTouch ? WCAG_CONTRAST.nonText : null,
    },
    checks: state.labels ? {} : { textOnBackground: false, textOnSeries: false },
  };
}

/** A unit test that checks the edited theme exactly the way this page does. */
export function testSnippet(state: CheckerState): string {
  const options = toOptions(state);
  const items = state.series
    .map(color => `    { fill: '${color}', stroke: '${color}', fillOpacity: ${state.fillOpacity} },`)
    .join('\n');
  const thresholds = [
    `seriesDifference: ${state.seriesDifference}`,
    `seriesDifferenceCvd: ${state.seriesDifferenceCvd}`,
    ...(state.seriesTouch ? [`seriesContrast: ${WCAG_CONTRAST.nonText}`] : []),
  ].join(', ');
  const checks = state.labels ? '' : `\n    checks: { textOnBackground: false, textOnSeries: false },`;
  return `import { ${state.preset}, type RechartsTheme } from 'recharts';
import { analyzeTheme, themeFailures } from '@recharts/devtools/theme';

// In your project, import your own theme instead.
const myTheme: RechartsTheme = {
  ...${state.preset},
  pageBackground: '${state.pageBackground}',
  typography: { ...${state.preset}.typography, color: '${state.labelColor}' },
  graphicalItems: [
${items}
  ],
};

test('my theme is readable', () => {
  const report = analyzeTheme(myTheme, {
    severity: ${options.severity},
    thresholds: { ${thresholds} },${checks}
  });
  expect(themeFailures(report)).toEqual([]);
});
`;
}

/**
 * Checks whose suggested color can't be applied to the theme as a whole:
 * - `textOnSeries` suggests a label color for one series, but a theme has one label color for all of them.
 */
const NOT_APPLICABLE: ReadonlyArray<CheckId> = ['textOnSeries'];

/**
 * The checks "Apply all" takes fixes from, in the order it prefers them when several want to change the same
 * color: WCAG checks first. It leaves out `textOnSeries`, which has no theme-wide fix, and `seriesContrast`,
 * which can't pass with more than three series, so chasing it would only move colors around.
 */
const BULK_PRIORITY: ReadonlyArray<CheckId> = [
  'seriesOnBackground',
  'textOnBackground',
  'seriesAsText',
  'seriesVsSeries',
];

/** How many rounds "Apply all" runs before it gives up on checks that keep undoing each other. */
const MAX_ROUNDS = 20;

export function canApply(result: CheckResult): boolean {
  return result.fix != null && !NOT_APPLICABLE.includes(result.check);
}

/**
 * Changes one color of the theme. The editor keeps one color per series for both fill and stroke,
 * so a fix for either changes the series color.
 */
export function applyFix(state: CheckerState, fix: Fix): CheckerState {
  if (fix.target === 'text') {
    return { ...state, labelColor: fix.to };
  }
  return { ...state, series: state.series.map((color, i) => (i === fix.series ? fix.to : color)) };
}

export type ApplyAllResult = {
  state: CheckerState;
  /** How many colors ended up different from before. */
  changedColors: number;
};

/**
 * Applies the suggested fixes round by round: one fix per color per round, then checks again.
 * A fix only promises to pass its own check, and fixes can undo each other, for example darkening a series for
 * label contrast can bring it too close to another series. So every round is scored by how many checks fail,
 * and the best round wins, never a state worse than the start.
 */
export function applyAllFixes(initial: CheckerState): ApplyAllResult {
  const options = toOptions(initial);
  // seriesContrast fixes are never applied in bulk, so don't spend time searching for them.
  const bulkOptions: ThemeCheckOptions = { ...options, checks: { ...options.checks, seriesContrast: false } };
  const analyze = (state: CheckerState) => analyzeTheme(toTheme(state), bulkOptions);
  const failures = (report: ThemeReport) => report.checks.filter(c => c.passes === false).length;

  let state = initial;
  let report = analyze(state);
  let best = { state, failures: failures(report) };
  for (let round = 0; round < MAX_ROUNDS && best.failures > 0; round++) {
    const byColor = new Map<string, Fix>();
    for (const check of BULK_PRIORITY) {
      for (const result of report.checks) {
        if (result.check !== check || result.passes !== false || result.fix == null) {
          continue;
        }
        const key = result.fix.target === 'text' ? 'text' : `series ${result.fix.series}`;
        if (!byColor.has(key)) {
          byColor.set(key, result.fix);
        }
      }
    }
    const next = [...byColor.values()].reduce(applyFix, state);
    if (byColor.size === 0 || JSON.stringify(next) === JSON.stringify(state)) {
      break;
    }
    state = next;
    report = analyze(state);
    const count = failures(report);
    if (count < best.failures) {
      best = { state, failures: count };
    }
  }
  const changedColors =
    best.state.series.filter((color, i) => color !== initial.series[i]).length +
    (best.state.labelColor === initial.labelColor ? 0 : 1);
  return { state: best.state, changedColors };
}
