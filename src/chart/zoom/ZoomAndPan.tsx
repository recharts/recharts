import * as React from 'react';
import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { TooltipPortalContext } from '../../context/tooltipPortalContext';
import { useIsPanorama } from '../../context/PanoramaContext';
import { resolveZoomOptions, ZoomOptions, ZoomViewport } from '../../util/zoom/ZoomOptions';
import { ZoomController } from '../ZoomController';
import { ZoomStateSync } from '../ZoomStateSync';
import { ZoomScrollbars } from '../ZoomScrollbars';
import { ZoomAxisTouchTargets } from '../ZoomAxisTouchTargets';

/**
 * Props for {@link ZoomAndPan}: every gesture / limit option plus controlled-state hooks.
 */
export type ZoomAndPanProps = ZoomOptions & {
  /** Friendly alias for {@link ZoomOptions.touch} (two-finger pinch / pan, double-tap). @defaultValue true */
  pinch?: boolean;
  /**
   * What touch double-tap-then-drag does: maps-style zoom, or a selection emitted through
   * `onTouchSelect`. @defaultValue 'zoom'
   */
  touchDoubleTapDrag?: 'zoom' | 'select';
  /** Called when `touchDoubleTapDrag="select"` completes a touch selection. */
  onTouchSelect?: (selection: ZoomViewport) => void;
  /** Class added to the drag-to-zoom / drag-to-select rectangle. */
  selectionClassName?: string;
  /** Inline style merged onto the drag-to-zoom / drag-to-select rectangle. */
  selectionStyle?: React.CSSProperties;
};

/**
 * One-line zoom & pan: drop `<ZoomAndPan />` inside a cartesian chart to turn on the sensible
 * default set (wheel zoom, drag to pan, drag-to-zoom, pinch, keyboard, double-click reset and
 * scrollbars). Tune or switch parts off with props (`axis`, `minZoom`, `maxZoom`, `pinch`, ...), or
 * drop it and compose the individual interaction components for full control.
 *
 * It mounts the same headless infrastructure the legacy `zoom` prop does, portalled into the chart
 * wrapper (so its HTML overlays sit alongside the SVG), and is inert on the brush panorama.
 */
export function ZoomAndPan({
  pinch,
  touchDoubleTapDrag,
  onTouchSelect,
  selectionClassName,
  selectionStyle,
  ...props
}: ZoomAndPanProps) {
  const element = useContext(TooltipPortalContext);
  const isPanorama = useIsPanorama();

  // `pinch` is an alias for `touch`; only forward it when set, so we don't override the default.
  const resolved = resolveZoomOptions(pinch == null ? { ...props } : { ...props, touch: pinch });
  const touchDoubleTapDragMode: 'zoom' | 'selectZoom' = touchDoubleTapDrag === 'select' ? 'selectZoom' : 'zoom';
  const options =
    resolved == null
      ? null
      : {
          ...resolved,
          touchDoubleTapDrag: touchDoubleTapDragMode,
          onTouchSelectRegion: onTouchSelect,
        };
  if (element == null || isPanorama || options == null) {
    return null;
  }

  return createPortal(
    <>
      <ZoomController options={options} selectionStyle={{ className: selectionClassName, style: selectionStyle }} />
      <ZoomStateSync options={options} />
      <ZoomAxisTouchTargets options={options} />
      <ZoomScrollbars options={options} />
    </>,
    element,
  );
}
