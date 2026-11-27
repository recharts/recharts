import * as React from 'react';
import {
  Area,
  AreaChart,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  Scatter,
  ScatterChart,
  SymbolType,
  Tooltip,
  XAxis,
  YAxis,
} from '../../src';
import { pageData } from '../../storybook/stories/data';

const symbols: ReadonlyArray<SymbolType> = ['circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye'];

/**
 * One series per symbol, spread apart vertically so that the dots do not overlap.
 */
const seriesData = [0, 1, 2, 3, 4, 5].map(x => {
  const entry: Record<string, number> = { x };
  symbols.forEach((symbol, i) => {
    entry[symbol] = 10 + i * 12 + ((x * (i + 3)) % 7);
  });
  return entry;
});

/**
 * Every symbol as `dot`, at the default size, plus one series with the default dot.
 * The legend draws each symbol in the middle of the line icon.
 */
export const LineChartWithDotSymbols = () => (
  <LineChart width={600} height={400} data={seriesData}>
    <XAxis dataKey="x" />
    <YAxis />
    <Legend />
    {symbols.map(symbol => (
      <Line key={symbol} dataKey={symbol} dot={symbol} isAnimationActive={false} />
    ))}
    <Line dataKey={(entry: Record<string, number>) => (entry.wye ?? 0) + 12} name="default" isAnimationActive={false} />
  </LineChart>
);

/**
 * The object form of `dot` and `activeDot` sets the symbol and its size.
 * The tooltip shows the active dots.
 */
export const LineChartWithResizedDotSymbols = () => (
  <LineChart width={600} height={400} data={pageData}>
    <XAxis dataKey="name" />
    <YAxis />
    <Legend />
    <Tooltip defaultIndex={2} />
    <Line
      dataKey="uv"
      dot={{ symbol: 'diamond', r: 6 }}
      activeDot={{ symbol: 'diamond', r: 9 }}
      isAnimationActive={false}
    />
    <Line dataKey="pv" dot="star" activeDot="star" isAnimationActive={false} />
    <Line dataKey="amt" dot={{ symbol: 'triangle', r: 5 }} legendType="plainline" isAnimationActive={false} />
  </LineChart>
);

export const AreaChartWithDotSymbols = () => (
  <AreaChart width={600} height={400} data={pageData}>
    <XAxis dataKey="name" />
    <YAxis />
    <Legend />
    <Area dataKey="uv" dot="square" isAnimationActive={false} />
    <Area dataKey="pv" dot={{ symbol: 'cross', r: 5 }} isAnimationActive={false} />
  </AreaChart>
);

/**
 * Radar shows the dot symbol in the legend instead of the default rect.
 */
export const RadarChartWithDotSymbols = () => (
  <RadarChart width={500} height={450} data={pageData}>
    <PolarGrid />
    <PolarAngleAxis dataKey="name" />
    <Legend />
    <Radar dataKey="uv" dot="star" fillOpacity={0.3} isAnimationActive={false} />
    <Radar dataKey="amt" dot={{ symbol: 'diamond', r: 6 }} fillOpacity={0.3} isAnimationActive={false} />
  </RadarChart>
);

/**
 * Scatter shows its shape in the legend instead of the default circle.
 */
export const ScatterChartWithShapeLegend = () => (
  <ScatterChart width={600} height={400}>
    <XAxis dataKey="uv" type="number" />
    <YAxis dataKey="pv" type="number" />
    <Legend />
    <Scatter name="star" data={pageData} shape="star" isAnimationActive={false} />
    <Scatter
      name="triangle"
      data={pageData.map(entry => ({ ...entry, pv: entry.pv + 300 }))}
      shape="triangle"
      isAnimationActive={false}
    />
  </ScatterChart>
);
