import { CodeEditorWithPreview } from '../../CodeEditorWithPreview.tsx';
import { SourceCodeEditor } from '../../Playground/SourceCodeEditor.tsx';
import { LinkToApi } from '../../Shared/LinkToApi.tsx';
import { RechartsLink } from '../../Shared/RechartsLink.tsx';
import styles from '../guideTable.module.css';
import ThemeSwitcherExample, { themeSwitcherDefaultState, themeSwitcherLevers } from './ThemeSwitcherExample.tsx';
import ThemeSwitcherExampleSource from './ThemeSwitcherExample.tsx?raw';
import CustomThemeExample from './CustomThemeExample.tsx';
import CustomThemeExampleSource from './CustomThemeExample.tsx?raw';
import NestedThemeExample from './NestedThemeExample.tsx';
import NestedThemeExampleSource from './NestedThemeExample.tsx?raw';
import { TargetBlankLink } from '../../Shared/TargetBlankLink.tsx';

const quickStartExample = `import { Bar, BarChart, CartesianGrid, Legend, RechartsThemeProvider, Tooltip, XAxis, YAxis, lightTheme } from 'recharts';

export function App() {
  return (
    <RechartsThemeProvider value={lightTheme}>
      <BarChart data={data}>
        <CartesianGrid />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" />
        <Bar dataKey="profit" />
      </BarChart>
    </RechartsThemeProvider>
  );
}
`;

const customThemeSnippet = `import { RechartsThemeProvider, lightTheme, type RechartsTheme } from 'recharts';

/*
 * Option 1: start from scratch. Only \`graphicalItems\` is required.
 * Everything you leave out renders unstyled.
 */
const minimalTheme: RechartsTheme = {
  graphicalItems: [{ fill: '#4338ca' }, { fill: '#0f766e' }],
};

/*
 * Option 2: start from a built-in theme and override what you need.
 * These are plain objects, so a spread is all it takes.
 */
const brandTheme: RechartsTheme = {
  ...lightTheme,
  typography: { ...lightTheme.typography, fontFamily: 'Inter, sans-serif' },
  grid: { ...lightTheme.grid, stroke: '#e2e8f0', strokeDasharray: '1 4' },
};

export function App() {
  return <RechartsThemeProvider value={brandTheme}>...</RechartsThemeProvider>;
}
`;

const runtimeSwitchExample = `import { useState } from 'react';
import { RechartsThemeProvider, darkTheme, lightTheme } from 'recharts';

export function Dashboard() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  return (
    <>
      <ThemeToggle value={mode} onChange={setMode} />
      <RechartsThemeProvider value={mode === 'dark' ? darkTheme : lightTheme}>
        <RevenueChart />
        <TrafficChart />
      </RechartsThemeProvider>
    </>
  );
}
`;

const cssVariablesExample = `/* app.css */
:root {
  --chart-text: #18181b;
  --chart-grid: #d6d3d1;
  --chart-axis: #52525b;
  --chart-1: #4338ca;
  --chart-2: #0f766e;
  --chart-3: #b45309;
}

.dark {
  --chart-text: #f5f5f4;
  --chart-grid: #3f3f46;
  --chart-axis: #d6d3d1;
  --chart-1: #a5b4fc;
  --chart-2: #5eead4;
  --chart-3: #fcd34d;
}
`;

const cssVariablesThemeExample = `import { type RechartsTheme } from 'recharts';

/*
 * Theme values are passed to the DOM as-is, so any valid CSS value works,
 * including var() references. One theme object then covers both color schemes
 * and switching is done in CSS, without a React re-render.
 */
export const cssVariableTheme: RechartsTheme = {
  typography: { color: 'var(--chart-text)' },
  graphicalItems: [
    { fill: 'var(--chart-1)', stroke: 'var(--chart-1)' },
    { fill: 'var(--chart-2)', stroke: 'var(--chart-2)' },
    { fill: 'var(--chart-3)', stroke: 'var(--chart-3)' },
  ],
  grid: { stroke: 'var(--chart-grid)', fill: 'none' },
  axis: { stroke: 'var(--chart-axis)' },
};
`;

