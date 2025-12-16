import { scaleLinear } from 'victory-vendor/d3-scale';
import { BaseAxisWithScale, implicitXAxis, implicitYAxis } from '../../src/state/selectors/axisSelectors';
import { CustomScaleDefinition } from '../../src';

export const mockScale: CustomScaleDefinition<number> = scaleLinear().domain([0, 500]);

export const mockXAxisWithScale: BaseAxisWithScale = {
  ...implicitXAxis,
  scale: mockScale,
};

export const mockYAxisWithScale: BaseAxisWithScale = {
  ...implicitYAxis,
  scale: mockScale,
};
