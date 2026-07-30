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
    const themeIndex = graphicalItemIdentity({ dataKey: 'profit' }, graphicalItems.length);
    expect(themeIndex).toBe(1);
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
      expect(dot).toHaveAttribute('fill', theme.fill);
      expect(dot).toHaveAttribute('fill-opacity', String(theme.fillOpacity));
      expect(dot).toHaveAttribute('stroke', theme.stroke);
      expect(dot).toHaveAttribute('stroke-width', String(theme.strokeWidth));
      expect(dot).toHaveAttribute('stroke-opacity', String(theme.strokeOpacity));
      expect(dot).toHaveAttribute('stroke-dasharray', theme.strokeDasharray);
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
      expect(dot).toHaveAttribute('fill-opacity', '0.8');
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
      expect(dot).toHaveAttribute('fill-opacity', String(theme.fillOpacity));
      expect(dot).toHaveAttribute('stroke', theme.stroke);
      expect(dot).toHaveAttribute('stroke-width', theme.strokeWidth);
      expect(dot).not.toHaveAttribute('stroke-opacity');
      expect(dot).not.toHaveAttribute('stroke-dasharray');
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

  it('lets explicit active dot fields override the active graphical-item style', () => {
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
    expect(activeDot).toHaveAttribute('stroke', 'purple');
    expect(activeDot).toHaveAttribute('stroke-dasharray', '3 2');
    expect(activeDot).toHaveAttribute('stroke-opacity', '0.6');
    expect(activeDot).toHaveAttribute('stroke-width', '3');
  });
});
