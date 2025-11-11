import { referenceLineDefaultProps } from '../src/cartesian/ReferenceLine';
import { textDefaultProps } from '../src/component/Text';
import { defaultAreaProps } from '../src/cartesian/Area';

type ComponentMeta = {
  defaultProps: Record<string, unknown> | undefined;
};

export const componentMetaMap: Record<string, ComponentMeta> = {
  Area: { defaultProps: defaultAreaProps },
  ReferenceLine: { defaultProps: referenceLineDefaultProps },
  Text: { defaultProps: textDefaultProps },
};
