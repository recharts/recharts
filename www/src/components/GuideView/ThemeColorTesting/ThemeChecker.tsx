import { useCallback, useDeferredValue, useMemo, useState } from 'react';
import { analyzeTheme, type Fix, type Vision } from '@recharts/devtools/theme';
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

function problemWith(state: CheckerState): string | null {
  if (state.series.length === 0) {
    return 'Add at least one series.';
  }
  const invalid = [...state.series, state.pageBackground, state.labelColor].find(color => !isValidColor(color));
  return invalid == null ? null : `"${invalid}" is not a color.`;
}

export default function ThemeChecker() {
  const [state, setState] = useState<CheckerState>(() => stateFromPreset('lightTheme'));
  const [vision, setVision] = useState<Vision>('normal');
  // The colors before the last Apply, and what the last Apply did. Editing by hand clears both.
  const [undo, setUndo] = useState<{ before: CheckerState; message: string } | null>(null);
  // The analysis can take a moment with many failing pairs; keep typing responsive meanwhile.
  const deferredState = useDeferredValue(state);

  const problem = problemWith(deferredState);
  const theme = useMemo(() => toTheme(deferredState), [deferredState]);
  const report = useMemo(
    () => (problem == null ? analyzeTheme(theme, toOptions(deferredState)) : null),
    [theme, deferredState, problem],
  );

  const edit = useCallback((next: CheckerState) => {
    setState(next);
    setUndo(null);
  }, []);
  const handleApplyFix = useCallback(
    (fix: Fix) => {
      setUndo({ before: state, message: `Applied ${fix.to}.` });
      setState(applyFix(state, fix));
    },
    [state],
  );
  const handleApplyAll = useCallback(() => {
    const failing = (s: CheckerState) =>
      analyzeTheme(toTheme(s), toOptions(s)).checks.filter(c => c.passes === false).length;
    const { state: next, changedColors } = applyAllFixes(state);
    const message =
      changedColors === 0
        ? 'No suggestion could be applied without making other checks worse.'
        : `Changed ${changedColors} ${changedColors === 1 ? 'color' : 'colors'}. Failing checks went from ${failing(state)} to ${failing(next)}.`;
    setUndo({ before: state, message });
    setState(next);
  }, [state]);
  const handleUndo = useCallback(() => {
    if (undo != null) {
      setState(undo.before);
      setUndo(null);
    }
  }, [undo]);

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
            onUndo={undo == null ? null : handleUndo}
            applyMessage={undo?.message ?? null}
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
