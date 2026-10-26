import React from 'react';
import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import {
  Area,
  AreaChart,
  Line,
  LineChart,
  PolarAngleAxis,
  Radar,
  RadarChart,
  RechartsThemeProvider,
  SymbolType,
  Tooltip,
} from '../../src';
import { PageData } from '../_data';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { showTooltip } from './Tooltip/tooltipTestHelpers';
import {
  areaChartMouseHoverTooltipSelector,
  lineChartMouseHoverTooltipSelector,
} from './Tooltip/tooltipMouseHoverSelectors';
import { assertNotNull } from '../helper/assertNotNull';

const allSymbols: ReadonlyArray<SymbolType> = ['circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye'];

function getDots(container: Element, selector: string) {
  return Array.from(container.querySelectorAll(selector));
}

describe('dot and activeDot as a symbol name', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  describe('Line', () => {
    it.each(allSymbols)('renders dot="%s" as a symbol path on every point', symbol => {
      const { container } = render(
        <LineChart width={400} height={400} data={PageData}>
          <Line dataKey="uv" dot={symbol} isAnimationActive={false} />
        </LineChart>,
      );

      const dots = getDots(container, '.recharts-line-dot');
      expect(dots).toHaveLength(PageData.length);
      dots.forEach(dot => {
        expect(dot.tagName).toBe('path');
        expect(dot).toHaveClass('recharts-dot');
        expect(dot).toHaveClass('recharts-symbols');
        expect(dot.getAttribute('d')).toBeTruthy();
        expect(dot.getAttribute('transform')).toMatch(/^translate\(/);
      });
      expect(container.querySelectorAll('circle.recharts-dot')).toHaveLength(0);
    });

    it('places the symbol at the same coordinates as the default dot', () => {
      const { container: circles } = render(
        <LineChart width={400} height={400} data={PageData}>
          <Line dataKey="uv" dot isAnimationActive={false} />
        </LineChart>,
      );
      const { container: symbols } = render(
        <LineChart width={400} height={400} data={PageData}>
          <Line dataKey="uv" dot="diamond" isAnimationActive={false} />
        </LineChart>,
      );

      const expected = getDots(circles, '.recharts-line-dot').map(
        c => `translate(${c.getAttribute('cx')}, ${c.getAttribute('cy')})`,
      );
      const actual = getDots(symbols, '.recharts-line-dot').map(p => p.getAttribute('transform'));
      expect(actual).toEqual(expected);
    });

    it('sizes the symbol from the dot radius, so that circle spans the same diameter as the default dot', () => {
      const { container } = render(
        <LineChart width={400} height={400} data={PageData}>
          <Line dataKey="uv" dot="circle" isAnimationActive={false} />
        </LineChart>,
      );
      const dot = container.querySelector('.recharts-line-dot');
      assertNotNull(dot);
      // a circle path with radius 3, same as the default Dot r=3
      expect(dot.getAttribute('d')).toBe('M3,0A3,3,0,1,1,-3,0A3,3,0,1,1,3,0');
    });

    it('scales the symbol with the r prop of Line', () => {
      const { container } = render(
        <LineChart width={400} height={400} data={PageData}>
          <Line dataKey="uv" dot="circle" r={5} isAnimationActive={false} />
        </LineChart>,
      );
      const dot = container.querySelector('.recharts-line-dot');
      assertNotNull(dot);
      expect(dot.getAttribute('d')).toBe('M5,0A5,5,0,1,1,-5,0A5,5,0,1,1,5,0');
    });

    it('uses the same colors as the default dot', () => {
      const { container } = render(
        <LineChart width={400} height={400} data={PageData}>
          <Line dataKey="uv" dot="square" stroke="red" isAnimationActive={false} />
        </LineChart>,
      );
      const dot = container.querySelector('.recharts-line-dot');
      assertNotNull(dot);
      expect(dot).toHaveAttribute('stroke', 'red');
      expect(dot).toHaveAttribute('fill', '#fff');
    });

    it('uses theme colors for the symbol', () => {
      const { container } = render(
        <RechartsThemeProvider value={{ graphicalItems: [{ stroke: 'red', fill: 'green' }] }}>
          <LineChart width={400} height={400} data={PageData}>
            <Line dataKey="uv" dot="star" isAnimationActive={false} />
          </LineChart>
        </RechartsThemeProvider>,
      );
      const dot = container.querySelector('.recharts-line-dot');
      assertNotNull(dot);
      expect(dot).toHaveAttribute('fill', 'red');
    });

    it('renders activeDot as a symbol', () => {
      const { container } = render(
        <LineChart width={400} height={400} data={PageData}>
          <Line dataKey="uv" activeDot="triangle" />
          <Tooltip />
        </LineChart>,
      );

      showTooltip(container, lineChartMouseHoverTooltipSelector);
      const activeDot = container.querySelector('.recharts-active-dot path');
      assertNotNull(activeDot);
      expect(activeDot).toHaveClass('recharts-dot');
      expect(activeDot).toHaveClass('recharts-symbols');
      expect(activeDot).toHaveAttribute('transform', 'translate(161, 102.5)');
      expect(activeDot).toHaveAttribute('fill', '#3182bd');
      expect(activeDot).toHaveAttribute('stroke', '#fff');
      expect(container.querySelector('.recharts-active-dot circle')).toBeNull();
    });

    it('uses the theme active styles for a symbol activeDot', () => {
      const { container } = render(
        <RechartsThemeProvider value={{ graphicalItems: [{ stroke: 'red', fill: 'green', active: { fill: 'blue' } }] }}>
          <LineChart width={400} height={400} data={PageData}>
            <Line dataKey="uv" activeDot="wye" />
            <Tooltip />
          </LineChart>
        </RechartsThemeProvider>,
      );
      showTooltip(container, lineChartMouseHoverTooltipSelector);
      const activeDot = container.querySelector('.recharts-active-dot path');
      assertNotNull(activeDot);
      expect(activeDot).toHaveAttribute('fill', 'blue');
    });
  });

  describe('Line with the symbol in the dot object', () => {
    it('renders dot={{ symbol }} as a symbol, sized from r', () => {
      const { container } = render(
        <LineChart width={400} height={400} data={PageData}>
          <Line dataKey="uv" dot={{ symbol: 'circle', r: 6 }} isAnimationActive={false} />
        </LineChart>,
      );
      const dots = getDots(container, '.recharts-line-dot');
      expect(dots).toHaveLength(PageData.length);
      dots.forEach(dot => {
        expect(dot.tagName).toBe('path');
        expect(dot).toHaveClass('recharts-symbols');
        expect(dot.getAttribute('d')).toBe('M6,0A6,6,0,1,1,-6,0A6,6,0,1,1,6,0');
      });
    });

    it('applies the other props of the dot object to the symbol', () => {
      const { container } = render(
        <LineChart width={400} height={400} data={PageData}>
          <Line
            dataKey="uv"
            dot={{ symbol: 'diamond', stroke: 'red', strokeWidth: 5, className: 'my-dot' }}
            isAnimationActive={false}
          />
        </LineChart>,
      );
      const dot = container.querySelector('.recharts-line-dot');
      assertNotNull(dot);
      expect(dot.tagName).toBe('path');
      expect(dot).toHaveAttribute('stroke', 'red');
      expect(dot).toHaveAttribute('stroke-width', '5');
      expect(dot).toHaveClass('my-dot');
      expect(dot).toHaveClass('recharts-line-dot');
    });

    it('does not render the symbol prop as a DOM attribute', () => {
      const { container } = render(
        <LineChart width={400} height={400} data={PageData}>
          <Line dataKey="uv" dot={{ symbol: 'star', r: 6 }} isAnimationActive={false} />
        </LineChart>,
      );
      const dot = container.querySelector('.recharts-line-dot');
      assertNotNull(dot);
      expect(dot.hasAttribute('symbol')).toBe(false);
      expect(dot.hasAttribute('r')).toBe(false);
    });

    it('renders a circle when the dot object has no symbol', () => {
      const { container } = render(
        <LineChart width={400} height={400} data={PageData}>
          <Line dataKey="uv" dot={{ r: 6 }} isAnimationActive={false} />
        </LineChart>,
      );
      const dot = container.querySelector('.recharts-line-dot');
      assertNotNull(dot);
      expect(dot.tagName).toBe('circle');
      expect(dot).toHaveAttribute('r', '6');
    });

    it('renders activeDot={{ symbol }} as a symbol, sized from r', () => {
      const { container } = render(
        <LineChart width={400} height={400} data={PageData}>
          <Line dataKey="uv" activeDot={{ symbol: 'circle', r: 8 }} />
          <Tooltip />
        </LineChart>,
      );
      showTooltip(container, lineChartMouseHoverTooltipSelector);
      const activeDot = container.querySelector('.recharts-active-dot path');
      assertNotNull(activeDot);
      expect(activeDot).toHaveClass('recharts-symbols');
      expect(activeDot).toHaveAttribute('transform', 'translate(161, 102.5)');
      expect(activeDot.getAttribute('d')).toBe('M8,0A8,8,0,1,1,-8,0A8,8,0,1,1,8,0');
      expect(container.querySelector('.recharts-active-dot circle')).toBeNull();
    });

    it('uses the theme active styles for activeDot={{ symbol }} without own colors', () => {
      const { container } = render(
        <RechartsThemeProvider value={{ graphicalItems: [{ stroke: 'red', fill: 'green', active: { fill: 'blue' } }] }}>
          <LineChart width={400} height={400} data={PageData}>
            <Line dataKey="uv" activeDot={{ symbol: 'wye', r: 8 }} />
            <Tooltip />
          </LineChart>
        </RechartsThemeProvider>,
      );
      showTooltip(container, lineChartMouseHoverTooltipSelector);
      const activeDot = container.querySelector('.recharts-active-dot path');
      assertNotNull(activeDot);
      expect(activeDot).toHaveAttribute('fill', 'blue');
    });

    it('uses the own colors of activeDot={{ symbol }} over the theme', () => {
      const { container } = render(
        <RechartsThemeProvider value={{ graphicalItems: [{ stroke: 'red', fill: 'green', active: { fill: 'blue' } }] }}>
          <LineChart width={400} height={400} data={PageData}>
            <Line dataKey="uv" activeDot={{ symbol: 'wye', fill: 'orange' }} />
            <Tooltip />
          </LineChart>
        </RechartsThemeProvider>,
      );
      showTooltip(container, lineChartMouseHoverTooltipSelector);
      const activeDot = container.querySelector('.recharts-active-dot path');
      assertNotNull(activeDot);
      expect(activeDot).toHaveAttribute('fill', 'orange');
    });
  });

  describe('Area', () => {
    it('renders dot and activeDot as symbols', () => {
      const { container } = render(
        <AreaChart width={400} height={400} data={PageData}>
          <Area dataKey="uv" dot="cross" activeDot="cross" isAnimationActive={false} />
          <Tooltip />
        </AreaChart>,
      );

      const dots = getDots(container, '.recharts-area-dot');
      expect(dots).toHaveLength(PageData.length);
      dots.forEach(dot => expect(dot.tagName).toBe('path'));

      showTooltip(container, areaChartMouseHoverTooltipSelector);
      expect(container.querySelector('.recharts-active-dot path.recharts-symbols')).not.toBeNull();
    });
  });

  describe('Radar', () => {
    it('renders dot as symbols', () => {
      const { container } = render(
        <RadarChart width={400} height={400} data={PageData}>
          <PolarAngleAxis dataKey="name" />
          <Radar dataKey="uv" dot="diamond" isAnimationActive={false} />
        </RadarChart>,
      );

      const dots = getDots(container, '.recharts-radar-dot');
      expect(dots).toHaveLength(PageData.length);
      dots.forEach(dot => expect(dot.tagName).toBe('path'));
    });
  });
});
