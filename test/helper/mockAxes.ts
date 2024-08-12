import { scaleLinear } from 'victory-vendor/d3-scale';
import { BaseAxisWithScale, implicitXAxis, implicitYAxis } from '../../src/state/selectors/axisSelectors';
import { RechartsScale } from '../../src/util/ChartUtils';

// @ts-expect-error we need to figure out scale types
export const mockScale: RechartsScale = scaleLinear().domain([0, 500]);

export const mockXAxisWithScale: BaseAxisWithScale = {
  ...implicitXAxis,
  scale: mockScale,
};

export const mockYAxisWithScale: BaseAxisWithScale = {
  ...implicitYAxis,
  scale: mockScale,
};
