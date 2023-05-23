import React from 'react';
import each from 'jest-each';
import { render } from '@testing-library/react';

import { Surface, Rectangle } from '../../src';

describe('<Rectangle />', () => {
  each([[5, 10, 8, 15], 5]).it('Should render 1 rectangle in simple Rectangle when radius is %s', radius => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Rectangle x={50} y={50} width={80} height={100} radius={radius} fill="#ff7300" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });

  it('Should render 4 arc when height < 0', () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Rectangle x={50} y={200} width={80} height={-100} radius={5} fill="#ff7300" />
      </Surface>,
    );

    const rects = container.querySelectorAll('.recharts-rectangle');
    expect(rects).toHaveLength(1);
    expect(rects[0]).toHaveAttribute('d');
    const paths = rects[0].getAttribute('d') || '';
    expect(paths.length - paths.split('A').join('').length).toBe(4);
    expect(container).toMatchSnapshot();
  });

  it("Shouldn't render anything when height === 0 || width === 0", () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Rectangle x={50} y={200} width={80} height={0} radius={5} fill="#ff7300" />
        <Rectangle x={50} y={200} width={0} height={30} radius={5} fill="#ff7300" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });

  it("Shouldn't render any path when x, y, width or height is not a number", () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Rectangle x={'a' as any} y={50} width={80} height={100} fill="#ff7300" />
        <Rectangle x={50} y={'b' as any} width={80} height={100} fill="#ff7300" />
        <Rectangle x={50} y={50} width={'c' as any} height={100} fill="#ff7300" />
        <Rectangle x={50} y={50} width={80} height={'d' as any} fill="#ff7300" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-rectangle')).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });
});
