import { createContext, useContext, useState } from 'react';
import {
  CRITERIA,
  type CheckId,
  type CheckResult,
  type CriterionId,
  type Fix,
  type Mark,
  type ThemeReport,
  type Vision,
  VISIONS,
} from '@recharts/devtools/theme';
import { canApply } from './checkerState.ts';
import { CHECK_INFO, CHECK_ORDER } from './checkInfo.ts';
import summarize from './summary.ts';
import styles from './themeChecker.module.css';

const VISION_NAMES: Readonly<Record<Vision, string>> = {
  normal: 'Typical vision',
  protanopia: 'Protanopia',
  deuteranopia: 'Deuteranopia',
  tritanopia: 'Tritanopia',
};

const VISION_OPTIONS = VISIONS.map(v => ({ value: v, title: VISION_NAMES[v] }));

const METRIC_OPTIONS = [
  { value: 'seriesVsSeries', title: 'CIEDE2000 difference' },
  { value: 'seriesContrast', title: 'WCAG contrast' },
] as const;

const MARK_OPTIONS = [
  { value: 'fill', title: 'Fills' },
  { value: 'stroke', title: 'Strokes' },
] as const;

/** How many concrete fixes to list for one check before summarizing the rest. */
const MAX_FIXES = 8;

/** "wcag-1.4.11" becomes "WCAG SC 1.4.11". */
const shortName = (id: CriterionId) => (id.startsWith('wcag-') ? `WCAG SC ${id.slice('wcag-'.length)}` : 'CIEDE2000');

const isDifference = (check: CheckId) => check === 'seriesVsSeries';

function formatValue(check: CheckId, value: number): string {
  return isDifference(check) ? value.toFixed(1) : `${value.toFixed(2)}:1`;
}

function formatThreshold(check: CheckId, threshold: number | null): string {
  if (threshold == null) {
    return 'no threshold';
  }
  return isDifference(check) ? `ΔE00 ${threshold} or more` : `${threshold}:1 or more`;
}

/** How far a failed result is from its threshold, like "0.16 short". */
function shortfall(result: CheckResult): string | null {
  if (result.passes !== false || result.threshold == null) {
    return null;
  }
  return `${(result.threshold - result.value).toFixed(isDifference(result.check) ? 1 : 2)} short`;
}

function Swatch({ color }: { color: string }) {
  return <span className={styles.swatch} style={{ backgroundColor: color }} />;
}

function describeTarget(fix: Fix, mark: Mark | null): string {
  if (fix.target === 'text') {
    return 'label color';
  }
  return `series ${(fix.series ?? 0) + 1}${mark == null ? '' : ` ${mark}`}`;
}

/** Applies one suggested color to the edited theme. */
const ApplyFixContext = createContext<(fix: Fix) => void>(() => {});

function FixSuggestion({ result }: { result: CheckResult }) {
  const applyFix = useContext(ApplyFixContext);
  const { fix } = result;
  if (fix == null) {
    return result.passes === false ? <span className={styles.info}> no lighter or darker color passes</span> : null;
  }
  if (!canApply(result)) {
    // A theme has one label color, so this one can't be applied: it is meant for labels inside one series.
    return (
      <span className={styles.fix}>
        {' '}
        for labels inside this series, use <Swatch color={fix.to} /> <code>{fix.to}</code>
      </span>
    );
  }
  return (
    <span className={styles.fix}>
      {' '}
      try {describeTarget(fix, result.mark)} <Swatch color={fix.to} /> <code>{fix.to}</code>{' '}
      <button
        type="button"
        className={styles.applyButton}
        aria-label={`Apply ${fix.to} to ${describeTarget(fix, null)}`}
        onClick={() => applyFix(fix)}
      >
        Apply
      </button>
    </span>
  );
}

function Verdict({ result, withFix = false }: { result: CheckResult | undefined; withFix?: boolean }) {
  if (result == null) {
    return <span className={styles.info}>–</span>;
  }
  const value = formatValue(result.check, result.value);
  if (result.passes == null) {
    return <span className={styles.info}>{value}</span>;
  }
  if (result.passes) {
    return <span className={styles.pass}>✓ {value}</span>;
  }
  return (
    <>
      <span className={styles.fail}>
        ✗ {value}, {shortfall(result)}
      </span>
      {withFix && <FixSuggestion result={result} />}
    </>
  );
}

