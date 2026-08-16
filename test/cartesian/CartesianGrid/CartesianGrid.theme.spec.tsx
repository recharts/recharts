import { describe, expect, it } from 'vitest';
import { generateMockData } from '@recharts/devtools';
import React from 'react';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { CartesianGrid, CartesianGridProps, ComposedChart, RechartsThemeProvider } from '../../../src';
import { assertNotNull } from '../../helper/assertNotNull';

const mockData = generateMockData(5, 2);

const MyChart = ({ children }: { children: React.ReactNode }) => (
  <ComposedChart width={400} height={400} data={mockData}>
    {children}
  </ComposedChart>
);

describe('CartesianGrid theme', () => {
  describe('lines and strokes', () => {
    describe('when not defined at all', () => {
      it('should use defaults', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <CartesianGrid />
          </MyChart>,
        );
        const allLines = container.querySelectorAll('.recharts-cartesian-grid line');
        expect(allLines.length).toBeGreaterThan(0);
        allLines.forEach(line => {
          expect(line.getAttribute('stroke')).toBe('#ccc');
          expect(line.getAttribute('stroke-width')).toBe(null);
          expect(line.getAttribute('stroke-opacity')).toBe(null);
          expect(line.getAttribute('stroke-dasharray')).toBe(null);
        });
      });

      it('should not provide any defaults when a theme exists but does not define grid styles', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider value={{ graphicalItems: [] }}>
            <MyChart>
              <CartesianGrid />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const allLines = container.querySelectorAll('.recharts-cartesian-grid line');
        expect(allLines.length).toBeGreaterThan(0);
        allLines.forEach(line => {
          expect(line).not.toHaveAttribute('stroke');
        });
      });
    });

    describe('when defined as a prop', () => {
      it('should follow the prop', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <CartesianGrid stroke="gold" strokeWidth={2} strokeOpacity={0.9} strokeDasharray={[1, 2, 3, 4]} />
          </MyChart>,
        );
        const allLines = container.querySelectorAll('.recharts-cartesian-grid line');
        expect(allLines.length).toBeGreaterThan(0);
        allLines.forEach(line => {
          expect(line.getAttribute('stroke')).toBe('gold');
          expect(line.getAttribute('stroke-width')).toBe('2');
          expect(line.getAttribute('stroke-opacity')).toBe('0.9');
          expect(line.getAttribute('stroke-dasharray')).toBe('1,2,3,4');
        });
      });
    });

    describe('when defined as a theme', () => {
      it('should follow the theme', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [],
              grid: { stroke: 'gold', strokeWidth: 2, strokeOpacity: 0.9, strokeDasharray: '1, 2, 3, 4' },
            }}
          >
            <MyChart>
              <CartesianGrid />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const allLines = container.querySelectorAll('.recharts-cartesian-grid line');
        expect(allLines.length).toBeGreaterThan(0);
        allLines.forEach(line => {
          expect(line.getAttribute('stroke')).toBe('gold');
          expect(line.getAttribute('stroke-width')).toBe('2');
          expect(line.getAttribute('stroke-opacity')).toBe('0.9');
          expect(line.getAttribute('stroke-dasharray')).toBe('1, 2, 3, 4');
        });
      });
    });

    describe('when defined as both a prop and a theme', () => {
      it('should follow the prop', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [],
              grid: { stroke: 'red', strokeWidth: 21, strokeOpacity: 0.11, strokeDasharray: '1, 12, 3, 4' },
            }}
          >
            <MyChart>
              <CartesianGrid stroke="gold" strokeWidth={2} strokeOpacity={0.9} strokeDasharray={[1, 2, 3, 4]} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const allLines = container.querySelectorAll('.recharts-cartesian-grid line');
        expect(allLines.length).toBeGreaterThan(0);
        allLines.forEach(line => {
          expect(line.getAttribute('stroke')).toBe('gold');
          expect(line.getAttribute('stroke-width')).toBe('2');
          expect(line.getAttribute('stroke-opacity')).toBe('0.9');
          expect(line.getAttribute('stroke-dasharray')).toBe('1,2,3,4');
        });
      });
    });

    describe('strokeDasharray', () => {
      function renderDasharray(input: CartesianGridProps['strokeDasharray']): string | null {
        const { container } = rechartsTestRender(
          <MyChart>
            <CartesianGrid strokeDasharray={input} />
          </MyChart>,
        );
        const firstLine = container.querySelector('.recharts-cartesian-grid line');
        assertNotNull(firstLine);
        return firstLine.getAttribute('stroke-dasharray');
      }

      it('should use strings as-is', () => {
        expect(renderDasharray('1')).toBe('1');
      });

      it('should convert number to string', () => {
        expect(renderDasharray(1)).toBe('1');
      });

      it('should convert array of numbers to string', () => {
        expect(renderDasharray([1, 2, 3])).toBe('1,2,3');
      });
    });
  });

  describe('fill', () => {
    function getBgRect(container: ReturnType<typeof rechartsTestRender>['container']): HTMLElement | null {
      return container.querySelector('.recharts-cartesian-grid-bg') as HTMLElement;
    }

    describe('when not defined at all', () => {
      it('should use defaults from theme (legacyTheme has no fill, so background is null)', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <CartesianGrid />
          </MyChart>,
        );
        // legacyTheme has fill: 'none' so Background returns null - no element rendered
        expect(getBgRect(container)).toBe(null);
      });
    });

    describe('when defined as a prop', () => {
      it('should follow the prop when both fill and fillOpacity are provided', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <CartesianGrid fill="gold" fillOpacity={0.9} />
          </MyChart>,
        );
        const bgRect = getBgRect(container);
        expect(bgRect).not.toBe(null);
        expect(bgRect?.getAttribute('fill')).toBe('gold');
        expect(bgRect?.getAttribute('fill-opacity')).toBe('0.9');
      });
    });

    describe('when defined as a theme', () => {
      it('should follow the theme fill', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider value={{ graphicalItems: [], grid: { fill: 'purple' } }}>
            <MyChart>
              <CartesianGrid />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const bgRect = getBgRect(container);
        expect(bgRect).not.toBe(null);
        expect(bgRect?.getAttribute('fill')).toBe('purple');
      });

      it('should follow the theme fillOpacity when combined with fill', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider value={{ graphicalItems: [], grid: { fill: 'lime', fillOpacity: 0.5 } }}>
            <MyChart>
              <CartesianGrid />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const bgRect = getBgRect(container);
        expect(bgRect).not.toBe(null);
        expect(bgRect?.getAttribute('fill')).toBe('lime');
        expect(bgRect?.getAttribute('fill-opacity')).toBe('0.5');
      });
    });

    describe('when defined as both a prop and a theme', () => {
      it('should follow the prop fill', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider value={{ graphicalItems: [], grid: { fill: 'red' } }}>
            <MyChart>
              <CartesianGrid fill="gold" />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const bgRect = getBgRect(container);
        expect(bgRect).not.toBe(null);
        expect(bgRect?.getAttribute('fill')).toBe('gold');
      });

      it('should follow the prop fillOpacity when combined with fill', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider value={{ graphicalItems: [], grid: { fill: 'red', fillOpacity: 0.1 } }}>
            <MyChart>
              <CartesianGrid fill="gold" fillOpacity={0.9} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const bgRect = getBgRect(container);
        expect(bgRect).not.toBe(null);
        expect(bgRect?.getAttribute('fill')).toBe('gold');
        expect(bgRect?.getAttribute('fill-opacity')).toBe('0.9');
      });
    });
  });
});
