import React from 'react';
import { Legend, RechartsThemeProvider, Tooltip, Treemap } from 'recharts';
import { dataColorsAt, FillStrokeVariantsGrid, itemColorProps } from './FillStrokeVariants';

const data = [
  {
    name: 'Hardware',
    children: [
      { name: 'Laptop', value: 120 },
      { name: 'Monitor', value: 80 },
    ],
  },
  {
    name: 'Software',
    children: [
      { name: 'Editor', value: 100 },
      { name: 'Browser', value: 60 },
    ],
  },
];

function TreemapThemeChart() {
  return <Treemap width={500} height={300} data={data} isAnimationActive={false} nameKey="name" dataKey="value" />;
}

export function TreemapThemeComparison() {
  return (
    <>
      <h1>Unthemed Treemap</h1>
      <TreemapThemeChart />
      <h1>Themed Treemap</h1>
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            { fill: '#facc15', stroke: '#7c3aed' },
            { fill: '#38bdf8', stroke: '#0f766e' },
            { fill: '#fb7185', stroke: '#9f1239' },
          ],
          typography: { fontSize: 20, fontWeight: 'bold', fontFamily: 'monospace', color: '#0f172a' },
        }}
      >
        <TreemapThemeChart />
      </RechartsThemeProvider>
    </>
  );
}

/**
 * Data colors go on the leaves, numbered across the groups, so that all four data color entries are used.
 */
function treemapDataWithColors(enabled: boolean) {
  let leafIndex = 0;
  return data.map(group => ({
    ...group,
    children: group.children.map(leaf => ({ ...leaf, ...dataColorsAt(leafIndex++, enabled) })),
  }));
}

export function TreemapFillStrokeVariants() {
  return (
    <FillStrokeVariantsGrid
      renderChart={({ fromData, fromProps }) => (
        <Treemap
          width={380}
          height={240}
          data={treemapDataWithColors(fromData)}
          isAnimationActive={false}
          nameKey="name"
          dataKey="value"
          {...itemColorProps(fromProps)}
        >
          <Legend />
          <Tooltip defaultIndex="children[0]children[0]" />
        </Treemap>
      )}
    />
  );
}

/**
 * An explicit colorPanel paints nested tiles transparent, so their branch color shows through.
 * The tooltip of a nested tile must stay readable.
 * https://github.com/recharts/recharts/pull/8048#discussion_r4376903265
 */
export function TreemapColorPanelNestedTooltip() {
  return (
    <Treemap
      width={500}
      height={300}
      data={data}
      isAnimationActive={false}
      nameKey="name"
      dataKey="value"
      colorPanel={['steelblue', 'seagreen']}
    >
      <Tooltip defaultIndex="children[0]children[0]" />
    </Treemap>
  );
}
