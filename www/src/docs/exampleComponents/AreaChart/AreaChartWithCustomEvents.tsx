import type { MouseEvent, TouchEvent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  MouseHandlerDataParam,
  RelativePointer,
  getRelativeCoordinate,
} from 'recharts';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';

const data = generateMockData(20, 456);

export default function AreaChartWithCustomEvents() {
  return (
    <AreaChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}
      onClick={(mouseEventData: MouseHandlerDataParam, event: MouseEvent<SVGGraphicsElement>) => {
        const chartPointer: RelativePointer = getRelativeCoordinate(event);
        console.log('AreaChart clicked:', mouseEventData, event, chartPointer);
      }}
      onMouseEnter={(mouseEventData: MouseHandlerDataParam, event: MouseEvent<SVGGraphicsElement>) => {
        const chartPointer: RelativePointer = getRelativeCoordinate(event);
        console.log('AreaChart mouse enter:', mouseEventData, event, chartPointer);
      }}
      onMouseMove={(mouseEventData: MouseHandlerDataParam, event: MouseEvent<SVGGraphicsElement>) => {
        const chartPointer: RelativePointer = getRelativeCoordinate(event);
        console.log('AreaChart mouse move:', mouseEventData, event, chartPointer);
      }}
      onMouseLeave={(mouseEventData: MouseHandlerDataParam, event: MouseEvent<SVGGraphicsElement>) => {
        const chartPointer: RelativePointer = getRelativeCoordinate(event);
        console.log('AreaChart mouse leave', mouseEventData, event, chartPointer);
      }}
      onMouseDown={(mouseEventData: MouseHandlerDataParam, event: MouseEvent<SVGGraphicsElement>) => {
        const chartPointer: RelativePointer = getRelativeCoordinate(event);
        console.log('AreaChart mouse down:', mouseEventData, event, chartPointer);
      }}
      onMouseUp={(mouseEventData: MouseHandlerDataParam, event: MouseEvent<SVGGraphicsElement>) => {
        const chartPointer: RelativePointer = getRelativeCoordinate(event);
        console.log('AreaChart mouse up:', mouseEventData, event, chartPointer);
      }}
      onDoubleClick={(mouseEventData: MouseHandlerDataParam, event: MouseEvent<SVGGraphicsElement>) => {
        const chartPointer: RelativePointer = getRelativeCoordinate(event);
        console.log('AreaChart double click:', mouseEventData, event, chartPointer);
      }}
      onContextMenu={(mouseEventData: MouseHandlerDataParam, event: MouseEvent<SVGGraphicsElement>) => {
        const chartPointer: RelativePointer = getRelativeCoordinate(event);
        console.log('AreaChart context menu:', mouseEventData, event, chartPointer);
      }}
      onTouchStart={(mouseEventData: MouseHandlerDataParam, event: TouchEvent<SVGGraphicsElement>) => {
        const chartPointer: RelativePointer = getRelativeCoordinate(event);
        console.log('AreaChart touch start:', mouseEventData, event, chartPointer);
      }}
      onTouchMove={(mouseEventData: MouseHandlerDataParam, event: TouchEvent<SVGGraphicsElement>) => {
        const chartPointer: RelativePointer = getRelativeCoordinate(event);
        console.log('AreaChart touch move:', mouseEventData, event, chartPointer);
      }}
      onTouchEnd={(mouseEventData: MouseHandlerDataParam, event: TouchEvent<SVGGraphicsElement>) => {
        const chartPointer: RelativePointer = getRelativeCoordinate(event);
        console.log('AreaChart touch end:', mouseEventData, event, chartPointer);
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis width="auto" />
      <Tooltip />
      <Area type="step" dataKey="x" stroke="#8884d8" fill="#8884d8" />
      <RechartsDevtools />
    </AreaChart>
  );
}
