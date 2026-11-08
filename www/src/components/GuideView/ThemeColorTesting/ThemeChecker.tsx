import { useCallback, useDeferredValue, useMemo, useState } from 'react';
import { analyzeTheme, type Fix, type ThemeReport, type Vision } from '@recharts/devtools/theme';
import { SourceCodeEditor } from '../../Playground/SourceCodeEditor.tsx';
import {
  applyAllFixes,
  applyFix,
  type CheckerState,
  isValidColor,
  stateFromPreset,
  testSnippet,
  toOptions,
  toTheme,
} from './checkerState.ts';
import ThemeEditor from './ThemeEditor.tsx';
import ThemeResults from './ThemeResults.tsx';
import SimulatedCharts from './SimulatedCharts.tsx';
import styles from './themeChecker.module.css';
import { useColorMode } from '../../color-mode';

function countFailing(report: ThemeReport): number {
  return report.checks.filter(c => c.passes === false).length;
}

/** What the last Apply did, so it can be undone and described. */
type LastApply =
  | { kind: 'one'; before: CheckerState; color: string }
  | { kind: 'all'; before: CheckerState; after: CheckerState; changedColors: number; failingBefore: number };

function problemWith(state: CheckerState): string | null {
  if (state.series.length === 0) {
    return 'Add at least one series.';
  }
  const invalid = [...state.series, state.pageBackground, state.labelColor].find(color => !isValidColor(color));
  return invalid == null ? null : `"${invalid}" is not a color.`;
}

/**
 * Until the user changes anything, the checker shows the preset that matches the site color mode.
 * The color mode is only known after hydration, so it can't be read once on mount.
 */
function useCheckerState(): [CheckerState, (next: CheckerState) => void] {
  const { mode } = useColorMode();
  const [edited, setEdited] = useState<CheckerState | null>(null);
  const state = useMemo(() => edited ?? stateFromPreset(mode === 'dark' ? 'darkTheme' : 'lightTheme'), [edited, mode]);
  return [state, setEdited];
}

export default function ThemeChecker() {
  const [state, setState] = useCheckerState();
  const [vision, setVision] = useState<Vision>('normal');
  // What the last Apply did, for Undo and its message. Editing by hand clears it.
  const [lastApply, setLastApply] = useState<LastApply | null>(null);
  // The analysis can take a moment with many failing pairs; keep typing responsive meanwhile.
  const deferredState = useDeferredValue(state);

  const problem = problemWith(deferredState);
  const theme = useMemo(() => toTheme(deferredState), [deferredState]);
  const report = useMemo(
    () => (problem == null ? analyzeTheme(theme, toOptions(deferredState)) : null),
    [theme, deferredState, problem],
  );

  const edit = useCallback(
    (next: CheckerState) => {
      setState(next);
      setLastApply(null);
    },
    [setState],
  );
  const handleApplyFix = useCallback(
    (fix: Fix) => {
      setLastApply({ kind: 'one', before: state, color: fix.to });
      setState(applyFix(state, fix));
    },
    [state, setState],
  );
  const handleApplyAll = useCallback(() => {
    // The report on screen is usually for this state already; analyze again only when it lags behind.
    const failingBefore =
      report != null && deferredState === state
        ? countFailing(report)
        : countFailing(analyzeTheme(toTheme(state), toOptions(state)));
    const { state: next, changedColors } = applyAllFixes(state);
    setLastApply({ kind: 'all', before: state, after: next, changedColors, failingBefore });
    setState(next);
  }, [report, deferredState, state, setState]);
  const handleUndo = useCallback(() => {
    if (lastApply != null) {
      setState(lastApply.before);
      setLastApply(null);
    }
  }, [lastApply, setState]);

  let applyMessage: string | null = null;
  if (lastApply?.kind === 'one') {
    applyMessage = `Applied ${lastApply.color}.`;
  } else if (lastApply?.kind === 'all') {
    if (lastApply.changedColors === 0) {
      applyMessage = 'No suggestion could be applied without making other checks worse.';
    } else if (report != null && deferredState === lastApply.after) {
      // The failing count after comes from the report the page renders anyway, once it catches up.
      const { changedColors } = lastApply;
      applyMessage = `Changed ${changedColors} ${changedColors === 1 ? 'color' : 'colors'}. Failing checks went from ${lastApply.failingBefore} to ${countFailing(report)}.`;
    }
  }

  return (
    <div className={styles.checker}>
      <ThemeEditor state={state} onChange={edit} />
      {problem != null && <p className={styles.error}>{problem}</p>}
      {report != null && (
        <>
          <ThemeResults
            report={report}
            vision={vision}
            onVisionChange={setVision}
            onApplyFix={handleApplyFix}
            onApplyAll={handleApplyAll}
            onUndo={lastApply == null ? null : handleUndo}
            applyMessage={applyMessage}
          />
          <div className={styles.panel}>
            <h3>The theme in charts</h3>
            <p>
              The same theme, as seen with the vision selected above. Axis ticks, axis titles and legends use the label
              color on the page. The bars carry labels in the label color, and the pie labels use the series colors.
              Hover a chart to see its tooltip.
            </p>
            <SimulatedCharts theme={theme} report={report} vision={vision} />
          </div>
          <div className={styles.panel}>
            <h3>The same checks as a unit test</h3>
            <p>
              <code>analyzeTheme</code> takes your <code>RechartsTheme</code> object as it is. This test rebuilds the
              theme you edited above; in your project, import your own theme instead.
            </p>
            <SourceCodeEditor value={testSnippet(deferredState)} />
          </div>
        </>
      )}
    </div>
  );
}
