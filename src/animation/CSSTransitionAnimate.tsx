import * as React from 'react';
import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { noop } from '../util/DataUtils';
import { AnimationManager, ReactSmoothStyle } from './AnimationManager';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { useAnimationManager } from './useAnimationManager';
import { getTransitionVal, interpolateCSSValue } from './util';
import { Global } from '../util/Global';
import { usePrefersReducedMotion } from '../util/usePrefersReducedMotion';

type CSSTransitionAnimateProps = {
  animationId: string;
  animationManager?: AnimationManager;
  duration?: number;
  begin?: number;
  easing?: string;
  isActive?: boolean | 'auto';
  canBegin?: boolean;
  from: string;
  to: string;
  attributeName: string;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  children: (style: CSSProperties | undefined) => React.ReactNode;
};

const defaultProps = {
  begin: 0,
  duration: 1000,
  easing: 'ease',
  isActive: true,
  canBegin: true,
  onAnimationEnd: () => {},
  onAnimationStart: () => {},
} as const satisfies Partial<CSSTransitionAnimateProps>;

export function CSSTransitionAnimate(outsideProps: CSSTransitionAnimateProps) {
  const props = resolveDefaultProps(outsideProps, defaultProps);
  const {
    animationId,
    from,
    to,
    attributeName,
    isActive: isActiveProp,
    canBegin,
    duration,
    easing,
    begin,
    onAnimationEnd,
    onAnimationStart: onAnimationStartFromProps,
    children,
  } = props;

  const prefersReducedMotion = usePrefersReducedMotion();

  const isActive = isActiveProp === 'auto' ? !Global.isSsr && !prefersReducedMotion : isActiveProp;

  const animationManager = useAnimationManager(animationId + attributeName, props.animationManager);
  const [style, setStyle] = useState<ReactSmoothStyle>(() => {
    if (!isActive) {
      return to;
    }
    return from;
  });
  const initialized = useRef(false);
  const stopJSAnimation = useRef<(() => void) | null>(null);

  const onAnimationStart = useCallback(() => {
    setStyle(from);
    onAnimationStartFromProps();
  }, [from, onAnimationStartFromProps]);

  useEffect(() => {
    if (!isActive || !canBegin) {
      return noop;
    }

    initialized.current = true;

    if (animationManager.isManualControl) {
      /*
       * In manual control mode, CSS transitions can't be scrubbed to an arbitrary progress.
       * Instead, we use JS interpolation driven by the manual timeout controller —
       * the same pattern as JavascriptAnimate.
       */
      const tc = animationManager.getTimeoutController();
      const onAnimationActive = () => {
        let beginTime: number;
        const timingUpdate = (now: number) => {
          if (!beginTime) {
            beginTime = now;
          }
          const animationElapsedTime = Math.min(1, Math.max(0, (now - beginTime) / duration));
          setStyle(interpolateCSSValue(from, to, animationElapsedTime));
          stopJSAnimation.current = tc.setTimeout(timingUpdate);
        };
        stopJSAnimation.current = tc.setTimeout(timingUpdate);
      };

      animationManager.start([onAnimationStart, begin, onAnimationActive, duration, onAnimationEnd]);

      return () => {
        animationManager.stop();
        if (stopJSAnimation.current) {
          stopJSAnimation.current();
        }
        onAnimationEnd();
      };
    }

    const unsubscribe = animationManager.subscribe(setStyle);
    animationManager.start([onAnimationStart, begin, to, duration, onAnimationEnd]);

    return () => {
      animationManager.stop();
      if (unsubscribe) {
        unsubscribe();
      }
      onAnimationEnd();
    };
  }, [isActive, canBegin, duration, easing, begin, onAnimationStart, onAnimationEnd, animationManager, to, from]);

  if (!isActive) {
    return children({
      [attributeName]: to,
    });
  }
  if (!canBegin) {
    return children({
      [attributeName]: from,
    });
  }

  if (initialized.current) {
    if (animationManager.isManualControl) {
      // No CSS transition — the JS interpolation drives the value directly
      return children({
        [attributeName]: style,
      });
    }
    const transition = getTransitionVal([attributeName], duration, easing);
    return children({
      transition,
      [attributeName]: style,
    });
  }
  return children({
    [attributeName]: from,
  });
}
