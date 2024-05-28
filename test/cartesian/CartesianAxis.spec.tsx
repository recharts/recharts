import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { scaleLinear } from 'victory-vendor/d3-scale';
import { Surface, CartesianAxis } from '../../src';
import { CartesianTickItem } from '../../src/util/types';
import { RechartsScale } from '../../src/util/ChartUtils';

const CustomizeLabel = ({ x, y }: any) => (
  <text data-testid="customized-label" x={x} y={y}>
    test
  </text>
);

const CustomizedTick = ({ x, y }: any) => (
  <text data-testid="customized-tick" x={x} y={y}>
    test
  </text>
);

// @ts-expect-error we need to wrap the d3 scales in unified interface
const exampleScale: RechartsScale = scaleLinear();

describe('<CartesianAxis />', () => {
  const ticks: ReadonlyArray<CartesianTickItem> = [
    { value: 10, coordinate: 50 },
    { value: 1000, coordinate: 100 },
    { value: 20, coordinate: 150 },
    { value: 40, coordinate: 200 },
    { value: 90, coordinate: 250 },
  ];

  it('Renders 5 ticks in simple CartesianAxis', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="bottom"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          label="test"
          scale={exampleScale}
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-cartesian-axis-tick')).toHaveLength(5);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
  });

  it('Renders no ticks in simple CartesianAxis', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="bottom"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={[]}
          label="test"
          scale={exampleScale}
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-cartesian-axis-tick')).toHaveLength(0);
  });

  it('Renders ticks when interval="preserveStartEnd"', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="bottom"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          label="test"
          interval="preserveStartEnd"
          scale={exampleScale}
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-cartesian-axis-tick')).toHaveLength(5);
  });

  it('gets font states from its ComputedStyle', () => {
    const myStyle = { fontSize: '14px', letterSpacing: '0.5em' } as CSSStyleDeclaration;

    vi.spyOn(window, 'getComputedStyle').mockReturnValue(myStyle);

    render(
      <Surface width={500} height={500}>
        <CartesianAxis
          data-testid="hellooo"
          orientation="bottom"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          label="test"
          interval="preserveStartEnd"
          scale={exampleScale}
        />
      </Surface>,
    );

    const container: HTMLSpanElement | null = document.querySelector('#recharts_measurement_span');

    expect(container?.style).toMatchObject(myStyle);
  });

  it('Renders ticks when interval="preserveStart"', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="bottom"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          label="test"
          interval="preserveStart"
          scale={exampleScale}
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-cartesian-axis-tick')).toHaveLength(5);
  });

  it('Renders 5 ticks in a CartesianAxis which has orientation top', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="top"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          label="top"
          scale={exampleScale}
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-cartesian-axis-tick')).toHaveLength(5);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
  });

  it('Renders 5 ticks in a CartesianAxis which has orientation left', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="left"
          y={100}
          width={50}
          height={400}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          label="left"
          scale={exampleScale}
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-cartesian-axis-tick')).toHaveLength(5);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
  });

  it('Renders 5 ticks in a CartesianAxis which has orientation right', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="right"
          y={100}
          width={50}
          height={400}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          label="right"
          scale={exampleScale}
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-cartesian-axis-tick')).toHaveLength(5);
    expect(container.querySelectorAll('.recharts-label')).toHaveLength(1);
  });

  it('Renders label when label is a function', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="left"
          y={100}
          width={50}
          height={400}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          label={CustomizeLabel}
          scale={exampleScale}
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-cartesian-axis-tick')).toHaveLength(5);
    expect(screen.getAllByTestId('customized-label')).toHaveLength(1);
  });

  it('Renders label when label is a react element', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="right"
          y={100}
          width={50}
          height={400}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          label={<CustomizeLabel />}
          scale={exampleScale}
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-cartesian-axis-tick')).toHaveLength(5);
    expect(screen.getAllByTestId('customized-label')).toHaveLength(1);
  });

  it('Render customized ticks when tick is set to be a ReactElement', () => {
    render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="bottom"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          tick={<CustomizedTick />}
          interval={0}
          scale={exampleScale}
        />
      </Surface>,
    );

    expect(screen.getAllByTestId('customized-tick')).toHaveLength(ticks.length);
  });

  it('Render customized ticks when ticks is an array of strings and interval is 0', () => {
    render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="bottom"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          tick={<CustomizedTick />}
          interval={0}
          scale={exampleScale}
        />
      </Surface>,
    );

    expect(screen.getAllByTestId('customized-tick')).toHaveLength(ticks.length);
  });

  it('Render customized ticks when tick is set to be a function', () => {
    render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="bottom"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          tick={CustomizedTick}
          interval={0}
          scale={exampleScale}
        />
      </Surface>,
    );

    expect(screen.getAllByTestId('customized-tick')).toHaveLength(ticks.length);
  });

  it('Renders no ticks when tick is set to false', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="bottom"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          tick={false}
          scale={exampleScale}
        />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-cartesian-axis-tick')).toHaveLength(0);
  });
});
