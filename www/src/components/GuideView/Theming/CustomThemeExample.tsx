import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  RechartsTheme,
  RechartsThemeProvider,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { month: 'Jan', revenue: 4200, profit: 1100 },
  { month: 'Feb', revenue: 5800, profit: 1500 },
  { month: 'Mar', revenue: 7200, profit: 2400 },
  { month: 'Apr', revenue: 6100, profit: 1800 },
  { month: 'May', revenue: 8900, profit: 3100 },
  { month: 'Jun', revenue: 7400, profit: 2600 },
];

/*
 * A theme is a plain object. There is no `createTheme` helper and none is needed:
 * you can build it inline, import it from a shared module, or parse it from JSON.
 */
const brandTheme: RechartsTheme = {
  typography: {
    color: '#1e1b4b',
    fontFamily: 'Georgia, serif',
    fontSize: 13,
  },
  /*
   * `revenue` picks index 0 and `profit` picks index 1 of this array.
   * The index comes from a hash of the dataKey, not from the render order.
   */
  graphicalItems: [
    {
      stroke: '#4338ca',
      strokeWidth: 3,
      active: { fill: '#ffffff', stroke: '#4338ca', strokeWidth: 3 },
    },
    {
      stroke: '#0f766e',
      strokeWidth: 3,
      strokeDasharray: '6 3',
      active: { fill: '#ffffff', stroke: '#0f766e', strokeWidth: 3 },
    },
  ],
  grid: {
    stroke: '#c7d2fe',
    strokeDasharray: '1 4',
    fill: 'none',
  },
  axis: {
    stroke: '#4338ca',
    strokeWidth: 1,
  },
  reference: {
    stroke: '#be123c',
    strokeWidth: 2,
    strokeDasharray: '4 4',
  },
  cursor: {
    stroke: '#4338ca',
    strokeWidth: 1,
    strokeDasharray: '3 3',
    fill: '#4338ca',
    fillOpacity: 0.08,
  },
  tooltip: {
    contentStyle: {
      margin: 0,
      padding: 12,
      backgroundColor: '#eef2ff',
      border: '2px solid #4338ca',
      borderRadius: 8,
    },
    labelStyle: { margin: 0, fontWeight: 'bold', color: '#1e1b4b' },
    itemStyle: { display: 'block', paddingTop: 2, paddingBottom: 2 },
  },
  legend: {
    wrapperStyle: { paddingTop: 8 },
    labelStyle: { letterSpacing: '0.05em', textTransform: 'uppercase' },
  },
};

export default function CustomThemeExample() {
  return (
    <div style={{ padding: 12, borderRadius: 8, backgroundColor: '#ffffff' }}>
      <RechartsThemeProvider value={brandTheme}>
        <LineChart
          style={{ width: '100%', maxWidth: 600, maxHeight: '70vh', aspectRatio: 1.618 }}
          responsive
          data={data}
          margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
        >
          <CartesianGrid />
          <XAxis dataKey="month" />
          <YAxis />
          <ReferenceLine y={6000} />
          <Tooltip defaultIndex={2} />
          <Legend />
          <Line dataKey="revenue" isAnimationActive={false} />
          <Line dataKey="profit" isAnimationActive={false} />
          <RechartsDevtools />
        </LineChart>
      </RechartsThemeProvider>
    </div>
  );
}
