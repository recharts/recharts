import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  LabelList,
  LabelListProps,
  LabelProps,
  RechartsTheme,
  RechartsThemeProvider,
  SunburstChart,
  SunburstData,
  pattern,
  patterns,
} from '../../src';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { assertNotNull } from '../helper/assertNotNull';
import { mockGetBBox, restoreMockGetBBox } from '../helper/mockGetBBox';
import { assertZIndexLayerOrder } from '../helper/assertZIndexLayerOrder';

const data: SunburstData = {
  name: 'root',
  value: 100,
  children: [
    {
      name: 'A',
      value: 60,
      children: [
        { name: 'A1', value: 30 },
        { name: 'A2', value: 30 },
      ],
    },
    { name: 'B', value: 40 },
  ],
};

const theme: RechartsTheme = {
  graphicalItems: [
    { fill: 'red', label: { style: { fill: 'navy', fontWeight: 700 }, background: { fill: 'ivory', rx: 3 } } },
    { fill: 'green', label: { style: { fill: 'purple' }, background: false } },
  ],
  pageBackground: 'white',
};

function renderChart(props: Partial<React.ComponentProps<typeof SunburstChart>> = {}, activeTheme?: RechartsTheme) {
  return rechartsTestRender(
    <RechartsThemeProvider value={activeTheme}>
      <SunburstChart width={400} height={400} data={data} {...props} />
    </RechartsThemeProvider>,
  );
}

function labels(container: Element) {
  return Array.from(container.querySelectorAll<SVGTextElement>('.recharts-label-list text'));
}

