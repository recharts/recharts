import { CodeEditorWithPreview } from '../../CodeEditorWithPreview';
import TimelineExample from '../../../docs/exampleComponents/BarChart/TimelineExample';
import timelineExampleSource from '../../../docs/exampleComponents/BarChart/TimelineExample?raw';
import PopulationPyramidExample from '../../../docs/exampleComponents/BarChart/PopulationPyramidExample';
import populationPyramidExampleSource from '../../../docs/exampleComponents/BarChart/PopulationPyramidExample?raw';
import RangedStackedBarChart from '../../../docs/exampleComponents/BarChart/RangedStackedBarChart';
import rangedStackedBarChartSource from '../../../docs/exampleComponents/BarChart/RangedStackedBarChart?raw';

export function RoundedBars() {
  return (
    <article>
      <h1>Rounded Bar corners</h1>
      <p>Recharts by default renders square bars. There is more than one way to round Bar&apos;s corners.</p>
      <h2>Round all corners</h2>
      <p>
        Pass <code>{'radius={10}'}</code> prop to a Bar to round all corners equally. This creates a uniform rounded
        rectangle. Large radius makes the bars look more like pills.
      </p>
      <CodeEditorWithPreview
        Component={TimelineExample}
        sourceCode={timelineExampleSource}
        stackBlitzTitle="Timeline"
      />
      <h2>Different radius for different corners</h2>
      <p>
        <code>radius</code> prop also accepts an array of four numbers. This way you can define specific radius for each
        corner.
      </p>
      <CodeEditorWithPreview
        Component={PopulationPyramidExample}
        sourceCode={populationPyramidExampleSource}
        stackBlitzTitle="Population pyramid"
      />
      <h2>Round a bar stack</h2>
      <p>In a stacked bar chart, you will run into some complications:</p>
      <ul>
        <li>Some data points may be smaller than the radius</li>
        <li>Some data points may be omitted</li>
      </ul>
      <p>
        To fix these, you may want to use <code>BarStack</code> component. This allows you to set <code>radius</code> of
        the whole stack.
      </p>
      <CodeEditorWithPreview
        Component={RangedStackedBarChart}
        sourceCode={rangedStackedBarChartSource}
        stackBlitzTitle="Ranged stacked Bar chart"
      />
    </article>
  );
}
