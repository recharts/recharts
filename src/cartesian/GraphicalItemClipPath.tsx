import * as React from 'react';
import { AxisId } from '../state/cartesianAxisSlice';
import { useAppSelector } from '../state/hooks';
import {
  implicitXAxis,
  implicitYAxis,
  selectXAxisSettings,
  selectYAxisSettings,
} from '../state/selectors/axisSelectors';
import { usePlotArea } from '../hooks';

type GraphicalItemClipPathProps = {
  xAxisId: AxisId;
  yAxisId: AxisId;
  clipPathId: string;
  forceClip?: boolean;
};

export function useNeedsClip(xAxisId: AxisId, yAxisId: AxisId) {
  const xAxis = useAppSelector(state => selectXAxisSettings(state, xAxisId));
  const yAxis = useAppSelector(state => selectYAxisSettings(state, yAxisId));

  const needClipX: boolean = xAxis?.allowDataOverflow ?? implicitXAxis.allowDataOverflow;
  const needClipY: boolean = yAxis?.allowDataOverflow ?? implicitYAxis.allowDataOverflow;
  const needClip = needClipX || needClipY;

  return { needClip, needClipX, needClipY };
}

export function GraphicalItemClipPath({ xAxisId, yAxisId, clipPathId, forceClip }: GraphicalItemClipPathProps) {
  const plotArea = usePlotArea();

  const { needClipX, needClipY, needClip } = useNeedsClip(xAxisId, yAxisId);

  if ((!needClip && !forceClip) || !plotArea) {
    return null;
  }

  const { x, y, width, height } = plotArea;

  // When forceClip is set (e.g. animation overflow clipping), clip both axes to the plot area.
  const clipX = forceClip || needClipX;
  const clipY = forceClip || needClipY;

  return (
    <clipPath id={`clipPath-${clipPathId}`}>
      <rect
        x={clipX ? x : x - width / 2}
        y={clipY ? y : y - height / 2}
        width={clipX ? width : width * 2}
        height={clipY ? height : height * 2}
      />
    </clipPath>
  );
}
