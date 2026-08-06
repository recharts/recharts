import { describe, expect, it } from 'vitest';
import { generateMockData } from '@recharts/devtools';
import React from 'react';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { Bar, BarChart, RechartsThemeProvider } from '../../../src';
import { getAllBarPaths } from '../../helper/expectBars';

const mockData = generateMockData(5, 2);

const MyChart = ({
  barProps = {},
  children,
}: {
  barProps?: Partial<React.ComponentProps<typeof Bar>>;
  children?: React.ReactNode;
}) => (
  <BarChart width={400} height={400} data={mockData}>
    <Bar isAnimationActive={false} dataKey="x" {...barProps} />
    {children}
  </BarChart>
);

describe('Bar theme', () => {
  function getBarFill(container: ReturnType<typeof rechartsTestRender>['container']): string | null {
    const bar = getAllBarPaths(container)[0];
    return bar?.getAttribute('fill') ?? null;
  }

  function getBarStroke(container: ReturnType<typeof rechartsTestRender>['container']): string | null {
    const bar = getAllBarPaths(container)[0];
    return bar?.getAttribute('stroke') ?? null;
  }

  function getBarStrokeWidth(container: ReturnType<typeof rechartsTestRender>['container']): string | null {
    const bar = getAllBarPaths(container)[0];
    return bar?.getAttribute('stroke-width') ?? null;
  }

  function getBarStrokeOpacity(container: ReturnType<typeof rechartsTestRender>['container']): string | null {
    const bar = getAllBarPaths(container)[0];
    return bar?.getAttribute('stroke-opacity') ?? null;
  }

  function getBarFillOpacity(container: ReturnType<typeof rechartsTestRender>['container']): string | null {
    const bar = getAllBarPaths(container)[0];
    return bar?.getAttribute('fill-opacity') ?? null;
  }

  describe('fill', () => {
    describe('when not defined at all (no provider)', () => {
      it('should have no fill (legacy behavior)', () => {
        const { container } = rechartsTestRender(<MyChart />);
        expect(getBarFill(container)).toBe(null);
      });
    });

    describe('when defined as a prop', () => {
      it('should use the prop fill value', () => {
        const { container } = rechartsTestRender(<MyChart barProps={{ fill: 'gold' }} />);
        expect(getBarFill(container)).toBe('gold');
      });
    });

    describe('when defined as a theme', () => {
      it('should use the theme fill value', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [{ fill: 'purple' }],
            }}
          >
            <MyChart />
          </RechartsThemeProvider>,
        );
        expect(getBarFill(container)).toBe('purple');
      });
    });

    describe('when both prop and theme are defined', () => {
      it('should prefer the prop over the theme', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [{ fill: 'purple' }],
            }}
          >
            <MyChart barProps={{ fill: 'gold' }} />
          </RechartsThemeProvider>,
        );
        expect(getBarFill(container)).toBe('gold');
      });
    });
  });

  describe('stroke', () => {
    describe('when not defined at all (no provider)', () => {
      it('should have no stroke (legacy behavior)', () => {
        const { container } = rechartsTestRender(<MyChart />);
        expect(getBarStroke(container)).toBe(null);
      });
    });

    describe('when defined as a theme', () => {
      it('should use the theme stroke value', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [{ stroke: 'red' }],
            }}
          >
            <MyChart />
          </RechartsThemeProvider>,
        );
        expect(getBarStroke(container)).toBe('red');
      });
    });

    describe('when both prop and theme are defined', () => {
      it('should prefer the prop over the theme', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [{ stroke: 'red' }],
            }}
          >
            <MyChart barProps={{ stroke: 'blue' }} />
          </RechartsThemeProvider>,
        );
        expect(getBarStroke(container)).toBe('blue');
      });
    });
  });

  describe('strokeWidth', () => {
    describe('when defined as a theme', () => {
      it('should use the theme strokeWidth value', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [{ strokeWidth: 4 }],
            }}
          >
            <MyChart />
          </RechartsThemeProvider>,
        );
        expect(getBarStrokeWidth(container)).toBe('4');
      });
    });
  });

  describe('strokeOpacity', () => {
    describe('when defined as a theme', () => {
      it('should use the theme strokeOpacity value', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [{ strokeOpacity: 0.5 }],
            }}
          >
            <MyChart />
          </RechartsThemeProvider>,
        );
        expect(getBarStrokeOpacity(container)).toBe('0.5');
      });
    });
  });

  describe('fillOpacity', () => {
    describe('when defined as a theme', () => {
      it('should use the theme fillOpacity value', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [{ fillOpacity: 0.7 }],
            }}
          >
            <MyChart />
          </RechartsThemeProvider>,
        );
        expect(getBarFillOpacity(container)).toBe('0.7');
      });
    });
  });

  describe('multiple styled properties', () => {
    it('should apply all theme properties together', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider
          value={{
            graphicalItems: [
              {
                fill: 'teal',
                stroke: 'navy',
                strokeWidth: 3,
                strokeOpacity: 0.8,
                fillOpacity: 0.6,
              },
            ],
          }}
        >
          <MyChart />
        </RechartsThemeProvider>,
      );
      expect(getBarFill(container)).toBe('teal');
      expect(getBarStroke(container)).toBe('navy');
      expect(getBarStrokeWidth(container)).toBe('3');
      expect(getBarStrokeOpacity(container)).toBe('0.8');
      expect(getBarFillOpacity(container)).toBe('0.6');
    });
  });

  describe('partial theme properties', () => {
    it('should apply only the theme fill while leaving other properties from legacy defaults', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider
          value={{
            graphicalItems: [{ fill: 'orange' }],
          }}
        >
          <MyChart />
        </RechartsThemeProvider>,
      );
      expect(getBarFill(container)).toBe('orange');
      expect(getBarStroke(container)).toBe(null);
      expect(getBarStrokeWidth(container)).toBe(null);
    });
  });
});
