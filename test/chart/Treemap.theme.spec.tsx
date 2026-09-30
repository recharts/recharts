import { describe, expect, it } from 'vitest';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { RechartsThemeProvider, Treemap, TreemapNode } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';

const data = [
  { name: 'A', value: 100 },
  { name: 'B', value: 80 },
];

const nestedData = [
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
  { name: 'Services', value: 50 },
  { name: 'Other', value: 40 },
];

/**
 * Returns tiles of exactly this depth, in render order. Deeper tiles are rendered inside, so they are excluded.
 */
function queryTiles(container: Element, depth: number): ReadonlyArray<SVGPathElement> {
  return Array.from(container.querySelectorAll<SVGPathElement>('.recharts-rectangle')).filter(rect =>
    rect.closest('[class*="recharts-treemap-depth-"]')?.classList.contains(`recharts-treemap-depth-${depth}`),
  );
}

/**
 * Reads fill and stroke of the tiles, in render order, together with the name of the node.
 * The name is read from the label rendered next to the tile.
 */
function getTileAttributes(container: Element, depth: number) {
  return queryTiles(container, depth).map(rect => ({
    name: rect.parentElement?.querySelector('text')?.textContent,
    fill: rect.getAttribute('fill'),
    stroke: rect.getAttribute('stroke'),
  }));
}

function renderTreemap(children: React.ReactNode) {
  return render(
    <Treemap width={400} height={250} data={data} isAnimationActive={false} nameKey="name" dataKey="value">
      {children}
    </Treemap>,
  );
}

