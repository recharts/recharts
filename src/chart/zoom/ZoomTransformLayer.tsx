import * as React from 'react';
import { ReactNode } from 'react';
import { useClipPathId } from '../../container/ClipPathProvider';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectChartOffsetInternal } from '../../state/selectors/selectChartOffsetInternal';
import { selectChartName } from '../../state/selectors/rootPropsSelectors';
import { selectAllXAxes, selectAllYAxes } from '../../state/selectors/selectAllAxes';
import { selectZoom } from '../../state/selectors/zoomSelectors';
import { setZoom } from '../../state/zoomSlice';
import { useChartLayout } from '../../context/chartLayoutContext';
import { getUniformZoomState, getZoomTransformForPlot } from '../../util/zoom/transform';
import { viewportsEqual } from '../../util/zoom/viewport';

function shouldUseUniformTransform(layout: string | undefined, chartName: string | undefined): boolean {
  return layout === 'centric' || layout === 'radial' || chartName === 'Sunburst';
}

function shouldUseTransform(xAxisCount: number, yAxisCount: number): boolean {
  return xAxisCount === 0 && yAxisCount === 0;
}

export function ZoomTransformLayer({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const offset = useAppSelector(selectChartOffsetInternal);
  const zoom = useAppSelector(selectZoom);
  const chartName = useAppSelector(selectChartName);
  const allXAxes = useAppSelector(selectAllXAxes);
  const allYAxes = useAppSelector(selectAllYAxes);
  const clipPathId = useClipPathId();
  const layout = useChartLayout();

  const xAxisCount = allXAxes?.length ?? 0;
  const yAxisCount = allYAxes?.length ?? 0;
  const canTransform = shouldUseTransform(xAxisCount, yAxisCount);
  const zoomState = zoom != null && shouldUseUniformTransform(layout, chartName) ? getUniformZoomState(zoom) : zoom;
  const transform =
    canTransform && offset != null && zoomState != null
      ? getZoomTransformForPlot(
          { x: offset.left, y: offset.top, width: offset.width, height: offset.height },
          zoomState,
        )
      : null;

  React.useLayoutEffect(() => {
    if (
      canTransform &&
      zoom != null &&
      zoomState != null &&
      zoomState !== zoom &&
      (!viewportsEqual(zoomState.x, zoom.x) || !viewportsEqual(zoomState.y, zoom.y))
    ) {
      dispatch(setZoom(zoomState));
    }
  }, [canTransform, dispatch, zoom, zoomState]);

  /*
   * The <g> wrapper is ALWAYS rendered, whatever the chart type or registration timing. Anything
   * conditional here changes the tree shape between renders (axes, offset and layout all register
   * through effects, so the first render always looks "transformable") and a shape change remounts
   * the entire chart content - resetting component state such as ZoomStateSync's initialZoom
   * notification, or interrupting a gesture mid-drag.
   *
   * The clip path attribute is only set while actually zoomed: un-zoomed content that legitimately
   * overflows the plot area (e.g. outer pie labels) must keep rendering exactly as without zoom.
   */
  return (
    <g
      clipPath={transform != null && clipPathId ? `url(#${clipPathId})` : undefined}
      transform={transform ?? undefined}
    >
      {children}
    </g>
  );
}
