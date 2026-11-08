import type { CheckId, CheckResult, ThemeReport } from '@recharts/devtools/theme';
import { CHECK_ORDER } from './checkInfo.ts';

/** "1", "1 and 2", "1, 2 and 3". */
function list(items: ReadonlyArray<string | number>): string {
  if (items.length <= 1) {
    return items.join('');
  }
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

const MAX_PAIRS = 3;

function seriesOf(failures: ReadonlyArray<CheckResult>): string {
  const indexes = [...new Set(failures.flatMap(f => f.series))].sort((a, b) => a - b);
  return `Series ${list(indexes.map(i => i + 1))}`;
}

function pairsOf(failures: ReadonlyArray<CheckResult>): string {
  const pairs = [...new Set(failures.map(f => f.series.map(i => i + 1).join(' and ')))];
  const shown = pairs.slice(0, MAX_PAIRS).map(pair => `series ${pair}`);
  const rest = pairs.length - shown.length;
  return rest > 0 ? `${shown.join(', ')}, and ${rest} more pairs` : list(shown);
}

function verb(failures: ReadonlyArray<CheckResult>): string {
  return new Set(failures.flatMap(f => f.series)).size === 1 ? 'is' : 'are';
}

const SENTENCES: Readonly<Record<CheckId, (failures: ReadonlyArray<CheckResult>) => string>> = {
  seriesOnBackground: failures => `${seriesOf(failures)} ${verb(failures)} hard to see on the page`,
  seriesVsSeries: failures => `These look too alike: ${pairsOf(failures)}`,
  seriesContrast: failures => {
    const pairs = new Set(failures.map(f => f.series.join())).size;
    return `${pairs} ${pairs === 1 ? 'pair' : 'pairs'} of touching series blend together`;
  },
  textOnBackground: () => 'Labels are hard to read on the page',
  seriesAsText: failures => `${seriesOf(failures)} ${verb(failures)} too close to the page color to use for label text`,
  textOnSeries: failures => `Labels are hard to read inside ${seriesOf(failures).toLowerCase()}`,
};

/**
 * The results in a few plain sentences, one per failing check, for readers who skip the tables.
 * A sentence notes when only simulated color vision deficiencies fail.
 */
export default function summarize(report: ThemeReport): string[] {
  return CHECK_ORDER.flatMap(check => {
    const failures = report.checks.filter(c => c.check === check && c.passes === false);
    if (failures.length === 0) {
      return [];
    }
    const onlyCvd = failures.every(f => f.vision !== 'normal');
    return [`${SENTENCES[check](failures)}${onlyCvd ? ', for readers with a color vision deficiency' : ''}.`];
  });
}
