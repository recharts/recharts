import { ZoomDimension } from '../../state/zoomSlice';
import { ResolvedZoomOptions } from '../../util/zoom/ZoomOptions';

/**
 * A drag-to-zoom selection rectangle, in chart-wrapper pixel coordinates.
 */
export type SelectionRect = { x: number; y: number; width: number; height: number };

/**
 * Which region of the chart a pointer is over: the plot area, one of the axis bands around it, or
 * outside the chart entirely. Lets gestures scope themselves (e.g. wheel over the x-axis zooms x).
 */
export type PointerRegion = 'plot' | 'xAxis' | 'yAxis' | 'outside';

/**
 * The single surface every zoom gesture module talks to. `ZoomController` builds one of these
 * (reading live state through getters) and hands it to each gesture installer, so the gestures stay
 * thin DOM-only modules and never touch Redux, refs or the zoom maths directly.
 */
export type ZoomGestureApi = {
  /** The chart wrapper element gestures attach their listeners to. */
  element: HTMLElement;
  /** Live resolved zoom options. */
  getOptions: () => ResolvedZoomOptions;
  /** Plot area size, or undefined before it is measured. */
  getOffset: () => { left: number; top: number; width: number; height: number } | undefined;
  /**
   * Maps a pointer's client coordinates to fractions `0..1` of the visible plot, per axis. `y` is
   * flipped to follow the (upward) data direction. Returns null when the plot is not measurable.
   */
  plotFractions: (clientX: number, clientY: number) => { x: number; y: number } | null;
  /** Maps a pointer's client coordinates to wrapper-relative pixels, clamped to the plot area. */
  plotPixels: (clientX: number, clientY: number) => { x: number; y: number } | null;
  /** Which region (plot / axis band / outside) the pointer is over. */
  pointerRegion: (clientX: number, clientY: number) => PointerRegion;
  /** Zoom one axis by `factor` around `plotFocus` (a fraction of the visible window). */
  zoomBy: (dimension: ZoomDimension, factor: number, plotFocus: number) => void;
  /** Pan one axis by `deltaPlotFraction` (a fraction of the visible window). */
  panBy: (dimension: ZoomDimension, deltaPlotFraction: number) => void;
  /** Zoom one axis into `[from, to]` fractions of the visible window (drag-to-zoom). */
  selectInto: (dimension: ZoomDimension, fromPlotFraction: number, toPlotFraction: number) => void;
  /** Reset to the full view. */
  reset: () => void;
  /** Refresh the active tooltip at a pointer position after a zoom change (no mouse move needed). */
  refreshPointer: (clientX: number, clientY: number) => void;
  /** Show or clear the drag-to-zoom selection rectangle overlay. */
  setSelection: (rect: SelectionRect | null) => void;
};

/**
 * A gesture installer attaches its DOM listeners and returns a cleanup function.
 */
export type ZoomGestureInstaller = (api: ZoomGestureApi) => () => void;