describe('Sunburst sector labels', () => {
  beforeEach(() => mockGetBBox(() => ({ x: 10, y: 20, width: 30, height: 12 })));
  afterEach(restoreMockGetBBox);
  it('provides one default label per sector in depth-first order', () => {
    const { container } = renderChart();
    expect(labels(container).map(label => label.textContent)).toEqual(['60', '30', '30', '40']);
    const first = labels(container)[0];
    expect(first).toHaveAttribute('alignment-baseline', 'middle');
    expect(first).toHaveAttribute('text-anchor', 'middle');
    expect(first.querySelector('tspan')).toHaveAttribute('dy', '0em');
    expect(first.style.fill).toBe('black');
    expect(first).toHaveAttribute('pointer-events', 'none');
  });

  it('can disable implicit labels while keeping explicit LabelList children', () => {
    const { container } = renderChart({ label: false, children: <LabelList dataKey="name" fill="blue" /> });
    expect(labels(container).map(label => label.textContent)).toEqual(['A', 'A1', 'A2', 'B']);
    expect(labels(container).every(label => label.style.fill === 'blue')).toBe(true);
  });

  it('renders no labels when disabled', () => {
    const { container } = renderChart({ label: false });
    expect(labels(container)).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-sector')).toHaveLength(4);
  });

  it('supports dataKey, formatter, and polar positions on the label prop', () => {
    const { container } = renderChart({
      label: { dataKey: 'name', formatter: value => `Sector ${value}`, position: 'center', fill: 'blue' },
    });
    expect(labels(container).map(label => label.textContent)).toEqual([
      'Sector A',
      'Sector A1',
      'Sector A2',
      'Sector B',
    ]);
    labels(container).forEach(label => {
      expect(label).toHaveAttribute('x', '200');
      expect(label).toHaveAttribute('y', '200');
    });
  });

  it('gives custom content the sector viewBox, value, index, and computed coordinates', () => {
    const content = vi.fn((props: LabelProps) => (
      <text data-testid="custom-label" x={props.x} y={props.y}>
        {props.value}
      </text>
    ));
    const { container } = renderChart({ label: content });
    expect(container.querySelectorAll('[data-testid="custom-label"]')).toHaveLength(4);
    expect(content).toHaveBeenCalledWith(
      expect.objectContaining({
        index: 0,
        value: 60,
        viewBox: {
          cx: 200,
          cy: 200,
          innerRadius: 50,
          outerRadius: 100,
          startAngle: 0,
          endAngle: 216,
          clockWise: false,
        },
        x: expect.any(Number),
        y: expect.any(Number),
      }),
      expect.anything(),
    );
  });

  it('supports a custom SVG element', () => {
    const { container } = renderChart({ label: <text data-testid="custom-element">custom</text> });
    expect(container.querySelectorAll('[data-testid="custom-element"]')).toHaveLength(4);
  });

  it('retains Text-only options for default labels', () => {
    const { container } = renderChart({
      textOptions: { fill: 'orange', verticalAnchor: 'start', capHeight: '1em', angle: 15 },
    });
    const first = labels(container)[0];
    assertNotNull(first);
    expect(first.style.fill).toBe('orange');
    expect(first.querySelector('tspan')).toHaveAttribute('dy', '1em');
    expect(first.getAttribute('transform')).toContain('rotate(15');
  });

  it('applies label styles by first-ring branch, including nested sectors', () => {
    const { container } = renderChart({}, theme);
    expect(labels(container).map(label => label.style.fill)).toEqual(['navy', 'navy', 'navy', 'purple']);
    expect(labels(container).map(label => label.style.fontWeight)).toEqual(['700', '700', '700', '']);
    labels(container).forEach(label => expect(label).not.toHaveAttribute('stroke'));
  });

  it('preserves branch label styles and backgrounds when the theme uses fill objects', () => {
    const definition = pattern(patterns.diagonal);
    const { container } = renderChart(
      {},
      {
        ...theme,
        graphicalItems: [
          { ...theme.graphicalItems[0], fill: { color: 'red', definition } },
          { ...theme.graphicalItems[1], fill: { color: 'green', definition } },
        ],
      },
    );
    expect(Array.from(container.querySelectorAll('.recharts-sector'), sector => sector.getAttribute('fill'))).toEqual([
      'red',
      'red',
      'red',
      'green',
    ]);
    expect(labels(container).map(label => label.style.fill)).toEqual(['navy', 'navy', 'navy', 'purple']);
    const backgrounds = container.querySelectorAll('.recharts-text-background');
    expect(backgrounds).toHaveLength(3);
    backgrounds.forEach(background => expect(background).toHaveAttribute('fill', 'ivory'));
  });

  it('applies branch label styles to explicit LabelList children even when sectors have explicit colors', () => {
    const { container } = renderChart({ fill: 'orange', label: false, children: <LabelList dataKey="name" /> }, theme);
    expect(labels(container).map(label => label.style.fill)).toEqual(['navy', 'navy', 'navy', 'purple']);
  });

  it.each([
    { name: 'legacy', activeTheme: undefined },
    { name: 'themed', activeTheme: theme },
  ])('gives explicit label props precedence over shared styles in $name charts', ({ activeTheme }) => {
    const { container } = renderChart(
      {
        textOptions: { fill: 'orange', style: { fill: 'orange', fontStyle: 'italic' } },
        label: { fill: 'blue', style: { fontWeight: 400 }, background: false },
      },
      activeTheme,
    );
    labels(container).forEach(label => {
      expect(label.style.fill).toBe('blue');
      expect(label.style.fontWeight).toBe('400');
      expect(label.style.fontStyle).toBe('italic');
    });
    expect(container.querySelectorAll('.recharts-text-background')).toHaveLength(0);
  });

  it.each([
    { name: 'legacy', activeTheme: undefined },
    { name: 'themed', activeTheme: theme },
  ])('retains explicit label style precedence in $name charts', ({ activeTheme }) => {
    const { container } = renderChart(
      {
        textOptions: { style: { fill: 'orange', fontStyle: 'italic' } },
        label: { fill: 'blue', style: { fill: 'green' } },
      },
      activeTheme,
    );
    labels(container).forEach(label => {
      expect(label.style.fill).toBe('green');
      expect(label.style.fontStyle).toBe('italic');
    });
  });

  it('retains shared fill when the label does not override it', () => {
    const { container } = renderChart(
      { textOptions: { style: { fill: 'orange' } }, label: { dataKey: 'name' } },
      theme,
    );
    labels(container).forEach(label => expect(label.style.fill).toBe('orange'));
  });

  it('passes branch backgrounds to custom content, with explicit overrides merged', () => {
    const content = vi.fn((props: LabelProps) => <text>{props.value}</text>);
    renderChart({ label: { content, background: { rx: 8 } } }, theme);
    expect(content).toHaveBeenCalledWith(
      expect.objectContaining({ index: 0, background: { fill: 'ivory', rx: 8 } }),
      expect.anything(),
    );
    expect(content).toHaveBeenCalledWith(
      expect.objectContaining({ index: 3, background: { rx: 8 } }),
      expect.anything(),
    );
  });

  it('renders themed backgrounds below all label text', () => {
    const { container } = renderChart({}, theme);
    const backgrounds = container.querySelectorAll('.recharts-text-background');
    expect(backgrounds).toHaveLength(3);
    backgrounds.forEach(background => {
      expect(background).toHaveAttribute('fill', 'ivory');
      expect(background).toHaveAttribute('rx', '3');
      labels(container).forEach(label => assertZIndexLayerOrder({ front: label, back: background }));
    });
  });

  it('supports valueAccessor and keeps source payloads intact', () => {
    const before = JSON.stringify(data);
    const valueAccessor = vi.fn<NonNullable<LabelListProps['valueAccessor']>>(
      (entry, index) => `${entry.payload.name}:${index}`,
    );
    const { container } = renderChart({ label: false, children: <LabelList valueAccessor={valueAccessor} /> });
    expect(labels(container).map(label => label.textContent)).toEqual(['A:0', 'A1:1', 'A2:2', 'B:3']);
    expect(JSON.stringify(data)).toBe(before);
  });

  it('updates branch mapping when data changes', () => {
    const { container, rerender } = renderChart({}, theme);
    rerender(
      <RechartsThemeProvider value={theme}>
        <SunburstChart
          width={400}
          height={400}
          data={{ name: 'changed', value: 100, children: [{ name: 'C', value: 100 }] }}
        />
      </RechartsThemeProvider>,
    );
    expect(labels(container).map(label => label.textContent)).toEqual(['100']);
    expect(labels(container)[0].style.fill).toBe('navy');
  });

  it('handles an empty tree', () => {
    const { container } = renderChart({ data: { name: 'empty', value: 0 } });
    expect(labels(container)).toHaveLength(0);
  });
});
