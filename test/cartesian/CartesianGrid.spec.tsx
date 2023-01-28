import React from 'react';
import { render } from '@testing-library/react';
import { Surface, CartesianGrid } from '../../src';

describe('<CartesianGrid />', () => {
  const horizontalPoints = [10, 20, 30, 100, 400];
  const verticalPoints = [100, 200, 300, 400];

  test('Render 5 horizontal lines and 4 vertical lines in simple CartesianGrid', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <CartesianGrid
          x={0}
          y={0}
          width={500}
          height={500}
          verticalPoints={verticalPoints}
          horizontalPoints={horizontalPoints}
        />
      </Surface>,
    );
    expect(container.querySelectorAll('line')).toHaveLength(9);
  });

  test("Don't render any lines when verticalPoints and horizontalPoints are empty", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <CartesianGrid width={500} height={500} />
      </Surface>,
    );
    expect(container.querySelectorAll('line')).toHaveLength(0);
  });

  test("Don't render any lines when width or height is smaller than 0", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <CartesianGrid width={0} height={500} />
      </Surface>,
    );
    expect(container.querySelectorAll('line')).toHaveLength(0);
  });
});
