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
  expect(symbol).toHaveAttribute('fill', 'none');
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
      const symbol = expectLineWithSymbolIcon(container);
      expect(symbol).toHaveAttribute('stroke', '#3182bd');
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
      { name: 'dot="circle"', dot: 'circle' as const },
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
    it('draws a line with the dot symbol when dot is a symbol', () => {
      const { container } = render(
        <AreaChart width={400} height={400} data={PageData}>
          <Area isAnimationActive={false} dataKey="uv" dot="cross" />
          <Legend />
        </AreaChart>,
      );
      expectLineWithSymbolIcon(container);
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

    it('keeps the default circle icon for a custom shape', () => {
      const { container } = renderScatter({ shape: () => <circle /> });
      const { container: circleContainer } = renderScatter({});
      expect(expectBareSymbolIcon(container).getAttribute('d')).toBe(
        expectBareSymbolIcon(circleContainer).getAttribute('d'),
      );
    });
  });
});
