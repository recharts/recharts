import { referenceLineDefaultProps } from '../src/cartesian/ReferenceLine';
import { textDefaultProps } from '../src/component/Text';
import { defaultAreaProps } from '../src/cartesian/Area';
import { defaultLabelProps } from '../src/component/Label';
import { defaultTreeMapProps } from '../src/chart/Treemap';
import { defaultBarProps } from '../src/cartesian/Bar';
import { defaultBrushProps } from '../src/cartesian/Brush';
import { defaultLineProps } from '../src/cartesian/Line';
import { defaultScatterProps } from '../src/cartesian/Scatter';
import { defaultCartesianGridProps } from '../src/cartesian/CartesianGrid';
import { errorBarDefaultProps } from '../src/cartesian/ErrorBar';
import { referenceAreaDefaultProps } from '../src/cartesian/ReferenceArea';
import { referenceDotDefaultProps } from '../src/cartesian/ReferenceDot';
import { xAxisDefaultProps } from '../src/cartesian/XAxis';
import { yAxisDefaultProps } from '../src/cartesian/YAxis';
import { zAxisDefaultProps } from '../src/cartesian/ZAxis';
import { legendDefaultProps } from '../src/component/Legend';
import { defaultCartesianChartProps } from '../src/chart/CartesianChart';
import { defaultFunnelProps } from '../src/cartesian/Funnel';
import { defaultTooltipProps } from '../src/component/Tooltip';
import { defaultRectangleProps } from '../src/shape/Rectangle';

type ComponentMeta = {
  defaultProps: Record<string, unknown> | undefined;
};

export const componentMetaMap: Record<string, ComponentMeta> = {
  Area: { defaultProps: defaultAreaProps },
  AreaChart: { defaultProps: defaultCartesianChartProps },
  Bar: { defaultProps: defaultBarProps },
  BarChart: { defaultProps: defaultCartesianChartProps },
  Brush: { defaultProps: defaultBrushProps },
  CartesianGrid: { defaultProps: defaultCartesianGridProps },
  ComposedChart: { defaultProps: defaultCartesianChartProps },
  ErrorBar: { defaultProps: errorBarDefaultProps },
  Funnel: { defaultProps: defaultFunnelProps },
  FunnelChart: { defaultProps: defaultCartesianChartProps },
  Label: { defaultProps: defaultLabelProps },
  Legend: { defaultProps: legendDefaultProps },
  Line: { defaultProps: defaultLineProps },
  LineChart: { defaultProps: defaultCartesianChartProps },
  Rectangle: { defaultProps: defaultRectangleProps },
  ReferenceArea: { defaultProps: referenceAreaDefaultProps },
  ReferenceDot: { defaultProps: referenceDotDefaultProps },
  ReferenceLine: { defaultProps: referenceLineDefaultProps },
  Scatter: { defaultProps: defaultScatterProps },
  ScatterChart: { defaultProps: defaultCartesianChartProps },
  Text: { defaultProps: textDefaultProps },
  Tooltip: { defaultProps: defaultTooltipProps },
  Treemap: { defaultProps: defaultTreeMapProps },
  XAxis: { defaultProps: xAxisDefaultProps },
  YAxis: { defaultProps: yAxisDefaultProps },
  ZAxis: { defaultProps: zAxisDefaultProps },
};
