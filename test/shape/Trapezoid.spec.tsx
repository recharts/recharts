import React from 'react';
import { render } from '@testing-library/react';
import { RechartsFillDefinitionProps, Surface, Trapezoid } from '../../src';

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

  test('draws a horizontal trapezoid with the wider side on the right and gives the fill its physical bounds', () => {
    function BoundsPattern({ id, bounds }: RechartsFillDefinitionProps) {
      return <pattern id={id} width={bounds?.width} height={bounds?.height} />;
    }
    const fill = { definition: BoundsPattern };
    const { container } = render(
      <Surface width={120} height={100}>
        <Trapezoid taperDirection="horizontal" x={10} y={40} upperWidth={20} lowerWidth={60} width={90} fill={fill} />
      </Surface>,
    );

    const trapezoid = container.querySelector('.recharts-trapezoid');
    expect(trapezoid).toHaveAttribute('d', 'M 10,40L 10,60L 100,80L 100,20L 10,40 Z');
    const pattern = container.querySelector('pattern');
    expect(pattern).toHaveAttribute('width', '90');
    expect(pattern).toHaveAttribute('height', '60');
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

  test("Don't render any Trapezoid when props are invalid", () => {
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
