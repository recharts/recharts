import React from 'react';
import { act, render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Animate } from '../../src/animation/Animate';
import { MockTimeoutController } from './mockTimeoutController';

describe('Animate', () => {
  describe('with animation steps as strings', () => {
    it('Should change the style of children via element cloning', () => {
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

    it('Should call onAnimationEnd at the end of the animation', () => {
      vi.useFakeTimers();
      expect.assertions(2);
      const handleAnimationEnd = vi.fn();

      render(
        // @ts-expect-error TODO - fix the type error
        <Animate from="1" to="0" attributeName="opacity" duration={500} onAnimationEnd={handleAnimationEnd}>
          <div />
        </Animate>,
      );

      expect(handleAnimationEnd).not.toHaveBeenCalled();

      act(() => {
        vi.advanceTimersByTime(700);
      });

      expect(handleAnimationEnd).toHaveBeenCalledTimes(1);
    });
  });

  describe('with animation steps as objects', () => {
    it('should call onAnimationStart and onAnimationEnd', async () => {
      const handleAnimationStart = vi.fn();
      const handleAnimationEnd = vi.fn();
      const timeoutController = new MockTimeoutController();

      render(
        <Animate
          from={{ opacity: 1 }}
          to={{ opacity: 0 }}
          duration={500}
          onAnimationStart={handleAnimationStart}
          onAnimationEnd={handleAnimationEnd}
          timeoutController={timeoutController}
        >
          <div className="test-wrapper" />
        </Animate>,
      );

      expect(handleAnimationStart).toHaveBeenCalledTimes(1);
      expect(handleAnimationEnd).not.toHaveBeenCalled();

      await timeoutController.flushAllTimeouts();

      expect(handleAnimationStart).toHaveBeenCalledTimes(1);
      expect(handleAnimationEnd).toHaveBeenCalledTimes(1);
    });

    it('should not start animation if canBegin is false', async () => {
      const handleAnimationStart = vi.fn();
      const timeoutController = new MockTimeoutController();

      render(
        <Animate
          from={{ opacity: 1 }}
          to={{ opacity: 0 }}
          duration={500}
          canBegin={false}
          onAnimationStart={handleAnimationStart}
          timeoutController={timeoutController}
        >
          <div className="test-wrapper" />
        </Animate>,
      );

      await timeoutController.flushAllTimeouts();

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(handleAnimationStart).not.toHaveBeenCalled();
    });

    it('should not start animation if isActive is false', async () => {
      const handleAnimationStart = vi.fn();
      const timeoutController = new MockTimeoutController();

      render(
        <Animate
          from={{ opacity: 1 }}
          to={{ opacity: 0 }}
          duration={500}
          isActive={false}
          onAnimationStart={handleAnimationStart}
          timeoutController={timeoutController}
        >
          <div className="test-wrapper" />
        </Animate>,
      );

      await timeoutController.flushAllTimeouts();

      expect(handleAnimationStart).not.toHaveBeenCalled();
      expect(handleAnimationStart).not.toHaveBeenCalled();
    });

    it('should call children function with current style', async () => {
      const timeoutController = new MockTimeoutController();
      const childFunction = vi.fn();

      render(
        <Animate from={{ opacity: 1 }} to={{ opacity: 0 }} duration={500} timeoutController={timeoutController}>
          {childFunction}
        </Animate>,
      );

      expect(childFunction).toHaveBeenCalledWith({ opacity: 1 });
      expect(childFunction).toHaveBeenCalledTimes(1);

      await timeoutController.flushAllTimeouts();

      expect(childFunction).toHaveBeenCalledTimes(3);
      expect(childFunction).toHaveBeenCalledWith({ opacity: 0 });
    });
  });
});
