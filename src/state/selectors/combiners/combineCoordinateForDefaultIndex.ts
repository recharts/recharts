import {
  ChartOffsetInternal,
  Coordinate,
  LayoutType,
  PolarCoordinate,
  PolarViewBoxRequired,
  TickItem,
} from '../../../util/types';
import { TooltipIndex, TooltipPayloadConfiguration } from '../../tooltipSlice';

export const combineCoordinateForDefaultIndex = (
  width: number,
  height: number,
  layout: LayoutType,
  offset: ChartOffsetInternal,
  tooltipTicks: ReadonlyArray<TickItem> | undefined,
  defaultIndex: TooltipIndex | undefined,
  tooltipConfigurations: ReadonlyArray<TooltipPayloadConfiguration>,
  polarViewBox: PolarViewBoxRequired | undefined,
): Coordinate | PolarCoordinate | undefined => {
  if (defaultIndex == null) {
    return undefined;
  }
  /*
   * With defaultIndex alone, we don't have enough information to decide _which_ of the multiple tooltips to display.
   * Maybe one day we could add new prop `activeGraphicalItemId` to the chart to help with that.
   * Until then, we choose the first one.
   */
  const firstConfiguration = tooltipConfigurations[0];
  const maybePosition = firstConfiguration?.getPosition(defaultIndex);
  if (maybePosition != null) {
    return maybePosition;
  }
  const tick = tooltipTicks?.[Number(defaultIndex)];
  if (!tick) {
    return undefined;
  }
  switch (layout) {
    case 'horizontal': {
      return {
        x: tick.coordinate,
        y: (offset.top + height) / 2,
      };
    }
    case 'radial': {
      if (polarViewBox) {
        const { cx, cy, innerRadius, outerRadius, startAngle, endAngle } = polarViewBox;
        const radius = tick.coordinate;
        const angle = (startAngle + endAngle) / 2;
        return {
          x: cx,
          y: cy,
          cx,
          cy,
          radius,
          angle,
          startAngle,
          endAngle,
          innerRadius,
          outerRadius,
          clockWise: false,
        };
      }
      return {
        x: (offset.left + width) / 2,
        y: tick.coordinate,
      };
    }
    default: {
      return {
        x: (offset.left + width) / 2,
        y: tick.coordinate,
      };
    }
  }
};
