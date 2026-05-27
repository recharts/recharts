import { CSSProperties, useState } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  RechartsThemeProvider,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  darkTheme,
  legacyTheme,
  lightTheme,
  type RechartsTheme,
} from 'recharts';

const data = [
  { quarter: 'Q1', revenue: 42, cost: 24, forecast: 39 },
  { quarter: 'Q2', revenue: 48, cost: 28, forecast: 44 },
  { quarter: 'Q3', revenue: 53, cost: 32, forecast: 49 },
  { quarter: 'Q4', revenue: 61, cost: 36, forecast: 58 },
];

type PreviewThemeName = 'legacy' | 'light' | 'dark' | 'brand';

const brandTheme = {
  ...lightTheme,
  meta: {
    ...lightTheme.meta,
    name: 'brand',
  },
  colors: {
    ...lightTheme.colors,
    canvas: '#fff7ed',
    surface: '#ffffff',
    text: '#7c2d12',
    mutedText: '#9a3412',
    border: '#fdba74',
    grid: '#ffedd5',
    axis: '#9a3412',
    tooltipCursor: '#fdba74',
  },
  series: {
    palette: ['#ea580c', '#7c3aed', '#16a34a'],
    keyed: {
      revenue: { stroke: '#ea580c' },
      cost: { stroke: '#7c3aed' },
      forecast: { stroke: '#16a34a', strokeDasharray: '5 3' },
    },
  },
  components: {
    ...lightTheme.components,
    CartesianGrid: {
      ...lightTheme.components?.CartesianGrid,
      stroke: '#ffedd5',
    },
    XAxis: {
      ...lightTheme.components?.XAxis,
      stroke: '#9a3412',
    },
    YAxis: {
      ...lightTheme.components?.YAxis,
      stroke: '#9a3412',
    },
    Tooltip: {
      ...lightTheme.components?.Tooltip,
      cursor: { stroke: '#fdba74' },
      contentStyle: {
        ...lightTheme.components?.Tooltip?.contentStyle,
        backgroundColor: '#ffffff',
        border: '1px solid #fdba74',
        color: '#7c2d12',
      },
      labelStyle: {
        color: '#7c2d12',
      },
      itemStyle: {
        color: '#7c2d12',
      },
    },
    DefaultTooltipContent: {
      ...lightTheme.components?.DefaultTooltipContent,
      contentStyle: {
        ...lightTheme.components?.DefaultTooltipContent?.contentStyle,
        backgroundColor: '#ffffff',
        border: '1px solid #fdba74',
        color: '#7c2d12',
      },
      labelStyle: {
        color: '#7c2d12',
      },
      itemStyle: {
        color: '#7c2d12',
      },
    },
    Legend: {
      ...lightTheme.components?.Legend,
      wrapperStyle: {
        color: '#7c2d12',
      },
      inactiveColor: '#9a3412',
    },
    DefaultLegendContent: {
      ...lightTheme.components?.DefaultLegendContent,
      labelStyle: {
        color: '#7c2d12',
      },
      inactiveColor: '#9a3412',
    },
  },
} satisfies RechartsTheme;

const themes: Record<PreviewThemeName, RechartsTheme> = {
  legacy: legacyTheme,
  light: lightTheme,
  dark: darkTheme,
  brand: brandTheme,
};

const themeLabels: Record<PreviewThemeName, string> = {
  legacy: 'Legacy',
  light: 'Light',
  dark: 'Dark',
  brand: 'Custom brand',
};

const themeNames: ReadonlyArray<PreviewThemeName> = ['legacy', 'light', 'dark', 'brand'];

function ThemePreview() {
  const [activeThemeName, setActiveThemeName] = useState<PreviewThemeName>('light');
  const theme = themes[activeThemeName];
  const { colors } = theme;

  const panelStyle: CSSProperties = {
    backgroundColor: colors?.surface ?? '#fff',
    border: `1px solid ${colors?.border ?? '#ccc'}`,
    borderRadius: 16,
    padding: 16,
    color: colors?.text ?? '#000',
    marginBottom: 24,
  };

  const buttonStyle = (themeName: PreviewThemeName): CSSProperties => ({
    backgroundColor: themeName === activeThemeName ? (colors?.text ?? '#000') : (colors?.surface ?? '#fff'),
    color: themeName === activeThemeName ? (colors?.surface ?? '#fff') : (colors?.text ?? '#000'),
    border: `1px solid ${colors?.border ?? '#ccc'}`,
    borderRadius: 999,
    padding: '0.45rem 0.8rem',
    cursor: 'pointer',
    font: 'inherit',
  });

  return (
    <section style={panelStyle}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
        {themeNames.map(themeName => (
          <button
            key={themeName}
            type="button"
            style={buttonStyle(themeName)}
            onClick={() => setActiveThemeName(themeName)}
            aria-pressed={themeName === activeThemeName}
          >
            {themeLabels[themeName]}
          </button>
        ))}
      </div>
      <p style={{ color: colors?.mutedText ?? colors?.text ?? '#666', marginTop: 0 }}>
        This preview uses the current Recharts theme API. Switching themes updates axes, grid, tooltip, legend, and the
        default series styling together.
      </p>
      <div
        style={{
          height: 320,
          backgroundColor: colors?.canvas ?? colors?.surface ?? '#fff',
          border: `1px solid ${colors?.border ?? '#ccc'}`,
          borderRadius: 16,
          padding: 12,
        }}
      >
        <RechartsThemeProvider theme={theme}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 16, right: 16, bottom: 8, left: 0 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="quarter" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line dataKey="revenue" name="Revenue" />
              <Line dataKey="cost" name="Cost" />
              <Line dataKey="forecast" name="Forecast" />
            </LineChart>
          </ResponsiveContainer>
        </RechartsThemeProvider>
      </div>
    </section>
  );
}

export default ThemePreview;
