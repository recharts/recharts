import * as React from 'react';
import { AxisId } from '../state/cartesianAxisSlice';
import { useAppSelector } from '../state/hooks';
import {
  implicitXAxis,
  implicitYAxis,
  selectXAxisRange,
  selectXAxisSettings,
  selectYAxisRange,
  selectYAxisSettings,
} from '../state/selectors/axisSelectors';
import { usePlotArea } from '../hooks';

type GraphicalItemClipPathProps = {
  xAxisId: AxisId;
  yAxisId: AxisId;
  clipPathId: string;
};

export function useNeedsClip(xAxisId: AxisId, yAxisId: AxisId) {
  const xAxis = useAppSelector(state => selectXAxisSettings(state, xAxisId));
  const yAxis = useAppSelector(state => selectYAxisSettings(state, yAxisId));

  const needClipX: boolean = xAxis?.allowDataOverflow ?? implicitXAxis.allowDataOverflow;
  const needClipY: boolean = yAxis?.allowDataOverflow ?? implicitYAxis.allowDataOverflow;
  const needClip = needClipX || needClipY;

  return { needClip, needClipX, needClipY };
}

export function GraphicalItemClipPath({ xAxisId, yAxisId, clipPathId }: GraphicalItemClipPathProps) {
  const plotArea = usePlotArea();

  const { needClipX, needClipY, needClip } = useNeedsClip(xAxisId, yAxisId);
  const xAxisRange = useAppSelector(state => selectXAxisRange(state, xAxisId, false));
  const yAxisRange = useAppSelector(state => selectYAxisRange(state, yAxisId, false));

  if (!needClip || !plotArea) {
    return null;
  }

  const { x, y, width, height } = plotArea;

  const clipX = needClipX && xAxisRange ? Math.min(xAxisRange[0], xAxisRange[1]) : x - width / 2;
  const clipY = needClipY && yAxisRange ? Math.min(yAxisRange[0], yAxisRange[1]) : y - height / 2;
  const clipWidth = needClipX && xAxisRange ? Math.abs(xAxisRange[1] - xAxisRange[0]) : width * 2;
  const clipHeight = needClipY && yAxisRange ? Math.abs(yAxisRange[1] - yAxisRange[0]) : height * 2;

  return (
    <clipPath id={`clipPath-${clipPathId}`}>
      <rect x={clipX} y={clipY} width={clipWidth} height={clipHeight} />
    </clipPath>
  );
}
