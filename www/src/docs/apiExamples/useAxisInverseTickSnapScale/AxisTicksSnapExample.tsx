// #region imports and mock data
import {
  CartesianGrid,
  DefaultZIndexes,
  getRelativeCoordinate,
  InverseScaleFunction,
  Line,
  LineChart,
  MouseHandlerDataParam,
  ReferenceLine,
  RelativePointer,
  useXAxisInverseTickSnapScale,
  useYAxisInverseTickSnapScale,
  XAxis,
  YAxis,
  ZIndexLayer,
} from 'recharts';
import { MouseEvent, TouchEvent, useCallback, useState } from 'react';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { name: 'Jan', sales: 400 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 50000 },
  { name: 'Apr', sales: 24500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 45500 },
];
// #endregion

/**
 * This Crosshair component shows how to convert pixel coordinates to data values.
 * In effect it still follows the mouse pointer, but instead of showing pixel coordinates,
 * it shows the closest data values on both axes.
 *
 * It "snaps" to the closest data points using useXAxisInverseTickSnapScale and useYAxisInverseTickSnapScale hooks.
 *
 */
const AxisTickCrosshair = ({ pointer }: { pointer: RelativePointer | null }) => {
  // Convert pixel coordinates to the closest data values
  const xAxisInverseScale: InverseScaleFunction | undefined = useXAxisInverseTickSnapScale();
  const yAxisInverseScale: InverseScaleFunction | undefined = useYAxisInverseTickSnapScale();

  if (pointer == null || xAxisInverseScale == null || yAxisInverseScale == null) {
    return null;
  }
  const xDataLabel = String(xAxisInverseScale(pointer.relativeX));
  const yDataLabel = String(yAxisInverseScale(pointer.relativeY));
  return (
    <ZIndexLayer zIndex={DefaultZIndexes.cursorLine}>
      <ReferenceLine
        x={xDataLabel}
        /*
         * pointerEvents: none is necessary because without it, browser will detect hovering over the Cross itself
         * which makes it trigger mouseLeave on the chart which makes it erase the Cross which looks like it's blinking.
         * If we skip pointer events on the cross then we can skip the mouseLeave and the movement is smooth.
         */
        style={{ pointerEvents: 'none' }}
        stroke="green"
        strokeWidth={1}
        strokeDasharray="4"
        label={{
          value: xDataLabel,
          position: 'top',
          offset: 5,
        }}
      />
      <ReferenceLine
        y={yDataLabel}
        /*
         * pointerEvents: none is necessary because without it, browser will detect hovering over the Cross itself
         * which makes it trigger mouseLeave on the chart which makes it erase the Cross which looks like it's blinking.
         * If we skip pointer events on the cross then we can skip the mouseLeave and the movement is smooth.
         */
        style={{ pointerEvents: 'none' }}
        stroke="green"
        strokeWidth={1}
        strokeDasharray="4"
        label={{
          value: yDataLabel,
          position: 'right',
          offset: 5,
        }}
      />
    </ZIndexLayer>
  );
};

/**
 * This example demonstrates how to use getRelativeCoordinate to get pointer position in pixels,
 * and then convert those pixel coordinates to the closest axis ticks using useXAxisInverseTickSnapScale and useYAxisInverseTickSnapScale hooks.
 */
export default function AxisTickSnapExample({
  initialPointers = [],
}: {
  initialPointers?: ReadonlyArray<RelativePointer>;
}) {
  const [pointers, setPointers] = useState<ReadonlyArray<RelativePointer>>(initialPointers);

  const handleMouseMove = useCallback(
    (_data: MouseHandlerDataParam, event: MouseEvent<SVGGraphicsElement>) => {
      const chartPointer: RelativePointer = getRelativeCoordinate(event);
      setPointers([chartPointer]);
    },
    [setPointers],
  );

  const handleTouchMove = useCallback(
    (_data: unknown, event: TouchEvent<SVGGraphicsElement>) => {
      const chartPointers = getRelativeCoordinate(event);
      setPointers(chartPointers);
    },
    [setPointers],
  );

  const handleLeave = useCallback(() => {
    setPointers([]);
  }, [setPointers]);

  return (
    <LineChart
      style={{
        width: '100%',
        maxWidth: '500px',
        maxHeight: '200px',
        aspectRatio: 1,
        touchAction: 'none',
      }}
      responsive
      data={data}
      margin={{ top: 20, right: 50, left: 20, bottom: 30 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleLeave}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis domain={[0, 7000]} />
      <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />

      {pointers.map(pointer => (
        <AxisTickCrosshair key={`crosshair-${pointer.relativeX}-${pointer.relativeY}`} pointer={pointer} />
      ))}

      <RechartsDevtools />
    </LineChart>
  );
}
