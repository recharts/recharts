import React from 'react';
import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import {
  Area,
  AreaChart,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  Radar,
  RadarChart,
  RechartsThemeProvider,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
} from '../../../src';
import { PageData } from '../../_data';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { assertNotNull } from '../../helper/assertNotNull';

/**
 * The path of the default `line` legend icon: a line with a hollow circle in the middle.
 */
const classicLineIconPath = 'M0,16h10.666666666666666';

function getLegendIcon(container: Element) {
  const svg = container.querySelector('.recharts-legend-item svg');
  assertNotNull(svg);
  return svg;
}

function expectLineWithSymbolIcon(container: Element) {
  const icon = getLegendIcon(container);
  const group = icon.querySelector('g.recharts-legend-icon');
  assertNotNull(group);
  expect(group.querySelector('path:not(.recharts-symbols)')).not.toBeNull();
  const symbol = group.querySelector('path.recharts-symbols');
  assertNotNull(symbol);
  return symbol;
}

function expectClassicLineIcon(container: Element) {
  const icon = getLegendIcon(container);
  expect(icon.querySelector('.recharts-symbols')).toBeNull();
  const path = icon.querySelector('path.recharts-legend-icon');
  assertNotNull(path);
  expect(path.getAttribute('d')).toContain(classicLineIconPath);
}

function expectBareSymbolIcon(container: Element) {
  const icon = getLegendIcon(container);
  expect(icon.querySelector('g.recharts-legend-icon')).toBeNull();
  const symbol = icon.querySelector('path.recharts-symbols');
  assertNotNull(symbol);
  return symbol;
}

