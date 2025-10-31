import { Link } from 'react-router';
import { CodeEditorWithPreview } from '../../CodeEditorWithPreview.tsx';
import BandedChart from '../../../docs/exampleComponents/ComposedChart/BandedChart';
import BandedChartSource from '../../../docs/exampleComponents/ComposedChart/BandedChart.tsx?raw';
import { TargetBlankLink } from '../../Shared/TargetBlankLink.tsx';
import { useLocale } from '../../../utils/LocaleUtils.ts';
import PrahaMetro from './PrahaMetro.tsx';
import PrahaMetroSource from './PrahaMetro.tsx?raw';

export function ZIndex() {
  const locale = useLocale();
  return (
    <article>
      <h1>Z-Index and layers</h1>
      <p>
        <code>zIndex</code> and layers were introduced in version 3.4.
      </p>
      <p>
        Recharts will render your components in a specific order by default. For example, Lines are on top of Areas, and
        Areas are on top of background.
      </p>
      <p>
        You can see the specific defaults in{' '}
        <TargetBlankLink href="https://github.com/recharts/recharts/blob/main/src/zindex/DefaultZIndexes.tsx">
          <code>DefaultZIndexes.tsx</code>
        </TargetBlankLink>
        .
      </p>
      <p>
        Components with the same z-index are rendered in the order they appended to the DOM: later components are on top
        of earlier ones. This is called the &ldquo;painting order&rdquo;, or a &ldquo;painter&apos;s algorithm&rdquo;.
      </p>
      <CodeEditorWithPreview
        Component={BandedChart}
        sourceCode={BandedChartSource}
        stackBlitzTitle="Recharts Banded Chart Example"
      />
      <h2>Custom z-index</h2>
      <p>
        You can pass a number to the <code>zIndex</code> prop in various components:
      </p>
      <p>
        Custom SVG and other Recharts components without direct zIndex support render as if they had zIndex=0. If you
        want to set a custom zIndex, wrap your component in <Link to={`/${locale}/api/ZIndexLayer`}>ZIndexLayer</Link>.
      </p>
      <CodeEditorWithPreview
        Component={PrahaMetro}
        sourceCode={PrahaMetroSource}
        stackBlitzTitle="Recharts Praha Metro Example"
      />
      <h2>Limitations</h2>
      <p>
        SVG does not support z-index directly. Recharts has a custom implementation that at first looks and feels like
        the Real z-index but if you dig long enough you will discover that there are some limitations:
      </p>
      <ul>
        <li>
          z-index only works within a single chart. You cannot have a component in one chart overlap a component in
          another chart using z-index. You can set <code>{'style={{ zIndex: 123 }}'}</code>
          on the chart container itself to have the whole chart overlap another chart. But you cannot have individual
          components overlap across charts.
        </li>
        <li>
          The painter&apos;s algorithm follows DOM insertion order, not JSX order. This means that if you have
          conditional rendering in your JSX, the actual DOM insertion order may not match the visual order you expect.
          If you rely on specific painting order, it&apos;s safer to use explicit <code>zIndex</code> values.
        </li>
      </ul>
    </article>
  );
}
