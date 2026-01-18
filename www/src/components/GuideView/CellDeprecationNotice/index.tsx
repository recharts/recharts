import { LinkToApi } from '../../Shared/LinkToApi.tsx';
import { TargetBlankLink } from '../../Shared/TargetBlankLink.tsx';
import CellPieExample from '../../../docs/apiExamples/Cell/CellPieExample.tsx';
import { CodeEditorWithPreview } from '../../CodeEditorWithPreview.tsx';
import cellPieExampleSource from '../../../docs/apiExamples/Cell/CellPieExample.tsx?raw';
import CellBarExample from '../../../docs/apiExamples/Cell/CellBarExample.tsx';
import cellBarExampleSource from '../../../docs/apiExamples/Cell/CellBarExample.tsx?raw';
import ScatterChartWithCells from '../../../docs/exampleComponents/ScatterChart/ScatterChartWithCells.tsx';
import scatterChartWithCellsSource from '../../../docs/exampleComponents/ScatterChart/ScatterChartWithCells.tsx?raw';
import CustomShapeBarChart from '../../../docs/exampleComponents/BarChart/CustomShapeBarChart.tsx';
import customShapeBarChartSource from '../../../docs/exampleComponents/BarChart/CustomShapeBarChart.tsx?raw';

export function CellDeprecationNotice() {
  return (
    <article>
      <h1>
        <LinkToApi>Cell</LinkToApi> is deprecated and will be removed in Recharts 4.0, please use shape instead
      </h1>
      <p>
        The <strong>Cell</strong> component is deprecated and will be removed in version 4.0. Please avoid using it in
        new projects and consider refactoring existing code to eliminate its usage.
      </p>
      <h2>Why are we doing this?</h2>
      <p>Cell suffers from two problems:</p>
      <ul>
        <li>
          It is the last piece of code that requires react-is. If we got rid of Cell then we can also get rid of
          react-is completely.
        </li>
        <li>
          Cell requires different props depending on context. If it is a child of Bar then it reads Rectangle props. If
          it is a child of Pie then it reads Sector props. This is something that Typescript does not support and we
          cannot type the single component properly.
        </li>
      </ul>
      <p>
        Join us for discussion on{' '}
        <TargetBlankLink href="https://github.com/recharts/recharts/discussions/6734">GitHub</TargetBlankLink>.
      </p>
      <h2>What should I do instead?</h2>
      <p>
        All relevant components should now have a <code>shape</code> or <code>content</code> prop that allows you to
        provide your own component. Inside of that component, set whichever props - static or dynamic - that you wish.
      </p>
      <p>
        If you find that this new approach does not support your use-case, please{' '}
        <TargetBlankLink href="github.com/recharts/recharts/issues">let us know.</TargetBlankLink>
      </p>
      <h2>Examples</h2>
      <p>
        The examples below used to use the Cell component, and now they are all migrated to <code>shape</code> instead.
        Here is the commit with individual code changes where we migrated them:{' '}
        <TargetBlankLink href="https://github.com/recharts/recharts/commit/7b2b6ec7d75d17aa5ea1b11fae843f813ada6cec">
          GitHub commit 7b2b6ec
        </TargetBlankLink>
        .
      </p>
      <CodeEditorWithPreview
        Component={CellPieExample}
        sourceCode={cellPieExampleSource}
        stackBlitzTitle="Pie with shape prop"
      />
      <CodeEditorWithPreview
        Component={CellBarExample}
        sourceCode={cellBarExampleSource}
        stackBlitzTitle="Bar with shape prop"
      />
      <CodeEditorWithPreview
        Component={ScatterChartWithCells}
        sourceCode={scatterChartWithCellsSource}
        stackBlitzTitle="Scatter Chart with shape prop"
      />
      <CodeEditorWithPreview
        Component={CustomShapeBarChart}
        sourceCode={customShapeBarChartSource}
        stackBlitzTitle="Bar Chart with custom shape and custom LabelList"
      />
    </article>
  );
}
