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
import { generateMockData, RechartsDevtools } from '@recharts/devtools';
import { useState, MouseEvent, TouchEvent, useCallback } from 'react';

import { chartTheme } from '../../../styles/chart';

const data = generateMockData(30, 123);

const TextWithOutline = (textProps: TextProps) => <Text {...chartTheme.text()} {...textProps} />;

const PixelCrosshair = ({ pointer }: { pointer: RelativePointer | null }) => {
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
        /*
         * pointerEvents: none is necessary because without it, browser will detect hovering over the Cross itself
         * which makes it trigger mouseLeave on the chart which makes it erase the Cross which looks like it's blinking.
         * If we skip pointer events on the cross then we can skip the mouseLeave and the movement is smooth.
         */
        style={{ pointerEvents: 'none' }}
        x={pointer.relativeX}
        y={pointer.relativeY}
        top={0}
        left={0}
        width={width}
        height={height}
        {...chartTheme.cross()}
      />
    </ZIndexLayer>
  );
};

export default function CrosshairExample({
  initialPointers = [],
}: {
  initialPointers?: ReadonlyArray<RelativePointer>;
}) {
  const [pointers, setPointers] = useState<ReadonlyArray<RelativePointer>>(initialPointers);

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
      const chartPointers: RelativePointer[] = getRelativeCoordinate(event);
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
      }}
      responsive
      data={data}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleLeave}
    >
      <XAxis dataKey="label" {...chartTheme.axis()} />
      <YAxis width="auto" {...chartTheme.axis()} />
      <Area
        type="monotone"
        dataKey="x"
        {...chartTheme.area({ tone: 'chart-indigo' })}
        dot={chartTheme.dot()}
        activeDot={chartTheme.activeDot()}
      />
      {pointers.map((pointer, index) => (
        <PixelCrosshair key={index} pointer={pointer} />
      ))}
      <Legend />
      <RechartsDevtools />
    </AreaChart>
  );
}
