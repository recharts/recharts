import * as React from 'react';
import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { TooltipPortalContext } from '../../context/tooltipPortalContext';
import { useIsPanorama } from '../../context/PanoramaContext';
import { resolveZoomOptions, ZoomOptions } from '../../util/zoom/ZoomOptions';
import { ZoomController } from '../ZoomController';
import { ZoomStateSync } from '../ZoomStateSync';
import { ZoomScrollbars } from '../ZoomScrollbars';
import { ZoomAxisTouchTargets } from '../ZoomAxisTouchTargets';

/**
 * Props for {@link ZoomAndPan}: every gesture / limit option plus controlled-state hooks.
 */
export type ZoomAndPanProps = ZoomOptions;

/**
 * One-line zoom & pan: drop `<ZoomAndPan />` inside a cartesian chart to turn on the sensible
 * default set (wheel zoom, drag to pan, drag-to-zoom, pinch, keyboard, double-click reset and
 * scrollbars). Tune or switch parts off with props (`axis`, `minZoom`, `maxZoom`, `pinch`, ...), or
 * drop it and compose the individual interaction components for full control.
 *
 * It mounts the same headless infrastructure the legacy `zoom` prop does, portalled into the chart
 * wrapper (so its HTML overlays sit alongside the SVG), and is inert on the brush panorama.
 */
export function ZoomAndPan(props: ZoomAndPanProps) {
  const element = useContext(TooltipPortalContext);
  const isPanorama = useIsPanorama();

  const options = resolveZoomOptions({ ...props });
  if (element == null || isPanorama || options == null) {
    return null;
  }

  return createPortal(
    <>
      <ZoomController options={options} />
      <ZoomStateSync options={options} />
      <ZoomAxisTouchTargets options={options} />
      <ZoomScrollbars options={options} />
    </>,
    element,
  );
}
