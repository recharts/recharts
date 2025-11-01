import { CodeEditorWithPreview } from '../../CodeEditorWithPreview.tsx';
import MassBarChart from './MassBarChart.tsx';
import MassBarChartSource from './MassBarChart.tsx?raw';
import MassBarChartCategoricalY from './MassBarChartCategoricalY.tsx';
import MassBarChartCategoricalYSource from './MassBarChartCategoricalY.tsx?raw';
import MassBarChartCustomYDomain from './MassBarChartCustomYDomain.tsx';
import MassBarChartCustomYDomainSource from './MassBarChartCustomYDomain.tsx?raw';
import MassBarChartLogScale from './MassBarChartLogScale.tsx';
import MassBarChartLogScaleSource from './MassBarChartLogScale.tsx?raw';
import { TargetBlankLink } from '../../Shared/TargetBlankLink.tsx';
import MassBarChartCustomTicks from './MassBarChartCustomTicks.tsx';
import MassBarChartCustomTicksSource from './MassBarChartCustomTicks.tsx?raw';

export function DomainAndTicks() {
  return (
    <article>
      <h1>What is Axis domain and scale? And the Solar system example</h1>
      <p>
        This guide will explain the concept of axis domain and scale in Recharts. It shows examples of categorical and
        numerical axes, and custom ticks formatting.
      </p>
      <p>Axis domain is a fancy way of saying &ldquo;your data start here and end there&rdquo;.</p>
      <p>
        Let&apos;s show it on an example. Let&apos;s say if your chart is representing all planets in their solar system
        and their orbital distance from the Sun.
      </p>
      <p>Let&apos;s put the data in an array and show on a chart. Now the result is somewhat unsatisfactory:</p>
      <CodeEditorWithPreview
        Component={MassBarChart}
        sourceCode={MassBarChartSource}
        stackBlitzTitle="Recharts Solar System Mass Bar Chart Example"
      />
      <p>
        There are a few things we can observe. First, the XAxis domain is by default categorical and YAxis is numerical.
        What does it mean?
      </p>
      <h2>Category axis</h2>
      <p>
        Categorical axis means that it treats its values as strings. It doesn&apos;t attempt to get values &ldquo;in the
        middle&rdquo; and indeed this is the correct behavior for our chart - it doesn&apos;t make sense to show bars
        for &ldquo;Mercury and a half&ldquo;.
      </p>
      <p>
        Recharts calls this &ldquo;category&rdquo;, other sources will call it &ldquo;discrete&rdquo; and
        &ldquo;ordinal&rdquo; - it all means the same for our chart.
      </p>
      <h2>Number axis</h2>
      <p>
        Numerical axis treats its data as a continuous spectrum. You can see this on the Y Axis - Recharts took the
        liberty to put ticks on &ldquo;1e30&rdquo; even though there is no such record in the data anywhere. You will
        also notice the ticks go beyond of what&apos;s in the data. The maximum mass in Solar system is the Sun - with a
        mass of 1.989e30 kilogram, and yet Recharts put a tick on 2e30. This is the default, or auto behaviour -
        Recharts will try to make a guess and make the axis ticks to look &ldquo;nice&rdquo;. This may or may not be
        what you want - more on this below in the &ldquo;Domain&rdquo; section.
      </p>
      <p>
        Okay so we have a chart that is highly unsatisfactory. All we can see is the Sun mass and nothing else.
        Technically the data is there and you can mouse over it and see it in the tooltip, but the bars are less than
        1px tall and so are invisible. What can we do about it? Let&apos;s explore what options are there.
      </p>
      <h2>Switching between axis type</h2>
      <p>
        First, Recharts has default types but we can change then. If you switch the XAxis to{' '}
        <code>type=&apos;number&apos;</code>, nothing shows up because the data is not numerical (&ldquo;Saturn&rdquo;
        doesn&apos;t convert to a number) and so there is nothing to display.
      </p>
      <p>
        If you switch YAxis to <code>type=&apos;category&apos;</code> you get a different chart:
      </p>
      <CodeEditorWithPreview
        Component={MassBarChartCategoricalY}
        sourceCode={MassBarChartCategoricalYSource}
        stackBlitzTitle="Recharts Solar System Mass Bar Chart Categorical Y Example"
      />
      <p>
        It shows more stuff! Notice how the YAxis changed - it now treats every number as a literal value, independent
        of others. Ticks are not sorted, and not rounded. Sun is not visible because its bar has zero height - the tick
        for 1.989e30 is first at the bottom, where the bars begin.
      </p>
      <p>This may be what you want but Recharts can do better. Enter: custom domains.</p>
      <h2>Custom domain</h2>
      <p>
        Recharts allows you to provide a custom domain, that is: you can tell the axis where it should start and where
        it should end.
      </p>
      <p>
        Let&apos;s start by adding a domain prop like this: <code>{'<YAxis domain={[1e23, 1e25]} />'}</code>. You will
        see that nothing has changed! (Apart from some labels formatting.) That&apos;s because by default, Recharts will
        expand the domain so that it fits all the data.
      </p>
      <p>
        We can turn that off by setting allowDataOverflow to true, like this:{' '}
        <code>{'<YAxis domain={[1e23, 1e25]} allowDataOverflow />'}</code>.
      </p>
      <CodeEditorWithPreview
        Component={MassBarChartCustomYDomain}
        sourceCode={MassBarChartCustomYDomainSource}
        stackBlitzTitle="Recharts Solar System Mass Bar Chart Custom Y Domain Example"
      />
      <p>
        What this does is it will cut off the Sun bar (as it&apos;s &ldquo;off the chart&rdquo;) and it will allow us to
        see the individual planets mass.
      </p>
      <p>Still the rocky planets are way too small to be seen. What else can we do?</p>
      <h2>Custom scale</h2>
      <p>
        The default scale is linear scale. It&apos;s easy to read but it doesn&apos;t allow comparing very small and
        very large values. Logarithmic scale is better for that purpose (but it does require the reader to be careful).
      </p>
      <p>
        Recharts allows to set a custom scale using the <code>scale</code> prop:
      </p>
      <CodeEditorWithPreview
        Component={MassBarChartLogScale}
        sourceCode={MassBarChartLogScaleSource}
        stackBlitzTitle="Recharts Solar System Mass Bar Chart Log Scale Example"
      />
      <p>Note that the log scale has a bug where it requires one to set an explicit domain.</p>
      <p>
        Recharts will also allow to set a scale as a function using one of the d3-scales:{' '}
        <TargetBlankLink href="https://d3js.org/d3-scale">https://d3js.org/d3-scale</TargetBlankLink>
      </p>
      <h2>Ticks formatting</h2>
      <p>
        Now you might or might not prefer the scientific number notation. Recharts will allow you to customize the ticks
        too using tickFormatter. Let&apos;s convert the values to &ldquo;yottagrams&rdquo; like this:
      </p>
      <CodeEditorWithPreview
        Component={MassBarChartCustomTicks}
        sourceCode={MassBarChartCustomTicksSource}
        stackBlitzTitle="Recharts Solar System Mass Bar Chart Custom Ticks Example"
      />
    </article>
  );
}
