import { useContext, useEffect, useState } from 'react';
import { TooltipPortalContext } from '../context/tooltipPortalContext';
import { useIsPanorama } from '../context/PanoramaContext';
import { ResolvedZoomOptions } from '../util/zoom/ZoomOptions';
import { SelectionRect, suppressTouchBrowserDecorations } from './zoom/ZoomGestureApi';
import { renderSelectionOverlay, SelectionStyle } from './zoom/SelectionOverlay';
import { useZoomApi } from './zoom/useZoomApi';
import { installWheelGesture } from './zoom/wheelGesture';
import { installPointerGesture } from './zoom/pointerGesture';
import { installDoubleClickGesture } from './zoom/doubleClickGesture';
import { installKeyboardGesture } from './zoom/keyboardGesture';
import { installAxisGesture } from './zoom/axisGesture';
import { installTouchGesture } from './zoom/touchGesture';

type ZoomControllerProps = {
  options: ResolvedZoomOptions;
  selectionStyle?: SelectionStyle;
};

/**
 * Mounts every zoom gesture from a single resolved `zoom` options object, and renders the
 * drag-to-zoom selection overlay. This is the all-in-one path used by the `zoom` prop.
 *
 * It only orchestrates: it builds a {@link useZoomApi} from the options and hands it to each gesture
 * module (wheel, pointer, double-click, ...). The composable interaction components use the same
 * `useZoomApi`, one per component, instead of this controller.
 *
 * Never mounted on the brush panorama. The visual zoom itself is produced by the axis range
 * transform; this component only updates the viewport state.
 */
export function ZoomController({ options, selectionStyle }: ZoomControllerProps) {
  const element = useContext(TooltipPortalContext);
  const isPanorama = useIsPanorama();
  const [selection, setSelection] = useState<SelectionRect | null>(null);
  const api = useZoomApi(options, setSelection);

  useEffect(() => {
    if (api == null || isPanorama) {
      return undefined;
    }
    const cleanups = [
      installWheelGesture(api),
      installPointerGesture(api),
      installDoubleClickGesture(api),
      installKeyboardGesture(api),
      installAxisGesture(api),
      installTouchGesture(api),
    ];
    return () => cleanups.forEach(cleanup => cleanup());
  }, [api, isPanorama]);

  /*
   * Suppress touch-selection browser chrome while the touch gesture engine is mounted. Gesture code
   * prevents default only for the active pinch/pan/select paths, so ordinary one-finger scrolling can
   * still be left to the page when touchDrag="tooltip".
   */
  useEffect(() => {
    if (element == null || isPanorama || !options.touch) {
      return undefined;
    }
    return suppressTouchBrowserDecorations(element);
  }, [element, isPanorama, options.touch]);

  return renderSelectionOverlay(selection, element, selectionStyle);
}
