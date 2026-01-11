import { ChartExample } from '../../exampleComponents/types';
import PrahaMetro from '../../../components/GuideView/ZIndex/PrahaMetro';
import prahaMetroSource from '../../../components/GuideView/ZIndex/PrahaMetro?raw';

export const defaultZIndexesApiExamples: ReadonlyArray<ChartExample> = [
  {
    Component: PrahaMetro,
    sourceCode: prahaMetroSource,
    name: 'Using Z-Index to Layer Elements',
  },
];
