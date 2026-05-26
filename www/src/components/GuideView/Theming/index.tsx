import { localeGet } from '../../../utils/LocaleUtils.ts';
import { SupportedLocale } from '../../../locale';
import { SourceCodeEditor } from '../../Playground/SourceCodeEditor.tsx';
import { TargetBlankLink } from '../../Shared/TargetBlankLink.tsx';
import styles from '../guideTable.module.css';
import AntdThemePreview from './AntdThemePreview.tsx';
import ThemePreview from './ThemePreview.tsx';

const builtInThemesExample = `
import { RechartsThemeProvider, darkTheme, legacyTheme, lightTheme } from 'recharts';

export function App({ mode }: { mode: 'legacy' | 'light' | 'dark' }) {
  const theme = {
    legacy: legacyTheme,
    light: lightTheme,
    dark: darkTheme,
  }[mode];

  return <RechartsThemeProvider theme={theme}>...</RechartsThemeProvider>;
}
`;

const quickStartExample = `
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  RechartsThemeProvider,
  Tooltip,
  XAxis,
  YAxis,
  lightTheme,
} from 'recharts';

export function RevenueChart() {
  return (
    <RechartsThemeProvider theme={lightTheme}>
      <LineChart data={data}>
        <CartesianGrid />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line dataKey="revenue" />
        <Line dataKey="cost" />
      </LineChart>
    </RechartsThemeProvider>
  );
}
`;

const localOverrideExample = `
import { Bar, BarChart, RechartsThemeProvider, lightTheme, type RechartsTheme } from 'recharts';

const marketingOverride: RechartsTheme = {
  series: {
    palette: ['#7c3aed', '#ec4899'],
    keyed: {
      organic: { fill: '#7c3aed' },
      paid: { fill: '#ec4899' },
    },
  },
};

export function MarketingCharts() {
  return (
    <RechartsThemeProvider theme={lightTheme}>
      <BarChart data={weeklyTraffic}>
        <Bar dataKey="organic" />
        <Bar dataKey="paid" />
      </BarChart>

      <RechartsThemeProvider theme={marketingOverride}>
        <BarChart data={weeklyTraffic}>
          <Bar dataKey="organic" />
          <Bar dataKey="paid" />
        </BarChart>
      </RechartsThemeProvider>
    </RechartsThemeProvider>
  );
}
`;

const customThemeExample = `
import { lightTheme, type RechartsTheme } from 'recharts';

export const acmeTheme: RechartsTheme = {
  ...lightTheme,
  meta: {
    ...lightTheme.meta,
    name: 'acme-light',
  },
  colors: {
    ...lightTheme.colors,
    text: '#0f172a',
    mutedText: '#475569',
    border: '#cbd5e1',
    grid: '#e2e8f0',
    axis: '#475569',
    tooltipCursor: '#cbd5e1',
  },
  typography: {
    ...lightTheme.typography,
    fontFamily: 'Inter, sans-serif',
    fontSize: 12,
    fontWeight: 500,
  },
  strokeWidths: {
    ...lightTheme.strokeWidths,
    line: 2,
  },
  radii: {
    ...lightTheme.radii,
    tooltip: 12,
  },
  series: {
    palette: ['#2563eb', '#14b8a6', '#f59e0b', '#ef4444'],
    keyed: {
      revenue: { stroke: '#2563eb' },
      cost: { stroke: '#14b8a6' },
      forecast: { stroke: '#f59e0b', strokeDasharray: '6 3' },
    },
  },
  components: {
    ...lightTheme.components,
    CartesianGrid: {
      ...lightTheme.components?.CartesianGrid,
      strokeDasharray: '3 3',
    },
    Tooltip: {
      ...lightTheme.components?.Tooltip,
      contentStyle: {
        ...lightTheme.components?.Tooltip?.contentStyle,
        border: '1px solid #cbd5e1',
      },
    },
  },
};
`;

