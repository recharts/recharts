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
  ZIndexLayer: zIndexLayerApiExamples,
};
