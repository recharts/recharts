import {
  RelativePointer,
  MouseHandlerDataParam,
  getRelativeCoordinate,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  Cross,
  useChartWidth,
  useChartHeight,
  Legend,
  Text,
  TextProps,
  ZIndexLayer,
  DefaultZIndexes,
} from 'recharts';
import { generateMockData } from '@recharts/devtools';
import { useState, MouseEvent, TouchEvent, useCallback } from 'react';

const data = generateMockData(30, 123);

const TextWithOutline = (textProps: TextProps) => (
  <Text stroke="white" strokeWidth={3} fill="black" paintOrder="stroke" {...textProps} />
);

const Crosshair = ({ pointer }: { pointer: RelativePointer | null }) => {
  const width = useChartWidth();
  const height = useChartHeight();
  if (pointer == null || width == null || height == null) {
    return null;
  }
  return (
    <ZIndexLayer zIndex={DefaultZIndexes.cursorLine}>
      <TextWithOutline
        x={pointer.relativeX + 5}
        y={0}
        verticalAnchor="start"
      >{`x: ${pointer.relativeX}`}</TextWithOutline>
      <TextWithOutline
        y={pointer.relativeY + 5}
        x={width}
        verticalAnchor="start"
        textAnchor="end"
      >{`y: ${pointer.relativeY}`}</TextWithOutline>
      <Cross
        x={pointer.relativeX}
        y={pointer.relativeY}
        top={0}
        left={0}
        width={width}
        height={height}
        stroke="green"
        strokeWidth={1}
        strokeDasharray="4"
      />
    </ZIndexLayer>
  );
};

export default function CrosshairExample() {
  const [pointers, setPointers] = useState<RelativePointer[]>([]);

  const handleMouseMove = useCallback(
    (_data: MouseHandlerDataParam, event: MouseEvent<SVGGraphicsElement>) => {
      /*
       * Here you have three coordinates available to your use:
       * 1. MouseHandlerDataParam.activeCoordinate
       *    - this is the coordinate where Recharts decided to display the Tooltip
       *    - may or may not be close to the mouse position
       *    - relative to chart position
       * 2. RelativePointer resolved by getRelativeCoordinate
       *    - mouse pointer position
       *    - relative to the element position
       *    - because we have registered this event on the chart, the coordinates here are also relative to the chart
       * 3. event.clientX (and pageX and screenX)
       *    - these are the standard browser event coordinates
       *    - some absolute some relative, depending on scroll and viewport, see the docs for details
       *    - https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
       *
       * This particular example demonstrates the use of (2.)
       */
      const chartPointer: RelativePointer = getRelativeCoordinate(event);
      setPointers([chartPointer]);
    },
    [setPointers],
  );

  const handleTouchMove = useCallback(
    (_data: unknown, event: TouchEvent<SVGGraphicsElement>) => {
      console.log('Touch move:', event);
      const chartPointers = getRelativeCoordinate(event);
      setPointers(chartPointers);
    },
    [setPointers],
  );

  const handleLeave = useCallback(() => {
    setPointers([]);
  }, [setPointers]);

  return (
    <AreaChart
      style={{
        width: '100%',
        maxWidth: '500px',
        maxHeight: '200px',
        aspectRatio: 1,
        touchAction: 'none',
        // transform: 'scaleX(2) scaleY(3)',
      }}
      responsive
      data={data}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleLeave}
    >
      <XAxis dataKey="label" />
      <YAxis width="auto" />
      <Area type="monotone" dataKey="x" stroke="var(--color-chart-1)" />
      {pointers.map((pointer, index) => (
        <Crosshair key={index} pointer={pointer} />
      ))}
      <Legend />
    </AreaChart>
  );
}
