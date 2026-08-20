import React from 'react';
import { describe, expect, it } from 'vitest';
import {
  Line,
  LineChart,
  ReferenceArea,
  ReferenceDot,
  ReferenceLine,
  RechartsThemeProvider,
  XAxis,
  YAxis,
} from '../../src';
import { Styles2D } from '../../src/theme/RechartsTheme';
import { assertNotNull } from '../helper/assertNotNull';
import { rechartsTestRender } from '../helper/createSelectorTestCase';

const data = [
  { name: 'A', value: 1 },
  { name: 'B', value: 3 },
  { name: 'C', value: 2 },
  { name: 'D', value: 4 },
];

const MyChart = ({ children }: { children: React.ReactNode }) => (
  <LineChart width={400} height={300} data={data}>
    <XAxis dataKey="name" />
    <YAxis domain={[0, 5]} />
    <Line dataKey="value" isAnimationActive={false} />
    {children}
  </LineChart>
);

function getReferenceElements(container: HTMLElement) {
  const line = container.querySelector('.recharts-reference-line-line');
  const area = container.querySelector('.recharts-reference-area-rect');
  const dot = container.querySelector('.recharts-reference-dot-dot');
  assertNotNull(line);
  assertNotNull(area);
  assertNotNull(dot);
  return { line, area, dot };
}

function expectStyles(element: Element, styles: Styles2D) {
  expect(element).toHaveAttribute('fill', styles.fill);
  expect(element).toHaveAttribute('fill-opacity', String(styles.fillOpacity));
  expect(element).toHaveAttribute('stroke', styles.stroke);
  expect(element).toHaveAttribute('stroke-width', String(styles.strokeWidth));
  if (styles.strokeDasharray !== undefined) {
    expect(element).toHaveAttribute('stroke-dasharray', styles.strokeDasharray);
  }
  if (styles.strokeOpacity !== undefined) {
    expect(element).toHaveAttribute('stroke-opacity', String(styles.strokeOpacity));
  }
}

function expectNoStyles(element: Element) {
  ['fill', 'fill-opacity', 'stroke', 'stroke-width', 'stroke-dasharray', 'stroke-opacity'].forEach(attribute => {
    expect(element).not.toHaveAttribute(attribute);
  });
}

const customReferenceTheme: Styles2D = {
  fill: 'rgb(4, 5, 6)',
  fillOpacity: 0.6,
  stroke: 'rgb(1, 2, 3)',
  strokeDasharray: '7 3',
  strokeOpacity: 0.4,
  strokeWidth: 4,
};

describe('Reference elements theme', () => {
  it('preserves the legacy styles without a provider', () => {
    const { container } = rechartsTestRender(
      <MyChart>
        <ReferenceLine y={2} />
        <ReferenceArea x1="B" x2="C" y1={1} y2={3} />
        <ReferenceDot x="B" y={2} />
      </MyChart>,
    );
    const { line, area, dot } = getReferenceElements(container);

    expectStyles(line, {
      fill: 'none',
      fillOpacity: 1,
      stroke: '#ccc',
      strokeWidth: 1,
    });
    expectStyles(area, {
      fill: '#ccc',
      fillOpacity: 0.5,
      stroke: 'none',
      strokeWidth: 1,
    });
    expectStyles(dot, {
      fill: '#fff',
      fillOpacity: 1,
      stroke: '#ccc',
      strokeWidth: 1,
    });
    expect(line).not.toHaveAttribute('stroke-opacity');
    expect(line).not.toHaveAttribute('stroke-dasharray');
  });

  it('does not reintroduce legacy styles when a provider omits reference styles', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [] }}>
        <MyChart>
          <ReferenceLine y={2} />
          <ReferenceArea x1="B" x2="C" y1={1} y2={3} />
          <ReferenceDot x="B" y={2} />
        </MyChart>
      </RechartsThemeProvider>,
    );
    const { line, area, dot } = getReferenceElements(container);

    expectNoStyles(line);
    expectNoStyles(area);
    expectNoStyles(dot);
  });

  it('applies every supported style from the reference theme', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [], reference: customReferenceTheme }}>
        <MyChart>
          <ReferenceLine y={2} />
          <ReferenceArea x1="B" x2="C" y1={1} y2={3} />
          <ReferenceDot x="B" y={2} />
        </MyChart>
      </RechartsThemeProvider>,
    );
    const { line, area, dot } = getReferenceElements(container);

    expectStyles(line, customReferenceTheme);
    expectStyles(area, customReferenceTheme);
    expectStyles(dot, customReferenceTheme);
    expect(line).toHaveAttribute('stroke-opacity', '0.4');
  });

  it('lets explicit visual props override reference theme styles while merging omitted fields', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider value={{ graphicalItems: [], reference: customReferenceTheme }}>
        <MyChart>
          <ReferenceLine y={2} stroke="gold" />
          <ReferenceArea x1="B" x2="C" y1={1} y2={3} fill="gold" />
          <ReferenceDot x="B" y={2} stroke="gold" />
        </MyChart>
      </RechartsThemeProvider>,
    );
    const { line, area, dot } = getReferenceElements(container);

    expectStyles(line, { ...customReferenceTheme, stroke: 'gold' });
    expectStyles(area, { ...customReferenceTheme, fill: 'gold' });
    expectStyles(dot, { ...customReferenceTheme, stroke: 'gold' });
  });
});
