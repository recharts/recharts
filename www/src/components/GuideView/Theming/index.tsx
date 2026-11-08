import { CodeEditorWithPreview } from '../../CodeEditorWithPreview.tsx';
import { SourceCodeEditor } from '../../Playground/SourceCodeEditor.tsx';
import { LinkToApi } from '../../Shared/LinkToApi.tsx';
import { RechartsLink } from '../../Shared/RechartsLink.tsx';
import styles from '../guideTable.module.css';
import ThemeHeroExample from './ThemeHeroExample.tsx';
import CustomThemeExample from './CustomThemeExample.tsx';
import CustomThemeExampleSource from './CustomThemeExample.tsx?raw';
import { TargetBlankLink } from '../../Shared/TargetBlankLink.tsx';

const quickStartExample = `import { Bar, BarChart, CartesianGrid, Legend, RechartsThemeProvider, Tooltip, XAxis, YAxis, autoTheme } from 'recharts';

export function App() {
  return (
    <RechartsThemeProvider value={autoTheme}>
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
 * Start from a built-in theme to keep styles for components you do not override.
 * Spread nested objects too when you want to preserve their other properties.
 */
const brandTheme: RechartsTheme = {
  ...lightTheme,
  graphicalItems: [
    { fill: '#4338ca', stroke: '#4338ca' },
    { fill: '#0f766e', stroke: '#0f766e' },
  ],
  typography: { ...lightTheme.typography, fontFamily: 'Inter, sans-serif' },
  grid: { ...lightTheme.grid, stroke: '#e2e8f0', strokeDasharray: '1 4' },
};

export function App() {
  return <RechartsThemeProvider value={brandTheme}>...</RechartsThemeProvider>;
}
`;

const autoThemeCssExample = `/* app.css */

/* Follow the operating system: */
:root {
  color-scheme: light dark;
}

/* Or follow your own toggle. Many toggles already set color-scheme on <html>. */
:root[data-theme='light'] {
  color-scheme: light;
}
:root[data-theme='dark'] {
  color-scheme: dark;
}

/* A toggle that only sets a class needs one extra rule: */
.dark {
  color-scheme: dark;
}
`;

const autoThemeExample = `import { RechartsThemeProvider, autoTheme } from 'recharts';

export function Dashboard() {
  return (
    <RechartsThemeProvider value={autoTheme}>
      <RevenueChart />
      <TrafficChart />
    </RechartsThemeProvider>
  );
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
  --chart-page: #ffffff;
}

.dark {
  --chart-text: #f5f5f4;
  --chart-grid: #3f3f46;
  --chart-axis: #d6d3d1;
  --chart-1: #a5b4fc;
  --chart-2: #5eead4;
  --chart-3: #fcd34d;
  --chart-page: #18181b;
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
  pageBackground: 'var(--chart-page)',
};
`;

const defaultSizeThemeExample = `import { type RechartsTheme, lightTheme } from 'recharts';

export const sizedTheme: RechartsTheme = {
  ...lightTheme,
  chart: { width: '100%', maxHeight: '70vh', aspectRatio: 1.618 },
};
`;

