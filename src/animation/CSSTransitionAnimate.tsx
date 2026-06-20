import * as React from 'react';
import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { noop } from '../util/DataUtils';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { useAnimationManager } from './useAnimationManager';
import { getTransitionVal } from './util';
import { Global } from '../util/Global';
import { usePrefersReducedMotion } from '../util/usePrefersReducedMotion';
import { CSSTransitionAnimation } from './AnimationStateMachine';
import { RequestAnimationFrameTimeoutController } from './timeoutController';
import { EasingInput, NamedBezier } from './easing';
import { AnimationController } from './AnimationController';

type CSSTransitionAnimateProps = {
  animationId: string;
  animationManager?: AnimationController;
  duration?: number;
  begin?: number;
  easing?: NamedBezier;
  isActive?: boolean | 'auto';
  canBegin?: boolean;
  from: string;
  to: string;
  attributeName: string;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  children: (style: CSSProperties) => React.ReactNode;
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

export function extractCssEasing(easingInput: EasingInput): NamedBezier | undefined {
  if (easingInput === 'spring' || typeof easingInput !== 'string') {
    return undefined;
  }
  return easingInput;
}

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

  const animationManager = useAnimationManager(props.animationManager);
  const [style, setStyle] = useState<string>(() => {
    if (!isActive) {
      return to;
    }
    return from;
  });
  const initialized = useRef(false);

  const onAnimationStart = useCallback(() => {
    setStyle(from);
    onAnimationStartFromProps();
  }, [from, onAnimationStartFromProps]);

  useEffect(() => {
    if (!isActive || !canBegin) {
      return noop;
    }

    initialized.current = true;

    const timeoutController = new RequestAnimationFrameTimeoutController();

    const animation = new CSSTransitionAnimation({
      animationId: animationId + attributeName,
      easing,
      animationDuration: duration,
      animationBegin: begin,
      onAnimationStart,
      onAnimationEnd,
      from,
      to,
    });

    return animationManager(timeoutController, animation, setStyle);
  }, [
    isActive,
    canBegin,
    duration,
    easing,
    begin,
    onAnimationStart,
    onAnimationEnd,
    animationManager,
    to,
    from,
    animationId,
    attributeName,
  ]);

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
