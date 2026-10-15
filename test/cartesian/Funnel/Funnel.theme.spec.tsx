import { describe, expect, it } from 'vitest';
import React from 'react';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { Funnel, FunnelChart, Legend, RechartsThemeProvider, Tooltip } from '../../../src';
import { showTooltip } from '../../component/Tooltip/tooltipTestHelpers';
import { funnelChartMouseHoverTooltipSelector } from '../../component/Tooltip/tooltipMouseHoverSelectors';
import { assertNotNull } from '../../helper/assertNotNull';

const data = [
  { value: 100, name: 'first' },
  { value: 80, name: 'second' },
  { value: 50, name: 'third' },
  { value: 40, name: 'fourth' },
  { value: 26, name: 'fifth' },
];

const MyChart = ({ funnelProps = {} }: { funnelProps?: Partial<React.ComponentProps<typeof Funnel>> }) => (
  <FunnelChart width={500} height={500}>
    <Funnel dataKey="value" data={data} isAnimationActive={false} {...funnelProps} />
  </FunnelChart>
);

describe('Funnel theme', () => {
  function getAllFills(container: ReturnType<typeof rechartsTestRender>['container']): ReadonlyArray<string | null> {
    return Array.from(container.querySelectorAll('.recharts-trapezoid')).map(path => path.getAttribute('fill'));
  }

  function getAllStrokes(container: ReturnType<typeof rechartsTestRender>['container']): ReadonlyArray<string | null> {
    return Array.from(container.querySelectorAll('.recharts-trapezoid')).map(path => path.getAttribute('stroke'));
  }

  describe('when not defined at all (no provider)', () => {
    it('should keep the legacy default fill and stroke', () => {
      const { container } = rechartsTestRender(<MyChart />);
      const fills = getAllFills(container);
      const strokes = getAllStrokes(container);

      expect(fills).toHaveLength(data.length);
      expect(strokes).toHaveLength(data.length);
      expect(new Set(fills)).toEqual(new Set(['#808080']));
      expect(new Set(strokes)).toEqual(new Set(['#fff']));
    });
  });

  describe('when defined as a theme', () => {
    it('should apply the theme fill and stroke per index', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider
          value={{
            graphicalItems: [
              { fill: 'red', stroke: 'darkred' },
              { fill: 'blue', stroke: 'darkblue' },
            ],
          }}
        >
          <MyChart />
        </RechartsThemeProvider>,
      );
      const fills = getAllFills(container);
      const strokes = getAllStrokes(container);

      expect(fills).toHaveLength(data.length);
      expect(strokes).toHaveLength(data.length);
      expect(fills).toEqual(['red', 'blue', 'red', 'blue', 'red']);
      expect(strokes).toEqual(['darkred', 'darkblue', 'darkred', 'darkblue', 'darkred']);
    });

    it('should wrap around when there are more items than theme graphical items', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={{ graphicalItems: [{ fill: 'teal' }] }}>
          <MyChart />
        </RechartsThemeProvider>,
      );
      const fills = getAllFills(container);

      expect(fills).toHaveLength(data.length);
      expect(new Set(fills)).toEqual(new Set(['teal']));
    });
  });

  describe('when both prop and theme are defined', () => {
    it('should prefer the prop over the theme', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider
          value={{
            graphicalItems: [
              { fill: 'red', stroke: 'darkred' },
              { fill: 'blue', stroke: 'darkblue' },
            ],
          }}
        >
          <MyChart funnelProps={{ fill: 'gold', stroke: 'silver' }} />
        </RechartsThemeProvider>,
      );
      const fills = getAllFills(container);
      const strokes = getAllStrokes(container);

      expect(new Set(fills)).toEqual(new Set(['gold']));
      expect(new Set(strokes)).toEqual(new Set(['silver']));
    });
  });
});

describe('Funnel Tooltip and Legend entry colors (issue #7975)', () => {
  function getTooltipItemColor(container: HTMLElement): string {
    showTooltip(container, funnelChartMouseHoverTooltipSelector);
    const item = container.querySelector<HTMLElement>('.recharts-tooltip-item');
    assertNotNull(item);
    return item.style.color;
  }

  function getLegendIconColors(container: HTMLElement): ReadonlyArray<string | null> {
    return Array.from(container.querySelectorAll('.recharts-legend-item .recharts-legend-icon')).map(icon =>
      icon.getAttribute('fill'),
    );
  }

  it('shows the theme color in the tooltip instead of the legacy gray', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [{ fill: 'purple', stroke: 'indigo' }] }}>
        <FunnelChart width={500} height={500}>
          <Funnel dataKey="value" data={data} isAnimationActive={false} />
          <Tooltip />
        </FunnelChart>
      </RechartsThemeProvider>,
    );

    expect(container.querySelector('.recharts-trapezoid')).toHaveAttribute('fill', 'purple');
    expect(getTooltipItemColor(container)).toBe('purple');
  });

  it('shows the rendered Funnel fill in the tooltip, not a datum stroke or color', () => {
    const styledData = [{ value: 100, name: 'first', stroke: '#00ff00', color: '#0000ff' }, ...data.slice(1)];
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [{ fill: 'purple', stroke: 'indigo' }] }}>
        <FunnelChart width={500} height={500}>
          <Funnel dataKey="value" data={styledData} fill="#123456" isAnimationActive={false} />
          <Tooltip />
        </FunnelChart>
      </RechartsThemeProvider>,
    );

    expect(container.querySelector('.recharts-trapezoid')).toHaveAttribute('fill', '#123456');
    expect(getTooltipItemColor(container)).toBe('rgb(18, 52, 86)');
  });

  it('shows the resolved per-entry colors in the Legend', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            { fill: 'purple', stroke: 'indigo' },
            { fill: 'teal', stroke: 'darkslategray' },
          ],
        }}
      >
        <FunnelChart width={500} height={500}>
          <Funnel dataKey="value" data={data} isAnimationActive={false} />
          <Legend itemSorter={null} />
        </FunnelChart>
      </RechartsThemeProvider>,
    );

    expect(getLegendIconColors(container)).toEqual(['purple', 'teal', 'purple', 'teal', 'purple']);
  });

  it('adds a per-entry Legend payload with the legacy colors when there is no theme', () => {
    const { container } = rechartsTestRender(
      <FunnelChart width={500} height={500}>
        <Funnel dataKey="value" data={data} isAnimationActive={false} />
        <Legend itemSorter={null} />
      </FunnelChart>,
    );

    expect(getLegendIconColors(container)).toEqual(['#808080', '#808080', '#808080', '#808080', '#808080']);
  });

  it('uses the entry fill for the tooltip and legend when the entry defines it', () => {
    const styledData = [{ value: 100, name: 'first', fill: '#ff0000' }, ...data.slice(1)];
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [{ fill: 'purple', stroke: 'indigo' }] }}>
        <FunnelChart width={500} height={500}>
          <Funnel dataKey="value" data={styledData} isAnimationActive={false} />
          <Legend itemSorter={null} />
          <Tooltip />
        </FunnelChart>
      </RechartsThemeProvider>,
    );

    expect(container.querySelector('.recharts-trapezoid')).toHaveAttribute('fill', '#ff0000');
    expect(getTooltipItemColor(container)).toBe('rgb(255, 0, 0)');
    expect(getLegendIconColors(container)).toEqual(['#ff0000', 'purple', 'purple', 'purple', 'purple']);
  });
});
