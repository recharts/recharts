import { beforeEach, describe, expect, it } from 'vitest';
import React from 'react';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { Radar, RadarChart, RechartsThemeProvider, Tooltip } from '../../../src';
import { assertNotNull } from '../../helper/assertNotNull';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { showTooltip } from '../../component/Tooltip/tooltipTestHelpers';
import { radarChartMouseHoverTooltipSelector } from '../../component/Tooltip/tooltipMouseHoverSelectors';

const data = [
  { name: 'A', profit: 100 },
  { name: 'B', profit: 200 },
  { name: 'C', profit: 150 },
];

const MyChart = ({ children }: { children: React.ReactNode }) => (
  <RadarChart width={600} height={600} data={data}>
    {children}
  </RadarChart>
);

function getPolygon(container: HTMLElement): Element {
  const polygon = container.querySelector('.recharts-radar-polygon .recharts-polygon');
  assertNotNull(polygon);
  return polygon;
}

function getActiveDot(container: HTMLElement): Element {
  const activeDot = container.querySelector('.recharts-active-dot circle');
  assertNotNull(activeDot);
  return activeDot;
}

describe('Radar theme', () => {
  it('preserves the legacy appearance without a provider', () => {
    const { container } = rechartsTestRender(
      <MyChart>
        <Radar dataKey="profit" isAnimationActive={false} />
      </MyChart>,
    );

    const polygon = getPolygon(container);
    expect(polygon.getAttribute('fill')).toBe(null);
    expect(polygon.getAttribute('fill-opacity')).toBe(null);
    expect(polygon.getAttribute('stroke')).toBe(null);
    expect(polygon.getAttribute('stroke-opacity')).toBe(null);
    expect(polygon.getAttribute('stroke-width')).toBe(null);
    expect(polygon.getAttribute('stroke-dasharray')).toBe(null);
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
    ];
    const theme = graphicalItems[0];
    assertNotNull(theme);

    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems }}>
        <MyChart>
          <Radar dataKey="profit" isAnimationActive={false} />
        </MyChart>
      </RechartsThemeProvider>,
    );

    const polygon = getPolygon(container);
    expect(polygon.getAttribute('fill')).toBe(theme.fill);
    expect(polygon.getAttribute('fill-opacity')).toBe(String(theme.fillOpacity));
    expect(polygon.getAttribute('stroke')).toBe(theme.stroke);
    expect(polygon.getAttribute('stroke-dasharray')).toBe(theme.strokeDasharray);
    expect(polygon.getAttribute('stroke-opacity')).toBe(String(theme.strokeOpacity));
    expect(polygon.getAttribute('stroke-width')).toBe(String(theme.strokeWidth));
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
          <Radar
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

    const polygon = getPolygon(container);
    expect(polygon.getAttribute('fill')).toBe('gold');
    expect(polygon.getAttribute('fill-opacity')).toBe('0.8');
    expect(polygon.getAttribute('stroke')).toBe('blue');
    expect(polygon.getAttribute('stroke-dasharray')).toBe('3 1');
    expect(polygon.getAttribute('stroke-opacity')).toBe('0.7');
    expect(polygon.getAttribute('stroke-width')).toBe('3');
  });

  it('fills the gap with the theme when only some props are provided', () => {
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
          <Radar dataKey="profit" isAnimationActive={false} stroke="blue" />
        </MyChart>
      </RechartsThemeProvider>,
    );

    const polygon = getPolygon(container);
    expect(polygon.getAttribute('stroke')).toBe('blue');
    expect(polygon.getAttribute('fill')).toBe('purple');
    expect(polygon.getAttribute('fill-opacity')).toBe('0.1');
    expect(polygon.getAttribute('stroke-dasharray')).toBe('9 9');
    expect(polygon.getAttribute('stroke-opacity')).toBe('0.2');
    expect(polygon.getAttribute('stroke-width')).toBe('9');
  });

  describe('activeDot', () => {
    beforeEach(() => {
      mockGetBoundingClientRect({ width: 100, height: 100 });
    });

    it('uses the selected active graphical-item style for the default active dot', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider
          value={{
            graphicalItems: [
              {
                fill: 'purple',
                stroke: 'red',
                active: { fill: 'gold', stroke: 'purple', strokeWidth: 5 },
              },
            ],
          }}
        >
          <MyChart>
            <Radar dataKey="profit" isAnimationActive={false} />
            <Tooltip />
          </MyChart>
        </RechartsThemeProvider>,
      );

      showTooltip(container, radarChartMouseHoverTooltipSelector);
      const activeDot = getActiveDot(container);
      expect(activeDot).toHaveAttribute('fill', 'gold');
      expect(activeDot).toHaveAttribute('stroke', 'purple');
      expect(activeDot).toHaveAttribute('stroke-width', '5');
    });

    it('lets explicit active dot fields override the active graphical-item style', () => {
      const { container } = rechartsTestRender(
        <RechartsThemeProvider
          value={{
            graphicalItems: [
              {
                active: { fill: 'red', stroke: 'purple', strokeWidth: 5 },
              },
            ],
          }}
        >
          <MyChart>
            <Radar dataKey="profit" activeDot={{ fill: 'blue' }} isAnimationActive={false} />
            <Tooltip />
          </MyChart>
        </RechartsThemeProvider>,
      );

      showTooltip(container, radarChartMouseHoverTooltipSelector);
      const activeDot = getActiveDot(container);
      expect(activeDot).toHaveAttribute('fill', 'blue');
      expect(activeDot).toHaveAttribute('stroke', 'purple');
      expect(activeDot).toHaveAttribute('stroke-width', '5');
    });
  });
});
