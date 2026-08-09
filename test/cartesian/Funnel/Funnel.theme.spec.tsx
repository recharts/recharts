import { describe, expect, it } from 'vitest';
import React from 'react';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { Funnel, FunnelChart, RechartsThemeProvider } from '../../../src';

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
