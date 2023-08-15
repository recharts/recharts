import React, { FC } from 'react';
import { render, screen } from '@testing-library/react';
import { Area, Surface } from '../../src';

describe('<Area />', () => {
  const data = [
    { x: 10, y: 50, value: 100 },
    { x: 50, y: 50, value: 100 },
    { x: 90, y: 50, value: 100 },
    { x: 130, y: 50, value: 100 },
    { x: 170, y: 50, value: 100 },
  ];

  test('Render customized label when label is set to be a function', () => {
    const renderLabel = (props: { index: number; x: number; y: number }) => {
      const { index, x, y } = props;

      return (
        <text key={index} x={x} y={y} className="customized-label">
          Customized Label
        </text>
      );
    };

    render(
      <Surface width={500} height={500}>
        <Area dataKey="value" isAnimationActive={false} baseLine={200} points={data} label={renderLabel} />
      </Surface>,
    );

    expect(screen.getAllByText('Customized Label')).toHaveLength(data.length);
  });

  test('Render customized label when label is set to be a react element', () => {
    const Label: FC<{ index: number; x: number; y: number }> = props => {
      const { index, x, y } = props;

      return (
        <text key={index} x={x} y={y} className="customized-label">
          Customized Label
        </text>
      );
    };

    render(
      <Surface width={500} height={500}>
        <Area
          dataKey="value"
          isAnimationActive={false}
          baseLine={200}
          points={data}
          label={({ index, x, y }: { index: number; x: number; y: number }) => <Label index={index} x={x} y={y} />}
        />
      </Surface>,
    );

    expect(screen.getAllByText('Customized Label')).toHaveLength(data.length);
  });

  test('Render customized dot when dot is set to be a function', () => {
    const renderDot = (props: { cx: number; cy: number }) => {
      const { cx, cy } = props;

      return <circle role="cell" key={cx} x={cx} y={cy} r={5} className="customized-dot" />;
    };

    render(
      <Surface width={500} height={500}>
        <Area dataKey="value" isAnimationActive={false} baseLine={200} points={data} dot={renderDot} />
      </Surface>,
    );

    expect(screen.getAllByRole('cell')).toHaveLength(data.length);
  });

  test('Render customized dot when dot is set to be a react element', () => {
    const CustomizedDot: FC<{ cx?: number; cy?: number }> = ({ cx, cy }) => (
      <circle role="cell" cx={cx} cy={cy} r={5} className="customized-dot" />
    );

    render(
      <Surface width={500} height={500}>
        <Area
          dataKey="value"
          isAnimationActive={false}
          baseLine={200}
          points={data}
          dot={({ cx, cy }) => <CustomizedDot key={`${cx}-${cy}`} cx={cx} cy={cy} />}
        />
      </Surface>,
    );

    expect(screen.getAllByRole('cell')).toHaveLength(data.length);
  });

  test('Does not throw when dot is null', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        {/* Test that the error Cannot read properties of null (reading 'clipDot') does not appear in JS projects */}
        {/* eslint-disable-next-line */}
        {/* @ts-ignore */}
        <Area dataKey="value" points={data} dot={null} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-area-area')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-area-curve')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-area-dot')).toHaveLength(0);
  });

  test("Don't render any path when data is empty", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Area dataKey="value" points={undefined} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-area-area')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-area-curve')).toHaveLength(0);
    expect(container.querySelectorAll('.recharts-area-dot')).toHaveLength(0);
  });

  test('renders the curve with the stroke on top (2nd) of the curve with the fill (1st)', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Area dataKey="value" points={data} baseLine={200} stroke="teal" fill="teal" />
      </Surface>,
    );

    const curveCount = container.querySelectorAll('.recharts-curve').length;

    expect(container.querySelectorAll('.recharts-curve')).toHaveLength(2);
    expect(container.querySelectorAll('.recharts-curve')[0]).toHaveAttribute('stroke', 'none');
    expect(container.querySelectorAll('.recharts-curve')[0]).toHaveAttribute('fill', 'teal');
    expect(container.querySelectorAll('.recharts-curve')[curveCount - 1]).toHaveAttribute('stroke', 'teal');
    expect(container.querySelectorAll('.recharts-curve')[curveCount - 1]).toHaveAttribute('fill', 'none');
  });
});
