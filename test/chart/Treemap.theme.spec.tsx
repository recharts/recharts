import { describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { RechartsThemeProvider, Treemap, TreemapNode } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';

const data = [
  { name: 'A', value: 100 },
  { name: 'B', value: 80 },
];

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
    const firstRect = container.querySelector('.recharts-rectangle');
    const depthOneRect = container.querySelector('.recharts-treemap-depth-1 .recharts-rectangle');
    const firstText = container.querySelector<SVGTextElement>('.recharts-treemap-depth-1 text');
    assertNotNull(firstRect);
    assertNotNull(depthOneRect);
    assertNotNull(firstText);

    expect(firstRect.getAttribute('fill')).toBe('rebeccapurple');
    expect(firstRect.getAttribute('stroke')).toBe('darkorange');
    expect(depthOneRect.getAttribute('fill')).toBe('mediumseagreen');
    expect(depthOneRect.getAttribute('stroke')).toBe('indigo');
    expect(firstText.getAttribute('font-size')).toBe('22');
    expect(firstText.getAttribute('fill')).toBe('navy');
    expect(firstText.style.fontWeight).toBe('700');
    expect(firstText.style.fontFamily).toBe('monospace');
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
    const firstRect = container.querySelector('.recharts-rectangle');
    assertNotNull(firstRect);

    expect(firstRect.getAttribute('fill')).toBe('gold');
    expect(firstRect.getAttribute('stroke')).toBe('blue');

    const depthOneRect = container.querySelector('.recharts-treemap-depth-1 .recharts-rectangle');
    assertNotNull(depthOneRect);
    expect(depthOneRect.getAttribute('fill')).toBe('gold');
    expect(depthOneRect.getAttribute('stroke')).toBe('orange');
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
