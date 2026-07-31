import { describe, expect, it } from 'vitest';
import { generateMockData } from '@recharts/devtools';
import React from 'react';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { Area, AreaChart, RechartsThemeProvider, XAxis, YAxis } from '../../../src';
import { assertNotNull } from '../../helper/assertNotNull';
import { showTooltip } from '../../component/Tooltip/tooltipTestHelpers';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { areaChartMouseHoverTooltipSelector } from '../../component/Tooltip/tooltipMouseHoverSelectors';

const mockData = generateMockData(5, 2);

const MyChart = ({ children }: { children: React.ReactNode }) => (
  <AreaChart width={400} height={400} data={mockData}>
    <XAxis dataKey="label" />
    <YAxis />
    {children}
  </AreaChart>
);

describe('Area theme', () => {
  describe('fill', () => {
    describe('when not defined at all', () => {
      it('should use defaults', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <Area dataKey="x" />
          </MyChart>,
        );
        const path = container.querySelector('.recharts-area-area');
        assertNotNull(path);
        // defaultAreaProps: fill='#3182bd', fillOpacity=0.6
        expect(path.getAttribute('fill')).toBe('#3182bd');
        expect(path.getAttribute('fill-opacity')).toBe('0.6');
      });
    });

    describe('when defined as a prop', () => {
      it('should follow the prop', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <Area dataKey="x" fill="gold" fillOpacity={0.9} />
          </MyChart>,
        );
        const path = container.querySelector('.recharts-area-area');
        assertNotNull(path);
        expect(path.getAttribute('fill')).toBe('gold');
        expect(path.getAttribute('fill-opacity')).toBe('0.9');
      });
    });

    describe('when defined as a theme', () => {
      it('should follow the theme for fill and fillOpacity', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [
                {
                  fill: 'purple',
                  fillOpacity: 0.7,
                },
              ],
            }}
          >
            <MyChart>
              <Area dataKey="x" />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const path = container.querySelector('.recharts-area-area');
        assertNotNull(path);
        expect(path.getAttribute('fill')).toBe('purple');
        expect(path.getAttribute('fill-opacity')).toBe('0.7');
      });
    });

    describe('when defined as both a prop and a theme', () => {
      it('should follow the prop', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [
                {
                  fill: 'red',
                  fillOpacity: 0.1,
                },
              ],
            }}
          >
            <MyChart>
              <Area dataKey="x" fill="gold" fillOpacity={0.9} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const path = container.querySelector('.recharts-area-area');
        assertNotNull(path);
        expect(path.getAttribute('fill')).toBe('gold');
        expect(path.getAttribute('fill-opacity')).toBe('0.9');
      });
    });

    describe('when only some props are provided', () => {
      it('should merge prop with theme for missing fields', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [
                {
                  fill: 'purple',
                  fillOpacity: 0.7,
                },
              ],
            }}
          >
            <MyChart>
              {/* Only provide fill, theme should supply fillOpacity */}
              <Area dataKey="x" fill="gold" />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const path = container.querySelector('.recharts-area-area');
        assertNotNull(path);
        expect(path.getAttribute('fill')).toBe('gold');
        expect(path.getAttribute('fill-opacity')).toBe('0.7');
      });
    });
  });

  describe('stroke', () => {
    describe('when not defined at all', () => {
      it('should use defaults', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <Area dataKey="x" />
          </MyChart>,
        );
        const path = container.querySelector('.recharts-area-curve');
        assertNotNull(path);
        // defaultAreaProps: stroke='#3182bd', strokeWidth=1
        expect(path.getAttribute('stroke')).toBe('#3182bd');
        expect(path.getAttribute('stroke-width')).toBe('1');
        expect(path.getAttribute('stroke-opacity')).toBe(null);
        expect(path.getAttribute('stroke-dasharray')).toBe(null);
      });
    });

    describe('when defined as a prop', () => {
      it('should follow the prop', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <Area dataKey="x" stroke="red" strokeWidth={3} strokeOpacity={0.5} strokeDasharray="1, 2, 3" />
          </MyChart>,
        );
        const path = container.querySelector('.recharts-area-curve');
        assertNotNull(path);
        expect(path.getAttribute('stroke')).toBe('red');
        expect(path.getAttribute('stroke-width')).toBe('3');
        expect(path.getAttribute('stroke-opacity')).toBe('0.5');
        expect(path.getAttribute('stroke-dasharray')).toBe('1, 2, 3');
      });
    });

    describe('when defined as a theme', () => {
      it('should follow the theme for all stroke properties', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [
                {
                  fill: 'purple',
                  stroke: 'teal',
                  strokeWidth: 4,
                  strokeOpacity: 0.3,
                  strokeDasharray: '5 10',
                },
              ],
            }}
          >
            <MyChart>
              <Area dataKey="x" />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const path = container.querySelector('.recharts-area-curve');
        assertNotNull(path);
        expect(path.getAttribute('stroke')).toBe('teal');
        expect(path.getAttribute('stroke-width')).toBe('4');
        expect(path.getAttribute('stroke-opacity')).toBe('0.3');
        expect(path.getAttribute('stroke-dasharray')).toBe('5 10');
      });
    });

    describe('when defined as both a prop and a theme', () => {
      it('should follow the prop', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [
                {
                  fill: 'purple',
                  stroke: 'blue',
                  strokeWidth: 10,
                  strokeOpacity: 0.05,
                  strokeDasharray: '1 1',
                },
              ],
            }}
          >
            <MyChart>
              <Area dataKey="x" stroke="green" strokeWidth={2} strokeOpacity={0.8} strokeDasharray="3,3" />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const path = container.querySelector('.recharts-area-curve');
        assertNotNull(path);
        expect(path.getAttribute('stroke')).toBe('green');
        expect(path.getAttribute('stroke-width')).toBe('2');
        expect(path.getAttribute('stroke-opacity')).toBe('0.8');
        expect(path.getAttribute('stroke-dasharray')).toBe('3,3');
      });
    });

    describe('when only some props are provided', () => {
      it('should merge prop with theme for missing fields', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [
                {
                  fill: 'purple',
                  stroke: 'teal',
                  strokeWidth: 4,
                  strokeOpacity: 0.3,
                  strokeDasharray: '5 10',
                },
              ],
            }}
          >
            <MyChart>
              {/* Only provide stroke, theme should supply the rest */}
              <Area dataKey="x" stroke="green" />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const path = container.querySelector('.recharts-area-curve');
        assertNotNull(path);
        expect(path.getAttribute('stroke')).toBe('green');
        expect(path.getAttribute('stroke-width')).toBe('4');
        expect(path.getAttribute('stroke-opacity')).toBe('0.3');
        expect(path.getAttribute('stroke-dasharray')).toBe('5 10');
      });
    });
  });

  describe('activeDot', () => {
    beforeEach(() => {
      mockGetBoundingClientRect({ width: 100, height: 100 });
    });

    describe('when theme has active and no explicit activeDot prop', () => {
      it('should merge theme active into activeDot object', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [
                {
                  fill: 'purple',
                  stroke: 'teal',
                  active: { fill: 'white', stroke: 'red', strokeWidth: 5 },
                },
              ],
            }}
          >
            <MyChart>
              <Area dataKey="x" activeDot />
            </MyChart>
          </RechartsThemeProvider>,
        );
        // The activeDot should have been resolved to an object with theme's active properties
        // We verify by checking that the area renders correctly
        const path = container.querySelector('.recharts-area-area');
        assertNotNull(path);
        showTooltip(container, areaChartMouseHoverTooltipSelector);
        const activeDot = container.querySelector('.recharts-active-dot circle');
        assertNotNull(activeDot);
        expect(activeDot).toHaveAttribute('fill', 'white');
        expect(activeDot).toHaveAttribute('stroke', 'red');
        expect(activeDot).toHaveAttribute('stroke-width', '5');
      });
    });

    describe('when activeDot prop conflicts with theme active', () => {
      it('should use the explicit activeDot prop', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [
                {
                  fill: 'purple',
                  stroke: 'teal',
                  active: { fill: 'white', stroke: 'red', strokeWidth: 5 },
                },
              ],
            }}
          >
            <MyChart>
              <Area dataKey="x" activeDot={{ r: 10, fill: 'gold' }} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const path = container.querySelector('.recharts-area-area');
        assertNotNull(path);
        showTooltip(container, areaChartMouseHoverTooltipSelector);
        const activeDot = container.querySelector('.recharts-active-dot circle');
        assertNotNull(activeDot);
        expect(activeDot).toHaveAttribute('fill', 'gold');
        expect(activeDot).toHaveAttribute('stroke', 'red');
        expect(activeDot).toHaveAttribute('stroke-width', '5');
        expect(activeDot).toHaveAttribute('r', '10');
      });
    });
  });

  describe('strokeDasharray', () => {
    function renderDasharray(input: string | number | undefined): string | null {
      const { container } = rechartsTestRender(
        <MyChart>
          <Area dataKey="x" strokeDasharray={input} />
        </MyChart>,
      );
      const firstPath = container.querySelector('.recharts-area-curve');
      return firstPath?.getAttribute('stroke-dasharray') ?? null;
    }

    it('should use strings as-is', () => {
      expect(renderDasharray('5 10')).toBe('5 10');
    });

    it('should convert number to string', () => {
      expect(renderDasharray(5)).toBe('5');
    });

    it('should convert array of numbers to string', () => {
      // @ts-expect-error this works but the type does not support it yet, room for improvement!
      expect(renderDasharray([5, 10, 3])).toBe('5,10,3');
    });
  });
});
