import * as React from 'react';
import { AxisId } from '../state/cartesianAxisSlice';
import { useOffset } from '../context/chartLayoutContext';
import { useAppSelector } from '../state/hooks';
import {
  implicitXAxis,
  implicitYAxis,
  selectXAxisSettings,
  selectYAxisSettings,
} from '../state/selectors/axisSelectors';

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
  const offset = useOffset();

  const { needClipX, needClipY, needClip } = useNeedsClip(xAxisId, yAxisId);

  if (!needClip) {
    return null;
  }

  const { left, top, width, height } = offset;

  return (
    <clipPath id={`clipPath-${clipPathId}`}>
      <rect
        x={needClipX ? left : left - width / 2}
        y={needClipY ? top : top - height / 2}
        width={needClipX ? width : width * 2}
        height={needClipY ? height : height * 2}
      />
    </clipPath>
  );
}
