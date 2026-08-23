import React from 'react';
import { describe, expect, it } from 'vitest';
import { BarChart, Brush, RechartsThemeProvider } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';
import { rechartsTestRender } from '../helper/createSelectorTestCase';

const data = [
  { name: 'A', value: 10 },
  { name: 'B', value: 20 },
  { name: 'C', value: 30 },
  { name: 'D', value: 40 },
];

const MyChart = ({ children }: { children: React.ReactNode }) => (
  <BarChart width={400} height={120} data={data}>
    {children}
  </BarChart>
);

function getBrushParts(container: HTMLElement) {
  const background = container.querySelector('.recharts-brush > rect:not(.recharts-brush-slide)');
  const slide = container.querySelector('.recharts-brush-slide');
  const traveller = container.querySelector('.recharts-brush-traveller rect');
  const text = container.querySelector('.recharts-brush-texts text');
  assertNotNull(background);
  assertNotNull(slide);
  assertNotNull(traveller);
  assertNotNull(text);
  return { background, slide, text, traveller };
}

function renderBrush(children: React.ReactNode) {
  return rechartsTestRender(
    <MyChart>
      <Brush dataKey="value" x={10} y={70} width={380} height={40} alwaysShowText />
      {children}
    </MyChart>,
  );
}

describe('Brush theme', () => {
  it('preserves the legacy styles without a provider', () => {
    const { container } = renderBrush(null);
    const { background, slide, text, traveller } = getBrushParts(container);

    expect(background).toHaveAttribute('fill', '#fff');
    expect(background).toHaveAttribute('stroke', '#666');
    expect(slide).toHaveAttribute('fill', '#666');
    expect(traveller).toHaveAttribute('fill', '#666');
    expect(text).toHaveAttribute('fill', '#666');
  });

  it('does not reintroduce legacy styles when a provider has no Brush theme', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [] }}>
        <MyChart>
          <Brush dataKey="value" x={10} y={70} width={380} height={40} alwaysShowText />
        </MyChart>
      </RechartsThemeProvider>,
    );
    const { background, slide, text, traveller } = getBrushParts(container);

    expect(background).not.toHaveAttribute('fill');
    expect(background).not.toHaveAttribute('stroke');
    expect(slide).not.toHaveAttribute('fill');
    expect(traveller).not.toHaveAttribute('fill');
    expect(text).not.toHaveAttribute('fill');
  });

  it('applies the Brush theme to its background, slide, travellers, and text', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [], brush: { fill: 'teal', stroke: 'navy' } }}>
        <MyChart>
          <Brush dataKey="value" x={10} y={70} width={380} height={40} alwaysShowText />
        </MyChart>
      </RechartsThemeProvider>,
    );
    const { background, slide, text, traveller } = getBrushParts(container);

    expect(background).toHaveAttribute('fill', 'teal');
    expect(background).toHaveAttribute('stroke', 'navy');
    expect(slide).toHaveAttribute('fill', 'navy');
    expect(traveller).toHaveAttribute('fill', 'navy');
    expect(text).toHaveAttribute('fill', 'navy');
  });

  it('prefers explicit styles while retaining omitted theme fields', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [], brush: { fill: 'teal', stroke: 'navy' } }}>
        <MyChart>
          <Brush dataKey="value" x={10} y={70} width={380} height={40} alwaysShowText fill="gold" />
        </MyChart>
      </RechartsThemeProvider>,
    );
    const { background, slide, text, traveller } = getBrushParts(container);

    expect(background).toHaveAttribute('fill', 'gold');
    expect(background).toHaveAttribute('stroke', 'navy');
    expect(slide).toHaveAttribute('fill', 'navy');
    expect(traveller).toHaveAttribute('fill', 'navy');
    expect(text).toHaveAttribute('fill', 'navy');
  });

  it('does not apply theme defaults to a custom traveller element', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [], brush: { fill: 'teal', stroke: 'navy' } }}>
        <MyChart>
          <Brush
            dataKey="value"
            x={10}
            y={70}
            width={380}
            height={40}
            traveller={<rect data-testid="custom-traveller" fill="pink" stroke="black" />}
          />
        </MyChart>
      </RechartsThemeProvider>,
    );
    const customTraveller = container.querySelector('[data-testid="custom-traveller"]');
    assertNotNull(customTraveller);

    expect(customTraveller).toHaveAttribute('fill', 'pink');
    expect(customTraveller).toHaveAttribute('stroke', 'black');
  });
});
