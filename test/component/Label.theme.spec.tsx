import React from 'react';
import { describe, expect, it } from 'vitest';
import { Bar, BarChart, Label, LabelList, RechartsThemeProvider, Surface, XAxis, YAxis } from '../../src';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { assertNotNull } from '../helper/assertNotNull';

const cartesianViewBox = {
  x: 0,
  y: 0,
  width: 200,
  height: 100,
};

const polarViewBox = {
  cx: 100,
  cy: 50,
  innerRadius: 20,
  outerRadius: 40,
  startAngle: 0,
  endAngle: 90,
  clockWise: false,
};

const data = [
  { name: 'A', value: 10 },
  { name: 'B', value: 20 },
];

function renderLabel(props: React.ComponentProps<typeof Label> = {}) {
  return rechartsTestRender(
    <Surface width={200} height={100}>
      <Label viewBox={cartesianViewBox} value="label" position="center" {...props} />
    </Surface>,
  );
}

function getLabel(container: HTMLElement): Element {
  const label = container.querySelector('.recharts-label');
  assertNotNull(label);
  return label;
}

describe('Label theme', () => {
  it('preserves the legacy text appearance without a provider', () => {
    const { container } = renderLabel();
    const label = getLabel(container);

    expect(label).toHaveStyle({ fill: '#808080' });
    expect(label).not.toHaveAttribute('fill');
  });

  it('applies typography to labels and label lists', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          typography: {
            color: 'rgb(128, 0, 128)',
            fontFamily: 'cursive',
            fontSize: 24,
            fontWeight: 'bold',
            letterSpacing: '3px',
          },
        }}
      >
        <Surface width={200} height={100}>
          <Label viewBox={cartesianViewBox} value="label" position="center" />
        </Surface>
      </RechartsThemeProvider>,
    );
    const label = getLabel(container);

    expect(label).toHaveStyle({
      color: 'rgb(128, 0, 128)',
      fontFamily: 'cursive',
      fontSize: '24px',
      fontWeight: 'bold',
      letterSpacing: '3px',
    });

    const { container: labelListContainer } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          typography: { fontFamily: 'monospace', fontSize: 18, fontWeight: 'bold' },
        }}
      >
        <BarChart width={200} height={100} data={data}>
          <Bar dataKey="value" isAnimationActive={false}>
            <LabelList dataKey="value" />
          </Bar>
        </BarChart>
      </RechartsThemeProvider>,
    );
    const labelListLabel = getLabel(labelListContainer);

    expect(labelListLabel).toHaveStyle({
      fontFamily: 'monospace',
      fontSize: '18px',
      fontWeight: 'bold',
    });
  });

  it('applies typography to Cartesian axis labels', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          typography: { color: 'rgb(128, 0, 128)', fontFamily: 'cursive', fontSize: 20 },
        }}
      >
        <BarChart width={200} height={100} data={data}>
          <XAxis dataKey="name" label="axis label" />
        </BarChart>
      </RechartsThemeProvider>,
    );
    const label = getLabel(container);

    expect(label).toHaveStyle({ fontFamily: 'cursive', fontSize: '20px', color: 'rgb(128, 0, 128)' });
  });

  it('prefers explicit label props while retaining non-conflicting themed styles', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          typography: {
            color: 'purple',
            fontFamily: 'cursive',
            fontSize: 24,
            fontWeight: 'bold',
            letterSpacing: '3px',
          },
        }}
      >
        <Surface width={200} height={100}>
          <Label
            viewBox={cartesianViewBox}
            value="label"
            position="center"
            fill="gold"
            style={{ fontSize: 12, letterSpacing: '1px' }}
          />
        </Surface>
      </RechartsThemeProvider>,
    );
    const label = getLabel(container);

    expect(label).toHaveAttribute('fill', 'gold');
    expect(label).toHaveStyle({
      fontFamily: 'cursive',
      fontSize: '12px',
      fontWeight: 'bold',
      letterSpacing: '1px',
    });
  });

  it('applies typography to built-in radial labels', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          typography: { color: 'rgb(128, 0, 128)', fontFamily: 'cursive', fontSize: 20 },
        }}
      >
        <Surface width={200} height={100}>
          <Label viewBox={polarViewBox} value="radial label" position="insideStart" />
        </Surface>
      </RechartsThemeProvider>,
    );
    const label = container.querySelector('.recharts-radial-bar-label');
    assertNotNull(label);

    expect(label).not.toHaveAttribute('fill');
    expect(label).toHaveStyle({ fontFamily: 'cursive', fontSize: '20px', color: 'rgb(128, 0, 128)' });
  });

  it('applies color via LabelList', () => {
    const { container } = rechartsTestRender(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          typography: {
            fill: 'rgb(128, 0, 128)',
            fontFamily: 'cursive',
            fontSize: 18,
            fontWeight: 'bold',
          },
        }}
      >
        <BarChart width={360} height={240} data={data}>
          <XAxis dataKey="name" label="Category" />
          <YAxis />
          <Bar dataKey="value" fill="#60a5fa" isAnimationActive={false}>
            <LabelList dataKey="value" position="top" />
          </Bar>
        </BarChart>
      </RechartsThemeProvider>,
    );
    const allTexts = container.querySelectorAll('text');
    expect(allTexts).toHaveLength(10);
    allTexts.forEach(text => {
      expect(text).toHaveStyle({ fill: 'rgb(128, 0, 128)', fontFamily: 'cursive', fontSize: 18, fontWeight: 'bold' });
      expect(text).not.toHaveAttribute('fill');
    });
  });
});
