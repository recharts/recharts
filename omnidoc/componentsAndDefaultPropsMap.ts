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

type ComponentMeta = {
  defaultProps: Record<string, unknown> | undefined;
};

export const componentMetaMap: Record<string, ComponentMeta> = {
  Area: { defaultProps: defaultAreaProps },
  Bar: { defaultProps: defaultBarProps },
  Brush: { defaultProps: defaultBrushProps },
  CartesianGrid: { defaultProps: defaultCartesianGridProps },
  ErrorBar: { defaultProps: errorBarDefaultProps },
  Label: { defaultProps: defaultLabelProps },
  Line: { defaultProps: defaultLineProps },
  ReferenceArea: { defaultProps: referenceAreaDefaultProps },
  ReferenceDot: { defaultProps: referenceDotDefaultProps },
  ReferenceLine: { defaultProps: referenceLineDefaultProps },
  Scatter: { defaultProps: defaultScatterProps },
  Text: { defaultProps: textDefaultProps },
  Treemap: { defaultProps: defaultTreeMapProps },
  XAxis: { defaultProps: xAxisDefaultProps },
  YAxis: { defaultProps: yAxisDefaultProps },
};
