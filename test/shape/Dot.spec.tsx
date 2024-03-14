import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';

import { Surface, Dot } from '../../src';

describe('<Dot />', () => {
  test('Render 1 circle in simple Dot', () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Dot cx={100} cy={100} r={5} fill="#ff7300" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-dot')).toHaveLength(1);
  });

  test("Don't Render any circle when cx is invalid", () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Dot cy={100} r={5} fill="#ff7300" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-dot')).toHaveLength(0);
  });
  test("Don't Render any circle when cy is invalid", () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Dot cx={100} r={5} fill="#ff7300" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-dot')).toHaveLength(0);
  });
  test("Don't Render any circle when r is invalid", () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Dot cx={100} cy={5} fill="#ff7300" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-dot')).toHaveLength(0);
  });

  test('does not pass event handler props to circle', () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Dot cx={100} cy={200} r={5} fill="#ff7300" className="my-custom-classname" onClick={() => {}} />
      </Surface>,
    );
    const circle = container.querySelector('.recharts-dot');
    expect.soft(circle.getAttributeNames().sort()).toEqual(['class', 'cx', 'cy', 'fill', 'r']);
    expect.soft(circle.getAttribute('class')).toEqual('recharts-dot my-custom-classname');
    expect.soft(circle.getAttribute('cx')).toEqual('100');
    expect.soft(circle.getAttribute('cy')).toEqual('200');
    expect.soft(circle.getAttribute('fill')).toEqual('#ff7300');
    expect.soft(circle.getAttribute('r')).toEqual('5');
  });
});
