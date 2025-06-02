import React, { useState } from 'react';
import { Pie, PieChart } from '../../../../src';
import { getChartPointer } from '../../../../src/util/getChartPointer';

import { ChartPointer } from '../../../../src/util/types';

export default {
  component: Pie,
};

type PieData = Array<{
  name: string;
  value: number;
  fill: string;
}>;

function createData(email: number, socialMedia: number, phone: number, webchat: number): PieData {
  return [
    { name: 'Email', value: email, fill: '#8884d8' },
    { name: 'Social Media', value: socialMedia, fill: '#a683ed' },
    { name: 'Phone', value: phone, fill: '#e18dd1' },
    { name: 'Web chat', value: webchat, fill: '#82ca9d' },
  ];
}

function computeAngle(cx: number, cy: number, e: React.MouseEvent): number {
  // @ts-expect-error event types are not matching
  const { chartX, chartY }: ChartPointer = getChartPointer(e);
  const deltaX = chartX - cx;
  const deltaY = chartY - cy;
  const angleInDegrees = -Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  return angleInDegrees < 0 ? angleInDegrees + 360 : angleInDegrees;
}

/**
 *
 * @param cx center of the whole chart
 * @param cy center of the whole chart
 * @param angle angle of the point relative to the zero angle which is the right side of the chart (east, 3 o'clock) in degrees
 * @param radius distance from the center of the chart to the point
 * @constructor
 */
function DraggablePoint({ cx, cy, angle, radius }: { cx: number; cy: number; angle: number; radius: number }) {
  const pointCx = cx + radius * Math.cos((angle * Math.PI) / 180);
  const pointCy = cy - radius * Math.sin((angle * Math.PI) / 180);
  return <circle cx={pointCx} cy={pointCy} r={10} fill="red" />;
}

export const DraggablePie = {
  render: () => {
    const [isDragging, setIsDragging] = useState<string | null>(null);
    const [email, setEmail] = useState(90);
    const [socialMedia, setSocialMedia] = useState(90);
    const data = createData(email, socialMedia, 90, 90);
    const cx = 250;
    const cy = 250;
    return (
      <PieChart
        width={500}
        height={500}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        onMouseDown={() => {
          setIsDragging('email');
        }}
        onMouseUp={() => {
          setIsDragging(null);
        }}
        onMouseMove={(_data, e) => {
          if (isDragging) {
            // @ts-expect-error event types are not matching
            const newAngleInDegrees = computeAngle(cx, cy, e);
            const delta = newAngleInDegrees - email;
            setEmail(newAngleInDegrees);
            setSocialMedia(socialMedia - delta);
          }
        }}
      >
        <Pie dataKey="value" data={data} outerRadius={200} label isAnimationActive={false} />
        <DraggablePoint angle={email} radius={200} cx={cx} cy={cy} />
      </PieChart>
    );
  },
};
