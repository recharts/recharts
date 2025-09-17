import { Sankey, Tooltip, Layer, Rectangle, useChartWidth } from 'recharts';
// TODO export this type from recharts
// eslint-disable-next-line import/no-unresolved
import { NodeProps } from 'recharts/types/chart/Sankey';
import { ReactNode } from 'react';

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

function MyCustomNode({ x, y, width, height, index, payload }: NodeProps): ReactNode {
  const containerWidth = useChartWidth();
  if (containerWidth == null) {
    return null; // Return null if used outside of a chart context
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

const example = () => (
  <Sankey
    width={960}
    height={500}
    data={data0}
    // @ts-ignore Recharts type does not allow null but it should! TODO fix
    node={MyCustomNode}
    nodePadding={50}
    margin={{
      left: 200,
      right: 200,
      top: 100,
      bottom: 100,
    }}
    link={{ stroke: '#77c878' }}
  >
    <Tooltip />
  </Sankey>
);

const exampleCode = `
<Sankey
  width={960}
  height={500}
  data={data0}
  node={<MyCustomNode />}
  nodePadding={50}
  margin={{
   left: 200,
    right: 200,
    top: 100,
    bottom: 100
  }}
  link={{ stroke: '#77c878' }}
>
  <Tooltip />
</Sankey>
`;

export default [
  {
    demo: example,
    code: exampleCode,
    dataCode: `
    const data0 = ${JSON.stringify(data0, null, 2)};
    `,
  },
];
