import { areaChartApiExamples } from './AreaChart';
import { barChartApiExamples } from './BarChart';
import { composedChartApiExamples } from './ComposedChart';
import { lineChartApiExamples } from './LineChart';
import { pieChartApiExamples } from './PieChart';
import { scatterChartApiExamples } from './ScatterChart';
import { radarChartApiExamples } from './RadarChart';
import { radialBarApiExamples } from './RadialBarChart';
import { sankeyApiExamples } from './SankeyChart';
import { treemapApiExamples } from './Treemap';
import { responsiveContainerApiExamples } from './ResponsiveContainer';
import { cellApiExamples } from './Cell';
import { legendApiExamples } from './Legend';
import { referenceAreaApiExamples } from './ReferenceArea';
import { referenceDotApiExamples } from './ReferenceDot';
import { referenceLineApiExamples } from './ReferenceLine';
import { errorBarApiExamples } from './ErrorBar';
import { labelApiExamples } from './Label.tsx';
import { labelListApiExamples } from './LabelList';
import { funnelApiExamples } from './FunnelChart';
import { ApiExample } from '../api/types';

export const allApiExamples: Record<string, ReadonlyArray<ApiExample>> = {
  AreaChart: areaChartApiExamples,
  BarChart: barChartApiExamples,
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
  FunnelChart: funnelApiExamples,
  SankeyChart: sankeyApiExamples,
};
