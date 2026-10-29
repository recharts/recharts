import { useMemo } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  RechartsTheme,
  RechartsThemeProvider,
  Tooltip,
  XAxis,
  YAxis,
  lightTheme,
  pattern,
  patterns,
  useRechartsTheme,
} from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { name: 'Q1', north: 590, south: 800, east: 1400, west: 490 },
  { name: 'Q2', north: 868, south: 967, east: 1506, west: 590 },
  { name: 'Q3', north: 1397, south: 1098, east: 989, west: 350 },
];

// #endregion
const chartStyle = { width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 };
const chartMargin = { top: 20, right: 0, left: 0, bottom: 5 };

// One pattern per series. Create the definitions once, outside of components.
const seriesPatterns = [
  pattern(patterns.diagonal),
  pattern(patterns.dots),
  pattern(patterns.crosshatch),
  pattern(patterns.zigzag),
  pattern(patterns.grid),
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

const BarChartWithThemePatterns = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => {
  // Build on the active theme, so the example follows light and dark mode.
  const theme = useRechartsTheme() ?? lightTheme;
  const patternedTheme = useMemo(() => withPatterns(theme), [theme]);
  return (
    <RechartsThemeProvider value={patternedTheme}>
      {/* The Bars set no fill: each one takes the color and the pattern of its theme entry */}
      <BarChart style={chartStyle} responsive data={data} margin={chartMargin}>
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend iconSize={32} />
        <Bar dataKey="north" isAnimationActive={isAnimationActive} />
        <Bar dataKey="south" isAnimationActive={isAnimationActive} />
        <Bar dataKey="east" isAnimationActive={isAnimationActive} />
        <Bar dataKey="west" isAnimationActive={isAnimationActive} />
        <RechartsDevtools />
      </BarChart>
    </RechartsThemeProvider>
  );
};

export default BarChartWithThemePatterns;
