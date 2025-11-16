import { useLayoutEffect, useRef } from 'react';
import { useAppDispatch } from './hooks';
import {
  addTooltipEntrySettings,
  removeTooltipEntrySettings,
  replaceTooltipEntrySettings,
  TooltipPayloadConfiguration,
} from './tooltipSlice';
import { useIsPanorama } from '../context/PanoramaContext';

export function SetTooltipEntrySettings({
  tooltipEntrySettings,
}: {
  tooltipEntrySettings: TooltipPayloadConfiguration;
}): null {
  const dispatch = useAppDispatch();
  const isPanorama = useIsPanorama();
  const prevSettingsRef = useRef<TooltipPayloadConfiguration | null>(null);

  useLayoutEffect(() => {
    if (isPanorama) {
      // Panorama graphical items should never contribute to Tooltip payload.
      return;
    }
    if (prevSettingsRef.current === null) {
      dispatch(addTooltipEntrySettings(tooltipEntrySettings));
    } else if (prevSettingsRef.current !== tooltipEntrySettings) {
      dispatch(replaceTooltipEntrySettings({ prev: prevSettingsRef.current, next: tooltipEntrySettings }));
    }
    prevSettingsRef.current = tooltipEntrySettings;
  }, [tooltipEntrySettings, dispatch, isPanorama]);

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
