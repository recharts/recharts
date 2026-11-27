import { CSSProperties } from 'react';
import {
  Area,
  AreaChart,
  autoTheme,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  RechartsThemeProvider,
  Tooltip,
  TooltipIndex,
  XAxis,
  YAxis,
} from 'recharts';

const seriesData = [
  { month: 'Jan', desktop: 420, mobile: 240, tablet: 130, tv: 60 },
  { month: 'Feb', desktop: 380, mobile: 310, tablet: 150, tv: 90 },
  { month: 'Mar', desktop: 510, mobile: 290, tablet: 210, tv: 80 },
  { month: 'Apr', desktop: 470, mobile: 400, tablet: 180, tv: 120 },
  { month: 'May', desktop: 590, mobile: 430, tablet: 260, tv: 110 },
  { month: 'Jun', desktop: 640, mobile: 520, tablet: 240, tv: 150 },
];

/*
 * Twelve sectors, one for each color of the built-in palette.
 */
const pieData = [
  { name: 'Chrome', value: 240 },
  { name: 'Safari', value: 200 },
  { name: 'Edge', value: 170 },
  { name: 'Firefox', value: 150 },
  { name: 'Samsung Internet', value: 130 },
  { name: 'Opera', value: 115 },
  { name: 'UC Browser', value: 100 },
  { name: 'Brave', value: 90 },
  { name: 'Vivaldi', value: 80 },
  { name: 'DuckDuckGo', value: 70 },
  { name: 'Arc', value: 60 },
  { name: 'Yandex', value: 50 },
];

const gridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
  gap: 16,
  marginBottom: 20,
};

const chartStyle: CSSProperties = { width: '100%', minWidth: 0, aspectRatio: 1.6 };

const margin = { top: 10, right: 10, left: 0, bottom: 0 };

/*
 * No chart here has a color prop: every color comes from autoTheme,
 * which follows the CSS `color-scheme` of the page.
 */
export default function ThemeHeroExample({ defaultIndex }: { defaultIndex?: TooltipIndex }) {
  return (
    <RechartsThemeProvider value={autoTheme}>
      <div style={gridStyle}>
        <LineChart style={chartStyle} responsive data={seriesData} margin={margin} syncId="theme">
          <CartesianGrid />
          <XAxis dataKey="month" />
          <YAxis width="auto" />
          <Tooltip defaultIndex={defaultIndex} />
          <Line dataKey="desktop" strokeWidth={2} />
          <Line dataKey="mobile" strokeWidth={2} />
          <Line dataKey="tablet" strokeWidth={2} />
          <Line dataKey="tv" strokeWidth={2} />
          <Legend />
        </LineChart>

        <BarChart style={chartStyle} responsive data={seriesData} margin={margin} syncId="theme">
          <CartesianGrid />
          <XAxis dataKey="month" />
          <YAxis width="auto" />
          <Tooltip defaultIndex={defaultIndex} />
          <Bar dataKey="desktop" activeBar />
          <Bar dataKey="mobile" activeBar />
          <Bar dataKey="tablet" activeBar />
          <Bar dataKey="tv" activeBar />
          <Legend />
        </BarChart>

        <AreaChart style={chartStyle} responsive data={seriesData} margin={margin} syncId="theme">
          <CartesianGrid />
          <XAxis dataKey="month" />
          <YAxis width="auto" />
          <Tooltip defaultIndex={defaultIndex} />
          <Area dataKey="desktop" stackId="devices" />
          <Area dataKey="mobile" stackId="devices" />
          <Area dataKey="tablet" stackId="devices" />
          <Area dataKey="tv" stackId="devices" />
          <Legend />
        </AreaChart>

        <PieChart style={chartStyle} responsive syncId="theme">
          <Tooltip defaultIndex={defaultIndex} />
          <Pie data={pieData} dataKey="value" nameKey="name" innerRadius="45%" />
          <Legend />
        </PieChart>
      </div>
    </RechartsThemeProvider>
  );
}
