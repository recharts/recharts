import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { noop } from 'es-toolkit';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import configUpdate from './configUpdate';
import { configEasing, EasingInput } from './easing';
import { AnimationManager } from './AnimationManager';
import { useAnimationManager } from './useAnimationManager';

type JavascriptAnimateProps = {
  animationManager?: AnimationManager;
  duration?: number;
  begin?: number;
  easing?: EasingInput;
  isActive?: boolean;
  canBegin?: boolean;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  children: (time: number) => React.ReactNode;
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

type TimeAsObject = {
  t: number;
};

const from: TimeAsObject = { t: 0 };
const to: TimeAsObject = { t: 1 };

export function JavascriptAnimate(outsideProps: JavascriptAnimateProps) {
  const props = resolveDefaultProps(outsideProps, defaultJavascriptAnimateProps);
  const { isActive, canBegin, duration, easing, begin, onAnimationEnd, onAnimationStart, children } = props;

  const animationManager = useAnimationManager('JavascriptAnimate', props.animationManager);

  const [style, setStyle] = useState<TimeAsObject>(isActive ? from : to);
  const stopJSAnimation = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!isActive) {
      setStyle(to);
    }
  }, [isActive]);

  useEffect(() => {
    if (!isActive || !canBegin) {
      return noop;
    }

    const startAnimation = configUpdate<TimeAsObject>(
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
  }, [isActive, canBegin, duration, easing, begin, onAnimationStart, onAnimationEnd, animationManager]);

  return children(style.t);
}
