import { useMemo } from 'react';
import {
  Legend,
  Pie,
  PieChart,
  RechartsTheme,
  RechartsThemeProvider,
  Tooltip,
  lightTheme,
  pattern,
  patterns,
  useRechartsTheme,
} from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { name: 'Search', value: 400 },
  { name: 'Direct', value: 300 },
  { name: 'Social', value: 300 },
  { name: 'Email', value: 200 },
  { name: 'Referral', value: 100 },
];

// One pattern for each theme entry. Create the definitions once, outside of components.
const seriesPatterns = [
  pattern(patterns.diagonal),
  pattern(patterns.circle),
  pattern(patterns.crosshatch),
  pattern(patterns.triangle),
  pattern(patterns.zigzag),
];

// Adds a pattern to each graphical item of a theme, and keeps its colors.
function withPatterns(theme: RechartsTheme): RechartsTheme {
  return {
    ...theme,
    graphicalItems: theme.graphicalItems.map((item, index) => ({
      ...item,
      fillDefinition: seriesPatterns[index % seriesPatterns.length],
    })),
  };
}

const chartStyle = { width: '100%', maxWidth: 500, maxHeight: '70vh', aspectRatio: 1.2 };

export default function ThemePatternsExample({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  // Build on the active theme, so that the example follows light and dark mode
  const theme = useRechartsTheme() ?? lightTheme;
  const patternedTheme = useMemo(() => withPatterns(theme), [theme]);
  return (
    <RechartsThemeProvider value={patternedTheme}>
      {/* Pie takes one theme entry per sector, so each sector gets its own color and pattern */}
      <PieChart style={chartStyle} responsive>
        <Pie data={data} dataKey="value" nameKey="name" isAnimationActive={isAnimationActive} />
        <Legend iconSize={24} />
        <Tooltip />
        <RechartsDevtools />
      </PieChart>
    </RechartsThemeProvider>
  );
}