const seriesPaletteExample = `
import { Line, LineChart, RechartsThemeProvider, lightTheme, type RechartsTheme } from 'recharts';

const commerceTheme: RechartsTheme = {
  ...lightTheme,
  series: {
    palette: ['#0ea5e9', '#8b5cf6', '#22c55e', '#f97316'],
    keyed: {
      desktop: { stroke: '#0ea5e9' },
      mobile: { stroke: '#8b5cf6' },
      retail: { stroke: '#22c55e' },
    },
  },
};

export function DeviceMixChart() {
  return (
    <RechartsThemeProvider theme={commerceTheme}>
      <LineChart data={traffic}>
        <Line dataKey="desktop" />
        <Line dataKey="mobile" />
        <Line dataKey="retail" />
      </LineChart>
    </RechartsThemeProvider>
  );
}

/*
 * Matching order:
 * 1. explicit component props, if you set them
 * 2. series.keyed[identity]
 * 3. hash(identity) into series.palette
 *
 * identity = coalesce(dataKey, name)
 */
`;

const runtimeSwitchExample = `
import { RechartsThemeProvider, darkTheme, lightTheme } from 'recharts';

export function Dashboard() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const theme = mode === 'dark' ? darkTheme : lightTheme;

  return (
    <>
      <ThemeToggle value={mode} onChange={setMode} />
      <RechartsThemeProvider theme={theme}>
        <RevenueChart />
        <TrafficChart />
      </RechartsThemeProvider>
    </>
  );
}
`;

const cssVariablesExample = `
/* app.css */
:root {
  --chart-surface: #ffffff;
  --chart-text: #0f172a;
  --chart-muted-text: #475569;
  --chart-grid: #e2e8f0;
  --chart-border: #cbd5e1;
  --chart-1: #2563eb;
  --chart-2: #14b8a6;
  --chart-3: #f59e0b;
}

[data-chart-theme='dark'] {
  --chart-surface: #111827;
  --chart-text: #f3f4f6;
  --chart-muted-text: #cbd5e1;
  --chart-grid: #334155;
  --chart-border: #475569;
  --chart-1: #60a5fa;
  --chart-2: #2dd4bf;
  --chart-3: #fbbf24;
}

/* charts.ts */
import { type RechartsTheme } from 'recharts';

export const cssVariableTheme: RechartsTheme = {
  colors: {
    surface: 'var(--chart-surface)',
    text: 'var(--chart-text)',
    mutedText: 'var(--chart-muted-text)',
    grid: 'var(--chart-grid)',
    border: 'var(--chart-border)',
    axis: 'var(--chart-muted-text)',
    tooltipCursor: 'var(--chart-border)',
  },
  series: {
    palette: ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)'],
  },
};
`;

const jsonThemeExample = `
// marketing-dark.json
{
  "meta": { "name": "marketing-dark", "mode": "dark" },
  "colors": {
    "surface": "#182230",
    "text": "#f8fafc",
    "mutedText": "#98a2b3",
    "grid": "#344054",
    "border": "#475467",
    "axis": "#98a2b3",
    "tooltipCursor": "#475467"
  },
  "series": {
    "palette": ["#7dd3fc", "#c084fc", "#f9a8d4"]
  }
}

// app.tsx
import { RechartsThemeProvider, type RechartsTheme } from 'recharts';

async function loadChartTheme(): Promise<RechartsTheme> {
  const response = await fetch('/themes/marketing-dark.json');
  return response.json();
}

const chartTheme = await loadChartTheme();

return <RechartsThemeProvider theme={chartTheme}>...</RechartsThemeProvider>;
`;

