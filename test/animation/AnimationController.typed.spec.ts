/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, it } from 'vitest';
import { useCallback } from 'react';
import {
  AnimationController,
  AnimationHandle,
  OnAnimationStateUpdate,
  TimeoutController,
  CancelableTimeout,
} from '../../src';
import { noop } from '../../src/util/DataUtils';

function expectCorrectType(a: AnimationController) {}

describe('AnimationController types', () => {
  it('should compile when all types are defined explicitly', () => {
    const animationController: AnimationController = (
      timeoutController: TimeoutController,
      animationHandle: AnimationHandle,
      listener: OnAnimationStateUpdate,
    ): CancelableTimeout => {
      return noop;
    };
    expectCorrectType(animationController);
  });

  it('should compile when parameters are implicit', () => {
    const animationController: AnimationController = (timeoutController, animationHandle, listener) => {
      return noop;
    };
    expectCorrectType(animationController);
  });

  it('should infer', () => {
    const animationController = (
      timeoutController: TimeoutController,
      animationHandle: AnimationHandle,
      listener: OnAnimationStateUpdate,
    ): CancelableTimeout => {
      return noop;
    };
    expectCorrectType(animationController);
  });

  it('should infer parameters when used inside useCallback', () => {
    const Comp = () => {
      const animationController: AnimationController = useCallback((timeoutController, animationHandle, listener) => {
        return noop;
      }, []);
      expectCorrectType(animationController);
      return null;
    };
  });

  it('should infer parameters when used inside useCallback with generics', () => {
    const Comp = () => {
      const animationController = useCallback<AnimationController>((timeoutController, animationHandle, listener) => {
        return noop;
      }, []);
      expectCorrectType(animationController);
      return null;
    };
  });

  it('should infer whole controller when used inside useCallback with typed parameters', () => {
    const Comp = () => {
      const animationController = useCallback(
        (
          timeoutController: TimeoutController,
          animationHandle: AnimationHandle,
          listener: OnAnimationStateUpdate,
        ): CancelableTimeout => {
          return noop;
        },
        [],
      );
      expectCorrectType(animationController);
      return null;
    };
  });
});
