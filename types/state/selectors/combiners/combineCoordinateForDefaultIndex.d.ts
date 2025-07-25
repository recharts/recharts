import { ChartOffsetInternal, Coordinate, LayoutType, TickItem } from '../../../util/types';
import { TooltipIndex, TooltipPayloadConfiguration, TooltipPayloadSearcher } from '../../tooltipSlice';
export declare const combineCoordinateForDefaultIndex: (width: number, height: number, layout: LayoutType, offset: ChartOffsetInternal, tooltipTicks: ReadonlyArray<TickItem>, defaultIndex: TooltipIndex | undefined, tooltipConfigurations: ReadonlyArray<TooltipPayloadConfiguration>, tooltipPayloadSearcher: TooltipPayloadSearcher | undefined) => Coordinate | undefined;