const muiIntegrationExample = `
import * as React from 'react';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { RechartsThemeProvider, type RechartsTheme } from 'recharts';

const appTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#7c3aed' },
    secondary: { main: '#06b6d4' },
    warning: { main: '#f59e0b' },
  },
});

function Charts() {
  const muiTheme = useTheme();

  const rechartsTheme = React.useMemo<RechartsTheme>(
    () => ({
      meta: {
        name: 'mui',
        mode: muiTheme.palette.mode,
      },
      colors: {
        surface: muiTheme.palette.background.paper,
        text: muiTheme.palette.text.primary,
        mutedText: muiTheme.palette.text.secondary,
        grid: muiTheme.palette.divider,
        border: muiTheme.palette.divider,
        axis: muiTheme.palette.text.secondary,
        tooltipCursor: muiTheme.palette.divider,
      },
      typography: {
        fontFamily: muiTheme.typography.fontFamily,
        fontSize: muiTheme.typography.body2.fontSize,
        fontWeight: muiTheme.typography.fontWeightRegular,
      },
      radii: {
        tooltip: muiTheme.shape.borderRadius,
      },
      series: {
        palette: [
          muiTheme.palette.primary.main,
          muiTheme.palette.secondary.main,
          muiTheme.palette.warning.main,
        ],
      },
    }),
    [muiTheme],
  );

  return <RechartsThemeProvider theme={rechartsTheme}>...</RechartsThemeProvider>;
}

export function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Charts />
    </ThemeProvider>
  );
}
`;

const antdIntegrationExample = `
import * as React from 'react';
import { ConfigProvider, theme as antTheme } from 'antd';
import { RechartsThemeProvider, rechartsFromAntd } from 'recharts';

function ChartSection() {
  const { token } = antTheme.useToken();

  const rechartsTheme = React.useMemo(() => rechartsFromAntd(token), [token]);

  return <RechartsThemeProvider theme={rechartsTheme}>...</RechartsThemeProvider>;
}

export function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: antTheme.darkAlgorithm,
      }}
    >
      <ChartSection />
    </ConfigProvider>
  );
}
`;

const chakraIntegrationExample = `
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { RechartsThemeProvider, type RechartsTheme } from 'recharts';

const rechartsTheme: RechartsTheme = {
  meta: {
    name: 'chakra',
  },
  colors: {
    surface: 'var(--chakra-colors-bg-panel)',
    text: 'var(--chakra-colors-fg)',
    mutedText: 'var(--chakra-colors-fg-muted)',
    grid: 'var(--chakra-colors-border-muted)',
    border: 'var(--chakra-colors-border-subtle)',
    axis: 'var(--chakra-colors-fg-muted)',
    tooltipCursor: 'var(--chakra-colors-border-subtle)',
  },
  typography: {
    fontFamily: 'var(--chakra-fonts-body)',
  },
  radii: {
    tooltip: 'var(--chakra-radii-l2)',
  },
  series: {
    palette: [
      'var(--chakra-colors-purple-500)',
      'var(--chakra-colors-teal-500)',
      'var(--chakra-colors-orange-400)',
    ],
  },
};

export function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <RechartsThemeProvider theme={rechartsTheme}>...</RechartsThemeProvider>
    </ChakraProvider>
  );
}
`;

const mantineIntegrationExample = `
import * as React from 'react';
import { MantineProvider, createTheme, useMantineTheme } from '@mantine/core';
import { RechartsThemeProvider, type RechartsTheme } from 'recharts';

const appTheme = createTheme({
  primaryColor: 'indigo',
  fontFamily: 'Inter, sans-serif',
});

function Charts() {
  const mantineTheme = useMantineTheme();

  const rechartsTheme = React.useMemo<RechartsTheme>(
    () => ({
      meta: {
        name: 'mantine',
      },
      colors: {
        surface: mantineTheme.white,
        text: mantineTheme.black,
        mutedText: mantineTheme.colors.gray[7],
        grid: mantineTheme.colors.gray[3],
        border: mantineTheme.colors.gray[4],
        axis: mantineTheme.colors.gray[7],
        tooltipCursor: mantineTheme.colors.gray[4],
      },
      typography: {
        fontFamily: mantineTheme.fontFamily,
        fontSize: mantineTheme.fontSizes.sm,
      },
      radii: {
        tooltip: mantineTheme.radius.md,
      },
      shadows: {
        tooltip: mantineTheme.shadows.sm,
      },
      series: {
        palette: [
          mantineTheme.colors.indigo[6],
          mantineTheme.colors.teal[6],
          mantineTheme.colors.orange[6],
        ],
      },
    }),
    [mantineTheme],
  );

  return <RechartsThemeProvider theme={rechartsTheme}>...</RechartsThemeProvider>;
}

export function App() {
  return (
    <MantineProvider theme={appTheme}>
      <Charts />
    </MantineProvider>
  );
}
`;

