import { areaChartApiExamples } from './AreaChart';
import { barChartApiExamples } from './BarChart';
import { cellApiExamples } from './Cell';
import { composedChartApiExamples } from './ComposedChart';
import { errorBarApiExamples } from './ErrorBar';
import { funnelApiExamples } from './Funnel';
import { funnelChartApiExamples } from './FunnelChart';
import { labelApiExamples } from './Label';
import { labelListApiExamples } from './LabelList';
import { legendApiExamples } from './Legend';
import { lineChartApiExamples } from './LineChart';
import { pieChartApiExamples } from './PieChart';
import { radarChartApiExamples } from './RadarChart';
import { radialBarApiExamples } from './RadialBarChart';
import { referenceAreaApiExamples } from './ReferenceArea';
import { referenceDotApiExamples } from './ReferenceDot';
import { referenceLineApiExamples } from './ReferenceLine';
import { responsiveContainerApiExamples } from './ResponsiveContainer';
import { sankeyApiExamples } from './SankeyChart';
import { scatterChartApiExamples } from './ScatterChart';
import { treemapApiExamples } from './Treemap';
import { ChartExample } from '../exampleComponents/types.ts';
import { barStackApiExamples } from './BarStack';
import { zIndexLayerApiExamples } from './ZIndexLayer';
import { sunburstChartApiExamples } from './SunburstChart';
import { defaultZIndexesApiExamples } from './DefaultZIndexes';
import { useActiveTooltipDataPointsApiExamples } from './useActiveTooltipDataPoints';
import { useActiveTooltipLabelApiExamples } from './useActiveTooltipLabel';
import { useMarginApiExamples } from './useMargin';
import { useOffsetApiExamples } from './useOffset';
import { usePlotAreaApiExamples } from './usePlotArea';
import { useChartWidthAndHeightApiExamples } from './useChartWidth';
import { useXAxisDomainApiExamples } from './useXAxisDomain';
import { useYAxisDomainApiExamples } from './useYAxisDomain';
import { useIsTooltipActiveApiExamples } from './useIsTooltipActive';
import { useActiveTooltipCoordinateApiExamples } from './useActiveTooltipCoordinate';
import { getRelativeCoordinateExamples } from './getRelativeCoordinate';
import { useAxisInverseDataSnapScaleApiExamples } from './useAxisInverseDataSnapScale';
import { useAxisInverseTickSnapScaleApiExamples } from './useAxisInverseTickSnapScale';
import { useXAxisTicksApiExamples } from './useXAxisTicks';
import { useYAxisTicksApiExamples } from './useYAxisTicks';

export const allApiExamples: Record<string, ReadonlyArray<ChartExample>> = {
  AreaChart: areaChartApiExamples,
  BarChart: barChartApiExamples,
  BarStack: barStackApiExamples,
  LineChart: lineChartApiExamples,
  ComposedChart: composedChartApiExamples,
  PieChart: pieChartApiExamples,
  RadarChart: radarChartApiExamples,
  ScatterChart: scatterChartApiExamples,
  RadialBarChart: radialBarApiExamples,
  Treemap: treemapApiExamples,
  ResponsiveContainer: responsiveContainerApiExamples,
  Cell: cellApiExamples,
  Legend: legendApiExamples,
  ReferenceLine: referenceLineApiExamples,
  ReferenceDot: referenceDotApiExamples,
  ReferenceArea: referenceAreaApiExamples,
  ErrorBar: errorBarApiExamples,
  Label: labelApiExamples,
  LabelList: labelListApiExamples,
  Funnel: funnelApiExamples,
  FunnelChart: funnelChartApiExamples,
  Sankey: sankeyApiExamples,
  SunburstChart: sunburstChartApiExamples,
  ZIndexLayer: zIndexLayerApiExamples,
  DefaultZIndexes: defaultZIndexesApiExamples,
  useIsTooltipActive: useIsTooltipActiveApiExamples,
  useActiveTooltipCoordinate: useActiveTooltipCoordinateApiExamples,
  useActiveTooltipDataPoints: useActiveTooltipDataPointsApiExamples,
  useActiveTooltipLabel: useActiveTooltipLabelApiExamples,
  useMargin: useMarginApiExamples,
  useOffset: useOffsetApiExamples,
  usePlotArea: usePlotAreaApiExamples,
  useChartWidth: useChartWidthAndHeightApiExamples,
  useChartHeight: useChartWidthAndHeightApiExamples,
  useXAxisDomain: useXAxisDomainApiExamples,
  useYAxisDomain: useYAxisDomainApiExamples,
  getRelativeCoordinate: getRelativeCoordinateExamples,
  useXAxisInverseDataSnapScale: useAxisInverseDataSnapScaleApiExamples,
  useYAxisInverseDataSnapScale: useAxisInverseDataSnapScaleApiExamples,
  useXAxisInverseTickSnapScale: useAxisInverseTickSnapScaleApiExamples,
  useYAxisInverseTickSnapScale: useAxisInverseTickSnapScaleApiExamples,
  useXAxisTicks: useXAxisTicksApiExamples,
  useYAxisTicks: useYAxisTicksApiExamples,
};