function worst(results: ReadonlyArray<CheckResult>): CheckResult | undefined {
  return results.reduce<CheckResult | undefined>(
    (lowest, result) => (lowest == null || result.value < lowest.value ? result : lowest),
    undefined,
  );
}

function Tabs<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: ReadonlyArray<{ value: T; title: string }>;
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div className={styles.tabs} role="group" aria-label={label}>
      {options.map(option => (
        <button
          type="button"
          key={option.value}
          aria-pressed={option.value === value}
          onClick={() => onChange(option.value)}
        >
          {option.title}
        </button>
      ))}
    </div>
  );
}

/** The impact of one failing check, what to do about it, and the colors that would fix it. */
function FailureExplanation({ check, failures }: { check: CheckId; failures: ReadonlyArray<CheckResult> }) {
  const info = CHECK_INFO[check];
  const threshold = failures[0]?.threshold ?? null;
  // One line per color to change: the same fix often repeats across visions.
  const fixes = new Map<string, CheckResult>();
  for (const result of failures) {
    const key =
      result.fix == null ? `none ${result.series.join()}` : `${result.fix.series} ${result.mark} ${result.fix.to}`;
    if (!fixes.has(key)) {
      fixes.set(key, result);
    }
  }
  const listed = [...fixes.values()].slice(0, MAX_FIXES);
  return (
    <div className={styles.failure}>
      <h5>
        <span className={styles.fail}>✗</span> {info.title}: {failures.length} below {formatThreshold(check, threshold)}
      </h5>
      <p>
        <strong>What it means:</strong> {info.impact}
      </p>
      <p>
        <strong>What to do:</strong> {info.action}
      </p>
      <ul>
        {listed.map(result => (
          <li key={`${result.vision} ${result.mark} ${result.series.join()}`}>
            {result.series.length === 0 ? 'Label color' : result.series.map(i => `series ${i + 1}`).join(' and ')}
            {result.mark == null ? '' : ` (${result.mark}s)`}, {VISION_NAMES[result.vision].toLowerCase()}:{' '}
            {formatValue(check, result.value)}, {shortfall(result)}.
            <FixSuggestion result={result} />
          </li>
        ))}
      </ul>
      {fixes.size > listed.length && (
        <p className={styles.info}>And {fixes.size - listed.length} more. Fix these first, then check again.</p>
      )}
    </div>
  );
}

type ThemeResultsProps = {
  report: ThemeReport;
  vision: Vision;
  onVisionChange: (vision: Vision) => void;
  onApplyFix: (fix: Fix) => void;
  onApplyAll: () => void;
  /** Present after colors were applied, to go back to the colors before. */
  onUndo: (() => void) | null;
  /** What the last "Apply all" did, if it was the last change. */
  applyMessage: string | null;
};

