import { ChartOffsetRequired, Coordinate, LayoutType, TickItem } from '../../../util/types';
import { TooltipIndex, TooltipPayloadConfiguration, TooltipPayloadSearcher } from '../../tooltipSlice';

export const combineCoordinateForDefaultIndex = (
  width: number,
  height: number,
  layout: LayoutType,
  offset: ChartOffsetRequired,
  tooltipTicks: ReadonlyArray<TickItem>,
  defaultIndex: TooltipIndex | undefined,
  tooltipConfigurations: ReadonlyArray<TooltipPayloadConfiguration>,
  tooltipPayloadSearcher: TooltipPayloadSearcher | undefined,
): Coordinate | undefined => {
  if (defaultIndex == null || tooltipPayloadSearcher == null) {
    return undefined;
  }
  // With defaultIndex alone, we don't have enough information to decide _which_ of the multiple tooltips to display. So we choose the first one.
  const firstConfiguration = tooltipConfigurations[0];
  // @ts-expect-error we need to rethink the tooltipPayloadSearcher type
  const maybePosition: Coordinate | undefined =
    firstConfiguration == null ? undefined : tooltipPayloadSearcher(firstConfiguration.positions, defaultIndex);
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
    default: {
      // This logic is not super sound - it conflates vertical, radial, centric layouts into just one. TODO improve!
      return {
        x: (offset.left + width) / 2,
        y: tick.coordinate,
      };
    }
  }
};
