import { describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import {
  Legend,
  RechartsFill,
  RechartsThemeProvider,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
  lightTheme,
  linearGradient,
  gradients,
  pattern,
  patterns,
} from '../../src';
import { assertNotNull } from '../helper/assertNotNull';

const data = [
  { x: 1, y: 1 },
  { x: 2, y: 3, fill: 'orange' },
];

function renderScatter(fill: string | RechartsFill | undefined) {
  return render(
    <RechartsThemeProvider value={{ ...lightTheme, graphicalItems: [{ fill: 'purple', stroke: 'indigo' }] }}>
      <ScatterChart width={400} height={400}>
        <XAxis dataKey="x" type="number" />
        <YAxis dataKey="y" type="number" />
        <Scatter data={data} id="my-scatter" fill={fill} isAnimationActive={false} />
        <Legend />
      </ScatterChart>
    </RechartsThemeProvider>,
  );
}

function getSymbols(container: Element): NodeListOf<Element> {
  return container.querySelectorAll('.recharts-scatter-symbol path');
}

describe('Scatter with a fill object', () => {
  it('should paint the points with the definition, and keep the own fill of data entries', () => {
    const { container } = renderScatter({ definition: linearGradient(gradients.fadeDown) });

    const symbols = getSymbols(container);
    expect(symbols).toHaveLength(2);
    expect(symbols[0]).toHaveAttribute('fill', 'url(#my-scatter-fill)');
    expect(symbols[1]).toHaveAttribute('fill', 'orange');
    const gradient = container.querySelector('linearGradient#my-scatter-fill');
    assertNotNull(gradient);
    expect(gradient.querySelector('stop')).toHaveAttribute('stop-color', 'purple');
  });

  it('should draw the definition in the legend icon', () => {
    const { container } = renderScatter({ color: 'blue', definition: pattern(patterns.dots) });

    const legendPattern = container.querySelector('.recharts-legend-item pattern');
    assertNotNull(legendPattern);
    expect(legendPattern.querySelector('rect')).toHaveAttribute('fill', 'blue');
  });

  it('should paint with the definition from the theme', () => {
    const { container } = render(
      <RechartsThemeProvider
        value={{ ...lightTheme, graphicalItems: [{ fill: { color: 'teal', definition: pattern(patterns.star) } }] }}
      >
        <ScatterChart width={400} height={400}>
          <XAxis dataKey="x" type="number" />
          <YAxis dataKey="y" type="number" />
          <Scatter data={data} id="my-scatter" isAnimationActive={false} />
        </ScatterChart>
      </RechartsThemeProvider>,
    );

    expect(getSymbols(container)[0]).toHaveAttribute('fill', 'url(#my-scatter-fill)');
    expect(container.querySelector('pattern#my-scatter-fill rect')).toHaveAttribute('fill', 'teal');
  });

  it('should keep working with a string fill', () => {
    const { container } = renderScatter('blue');

    expect(getSymbols(container)[0]).toHaveAttribute('fill', 'blue');
    expect(container.querySelector('#my-scatter-fill')).not.toBeInTheDocument();
  });
});
