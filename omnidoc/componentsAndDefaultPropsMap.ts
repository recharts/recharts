import { referenceLineDefaultProps } from '../src/cartesian/ReferenceLine';

type ComponentMeta = {
  defaultProps: Record<string, unknown> | undefined;
};

export const componentMetaMap: Record<string, ComponentMeta> = {
  ReferenceLine: { defaultProps: referenceLineDefaultProps },
};