const designSystemExample = `import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { RechartsThemeProvider, darkTheme, lightTheme, type RechartsTheme } from 'recharts';

/*
 * Recharts ships no adapters for design systems. Because RechartsTheme is a plain
 * object, a small mapper in your own code is all you need - and it works the same
 * way for Material UI, Mantine, Chakra, Ant Design, or your in-house tokens.
 */
function Charts({ children }) {
  const muiTheme = useTheme();
  const baseTheme = muiTheme.palette.mode === 'dark' ? darkTheme : lightTheme;

  const rechartsTheme = useMemo<RechartsTheme>(
    () => ({
      ...baseTheme,
      typography: {
        ...baseTheme.typography,
        color: muiTheme.palette.text.primary,
        fontFamily: muiTheme.typography.fontFamily,
        fontSize: muiTheme.typography.body2.fontSize,
      },
      graphicalItems: [
        { fill: muiTheme.palette.primary.main, stroke: muiTheme.palette.primary.main },
        { fill: muiTheme.palette.secondary.main, stroke: muiTheme.palette.secondary.main },
        { fill: muiTheme.palette.warning.main, stroke: muiTheme.palette.warning.main },
      ],
      grid: { ...baseTheme.grid, stroke: muiTheme.palette.divider },
      axis: { ...baseTheme.axis, stroke: muiTheme.palette.text.secondary },
      pageBackground: muiTheme.palette.background.paper,
      tooltip: {
        ...baseTheme.tooltip,
        contentStyle: {
          ...baseTheme.tooltip?.contentStyle,
          backgroundColor: muiTheme.palette.background.paper,
          border: \`1px solid \${muiTheme.palette.divider}\`,
          borderRadius: muiTheme.shape.borderRadius,
        },
      },
    }),
    [muiTheme, baseTheme],
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
      <ThemeHeroExample />
      <p>
        <strong>Themes are available since Recharts v3.11.</strong>
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

      <h2>Built-in themes</h2>
      <p>Recharts ships four themes:</p>
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
            <td>A complete light-mode style: dark text, light grid.</td>
          </tr>
          <tr>
            <td>
              <code>darkTheme</code>
            </td>
            <td>
              The dark-mode counterpart: light text, dark grid. It expects a dark page. On a light page its light text
              and axes are not legible.
            </td>
          </tr>
          <tr>
            <td>
              <code>autoTheme</code>
            </td>
            <td>
              Automatically switches between light or dark, following the CSS <code>color-scheme</code> of the page. It
              has the colors of <code>lightTheme</code> and <code>darkTheme</code>, and the browser picks between them.
              See Switching themes at runtime below.
            </td>
          </tr>
          <tr>
            <td>
              <code>emptyTheme</code>
            </td>
            <td>
              Theming reset. Removes all built-in styling so you can style everything yourself. All SVG properties fall
              back to browser defaults. Same idea as a CSS reset. Useful when a chart is fully custom and Recharts
              defaults get in the way.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        You can see the light and dark colors right here on this website. The navigation bar has a button that switches
        this whole website between light and dark, and every chart on the page with it. <code>ColorModePicker</code>{' '}
        sets the CSS <code>color-scheme</code> of the page, and a single <code>RechartsThemeProvider</code> with{' '}
        <code>autoTheme</code> follows it. See{' '}
        <TargetBlankLink href="https://github.com/recharts/recharts/blob/main/www/src/layouts/Frame.tsx">
          <code>Frame.tsx</code>
        </TargetBlankLink>{' '}
        and{' '}
        <TargetBlankLink href="https://github.com/recharts/recharts/blob/main/www/src/components/color-mode/defineColorModeStore.ts">
          <code>defineColorModeStore.ts</code>
        </TargetBlankLink>{' '}
        for implementation.
      </p>

      <h2>How a style is resolved</h2>
      <p>For every themed property, Recharts checks these places, in order:</p>
      <ol>
        <li>
          SVG properties defined in the <code>data</code> input array. See{' '}
          <RechartsLink to="guide/dataStyles">Styling data points guide</RechartsLink> for details.
        </li>
        <li>Props in the JSX.</li>
        <li>
          Theme (i.e. <LinkToApi>RechartsThemeProvider</LinkToApi> is present in the current React context)
        </li>
        <li>
          If there is no theme present at all (i.e. the RechartsThemeProvider is not in the React tree at all), Recharts
          falls back to its legacy defaults, the same it had since version 2.x. You will find that these defaults are
          inconsistent and not quite accessible - that is why presence of the theme turns it off completely.
        </li>
      </ol>
      <p>The final style is then created by merging properties from those sources.</p>
      <p>
        Graphical items are the exception for colors. The theme <code>fill</code> and <code>stroke</code> are designed
        as a pair, and they never mix with your colors. If a graphical item sets its own <code>fill</code> or{' '}
        <code>stroke</code>, it ignores both the <code>fill</code> and the <code>stroke</code> of its{' '}
        <code>graphicalItems</code> entry. For example, <code>{'<Bar fill="red" />'}</code> renders red bars without the
        theme stroke. The rest of the entry still applies, including its <code>strokeWidth</code> and its{' '}
        <code>label</code> styles. The same rule applies to colors defined in the data array. Other style props, such as{' '}
        <code>strokeWidth</code> or <code>strokeDasharray</code>, do not bring a color, so they merge with the theme
        field by field: <code>{'<Line strokeDasharray="5 5" />'}</code> is a dashed line in the theme colors.
      </p>

      <h2>Chart background</h2>
      <p>
        Default Recharts themes do not paint a background behind the chart. The chart is part of your page, and the page
        shows through it. Each built-in theme is designed for one page background: <code>lightTheme</code> for white,{' '}
        <code>darkTheme</code> for a dark page, and <code>autoTheme</code> for a page whose background follows its{' '}
        <code>color-scheme</code>.
      </p>
      <p>Custom themes can draw the chart background.</p>
      <p>A theme has two background settings, and they do different things:</p>
      <ul>
        <li>
          <code>pageBackground</code> is the color behind the chart. Recharts never paints it. It draws gaps and halos
          in this color, so that they look like holes cut into the chart: the outlines between{' '}
          <LinkToApi>Treemap</LinkToApi> tiles, and the separators and label halos of{' '}
          <LinkToApi>SunburstChart</LinkToApi>. Set it to the background of your page. The built-in themes set it to the
          background they are designed for.
        </li>
        <li>
          <code>chart</code> is painted on the element that wraps the chart. The <LinkToApi>Legend</LinkToApi> renders
          inside that element, so a background here covers the Legend too. The built-in themes leave it empty. The{' '}
          <code>style</code> prop of the chart takes precedence over it.
        </li>
      </ul>
      <p>
        If you paint <code>chart.backgroundColor</code> and leave <code>pageBackground</code> unset, Recharts uses{' '}
        <code>chart.backgroundColor</code> as the <code>pageBackground</code>, so the separators match the color that is
        actually behind them. An explicit <code>pageBackground</code> always wins. The built-in themes set{' '}
        <code>pageBackground</code>, so when you spread a built-in theme and paint <code>chart.backgroundColor</code>,
        also set <code>pageBackground</code> to the same color. Do the same when you paint the <code>background</code>{' '}
        shorthand or an image.
      </p>

      <h2>Labels</h2>
      <p>A theme styles labels in two places.</p>
      <ul>
        <li>
          Data labels, the ones that <LinkToApi>LabelList</LinkToApi>, the <code>label</code> prop of graphical items,
          and the default <LinkToApi>Pie</LinkToApi> label draw, take their styles from the <code>label</code> of their{' '}
          <code>graphicalItems</code> entry. Each series can have its own label styles, and <LinkToApi>Pie</LinkToApi>{' '}
          and <LinkToApi>Funnel</LinkToApi> take one entry per sector or trapezoid, the same entry that colors the
          shape. See <RechartsLink to="guide/label-colors">Label colors guide</RechartsLink> for details.
        </li>
        <li>
          All other labels take the top-level <code>label</code>.
        </li>
      </ul>
      <p>
        If neither the label nor the theme sets a color, data labels pick one automatically, depending on whether they
        sit on top of their shape or next to it. The{' '}
        <RechartsLink to="guide/label-colors">Label colors guide</RechartsLink> explains the rules.
      </p>

      <h2>Default chart size</h2>
      <p>
        A chart without a size renders nothing. A theme can give every chart in its tree a default size with{' '}
        <code>chart.width</code> and <code>chart.height</code> (the default Recharts themes do not, custom ones can). A
        chart uses the size from the theme only when it has no size of its own: the <code>width</code> and{' '}
        <code>height</code> props, the <code>style</code> prop and <LinkToApi>ResponsiveContainer</LinkToApi> all take
        precedence.
      </p>
      <SourceCodeEditor value={defaultSizeThemeExample} />
      <p>
        Also see the <RechartsLink to="guide/sizes/">Chart size guide</RechartsLink>.
      </p>

      <h2>Colors for multiple series</h2>
      <p>
        The theme uses each graphical item&apos;s <code>dataKey</code> to decide which entry from{' '}
        <code>graphicalItems</code> to use for its color. Graphical items with the same <code>dataKey</code> show the
        same data, so they get the same color.
      </p>
      <p>
        A graphical item without its own <code>dataKey</code> uses the <code>dataKey</code> of its value axis. The chart
        layout decides which axis that is, regardless of the axis <code>type</code>: <LinkToApi>YAxis</LinkToApi> in the
        horizontal layout, <LinkToApi>XAxis</LinkToApi> in the vertical layout, <LinkToApi>PolarRadiusAxis</LinkToApi>{' '}
        for <LinkToApi>Radar</LinkToApi>, and <LinkToApi>PolarAngleAxis</LinkToApi> for <LinkToApi>RadialBar</LinkToApi>
        .
      </p>
      <p>
        The <code>fill</code> of each entry can also be a fill object with a pattern, so that series differ by more than
        color. As{' '}
        <TargetBlankLink href="https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html">
          WCAG SC1.4.1 &quot;Use of color&quot;
        </TargetBlankLink>{' '}
        recommends. The <RechartsLink to="guide/patterns">Patterns and gradients guide</RechartsLink> explains how.
      </p>
      <p>
        If you need different colors or want to control the assignment yourself, provide an explicit <code>fill</code>{' '}
        or <code>stroke</code> prop on the graphical item. The <code>lightPalette</code>, <code>darkPalette</code> and{' '}
        <code>autoPalette</code> exports hold the colors of the built-in themes, so you can pick from them:{' '}
        <code>{'<Scatter fill={autoPalette[1]} />'}</code>.
      </p>
      <p>
        The theme compares <code>dataKey</code> values as strings. A function <code>dataKey</code> is compared by its
        source code: two functions with the same source share a color, and a minified build may order the colors
        differently than a development build. Prefer explicit colors for graphical items that use a function{' '}
        <code>dataKey</code>.
      </p>

      <h2>Writing your own theme</h2>
      <p>
        A <code>RechartsTheme</code> is a plain object: build it inline, import it from a shared module, or fetch it as
        JSON. Start from a built-in theme to preserve styles for components you do not override.
      </p>
      <SourceCodeEditor value={customThemeSnippet} />
      <p>To start from scratch instead, define styles for every component your chart uses, as in this example:</p>
      <CodeEditorWithPreview
        Component={CustomThemeExample}
        sourceCode={CustomThemeExampleSource}
        stackBlitzTitle="Recharts Custom Theme Example"
      />
      <p>
        When you design your own theme, check that readers can tell the series apart from the page and from each other,
        also with a color vision deficiency. The{' '}
        <RechartsLink to="guide/theme-color-testing">Theme color testing guide</RechartsLink> does that for any theme,
        and shows how to keep checking it in unit tests.
      </p>

      <h2>Switching themes at runtime</h2>
      <p>
        There are two ways to switch between light and dark: let CSS do it with <code>autoTheme</code>, or swap the
        theme object in React state.
      </p>

      <h3>Following the color scheme with autoTheme</h3>
      <p>
        Every color in <code>autoTheme</code> is a CSS{' '}
        <TargetBlankLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark">
          <code>light-dark()</code>
        </TargetBlankLink>{' '}
        value, for example <code>light-dark(#2373e6, #5396ff)</code>. The browser picks the light or the dark color from
        the{' '}
        <TargetBlankLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme">
          <code>color-scheme</code>
        </TargetBlankLink>{' '}
        of the element. Switching needs no React state and no re-render, and server-rendered pages show the right colors
        from the first paint.
      </p>
      <SourceCodeEditor value={autoThemeExample} />
      <p>
        <code>autoTheme</code> does nothing on its own: it follows the <code>color-scheme</code> that your page sets.
      </p>
      <SourceCodeEditor value={autoThemeCssExample} />
      <p>Some things to keep in mind:</p>
      <ul>
        <li>
          <code>light-dark()</code> needs Chrome 123, Firefox 120, or Safari 17.5. If you support older browsers, switch
          between <code>lightTheme</code> and <code>darkTheme</code> in React state, or use CSS variables.
        </li>
        <li>
          Like <code>darkTheme</code>, <code>autoTheme</code> only styles what Recharts draws. The background behind the
          chart belongs to your page, so let the page background follow the same <code>color-scheme</code>. See the
          Chart background section above.
        </li>
      </ul>

      <h3>Switching in React state</h3>
      <p>
        You can also switch with an ordinary React state update: swap the object you pass to <code>value</code> and
        leave the chart markup alone. No chart re-declares anything, no component takes a new prop. This works with any
        pair of themes, including your own, and your code always reads plain colors from the theme.
      </p>
      <SourceCodeEditor value={runtimeSwitchExample} />
      <p>
        Remember that <code>darkTheme</code> only styles what Recharts draws. Switch the background of your page
        together with the theme. See the Background section above.
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

      <h2>Match an existing design system</h2>
      <p>
        Map your design system&apos;s tokens onto a RechartsTheme with{' '}
        <TargetBlankLink href="https://react.dev/reference/react/useMemo">useMemo</TargetBlankLink>:
      </p>
      <SourceCodeEditor value={designSystemExample} />

      <h2>Reading the theme</h2>
      <p>
        Custom shapes, custom tooltip content and custom legends are your components, so Recharts does not style them -
        see the <RechartsLink to="guide/customize">Customize guide</RechartsLink> for how those render props work. If
        you want them to follow the theme, read it with <LinkToApi>useRechartsTheme</LinkToApi>. It returns the nearest
        theme as-is, with no defaults applied, and <code>undefined</code> when there is no provider.
      </p>
      <SourceCodeEditor value={readThemeExample} />

      <h2>API contract</h2>
      <p>
        Recharts themes are available as a public API since version 3.11. We consider the overall shape to be the API,
        so there will be no backwards incompatible changes in minor and patch versions.
      </p>
      <p>However. What we do not consider a public API:</p>
      <ul>
        <li>Specific styles: colors, stroke widths, dasharrays, the like</li>
        <li>
          Number of items in the <code>graphicalItems</code>
        </li>
      </ul>
      <p>
        If you want to receive the latest updates and accessibility fixes, use the latest theme and all is good. If you
        want to lock in colors and have a guarantee they never change, create your own custom theme.
      </p>

      <h2>Roadmap</h2>
      <p>
        In Recharts v4, the <LinkToApi>autoTheme</LinkToApi> will be the default theme. The legacy defaults (i.e.
        &quot;no RechartsThemeProvider present&quot;) will be removed.
      </p>
    </article>
  );
}
