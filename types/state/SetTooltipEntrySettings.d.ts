import { TooltipPayloadConfiguration } from './tooltipSlice';
type SetTooltipEntrySettingsProps<T> = {
    args: T;
    fn: (input: T) => TooltipPayloadConfiguration;
};
export declare function SetTooltipEntrySettings<T>({ fn, args }: SetTooltipEntrySettingsProps<T>): null;
export {};
