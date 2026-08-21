import { describe, expect, it } from 'vitest';
import React from 'react';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { Area, AreaChart, RechartsThemeProvider, Tooltip } from '../../../src';
import { assertNotNull } from '../../helper/assertNotNull';

const mockData = [
  { name: 'Page A', uv: 400, pv: 2400 },
  { name: 'Page B', uv: 300, pv: 4567 },
  { name: 'Page C', uv: 300, pv: 1398 },
];

const MyChart = ({ children }: { children: React.ReactNode }) => (
  <AreaChart width={400} height={400} data={mockData}>
    <Area dataKey="uv" id="uv" />
    {children}
  </AreaChart>
);

describe('Tooltip theme', () => {
  it('preserves legacy styles without a provider', () => {
    const { container } = rechartsTestRender(
      <MyChart>
        <Tooltip defaultIndex={0} />
      </MyChart>,
    );

    const content = container.querySelector<HTMLElement>('.recharts-default-tooltip');
    assertNotNull(content);
    expect(content).toHaveStyle({
      margin: '0px',
      padding: '10px',
      backgroundColor: 'rgb(255, 255, 255)',
      border: '1px solid rgb(204, 204, 204)',
      whiteSpace: 'nowrap',
    });

    const item = container.querySelector<HTMLElement>('.recharts-tooltip-item');
    assertNotNull(item);
    expect(item).toHaveStyle({
      display: 'block',
      paddingTop: '4px',
      paddingBottom: '4px',
      color: 'rgb(49, 130, 189)',
    });

    const label = container.querySelector<HTMLElement>('.recharts-tooltip-label');
    assertNotNull(label);
    expect(label).toHaveStyle({ margin: '0px' });
  });

  it('does not reintroduce legacy styles when a provider omits the tooltip slice', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [] }}>
        <MyChart>
          <Tooltip defaultIndex={0} />
        </MyChart>
      </RechartsThemeProvider>,
    );

    const content = container.querySelector<HTMLElement>('.recharts-default-tooltip');
    assertNotNull(content);
    expect(content).not.toHaveStyle({
      margin: '0px',
      padding: '10px',
      backgroundColor: 'rgb(255, 255, 255)',
      border: '1px solid rgb(204, 204, 204)',
      whiteSpace: 'nowrap',
    });

    const item = container.querySelector<HTMLElement>('.recharts-tooltip-item');
    assertNotNull(item);
    expect(item).not.toHaveStyle({ display: 'block', paddingTop: '4px', paddingBottom: '4px' });
  });

  it('applies tooltip and typography theme styles to every rendered surface', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          typography: { fontFamily: 'monospace', color: 'purple' },
          tooltip: {
            contentStyle: { backgroundColor: 'gold', borderColor: 'green', padding: 25 },
            itemStyle: { fontSize: 18, fontWeight: 'bold' },
            labelStyle: { fontStyle: 'italic' },
          },
        }}
      >
        <MyChart>
          <Tooltip defaultIndex={0} />
        </MyChart>
      </RechartsThemeProvider>,
    );

    const content = container.querySelector<HTMLElement>('.recharts-default-tooltip');
    assertNotNull(content);
    expect(content.style.backgroundColor).toBe('gold');
    expect(content.style.borderColor).toBe('green');
    expect(content.style.padding).toBe('25px');
    expect(content.style.fontFamily).toBe('monospace');
    expect(content.style.color).toBe('purple');

    const item = container.querySelector<HTMLElement>('.recharts-tooltip-item');
    assertNotNull(item);
    expect(item).toHaveStyle({
      fontFamily: 'monospace',
      color: 'rgb(128, 0, 128)',
      fontSize: '18px',
      fontWeight: 'bold',
    });

    const label = container.querySelector<HTMLElement>('.recharts-tooltip-label');
    assertNotNull(label);
    expect(label).toHaveStyle({
      fontFamily: 'monospace',
      color: 'rgb(128, 0, 128)',
      fontStyle: 'italic',
    });
  });

  it('prefers explicit styles while retaining non-conflicting themed fields', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          tooltip: {
            contentStyle: { backgroundColor: 'red', borderColor: 'blue', padding: 10 },
            itemStyle: { fontSize: 18, fontWeight: 'bold' },
            labelStyle: { color: 'red', fontStyle: 'italic', fontSize: 16 },
          },
        }}
      >
        <MyChart>
          <Tooltip
            contentStyle={{ backgroundColor: 'orange', borderColor: 'brown', borderRadius: 12 }}
            itemStyle={{ fontSize: 12, fontStyle: 'italic' }}
            labelStyle={{ color: 'green', fontWeight: 'bold' }}
            defaultIndex={0}
          />
        </MyChart>
      </RechartsThemeProvider>,
    );

    const content = container.querySelector<HTMLElement>('.recharts-default-tooltip');
    assertNotNull(content);
    expect(content).toHaveStyle({
      backgroundColor: 'rgb(255, 165, 0)',
      borderColor: 'rgb(165, 42, 42)',
      padding: '10px',
      borderRadius: '12px',
    });

    const item = container.querySelector<HTMLElement>('.recharts-tooltip-item');
    assertNotNull(item);
    expect(item).toHaveStyle({
      fontSize: '12px',
      fontWeight: 'bold',
      fontStyle: 'italic',
    });

    const label = container.querySelector<HTMLElement>('.recharts-tooltip-label');
    assertNotNull(label);
    expect(label).toHaveStyle({
      color: 'rgb(0, 128, 0)',
      fontSize: '16px',
      fontWeight: 'bold',
      fontStyle: 'italic',
    });
  });
});
