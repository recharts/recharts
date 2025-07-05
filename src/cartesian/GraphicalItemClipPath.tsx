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

  if (!needClip) {
    return null;
  }

  const { x, y, width, height } = plotArea;

  return (
    <clipPath id={`clipPath-${clipPathId}`}>
      <rect
        x={needClipX ? x : x - width / 2}
        y={needClipY ? y : y - height / 2}
        width={needClipX ? width : width * 2}
        height={needClipY ? height : height * 2}
      />
    </clipPath>
  );
}
