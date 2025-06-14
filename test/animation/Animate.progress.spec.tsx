import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MockProgressAnimationManager } from './MockProgressAnimationManager';
import { Animate } from '../../src/animation/Animate';

describe('Animate progress', () => {
  describe('when child is a function', () => {
    describe('with from, to as objects', () => {
      it('should call the function child with the current style', async () => {
        const animationManager = new MockProgressAnimationManager();
        const child = vi.fn();

        render(
          <Animate
            from={{ opacity: 1 }}
            to={{ opacity: 0 }}
            easing="linear"
            duration={500}
            animationManager={animationManager}
          >
            {child}
          </Animate>,
        );

        expect(child).toHaveBeenLastCalledWith({ opacity: 1 });
        expect(child).toHaveBeenCalledTimes(1);

        await animationManager.advanceAnimation(0.3);

        expect(child).toHaveBeenCalledWith({ opacity: 0.7 });

        await animationManager.advanceAnimation(0.7);

        expect(child).toHaveBeenLastCalledWith({ opacity: expect.closeTo(0.3, 5) });
        expect(child).toHaveBeenCalledTimes(4);
      });
    });

    describe('with from, to as numbers', () => {
      it('should call the function child with the current style (but it does not)', async () => {
        const animationManager = new MockProgressAnimationManager();
        const child = vi.fn();

        render(
          <Animate
            // @ts-expect-error TODO - fix the type error
            from={1}
            // @ts-expect-error TODO - fix the type error
            to={0}
            attributeName="opacity"
            easing="linear"
            duration={500}
            animationManager={animationManager}
          >
            {child}
          </Animate>,
        );

        expect(child).toHaveBeenLastCalledWith(1);
        expect(child).toHaveBeenCalledTimes(1);

        await animationManager.advanceAnimation(0.5);

        // This appears to be a bug - when given numbers + function child, the tick object is empty
        expect(child).toHaveBeenLastCalledWith({});
        expect(child).toHaveBeenCalledTimes(3);
      });
    });

    describe('with from, to as strings', () => {
      it('should call the function child with the current style (but it does not)', async () => {
        const animationManager = new MockProgressAnimationManager();
        const child = vi.fn();

        render(
          <Animate
            // @ts-expect-error TODO - fix the type error
            from="1"
            // @ts-expect-error TODO - fix the type error
            to="0"
            attributeName="opacity"
            easing="linear"
            duration={500}
            animationManager={animationManager}
          >
            {child}
          </Animate>,
        );

        expect(child).toHaveBeenLastCalledWith('1');
        expect(child).toHaveBeenCalledTimes(1);

        await animationManager.advanceAnimation(0.5);

        /*
         * This appears to be a bug - when given strings + function child,
         * the tick object is missing the attribute name
         * and the math appears to be concatenating the values instead of calculating.
         */
        expect(child).toHaveBeenLastCalledWith({ '0': '1-0.5' });
        expect(child).toHaveBeenCalledTimes(3);
      });
    });

    describe('with from, to as CSS transforms', () => {
      it('should call the function child with the current style (but it does not)', async () => {
        const animationManager = new MockProgressAnimationManager();
        const child = vi.fn();

        const transformOrigin = `100px 50px`;

        render(
          <Animate
            from={{ transform: 'scaleY(0)', transformOrigin }}
            to={{ transform: 'scaleY(1)', transformOrigin }}
            attributeName="transform"
            easing="linear"
            duration={500}
            animationManager={animationManager}
          >
            {child}
          </Animate>,
        );

        expect(child).toHaveBeenLastCalledWith({
          transform: 'scaleY(0)',
          transformOrigin: '100px 50px',
        });
        expect(child).toHaveBeenCalledTimes(1);

        await animationManager.advanceAnimation(0.3);

        // More bugs. NaN instead of interpolated value.
        expect(child).toHaveBeenLastCalledWith({
          transform: 'scaleY(0)NaN',
          transformOrigin: '100px 50pxNaN',
        });

        await animationManager.advanceAnimation(0.7);

        // More bugs. NaN instead of interpolated value.
        expect(child).toHaveBeenLastCalledWith({
          transform: 'scaleY(0)NaN',
          transformOrigin: '100px 50pxNaN',
        });
        expect(child).toHaveBeenCalledTimes(4);
      });
    });
  });

  describe('when child is a react element', () => {
    describe('with from, to as objects', () => {
      it.fails('should clone the child with the current style', async () => {
        const animationManager = new MockProgressAnimationManager();
        const { container } = render(
          <Animate
            from={{ opacity: 1 }}
            to={{ opacity: 0 }}
            easing="linear"
            duration={500}
            animationManager={animationManager}
          >
            <div className="test-child">Test</div>
          </Animate>,
        );

        const clonedChild = container.querySelector('.test-child');
        expect(clonedChild).toHaveStyle({ opacity: '1' });

        // TODO this pathway doesn't animate, it sets a CSS transition so this animation manager doesn't work, we need a new one. Tomorrow.
        await animationManager.advanceAnimation(0.3);

        expect(clonedChild).toHaveStyle({ opacity: '0.7' });

        await animationManager.advanceAnimation(0.7);

        expect(clonedChild).toHaveStyle({ opacity: expect.closeTo(0.3, 5) });
      });
    });
  });
});
