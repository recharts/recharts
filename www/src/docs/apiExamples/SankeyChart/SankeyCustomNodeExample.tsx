import { ResponsiveContainer, Sankey, Tooltip, useChartWidth, Layer, Rectangle, SankeyNodeProps } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data0 = {
  nodes: [
    { name: 'Visit' },
    { name: 'Direct-Favourite' },
    { name: 'Page-Click' },
    { name: 'Detail-Favourite' },
    { name: 'Lost' },
  ],
  links: [
    { source: 0, target: 1, value: 3728.3 },
    { source: 0, target: 2, value: 354170 },
    { source: 2, target: 3, value: 62429 },
    { source: 2, target: 4, value: 291741 },
  ],
};

// #endregion
function MyCustomSankeyNode({ x, y, width, height, index, payload }: SankeyNodeProps) {
  const containerWidth = useChartWidth();
  if (containerWidth == null) {
    return null; // Return null if used outside a chart context
  }
  const isOut = x + width + 6 > containerWidth;
  return (
    <Layer key={`CustomNode${index}`}>
      <Rectangle x={x} y={y} width={width} height={height} fill="var(--color-chart-4)" fillOpacity="1" />
      <text
        textAnchor={isOut ? 'end' : 'start'}
        x={isOut ? x - 6 : x + width + 6}
        y={y + height / 2}
        fontSize="14"
        stroke="var(--color-text-3)"
      >
        {payload.name}
      </text>
      <text
        textAnchor={isOut ? 'end' : 'start'}
        x={isOut ? x - 6 : x + width + 6}
        y={y + height / 2 + 13}
        fontSize="12"
        stroke="var(--color-text-3)"
        strokeOpacity="0.5"
      >
        {`${payload.value}k`}
      </text>
    </Layer>
  );
}

const SankeyCustomNodeExample = () => (
  <ResponsiveContainer width="100%" aspect={2}>
    <Sankey
      data={data0}
      node={MyCustomSankeyNode}
      nodePadding={50}
      margin={{
        bottom: 30,
      }}
      link={{ stroke: 'var(--color-chart-5)' }}
    >
      <Tooltip
        contentStyle={{ backgroundColor: 'var(--color-surface-raised)', borderColor: 'var(--color-border-2)' }}
        itemStyle={{ color: 'var(--color-text-3)' }}
      />
      <RechartsDevtools />
    </Sankey>
  </ResponsiveContainer>
);

export default SankeyCustomNodeExample;
