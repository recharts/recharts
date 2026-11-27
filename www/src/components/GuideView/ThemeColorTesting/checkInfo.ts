import type { CheckId } from '@recharts/devtools/theme';

/**
 * What each check means for a reader, and what to change when it fails.
 */
export type CheckInfo = {
  title: string;
  /** What the reader experiences when the check fails. */
  impact: string;
  /** What to change in the theme. */
  action: string;
};

export const CHECK_INFO: Readonly<Record<CheckId, CheckInfo>> = {
  seriesOnBackground: {
    title: 'Series on the page',
    impact:
      'Readers with low vision may not see where a bar, area or line ends, or may miss a thin line or a small dot entirely.',
    action:
      'Make the series color darker on a light page, or lighter on a dark page. A translucent fill counts at its fillOpacity, so raising fillOpacity also helps.',
  },
  seriesVsSeries: {
    title: 'Series against each other (ΔE00)',
    impact:
      'Readers may mix up the two series, or match the wrong legend entry to a series. The smaller the marks, the harder it gets.',
    action:
      'Change the lightness or the hue of one of the two series. If only a few charts show both, reorder the theme so the two series are far apart in it: charts with fewer series then never use them together. Labels, markers or dash patterns help too.',
  },
  seriesContrast: {
    title: 'Series against each other (contrast)',
    impact:
      'Where series touch without a gap, like pie slices or stacked bars, readers with low vision may see one shape instead of two.',
    action:
      'Separate touching series with a border in the page color, or label each part with its value. Changing colors only goes so far: at most three colors can each be 3:1 from all the others, because four would need 27:1, more than the 21:1 maximum.',
  },
  textOnBackground: {
    title: 'Labels on the page',
    impact: 'Axis ticks, legend entries and labels outside the series are hard to read.',
    action: 'Make the label color (typography.color) darker on a light page, or lighter on a dark page.',
  },
  seriesAsText: {
    title: 'Series color as label text',
    impact: 'Labels drawn in the series color, like the default pie chart labels, are hard to read.',
    action:
      'Make the series color darker on a light page, or lighter on a dark page. Or draw those labels in the label color instead of the series color.',
  },
  textOnSeries: {
    title: 'Labels on series fills',
    impact: 'Labels inside bars or pie slices are hard to read on that series.',
    action:
      'Use a different label color for labels inside this series, move the labels outside, or change the series lightness so the label color stands out from it.',
  },
};

/** The order the checks appear in. */
export const CHECK_ORDER: ReadonlyArray<CheckId> = [
  'seriesOnBackground',
  'seriesVsSeries',
  'seriesContrast',
  'textOnBackground',
  'seriesAsText',
  'textOnSeries',
];
