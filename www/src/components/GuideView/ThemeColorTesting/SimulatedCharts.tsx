import { CSSProperties, useMemo } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  RechartsThemeProvider,
  Tooltip,
  type RechartsTheme,
  XAxis,
  YAxis,
} from 'recharts';
import { simulateVision, toHex, type ThemeReport, type Vision } from '@recharts/devtools/theme';
import styles from './themeChecker.module.css';

const categories = ['Q1', 'Q2', 'Q3', 'Q4'];
const chartStyle: CSSProperties = { width: '100%', minWidth: 0, aspectRatio: 1.4 };
const margin = { top: 16, right: 16, left: 8, bottom: 0 };
const xAxisLabel = { value: 'Quarter', position: 'insideBottom', offset: 0 } as const;
/** Room below the ticks for the axis title, so the legend does not cover it. */
const X_AXIS_HEIGHT = 48;
const yAxisLabel = { value: 'Value', angle: -90, position: 'insideLeft' } as const;

/*
 * Bar and Line take their theme color by sorted dataKey, so the keys are zero-padded
 * to keep "series 10" after "series 9".
 */
const seriesName = (index: number) => `Series ${index + 1}`;
const seriesKey = (index: number) => `series ${String(index + 1).padStart(2, '0')}`;

function chartData(count: number) {
  return categories.map((name, row) => ({
    name,
    ...Object.fromEntries(Array.from({ length: count }, (_, i) => [seriesKey(i), 20 + ((i * 37 + row * 23) % 60)])),
  }));
}

type SimulatedChartsProps = {
  theme: RechartsTheme;
  report: ThemeReport;
  vision: Vision;
};

/**
 * Real Recharts charts, painted with the theme as a reader with the selected vision sees it.
 * The colors go through the same `simulateVision` as the checks above.
 */
export default function SimulatedCharts({ theme, report, vision }: SimulatedChartsProps) {
  const { series, severity, text } = report;
  const label = text;

  const { page, simulatedTheme } = useMemo(() => {
    const see = (color: string) => toHex(simulateVision(color, vision, severity));
    const simulatedPage = see(report.backgrounds.page ?? Object.values(report.backgrounds)[0]);
    return {
      page: simulatedPage,
      simulatedTheme: {
        ...theme,
        pageBackground: simulatedPage,
        graphicalItems: series.map(item => ({
          fill: see(item.fill),
          stroke: see(item.stroke),
          fillOpacity: item.fillOpacity,
          active: { fill: simulatedPage, stroke: see(item.stroke), strokeWidth: 2 },
        })),
        typography: { ...theme.typography, color: label == null ? theme.typography?.color : see(label) },
        // The tooltip and the legend sit on the page, so they follow the simulated page color too.
        tooltip: {
          ...theme.tooltip,
          contentStyle: { ...theme.tooltip?.contentStyle, backgroundColor: simulatedPage },
        },
        legend: { ...theme.legend, wrapperStyle: { ...theme.legend?.wrapperStyle, backgroundColor: simulatedPage } },
      } satisfies RechartsTheme,
    };
  }, [theme, report.backgrounds, series, severity, label, vision]);

  const previewStyle = useMemo(() => ({ backgroundColor: page }), [page]);
  const count = series.length;
  const data = useMemo(() => chartData(count), [count]);
  const pieData = series.map((_, i) => ({ name: seriesName(i), value: 30 + ((i * 17) % 40) }));
  const keys = series.map((_, i) => seriesKey(i));

  return (
    <RechartsThemeProvider value={simulatedTheme}>
      <div className={styles.preview} style={previewStyle}>
        <BarChart style={chartStyle} responsive data={data} margin={margin}>
          <CartesianGrid />
          <XAxis dataKey="name" label={xAxisLabel} height={X_AXIS_HEIGHT} />
          <YAxis width="auto" label={yAxisLabel} />
          <Tooltip />
          <Legend itemSorter={null} />
          {keys.map((key, i) => (
            <Bar key={key} dataKey={key} name={seriesName(i)} stackId="stack">
              {label != null && <LabelList dataKey={key} position="inside" />}
            </Bar>
          ))}
        </BarChart>
        <LineChart style={chartStyle} responsive data={data} margin={margin}>
          <CartesianGrid />
          <XAxis dataKey="name" label={xAxisLabel} height={X_AXIS_HEIGHT} />
          <YAxis width="auto" label={yAxisLabel} />
          <Tooltip />
          <Legend itemSorter={null} />
          {keys.map((key, i) => (
            <Line key={key} dataKey={key} name={seriesName(i)} strokeWidth={2} />
          ))}
        </LineChart>
        <PieChart style={chartStyle} responsive>
          <Tooltip />
          <Legend itemSorter={null} />
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            innerRadius="45%"
            outerRadius="70%"
            label={label != null}
          />
        </PieChart>
      </div>
    </RechartsThemeProvider>
  );
}
