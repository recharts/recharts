import * as React from 'react';
import { Children, ReactElement } from 'react';
import { ChartData } from '../state/chartDataSlice';
import { Padding } from '../util/types';
import { ResponsiveContainerContext } from '../component/ResponsiveContainer';

type Props = {
  x: number;
  y: number;
  width: number;
  height: number;
  data: ChartData;
  children: ReactElement | undefined;
  padding: Padding;
};

// Default size with negative dimensions to signal "no ResponsiveContainer"
const NO_RESPONSIVE_CONTAINER_SIZE = { width: -1, height: -1 };

/**
 * Renders a compact, full-data preview of a chart into the given rectangle (the Brush rail or the
 * Minimap frame).
 *
 * The preview is deliberately a self-contained chart with its own store (it is NOT wrapped in the
 * panorama context): it computes its own scales from the full data, so it can never drift out of
 * sync with the main chart's zoom/slicing, and it never zooms itself.
 *
 * It also resets the ResponsiveContainer context to prevent the preview chart from inheriting
 * responsive dimensions from a parent ResponsiveContainer.
 */
export function PanoramaPreview({ x, y, width, height, data, children, padding }: Props) {
  if (Children.count(children) !== 1 || children == null) {
    return null;
  }

  const clonedChild = React.cloneElement(Children.only(children), {
    x,
    y,
    width,
    height,
    margin: padding,
    compact: true,
    data,
    syncId: undefined,
    zoom: false,
    // The preview is purely decorative; it must not become a second focusable application.
    accessibilityLayer: false,
  });

  // Reset ResponsiveContainer context to prevent dimension inheritance
  return (
    <ResponsiveContainerContext.Provider value={NO_RESPONSIVE_CONTAINER_SIZE}>
      {clonedChild}
    </ResponsiveContainerContext.Provider>
  );
}
