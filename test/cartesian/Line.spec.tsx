import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { scaleLinear } from 'victory-vendor/d3-scale';
import { Surface, Line, ErrorBar, LineChart, Customized } from '../../src';
import { useAppSelector } from '../../src/state/hooks';
import { selectErrorBarsSettings } from '../../src/state/selectors/axisSelectors';

describe('<Line />', () => {
  const data = [
    { x: 10, y: 50, value: 100 },
    { x: 50, y: 50, value: 100 },
    { x: 90, y: 50, value: 100 },
    { x: 130, y: 50, value: 100 },
    { x: 170, y: 50, value: 100 },
  ];

  it('Renders a path in a simple Line', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Line isAnimationActive={false} points={data} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(1);
  });

  it('Does not fall into infinite loop if strokeDasharray is 0', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Line points={data} strokeDasharray="0" />
      </Surface>,
    );

    const line = container.querySelectorAll('.recharts-line-curve');
    expect(line).toHaveLength(1);

    expect(line[0].getAttribute('stroke-dasharray')).toEqual('0px 0px');
  });

  it('Does not throw when dot is null', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        {/* Test that the error Cannot read properties of null (reading 'clipDot') does not appear in JS projects */}
        {/* eslint-disable-next-line */}
        {/* @ts-ignore */}
        <Line isAnimationActive={false} points={data} dot={null} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-line-dot')).toHaveLength(0);
  });

  it('Does not render clip dot when clipDot is false', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Line
          isAnimationActive={false}
          points={data}
          dot={{ clipDot: false }} // Line must have an XAxis or YAxis in order for clips to render
          xAxis={{ allowDataOverflow: true, scale: scaleLinear() }}
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(1);
    const dots = container.querySelectorAll('.recharts-line-dot');
    expect(dots).toHaveLength(5);

    const dotsWrapper = container.querySelector('.recharts-line-dots');
    // Well this is confusing. When clipDot is false the className contains 'dots'. AKA clip path name includes what is showing, rather than what is clipped.
    expect(dotsWrapper.getAttribute('clip-path')).toContain('url(#clipPath-dots-recharts-line');
  });

  it('Does render clip dot when clipDot is true', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Line
          isAnimationActive={false}
          points={data}
          dot={{ clipDot: true }}
          // Line must have an XAxis or YAxis in order for clips to render
          xAxis={{ allowDataOverflow: true, scale: scaleLinear() }}
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(1);

    const dots = container.querySelectorAll('.recharts-line-dot');
    expect(dots).toHaveLength(5);

    const dotsWrapper = container.querySelector('.recharts-line-dots');
    expect(dotsWrapper.getAttribute('clip-path')).toContain('url(#clipPath-recharts-line');
  });

  it("Don't render any path when data is empty", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Line points={[]} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(0);
  });

  it('should report its ErrorBars to state', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      spy(useAppSelector(state => selectErrorBarsSettings(state, 'yAxis', 0)));
      return null;
    };
    render(
      <LineChart width={500} height={500}>
        <Line data={data} isAnimationActive={false} dataKey="y">
          <ErrorBar dataKey="x" />
        </Line>
        <Customized component={<Comp />} />
      </LineChart>,
    );

    expect(spy).toHaveBeenLastCalledWith([
      {
        dataKey: 'x',
        // this defaults to y even in an absence of explicit prop
        direction: 'y',
      },
    ]);
    expect(spy).toHaveBeenCalledTimes(4);
  });

  it('should report its ErrorBars to state in vertical chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      spy(useAppSelector(state => selectErrorBarsSettings(state, 'xAxis', 0)));
      return null;
    };
    render(
      <LineChart width={500} height={500} layout="vertical">
        <Line data={data} isAnimationActive={false} dataKey="y">
          <ErrorBar dataKey="x" />
        </Line>
        <Customized component={<Comp />} />
      </LineChart>,
    );

    expect(spy).toHaveBeenLastCalledWith([
      {
        dataKey: 'x',
        // in horizontal chart the default direction is y, in vertical it's x
        direction: 'x',
      },
    ]);
    expect(spy).toHaveBeenCalledTimes(4);
  });
});
