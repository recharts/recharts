import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen, waitFor, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import { analyzeTheme, themeFailures } from '@recharts/devtools/theme';
import { lightTheme } from 'recharts';
import { ColorModeProvider } from '../../../src/components/color-mode';
import ThemeChecker from '../../../src/components/GuideView/ThemeColorTesting/ThemeChecker';
import summarize from '../../../src/components/GuideView/ThemeColorTesting/summary';
import {
  applyAllFixes,
  applyFix,
  stateFromPreset,
  testSnippet,
  toOptions,
  toTheme,
} from '../../../src/components/GuideView/ThemeColorTesting/checkerState';

afterEach(cleanup);

function renderChecker() {
  return render(
    <ColorModeProvider>
      <ThemeChecker />
    </ColorModeProvider>,
  );
}

describe('checkerState', () => {
  test('starts from lightTheme, with the Recharts thresholds', () => {
    const state = stateFromPreset('lightTheme');
    const theme = toTheme(state);
    expect(theme.graphicalItems).toHaveLength(lightTheme.graphicalItems.length);
    expect(theme.graphicalItems[0]).toEqual(lightTheme.graphicalItems[0]);
    expect(theme.pageBackground).toBe(lightTheme.pageBackground);
    expect(toOptions(state).thresholds).toEqual({
      seriesDifference: 10,
      seriesDifferenceCvd: 2,
      seriesContrast: null,
    });
  });

  test('requires 3:1 between series only when they touch', () => {
    const state = { ...stateFromPreset('lightTheme'), seriesTouch: true };
    expect(toOptions(state).thresholds?.seriesContrast).toBe(3);
  });

  test('the generated unit test builds a RechartsTheme from the preset', () => {
    const snippet = testSnippet({ ...stateFromPreset('darkTheme'), labels: false });
    expect(snippet).toContain("import { darkTheme, type RechartsTheme } from 'recharts';");
    expect(snippet).toContain("import { analyzeTheme, themeFailures } from '@recharts/devtools/theme';");
    expect(snippet).toContain('const myTheme: RechartsTheme = {\n  ...darkTheme,');
    expect(snippet).toContain("{ fill: '#5396ff', stroke: '#5396ff', fillOpacity: 0.85 },");
    expect(snippet).toContain("pageBackground: '#18181b',");
    expect(snippet).toContain('checks: { textOnBackground: false, textOnSeries: false },');
    expect(snippet).toContain('expect(themeFailures(report)).toEqual([]);');
  });

  test('lightTheme meets its own series requirements in typical vision', () => {
    const state = stateFromPreset('lightTheme');
    const report = analyzeTheme(toTheme(state), {
      ...toOptions(state),
      visions: ['normal'],
      checks: { seriesAsText: false, textOnSeries: false },
      marks: ['fill'],
    });
    expect(themeFailures(report)).toEqual([]);
  });
});

describe('applying suggestions', () => {
  test('applyFix changes one series, or the label color', () => {
    const state = stateFromPreset('lightTheme');
    const series = applyFix(state, { target: 'series', series: 2, from: state.series[2], to: '#123456' });
    expect(series.series[2]).toBe('#123456');
    expect(series.series.filter(c => c === '#123456')).toHaveLength(1);
    const text = applyFix(state, { target: 'text', series: null, from: state.labelColor, to: '#000000' });
    expect(text.labelColor).toBe('#000000');
  });

  test('applyAllFixes leaves fewer failing checks, and never more', () => {
    const failing = (state: ReturnType<typeof stateFromPreset>) =>
      analyzeTheme(toTheme(state), toOptions(state)).checks.filter(c => c.passes === false).length;
    for (const preset of ['lightTheme', 'darkTheme'] as const) {
      const before = stateFromPreset(preset);
      const { state: after } = applyAllFixes(before);
      expect(failing(after)).toBeLessThanOrEqual(failing(before));
    }
    const light = stateFromPreset('lightTheme');
    const { state, changedColors } = applyAllFixes(light);
    expect(changedColors).toBeGreaterThan(0);
    expect(failing(state)).toBeLessThan(failing(light));
  });
});

describe('summarize', () => {
  test('puts the failures of lightTheme in plain sentences', () => {
    const state = stateFromPreset('lightTheme');
    expect(summarize(analyzeTheme(toTheme(state), toOptions(state)))).toMatchSnapshot();
  });

  test('is empty when everything passes', () => {
    expect(summarize(analyzeTheme({ graphicalItems: [{ fill: '#000000' }], pageBackground: '#ffffff' }))).toEqual([]);
  });
});

describe('ThemeChecker', () => {
  test('shows the results for lightTheme, with thresholds and standards', () => {
    renderChecker();
    expect(screen.getByRole('heading', { name: 'Results' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Series 1' })).toHaveValue('#2373e6');
    expect(screen.getAllByRole('link', { name: 'WCAG SC 1.4.11' }).length).toBeGreaterThan(0);
    expect(screen.getByRole('columnheader', { name: 'Needs' })).toBeInTheDocument();
  });

  test('explains failures and suggests a color that passes', async () => {
    const user = userEvent.setup();
    renderChecker();
    // The results unmount while the input is briefly not a color, so look the table up every time.
    const row = () => {
      const seriesTable = screen.getByRole('columnheader', { name: /Fill on the page/ }).closest('table');
      if (seriesTable == null) {
        throw new Error('Expected the series table');
      }
      return within(seriesTable).getAllByRole('row')[1];
    };
    expect(row()).toHaveTextContent('✓');

    const input = screen.getByRole('textbox', { name: 'Series 1' });
    await user.clear(input);
    await user.type(input, '#eeeeee');
    // The analysis runs on a deferred copy of the editor state, so it lands a render later.
    await waitFor(() => expect(row()).toHaveTextContent(/✗ 1\.\d\d:1, \d\.\d\d short/));
    expect(row()).toHaveTextContent(/try series 1 fill #[0-9a-f]{6}/);
    expect(screen.getAllByText(/What it means:/).length).toBeGreaterThan(0);
  });

  test('applies one suggestion, all of them, and undoes', async () => {
    const user = userEvent.setup();
    renderChecker();
    const series1 = () => screen.getByRole('textbox', { name: 'Series 1' });
    expect(series1()).toHaveValue('#2373e6');

    const [apply] = screen.getAllByRole('button', { name: /^Apply #[0-9a-f]{6} to series 1$/ });
    await user.click(apply);
    await waitFor(() => expect(series1()).not.toHaveValue('#2373e6'));
    expect(screen.getByText(/^Applied #[0-9a-f]{6}\.$/)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Undo' }));
    expect(series1()).toHaveValue('#2373e6');

    await user.click(screen.getByRole('button', { name: 'Apply all suggestions' }));
    expect(await screen.findByText(/^Changed \d+ colors\. Failing checks went from \d+ to \d+\.$/)).toBeInTheDocument();
  });

  test('explains what is wrong instead of showing results', async () => {
    const user = userEvent.setup();
    renderChecker();
    const input = screen.getByRole('textbox', { name: 'Series 1' });
    await user.clear(input);
    await user.type(input, 'nope');
    expect(await screen.findByText('"nope" is not a color.')).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Results' })).not.toBeInTheDocument();
  });
});
