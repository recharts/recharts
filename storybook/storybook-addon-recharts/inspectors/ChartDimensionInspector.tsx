import { useChartHeight, useChartWidth } from '../../../src';

export function ChartDimensionInspector() {
  const chartWidth = useChartWidth();
  const chartHeight = useChartHeight();

  return `useChartWidth: ${chartWidth}, useChartHeight: ${chartHeight}`;
}
