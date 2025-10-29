import { ChartExample } from '../../exampleComponents/types.ts';
import LabelCartesianPositions from './LabelCartesianPositions.tsx';
import LabelCartesianPositionsSource from './LabelCartesianPositions.tsx?raw';
import LabelPiePositions from './LabelPiePositions.tsx';
import LabelPiePositionsSource from './LabelPiePositions.tsx?raw';
import LabelRadialBarPositions from './LabelRadialBarPositions.tsx';
import LabelRadialBarPositionsSource from './LabelRadialBarPositions.tsx?raw';
import LabelFunnelPositions from './LabelFunnelPositions.tsx';
import LabelFunnelPositionsSource from './LabelFunnelPositions.tsx?raw';
import LabelBarChartExample from './LabelBarChartExample.tsx';
import LabelBarChartExampleSource from './LabelBarChartExample.tsx?raw';
import { localeGet, useLocale } from '../../../utils/LocaleUtils.ts';

export const labelApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: () => {
      const locale = useLocale();
      return (
        <>
          <p style={{ fontSize: 18 }}>{localeGet(locale, 'label', 'cartesian-title')}</p>
          <LabelCartesianPositions />
        </>
      );
    },
    sourceCode: LabelCartesianPositionsSource,
    name: 'Label Cartesian Positions Example',
  },
  {
    Component: () => {
      const locale = useLocale();
      return (
        <>
          <p style={{ fontSize: 18 }}>{localeGet(locale, 'label', 'polar-title')}</p>
          <LabelPiePositions />
        </>
      );
    },
    sourceCode: LabelPiePositionsSource,
    name: 'Label Pie Positions Example',
  },
  {
    Component: () => {
      const locale = useLocale();
      return (
        <>
          <p style={{ fontSize: 18 }}>{localeGet(locale, 'label', 'radialbar-title')}</p>
          <LabelRadialBarPositions />
        </>
      );
    },
    sourceCode: LabelRadialBarPositionsSource,
    name: 'Label Radial Bar Positions Example',
  },
  {
    Component: LabelFunnelPositions,
    sourceCode: LabelFunnelPositionsSource,
    name: 'Label Funnel Positions Example',
  },
  {
    Component: LabelBarChartExample,
    sourceCode: LabelBarChartExampleSource,
    name: 'Label Bar Chart Example',
  },
];
