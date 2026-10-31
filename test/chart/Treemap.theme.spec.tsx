import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { emptyTheme, lightTheme, RechartsTheme, RechartsThemeProvider, Tooltip, Treemap, TreemapNode } from '../../src';
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
      { name: 'Hardware', fill: 'red', stroke: null },
      { name: 'Software', fill: 'green', stroke: null },
      { name: 'Services', fill: 'blue', stroke: null },
      { name: 'Other', fill: 'red', stroke: null },
    ]);
    expect(getTileAttributes(container, 2)).toEqual([
      { name: 'Laptop', fill: 'red', stroke: null },
      { name: 'Monitor', fill: 'red', stroke: null },
      { name: 'Editor', fill: 'green', stroke: null },
      { name: 'Browser', fill: 'green', stroke: null },
    ]);
  });

  it.each<{
    name: string;
    theme: RechartsTheme;
    expected: ReadonlyArray<{ fill: string | null; stroke: string | null }>;
  }>([
    {
      name: 'emptyTheme',
      theme: emptyTheme,
      expected: [
        { fill: null, stroke: null },
        { fill: null, stroke: null },
      ],
    },
    {
      name: 'a theme with fill only',
      theme: { graphicalItems: [{ fill: 'purple' }] },
      expected: [
        { fill: 'purple', stroke: null },
        { fill: 'purple', stroke: null },
      ],
    },
    {
      name: 'a theme with stroke only',
      theme: { graphicalItems: [{ stroke: 'purple' }] },
      expected: [
        { fill: null, stroke: 'purple' },
        { fill: null, stroke: 'purple' },
      ],
    },
    {
      name: 'a theme without graphical items',
      theme: { graphicalItems: [] },
      expected: [
        { fill: null, stroke: null },
        { fill: null, stroke: null },
      ],
    },
  ])('does not apply legacy tile colors with $name', ({ theme, expected }) => {
    const { container } = render(
      <RechartsThemeProvider value={theme}>
        <Treemap width={400} height={250} data={data} isAnimationActive={false} nameKey="name" dataKey="value" />
      </RechartsThemeProvider>,
    );

    expect(getTileAttributes(container, 1).map(({ fill, stroke }) => ({ fill, stroke }))).toEqual(expected);
  });

  it('keeps using an explicit colorPanel under a theme', () => {
    const { container } = render(
      <RechartsThemeProvider value={emptyTheme}>
        <Treemap
          width={400}
          height={250}
          data={data}
          isAnimationActive={false}
          nameKey="name"
          dataKey="value"
          colorPanel={['red', 'green']}
        />
      </RechartsThemeProvider>,
    );

    expect(getTileAttributes(container, 1).map(({ fill }) => fill)).toEqual(['red', 'green']);
  });

  it('outlines tiles with the page background color', () => {
    const { container } = render(
      <RechartsThemeProvider value={{ graphicalItems: [{ fill: 'red', stroke: 'red' }], pageBackground: 'white' }}>
        <Treemap width={400} height={250} data={nestedData} isAnimationActive={false} nameKey="name" dataKey="value" />
      </RechartsThemeProvider>,
    );
    const tiles = queryTiles(container, 2);
    expect(tiles).toHaveLength(4);
    tiles.forEach(tile => {
      expect(tile.getAttribute('stroke')).toBe('white');
    });
  });

  it('outlines tiles with chart.backgroundColor when the theme has no page background', () => {
    const { container } = render(
      <RechartsThemeProvider
        value={{ graphicalItems: [{ fill: 'red', stroke: 'red' }], chart: { backgroundColor: '#f8fafc' } }}
      >
        <Treemap width={400} height={250} data={nestedData} isAnimationActive={false} nameKey="name" dataKey="value" />
      </RechartsThemeProvider>,
    );
    const tiles = queryTiles(container, 2);
    expect(tiles).toHaveLength(4);
    tiles.forEach(tile => {
      expect(tile.getAttribute('stroke')).toBe('#f8fafc');
    });
  });

  it('prefers the page background over chart.backgroundColor for tile outlines', () => {
    const { container } = render(
      <RechartsThemeProvider
        value={{
          graphicalItems: [{ fill: 'red', stroke: 'red' }],
          chart: { backgroundColor: '#f8fafc' },
          pageBackground: 'white',
        }}
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
          pageBackground: '#eee',
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

  it('ignores the theme colors when Treemap has an explicit fill', () => {
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
      { name: 'A', fill: 'gold', stroke: null },
      { name: 'B', fill: 'gold', stroke: null },
    ]);
  });

  it('ignores the theme colors when Treemap has an explicit stroke', () => {
    const { container } = render(
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            { fill: 'red', stroke: 'blue' },
            { fill: 'green', stroke: 'orange' },
          ],
          pageBackground: 'white',
        }}
      >
        <Treemap
          width={400}
          height={250}
          data={data}
          isAnimationActive={false}
          nameKey="name"
          dataKey="value"
          stroke="#654321"
        />
      </RechartsThemeProvider>,
    );

    const tiles = getTileAttributes(container, 1);
    expect(tiles.map(({ stroke }) => stroke)).toEqual(['#654321', '#654321']);
    expect(tiles.map(({ fill }) => fill)).not.toContain('red');
    expect(tiles.map(({ fill }) => fill)).not.toContain('green');
  });

  it('merges data entry colors with explicit Treemap props under a theme', () => {
    const { container } = render(
      <RechartsThemeProvider value={{ graphicalItems: [{ fill: 'red', stroke: 'blue' }] }}>
        <Treemap
          width={400}
          height={250}
          data={[
            { name: 'A', value: 100, fill: 'lime' },
            { name: 'B', value: 80 },
          ]}
          isAnimationActive={false}
          nameKey="name"
          dataKey="value"
          stroke="#654321"
        />
      </RechartsThemeProvider>,
    );

    expect(getTileAttributes(container, 1)[0]).toEqual({ name: 'A', fill: 'lime', stroke: '#654321' });
  });

  const themes: ReadonlyArray<[string, RechartsTheme | undefined]> = [
    ['without a theme', undefined],
    ['with a theme', { graphicalItems: [{ fill: 'red', stroke: 'blue' }] }],
  ];
  it.each(themes)('does not render ids on the default node rectangles %s', (_, theme) => {
    const { container } = render(
      <RechartsThemeProvider value={theme}>
        <Treemap
          width={400}
          height={250}
          data={[
            { name: 'A', value: 100, id: 'node-a' },
            { name: 'B', value: 80 },
          ]}
          isAnimationActive={false}
          nameKey="name"
          dataKey="value"
          id="my-treemap"
        />
      </RechartsThemeProvider>,
    );

    expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(3);
    expect(container.querySelectorAll('.recharts-rectangle[id]')).toHaveLength(0);
  });

  it('still passes the data entry id to custom content', () => {
    const ids: Array<unknown> = [];
    render(
      <Treemap
        width={400}
        height={250}
        data={[
          { name: 'A', value: 100, id: 'node-a' },
          { name: 'B', value: 80 },
        ]}
        isAnimationActive={false}
        nameKey="name"
        dataKey="value"
        content={(props: TreemapNode & { id?: unknown }) => {
          if (props.depth === 1) {
            ids.push(props.id);
          }
          return <rect />;
        }}
      />,
    );

    expect(ids).toContain('node-a');
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

  it('does not apply legacy colors to nest breadcrumbs under a theme', () => {
    const { container } = render(
      <RechartsThemeProvider value={emptyTheme}>
        <Treemap
          width={400}
          height={250}
          data={[{ name: 'A', children: [{ name: 'B', value: 100 }] }]}
          isAnimationActive={false}
          nameKey="name"
          dataKey="value"
          type="nest"
        />
      </RechartsThemeProvider>,
    );
    const breadcrumb = container.querySelector<HTMLElement>('.recharts-treemap-nest-index-box');
    assertNotNull(breadcrumb);

    expect(breadcrumb.style.background).toBe('');
    expect(breadcrumb.style.color).toBe('');
  });

  it('keeps the legacy nest breadcrumb colors without a provider', () => {
    const { container } = render(
      <Treemap
        width={400}
        height={250}
        data={[{ name: 'A', children: [{ name: 'B', value: 100 }] }]}
        isAnimationActive={false}
        nameKey="name"
        dataKey="value"
        type="nest"
      />,
    );
    const breadcrumb = container.querySelector<HTMLElement>('.recharts-treemap-nest-index-box');
    assertNotNull(breadcrumb);

    expect(breadcrumb.style.background).toBe('rgb(0, 0, 0)');
    expect(breadcrumb.style.color).toBe('rgb(255, 255, 255)');
  });
});

