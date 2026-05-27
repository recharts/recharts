import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Area, AreaChart, Bar, BarChart, Dot, Line, LineChart, RechartsThemeProvider, XAxis, YAxis } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';

const data = [
  { name: 'Page A', uv: 400 },
  { name: 'Page B', uv: 300 },
  { name: 'Page C', uv: 200 },
];

describe('RechartsThemeProvider', () => {
  it('applies Area component theme defaults from context', () => {
    const { container } = render(
      <RechartsThemeProvider
        theme={{
          components: {
            Area: {
              fill: '#123456',
              fillOpacity: 0.25,
              stroke: '#654321',
              strokeWidth: 7,
            },
          },
        }}
      >
        <AreaChart width={100} height={50} data={data}>
          <Area dataKey="uv" isAnimationActive={false} />
        </AreaChart>
      </RechartsThemeProvider>,
    );

    const area = container.querySelector('.recharts-area-area');
    const curve = container.querySelector('.recharts-area-curve');

    assertNotNull(area);
    assertNotNull(curve);

    expect(area).toHaveAttribute('fill', '#123456');
    expect(area).toHaveAttribute('fill-opacity', '0.25');
    expect(curve).toHaveAttribute('stroke', '#654321');
    expect(curve).toHaveAttribute('stroke-width', '7');
  });

  it('applies Area token defaults from series and stroke width theme values', () => {
    const { container } = render(
      <RechartsThemeProvider
        theme={{
          series: {
            keyed: {
              uv: {
                fill: '#2468ac',
              },
            },
          },
          strokeWidths: {
            area: 5,
          },
        }}
      >
        <AreaChart width={100} height={50} data={data}>
          <Area dataKey="uv" isAnimationActive={false} />
        </AreaChart>
      </RechartsThemeProvider>,
    );

    const area = container.querySelector('.recharts-area-area');
    const curve = container.querySelector('.recharts-area-curve');

    assertNotNull(area);
    assertNotNull(curve);

    expect(area).toHaveAttribute('fill', '#2468ac');
    expect(curve).toHaveAttribute('stroke', '#2468ac');
    expect(curve).toHaveAttribute('stroke-width', '5');
  });

  it('lets explicit Area props override theme defaults', () => {
    const { container } = render(
      <RechartsThemeProvider
        theme={{
          components: {
            Area: {
              fill: '#123456',
              fillOpacity: 0.25,
              stroke: '#654321',
              strokeWidth: 7,
            },
          },
        }}
      >
        <AreaChart width={100} height={50} data={data}>
          <Area
            dataKey="uv"
            isAnimationActive={false}
            fill="#ff7300"
            fillOpacity={0.9}
            stroke="#ff0000"
            strokeWidth={2}
          />
        </AreaChart>
      </RechartsThemeProvider>,
    );

    const area = container.querySelector('.recharts-area-area');
    const curve = container.querySelector('.recharts-area-curve');

    assertNotNull(area);
    assertNotNull(curve);

    expect(area).toHaveAttribute('fill', '#ff7300');
    expect(area).toHaveAttribute('fill-opacity', '0.9');
    expect(curve).toHaveAttribute('stroke', '#ff0000');
    expect(curve).toHaveAttribute('stroke-width', '2');
  });

  it('shallow-merges allowlisted nested Area props across nested theme providers', () => {
    const { container } = render(
      <RechartsThemeProvider
        theme={{
          components: {
            Area: {
              dot: {
                fill: '#123456',
                r: 4,
                stroke: '#111111',
              },
            },
          },
        }}
      >
        <RechartsThemeProvider
          theme={{
            components: {
              Area: {
                dot: {
                  fill: '#abcdef',
                },
              },
            },
          }}
        >
          <AreaChart width={100} height={50} data={data}>
            <Area dataKey="uv" isAnimationActive={false} />
          </AreaChart>
        </RechartsThemeProvider>
      </RechartsThemeProvider>,
    );

    const dot = container.querySelector('.recharts-area-dot');

    assertNotNull(dot);

    expect(dot).toHaveAttribute('fill', '#abcdef');
    expect(dot).toHaveAttribute('r', '4');
    expect(dot).toHaveAttribute('stroke', '#111111');
  });

  it('applies Line token defaults from keyed series and stroke width theme values', () => {
    const { container } = render(
      <RechartsThemeProvider
        theme={{
          series: {
            keyed: {
              uv: {
                stroke: '#13579b',
              },
            },
          },
          strokeWidths: {
            line: 4,
          },
        }}
      >
        <LineChart width={100} height={50} data={data}>
          <Line dataKey="uv" isAnimationActive={false} />
        </LineChart>
      </RechartsThemeProvider>,
    );

    const curve = container.querySelector('.recharts-line-curve');

    assertNotNull(curve);

    expect(curve).toHaveAttribute('stroke', '#13579b');
    expect(curve).toHaveAttribute('stroke-width', '4');
  });

  it('applies Bar token defaults from the series palette', () => {
    const { container } = render(
      <RechartsThemeProvider
        theme={{
          meta: {
            name: 'custom',
          },
          series: {
            palette: ['#2468ac'],
          },
          strokeWidths: {
            bar: 3,
          },
        }}
      >
        <BarChart width={300} height={200} data={data}>
          <XAxis dataKey="name" interval={0} />
          <Bar dataKey="uv" isAnimationActive={false} />
        </BarChart>
      </RechartsThemeProvider>,
    );

    const bar = container.querySelector<SVGPathElement>('.recharts-bar .recharts-rectangle');

    assertNotNull(bar);

    expect(bar.getAttribute('fill') ?? bar.style.fill).toBe('#2468ac');
    expect(bar.getAttribute('stroke-width') ?? bar.style.strokeWidth).toBe('3');
  });

  it('applies axis typography token defaults', () => {
    const { container } = render(
      <RechartsThemeProvider
        theme={{
          typography: {
            fontFamily: 'monospace',
            fontSize: 17,
            fontWeight: 600,
            letterSpacing: '0.2em',
          },
        }}
      >
        <LineChart width={300} height={200} data={data}>
          <XAxis dataKey="name" interval={0} />
          <YAxis />
          <Line dataKey="uv" isAnimationActive={false} />
        </LineChart>
      </RechartsThemeProvider>,
    );

    const ticks = Array.from(container.querySelectorAll<SVGTextElement>('.recharts-cartesian-axis-tick-value'));

    expect(ticks.length).toBeGreaterThan(0);
    expect(
      ticks.some(tick => {
        return (
          (tick.getAttribute('font-family') ?? tick.style.fontFamily) === 'monospace' &&
          (tick.getAttribute('font-size') ?? tick.style.fontSize) === '17' &&
          (tick.getAttribute('font-weight') ?? tick.style.fontWeight) === '600' &&
          (tick.getAttribute('letter-spacing') ?? tick.style.letterSpacing) === '0.2em'
        );
      }),
    ).toBe(true);
  });

  it('applies primitive shape component theme defaults', () => {
    const { container } = render(
      <RechartsThemeProvider
        theme={{
          components: {
            Dot: {
              fill: '#123456',
              r: 7,
              stroke: '#654321',
            },
          },
        }}
      >
        <svg>
          <Dot cx={10} cy={20} />
        </svg>
      </RechartsThemeProvider>,
    );

    const dot = container.querySelector('.recharts-dot');

    assertNotNull(dot);

    expect(dot).toHaveAttribute('fill', '#123456');
    expect(dot).toHaveAttribute('r', '7');
    expect(dot).toHaveAttribute('stroke', '#654321');
  });
});
