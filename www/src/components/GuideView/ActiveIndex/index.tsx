import { Link } from 'react-router';
import { SupportedLocale } from '../../../locale';
import { TargetBlankLink } from '../../Shared/TargetBlankLink.tsx';
import { CodeEditorWithPreview } from '../../CodeEditorWithPreview.tsx';
import PieChartDefaultIndex from './PieChartDefaultIndex.tsx';
import PieChartDefaultIndexSource from './PieChartDefaultIndex.tsx?raw';
import BarChartClickable from './BarChartClickable.tsx';
import BarChartClickableSource from './BarChartClickable.tsx?raw';

export function ActiveIndex({ locale }: { locale: SupportedLocale }) {
  return (
    <article>
      <h1>Active Index</h1>
      <p>
        Recharts 2.x used to have a prop named <code>activeIndex</code> that was setting which item the user was
        interacting with. In version 3.0, this prop has been removed.
      </p>
      <h2>Why?</h2>
      <p>
        Trouble is that this prop was already set internally - by Tooltip component. Things behaved weird when both the
        activeIndex and Tooltip were set. Unpredictable!
      </p>
      <h2>What should I do instead?</h2>
      <p>
        <Link to={`/${locale}/api/Tooltip/`}>Tooltip</Link> component is controlling user interaction with the chart.
        Use Tooltip!
      </p>
      <p>Tooltip has several props that allow you to control the interaction in detail:</p>
      <ul>
        <li>
          <code>defaultIndex</code>: Sets the initial index of the item that is highlighted when the chart is rendered,
          before any user interactions
        </li>
        <li>
          <code>active</code>: If true, the tooltip remains active even when the user interaction has completed (for
          example, when user hovers over a different item)
        </li>
        <li>
          <code>content</code>: This prop decides what content is displayed in the tooltip. You can turn off the
          rendering completely by passing <code>{`content={() => null}`}</code>.
        </li>
        <li>
          <code>cursor</code>: Is what renders in the plot area, to draw attention to the item that is being interacted
          with. You can turn it off by passing <code>cursor={false}</code>.
        </li>
      </ul>
      <h2>Example 1: PieChart with default index</h2>
      <p>
        The example below shows how to use the <code>defaultIndex</code> prop to set the initial item that is
        highlighted when the chart is rendered.
      </p>
      <p>
        Also see{' '}
        <TargetBlankLink href="https://github.com/recharts/recharts/issues/5999">
          GitHub issue #5999 for discussion.
        </TargetBlankLink>
      </p>
      <CodeEditorWithPreview
        Component={PieChartDefaultIndex}
        sourceCode={PieChartDefaultIndexSource}
        stackBlitzTitle="Recharts PieChart Default Index Example"
      />
      <p>
        <TargetBlankLink href="https://main--63da8268a0da9970db6992aa.chromatic.com/?path=/story/api-chart-piechart--simple">
          View this example in Storybook
        </TargetBlankLink>
      </p>
      <h2>Example 2: BarChart with clickable items and hidden tooltip</h2>
      <p>
        The example below shows how to use the <code>trigger</code> prop to highlight the item that is being clicked,
        and how to hide the tooltip by passing <code>{`content={() => null}`}</code> and <code>{`cursor={false}`}</code>
        .
      </p>
      <p>
        Also see{' '}
        <TargetBlankLink href="https://github.com/recharts/recharts/issues/6047">
          GitHub issue #6047 for discussion.
        </TargetBlankLink>
      </p>
      <CodeEditorWithPreview
        Component={BarChartClickable}
        sourceCode={BarChartClickableSource}
        stackBlitzTitle="Recharts BarChart Clickable Example"
      />
    </article>
  );
}
