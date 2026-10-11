import { describe, expect, it } from 'vitest';
import React from 'react';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { Scatter, ScatterChart, RechartsThemeProvider, XAxis, YAxis } from '../../../src';
import { getAllScatterPoints } from '../../helper/expectScatterPoints';

const scatterData = [
  { x: 10, y: 20, z: 30 },
  { x: 20, y: 30, z: 40 },
  { x: 30, y: 40, z: 50 },
];

const MyChart = ({ children }: { children: React.ReactNode }) => (
  <ScatterChart width={400} height={400}>
    <XAxis dataKey="x" type="number" />
    <YAxis dataKey="y" type="number" />
    {children}
  </ScatterChart>
);

describe('Scatter theme', () => {
  describe('fill and stroke from graphicalItems', () => {
    describe('when not defined at all', () => {
      it('should use defaults (no fill or stroke from theme)', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <Scatter data={scatterData} isAnimationActive={false} />
          </MyChart>,
        );
        const allPaths = getAllScatterPoints(container);
        expect(allPaths).toHaveLength(scatterData.length);
        // No theme values applied, so fill, stroke and stroke-dasharray are undefined
        allPaths.forEach(path => {
          expect(path.getAttribute('fill')).toBe(null);
          expect(path.getAttribute('stroke')).toBe(null);
          expect(path.getAttribute('stroke-dasharray')).toBe(null);
        });
      });
    });

    describe('when defined as a prop', () => {
      it('should follow the prop for fill and stroke', () => {
        const { container } = rechartsTestRender(
          <MyChart>
            <Scatter data={scatterData} fill="gold" stroke="red" strokeDasharray="5 5" isAnimationActive={false} />
          </MyChart>,
        );
        const allPaths = getAllScatterPoints(container);
        expect(allPaths).toHaveLength(scatterData.length);
        allPaths.forEach(path => {
          expect(path.getAttribute('fill')).toBe('gold');
          expect(path.getAttribute('stroke')).toBe('red');
          expect(path.getAttribute('stroke-dasharray')).toBe('5 5');
        });
      });
    });

    describe('when defined in graphicalItems', () => {
      it('should use graphicalItems values for fill and stroke', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [
                {
                  fill: '#8884d8',
                  stroke: '#8884d8',
                  strokeDasharray: '3 3',
                },
              ],
            }}
          >
            <MyChart>
              <Scatter data={scatterData} isAnimationActive={false} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const allPaths = getAllScatterPoints(container);
        expect(allPaths).toHaveLength(scatterData.length);
        allPaths.forEach(path => {
          expect(path.getAttribute('fill')).toBe('#8884d8');
          expect(path.getAttribute('stroke')).toBe('#8884d8');
          expect(path.getAttribute('stroke-dasharray')).toBe('3 3');
        });
      });
    });

    describe('when defined in both prop and graphicalItems', () => {
      it('should prioritize the prop value', () => {
        const { container } = rechartsTestRender(
          <RechartsThemeProvider
            value={{
              graphicalItems: [
                {
                  fill: '#8884d8',
                  stroke: '#8884d8',
                  strokeDasharray: '3 3',
                },
              ],
            }}
          >
            <MyChart>
              <Scatter data={scatterData} fill="green" stroke="blue" strokeDasharray="6 2" isAnimationActive={false} />
            </MyChart>
          </RechartsThemeProvider>,
        );
        const allPaths = getAllScatterPoints(container);
        expect(allPaths).toHaveLength(scatterData.length);
        allPaths.forEach(path => {
          expect(path.getAttribute('fill')).toBe('green');
          expect(path.getAttribute('stroke')).toBe('blue');
          expect(path.getAttribute('stroke-dasharray')).toBe('6 2');
        });
      });
    });
  });

  describe('strokeWidth, strokeOpacity, fillOpacity from graphicalItems', () => {
    it('should apply strokeWidth from graphicalItems', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider
          value={{
            graphicalItems: [
              {
                strokeWidth: 5,
                strokeDasharray: '4 4',
              },
            ],
          }}
        >
          <MyChart>
            <Scatter data={scatterData} isAnimationActive={false} />
          </MyChart>
        </RechartsThemeProvider>,
      );
      const allPaths = getAllScatterPoints(container);
      expect(allPaths).toHaveLength(scatterData.length);
      allPaths.forEach(path => {
        expect(path.getAttribute('stroke-width')).toBe('5');
        expect(path.getAttribute('stroke-dasharray')).toBe('4 4');
      });
    });

    it('should apply strokeOpacity from graphicalItems', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider
          value={{
            graphicalItems: [
              {
                strokeOpacity: 0.5,
                strokeDasharray: '4 4',
              },
            ],
          }}
        >
          <MyChart>
            <Scatter data={scatterData} isAnimationActive={false} />
          </MyChart>
        </RechartsThemeProvider>,
      );
      const allPaths = getAllScatterPoints(container);
      expect(allPaths).toHaveLength(scatterData.length);
      allPaths.forEach(path => {
        expect(path.getAttribute('stroke-opacity')).toBe('0.5');
        expect(path.getAttribute('stroke-dasharray')).toBe('4 4');
      });
    });

    it('should apply fillOpacity from graphicalItems', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider
          value={{
            graphicalItems: [
              {
                fillOpacity: 0.6,
                strokeDasharray: '4 4',
              },
            ],
          }}
        >
          <MyChart>
            <Scatter data={scatterData} isAnimationActive={false} />
          </MyChart>
        </RechartsThemeProvider>,
      );
      const allPaths = getAllScatterPoints(container);
      expect(allPaths).toHaveLength(scatterData.length);
      allPaths.forEach(path => {
        expect(path.getAttribute('fill-opacity')).toBe('0.6');
        expect(path.getAttribute('stroke-dasharray')).toBe('4 4');
      });
    });

    it('should ignore the theme completely when only some props are provided', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider
          value={{
            graphicalItems: [
              {
                fill: '#ff6600',
                strokeDasharray: '4 4',
              },
            ],
          }}
        >
          <MyChart>
            <Scatter data={scatterData} stroke="red" isAnimationActive={false} />
          </MyChart>
        </RechartsThemeProvider>,
      );
      const allPaths = getAllScatterPoints(container);
      expect(allPaths).toHaveLength(scatterData.length);
      allPaths.forEach(path => {
        expect(path.getAttribute('fill')).toBe(null);
        expect(path.getAttribute('stroke')).toBe('red');
        expect(path.getAttribute('stroke-dasharray')).toBe(null);
      });
    });

    it('should not mix props with graphicalItems', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider
          value={{
            graphicalItems: [
              {
                fill: '#ff6600',
                stroke: '#00ff00',
                strokeDasharray: '3 3',
              },
            ],
          }}
        >
          <MyChart>
            <Scatter data={scatterData} fill="purple" strokeDasharray="7 1" isAnimationActive={false} />
          </MyChart>
        </RechartsThemeProvider>,
      );
      const allPaths = getAllScatterPoints(container);
      expect(allPaths).toHaveLength(scatterData.length);
      allPaths.forEach(path => {
        expect(path.getAttribute('fill')).toBe('purple');
        expect(path.getAttribute('stroke')).toBe(null);
        expect(path.getAttribute('stroke-dasharray')).toBe('7 1');
      });
    });
  });

  describe('theme identity from the effective dataKey', () => {
    const twoColors = { graphicalItems: [{ fill: 'red' }, { fill: 'blue' }] };

    function getFills(container: Element): ReadonlyArray<string | null> {
      return getAllScatterPoints(container).map(path => path.getAttribute('fill'));
    }

    it('should select the theme entry using the dataKey of the value axis', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={twoColors}>
          <MyChart>
            <Scatter data={scatterData} isAnimationActive={false} />
          </MyChart>
        </RechartsThemeProvider>,
      );
      expect(getFills(container)).toEqual(['red', 'red', 'red']);
    });

    it('should give the same theme entry to Scatters that share the value axis', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={twoColors}>
          <MyChart>
            <Scatter data={scatterData} isAnimationActive={false} />
            <Scatter data={scatterData} isAnimationActive={false} />
          </MyChart>
        </RechartsThemeProvider>,
      );
      expect(getFills(container)).toEqual(['red', 'red', 'red', 'red', 'red', 'red']);
    });

    it('should give different theme entries to Scatters with different effective dataKeys', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={twoColors}>
          <MyChart>
            <Scatter data={scatterData} isAnimationActive={false} />
            <Scatter data={scatterData} dataKey="z" isAnimationActive={false} />
          </MyChart>
        </RechartsThemeProvider>,
      );
      // dataKeys are sorted so `y` from the YAxis is first, and `z` from the Scatter is second
      expect(getFills(container)).toEqual(['red', 'red', 'red', 'blue', 'blue', 'blue']);
    });

    it('should give different theme entries to Scatters on different value axes', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={twoColors}>
          <ScatterChart width={400} height={400}>
            <XAxis dataKey="x" type="number" />
            <YAxis dataKey="y" type="number" yAxisId="left" />
            <YAxis dataKey="z" type="number" yAxisId="right" orientation="right" />
            <Scatter data={scatterData} yAxisId="left" isAnimationActive={false} />
            <Scatter data={scatterData} yAxisId="right" isAnimationActive={false} />
          </ScatterChart>
        </RechartsThemeProvider>,
      );
      expect(getFills(container)).toEqual(['red', 'red', 'red', 'blue', 'blue', 'blue']);
    });
  });
});
