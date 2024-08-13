import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { addTooltipEntrySettings, removeTooltipEntrySettings, TooltipPayloadConfiguration } from './tooltipSlice';
import { useIsPanorama } from '../context/PanoramaContext';

type SetTooltipEntrySettingsProps<T> = {
  args: T;
  fn: (input: T) => TooltipPayloadConfiguration;
};

export function SetTooltipEntrySettings<T>({ fn, args }: SetTooltipEntrySettingsProps<T>): null {
  const dispatch = useAppDispatch();
  const isPanorama = useIsPanorama();
  useEffect(() => {
    if (isPanorama) {
      // Panorama graphical items should never contribute to Tooltip payload.
      return undefined;
    }
    const tooltipEntrySettings: TooltipPayloadConfiguration = fn(args);
    dispatch(addTooltipEntrySettings(tooltipEntrySettings));
    return () => {
      dispatch(removeTooltipEntrySettings(tooltipEntrySettings));
    };
  }, [fn, args, dispatch, isPanorama]);
  return null;
}
