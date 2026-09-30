import React, { ReactNode } from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BarChart, Bar, Sankey, SunburstChart, Treemap } from '../../src';
import { RechartsThemeProvider } from '../../src/theme/RechartsThemeContext';
import { RechartsTheme } from '../../src/theme/RechartsTheme';
import { lightTheme } from '../../src/theme/lightTheme';
import { darkTheme } from '../../src/theme/darkTheme';
import { emptyTheme } from '../../src/theme/emptyTheme';
import { exampleSankeyData, exampleSunburstData, exampleTreemapData, PageData } from '../_data';
import { assertNotNull } from '../helper/assertNotNull';

function getWrapper(container: Element): HTMLElement {
  const wrapper = container.querySelector<HTMLElement>('.recharts-wrapper');
  assertNotNull(wrapper);
  return wrapper;
}

function getWrapperStyle(wrapper: HTMLElement, keys: ReadonlyArray<keyof CSSStyleDeclaration>) {
  return Object.fromEntries(keys.map(key => [key, wrapper.style[key]]));
}

function renderWithTheme(theme: RechartsTheme | undefined, chart: ReactNode): HTMLElement {
  const { container } = render(<RechartsThemeProvider value={theme}>{chart}</RechartsThemeProvider>);
  return getWrapper(container);
}

const barChart = (
  <BarChart width={400} height={300} data={PageData}>
    <Bar dataKey="uv" isAnimationActive={false} />
  </BarChart>
);

const paintedTheme: RechartsTheme = {
  graphicalItems: [{}],
  chart: {
    backgroundColor: 'ivory',
    borderRadius: 8,
    boxShadow: '0 0 4px black',
    outline: '1px solid red',
    overflow: 'hidden',
  },
};

describe('RechartsWrapper with a theme', () => {
  it.each([
    ['no theme', undefined],
    ['the empty theme', emptyTheme],
    ['the light theme', lightTheme],
    ['the dark theme', darkTheme],
  ])('paints no background with %s', (_name, theme) => {
    const wrapper = renderWithTheme(theme, barChart);
    expect(wrapper.style.background).toBe('');
    expect(wrapper.style.backgroundColor).toBe('');
  });

  it('paints the chart styles from the theme', () => {
    const wrapper = renderWithTheme(paintedTheme, barChart);
    expect(getWrapperStyle(wrapper, ['backgroundColor', 'borderRadius', 'boxShadow', 'outline', 'overflow'])).toEqual({
      backgroundColor: 'ivory',
      borderRadius: '8px',
      boxShadow: '0 0 4px black',
      outline: '1px solid red',
      overflow: 'hidden',
    });
  });

  it('paints the background shorthand from the theme', () => {
    const wrapper = renderWithTheme(
      { graphicalItems: [{}], chart: { background: 'linear-gradient(red, blue)' } },
      barChart,
    );
    expect(wrapper.style.background).toBe('linear-gradient(red, blue)');
  });

  it('lets the explicit style prop override the theme', () => {
    const wrapper = renderWithTheme(
      paintedTheme,
      <BarChart width={400} height={300} data={PageData} style={{ backgroundColor: 'pink' }}>
        <Bar dataKey="uv" isAnimationActive={false} />
      </BarChart>,
    );
    expect(getWrapperStyle(wrapper, ['backgroundColor', 'borderRadius'])).toEqual({
      backgroundColor: 'pink',
      borderRadius: '8px',
    });
  });

  it('does not let the theme change the position or size of the wrapper', () => {
    const theme: RechartsTheme = {
      graphicalItems: [{}],
      // @ts-expect-error the type does not allow layout properties, but JavaScript users can still pass them
      chart: { position: 'absolute', width: 10, height: 10, cursor: 'pointer' },
    };
    const wrapper = renderWithTheme(theme, barChart);
    expect(getWrapperStyle(wrapper, ['position', 'width', 'height', 'cursor'])).toEqual({
      position: 'relative',
      width: '400px',
      height: '300px',
      cursor: 'default',
    });
  });

  it.each([
    {
      name: 'Treemap',
      renderChart: () => (
        <Treemap width={400} height={300} data={exampleTreemapData} dataKey="value" isAnimationActive={false} />
      ),
    },
    { name: 'Sankey', renderChart: () => <Sankey width={400} height={300} data={exampleSankeyData} /> },
    {
      name: 'SunburstChart',
      renderChart: () => <SunburstChart width={400} height={300} data={exampleSunburstData} />,
    },
  ])('paints the chart styles on $name', ({ renderChart }) => {
    const wrapper = renderWithTheme(paintedTheme, renderChart());
    expect(getWrapperStyle(wrapper, ['backgroundColor', 'borderRadius'])).toEqual({
      backgroundColor: 'ivory',
      borderRadius: '8px',
    });
  });
});
