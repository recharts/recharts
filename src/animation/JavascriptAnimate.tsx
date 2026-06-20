import * as React from 'react';
import { useEffect, useState } from 'react';
import { noop } from '../util/DataUtils';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { createEasingFunction, EasingInput } from './easing';
import { useAnimationManager } from './useAnimationManager';
import { Global } from '../util/Global';
import { usePrefersReducedMotion } from '../util/usePrefersReducedMotion';
import { JavascriptAnimation } from './AnimationStateMachine';
import { RequestAnimationFrameTimeoutController } from './timeoutController';
import { AnimationController } from './AnimationController';

type JavascriptAnimateProps = {
  animationId: string;
  animationManager?: AnimationController;
  duration?: number;
  begin?: number;
  easing?: EasingInput;
  isActive?: boolean | 'auto';
  canBegin?: boolean;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  children: (animationElapsedTime: number) => React.ReactNode;
};

const defaultJavascriptAnimateProps = {
  begin: 0,
  duration: 1000,
  easing: 'ease',
  isActive: true,
  canBegin: true,
  onAnimationEnd: () => {},
  onAnimationStart: () => {},
} as const satisfies Partial<JavascriptAnimateProps>;

const from = 0;
const to = 1;

export function JavascriptAnimate(outsideProps: JavascriptAnimateProps) {
  const props = resolveDefaultProps(outsideProps, defaultJavascriptAnimateProps);
  const {
    animationId,
    isActive: isActiveProp,
    canBegin,
    duration,
    easing,
    begin,
    onAnimationEnd,
    onAnimationStart,
    children,
  } = props;

  const prefersReducedMotion = usePrefersReducedMotion();

  const isActive = isActiveProp === 'auto' ? !Global.isSsr && !prefersReducedMotion : isActiveProp;

  const animationManager = useAnimationManager(props.animationManager);
  const [style, setStyle] = useState<number>(isActive ? from : to);

  useEffect(() => {
    if (!isActive) {
      setStyle(to);
    }
  }, [isActive]);

  useEffect(() => {
    const easingFunction = createEasingFunction(easing);

    if (!isActive || !canBegin || easingFunction == null) {
      return noop;
    }

    const timeoutController = new RequestAnimationFrameTimeoutController();

    const animation = new JavascriptAnimation({
      animationId,
      easing: easingFunction,
      animationDuration: duration,
      animationBegin: begin,
      onAnimationStart,
      onAnimationEnd,
      from,
      to,
    });

    return animationManager(timeoutController, animation, setStyle);
  }, [animationManager, animationId, isActive, canBegin, duration, easing, begin, onAnimationStart, onAnimationEnd]);

  return children(style);
}
