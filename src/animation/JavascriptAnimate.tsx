import * as React from 'react';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { noop } from 'es-toolkit';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import configUpdate from './configUpdate';
import { configEasing, EasingInput } from './easing';
import { AnimationManager } from './AnimationManager';
import { AnimationManagerContext } from './Animate';
import { createDefaultAnimationManager } from './createDefaultAnimationManager';

type JavascriptAnimateProps = {
  animationManager?: AnimationManager;
  from: Record<string, unknown>;
  to: Record<string, unknown>;
  duration?: number;
  begin?: number;
  easing?: EasingInput;
  isActive?: boolean;
  canBegin?: boolean;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  children: (style: Record<string, unknown>) => React.ReactNode;
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

export function JavascriptAnimate(outsideProps: JavascriptAnimateProps) {
  const props = resolveDefaultProps(outsideProps, defaultJavascriptAnimateProps);
  const { isActive, canBegin, from, to, duration, easing, begin, onAnimationEnd, onAnimationStart, children } = props;

  const contextAnimationManager = useContext(AnimationManagerContext);
  const animationManager = useMemo(
    () => props.animationManager ?? contextAnimationManager ?? createDefaultAnimationManager(),
    [props.animationManager, contextAnimationManager],
  );

  const [style, setStyle] = useState(isActive ? from : to);
  const stopJSAnimation = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!isActive) {
      setStyle(to);
    }
  }, [isActive, to]);

  useEffect(() => {
    if (!isActive || !canBegin) {
      return noop;
    }

    const startAnimation = configUpdate(
      from,
      to,
      configEasing(easing),
      duration,
      setStyle,
      animationManager.getTimeoutController(),
    );

    const onAnimationActive = () => {
      stopJSAnimation.current = startAnimation();
    };

    animationManager.start([onAnimationStart, begin, onAnimationActive, duration, onAnimationEnd]);

    return () => {
      animationManager.stop();
      if (stopJSAnimation.current) {
        stopJSAnimation.current();
      }
      onAnimationEnd();
    };
  }, [isActive, canBegin, to, from, duration, easing, begin, onAnimationStart, onAnimationEnd, animationManager]);

  return children(style);
}
