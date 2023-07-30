import { Props as PolarAngleAxisProps } from './PolarAngleAxis';
import { Props as PolarRadiusAxisProps } from './PolarRadiusAxis';

// TODO: 1. what is the type of scale? 2. Should we include scale to each Props?
// Not deleting this yet, because there is a reference in a comment, see ChartUtils.ts
export type AngleAxisProps = PolarAngleAxisProps & { scale: any };
export type RadiusAxisProps = PolarRadiusAxisProps & { scale: any };
