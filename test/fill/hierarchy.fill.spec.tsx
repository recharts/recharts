import { describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import {
  RechartsFill,
  RechartsTheme,
  RechartsThemeProvider,
  Sankey,
  SunburstChart,
  Treemap,
  lightTheme,
  pattern,
  patterns,
} from '../../src';
import { assertNotNull } from '../helper/assertNotNull';

const dots: RechartsFill = { definition: pattern(patterns.dots) };
const theme: RechartsTheme = {
  ...lightTheme,
  graphicalItems: [
    { fill: { color: 'purple', definition: pattern(patterns.diagonal) } },
    { fill: { color: 'teal', definition: pattern(patterns.grid) } },
  ],
};

function getPaintedPatternBase(container: Element, element: Element | null | undefined): string | null {
  assertNotNull(element);
  const match = element.getAttribute('fill')?.match(/^url\(#(.+)\)$/);
  assertNotNull(match);
  const patternElement = container.querySelector(`pattern[id="${match[1]}"]`);
  assertNotNull(patternElement);
  return patternElement.querySelector('rect')?.getAttribute('fill') ?? null;
}

describe('fill objects in Treemap, SunburstChart, and Sankey', () => {
  const treemapData = [
    { name: 'a', size: 100, fill: { color: 'blue', definition: pattern(patterns.dots) } },
    { name: 'b', size: 50 },
  ];

  it('should paint a Treemap tile with the fill object of its node', () => {
    const { container } = render(
      <Treemap width={400} height={400} data={treemapData} dataKey="size" isAnimationActive={false} />,
    );

    const tiles = container.querySelectorAll('.recharts-treemap-depth-1 path.recharts-rectangle');
    expect(getPaintedPatternBase(container, tiles[0])).toBe('blue');
  });

  it('should paint Treemap tiles with the theme definitions of their branch', () => {
    const { container } = render(
      <RechartsThemeProvider value={theme}>
        <Treemap
          width={400}
          height={400}
          data={[
            { name: 'a', size: 100 },
            { name: 'b', size: 50 },
          ]}
          dataKey="size"
          isAnimationActive={false}
        />
      </RechartsThemeProvider>,
    );

    const tiles = container.querySelectorAll('.recharts-treemap-depth-1 path.recharts-rectangle');
    expect(getPaintedPatternBase(container, tiles[0])).toBe('purple');
    expect(getPaintedPatternBase(container, tiles[1])).toBe('teal');
  });

  it('should paint a Sunburst sector with the fill object of its node, in the inherited color', () => {
    const { container } = render(
      <SunburstChart
        width={400}
        height={400}
        data={{
          name: 'root',
          children: [
            { name: 'a', value: 1, fill: dots },
            { name: 'b', value: 2, fill: 'orange' },
          ],
        }}
        fill="green"
      />,
    );

    const sectors = container.querySelectorAll('path.recharts-sector');
    expect(getPaintedPatternBase(container, sectors[0])).toBe('green');
    expect(sectors[1]).toHaveAttribute('fill', 'orange');
  });

  it('should paint Sankey nodes with the fill object of their data entry', () => {
    const { container } = render(
      <Sankey
        width={400}
        height={400}
        data={{
          nodes: [{ name: 'a', fill: { color: 'blue', definition: pattern(patterns.dots) } }, { name: 'b' }],
          links: [{ source: 0, target: 1, value: 1 }],
        }}
      />,
    );

    const nodes = container.querySelectorAll('path.recharts-sankey-node');
    expect(getPaintedPatternBase(container, nodes[0])).toBe('blue');
    expect(nodes[1]).toHaveAttribute('fill', '#0088fe');
  });

  it('should paint Sankey nodes with the theme definitions', () => {
    const { container } = render(
      <RechartsThemeProvider value={theme}>
        <Sankey
          width={400}
          height={400}
          data={{ nodes: [{ name: 'a' }, { name: 'b' }], links: [{ source: 0, target: 1, value: 1 }] }}
        />
      </RechartsThemeProvider>,
    );

    const nodes = container.querySelectorAll('path.recharts-sankey-node');
    expect(getPaintedPatternBase(container, nodes[0])).toBe('purple');
  });
});
