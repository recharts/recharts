import { render } from '@testing-library/react';
import React from 'react';
import { Surface, Cross } from '../../src';

describe('<Cross />', () => {
  it('Render 1 path in Cross', () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Cross top={50} left={50} x={150} y={180} width={200} height={200} stroke="#000" fill="none" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-cross')).toHaveLength(1);
  });

  it("Don't render any path when props is invalid", () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Cross top={50} left={50} x={'x' as any} y={180} width={200} height={200} stroke="#000" fill="none" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-cross')).toHaveLength(0);
  });
});
