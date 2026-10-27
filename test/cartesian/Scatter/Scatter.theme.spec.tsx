import { describe, expect, it } from 'vitest';
import React from 'react';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { RechartsTheme, Scatter, ScatterChart, RechartsThemeProvider, Tooltip, XAxis, YAxis } from '../../../src';
import { getAllScatterPoints } from '../../helper/expectScatterPoints';
import { showTooltip } from '../../component/Tooltip/tooltipTestHelpers';
import { scatterChartMouseHoverTooltipSelector } from '../../component/Tooltip/tooltipMouseHoverSelectors';

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

    it('should ignore the theme colors, and keep the other theme styles, when only some props are provided', () => {
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
        expect(path.getAttribute('stroke-dasharray')).toBe('4 4');
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

describe('Tooltip colors and symbol id (#7976)', () => {
  const fillStrokeTheme = { graphicalItems: [{ fill: 'purple', stroke: 'indigo' }] };
  const strokeOnlyTheme = { graphicalItems: [{ stroke: 'purple' }] };

  function getTooltipItemColors(container: HTMLElement): Array<string> {
    showTooltip(container, scatterChartMouseHoverTooltipSelector);
    return Array.from(container.querySelectorAll<HTMLElement>('.recharts-tooltip-item')).map(item => item.style.color);
  }

  function renderWithTheme(theme: RechartsTheme, scatter: React.ReactNode) {
    return rechartsTestRender(
      <RechartsThemeProvider value={theme}>
        <MyChart>
          {scatter}
          <Tooltip />
        </MyChart>
      </RechartsThemeProvider>,
    );
  }

  it('uses the data entry fill for the tooltip item color instead of the theme color', () => {
    const dataWithFill = [
      { x: 10, y: 20, fill: 'red' },
      { x: 20, y: 30 },
      { x: 30, y: 40 },
    ];
    const { container } = renderWithTheme(fillStrokeTheme, <Scatter data={dataWithFill} isAnimationActive={false} />);
    const colors = getTooltipItemColors(container);
    expect(colors.length).toBeGreaterThan(0);
    colors.forEach(color => expect(color).toBe('red'));
  });

  it('uses the Scatter fill for the tooltip item color when entries have no colors', () => {
    const { container } = renderWithTheme(
      fillStrokeTheme,
      <Scatter data={scatterData} fill="#123456" isAnimationActive={false} />,
    );
    const colors = getTooltipItemColors(container);
    expect(colors.length).toBeGreaterThan(0);
    colors.forEach(color => expect(color).toBe('rgb(18, 52, 86)'));
  });

  it('falls back to the stroke for the tooltip item color when nothing has a fill', () => {
    const { container } = renderWithTheme(
      strokeOnlyTheme,
      <Scatter data={scatterData} stroke="#654321" isAnimationActive={false} />,
    );
    const colors = getTooltipItemColors(container);
    expect(colors.length).toBeGreaterThan(0);
    colors.forEach(color => expect(color).toBe('rgb(101, 67, 33)'));
  });

  it('uses the entry stroke, not the themed series fill, when the entry sets only stroke', () => {
    const dataWithStrokeOnly = [
      { x: 10, y: 20, stroke: 'blue' },
      { x: 20, y: 30 },
      { x: 30, y: 40 },
    ];
    const { container } = renderWithTheme(
      fillStrokeTheme,
      <Scatter data={dataWithStrokeOnly} isAnimationActive={false} />,
    );
    const colors = getTooltipItemColors(container);
    expect(colors.length).toBeGreaterThan(0);
    colors.forEach(color => expect(color).toBe('blue'));
  });

  it('does not render the data entry id on the symbol', () => {
    const dataWithId = [
      { x: 10, y: 20, id: 'my-point' },
      { x: 20, y: 30 },
    ];
    const { container } = rechartsTestRender(
      <MyChart>
        <Scatter data={dataWithId} isAnimationActive={false} />
      </MyChart>,
    );
    const allPaths = getAllScatterPoints(container);
    expect(allPaths).toHaveLength(dataWithId.length);
    allPaths.forEach(path => {
      expect(path.getAttribute('id')).toBe(null);
    });
    expect(container.querySelector('#my-point')).toBe(null);
  });
});

describe('theme active styles with a symbol activeShape', () => {
  it('applies the theme active fill when activeShape is a symbol name', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [{ fill: 'red', active: { fill: 'blue' } }] }}>
        <MyChart>
          <Scatter data={scatterData} activeShape="diamond" isAnimationActive={false} />
          <Tooltip />
        </MyChart>
      </RechartsThemeProvider>,
    );
    showTooltip(container, scatterChartMouseHoverTooltipSelector);
    const fills = getAllScatterPoints(container).map(path => path.getAttribute('fill'));
    expect(fills.filter(fill => fill === 'blue')).toHaveLength(1);
  });
});
