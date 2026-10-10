import * as React from 'react';
import { createPortal } from 'react-dom';
import { SelectionRect } from './ZoomGestureApi';

/**
 * Look of the drag-to-zoom / drag-to-select rectangle. Style it with `className` / `style` the same
 * way as the scrollbars: the default colors are inline so your `style` wins, and the
 * `.recharts-zoom-selection` class is stable for plain CSS / Tailwind.
 */
export type SelectionStyle = {
  /** Class added to the selection rectangle. */
  className?: string;
  /** Inline style merged onto the selection rectangle. */
  style?: React.CSSProperties;
};

/**
 * Renders the selection rectangle, portalled into the chart wrapper so it sits over the SVG. Returns
 * `null` when there is no active selection. Shared by the bundle controller and the composable
 * `<DragToZoom/>` / `<DragToSelect/>` / `<PinchZoom/>` components so they all look and customize alike.
 */
export function renderSelectionOverlay(
  selection: SelectionRect | null,
  element: HTMLElement | null,
  selectionStyle: SelectionStyle = {},
): React.ReactPortal | null {
  if (selection == null || element == null) {
    return null;
  }
  return createPortal(
    <div
      className={`recharts-zoom-selection${selectionStyle.className ? ` ${selectionStyle.className}` : ''}`}
      style={{
        position: 'absolute',
        left: selection.x,
        top: selection.y,
        width: selection.width,
        height: selection.height,
        background: 'rgba(120, 120, 255, 0.15)',
        border: '1px solid rgba(80, 80, 200, 0.6)',
        pointerEvents: 'none',
        ...selectionStyle.style,
      }}
    />,
    element,
  );
}
