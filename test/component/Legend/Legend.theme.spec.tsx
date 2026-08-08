import * as React from 'react';
import { describe, expect, it } from 'vitest';
import { Legend, Line, LineChart, RechartsThemeProvider } from '../../../src';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { assertNotNull } from '../../helper/assertNotNull';

const data = [
  { name: 'January', desktop: 400, mobile: 240 },
  { name: 'February', desktop: 300, mobile: 139 },
];

const MyChart = ({ children }: { children: React.ReactNode }) => (
  <LineChart width={300} height={200} data={data}>
    {children}
    <Line dataKey="desktop" isAnimationActive={false} />
    <Line dataKey="mobile" isAnimationActive={false} />
  </LineChart>
);

function getLegendWrapper(container: HTMLElement): Element {
  const legendWrapper = container.querySelector('.recharts-legend-wrapper');
  assertNotNull(legendWrapper);
  return legendWrapper;
}

function getLegendLabel(container: HTMLElement): Element {
  const legendLabel = container.querySelector('.recharts-legend-item-text');
  assertNotNull(legendLabel);
  return legendLabel;
}

function getLegendLabels(container: HTMLElement): NodeListOf<Element> {
  const legendLabels = container.querySelectorAll('.recharts-legend-item-text');
  expect(legendLabels).toHaveLength(2);
  return legendLabels;
}

describe('Legend theme', () => {
  it('preserves the legacy label styles without a provider', () => {
    const { container } = rechartsTestRender(
      <MyChart>
        <Legend />
      </MyChart>,
    );

    expect(getLegendLabel(container)).toHaveStyle({
      whiteSpace: 'normal',
      overflowWrap: 'break-word',
    });
  });

  it('applies themed wrapper, label, position, and offset styles', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          typography: { color: 'purple', fontFamily: 'cursive' },
          legend: {
            wrapperStyle: { backgroundColor: 'gold', padding: 12 },
            labelStyle: { color: 'green', fontSize: 24, fontWeight: 'bold' },
            position: 'insideBottomRight',
            offset: 13,
          },
        }}
      >
        <MyChart>
          <Legend />
        </MyChart>
      </RechartsThemeProvider>,
    );

    const wrapperStyle = getLegendWrapper(container).getAttribute('style');
    assertNotNull(wrapperStyle);
    expect(wrapperStyle).toContain('background-color: gold;');
    expect(wrapperStyle).toContain('padding: 12px;');
    expect(wrapperStyle).toContain('top: 182px;');
    expect(wrapperStyle).toContain('left: 282px;');
    expect(wrapperStyle).toContain('transform: translate(-100%, -100%);');
    const labelStyle = getLegendLabel(container).getAttribute('style');
    assertNotNull(labelStyle);
    expect(labelStyle).toContain('color: green;');
    expect(labelStyle).toContain('font-family: cursive;');
    expect(labelStyle).toContain('font-size: 24px;');
    expect(labelStyle).toContain('font-weight: bold;');
  });

  it('uses each graphical item color before the typography color', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [], typography: { color: 'purple', fontFamily: 'cursive' } }}>
        <LineChart width={300} height={200} data={data}>
          <Legend />
          <Line dataKey="desktop" isAnimationActive={false} stroke="red" />
          <Line dataKey="mobile" isAnimationActive={false} stroke="blue" />
        </LineChart>
      </RechartsThemeProvider>,
    );

    const legendLabels = getLegendLabels(container);
    const firstLabelStyle = legendLabels[0].getAttribute('style');
    assertNotNull(firstLabelStyle);
    expect(firstLabelStyle).toContain('color: red;');
    expect(firstLabelStyle).toContain('font-family: cursive;');
    const secondLabelStyle = legendLabels[1].getAttribute('style');
    assertNotNull(secondLabelStyle);
    expect(secondLabelStyle).toContain('color: blue;');
    expect(secondLabelStyle).toContain('font-family: cursive;');
  });

  it('prefers explicit props while retaining non-conflicting themed style fields', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          typography: { color: 'purple', fontFamily: 'cursive', fontWeight: 'bold' },
          legend: {
            wrapperStyle: { backgroundColor: 'gold', padding: 12 },
            labelStyle: { color: 'green', fontSize: 24 },
            position: 'insideBottomRight',
            offset: 13,
          },
        }}
      >
        <MyChart>
          <Legend
            position="insideTopLeft"
            offset={3}
            wrapperStyle={{ backgroundColor: 'red' }}
            labelStyle={{ color: 'blue', fontSize: 12 }}
          />
        </MyChart>
      </RechartsThemeProvider>,
    );

    const wrapperStyle = getLegendWrapper(container).getAttribute('style');
    assertNotNull(wrapperStyle);
    expect(wrapperStyle).toContain('background-color: red;');
    expect(wrapperStyle).toContain('padding: 12px;');
    expect(wrapperStyle).toContain('top: 8px;');
    expect(wrapperStyle).toContain('left: 8px;');
    const labelStyle = getLegendLabel(container).getAttribute('style');
    assertNotNull(labelStyle);
    expect(labelStyle).toContain('color: blue;');
    expect(labelStyle).toContain('font-family: cursive;');
    expect(labelStyle).toContain('font-size: 12px;');
    expect(labelStyle).toContain('font-weight: bold;');
  });
});
