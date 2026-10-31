import { CodeEditorWithPreview } from '../../CodeEditorWithPreview';
import { LinkToApi } from '../../Shared/LinkToApi.tsx';
import { RechartsLink } from '../../Shared/RechartsLink.tsx';
import DataStylesBarExample from './DataStylesBarExample';
import dataStylesBarExampleSource from './DataStylesBarExample?raw';
import DataStylesLineDotsExample from './DataStylesLineDotsExample';
import dataStylesLineDotsExampleSource from './DataStylesLineDotsExample?raw';
import DataStylesPrecedenceExample from './DataStylesPrecedenceExample';
import dataStylesPrecedenceExampleSource from './DataStylesPrecedenceExample?raw';

export function DataStyles() {
  return (
    <article>
      <h1>Styling data points</h1>
      <p>
        Most charts draw one shape per data entry: one bar, one pie slice, one scatter point. Instead of styling the
        whole series, you can style each shape by putting SVG props right into the data array.
      </p>
      <CodeEditorWithPreview
        Component={DataStylesBarExample}
        sourceCode={dataStylesBarExampleSource}
        stackBlitzTitle="Styling Bars through the data array"
      />
      <p>
        There is no extra component to add and nothing to configure. If the entry has a <code>fill</code>, that bar is
        drawn with that <code>fill</code>.
      </p>

      <h2>Which components support it</h2>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>The props go on</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <LinkToApi>Bar</LinkToApi>
            </td>
            <td>the bar rectangle</td>
          </tr>
          <tr>
            <td>
              <LinkToApi>RadialBar</LinkToApi>
            </td>
            <td>the sector</td>
          </tr>
          <tr>
            <td>
              <LinkToApi>Pie</LinkToApi>
            </td>
            <td>the slice</td>
          </tr>
          <tr>
            <td>
              <LinkToApi>Funnel</LinkToApi>
            </td>
            <td>the trapezoid</td>
          </tr>
          <tr>
            <td>
              <LinkToApi>Scatter</LinkToApi>
            </td>
            <td>the point symbol</td>
          </tr>
          <tr>
            <td>
              <LinkToApi>Line</LinkToApi>, <LinkToApi>Area</LinkToApi>, <LinkToApi>Radar</LinkToApi>
            </td>
            <td>
              the dot for that entry (the line or area itself is one shape for the whole series, so it is styled with
              props on the component)
            </td>
          </tr>
          <tr>
            <td>
              <LinkToApi>Treemap</LinkToApi>
            </td>
            <td>the node rectangle</td>
          </tr>
          <tr>
            <td>
              <LinkToApi>SunburstChart</LinkToApi>
            </td>
            <td>the sector</td>
          </tr>
          <tr>
            <td>
              <LinkToApi>Sankey</LinkToApi>
            </td>
            <td>
              the node (entries in <code>data.nodes</code>) and the link (entries in <code>data.links</code>)
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Note:</strong> support is being rolled out component by component. If a component from the table does
        not pick up your entry props in the Recharts version you use, it is not released yet.
      </p>

      <h2>What you can put in an entry</h2>
      <p>
        Any valid SVG attribute: <code>fill</code>, <code>stroke</code>, <code>strokeWidth</code>,{' '}
        <code>strokeDasharray</code>, <code>fillOpacity</code>, <code>strokeOpacity</code>, <code>opacity</code>, and so
        on. You can also use <code>className</code>, <code>style</code> and <code>data-*</code> attributes, for example
        to hook up your own CSS or tests.
      </p>
      <p>Keys that are not SVG attributes are ignored, so your entries can carry any other fields your app needs.</p>
      <p>There are two exceptions:</p>
      <ul>
        <li>
          <strong>
            <code>id</code> is always removed.
          </strong>{' '}
          One entry can end up on more than one element (a Pie slice and its label, for example), and an HTML id must be
          unique on the page.
        </li>
        <li>
          <strong>Position comes from Recharts.</strong> Recharts computes <code>x</code>, <code>y</code>,{' '}
          <code>width</code>, <code>height</code>, <code>cx</code> and <code>cy</code> from your values and the axes,
          and these win over the same keys in an entry. Size props that the shape reads directly still apply, such as{' '}
          <code>r</code> on a dot (see the Line example below).
        </li>
      </ul>
      <blockquote>
        <strong>Watch out for name clashes.</strong> Because the props are read from the same object as your values, a
        field that happens to be named like an SVG attribute (<code>fill</code>, <code>name</code>, <code>color</code>,{' '}
        <code>radius</code>, <code>opacity</code>…) styles the shape even if you meant it as data. If your data has such
        a field, rename it or map your data before passing it to the chart.
      </blockquote>

      <h2>How data props combine with component props</h2>
      <p>For each shape, Recharts takes the props in this order, and the first one that sets a property wins:</p>
      <ol>
        <li>the data entry</li>
        <li>
          the props on the component (<code>{'<Bar fill="…" stroke="…" />'}</code>)
        </li>
        <li>the theme, or the legacy defaults if there is no theme (see below)</li>
      </ol>
      <p>
        Entry props and component props <strong>merge</strong>. With{' '}
        <code>{'<Bar fill="#8884d8" stroke="#333" />'}</code> and an entry <code>{"{ fill: 'red' }"}</code>, that bar is
        red with a <code>#333</code> outline. With <code>{"{ stroke: 'lime' }"}</code>, it keeps the{' '}
        <code>#8884d8</code> fill and gets a lime outline.
      </p>
      <p>
        One exception: a <code>style</code> prop is CSS, and CSS beats SVG attributes. A <code>fill</code> in{' '}
        <code>{"<Bar style={{ fill: 'blue' }} />"}</code> overrides the <code>fill</code> of every entry.
      </p>
      <CodeEditorWithPreview
        Component={DataStylesPrecedenceExample}
        sourceCode={dataStylesPrecedenceExampleSource}
        stackBlitzTitle="Data props merge with component props"
      />

      <h2>With a theme</h2>
      <p>
        A <RechartsLink to="guide/theming">theme</RechartsLink> provides colors as a matched set, so they are not mixed
        with yours. For colors (<code>fill</code> and <code>stroke</code>) the rule is:
      </p>
      <ul>
        <li>
          If <strong>neither the entry nor the component</strong> sets a color, the shape uses the theme colors.
        </li>
        <li>
          If <strong>either of them</strong> sets a <code>fill</code> or a <code>stroke</code>, the theme colors are not
          used for that shape at all. You get your colors and nothing else.
        </li>
      </ul>
      <p>
        Props that are not colors, such as <code>strokeWidth</code>, <code>strokeDasharray</code> or{' '}
        <code>opacity</code>, do not count. <code>{"{ strokeDasharray: '4 2' }"}</code> gives a dashed shape in the
        theme colors.
      </p>
      <p>
        Note what this means for an entry that sets only one color. <code>{"{ stroke: 'red' }"}</code> on a{' '}
        <code>Bar</code> in a themed chart, with no <code>fill</code> on the <code>{'<Bar>'}</code>, draws a bar with a
        red outline and the SVG default fill, which is black. For an outline only, add{' '}
        <code>fill: &apos;none&apos;</code>. If you want both colors, set both.
      </p>
      <p>
        With a theme, the <LinkToApi>Tooltip</LinkToApi> shows the color the shape is actually drawn with, and so does
        the <LinkToApi>Legend</LinkToApi> for components that have one Legend item per entry:
      </p>
      <ul>
        <li>
          For <code>Bar</code>, <code>RadialBar</code>, <code>Pie</code>, <code>Funnel</code>, <code>Scatter</code>,{' '}
          <code>Treemap</code>, <code>SunburstChart</code> and <code>Sankey</code>, the Tooltip shows the color of the
          hovered entry: its <code>fill</code>, or its <code>stroke</code> if it has no fill.
        </li>
        <li>
          For <code>Line</code>, <code>Area</code> and <code>Radar</code>, the Tooltip shows the color of the series,
          because the line is one shape. Styled dots do not change it.
        </li>
        <li>
          <code>Pie</code>, <code>RadialBar</code> and <code>Funnel</code> show one Legend item per entry, in that
          entry&apos;s color. The other components show one Legend item per series.
        </li>
      </ul>

      <h2>Without a theme</h2>
      <p>
        Data props work the same way: they win over the component props, and anything they do not set comes from the
        component props or from the component&apos;s own default (for example the grey <code>#808080</code> of a{' '}
        <code>Pie</code> slice).
      </p>
      <p>
        In this mode, <code>Tooltip</code> and <code>Legend</code> colors are not guaranteed to match per-entry styles.
        If that matters to you, add a theme.
      </p>

      <h2>Styled dots on Line, Area and Radar</h2>
      <CodeEditorWithPreview
        Component={DataStylesLineDotsExample}
        sourceCode={dataStylesLineDotsExampleSource}
        stackBlitzTitle="Styled dots on a Line"
      />
      <p>
        The entry props go on that entry&apos;s dot. The line keeps its series color. A <code>dot</code> element or
        function you pass yourself receives the entry in its props and decides on its own what to render.
      </p>

      <h2>
        When to use <code>shape</code> instead
      </h2>
      <p>
        Data props are static values. If a style depends on something only known at render time, such as whether the
        shape is active or the value compared to a threshold computed elsewhere, use the <code>shape</code> prop (or{' '}
        <code>content</code> on <code>Treemap</code>) and set the props in your own component. This is also the
        replacement for the deprecated <RechartsLink to="guide/cell">Cell</RechartsLink>.
      </p>
    </article>
  );
}