describe('<Treemap /> theme', () => {
  it('preserves the default node appearance without a provider', () => {
    const { container } = renderTreemap(null);
    const firstRect = container.querySelector('.recharts-rectangle');
    const depthOneRect = container.querySelector('.recharts-treemap-depth-1 .recharts-rectangle');
    assertNotNull(firstRect);
    assertNotNull(depthOneRect);

    expect(firstRect.getAttribute('fill')).toBe('#1890FF');
    expect(firstRect.getAttribute('stroke')).toBe('#fff');
    expect(depthOneRect.getAttribute('fill')).toBe('#1890FF');
    expect(depthOneRect.getAttribute('stroke')).toBe('#fff');
  });

  it('applies graphical item and typography theme values to built-in output', () => {
    const { container } = render(
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            { fill: 'rebeccapurple', stroke: 'darkorange' },
            { fill: 'mediumseagreen', stroke: 'indigo' },
          ],
          typography: { fontSize: 22, fontWeight: 700, fontFamily: 'monospace', color: 'navy' },
        }}
      >
        <Treemap width={400} height={250} data={data} isAnimationActive={false} nameKey="name" dataKey="value" />
      </RechartsThemeProvider>,
    );
    const rootRect = queryTiles(container, 0)[0];
    const depthOneRects = getTileAttributes(container, 1);
    const firstText = container.querySelector<SVGTextElement>('.recharts-treemap-depth-1 text');
    assertNotNull(rootRect);
    assertNotNull(firstText);

    expect(rootRect.getAttribute('fill')).toBe('none');
    expect(rootRect.getAttribute('stroke')).toBe('none');
    expect(depthOneRects).toEqual([
      { name: 'A', fill: 'rebeccapurple', stroke: 'darkorange' },
      { name: 'B', fill: 'mediumseagreen', stroke: 'indigo' },
    ]);
    expect(firstText.getAttribute('font-size')).toBe('22');
    expect(firstText.getAttribute('fill')).toBe('navy');
    expect(firstText.style.fontWeight).toBe('700');
    expect(firstText.style.fontFamily).toBe('monospace');
  });

  it('gives top-level siblings different colors and lets nested tiles inherit the color of their branch', () => {
    const { container } = render(
      <RechartsThemeProvider value={{ graphicalItems: [{ fill: 'red' }, { fill: 'green' }, { fill: 'blue' }] }}>
        <Treemap width={400} height={250} data={nestedData} isAnimationActive={false} nameKey="name" dataKey="value" />
      </RechartsThemeProvider>,
    );

    expect(getTileAttributes(container, 1)).toEqual([
      { name: 'Hardware', fill: 'red', stroke: '#fff' },
      { name: 'Software', fill: 'green', stroke: '#fff' },
      { name: 'Services', fill: 'blue', stroke: '#fff' },
      { name: 'Other', fill: 'red', stroke: '#fff' },
    ]);
    expect(getTileAttributes(container, 2)).toEqual([
      { name: 'Laptop', fill: 'red', stroke: '#fff' },
      { name: 'Monitor', fill: 'red', stroke: '#fff' },
      { name: 'Editor', fill: 'green', stroke: '#fff' },
      { name: 'Browser', fill: 'green', stroke: '#fff' },
    ]);
  });

  it('outlines tiles with the chart background color', () => {
    const { container } = render(
      <RechartsThemeProvider
        value={{ graphicalItems: [{ fill: 'red', stroke: 'red' }], chart: { backgroundColor: 'white' } }}
      >
        <Treemap width={400} height={250} data={nestedData} isAnimationActive={false} nameKey="name" dataKey="value" />
      </RechartsThemeProvider>,
    );
    const tiles = queryTiles(container, 2);
    expect(tiles).toHaveLength(4);
    tiles.forEach(tile => {
      expect(tile.getAttribute('stroke')).toBe('white');
    });
  });

  it('restarts the colors after nesting into a tile', () => {
    const { container } = render(
      <RechartsThemeProvider
        value={{
          graphicalItems: [{ fill: '#ffff00' }, { fill: '#000080' }],
          chart: { backgroundColor: '#eee' },
        }}
      >
        <Treemap
          width={400}
          height={250}
          data={nestedData}
          isAnimationActive={false}
          nameKey="name"
          dataKey="value"
          type="nest"
        />
      </RechartsThemeProvider>,
    );
    const software = queryTiles(container, 1)[1];
    assertNotNull(software);
    fireEvent.click(software);

    expect(getTileAttributes(container, 1)).toEqual([
      { name: 'Editor', fill: '#ffff00', stroke: '#eee' },
      { name: 'Browser', fill: '#000080', stroke: '#eee' },
    ]);
  });

  it('gives explicit node props precedence while resolving themed fields independently', () => {
    const { container } = render(
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            { fill: 'red', stroke: 'blue' },
            { fill: 'green', stroke: 'orange' },
          ],
        }}
      >
        <Treemap
          width={400}
          height={250}
          data={data}
          isAnimationActive={false}
          nameKey="name"
          dataKey="value"
          fill="gold"
        />
      </RechartsThemeProvider>,
    );

    expect(getTileAttributes(container, 1)).toEqual([
      { name: 'A', fill: 'gold', stroke: 'blue' },
      { name: 'B', fill: 'gold', stroke: 'orange' },
    ]);
  });

  it('applies typography to nest breadcrumbs without replacing custom content', () => {
    const { container } = render(
      <RechartsThemeProvider value={{ graphicalItems: [], typography: { fontSize: 20, color: 'green' } }}>
        <Treemap
          width={400}
          height={250}
          data={[{ name: 'A', children: [{ name: 'B', value: 100 }] }]}
          isAnimationActive={false}
          nameKey="name"
          dataKey="value"
          type="nest"
          content={(node: TreemapNode) => (
            <text data-testid="custom-content" fill="pink">
              {node.name}
            </text>
          )}
        />
      </RechartsThemeProvider>,
    );
    const breadcrumb = container.querySelector<HTMLElement>('.recharts-treemap-nest-index-box');
    assertNotNull(breadcrumb);

    expect(breadcrumb.style.fontSize).toBe('20px');
    expect(breadcrumb.style.color).toBe('green');
    const customContent = container.querySelector('[data-testid="custom-content"]');
    assertNotNull(customContent);
    expect(customContent.getAttribute('fill')).toBe('pink');
  });
});