export default function ThemeResults({
  report,
  vision,
  onVisionChange,
  onApplyFix,
  onApplyAll,
  onUndo,
  applyMessage,
}: ThemeResultsProps) {
  const [mark, setMark] = useState<Mark>('fill');
  const [metric, setMetric] = useState<'seriesVsSeries' | 'seriesContrast'>('seriesVsSeries');
  const find = (check: CheckId, predicate: (result: CheckResult) => boolean) =>
    report.checks.find(c => c.check === check && c.vision === vision && predicate(c));
  const count = report.series.length;
  const failing = CHECK_ORDER.map(check => ({
    check,
    failures: report.checks.filter(c => c.check === check && c.passes === false),
  })).filter(({ failures }) => failures.length > 0);

  const pairThreshold = metric === 'seriesVsSeries' ? null : report.thresholds.seriesContrast;
  const pairFailures = report.checks.filter(
    c => c.check === metric && c.vision === vision && c.mark === mark && c.passes === false,
  );
  const sentences = summarize(report);
  const failedCount = report.checks.filter(c => c.passes === false).length;
  const anyApplicable = report.checks.some(c => c.passes === false && canApply(c) && c.check !== 'seriesContrast');

  return (
    <ApplyFixContext.Provider value={onApplyFix}>
      <div className={styles.panel}>
        <h3>Results</h3>
        <div className={styles.summary} role="status">
          {sentences.length === 0 ? (
            <p className={styles.verdict}>
              <span className={styles.pass}>✓</span> This theme passes every check.
            </p>
          ) : (
            <>
              <p className={styles.verdict}>
                <span className={styles.fail}>✗</span> {failedCount} {failedCount === 1 ? 'check fails' : 'checks fail'}
                :
              </p>
              <ul>
                {sentences.map(sentence => (
                  <li key={sentence}>{sentence}</li>
                ))}
              </ul>
            </>
          )}
          <div className={styles.row}>
            <button type="button" disabled={!anyApplicable} onClick={onApplyAll}>
              Apply all suggestions
            </button>
            {onUndo != null && (
              <button type="button" onClick={onUndo}>
                Undo
              </button>
            )}
            {applyMessage != null && <span>{applyMessage}</span>}
          </div>
          {anyApplicable && (
            <p className={styles.info}>
              Changes series and label colors to the suggested ones, a few rounds at a time, and keeps the round with
              the fewest failures. Labels inside series and touching series need other fixes, described below.
            </p>
          )}
        </div>
        <p>
          <strong>How to read the numbers.</strong> A contrast ratio runs from 1:1, two identical colors, to 21:1, black
          on white. A ΔE00 color difference is 0 for identical colors and grows as they get easier to tell apart.{' '}
          <span className={styles.pass}>✓</span> means the value meets its threshold,{' '}
          <span className={styles.fail}>✗</span> means it falls short, by how much, and which nearby color would pass. A
          grey value has no threshold and is informational.
        </p>

        <h4>Summary: the worst value of each check</h4>
        <div className={styles.scroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Check</th>
                <th scope="col">Needs</th>
                <th scope="col">Standard</th>
                {report.visions.map(v => (
                  <th scope="col" key={v}>
                    {VISION_NAMES[v]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CHECK_ORDER.map(id => {
                const results = report.checks.filter(c => c.check === id);
                if (results.length === 0) {
                  return null;
                }
                const criterion = CRITERIA[results[0].criterion];
                return (
                  <tr key={id}>
                    <th scope="row">
                      {CHECK_INFO[id].title}
                      <br />
                      <code>{id}</code>
                    </th>
                    <td>{formatThreshold(id, results[0].threshold)}</td>
                    <td>
                      <a href={criterion.url} target="_blank" rel="noopener noreferrer" title={criterion.title}>
                        {shortName(criterion.id)}
                      </a>
                    </td>
                    {report.visions.map(v => {
                      const forVision = results.filter(c => c.vision === v);
                      const failed = forVision.filter(c => c.passes === false).length;
                      return (
                        <td key={v}>
                          <Verdict result={worst(forVision)} />
                          {failed > 0 && <span className={styles.fail}> ({failed} failed)</span>}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h4>What the failures mean and what to change</h4>
        {failing.length === 0 ? (
          <p className={styles.pass}>✓ Every check with a threshold passes.</p>
        ) : (
          failing.map(({ check, failures }) => <FailureExplanation key={check} check={check} failures={failures} />)
        )}
        <p className={styles.info}>
          The suggested colors keep the hue and change only the lightness, as little as possible. Each one fixes the
          check it is listed under, and may affect other checks, so apply them one at a time and look at the results
          again.
        </p>

        <h4>Each series</h4>
        <Tabs label="Vision" options={VISION_OPTIONS} value={vision} onChange={onVisionChange} />
        <div className={styles.scroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Series</th>
                <th scope="col">
                  Fill on the page
                  <br />
                  needs {report.thresholds.nonTextContrast}:1
                </th>
                <th scope="col">
                  Stroke on the page
                  <br />
                  needs {report.thresholds.nonTextContrast}:1
                </th>
                <th scope="col">
                  As label text
                  <br />
                  needs {report.thresholds.textContrast}:1
                </th>
                <th scope="col">
                  Label on the fill
                  <br />
                  needs {report.thresholds.textContrast}:1
                </th>
              </tr>
            </thead>
            <tbody>
              {report.series.map(series => {
                const own = (c: CheckResult) => c.series[0] === series.index;
                const fill = find('seriesOnBackground', c => own(c) && c.mark === 'fill');
                const stroke = find('seriesOnBackground', c => own(c) && c.mark === 'stroke');
                const asText = find('seriesAsText', own);
                const onFill = find('textOnSeries', own);
                return (
                  <tr key={series.index}>
                    <th scope="row">
                      {series.index + 1} <Swatch color={fill?.colors[0] ?? series.fill} /> <code>{series.fill}</code>
                    </th>
                    <td>
                      <Verdict result={fill} withFix />
                    </td>
                    <td>
                      <Verdict result={stroke} withFix />
                    </td>
                    <td>
                      {asText && (
                        <span
                          className={styles.labelSample}
                          style={{ color: asText.colors[0], backgroundColor: asText.colors[1] }}
                        >
                          Label
                        </span>
                      )}{' '}
                      <Verdict result={asText} withFix />
                    </td>
                    <td>
                      {onFill && (
                        <span
                          className={styles.labelSample}
                          style={{ color: onFill.colors[0], backgroundColor: onFill.colors[1] }}
                        >
                          Label
                        </span>
                      )}{' '}
                      <Verdict result={onFill} withFix />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h4>Every pair of series</h4>
        <div className={styles.row}>
          <Tabs label="Measure" options={METRIC_OPTIONS} value={metric} onChange={setMetric} />
          <Tabs label="Mark" options={MARK_OPTIONS} value={mark} onChange={setMark} />
        </div>
        <p>
          {metric === 'seriesVsSeries' ? (
            <>
              Each cell is the CIEDE2000 difference between two series, as seen with{' '}
              {VISION_NAMES[vision].toLowerCase()}. Your requirement is ΔE00{' '}
              {vision === 'normal' ? report.thresholds.seriesDifference : report.thresholds.seriesDifferenceCvd} or
              more. A failing pair may be mixed up by readers: change the lightness or the hue of one of the two, or
              move them apart in the order of the theme.
            </>
          ) : (
            <>
              Each cell is the WCAG contrast ratio between two series, as seen with {VISION_NAMES[vision].toLowerCase()}
              .{' '}
              {pairThreshold == null
                ? 'This is informational: WCAG SC 1.4.11 asks for 3:1 between series only where they touch and nothing else separates them. Turn on "My series touch each other" above to require it.'
                : `Series that touch need ${pairThreshold}:1 between them. A failing pair may look like one shape: give the two a different lightness, or separate them with a border. Contrast ratios multiply along the lightness order, so at most three colors can each be 3:1 from all the others: four would need 27:1, more than the 21:1 maximum. With more series, borders are the practical fix.`}
            </>
          )}
        </p>
        <div className={styles.scroll}>
          <table className={`${styles.table} ${styles.matrix}`}>
            <thead>
              <tr>
                <th scope="col">Series</th>
                {report.series.map(series => (
                  <th scope="col" key={series.index}>
                    {series.index + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {report.series.map(row => (
                <tr key={row.index}>
                  <th scope="row">{row.index + 1}</th>
                  {Array.from({ length: count }, (_, column) => {
                    if (column <= row.index) {
                      return <td key={column} aria-label="Shown above the diagonal" />;
                    }
                    const result = find(
                      metric,
                      c => c.mark === mark && c.series[0] === row.index && c.series[1] === column,
                    );
                    return (
                      <td key={column} title={result ? `${result.colors[0]} / ${result.colors[1]}` : undefined}>
                        {result == null || result.passes == null ? (
                          <Verdict result={result} />
                        ) : (
                          <span className={result.passes ? styles.pass : styles.fail}>
                            {result.passes ? '✓' : '✗'} {formatValue(result.check, result.value)}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {pairFailures.length > 0 && (
          <ul>
            {pairFailures.slice(0, MAX_FIXES).map(result => (
              <li key={result.series.join()}>
                Series {result.series[0] + 1} and {result.series[1] + 1}: {formatValue(result.check, result.value)},{' '}
                {shortfall(result)}.
                <FixSuggestion result={result} />
              </li>
            ))}
            {pairFailures.length > MAX_FIXES && (
              <li className={styles.info}>And {pairFailures.length - MAX_FIXES} more pairs.</li>
            )}
          </ul>
        )}
      </div>
    </ApplyFixContext.Provider>
  );
}
