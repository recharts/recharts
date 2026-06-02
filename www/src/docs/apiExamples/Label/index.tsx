import { ChartExample } from '../../exampleComponents/types.ts';
import { labelExamples } from '../../exampleComponents/Label';
import { localeGet, useLocale } from '../../../utils/LocaleUtils.ts';

export const labelApiExamples: ReadonlyArray<ChartExample> = [
  {
    ...labelExamples.LabelCartesianPositions,
    Component: () => {
      const locale = useLocale();
      const LabelCartesianPositions = labelExamples.LabelCartesianPositions.Component;
      return (
        <>
          <p style={{ fontSize: 18 }}>{localeGet(locale, 'label', 'cartesian-title')}</p>
          <LabelCartesianPositions />
        </>
      );
    },
  },
  {
    ...labelExamples.LabelPiePositions,
    Component: () => {
      const locale = useLocale();
      const LabelPiePositions = labelExamples.LabelPiePositions.Component;
      return (
        <>
          <p style={{ fontSize: 18 }}>{localeGet(locale, 'label', 'polar-title')}</p>
          <LabelPiePositions />
        </>
      );
    },
  },
  {
    ...labelExamples.LabelRadialBarPositions,
    Component: () => {
      const locale = useLocale();
      const LabelRadialBarPositions = labelExamples.LabelRadialBarPositions.Component;
      return (
        <>
          <p style={{ fontSize: 18 }}>{localeGet(locale, 'label', 'radialbar-title')}</p>
          <LabelRadialBarPositions />
        </>
      );
    },
  },
  labelExamples.LabelFunnelPositions,
  labelExamples.LabelBarChartExample,
];
