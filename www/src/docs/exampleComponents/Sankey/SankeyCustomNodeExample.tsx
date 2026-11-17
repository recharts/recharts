import {
  ResponsiveContainer,
  Sankey,
  Tooltip,
  useChartWidth,
  Layer,
  Rectangle,
  SankeyNodeProps,
  Text,
  Margin,
} from 'recharts';
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
      <Rectangle x={x} y={y} width={width} height={height} fill="#5192ca" fillOpacity="1" />
      <Text textAnchor={isOut ? 'end' : 'start'} x={isOut ? x - 6 : x + width + 6} y={y + height / 2} fontSize="14">
        {payload.name}
      </Text>
      <Text
        textAnchor={isOut ? 'end' : 'start'}
        x={isOut ? x - 6 : x + width + 6}
        y={y + height / 2 + 13}
        fontSize="12"
        strokeOpacity="0.5"
      >
        {`${payload.value}k`}
      </Text>
    </Layer>
  );
}

const margin: Partial<Margin> = {
  bottom: 30,
};

const SankeyCustomNodeExample = () => (
  <ResponsiveContainer width="100%" aspect={2}>
    <Sankey data={data0} node={MyCustomSankeyNode} nodePadding={50} margin={margin}>
      <Tooltip />
      <RechartsDevtools />
    </Sankey>
  </ResponsiveContainer>
);

export default SankeyCustomNodeExample;
