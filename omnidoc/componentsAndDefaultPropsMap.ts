import { referenceLineDefaultProps } from '../src/cartesian/ReferenceLine';
import { textDefaultProps } from '../src/component/Text';
import { defaultAreaProps } from '../src/cartesian/Area';
import { defaultLabelProps } from '../src/component/Label';
import { defaultTreeMapProps } from '../src/chart/Treemap';
import { defaultBarProps } from '../src/cartesian/Bar';
import { defaultBrushProps } from '../src/cartesian/Brush';
import { defaultLineProps } from '../src/cartesian/Line';
import { defaultScatterProps } from '../src/cartesian/Scatter';

type ComponentMeta = {
  defaultProps: Record<string, unknown> | undefined;
};

export const componentMetaMap: Record<string, ComponentMeta> = {
  Area: { defaultProps: defaultAreaProps },
  Bar: { defaultProps: defaultBarProps },
  Brush: { defaultProps: defaultBrushProps },
  Label: { defaultProps: defaultLabelProps },
  Line: { defaultProps: defaultLineProps },
  ReferenceLine: { defaultProps: referenceLineDefaultProps },
  Scatter: { defaultProps: defaultScatterProps },
  Text: { defaultProps: textDefaultProps },
  Treemap: { defaultProps: defaultTreeMapProps },
};
