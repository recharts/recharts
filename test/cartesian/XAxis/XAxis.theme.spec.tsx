import { describe, expect, it } from 'vitest';
import { generateMockData } from '@recharts/devtools';
import React from 'react';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { ComposedChart, RechartsThemeProvider, XAxis } from '../../../src';
import { assertNotNull } from '../../helper/assertNotNull';

const mockData = generateMockData(5, 2);

const MyChart = ({ children }: { children: React.ReactNode }) => (
  <ComposedChart width={400} height={400} data={mockData}>
    {children}
  </ComposedChart>
);

describe('XAxis theme', () => {
  describe('tick lines', () => {
    function getFirstTick(container: HTMLElement): Element {
      const firstTick = container.querySelector('line.recharts-cartesian-axis-tick-line');
      assertNotNull(firstTick);
      return firstTick;
    }

    describe('when not defined at all', () => {
      it('should use defaults', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <XAxis dataKey="label" />
          </MyChart>,
        );
        const firstTick = getFirstTick(container);
        expect(firstTick).toHaveAttribute('stroke', '#666');
        expect(firstTick).not.toHaveAttribute('stroke-width');
        expect(firstTick).not.toHaveAttribute('stroke-opacity');
        expect(firstTick).not.toHaveAttribute('stroke-dasharray');
      });

      it('should not provide any defaults when a theme exists but does not define axis styles', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider value={{ graphicalItems: [] }}>
            <MyChart>
              <XAxis dataKey="label" />
            </MyChart>
          </RechartsThemeProvider>,
        );
        expect(getFirstTick(container)).not.toHaveAttribute('stroke');
      });
    });

    describe('when defined as a prop', () => {
      it('should follow the prop for stroke and related attributes', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <XAxis dataKey="label" stroke="gold" strokeWidth={2} />
          </MyChart>,
        );
        const firstTick = getFirstTick(container);
        expect(firstTick).toHaveAttribute('stroke', 'gold');
        expect(firstTick).toHaveAttribute('stroke-width', '2');
      });

      it('should follow the prop when the theme does not define axis styles', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider value={{ graphicalItems: [] }}>
            <MyChart>
              <XAxis dataKey="label" stroke="gold" strokeWidth={2} strokeOpacity={0.5} strokeDasharray="1 3" />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const firstTick = getFirstTick(container);
        const axisLine = container.querySelector('.recharts-cartesian-axis-line');
        assertNotNull(axisLine);
        [firstTick, axisLine].forEach(line => {
          expect(line).toHaveAttribute('stroke', 'gold');
          expect(line).toHaveAttribute('stroke-width', '2');
          expect(line).toHaveAttribute('stroke-opacity', '0.5');
          expect(line).toHaveAttribute('stroke-dasharray', '1 3');
        });
      });
    });

    describe('when defined as a theme', () => {
      it('should follow the theme for stroke and related attributes', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [],
              axis: { stroke: 'gold', strokeWidth: 2, strokeOpacity: 0.5, strokeDasharray: '1 3' },
            }}
          >
            <MyChart>
              <XAxis dataKey="label" />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const firstTick = getFirstTick(container);
        expect(firstTick).toHaveAttribute('stroke', 'gold');
        expect(firstTick).toHaveAttribute('stroke-width', '2');
        expect(firstTick).toHaveAttribute('stroke-opacity', '0.5');
        expect(firstTick).toHaveAttribute('stroke-dasharray', '1 3');
      });
    });

    describe('when defined as both a prop and a theme', () => {
      it('should follow the prop if there is conflict', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider value={{ graphicalItems: [], axis: { stroke: 'purple' } }}>
            <MyChart>
              <XAxis dataKey="label" stroke="gold" />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const firstTick = getFirstTick(container);
        expect(firstTick).toHaveAttribute('stroke', 'gold');
      });

      it('should merge both if there are no conflicts', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider value={{ graphicalItems: [], axis: { stroke: 'purple' } }}>
            <MyChart>
              <XAxis dataKey="label" strokeDasharray="1 3" />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const firstTick = getFirstTick(container);
        expect(firstTick).toHaveAttribute('stroke', 'purple');
        expect(firstTick).toHaveAttribute('stroke-dasharray', '1 3');
      });
    });
  });

  describe('axis line', () => {
    function getAxisLine(container: HTMLElement): Element {
      const axisLine = container.querySelector('.recharts-cartesian-axis-line');
      assertNotNull(axisLine);
      return axisLine;
    }

    describe('when not defined at all', () => {
      it('should use defaults', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <XAxis dataKey="label" />
          </MyChart>,
        );
        const axisLine = getAxisLine(container);
        expect(axisLine).toHaveAttribute('stroke', '#666');
        expect(axisLine).not.toHaveAttribute('stroke-width');
        expect(axisLine).not.toHaveAttribute('stroke-opacity');
        expect(axisLine).not.toHaveAttribute('stroke-dasharray');
      });
    });

    describe('when defined as a prop', () => {
      it('should follow the prop for stroke and related attributes', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <XAxis dataKey="label" stroke="gold" strokeWidth={2} />
          </MyChart>,
        );
        const axisLine = getAxisLine(container);
        expect(axisLine).toHaveAttribute('stroke', 'gold');
        expect(axisLine).toHaveAttribute('stroke-width', '2');
      });
    });

    describe('when defined as a theme', () => {
      it('should follow the theme for stroke and related attributes', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [],
              axis: { stroke: 'gold', strokeWidth: 2, strokeOpacity: 0.5, strokeDasharray: '1 3' },
            }}
          >
            <MyChart>
              <XAxis dataKey="label" />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const axisLine = getAxisLine(container);
        expect(axisLine).toHaveAttribute('stroke', 'gold');
        expect(axisLine).toHaveAttribute('stroke-width', '2');
        expect(axisLine).toHaveAttribute('stroke-opacity', '0.5');
        expect(axisLine).toHaveAttribute('stroke-dasharray', '1 3');
      });
    });

    describe('when defined as both a prop and a theme', () => {
      it('should follow the prop if there is conflict', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider value={{ graphicalItems: [], axis: { stroke: 'purple' } }}>
            <MyChart>
              <XAxis dataKey="label" stroke="gold" />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const axisLine = getAxisLine(container);
        expect(axisLine).toHaveAttribute('stroke', 'gold');
      });

      it('should merge both if there are no conflicts', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider value={{ graphicalItems: [], axis: { stroke: 'purple' } }}>
            <MyChart>
              <XAxis dataKey="label" strokeDasharray="1 3" />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const axisLine = getAxisLine(container);
        expect(axisLine).toHaveAttribute('stroke', 'purple');
        expect(axisLine).toHaveAttribute('stroke-dasharray', '1 3');
      });
    });
  });

  describe('font properties in ticks', () => {
    function getFirstTickText(container: HTMLElement): Element {
      const firstLabel = container.querySelector('.recharts-xAxis-tick-labels text');
      assertNotNull(firstLabel);
      return firstLabel;
    }

    describe('when not defined at all', () => {
      it('should use defaults from CSS (no explicit fontSize or letterSpacing in DOM)', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <XAxis dataKey="label" />
          </MyChart>,
        );
        const firstText = getFirstTickText(container);
        expect(firstText).toHaveStyle({ fontSize: '', letterSpacing: '' });
      });
    });

    describe('when defined as a prop', () => {
      it('should follow the prop for fontSize and letterSpacing', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <XAxis dataKey="label" style={{ fontSize: 26, letterSpacing: '22px' }} />
          </MyChart>,
        );
        const firstText = getFirstTickText(container);
        expect(firstText).toHaveStyle({ fontSize: '26', letterSpacing: '22px' });
      });
    });

    describe('when defined as a theme', () => {
      it('should follow the theme', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [],
              typography: {
                fontSize: 14,
                letterSpacing: '0.5px',
                fontFamily: 'cursive',
                fontStyle: 'italic',
                opacity: 0.5,
                rotate: '12',
                padding: 12,
                textAnchor: 'end',
              },
            }}
          >
            <MyChart>
              <XAxis dataKey="label" />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const firstText = getFirstTickText(container);
        expect(firstText).toHaveStyle({ fontSize: '14', letterSpacing: '0.5px' });
      });
    });

    describe('when defined as both a prop and a theme', () => {
      it('should follow the prop if there is conflict', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider value={{ graphicalItems: [], typography: { fontSize: 24 } }}>
            <MyChart>
              <XAxis dataKey="label" style={{ fontSize: 16 }} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const firstText = getFirstTickText(container);
        expect(firstText).toHaveStyle({ fontSize: '16' });
      });

      it('should merge both if there are no conflicts', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider value={{ graphicalItems: [], typography: { fontSize: 24 } }}>
            <MyChart>
              <XAxis dataKey="label" style={{ letterSpacing: '2px' }} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const firstText = getFirstTickText(container);
        expect(firstText).toHaveStyle({ fontSize: '24', letterSpacing: '2px' });
      });
    });
  });
});