const designSystemExample = `import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { RechartsThemeProvider, type RechartsTheme } from 'recharts';

/*
 * Recharts ships no adapters for design systems. Because RechartsTheme is a plain
 * object, a small mapper in your own code is all you need - and it works the same
 * way for Material UI, Mantine, Chakra, Ant Design, or your in-house tokens.
 */
function Charts({ children }) {
  const muiTheme = useTheme();

  const rechartsTheme = useMemo<RechartsTheme>(
    () => ({
      typography: {
        color: muiTheme.palette.text.primary,
        fontFamily: muiTheme.typography.fontFamily,
        fontSize: muiTheme.typography.body2.fontSize,
      },
      graphicalItems: [
        { fill: muiTheme.palette.primary.main, stroke: muiTheme.palette.primary.main },
        { fill: muiTheme.palette.secondary.main, stroke: muiTheme.palette.secondary.main },
        { fill: muiTheme.palette.warning.main, stroke: muiTheme.palette.warning.main },
      ],
      grid: { stroke: muiTheme.palette.divider, fill: 'none' },
      axis: { stroke: muiTheme.palette.text.secondary },
      tooltip: {
        contentStyle: {
          backgroundColor: muiTheme.palette.background.paper,
          border: \`1px solid \${muiTheme.palette.divider}\`,
          borderRadius: muiTheme.shape.borderRadius,
        },
      },
    }),
    [muiTheme],
  );

  return <RechartsThemeProvider value={rechartsTheme}>{children}</RechartsThemeProvider>;
}
`;

const readThemeExample = `import { useRechartsTheme } from 'recharts';

/*
 * Read the active theme from your own components, for example to paint
 * the page background or a custom Tooltip content that matches the chart.
 */
function CustomTooltipContent({ payload }) {
  const theme = useRechartsTheme();

  return <div style={theme?.tooltip?.contentStyle}>{payload[0]?.value}</div>;
}
`;

