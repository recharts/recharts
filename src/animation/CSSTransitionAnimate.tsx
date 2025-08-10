import * as React from 'react';
import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { noop } from 'es-toolkit';
import { AnimationManager, ReactSmoothStyle } from './AnimationManager';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { useAnimationManager } from './useAnimationManager';
import { getTransitionVal } from './util';

type CSSTransitionAnimateProps<T extends ReactSmoothStyle> = {
  animationId: string;
  animationManager?: AnimationManager;
  duration?: number;
  begin?: number;
  easing?: string;
  isActive?: boolean;
  canBegin?: boolean;
  from: T;
  to: T;
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
} as const satisfies Partial<CSSTransitionAnimateProps<string>>;

export function CSSTransitionAnimate<T extends ReactSmoothStyle>(outsideProps: CSSTransitionAnimateProps<T>) {
  const props = resolveDefaultProps(outsideProps, defaultProps);
  const {
    animationId,
    from,
    to,
    attributeName,
    isActive,
    canBegin,
    duration,
    easing,
    begin,
    onAnimationEnd,
    onAnimationStart: onAnimationStartFromProps,
    children,
  } = props;

  const animationManager = useAnimationManager(animationId + attributeName, props.animationManager);
  const [style, setStyle] = useState<T>(() => {
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
    /*
     * With isActive=false, the component always renders with the final style, immediately,
     * and ignores all other props.
     * Also there is no transition applied.
     */
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
