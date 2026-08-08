import * as React from 'react';
import { ReactNode } from 'react';
import { useClipPathId } from '../../container/ClipPathProvider';
import { useAppSelector } from '../../state/hooks';
import { selectChartOffsetInternal } from '../../state/selectors/selectChartOffsetInternal';
import { selectChartName } from '../../state/selectors/rootPropsSelectors';
import { selectZoom } from '../../state/selectors/zoomSelectors';
import { getCameraZoomState, getZoomTransformForPlot } from '../../util/zoom/transform';

export function ZoomTransformLayer({ children }: { children: ReactNode }) {
  const offset = useAppSelector(selectChartOffsetInternal);
  const zoom = useAppSelector(selectZoom);
  const chartName = useAppSelector(selectChartName);
  const clipPathId = useClipPathId();

  // Uniform camera zoom is a render-time projection. The public/store viewport remains untouched,
  // which is especially important when a controlled viewport intentionally specifies one axis.
  const zoomState = zoom == null ? undefined : getCameraZoomState(chartName, zoom);
  const transform =
    offset != null && zoomState != null
      ? getZoomTransformForPlot(
          { x: offset.left, y: offset.top, width: offset.width, height: offset.height },
          zoomState,
        )
      : null;

  /*
   * Both <g> wrappers are ALWAYS rendered so changing chart metadata or viewport state never
   * remounts the chart content. The fixed outer group owns the clip and the inner group owns the
   * camera transform; putting both attributes on one group would transform the clip with the data.
   *
   * The clip path attribute is only set while actually zoomed: un-zoomed content that legitimately
   * overflows the plot area (e.g. outer pie labels) must keep rendering exactly as without zoom.
   */
  return (
    <g clipPath={transform != null && clipPathId ? `url(#${clipPathId})` : undefined}>
      <g transform={transform ?? undefined}>{children}</g>
    </g>
  );
}
