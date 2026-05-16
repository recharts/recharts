import { ChartExample } from '../types.ts';
import PrahaMetro from '../../../components/GuideView/ZIndex/PrahaMetro';
import prahaMetroSource from '../../../components/GuideView/ZIndex/PrahaMetro?raw';
import ShadowDomExample from './ShadowDomExample';
import shadowDomExampleSource from './ShadowDomExample?raw';

export const zIndexLayerExamples = {
  PrahaMetro: {
    Component: PrahaMetro,
    sourceCode: prahaMetroSource,
    name: 'Using Z-Index to Layer Elements',
  },
  ShadowDomExample: {
    Component: ShadowDomExample,
    sourceCode: shadowDomExampleSource,
    name: 'Rendering into Shadow DOM',
    description: 'Renders chart into a shadow DOM.',
  },
} satisfies Record<string, ChartExample>;
