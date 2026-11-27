import { Bar, BarChart, RechartsFill, XAxis, YAxis, pattern, patterns } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

/*
 * One bar for each built-in pattern. Each data entry sets its own fill object,
 * and none of them sets a color, so every bar keeps the theme color of the series.
 */
const names: ReadonlyArray<keyof typeof patterns> = [
  'diagonal',
  'crosshatch',
  'horizontal',
  'vertical',
  'grid',
  'zigzag',
  'circle',
  'cross',
  'diamond',
  'square',
  'star',
  'triangle',
  'wye',
];

const data = names.map(name => {
  const fill: RechartsFill = { definition: pattern(patterns[name]) };
  return { name, value: 1, fill };
});

// Each strip gets a fixed height, so that every pattern is large enough to see, and every label fits
const stripHeight = 40;
const margin = { top: 10, right: 10, left: 10, bottom: 10 };
const chartStyle = { width: '100%', maxWidth: 700, height: names.length * stripHeight + margin.top + margin.bottom };

export default function BuiltInPatternsExample({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  return (
    <BarChart style={chartStyle} responsive data={data} layout="vertical" margin={margin}>
      <XAxis type="number" hide />
      <YAxis type="category" dataKey="name" width="auto" />
      <Bar dataKey="value" isAnimationActive={isAnimationActive} />
      <RechartsDevtools />
    </BarChart>
  );
}
