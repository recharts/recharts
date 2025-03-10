import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { Surface, Line } from '../../src';

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
        <Line isAnimationActive={false} points={data} dot={{ clipDot: false }} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(1);
    const dots = container.querySelectorAll('.recharts-line-dot');
    expect(dots).toHaveLength(5);
    expect(dots[0].getAttribute('clip-path')).toBeNull();
  });

  it('Does render clip dot when clipDot is true', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Line isAnimationActive={false} points={data} dot={{ clipDot: true }} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(1);

    const dots = container.querySelectorAll('.recharts-line-dot');
    expect(dots).toHaveLength(5);
    expect(dots[0].getAttribute('clip-path')).toBeDefined();
  });

  it("Don't render any path when data is empty", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Line points={[]} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(0);
  });

  it('Render customized dot when dot is set to be a function', () => {
    let areaDotProps;
    const renderDot = (props: { cx: number; cy: number }) => {
      const { cx, cy } = props;
      areaDotProps = props;

      return <circle role="cell" key={cx} x={cx} y={cy} r={5} className="customized-dot" />;
    };

    render(
      <Surface width={500} height={500}>
        <Line isAnimationActive={false} points={data} dot={renderDot} />
      </Surface>,
    );

    expect(screen.getAllByRole('cell')).toHaveLength(data.length);
    expect(areaDotProps).toHaveProperty('points');
  });
});
