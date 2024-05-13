import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { addTooltipEntrySettings, removeTooltipEntrySettings, TooltipPayloadConfiguration } from './tooltipSlice';

type SetTooltipEntrySettingsProps<T> = {
  args: T;
  fn: (input: T) => TooltipPayloadConfiguration;
};

export function SetTooltipEntrySettings<T>({ fn, args }: SetTooltipEntrySettingsProps<T>): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const tooltipEntrySettings: TooltipPayloadConfiguration = fn(args);
    dispatch(addTooltipEntrySettings(tooltipEntrySettings));
    return () => {
      dispatch(removeTooltipEntrySettings(tooltipEntrySettings));
    };
  }, [fn, args, dispatch]);
  return null;
}