const shadcnIntegrationExample = `
/* app/globals.css */
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --border: oklch(0.922 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --border: oklch(1 0 0 / 10%);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
}

/* charts.ts */
import { type RechartsTheme } from 'recharts';

export const chartTheme: RechartsTheme = {
  colors: {
    surface: 'var(--background)',
    text: 'var(--foreground)',
    mutedText: 'var(--muted-foreground)',
    border: 'var(--border)',
    grid: 'var(--border)',
    axis: 'var(--muted-foreground)',
    tooltipCursor: 'var(--border)',
  },
  series: {
    palette: ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)'],
  },
};
`;

export function ThemingGuide({ locale }: { locale: SupportedLocale }) {
  return (
    <article>
      <h1>{localeGet(locale, 'guide', 'theming')}</h1>
      <p>
        <strong>This guide documents the current Recharts theme system.</strong> Use <code>RechartsThemeProvider</code>{' '}
        to apply <code>legacyTheme</code>, <code>lightTheme</code>, <code>darkTheme</code>, or your own{' '}
        <code>RechartsTheme</code> object to a subtree of charts.
      </p>
      <p>
        The core precedence model is now part of the implementation: explicit component props win over theme defaults,
        theme defaults win over component <code>defaultProps</code>, and the nearest theme provider wins over outer
        providers.
      </p>

      <ThemePreview />

      <section>
        <h2>Built-in themes</h2>
        <p>Recharts currently ships with three named themes:</p>
        <ul>
          <li>
            <code>legacyTheme</code> preserves the long-standing defaults and remains the implicit baseline when no
            theme provider is present.
          </li>
          <li>
            <code>lightTheme</code> is the new first-party light theme.
          </li>
          <li>
            <code>darkTheme</code> is the matching dark theme.
          </li>
        </ul>
        <p>
          Built-in themes are plain objects, so they can be imported, inspected, spread, serialized, and used as the
          starting point for project-specific variants.
        </p>
        <SourceCodeEditor value={builtInThemesExample} />
      </section>

      <section>
        <h2>Quick start</h2>
        <p>
          The main API is a provider around a group of charts. This keeps dashboards, apps, and documentation sites
          consistent while keeping all existing chart props available as escape hatches.
        </p>
        <SourceCodeEditor value={quickStartExample} />
        <p>
          For one-off local changes, use a nested provider around the chart or chart section that needs different
          tokens. That is the supported local-override mechanism today; there is no separate chart-root{' '}
          <code>theme</code> prop.
        </p>
        <SourceCodeEditor value={localOverrideExample} />
      </section>

      <section>
        <h2>Theme anatomy</h2>
        <p>
          A Recharts theme is a plain object shaped like the exported <code>RechartsTheme</code> type. Shared tokens
          come first, component-specific overrides come second.
        </p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Section</th>
              <th>Typical values</th>
              <th>Used by core today</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>meta</code>
              </td>
              <td>name, mode</td>
              <td>No direct rendering impact; useful for debugging and app-level logic.</td>
            </tr>
            <tr>
              <td>
                <code>colors</code>
              </td>
              <td>surface, text, mutedText, grid, border, axis, tooltipCursor, canvas</td>
              <td>Axes, grids, labels, tooltip, legend, reference items, Brush, Treemap, Sunburst.</td>
            </tr>
            <tr>
              <td>
                <code>typography</code>
              </td>
              <td>fontFamily, fontSize, fontWeight, letterSpacing, lineHeight</td>
              <td>Axes, labels, text, tooltip, legend, Sunburst.</td>
            </tr>
            <tr>
              <td>
                <code>strokeWidths</code>
              </td>
              <td>axis, grid, line, area, bar, scatter, reference, polarGrid</td>
              <td>Axes, grids, reference items, and graphical items that expose stroke width.</td>
            </tr>
            <tr>
              <td>
                <code>radii</code>
              </td>
              <td>tooltip, bar, rectangle, legend, surface</td>
              <td>Tooltip today. Other radius tokens are reserved for future wiring or app-level coordination.</td>
            </tr>
            <tr>
              <td>
                <code>shadows</code>
              </td>
              <td>tooltip, legend, surface</td>
              <td>Tooltip today. Other shadow tokens are reserved for future wiring or app-level coordination.</td>
            </tr>
            <tr>
              <td>
                <code>series</code>
              </td>
              <td>palette, keyed</td>
              <td>Graphical items such as Line, Area, Bar, Scatter, Radar, Pie, Funnel, RadialBar.</td>
            </tr>
            <tr>
              <td>
                <code>components</code>
              </td>
              <td>Tooltip, Legend, CartesianGrid, XAxis, YAxis, Area, Line, Bar, and more</td>
              <td>Per-component default prop overrides for the supported public exports.</td>
            </tr>
            <tr>
              <td>
                <code>custom</code>
              </td>
              <td>project-specific metadata</td>
              <td>Stored in the theme object but not consumed automatically by Recharts.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Creating custom themes</h2>
        <p>
          Recharts does not currently ship a <code>createRechartsTheme()</code> helper. The supported approach is to
          compose plain objects in user code, usually by spreading <code>lightTheme</code> or <code>darkTheme</code> and
          overriding the fields you want to change.
        </p>
        <SourceCodeEditor value={customThemeExample} />
        <p>
          If you only need local overrides, prefer a nested provider over cloning the whole theme. If you need a
          reusable branded theme package, export a plain <code>RechartsTheme</code> object from your own codebase.
        </p>
      </section>

      <section>
        <h2>Handling multiple series</h2>
        <p>
          Multi-series charts must not depend on React child order or render order for color assignment. Recharts now
          derives a stable series identity from <code>coalesce(dataKey, name)</code>.
        </p>
        <ol>
          <li>Explicit component props still win if you set them.</li>
          <li>
            Otherwise, Recharts checks <code>theme.series.keyed[identity]</code>.
          </li>
          <li>
            If there is no keyed override, Recharts hashes the identity into <code>theme.series.palette</code>.
          </li>
        </ol>
        <p>
          Different graphical items apply the resolved series color differently: <code>Line</code> uses it as{' '}
          <code>stroke</code>; <code>Bar</code>, <code>Scatter</code>, <code>Pie</code>, <code>Funnel</code>, and{' '}
          <code>RadialBar</code> use it as <code>fill</code>; <code>Area</code> and <code>Radar</code> use it as both
          fill and stroke unless the keyed style provides separate values.
        </p>
        <p>
          If two series intentionally share the same <code>dataKey</code> and <code>name</code>, that identity is
          ambiguous by definition. In that case, use explicit <code>fill</code> or <code>stroke</code> props.
        </p>
        <SourceCodeEditor value={seriesPaletteExample} />
      </section>

      <section>
        <h2>Switching themes at runtime</h2>
        <p>
          Runtime switching is a normal React state update: change the provider&apos;s <code>theme</code> prop and leave
          chart markup alone. This is the same pattern now used by the Recharts website itself.
        </p>
        <SourceCodeEditor value={runtimeSwitchExample} />
      </section>

      <section>
        <h2>Using Recharts themes without a UI library</h2>
        <p>
          Recharts works well in plain React apps with no design-system provider. The two practical options are CSS
          variables and serializable JSON theme objects.
        </p>
        <p>
          CSS variables make theme switching instant and align naturally with server-rendered HTML. JSON theme objects
          make it easy to share branded chart defaults across projects, CDNs, CMS pipelines, or design-token builds.
        </p>
        <SourceCodeEditor value={cssVariablesExample} />
        <SourceCodeEditor value={jsonThemeExample} />
      </section>

      <section>
        <h2>Integrations with popular UI libraries</h2>
        <p>
          Recharts currently ships a first-party helper for Ant Design. For the other libraries, the recommended
          approach today is to read the active library theme in your app, map its tokens to a plain{' '}
          <code>RechartsTheme</code> object, and pass that object to <code>RechartsThemeProvider</code>.
        </p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Library</th>
              <th>Theming model</th>
              <th>Variables to map</th>
              <th>Recommended integration today</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <TargetBlankLink href="https://mui.com/material-ui/customization/theming/">Material UI</TargetBlankLink>
              </td>
              <td>
                <code>ThemeProvider</code> + <code>createTheme()</code>
              </td>
              <td>palette, typography, shape, divider/background, shadows</td>
              <td>
                Build a small mapper from the current MUI theme to a <code>RechartsTheme</code>.
              </td>
            </tr>
            <tr>
              <td>
                <TargetBlankLink href="https://ant.design/docs/react/customize-theme">Ant Design</TargetBlankLink>
              </td>
              <td>
                <code>ConfigProvider</code> theme tokens + algorithms
              </td>
              <td>colorPrimary, colorText, colorBgContainer, colorBorder, fontSize, lineWidth, borderRadius</td>
              <td>
                Use <code>rechartsFromAntd(token)</code>.
              </td>
            </tr>
            <tr>
              <td>
                <TargetBlankLink href="https://chakra-ui.com/docs/theming/overview">Chakra UI</TargetBlankLink>
              </td>
              <td>system config, semantic tokens, CSS variables</td>
              <td>semantic colors, text styles, radii, borders, token-based palettes</td>
              <td>Use Chakra&apos;s CSS variables or resolved tokens as the source of your Recharts theme.</td>
            </tr>
            <tr>
              <td>
                <TargetBlankLink href="https://mantine.dev/theming/theme-object/">Mantine</TargetBlankLink>
              </td>
              <td>
                <code>MantineProvider</code> + deeply merged theme object
              </td>
              <td>colors arrays, font family, radius, shadows, component defaults</td>
              <td>
                Read the active Mantine theme and map it to <code>RechartsTheme</code> in app code.
              </td>
            </tr>
            <tr>
              <td>
                <TargetBlankLink href="https://ui.shadcn.com/docs/theming">shadcn/ui</TargetBlankLink> +{' '}
                <TargetBlankLink href="https://tailwindcss.com/docs/theme">Tailwind CSS</TargetBlankLink>
              </td>
              <td>semantic CSS variables in :root and .dark</td>
              <td>background, foreground, border, radius, chart-1 through chart-5</td>
              <td>
                Use CSS variables directly in a plain <code>RechartsTheme</code> object.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Material UI</h3>
        <p>
          Material UI already has the provider-and-theme-object model that Recharts needs. A small local mapper can keep
          chart surfaces, typography, and series colors aligned with the rest of the app.
        </p>
        <SourceCodeEditor value={muiIntegrationExample} />

        <h3>Ant Design</h3>
        <p>
          Ant Design exposes seed tokens, derived tokens, and algorithms such as <code>defaultAlgorithm</code>,{' '}
          <code>darkAlgorithm</code>, and <code>compactAlgorithm</code>. For the live preview below, Recharts also
          vendors adapted copies of all seven custom Ant Design website <code>ThemePreview</code> themes.
        </p>
        <AntdThemePreview />
        <p>
          The Bootstrap, Cartoon, Geek, Glass, Illustration, MUI-like, and shadcn-like theme configs used in this
          preview were adapted from Ant Design&apos;s website sources under the MIT license:{' '}
          <TargetBlankLink href="https://github.com/ant-design/ant-design/tree/398420c1599c431e02e639f557c6c59ef1fa2d1b/.dumi/pages/index/components/ThemePreview/previewThemes">
            ant-design/.dumi/pages/index/components/ThemePreview/previewThemes
          </TargetBlankLink>
          .
        </p>
        <SourceCodeEditor value={antdIntegrationExample} />

        <h3>Chakra UI</h3>
        <p>
          Chakra UI is token-first and CSS-variable-driven, so it works well with a Recharts theme object that
          references Chakra&apos;s semantic variables directly.
        </p>
        <SourceCodeEditor value={chakraIntegrationExample} />

        <h3>Mantine</h3>
        <p>
          Mantine themes are deeply merged objects with color scales, radii, shadows, fonts, and component defaults. A
          small mapper keeps chart defaults consistent with the rest of a Mantine app.
        </p>
        <SourceCodeEditor value={mantineIntegrationExample} />

        <h3>shadcn/ui and Tailwind CSS</h3>
        <p>
          Many teams do not use a JavaScript theme provider at all. Instead, they define semantic CSS variables and let
          Tailwind utilities or shadcn components consume them. Recharts can use that same token layer directly.
        </p>
        <SourceCodeEditor value={shadcnIntegrationExample} />
      </section>

      <section>
        <h2>Current gaps</h2>
        <p>
          The core runtime is in place, but a few convenience layers from the original design brief are still missing:
        </p>
        <ul>
          <li>
            There is no first-party <code>createRechartsTheme()</code> helper yet; theme composition is still normal
            object spread or an app-specific utility.
          </li>
          <li>There are no official adapters for Material UI, Chakra UI, Mantine, or shadcn/Tailwind yet.</li>
          <li>
            There is no dedicated chart-root <code>theme</code> prop; local overrides use nested providers.
          </li>
          <li>
            Some reserved tokens are not consumed by core yet, including <code>colors.canvas</code>,{' '}
            <code>radii.legend</code>, <code>radii.surface</code>, <code>shadows.legend</code>, and{' '}
            <code>shadows.surface</code>.
          </li>
          <li>
            <code>custom</code> is useful for app-level coordination, but Recharts does not read it automatically.
          </li>
        </ul>
      </section>

      <section>
        <h2>Why this design</h2>
        <p>This implementation balances ergonomics with flexibility:</p>
        <ul>
          <li>A provider gives apps one place to apply shared defaults.</li>
          <li>Nested providers keep local overrides simple without introducing a new chart-root prop.</li>
          <li>Plain theme objects are easy to share, serialize, and version.</li>
          <li>Explicit chart props still work, so existing public APIs remain the final override layer.</li>
          <li>Stable series identity avoids the color swaps that index-based palettes cause in real React trees.</li>
        </ul>
      </section>

      <section>
        <h2>Alternatives we considered and rejected</h2>
        <h3>Only a chart-level theme prop</h3>
        <p>
          This is easy to explain, but it repeats the same theme object on every chart and makes dashboard-wide
          switching awkward.
        </p>

        <h3>Only a provider with no local override</h3>
        <p>
          This works for uniform dashboards, but breaks down when one chart needs a presentation mode, a brand-specific
          palette, or a localized override inside a mixed page. Nested providers solve that without a second API.
        </p>

        <h3>An unstyled mode without shared theme tokens</h3>
        <p>
          An <code>unstyled</code> escape hatch is still valuable, but by itself it does not solve the main product
          problem: consistent shared defaults, simple theme switching, and alignment with existing design systems.
        </p>

        <h3>Per-component configuration with no token layer</h3>
        <p>
          A giant object full of component-specific defaults becomes hard to read, hard to map from external design
          systems, and hard to extend. Shared tokens plus targeted component overrides scale better.
        </p>

        <h3>Index-only automatic palettes</h3>
        <p>
          Coloring series only by position looks nice in demos, but it is unstable when series are reordered, toggled,
          conditionally rendered, or re-traversed by React during updates. Stable series identity is the safer fallback.
        </p>
      </section>
    </article>
  );
}
