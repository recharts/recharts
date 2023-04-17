import React from 'react';
import { render } from '@testing-library/react';
import { Surface, Trapezoid } from '../../src';

describe('<Trapezoid />', () => {
  test('Render 1 Trapezoid in simple Trapezoid', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Trapezoid fill="#f00" x={300} y={100} upperWidth={100} lowerWidth={0} height={50} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-trapezoid')).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });

  test('Render 1 Trapezoid with animation in simple Trapezoid', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Trapezoid fill="#f00" x={300} y={100} upperWidth={100} lowerWidth={0} height={50} isUpdateAnimationActive />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-trapezoid')).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });

  test("Don't render any Trapezoid when props is invalid", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Trapezoid fill="#f00" x={300} y={100} upperWidth={0} lowerWidth={0} height={50} />
        <Trapezoid fill="#f00" x={300} y={100} upperWidth={100} lowerWidth={0} height={0} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-trapezoid')).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });
});
