import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MockProgressAnimationManager } from './MockProgressAnimationManager';

import { JavascriptAnimate } from '../../src/animation/JavascriptAnimate';

describe('JavascriptAnimate progress', () => {
  it('should call the function child with the current time', async () => {
    const animationManager = new MockProgressAnimationManager();
    const child = vi.fn();

    render(
      <JavascriptAnimate easing="linear" duration={500} animationManager={animationManager}>
        {child}
      </JavascriptAnimate>,
    );

    expect(child).toHaveBeenLastCalledWith(0);
    expect(child).toHaveBeenCalledTimes(1);

    await animationManager.setAnimationProgress(0.3);

    expect(child).toHaveBeenLastCalledWith(0.3);

    await animationManager.setAnimationProgress(0.7);

    expect(child).toHaveBeenLastCalledWith(0.7);
    expect(child).toHaveBeenCalledTimes(4);
  });

  describe('when easing changes in the middle of the animation', () => {
    it('should update the child with the new time and unfortunately it jumps in the middle', async () => {
      const animationManager = new MockProgressAnimationManager();
      const child = vi.fn();

      const { rerender } = render(
        <JavascriptAnimate easing="linear" duration={500} animationManager={animationManager}>
          {child}
        </JavascriptAnimate>,
      );

      expect(child).toHaveBeenLastCalledWith(0);
      expect(child).toHaveBeenCalledTimes(1);

      await animationManager.setAnimationProgress(0.3);

      expect(child).toHaveBeenLastCalledWith(0.3);

      // Change "to" in the middle of the animation
      rerender(
        <JavascriptAnimate easing="ease-out" duration={500} animationManager={animationManager}>
          {child}
        </JavascriptAnimate>,
      );

      // the animation now is at the exact same point as before the props change, and will start progressing from there
      expect(child).toHaveBeenLastCalledWith(0.3);
      expect(child).toHaveBeenCalledTimes(4);

      await animationManager.setAnimationProgress(0.7);

      expect(child).toHaveBeenLastCalledWith(expect.closeTo(0.81, 2));
      expect(child).toHaveBeenCalledTimes(6);

      await animationManager.setAnimationProgress(1);

      expect(child).toHaveBeenLastCalledWith(1);
      expect(child).toHaveBeenCalledTimes(7);
    });
  });
});
