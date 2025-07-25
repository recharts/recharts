import { TooltipIndex, TooltipPayload, TooltipPayloadConfiguration, TooltipPayloadSearcher } from '../../tooltipSlice';
import { ChartDataState } from '../../chartDataSlice';
import { BaseAxisProps, TooltipEventType } from '../../../util/types';
export declare const combineTooltipPayload: (tooltipPayloadConfigurations: ReadonlyArray<TooltipPayloadConfiguration>, activeIndex: TooltipIndex, chartDataState: ChartDataState, tooltipAxis: BaseAxisProps | undefined, activeLabel: string | undefined, tooltipPayloadSearcher: TooltipPayloadSearcher | undefined, tooltipEventType: TooltipEventType) => TooltipPayload | undefined;
