import React from 'react';
import { scaleLinear } from 'd3-scale';
import { Surface } from '../container/Surface';
import { Sector } from '../shape/Sector';

export interface SunburstData {
  name: string;
  value?: number;
  children?: SunburstData[];
}

export interface SunburstChartProps {
  data: SunburstData;
  children: React.ReactNode;
}

const width = 700;
const height = 500;

export const SunburstChart = ({ data, children }: SunburstChartProps) => {
  const cx = width / 2,
    cy = height / 2;

  const total = data.value;
  const rScale = scaleLinear([0, total], [0, 360]);

  function drawArcs(root: SunburstData['children'], pad?: number): any[] {
    let startingAngle = 0;
    const padding = pad ?? 0;

    return root.map(d => {
      const arcLength = rScale(d.value);
      const start = startingAngle;
      startingAngle += arcLength;
      return (
        <Sector
          startAngle={start}
          endAngle={start + arcLength - padding}
          innerRadius={60}
          outerRadius={100}
          cx={cx}
          cy={cy}
        />
      );
    });
  }

  return (
    <div>
      <p>{data.name}</p>
      <Surface width={width} height={height}>
        {children}
        {drawArcs(data.children, 2)}
      </Surface>
    </div>
  );
};