export function ThemingGuide() {
  return (
    <article>
      <h1>Theming</h1>
      <p>
        A theme is a single object that sets the default visual style - colors, fonts, strokes, tooltip and legend
        styles - for every chart below it in the React tree. Instead of repeating <code>stroke</code>, <code>fill</code>{' '}
        and <code>style</code> props on every component in every chart, you set them once.
      </p>
      <p>
        <strong>Themes are experimental.</strong> They are exported from the main <code>recharts</code> entry point and
        they work, but the shape of <code>RechartsTheme</code> can still change in a minor or patch release. Charts
        without a theme provider keep rendering exactly as they always have.
      </p>
      <p>
        A theme is the defaults layer. When a single chart needs to differ - one bar with its own shape, one axis with
        its own tick format, one custom tooltip - that is a prop on that component, and the{' '}
        <RechartsLink to="guide/customize">Customize guide</RechartsLink> covers it. Explicit props always win over the
        theme, so the two never fight.
      </p>

      <h2>Quick start</h2>
      <p>
        Wrap your charts in <code>RechartsThemeProvider</code> and give it a theme:
      </p>
      <SourceCodeEditor value={quickStartExample} />
      <p>
        That is the whole API surface. There is no <code>theme</code> prop on the chart root; a provider around one
        chart is how you theme one chart.
      </p>

      <h2>Built-in themes</h2>
      <p>Recharts ships three themes:</p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Theme</th>
            <th>What it does</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>lightTheme</code>
            </td>
            <td>A complete light-mode style: dark text, light grid, the familiar Recharts palette.</td>
          </tr>
          <tr>
            <td>
              <code>darkTheme</code>
            </td>
            <td>
              The dark-mode counterpart. It does not paint a background behind the chart - that is your page&apos;s job.
            </td>
          </tr>
          <tr>
            <td>
              <code>emptyTheme</code>
            </td>
            <td>
              Deliberately blank. It removes all built-in styling so you can style everything yourself, the same idea as
              a CSS reset. Useful when a chart is fully custom and the legacy defaults get in the way.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        You can try <code>lightTheme</code> and <code>darkTheme</code> right here: the sun / moon button in the
        navigation bar at the top of this page switches this whole website between the two, and every chart on the page
        - including the one below - follows along. That button is not a documentation gimmick, it is the real thing:{' '}
        <code>ColorModePicker</code> flips a color mode and the site&apos;s layout hands the matching Recharts theme to
        a single <code>RechartsThemeProvider</code>.
      </p>
      <p>
        The chart below has no theme provider of its own, so it inherits whatever the page is using. The control lets
        you swap that inherited theme for the two states the navigation bar cannot express: <code>emptyTheme</code>, and
        no provider at all. The difference between those two is the interesting one - no provider means every component
        falls back to its own historical defaults, while <code>emptyTheme</code> means &quot;a theme is in charge, and
        it says: nothing&quot;.
      </p>
      <CodeEditorWithPreview
        Component={ThemeSwitcherExample}
        defaultControlsState={themeSwitcherDefaultState}
        levers={themeSwitcherLevers}
        sourceCode={ThemeSwitcherExampleSource}
        stackBlitzTitle="Recharts Theme Switcher Example"
        defaultTool="controls"
      />
      <p>
        The &quot;no provider&quot; option is worth a closer look: the grid, the axes and the reference line all fall
        back to the greys they have used since Recharts 2.x, but the bars come out black. That is not a bug -{' '}
        <LinkToApi>Bar</LinkToApi> and <LinkToApi>Scatter</LinkToApi> have never had a default color, so without a theme
        you have to pass <code>fill</code> yourself. <LinkToApi>Line</LinkToApi> and <LinkToApi>Area</LinkToApi> do have
        a legacy default, but it is a single blue for every series. Giving multi-series charts sensible colors out of
        the box is one of the reasons themes exist.
      </p>
      <p>
        Both of those unstyled variants draw black bars, so the example puts them on a white surface. On a dark page
        they would simply be invisible - which is the honest answer to &quot;what does an unthemed chart look like in
        dark mode&quot;.
      </p>

      <h2>How a style is resolved</h2>
      <p>For every themed property, Recharts asks three questions in order:</p>
      <ol>
        <li>
          <strong>Did you pass the prop explicitly?</strong> If yes, your prop wins. Always. A theme never overrides
          something you wrote in JSX.
        </li>
        <li>
          <strong>Is there a theme provider, and does its theme contain the relevant section?</strong> If yes, the theme
          value is used.
        </li>
        <li>
          <strong>Is there no theme provider at all?</strong> Then the component uses its own legacy default - the value
          it has used since Recharts 2.x.
        </li>
      </ol>
      <p>
        The case worth calling out is the combination of &quot;there is a provider&quot; and &quot;the theme does not
        define this section&quot;. In that case Recharts renders <em>nothing</em> for that property rather than falling
        back to the legacy default. This is what makes <code>emptyTheme</code> possible, and it means a partial theme is
        a real design decision: a theme with no <code>grid</code> section gives you an unstyled{' '}
        <LinkToApi>CartesianGrid</LinkToApi>, not the default dashed grey one.
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Explicit prop</th>
            <th>Provider</th>
            <th>Theme section</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>set</td>
            <td>any</td>
            <td>any</td>
            <td>Your prop.</td>
          </tr>
          <tr>
            <td>not set</td>
            <td>absent</td>
            <td>—</td>
            <td>Legacy Recharts default.</td>
          </tr>
          <tr>
            <td>not set</td>
            <td>present</td>
            <td>present</td>
            <td>The theme value.</td>
          </tr>
          <tr>
            <td>not set</td>
            <td>present</td>
            <td>missing</td>
            <td>No style at all - legacy defaults are intentionally not restored.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Merging happens field by field, not object by object. If a theme sets <code>stroke</code> and{' '}
        <code>strokeWidth</code> and you only pass <code>stroke</code>, you keep the theme&apos;s{' '}
        <code>strokeWidth</code>.
      </p>

      <h2>What a theme contains</h2>
      <p>
        A theme is a flat set of semantic sections rather than a per-component configuration object. Several components
        usually share one section, which is what keeps a theme small enough to write by hand.
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Section</th>
            <th>Shape</th>
            <th>Applies to</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>graphicalItems</code> <em>(required)</em>
            </td>
            <td>
              array of{' '}
              <code>{'{ fill, fillOpacity, stroke, strokeWidth, strokeOpacity, strokeDasharray, active }'}</code>
            </td>
            <td>
              <LinkToApi>Area</LinkToApi>, <LinkToApi>Bar</LinkToApi>, <LinkToApi>Line</LinkToApi>,{' '}
              <LinkToApi>Scatter</LinkToApi>, <LinkToApi>Radar</LinkToApi>, <LinkToApi>RadialBar</LinkToApi>,{' '}
              <LinkToApi>Pie</LinkToApi>, <LinkToApi>Funnel</LinkToApi>, <LinkToApi>Treemap</LinkToApi>. Legend and
              Tooltip entries inherit the same colors.
            </td>
          </tr>
          <tr>
            <td>
              <code>typography</code>
            </td>
            <td>
              <code>CSSProperties</code>
            </td>
            <td>
              Every piece of text Recharts draws: axis ticks, <LinkToApi>Label</LinkToApi>,{' '}
              <LinkToApi>LabelList</LinkToApi>, <LinkToApi>Text</LinkToApi>, and the HTML in{' '}
              <LinkToApi>Tooltip</LinkToApi> and <LinkToApi>Legend</LinkToApi>. Because it covers both SVG and HTML,{' '}
              <code>color</code> is translated to <code>fill</code> for SVG text automatically.
            </td>
          </tr>
          <tr>
            <td>
              <code>axis</code>
            </td>
            <td>
              <code>{'{ stroke, strokeWidth, strokeOpacity, strokeDasharray }'}</code>
            </td>
            <td>
              <LinkToApi>XAxis</LinkToApi>, <LinkToApi>YAxis</LinkToApi>, <LinkToApi>PolarAngleAxis</LinkToApi>,{' '}
              <LinkToApi>PolarRadiusAxis</LinkToApi> - their lines and ticks.
            </td>
          </tr>
          <tr>
            <td>
              <code>grid</code>
            </td>
            <td>
              <code>{'{ stroke, strokeWidth, strokeDasharray, fill, fillOpacity }'}</code>
            </td>
            <td>
              <LinkToApi>CartesianGrid</LinkToApi> and <LinkToApi>PolarGrid</LinkToApi>. The grid supports a fill, which
              is why it takes the 2D shape rather than the line-only one.
            </td>
          </tr>
          <tr>
            <td>
              <code>reference</code>
            </td>
            <td>
              <code>{'{ stroke, strokeWidth, strokeDasharray, fill, fillOpacity }'}</code>
            </td>
            <td>
              <LinkToApi>ReferenceLine</LinkToApi>, <LinkToApi>ReferenceArea</LinkToApi>,{' '}
              <LinkToApi>ReferenceDot</LinkToApi>.
            </td>
          </tr>
          <tr>
            <td>
              <code>errorBar</code>
            </td>
            <td>
              <code>{'{ stroke, strokeWidth, ... }'}</code>
            </td>
            <td>
              <LinkToApi>ErrorBar</LinkToApi>.
            </td>
          </tr>
          <tr>
            <td>
              <code>barBackground</code>
            </td>
            <td>
              <code>{'{ fill, fillOpacity, stroke, ... }'}</code>
            </td>
            <td>
              The <code>background</code> rectangles of <LinkToApi>Bar</LinkToApi> and <LinkToApi>RadialBar</LinkToApi>.
            </td>
          </tr>
          <tr>
            <td>
              <code>cursor</code>
            </td>
            <td>
              <code>{'{ fill, fillOpacity, stroke, ... }'}</code>
            </td>
            <td>The highlight drawn behind the active tooltip.</td>
          </tr>
          <tr>
            <td>
              <code>tooltip</code>
            </td>
            <td>
              <code>{'{ contentStyle, itemStyle, labelStyle }'}</code>
            </td>
            <td>
              <LinkToApi>Tooltip</LinkToApi>&apos;s default content. <code>contentStyle</code> is the wrapper,{' '}
              <code>itemStyle</code> is one data row, <code>labelStyle</code> is the header.
            </td>
          </tr>
          <tr>
            <td>
              <code>legend</code>
            </td>
            <td>
              <code>{'{ wrapperStyle, labelStyle, position, offset }'}</code>
            </td>
            <td>
              <LinkToApi>Legend</LinkToApi>. Here <code>labelStyle</code> styles the individual entries - the opposite
              of what the same name means in <code>tooltip</code>. Sorry about that.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        The theme does not set the chart size. Set the chart size with the <code>style</code> prop instead - see the{' '}
        <RechartsLink to="guide/sizes">chart size guide</RechartsLink>.
      </p>

      <h2>Colors for multiple series</h2>
      <p>
        <code>graphicalItems</code> is an array, and each graphical item in a chart picks one entry from it. The
        interesting question is <em>which</em> entry.
      </p>
      <p>
        Recharts does not use render order. Render order is not stable: series get toggled, conditionally rendered, or
        reordered, and React does not guarantee the traversal order you might expect. Coloring by position means colors
        jump around when any of that happens.
      </p>
      <p>
        Instead, most graphical items derive their index from a{' '}
        <strong>
          hash of their <code>dataKey</code>
        </strong>
        . The same <code>dataKey</code> therefore always gets the same color, in every chart, across renders and
        reloads.
      </p>
      <ul>
        <li>
          <LinkToApi>Line</LinkToApi>, <LinkToApi>Area</LinkToApi>, <LinkToApi>Bar</LinkToApi>,{' '}
          <LinkToApi>Scatter</LinkToApi>, <LinkToApi>Radar</LinkToApi> and <LinkToApi>RadialBar</LinkToApi> hash their{' '}
          <code>dataKey</code> into the array. An item with no <code>dataKey</code> gets no themed color.
        </li>
        <li>
          <LinkToApi>Pie</LinkToApi>, <LinkToApi>Funnel</LinkToApi> and <LinkToApi>Treemap</LinkToApi> draw many shapes
          from a single series, so they walk the array by position instead: sector <code>i</code> gets entry{' '}
          <code>i % graphicalItems.length</code>.
        </li>
      </ul>
      <p>
        Hashing is best-effort, not a guarantee. Two dataKeys can land on the same entry, especially with a short array
        - <code>&quot;x&quot;</code> and <code>&quot;y&quot;</code> collide in a two-color theme, for instance. A longer
        palette makes collisions less likely; an explicit <code>fill</code> or <code>stroke</code> prop removes the
        question entirely.
      </p>
      <p>
        Each entry can also carry an <code>active</code> block, which styles the highlighted representation of that
        item: the active dot of <LinkToApi>Line</LinkToApi>, <LinkToApi>Area</LinkToApi> and{' '}
        <LinkToApi>Radar</LinkToApi>, and the active sector of <LinkToApi>Pie</LinkToApi>.
      </p>

      <h2>Writing your own theme</h2>
      <p>
        A <code>RechartsTheme</code> is a plain object: build it inline, import it from a shared module, or fetch it as
        JSON. Only <code>graphicalItems</code> is required.
      </p>
      <SourceCodeEditor value={customThemeSnippet} />
      <p>The example below defines a complete theme from scratch and applies it to a line chart:</p>
      <CodeEditorWithPreview
        Component={CustomThemeExample}
        sourceCode={CustomThemeExampleSource}
        stackBlitzTitle="Recharts Custom Theme Example"
      />

      <h2>Nested providers</h2>
      <p>
        Providers nest, and the nearest one wins. This is how you give one chart or one section its own look without
        touching the rest of the page.
      </p>
      <p>
        One thing to watch: a nested provider <strong>replaces</strong> the outer theme, it does not merge with it.
        Recharts reads the nearest theme object and nothing else. If you only want to change the palette, spread the
        outer theme into the new one - otherwise everything you did not repeat becomes unstyled.
      </p>
      <CodeEditorWithPreview
        Component={NestedThemeExample}
        sourceCode={NestedThemeExampleSource}
        stackBlitzTitle="Recharts Nested Theme Example"
      />

      <h2>Switching themes at runtime</h2>
      <p>
        Dark mode is an ordinary React state update: swap the object you pass to <code>value</code> and leave the chart
        markup alone. No chart re-declares anything, no component takes a new prop.
      </p>
      <SourceCodeEditor value={runtimeSwitchExample} />
      <p>
        This is not a hypothetical - it is how this website works, and you have been using it all along. The button in
        the navigation bar cycles light, dark and system; the site layout reads that color mode and renders one{' '}
        <code>RechartsThemeProvider</code> around the entire page with either <code>lightTheme</code> or{' '}
        <code>darkTheme</code>. Every chart in these docs, in every guide and every example, is themed by that single
        provider. Press it and watch the charts on this page change. See the source code of this page here:{' '}
        <TargetBlankLink href="https://github.com/recharts/recharts/blob/d56d6660f7db52d37cb2113b39a2be010d32fe37/www/src/layouts/Frame.tsx#L37">
          on github
        </TargetBlankLink>
        .
      </p>
      <p>
        Remember that <code>darkTheme</code> only styles what Recharts draws. The background behind the chart belongs to
        your page - the site pairs the theme switch with its own CSS color scheme.
      </p>

      <h3>Switching with CSS variables instead</h3>
      <p>
        Because theme values are handed to the DOM unchanged, any valid CSS value works - including{' '}
        <code>var(--token)</code>. That lets a single theme object serve both color schemes and moves the actual switch
        into CSS, with no React re-render and no flash on server-rendered pages.
      </p>
      <SourceCodeEditor value={cssVariablesExample} />
      <SourceCodeEditor value={cssVariablesThemeExample} />
      <p>
        The same trick works with any token layer: Tailwind and shadcn/ui semantic variables, Chakra&apos;s{' '}
        <code>--chakra-*</code> variables, or your own design tokens.
      </p>

      <h2>Matching an existing design system</h2>
      <p>
        Recharts does not ship adapters for Material UI, Mantine, Chakra, Ant Design or anything else, and it does not
        need to: a theme is a plain object, so mapping your design system&apos;s tokens onto it is a{' '}
        <code>useMemo</code> away.
      </p>
      <SourceCodeEditor value={designSystemExample} />

      <h2>Reading the theme yourself</h2>
      <p>
        Custom shapes, custom tooltip content and custom legends are your components, so Recharts does not style them -
        see the <RechartsLink to="guide/customize">Customize guide</RechartsLink> for how those render props work. If
        you want them to follow the theme, read it with <code>useRechartsTheme</code>. It returns the nearest theme
        as-is, with no defaults applied, and <code>undefined</code> when there is no provider.
      </p>
      <SourceCodeEditor value={readThemeExample} />

      <h2>Current limitations</h2>
      <ul>
        <li>
          The API is marked experimental. <code>RechartsTheme</code> can change shape in a minor or patch release.
        </li>
        <li>
          Not every component is themed yet. <LinkToApi>Sankey</LinkToApi> and <LinkToApi>SunburstChart</LinkToApi>{' '}
          still use their own defaults regardless of the theme.
        </li>
        <li>
          Themes are not deep-merged. Nested providers replace, and there is no <code>createTheme</code> helper to merge
          for you.
        </li>
        <li>
          Series colors are assigned by a hash, which is stable but not collision-free. Use explicit props when a
          specific color matters.
        </li>
      </ul>
    </article>
  );
}