describe('Treemap tooltip color', () => {
  function hoverTile(container: Element, depth: number, index: number): SVGPathElement {
    const tile = queryTiles(container, depth)[index];
    assertNotNull(tile);
    fireEvent.mouseOver(tile, { clientX: 200, clientY: 200 });
    act(() => {
      vi.runOnlyPendingTimers();
    });
    return tile;
  }

  function getTooltipItemColor(container: Element): string {
    const item = container.querySelector<HTMLElement>('.recharts-tooltip-item');
    assertNotNull(item);
    return item.style.color;
  }

  function renderTooltipTreemap({
    theme,
    treemapData = data,
    colorPanel,
    fill,
    stroke,
  }: {
    theme?: RechartsTheme;
    treemapData?: React.ComponentProps<typeof Treemap>['data'];
    colorPanel?: ReadonlyArray<string>;
    fill?: string;
    stroke?: string;
  }) {
    const chart = (
      <Treemap
        width={400}
        height={250}
        data={treemapData}
        isAnimationActive={false}
        nameKey="name"
        dataKey="value"
        {...(colorPanel != null ? { colorPanel } : {})}
        {...(fill != null ? { fill } : {})}
        {...(stroke != null ? { stroke } : {})}
      >
        <Tooltip />
      </Treemap>
    );
    if (theme == null) {
      return render(chart);
    }
    return render(<RechartsThemeProvider value={theme}>{chart}</RechartsThemeProvider>);
  }

  it('shows the data entry fill of the hovered node', () => {
    const { container } = renderTooltipTreemap({
      theme: {
        graphicalItems: [
          { fill: 'purple', stroke: 'indigo' },
          { fill: 'teal', stroke: 'navy' },
        ],
      },
      treemapData: [
        { name: 'A', value: 100, fill: 'lime' },
        { name: 'B', value: 80, fill: 'orange' },
      ],
    });

    const tile = hoverTile(container, 1, 1);
    expect(tile.getAttribute('fill')).toBe('orange');
    expect(getTooltipItemColor(container)).toBe('orange');
  });

  it('shows a nested data entry fill instead of the branch theme color', () => {
    const { container } = renderTooltipTreemap({
      theme: {
        graphicalItems: [{ fill: 'red' }, { fill: 'green' }],
      },
      treemapData: [
        { name: 'Hardware', children: [{ name: 'Laptop', value: 120 }] },
        {
          name: 'Software',
          children: [
            { name: 'Editor', value: 100, fill: 'lime' },
            { name: 'Browser', value: 60 },
          ],
        },
      ],
    });

    const editor = hoverTile(container, 2, 1);
    expect(editor.getAttribute('fill')).toBe('lime');
    expect(getTooltipItemColor(container)).toBe('lime');

    const browser = hoverTile(container, 2, 2);
    expect(browser.getAttribute('fill')).toBe('green');
    expect(getTooltipItemColor(container)).toBe('green');
  });

  it('keeps the default black tooltip text without a provider', () => {
    const { container } = renderTooltipTreemap({});

    const tile = hoverTile(container, 1, 1);
    expect(tile.getAttribute('fill')).toBe('#66B5FF');
    expect(getTooltipItemColor(container)).toBe('rgb(0, 0, 0)');
  });

  it('keeps the default black tooltip text for an explicit colorPanel without a provider', () => {
    const { container } = renderTooltipTreemap({
      colorPanel: ['crimson', 'darkorange'],
    });

    const tile = hoverTile(container, 1, 1);
    expect(tile.getAttribute('fill')).toBe('darkorange');
    expect(getTooltipItemColor(container)).toBe('rgb(0, 0, 0)');
  });

  it('shows the colorPanel color instead of the theme color', () => {
    const { container } = renderTooltipTreemap({
      theme: { graphicalItems: [{ fill: 'purple' }, { fill: 'teal' }] },
      colorPanel: ['crimson', 'darkorange'],
    });

    const tile = hoverTile(container, 1, 1);
    expect(tile.getAttribute('fill')).toBe('darkorange');
    expect(getTooltipItemColor(container)).toBe('darkorange');
  });

  it('shows the ancestor colorPanel color for a nested tile under a theme', () => {
    const { container } = renderTooltipTreemap({
      theme: lightTheme,
      treemapData: nestedData,
      colorPanel: ['#112233', '#445566'],
    });

    const hardware = queryTiles(container, 1)[0];
    assertNotNull(hardware);
    expect(hardware.getAttribute('fill')).toBe('#112233');

    const laptop = hoverTile(container, 2, 0);
    expect(laptop.getAttribute('fill')).toBe('rgba(255,255,255,0)');
    // The browser normalizes the hex tooltip color. It must stay the first panel color.
    expect(getTooltipItemColor(container)).toBe('rgb(17, 34, 51)');
    expect(getTooltipItemColor(container)).not.toBe('rgba(255, 255, 255, 0)');

    const editor = hoverTile(container, 2, 2);
    expect(editor.getAttribute('fill')).toBe('rgba(255,255,255,0)');
    expect(getTooltipItemColor(container)).toBe('rgb(68, 85, 102)');
    expect(getTooltipItemColor(container)).not.toBe('rgba(255, 255, 255, 0)');
  });

  it('does not use the transparent nested tile fill as the tooltip text color without a provider', () => {
    const { container } = renderTooltipTreemap({
      treemapData: nestedData,
      colorPanel: ['crimson', 'darkorange', 'navy', 'teal'],
    });

    const laptop = hoverTile(container, 2, 0);
    expect(laptop.getAttribute('fill')).toBe('rgba(255,255,255,0)');
    expect(getTooltipItemColor(container)).toBe('rgb(0, 0, 0)');
  });

  it('keeps using the data entry color key without a provider', () => {
    const { container } = renderTooltipTreemap({
      treemapData: [
        { name: 'A', value: 100, color: 'blue' },
        { name: 'B', value: 80 },
      ],
    });

    hoverTile(container, 1, 0);
    expect(getTooltipItemColor(container)).toBe('blue');
  });

  it('shows the theme color of the hovered branch, including a nested node', () => {
    const { container } = renderTooltipTreemap({
      theme: { graphicalItems: [{ fill: 'red' }, { fill: 'green' }, { fill: 'blue' }] },
      treemapData: nestedData,
    });

    const software = hoverTile(container, 1, 1);
    expect(software.getAttribute('fill')).toBe('green');
    expect(getTooltipItemColor(container)).toBe('green');

    const editor = hoverTile(container, 2, 2);
    expect(editor.getAttribute('fill')).toBe('green');
    expect(getTooltipItemColor(container)).toBe('green');
  });

  it('shows the Treemap fill when the node has no color of its own', () => {
    const { container } = renderTooltipTreemap({
      theme: {
        graphicalItems: [
          { fill: 'purple', stroke: 'indigo' },
          { fill: 'teal', stroke: 'navy' },
        ],
      },
      fill: '#123456',
    });

    const tile = hoverTile(container, 1, 1);
    expect(tile.getAttribute('fill')).toBe('#123456');
    expect(getTooltipItemColor(container)).toBe('rgb(18, 52, 86)');
  });

  it('shows the data entry fill when the Treemap also sets a fill', () => {
    const { container } = renderTooltipTreemap({
      fill: '#123456',
      treemapData: [
        { name: 'A', value: 100, fill: 'lime' },
        { name: 'B', value: 80 },
      ],
    });

    const colored = hoverTile(container, 1, 0);
    expect(colored.getAttribute('fill')).toBe('lime');
    expect(getTooltipItemColor(container)).toBe('lime');

    const plain = hoverTile(container, 1, 1);
    expect(plain.getAttribute('fill')).toBe('#123456');
    expect(getTooltipItemColor(container)).toBe('rgb(18, 52, 86)');
  });

  it('shows the rendered color in nest mode after zooming in through the breadcrumb', () => {
    const { container } = render(
      <RechartsThemeProvider value={{ graphicalItems: [{ fill: 'red' }, { fill: 'green' }] }}>
        <Treemap
          width={400}
          height={250}
          data={nestedData}
          isAnimationActive={false}
          nameKey="name"
          dataKey="value"
          type="nest"
        >
          <Tooltip />
        </Treemap>
      </RechartsThemeProvider>,
    );
    const software = queryTiles(container, 1)[1];
    assertNotNull(software);
    fireEvent.click(software);
    const breadcrumb = container.querySelectorAll<HTMLElement>('.recharts-treemap-nest-index-box')[1];
    assertNotNull(breadcrumb);
    fireEvent.click(breadcrumb);

    const editor = hoverTile(container, 1, 0);
    expect(editor.getAttribute('fill')).toBe('red');
    expect(getTooltipItemColor(container)).toBe('red');
  });

  it('ignores a data color key that does not paint the node', () => {
    const { container } = renderTooltipTreemap({
      theme: { graphicalItems: [{ fill: 'purple' }, { fill: 'teal' }] },
      treemapData: [
        { name: 'A', value: 100, color: 'blue' },
        { name: 'B', value: 80 },
      ],
    });

    const tile = hoverTile(container, 1, 0);
    expect(tile.getAttribute('fill')).toBe('purple');
    expect(getTooltipItemColor(container)).toBe('purple');
  });
});
