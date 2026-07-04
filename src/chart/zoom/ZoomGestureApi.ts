import { ZoomDimension } from '../../state/zoomSlice';
import { ResolvedZoomOptions } from '../../util/zoom/ZoomOptions';
import { AxisViewport } from '../../util/zoom/viewport';

/**
 * A drag-to-zoom selection rectangle, in chart-wrapper pixel coordinates.
 */
export type SelectionRect = { x: number; y: number; width: number; height: number };

/**
 * Which region of the chart a pointer is over: the plot area, one of the axis bands around it, or
 * outside the chart entirely. Lets gestures scope themselves (e.g. wheel over the x-axis zooms x).
 */
export type PointerRegion = 'plot' | 'xAxis' | 'yAxis' | 'xScrollbar' | 'yScrollbar' | 'outside';

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
  pointerRegion: (clientX: number, clientY: number, target?: EventTarget | null) => PointerRegion;
  /** Zoom one axis by `factor` around `plotFocus` (a fraction of the visible window). */
  zoomBy: (dimension: ZoomDimension, factor: number, plotFocus: number) => void;
  /** Pan one axis by `deltaPlotFraction` (a fraction of the visible window). */
  panBy: (dimension: ZoomDimension, deltaPlotFraction: number) => void;
  /** Pan one axis by a screen-pixel delta (down / right positive), accounting for axis orientation. */
  panByPixels: (dimension: ZoomDimension, deltaPixels: number) => void;
  /** Whether each screen axis' domain grows toward the low-pixel edge (depends on layout / reverse). */
  getFlipped: () => { x: boolean; y: boolean };
  /** Zoom one axis into `[from, to]` fractions of the visible window (drag-to-zoom). */
  selectInto: (dimension: ZoomDimension, fromPlotFraction: number, toPlotFraction: number) => void;
  /** The viewport a `[from, to]` selection would zoom one axis to, without applying it (drag-to-select). */
  previewSelection: (dimension: ZoomDimension, fromPlotFraction: number, toPlotFraction: number) => AxisViewport | null;
  /** Reset to the full view. */
  reset: () => void;
  /** Refresh the active tooltip at a pointer position after a zoom change (no mouse move needed). */
  refreshPointer: (clientX: number, clientY: number) => void;
  /** Refresh the active tooltip at its last active chart coordinate (pan with no pointer event). */
  refreshActivePointer: () => void;
  /** Show or clear the drag-to-zoom selection rectangle overlay. */
  setSelection: (rect: SelectionRect | null) => void;
};

/**
 * A gesture installer attaches its DOM listeners and returns a cleanup function.
 */
export type ZoomGestureInstaller = (api: ZoomGestureApi) => () => void;

const TOUCH_DECORATION_CLASS = 'recharts-zoom-touch-interactions';

// Set through setProperty/getPropertyValue (the vendor-prefixed ones are not on CSSStyleDeclaration).
const TOUCH_STYLE_PROPERTIES = ['user-select', '-webkit-user-select', '-webkit-tap-highlight-color'] as const;

type StyleSnapshot = {
  style: CSSStyleDeclaration;
  values: ReadonlyArray<string>;
};

type DecorationSnapshot = {
  hadClass: boolean;
  styles: ReadonlyArray<StyleSnapshot>;
  stylesheet: HTMLStyleElement | null;
  count: number;
};

const touchDecorationOwners = new WeakMap<HTMLElement, DecorationSnapshot>();

function snapshot(style: CSSStyleDeclaration): StyleSnapshot {
  return { style, values: TOUCH_STYLE_PROPERTIES.map(property => style.getPropertyValue(property)) };
}

function applyTouchBrowserStyle(target: HTMLElement | SVGElement): void {
  const { style } = target;
  style.setProperty('user-select', 'none');
  style.setProperty('-webkit-user-select', 'none');
  style.setProperty('-webkit-tap-highlight-color', 'transparent');
}

function createTouchDecorationStyles(): HTMLStyleElement {
  const stylesheet = document.createElement('style');
  stylesheet.setAttribute('data-recharts-zoom-touch-style', 'true');
  stylesheet.textContent = `
    .${TOUCH_DECORATION_CLASS},
    .${TOUCH_DECORATION_CLASS} *,
    .${TOUCH_DECORATION_CLASS} svg,
    .${TOUCH_DECORATION_CLASS} svg * {
      -webkit-tap-highlight-color: transparent !important;
      -webkit-touch-callout: none !important;
      -webkit-user-select: none !important;
      user-select: none !important;
    }

  `;
  return stylesheet;
}

/**
 * Mobile browsers focus / tap-highlight the focusable chart SVG, which shows up as a thick black
 * rounded rectangle around the plot. Suppress those browser decorations only while touch zoom
 * gestures are installed; keyboard focus remains available when zoom touch handling is not active.
 */
export function suppressTouchBrowserDecorations(element: HTMLElement): () => void {
  const active = touchDecorationOwners.get(element);
  if (active != null) {
    active.count += 1;
    return () => {
      active.count -= 1;
      if (active.count > 0) {
        return;
      }
      active.styles.forEach(({ style, values }) => {
        TOUCH_STYLE_PROPERTIES.forEach((property, index) => style.setProperty(property, values[index] ?? ''));
      });
      active.stylesheet?.remove();
      if (!active.hadClass) {
        element.classList.remove(TOUCH_DECORATION_CLASS);
      }
      touchDecorationOwners.delete(element);
    };
  }

  const targets: Array<HTMLElement | SVGElement> = [
    element,
    ...element.querySelectorAll<SVGElement>('svg *'),
    ...element.querySelectorAll<SVGElement>('.recharts-surface'),
  ];
  const previous: DecorationSnapshot = {
    hadClass: element.classList.contains(TOUCH_DECORATION_CLASS),
    styles: targets.map(target => snapshot(target.style)),
    stylesheet: typeof document === 'undefined' ? null : createTouchDecorationStyles(),
    count: 1,
  };

  touchDecorationOwners.set(element, previous);
  element.classList.add(TOUCH_DECORATION_CLASS);
  if (previous.stylesheet != null) {
    element.appendChild(previous.stylesheet);
  }
  targets.forEach(target => applyTouchBrowserStyle(target));

  return () => {
    previous.count -= 1;
    if (previous.count > 0) {
      return;
    }
    previous.styles.forEach(({ style, values }) => {
      TOUCH_STYLE_PROPERTIES.forEach((property, index) => style.setProperty(property, values[index] ?? ''));
    });
    previous.stylesheet?.remove();
    if (!previous.hadClass) {
      element.classList.remove(TOUCH_DECORATION_CLASS);
    }
    touchDecorationOwners.delete(element);
  };
}

export function isInteractiveZoomTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) {
    return false;
  }
  return (
    target.closest(
      'a[href], button, input, select, textarea, summary, [contenteditable=""], [contenteditable="true"], [role="button"], [role="link"], [role="textbox"], [role="checkbox"], [role="radio"], [role="switch"], [role="menuitem"]',
    ) != null
  );
}
