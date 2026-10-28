import React from 'react';
import { describe, expect, it } from 'vitest';
import { lightTheme, Line, LineChart, RechartsThemeProvider, Tooltip } from '../../src';
import { graphicalItemIdentity } from '../../src/theme/graphicalItemIdentity';
import { assertNotNull } from '../helper/assertNotNull';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { showTooltip } from '../component/Tooltip/tooltipTestHelpers';
import { lineChartMouseHoverTooltipSelector } from '../component/Tooltip/tooltipMouseHoverSelectors';

const data = [
  { name: 'A', profit: 100 },
  { name: 'B', profit: 200 },
  { name: 'C', profit: 150 },
];

const MyChart = ({ children }: { children: React.ReactNode }) => (
  <LineChart width={400} height={300} data={data}>
    {children}
  </LineChart>
);

function getCurve(container: HTMLElement): Element {
  const curve = container.querySelector('.recharts-line-curve');
  assertNotNull(curve);
  return curve;
}

function getDots(container: HTMLElement): NodeListOf<Element> {
  const dots = container.querySelectorAll('.recharts-line-dot');
  expect(dots).not.toHaveLength(0);
  return dots;
}

function getActiveDot(container: HTMLElement): Element {
  const activeDot = container.querySelector('.recharts-active-dot circle');
  assertNotNull(activeDot);
  return activeDot;
}

