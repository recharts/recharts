import { ActiveDotType } from './types';
import { svgPropertiesNoEventsFromUnknown } from './svgPropertiesNoEvents';

export function getRadiusAndStrokeWidthFromDot(dot: ActiveDotType): {
  r: number;
  strokeWidth: number;
} {
  const props = svgPropertiesNoEventsFromUnknown(dot);
  const defaultR = 3;
  const defaultStrokeWidth = 2;
  if (props != null) {
    const { r, strokeWidth } = props;
    let realR = Number(r);
    let realStrokeWidth = Number(strokeWidth);
    if (Number.isNaN(realR) || realR < 0) {
      realR = defaultR;
    }
    if (Number.isNaN(realStrokeWidth) || realStrokeWidth < 0) {
      realStrokeWidth = defaultStrokeWidth;
    }
    return {
      r: realR,
      strokeWidth: realStrokeWidth,
    };
  }
  return {
    r: defaultR,
    strokeWidth: defaultStrokeWidth,
  };
}
