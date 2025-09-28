import { ReactNode } from 'react';
import { Layer, Rectangle, useChartWidth } from 'recharts';
import { NodeProps } from 'recharts/types/chart/Sankey';

export function MyCustomSankeyNode({ x, y, width, height, index, payload }: NodeProps): ReactNode {
  const containerWidth = useChartWidth();
  if (containerWidth == null) {
    return null; // Return null if used outside a chart context
  }
  const isOut = x + width + 6 > containerWidth;
  return (
    <Layer key={`CustomNode${index}`}>
      <Rectangle x={x} y={y} width={width} height={height} fill="#5192ca" fillOpacity="1" />
      <text
        textAnchor={isOut ? 'end' : 'start'}
        x={isOut ? x - 6 : x + width + 6}
        y={y + height / 2}
        fontSize="14"
        stroke="#333"
      >
        {payload.name}
      </text>
      <text
        textAnchor={isOut ? 'end' : 'start'}
        x={isOut ? x - 6 : x + width + 6}
        y={y + height / 2 + 13}
        fontSize="12"
        stroke="#333"
        strokeOpacity="0.5"
      >
        {`${payload.value}k`}
      </text>
    </Layer>
  );
}
