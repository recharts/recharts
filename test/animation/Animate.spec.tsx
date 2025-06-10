import React from 'react';
import { act, render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Animate } from '../../src/animation/Animate';

describe('Animate', () => {
  it('Should change the style of children', () => {
    vi.useFakeTimers();
    expect.assertions(2);
    const { container } = render(
      // @ts-expect-error TODO - fix the type error
      <Animate from="1" to="0" attributeName="opacity" duration={500}>
        <div className="test-wrapper" />
      </Animate>,
    );
    const element = container.getElementsByClassName('test-wrapper')[0];
    expect(element).toHaveStyle({
      opacity: 1,
    });

    act(() => {
      vi.advanceTimersByTime(700);
    });

    expect(element).toHaveStyle({
      opacity: 0,
    });
  });

  it('Should called onAnimationEnd', () => {
    vi.useFakeTimers();
    expect.assertions(2);
    let num = 0;
    const handleAnimationEnd = () => {
      num += 1;
    };

    render(
      // @ts-expect-error TODO - fix the type error
      <Animate from="1" to="0" attributeName="opacity" duration={500} onAnimationEnd={handleAnimationEnd}>
        <div />
      </Animate>,
    );

    expect(num).toEqual(0);

    vi.advanceTimersByTime(700);

    expect(num).toEqual(1);
  });
});
