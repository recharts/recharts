import { Bar, BarChart, CartesianGrid, lightTheme, RechartsTheme, RechartsThemeProvider, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { month: 'Jan', desktop: 320, mobile: 180 },
  { month: 'Feb', desktop: 410, mobile: 260 },
  { month: 'Mar', desktop: 380, mobile: 300 },
  { month: 'Apr', desktop: 500, mobile: 220 },
];

/*
 * A nested provider REPLACES the outer theme, it does not merge with it.
 * Spread the theme you want to build on so that the sections you do not
 * override keep working.
 */
const campaignTheme: RechartsTheme = {
  ...lightTheme,
  graphicalItems: [
    { fill: '#7c3aed', fillOpacity: 0.9 },
    { fill: '#db2777', fillOpacity: 0.9 },
  ],
};

function TrafficChart({ mobileFill }: { mobileFill?: string }) {
  return (
    <BarChart
      style={{ width: '100%', maxHeight: '70vh', aspectRatio: 1.2 }}
      responsive
      data={data}
      margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
    >
      <CartesianGrid />
      <XAxis dataKey="month" />
      <YAxis />
      <Bar dataKey="desktop" isAnimationActive={false} />
      <Bar dataKey="mobile" fill={mobileFill} isAnimationActive={false} />
      <RechartsDevtools />
    </BarChart>
  );
}

export default function NestedThemeExample() {
  return (
    <RechartsThemeProvider value={lightTheme}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, padding: 12, backgroundColor: '#ffffff' }}>
        <figure style={{ margin: 0, width: 240 }}>
          <TrafficChart />
          <figcaption style={{ color: '#18181b' }}>outer lightTheme</figcaption>
        </figure>

        <RechartsThemeProvider value={campaignTheme}>
          <figure style={{ margin: 0, width: 240 }}>
            <TrafficChart />
            <figcaption style={{ color: '#18181b' }}>nested campaignTheme</figcaption>
          </figure>

          <figure style={{ margin: 0, width: 240 }}>
            <TrafficChart mobileFill="#f59e0b" />
            <figcaption style={{ color: '#18181b' }}>nested theme + explicit fill</figcaption>
          </figure>
        </RechartsThemeProvider>
      </div>
    </RechartsThemeProvider>
  );
}
