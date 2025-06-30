import { useChartHeight, useChartWidth } from '../../../src';

export function ChartDimensionInspector() {
  const chartWidth = useChartWidth();
  const chartHeight = useChartHeight();

  return `width: ${chartWidth}, height: ${chartHeight}`;
}
