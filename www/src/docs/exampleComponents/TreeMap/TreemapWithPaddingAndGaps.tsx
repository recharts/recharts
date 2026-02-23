import { Tooltip, Treemap, TreemapNode } from 'recharts';

import { RechartsDevtools } from '@recharts/devtools';

const data = [
  {
    name: 'axis',
    children: [
      { name: 'Axes', size: 1302 },
      { name: 'Axis', size: 24593 },
      { name: 'AxisGridLine', size: 652 },
      { name: 'AxisLabel', size: 636 },
      { name: 'CartesianAxes', size: 6703 },
    ],
  },
  {
    name: 'controls',
    children: [
      { name: 'AnchorControl', size: 2138 },
      { name: 'ClickControl', size: 3824 },
      { name: 'Control', size: 1353 },
      { name: 'ControlList', size: 4665 },
      { name: 'DragControl', size: 2649 },
      { name: 'ExpandControl', size: 2832 },
      { name: 'HoverControl', size: 4896 },
      { name: 'IControl', size: 763 },
      { name: 'PanZoomControl', size: 5222 },
      { name: 'SelectionControl', size: 7862 },
      { name: 'TooltipControl', size: 8435 },
    ],
  },
  {
    name: 'data',
    children: [
      { name: 'Data', size: 20544 },
      { name: 'DataList', size: 19788 },
      { name: 'DataSprite', size: 10349 },
      { name: 'EdgeSprite', size: 3301 },
      { name: 'NodeSprite', size: 19382 },
      {
        name: 'render',
        children: [
          { name: 'ArrowType', size: 698 },
          { name: 'EdgeRenderer', size: 5569 },
          { name: 'IRenderer', size: 353 },
          { name: 'ShapeRenderer', size: 2247 },
        ],
      },
      { name: 'ScaleBinding', size: 11275 },
      { name: 'Tree', size: 7147 },
      { name: 'TreeBuilder', size: 9930 },
    ],
  },
  {
    name: 'events',
    children: [
      { name: 'DataEvent', size: 7313 },
      { name: 'SelectionEvent', size: 6880 },
      { name: 'TooltipEvent', size: 3701 },
      { name: 'VisualizationEvent', size: 2117 },
    ],
  },
  {
    name: 'legend',
    children: [
      { name: 'Legend', size: 20859 },
      { name: 'LegendItem', size: 4614 },
      { name: 'LegendRange', size: 10530 },
    ],
  },
];

const colors = ['#8889DD', '#3a6bd6', '#ce6d1d', '#45b622', '#E2CF45'];

const renderNodeGapAndPaddingContent = (props: TreemapNode) => {
  const { root, depth, x, y, width, height, index, name, children } = props;

  const isLeaf = !children || children.length === 0;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: depth < 2 ? colors[Math.floor((index / (root?.children?.length ?? 1)) * 5)] : '#ffffff00',
          stroke: '#fff',
          strokeWidth: 1,
        }}
      />
      {isLeaf && width > 36 && height > 18 ? (
        <text x={x + width / 2} y={y + height / 2 + 4} textAnchor="middle" fill="#fff" fontSize={12}>
          {name}
        </text>
      ) : null}
    </g>
  );
};

const TreemapWithPaddingAndGaps = () => {
  return (
    <Treemap
      style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 4 / 3 }}
      data={data}
      dataKey="size"
      nameKey="name"
      aspectRatio={4 / 3}
      nodePadding={6}
      nodeGap={6}
      content={renderNodeGapAndPaddingContent}
    >
      <Tooltip />
      <RechartsDevtools />
    </Treemap>
  );
};

export default TreemapWithPaddingAndGaps;
