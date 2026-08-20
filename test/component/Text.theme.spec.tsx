import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { Bar, BarChart, XAxis, emptyTheme, RechartsThemeProvider, Surface, Text } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';

describe('<Text /> theme', () => {
  it('does not apply the legacy fill when an empty theme is provided', () => {
    const { container } = render(
      <RechartsThemeProvider value={emptyTheme}>
        <Surface width={300} height={300}>
          <Text x={10} y={20}>
            text
          </Text>
        </Surface>
      </RechartsThemeProvider>,
    );

    const text = container.querySelector('text');
    assertNotNull(text);
    expect(text).not.toHaveAttribute('fill');
  });

  it('keeps the legacy fill when no theme is provided', () => {
    const { container } = render(
      <Surface width={300} height={300}>
        <Text x={10} y={20}>
          text
        </Text>
      </Surface>,
    );

    const text = container.querySelector('text');
    assertNotNull(text);
    expect(text).toHaveStyle({ fill: '#808080' });
  });

  it('applies typography styles from the theme', () => {
    const { container } = render(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          typography: {
            fill: 'purple',
            fontFamily: 'monospace',
            fontSize: 22,
            fontWeight: 700,
          },
        }}
      >
        <Surface width={300} height={300}>
          <Text x={10} y={20}>
            text
          </Text>
        </Surface>
      </RechartsThemeProvider>,
    );

    const text = container.querySelector('text');
    assertNotNull(text);
    expect(text).toHaveStyle({
      fill: 'rgb(128, 0, 128)',
      fontFamily: 'monospace',
      fontSize: 22,
      fontWeight: 700,
    });
  });

  it('prefers explicit props and merges omitted style fields with the theme', () => {
    const { container } = render(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          typography: {
            color: 'rgb(200, 0, 0)',
            fill: 'rgb(0, 200, 0)',
            fontFamily: 'monospace',
            fontSize: 22,
            fontWeight: 400,
          },
        }}
      >
        <Surface width={300} height={300}>
          <Text x={10} y={20} fill="rgb(0, 0, 200)" style={{ fontSize: 30 }}>
            text
          </Text>
        </Surface>
      </RechartsThemeProvider>,
    );

    const text = container.querySelector('text');
    assertNotNull(text);
    expect(text).toHaveStyle({
      fill: 'rgb(0, 0, 200)',
      color: 'rgb(200, 0, 0)',
      fontFamily: 'monospace',
      fontSize: 30,
      fontWeight: 400,
    });
  });

  it('prefers explicit props passed through the label prop', () => {
    const { container } = render(
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          typography: {
            color: 'rgb(200, 0, 0)',
            fill: 'rgb(0, 200, 0)',
            fontFamily: 'monospace',
            fontSize: 22,
            fontWeight: 400,
          },
        }}
      >
        <BarChart width={300} height={300} data={[{ x: 1, y: 2, z: 3, label: 'foo' }]}>
          <XAxis dataKey="label" mirror padding={{ right: 30 }} interval={1} />
          <Bar
            dataKey="y"
            isAnimationActive={false}
            label={{
              className: 'bar-label',
              fill: 'white',
              position: 'insideTopRight',
              angle: 90,
              textAnchor: 'start',
            }}
          />
        </BarChart>
      </RechartsThemeProvider>,
    );

    const text = container.querySelector('text.bar-label');
    assertNotNull(text);
    expect(text).toHaveStyle({
      fill: 'rgb(255, 255, 255)',
      color: 'rgb(200, 0, 0)',
      fontFamily: 'monospace',
      fontSize: 30,
      fontWeight: 400,
    });
  });
});
