import { useLayoutEffect, useRef } from 'react';
import { useAppDispatch } from './hooks';
import {
  addTooltipEntrySettings,
  removeTooltipEntrySettings,
  replaceTooltipEntrySettings,
  TooltipPayloadConfiguration,
} from './tooltipSlice';
import { useIsPanorama } from '../context/PanoramaContext';

type SetTooltipEntrySettingsProps<T> = {
  args: T;
  fn: (input: T) => TooltipPayloadConfiguration;
};

export function SetTooltipEntrySettings<T>({ fn, args }: SetTooltipEntrySettingsProps<T>): null {
  const dispatch = useAppDispatch();
  const isPanorama = useIsPanorama();
  const prevSettingsRef = useRef<TooltipPayloadConfiguration | null>(null);

  useLayoutEffect(() => {
    if (isPanorama) {
      // Panorama graphical items should never contribute to Tooltip payload.
      return;
    }
    const tooltipEntrySettings: TooltipPayloadConfiguration = fn(args);
    if (prevSettingsRef.current === null) {
      dispatch(addTooltipEntrySettings(tooltipEntrySettings));
    } else if (prevSettingsRef.current !== tooltipEntrySettings) {
      dispatch(replaceTooltipEntrySettings({ prev: prevSettingsRef.current, next: tooltipEntrySettings }));
    }
    prevSettingsRef.current = tooltipEntrySettings;
  }, [fn, args, dispatch, isPanorama]);

  useLayoutEffect(() => {
    return () => {
      if (prevSettingsRef.current) {
        dispatch(removeTooltipEntrySettings(prevSettingsRef.current));
        prevSettingsRef.current = null;
      }
    };
  }, [dispatch]);

  return null;
}