describe('Legend icon follows the dot symbol', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  describe('Line', () => {
    function renderLine(lineProps: React.ComponentProps<typeof Line>) {
      return render(
        <LineChart width={400} height={400} data={PageData}>
          <Line isAnimationActive={false} {...lineProps} />
          <Legend />
        </LineChart>,
      );
    }

    it('draws a line with the dot symbol when dot is a symbol name', () => {
      const { container } = renderLine({ dataKey: 'uv', dot: 'star' });
      expectLineWithSymbolIcon(container);
    });

    it('draws the symbol with the same colors as the dots', () => {
      const { container } = renderLine({ dataKey: 'uv', dot: 'star' });
      const symbol = expectLineWithSymbolIcon(container);
      const dot = container.querySelector('.recharts-line-dot');
      assertNotNull(dot);
      // without a theme, Line dots have a white fill and the line stroke
      expect(dot).toHaveAttribute('fill', '#fff');
      expect(dot).toHaveAttribute('stroke', '#3182bd');
      expect(symbol).toHaveAttribute('fill', '#fff');
      expect(symbol).toHaveAttribute('stroke', '#3182bd');
    });

    it('draws the symbol with the theme colors of the dots', () => {
      const { container } = render(
        <RechartsThemeProvider value={{ graphicalItems: [{ stroke: 'red', fill: 'green' }] }}>
          <LineChart width={400} height={400} data={PageData}>
            <Line isAnimationActive={false} dataKey="uv" dot="star" />
            <Legend />
          </LineChart>
        </RechartsThemeProvider>,
      );
      const symbol = expectLineWithSymbolIcon(container);
      const dot = container.querySelector('.recharts-line-dot');
      assertNotNull(dot);
      // with a theme, Line dots are filled with the line stroke
      expect(dot).toHaveAttribute('fill', 'red');
      expect(symbol).toHaveAttribute('fill', 'red');
      expect(symbol).toHaveAttribute('stroke', 'red');
    });

    it('draws the symbol with the colors from the dot object', () => {
      const { container } = renderLine({ dataKey: 'uv', dot: { symbol: 'star', fill: 'gold', stroke: 'black' } });
      const symbol = expectLineWithSymbolIcon(container);
      expect(symbol).toHaveAttribute('fill', 'gold');
      expect(symbol).toHaveAttribute('stroke', 'black');
    });

    it('draws the symbol with the inactive color when the item is hidden', () => {
      const { container } = renderLine({ dataKey: 'uv', dot: 'star', hide: true });
      const symbol = expectLineWithSymbolIcon(container);
      // the white fill does not come from the item color, so it stays
      expect(symbol).toHaveAttribute('fill', '#fff');
      expect(symbol).toHaveAttribute('stroke', '#ccc');
    });

    it('draws a line with a circle in the dot style when dot="circle"', () => {
      const { container } = renderLine({ dataKey: 'uv', dot: 'circle' });
      const symbol = expectLineWithSymbolIcon(container);
      expect(symbol).toHaveAttribute('fill', '#fff');
    });

    it('draws a line with the dot symbol when the dot object has a symbol', () => {
      const { container } = renderLine({ dataKey: 'uv', dot: { symbol: 'diamond', r: 6 } });
      expectLineWithSymbolIcon(container);
    });

    it.each([
      { name: 'dot is undefined', dot: undefined },
      { name: 'dot={true}', dot: true },
      { name: 'dot={false}', dot: false },
      { name: 'dot is an object without symbol', dot: { r: 6 } },
      { name: 'dot is a function', dot: () => null },
    ])('keeps the default line icon when $name', ({ dot }) => {
      const { container } = renderLine({ dataKey: 'uv', dot });
      expectClassicLineIcon(container);
    });

    it('uses the explicit legendType over the dot symbol', () => {
      const { container } = renderLine({ dataKey: 'uv', dot: 'star', legendType: 'square' });
      const symbol = expectBareSymbolIcon(container);
      expect(symbol).toHaveAttribute('fill', '#3182bd');
    });

    it('uses the dot symbol with an explicit legendType="line"', () => {
      const { container } = renderLine({ dataKey: 'uv', dot: 'star', legendType: 'line' });
      expectLineWithSymbolIcon(container);
    });

    it('draws a plain line with legendType="plainline"', () => {
      const { container } = renderLine({ dataKey: 'uv', dot: 'star', legendType: 'plainline' });
      const icon = getLegendIcon(container);
      expect(icon.querySelector('line.recharts-legend-icon')).not.toBeNull();
      expect(icon.querySelector('.recharts-symbols')).toBeNull();
    });

    it('hides the legend item with legendType="none"', () => {
      const { container } = renderLine({ dataKey: 'uv', dot: 'star', legendType: 'none' });
      expect(container.querySelector('.recharts-legend-item')).toBeNull();
    });

    it('draws the dot symbol when Legend iconType="line" overrides the item', () => {
      const { container } = render(
        <LineChart width={400} height={400} data={PageData}>
          <Line isAnimationActive={false} dataKey="uv" dot="triangle" legendType="square" />
          <Legend iconType="line" />
        </LineChart>,
      );
      expectLineWithSymbolIcon(container);
    });
  });

  describe('Area', () => {
    it('draws a line with the dot symbol in the dot colors when dot is a symbol', () => {
      const { container } = render(
        <AreaChart width={400} height={400} data={PageData}>
          <Area isAnimationActive={false} dataKey="uv" dot="cross" />
          <Legend />
        </AreaChart>,
      );
      const symbol = expectLineWithSymbolIcon(container);
      const dot = container.querySelector('.recharts-area-dot');
      assertNotNull(dot);
      // without a theme, Area dots are filled with the area fill
      expect(dot).toHaveAttribute('fill', '#3182bd');
      expect(symbol).toHaveAttribute('fill', '#3182bd');
      expect(symbol).toHaveAttribute('stroke', '#3182bd');
    });

    it('keeps the default line icon without dots', () => {
      const { container } = render(
        <AreaChart width={400} height={400} data={PageData}>
          <Area isAnimationActive={false} dataKey="uv" />
          <Legend />
        </AreaChart>,
      );
      expectClassicLineIcon(container);
    });
  });

  describe('Radar', () => {
    function renderRadar(radarProps: React.ComponentProps<typeof Radar>) {
      return render(
        <RadarChart width={400} height={400} data={PageData}>
          <PolarAngleAxis dataKey="name" />
          <Radar isAnimationActive={false} {...radarProps} />
          <Legend />
        </RadarChart>,
      );
    }

    it('draws the dot symbol when dot is a symbol', () => {
      const { container } = renderRadar({ dataKey: 'uv', dot: 'star' });
      expectBareSymbolIcon(container);
    });

    it('draws the dot symbol when the dot object has a symbol', () => {
      const { container } = renderRadar({ dataKey: 'uv', dot: { symbol: 'diamond' } });
      expectBareSymbolIcon(container);
    });

    it('draws the dot symbol with the colors from the dot object', () => {
      const { container } = renderRadar({ dataKey: 'uv', stroke: 'blue', dot: { symbol: 'diamond', fill: 'gold' } });
      const symbol = expectBareSymbolIcon(container);
      expect(symbol).toHaveAttribute('fill', 'gold');
      expect(symbol).toHaveAttribute('stroke', 'blue');
    });

    it('draws the dot symbol with the theme colors of the dots', () => {
      const { container } = render(
        <RechartsThemeProvider value={{ graphicalItems: [{ stroke: 'red', fill: 'green' }] }}>
          <RadarChart width={400} height={400} data={PageData}>
            <PolarAngleAxis dataKey="name" />
            <Radar isAnimationActive={false} dataKey="uv" dot="star" />
            <Legend />
          </RadarChart>
        </RechartsThemeProvider>,
      );
      const symbol = expectBareSymbolIcon(container);
      const dot = container.querySelector('.recharts-radar-dot');
      assertNotNull(dot);
      expect(symbol).toHaveAttribute('fill', dot.getAttribute('fill'));
    });

    it('keeps the default rect icon without a dot symbol', () => {
      const { container } = renderRadar({ dataKey: 'uv', dot: true });
      const icon = getLegendIcon(container);
      expect(icon.querySelector('.recharts-symbols')).toBeNull();
      expect(icon.querySelector('path.recharts-legend-icon')).not.toBeNull();
    });

    it('uses the explicit legendType over the dot symbol', () => {
      const { container } = renderRadar({ dataKey: 'uv', dot: 'star', legendType: 'line' });
      expectLineWithSymbolIcon(container);
    });
  });

  describe('Scatter', () => {
    function renderScatter(scatterProps: React.ComponentProps<typeof Scatter>) {
      return render(
        <ScatterChart width={400} height={400}>
          <XAxis dataKey="uv" type="number" />
          <YAxis dataKey="pv" type="number" />
          <Scatter data={PageData} isAnimationActive={false} {...scatterProps} />
          <Legend />
        </ScatterChart>,
      );
    }

    it('draws the shape symbol in the legend', () => {
      const { container } = renderScatter({ shape: 'star' });
      const symbol = expectBareSymbolIcon(container);
      const { container: starContainer } = render(
        <ScatterChart width={400} height={400}>
          <Scatter data={PageData} isAnimationActive={false} legendType="star" />
          <Legend />
        </ScatterChart>,
      );
      expect(symbol.getAttribute('d')).toBe(expectBareSymbolIcon(starContainer).getAttribute('d'));
    });

    it('uses the explicit legendType over the shape', () => {
      const { container } = renderScatter({ shape: 'star', legendType: 'square' });
      const { container: squareContainer } = renderScatter({ legendType: 'square' });
      expect(expectBareSymbolIcon(container).getAttribute('d')).toBe(
        expectBareSymbolIcon(squareContainer).getAttribute('d'),
      );
    });

    it('keeps a stroke-only shape visible in the legend', () => {
      const { container } = renderScatter({ shape: 'diamond', fill: 'none', stroke: 'blue' });
      const symbol = expectBareSymbolIcon(container);
      const point = container.querySelector('.recharts-scatter-symbol path');
      assertNotNull(point);
      expect(point).toHaveAttribute('fill', 'none');
      expect(point).toHaveAttribute('stroke', 'blue');
      expect(symbol).toHaveAttribute('fill', 'none');
      expect(symbol).toHaveAttribute('stroke', 'blue');
    });

    it('draws a hidden stroke-only shape with the inactive color', () => {
      const { container } = renderScatter({ shape: 'diamond', fill: 'none', stroke: 'blue', hide: true });
      const symbol = expectBareSymbolIcon(container);
      expect(symbol).toHaveAttribute('fill', 'none');
      expect(symbol).toHaveAttribute('stroke', '#ccc');
    });

    it('draws the shape with the stroke of the points', () => {
      const { container } = renderScatter({ shape: 'star', fill: 'red', stroke: 'black' });
      const symbol = expectBareSymbolIcon(container);
      expect(symbol).toHaveAttribute('fill', 'red');
      expect(symbol).toHaveAttribute('stroke', 'black');
    });

    it('keeps the default circle icon for a custom shape', () => {
      const { container } = renderScatter({ shape: () => <circle /> });
      const { container: circleContainer } = renderScatter({});
      expect(expectBareSymbolIcon(container).getAttribute('d')).toBe(
        expectBareSymbolIcon(circleContainer).getAttribute('d'),
      );
    });
  });
});
