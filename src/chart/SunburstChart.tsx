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

interface DrawArcOptions {
  r: number;
  pad?: number;
  innerRadius: number;
}

const width = 700;
const height = 500;

export const SunburstChart = ({ data, children }: SunburstChartProps) => {
  const cx = width / 2,
    cy = height / 2;

  const total = data.value;
  const rScale = scaleLinear([0, total], [0, 360]);

  function drawAllArcs(root: SunburstData): React.ReactNode[] {
    const sectors: React.ReactNode[] = [];

    // recursively add nodes for each data point and its children
    function drawArcs(childNodes: SunburstData[] | undefined, options: DrawArcOptions): any {
      const { pad, r, innerRadius } = options;

      let startingAngle = 0;
      const padding = pad ?? 0;

      if (!childNodes) return; // base case: no children of this node

      childNodes.forEach(d => {
        const arcLength = rScale(d.value);
        const start = startingAngle;
        startingAngle += arcLength;
        sectors.push(
          <Sector
            startAngle={start}
            endAngle={start + arcLength - padding}
            innerRadius={innerRadius}
            outerRadius={innerRadius + r}
            cx={cx}
            cy={cy}
          />,
        );

        return drawArcs(d.children, { pad: padding, r, innerRadius: innerRadius + r + 2 });
      });
    }

    drawArcs(root.children, { pad: 2, r: 40, innerRadius: 60 });

    return sectors;
  }

  return (
    <div>
      <p>{data.name}</p>
      <Surface width={width} height={height}>
        {children}
        {drawAllArcs(data)}
      </Surface>
    </div>
  );
};
