import React, { ReactNode } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { BarChart, Bar, ResponsiveContainer, Sankey, SunburstChart, Treemap } from '../../src';
import { RechartsThemeProvider } from '../../src/theme/RechartsThemeContext';
import { RechartsTheme } from '../../src/theme/RechartsTheme';
import { lightTheme } from '../../src/theme/lightTheme';
import { darkTheme } from '../../src/theme/darkTheme';
import { emptyTheme } from '../../src/theme/emptyTheme';
import { exampleSankeyData, exampleSunburstData, exampleTreemapData, PageData } from '../_data';
import { assertNotNull } from '../helper/assertNotNull';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';

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

function getSurfaceSize(wrapper: HTMLElement) {
  const surface = wrapper.querySelector('svg.recharts-surface');
  if (surface == null) {
    return null;
  }
  return { width: surface.getAttribute('width'), height: surface.getAttribute('height') };
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

  it('lets the theme override the default position and cursor', () => {
    const wrapper = renderWithTheme(
      { graphicalItems: [{}], chart: { position: 'static', cursor: 'crosshair' } },
      barChart,
    );
    expect(getWrapperStyle(wrapper, ['position', 'cursor'])).toEqual({ position: 'static', cursor: 'crosshair' });
  });

  it('allows any CSS, including properties that change the box of the wrapper', () => {
    const wrapper = renderWithTheme(
      { graphicalItems: [{}], chart: { padding: 8, border: '1px solid red', margin: 4, display: 'inline-block' } },
      barChart,
    );
    expect(getWrapperStyle(wrapper, ['padding', 'border', 'margin', 'display'])).toEqual({
      padding: '8px',
      border: '1px solid red',
      margin: '4px',
      display: 'inline-block',
    });
  });

  describe('size', () => {
    const sizedTheme: RechartsTheme = { graphicalItems: [{}], chart: { width: 500, height: 200 } };

    const unsizedBarChart = (
      <BarChart data={PageData}>
        <Bar dataKey="uv" isAnimationActive={false} />
      </BarChart>
    );

    it('renders nothing without a size, as before', () => {
      const wrapper = renderWithTheme(lightTheme, unsizedBarChart);
      expect(getSurfaceSize(wrapper)).toBeNull();
    });

    it('renders a chart that has no size of its own in the size from the theme', () => {
      const wrapper = renderWithTheme(sizedTheme, unsizedBarChart);
      expect(getWrapperStyle(wrapper, ['width', 'height'])).toEqual({ width: '500px', height: '200px' });
      expect(getSurfaceSize(wrapper)).toEqual({ width: '500', height: '200' });
    });

    it('measures a size from the theme that is not a number', () => {
      mockGetBoundingClientRect({ width: 640, height: 320 });
      const wrapper = renderWithTheme(
        { graphicalItems: [{}], chart: { width: '100%', aspectRatio: 2 } },
        unsizedBarChart,
      );
      expect(getWrapperStyle(wrapper, ['width', 'aspectRatio'])).toEqual({ width: '100%', aspectRatio: '2 / 1' });
      expect(getSurfaceSize(wrapper)).toEqual({ width: '640', height: '320' });
    });

    it('measures a size from the theme in a responsive chart', () => {
      mockGetBoundingClientRect({ width: 640, height: 320 });
      vi.stubGlobal(
        'ResizeObserver',
        vi.fn(function ResizeObserverMock() {
          return { observe: vi.fn(), unobserve: vi.fn(), disconnect: vi.fn() };
        }),
      );
      const wrapper = renderWithTheme(
        { graphicalItems: [{}], chart: { width: '100%', aspectRatio: 2 } },
        <BarChart data={PageData} responsive>
          <Bar dataKey="uv" isAnimationActive={false} />
        </BarChart>,
      );
      expect(getSurfaceSize(wrapper)).toEqual({ width: '640', height: '320' });
    });

    it('lets the width and height props override the theme', () => {
      const wrapper = renderWithTheme(sizedTheme, barChart);
      expect(getWrapperStyle(wrapper, ['width', 'height'])).toEqual({ width: '400px', height: '300px' });
      expect(getSurfaceSize(wrapper)).toEqual({ width: '400', height: '300' });
    });

    it('lets the style prop override the theme', () => {
      const wrapper = renderWithTheme(
        sizedTheme,
        <BarChart data={PageData} style={{ width: 300, height: 100 }}>
          <Bar dataKey="uv" isAnimationActive={false} />
        </BarChart>,
      );
      expect(getWrapperStyle(wrapper, ['width', 'height'])).toEqual({ width: '300px', height: '100px' });
      expect(getSurfaceSize(wrapper)).toEqual({ width: '300', height: '100' });
    });

    it('lets ResponsiveContainer override the theme', () => {
      mockGetBoundingClientRect({ width: 640, height: 320 });
      const wrapper = renderWithTheme(
        sizedTheme,
        <ResponsiveContainer width={640} height={320}>
          {unsizedBarChart}
        </ResponsiveContainer>,
      );
      expect(getWrapperStyle(wrapper, ['width', 'height'])).toEqual({ width: '640px', height: '320px' });
      expect(getSurfaceSize(wrapper)).toEqual({ width: '640', height: '320' });
    });

    it.each([
      {
        name: 'Treemap',
        renderChart: () => <Treemap data={exampleTreemapData} dataKey="value" isAnimationActive={false} />,
      },
      { name: 'Sankey', renderChart: () => <Sankey data={exampleSankeyData} /> },
      { name: 'SunburstChart', renderChart: () => <SunburstChart data={exampleSunburstData} /> },
    ])('renders $name in the size from the theme', ({ renderChart }) => {
      const wrapper = renderWithTheme(sizedTheme, renderChart());
      expect(getSurfaceSize(wrapper)).toEqual({ width: '500', height: '200' });
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