describe('Line theme', () => {
  it('preserves legacy styles without a provider', () => {
    const { container } = rechartsTestRender(
      <MyChart>
        <Line dataKey="profit" isAnimationActive={false} />
        <Tooltip />
      </MyChart>,
    );

    const curve = getCurve(container);
    expect(curve).toHaveAttribute('stroke', '#3182bd');
    expect(curve).toHaveAttribute('stroke-width', '1');
    expect(curve).not.toHaveAttribute('stroke-opacity');
    expect(curve).not.toHaveAttribute('stroke-dasharray');

    getDots(container).forEach(dot => {
      expect(dot).toHaveAttribute('fill', '#fff');
      expect(dot).toHaveAttribute('stroke', '#3182bd');
      expect(dot).toHaveAttribute('stroke-width', '1');
    });

    showTooltip(container, lineChartMouseHoverTooltipSelector);
    const activeDot = getActiveDot(container);
    expect(activeDot).toHaveAttribute('fill', '#3182bd');
    expect(activeDot).toHaveAttribute('stroke', '#fff');
    expect(activeDot).toHaveAttribute('stroke-width', '2');
  });

  it('uses the graphical-item theme selected from its data key', () => {
    const graphicalItems = [
      {
        fill: 'rgb(1, 2, 3)',
        fillOpacity: 0.2,
        stroke: 'rgb(4, 5, 6)',
        strokeDasharray: '1 2',
        strokeOpacity: 0.3,
        strokeWidth: 2,
      },
      {
        fill: 'rgb(10, 20, 30)',
        fillOpacity: 0.4,
        stroke: 'rgb(40, 50, 60)',
        strokeDasharray: '7 3',
        strokeOpacity: 0.6,
        strokeWidth: 4,
      },
    ];
    const themeIndex = graphicalItemIdentity({ dataKey: 'profit' }, ['profit'], graphicalItems.length);
    expect(themeIndex).toBe(0);
    const theme = graphicalItems[themeIndex];
    assertNotNull(theme);

    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems }}>
        <MyChart>
          <Line dataKey="profit" isAnimationActive={false} />
        </MyChart>
      </RechartsThemeProvider>,
    );

    const curve = getCurve(container);
    expect(curve).toHaveAttribute('stroke', theme.stroke);
    expect(curve).toHaveAttribute('stroke-width', String(theme.strokeWidth));
    expect(curve).toHaveAttribute('stroke-opacity', String(theme.strokeOpacity));
    expect(curve).toHaveAttribute('stroke-dasharray', theme.strokeDasharray);

    getDots(container).forEach(dot => {
      expect(dot).toHaveAttribute('fill', theme.stroke);
      expect(dot).toHaveAttribute('fill-opacity', '1');
      expect(dot).toHaveAttribute('stroke', theme.stroke);
      expect(dot).toHaveAttribute('stroke-width', String(theme.strokeWidth));
      expect(dot).toHaveAttribute('stroke-opacity', String(theme.strokeOpacity));
      expect(dot).toHaveAttribute('stroke-dasharray', theme.strokeDasharray);
    });
  });

  it('assigns graphical-item themes by sorted dataKeys instead of render order', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [{ stroke: 'red' }, { stroke: 'blue' }],
        }}
      >
        <MyChart>
          <Line dataKey="revenue" isAnimationActive={false} />
          <Line dataKey="profit" isAnimationActive={false} />
        </MyChart>
      </RechartsThemeProvider>,
    );

    const curves = container.querySelectorAll('.recharts-line-curve');
    expect(curves).toHaveLength(2);
    expect(curves[0]).toHaveAttribute('stroke', 'blue');
    expect(curves[1]).toHaveAttribute('stroke', 'red');
  });

  it('uses an explicit line stroke as the dot fill when it overrides the theme', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            {
              fill: 'purple',
              stroke: 'red',
            },
          ],
        }}
      >
        <MyChart>
          <Line dataKey="profit" isAnimationActive={false} stroke="blue" />
        </MyChart>
      </RechartsThemeProvider>,
    );

    const curve = getCurve(container);
    expect(curve).toHaveAttribute('stroke', 'blue');
    getDots(container).forEach(dot => {
      expect(dot).toHaveAttribute('fill', 'blue');
    });
  });

  it('does not use the themed fill for dots when the line stroke is none, because explicit stroke ignores the theme', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            {
              fill: 'purple',
              stroke: 'red',
            },
          ],
        }}
      >
        <MyChart>
          <Line dataKey="profit" isAnimationActive={false} stroke="none" />
        </MyChart>
      </RechartsThemeProvider>,
    );

    getDots(container).forEach(dot => {
      expect(dot).not.toHaveAttribute('fill', 'purple');
    });
  });

  it('lets explicit visual props override the selected graphical-item theme', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            {
              fill: 'purple',
              fillOpacity: 0.1,
              stroke: 'red',
              strokeDasharray: '9 9',
              strokeOpacity: 0.2,
              strokeWidth: 9,
            },
          ],
        }}
      >
        <MyChart>
          <Line
            dataKey="profit"
            fill="gold"
            fillOpacity={0.8}
            isAnimationActive={false}
            stroke="blue"
            strokeDasharray="3 1"
            strokeOpacity={0.7}
            strokeWidth={3}
          />
        </MyChart>
      </RechartsThemeProvider>,
    );

    const curve = getCurve(container);
    expect(curve).toHaveAttribute('stroke', 'blue');
    expect(curve).toHaveAttribute('stroke-width', '3');
    expect(curve).toHaveAttribute('stroke-opacity', '0.7');
    expect(curve).toHaveAttribute('stroke-dasharray', '3 1');

    getDots(container).forEach(dot => {
      expect(dot).toHaveAttribute('fill', 'gold');
      expect(dot).toHaveAttribute('fill-opacity', '1');
      expect(dot).toHaveAttribute('stroke', 'blue');
      expect(dot).toHaveAttribute('stroke-width', '3');
      expect(dot).toHaveAttribute('stroke-opacity', '0.7');
      expect(dot).toHaveAttribute('stroke-dasharray', '3 1');
    });
  });

  it('allow to spread a graphical array item directly to Line props', () => {
    const theme = lightTheme.graphicalItems[1];
    assertNotNull(theme);
    const { container } = rechartsTestRender(
      <MyChart>
        <Line dataKey="profit" isAnimationActive={false} {...theme} />
      </MyChart>,
    );

    const curve = getCurve(container);
    expect(curve).toHaveAttribute('stroke', theme.stroke);
    expect(curve).toHaveAttribute('stroke-width', theme.strokeWidth);
    expect(curve).not.toHaveAttribute('stroke-opacity');
    expect(curve).not.toHaveAttribute('stroke-dasharray');

    getDots(container).forEach(dot => {
      expect(dot).toHaveAttribute('fill', theme.fill);
      expect(dot).toHaveAttribute('fill-opacity', '1');
      expect(dot).toHaveAttribute('stroke', theme.stroke);
      expect(dot).toHaveAttribute('stroke-width', theme.strokeWidth);
      expect(dot).not.toHaveAttribute('stroke-opacity');
      expect(dot).not.toHaveAttribute('stroke-dasharray');
    });
  });

  it('keeps the active style of a graphical array item passed to activeDot of a Line with its own colors', () => {
    const { active, ...theme } = lightTheme.graphicalItems[1] ?? {};
    assertNotNull(active);
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={lightTheme}>
        <MyChart>
          <Line dataKey="profit" isAnimationActive={false} {...theme} activeDot={active} />
          <Tooltip />
        </MyChart>
      </RechartsThemeProvider>,
    );

    showTooltip(container, lineChartMouseHoverTooltipSelector);
    const activeDot = getActiveDot(container);
    expect(activeDot).toHaveAttribute('fill', active.fill);
    expect(activeDot).toHaveAttribute('stroke', active.stroke);
    expect(activeDot).toHaveAttribute('stroke-width', String(active.strokeWidth));
  });

  it('drops the theme active colors, and keeps the other theme active styles, for a Line with its own stroke', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={lightTheme}>
        <MyChart>
          <Line dataKey="profit" isAnimationActive={false} stroke="purple" />
          <Tooltip />
        </MyChart>
      </RechartsThemeProvider>,
    );

    showTooltip(container, lineChartMouseHoverTooltipSelector);
    const activeDot = getActiveDot(container);
    // the legacy active dot: series color fill with a white ring
    expect(activeDot).toHaveAttribute('fill', 'purple');
    expect(activeDot).toHaveAttribute('stroke', '#fff');
    expect(activeDot).toHaveAttribute('stroke-width', '2');
  });

  it('lets explicit dot fill opacity override the default', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            {
              fill: 'purple',
              fillOpacity: 0.1,
            },
          ],
        }}
      >
        <MyChart>
          <Line dataKey="profit" dot={{ fillOpacity: 0.4 }} isAnimationActive={false} />
        </MyChart>
      </RechartsThemeProvider>,
    );

    getDots(container).forEach(dot => {
      expect(dot).toHaveAttribute('fill', 'purple');
      expect(dot).toHaveAttribute('fill-opacity', '0.4');
    });
  });

  it('lets explicit dot fill override the line stroke', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            {
              fill: 'purple',
              stroke: 'teal',
            },
          ],
        }}
      >
        <MyChart>
          <Line dataKey="profit" dot={{ fill: 'green' }} isAnimationActive={false} />
        </MyChart>
      </RechartsThemeProvider>,
    );

    getDots(container).forEach(dot => {
      expect(dot).toHaveAttribute('fill', 'green');
    });
  });

  it('uses the selected active graphical-item style for the default active dot', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            {
              stroke: 'red',
              active: {
                fill: 'gold',
                fillOpacity: 0.7,
                stroke: 'purple',
                strokeDasharray: '3 2',
                strokeOpacity: 0.4,
                strokeWidth: 5,
              },
            },
          ],
        }}
      >
        <MyChart>
          <Line dataKey="profit" isAnimationActive={false} />
          <Tooltip />
        </MyChart>
      </RechartsThemeProvider>,
    );

    showTooltip(container, lineChartMouseHoverTooltipSelector);
    const activeDot = getActiveDot(container);
    expect(activeDot).toHaveAttribute('fill', 'gold');
    expect(activeDot).toHaveAttribute('fill-opacity', '0.7');
    expect(activeDot).toHaveAttribute('stroke', 'purple');
    expect(activeDot).toHaveAttribute('stroke-dasharray', '3 2');
    expect(activeDot).toHaveAttribute('stroke-opacity', '0.4');
    expect(activeDot).toHaveAttribute('stroke-width', '5');
  });

  it('ignores the active graphical-item colors, and keeps its other styles, when the active dot has its own color', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            {
              active: {
                fill: 'red',
                fillOpacity: 0.4,
                stroke: 'purple',
                strokeDasharray: '3 2',
                strokeOpacity: 0.6,
                strokeWidth: 5,
              },
            },
          ],
        }}
      >
        <MyChart>
          <Line dataKey="profit" activeDot={{ fill: 'blue', strokeWidth: 3 }} isAnimationActive={false} />
          <Tooltip />
        </MyChart>
      </RechartsThemeProvider>,
    );

    showTooltip(container, lineChartMouseHoverTooltipSelector);
    const activeDot = getActiveDot(container);
    expect(activeDot).toHaveAttribute('fill', 'blue');
    expect(activeDot).toHaveAttribute('fill-opacity', '0.4');
    expect(activeDot).not.toHaveAttribute('stroke', 'purple');
    expect(activeDot).toHaveAttribute('stroke-dasharray', '3 2');
    expect(activeDot).toHaveAttribute('stroke-opacity', '0.6');
    expect(activeDot).toHaveAttribute('stroke-width', '3');
  });

  describe('data entry styles', () => {
    const styledData = [
      { name: 'A', profit: 100, fill: 'red', stroke: 'lime' },
      { name: 'B', profit: 200 },
      { name: 'C', profit: 150 },
    ];

    const theme = {
      graphicalItems: [
        { fill: 'purple', stroke: 'indigo', strokeWidth: 3, active: { fill: 'white', stroke: 'black' } },
      ],
    };

    it('paints a dot with the colors of its data entry without a theme', () => {
      const { container } = rechartsTestRender(
        <LineChart width={400} height={300} data={styledData}>
          <Line dataKey="profit" stroke="#8884d8" isAnimationActive={false} />
        </LineChart>,
      );

      const [styled, plain] = getDots(container);
      expect(styled).toHaveAttribute('fill', 'red');
      expect(styled).toHaveAttribute('stroke', 'lime');
      expect(plain).toHaveAttribute('stroke', '#8884d8');
    });

    it('ignores the theme colors on a dot whose data entry has its own colors', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <LineChart width={400} height={300} data={styledData}>
            <Line dataKey="profit" isAnimationActive={false} />
            <Tooltip defaultIndex={0} />
          </LineChart>
        </RechartsThemeProvider>,
      );

      const [styled, plain] = getDots(container);
      expect(styled).toHaveAttribute('fill', 'red');
      expect(styled).toHaveAttribute('stroke', 'lime');
      expect(styled).toHaveAttribute('stroke-width', '3');
      expect(plain).toHaveAttribute('stroke', 'indigo');
      expect(plain).toHaveAttribute('stroke-width', '3');

      // the active dot keeps the entry fill, because the theme active colors go with the theme colors
      const activeDot = getActiveDot(container);
      expect(activeDot).toHaveAttribute('fill', 'red');
      expect(activeDot).not.toHaveAttribute('stroke', 'black');
    });

    it('shows the series color in the tooltip for a data entry with its own colors', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider value={theme}>
          <LineChart width={400} height={300} data={styledData}>
            <Line dataKey="profit" isAnimationActive={false} />
            <Tooltip defaultIndex={0} />
          </LineChart>
        </RechartsThemeProvider>,
      );

      const item = container.querySelector('.recharts-tooltip-item');
      assertNotNull(item);
      expect(item).toHaveStyle({ color: 'rgb(75, 0, 130)' });
    });
  });
});
