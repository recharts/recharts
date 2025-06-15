import * as React from 'react';
import { PureComponent, cloneElement, Children, createContext, useContext } from 'react';
import isEqual from 'es-toolkit/compat/isEqual';
import { AnimationManager, createAnimateManager } from './AnimationManager';
import { configEasing, EasingInput } from './easing';
import configUpdate from './configUpdate';
import { getTransitionVal } from './util';
import { RequestAnimationFrameTimeoutController } from './timeoutController';

export interface AnimateProps {
  from?: Record<string, any>;
  to?: Record<string, any>;
  attributeName?: string;
  duration?: number;
  begin?: number;
  easing?: EasingInput;
  children?: React.ReactNode | ((style: Record<string, any> | string) => React.ReactNode);
  isActive?: boolean;
  canBegin?: boolean;
  onAnimationEnd?: () => void;
  shouldReAnimate?: boolean;
  onAnimationStart?: () => void;
  onAnimationReStart?: () => void;
  /**
   * Controls the timeout for the animation. Defaults to production-ready controller,
   * useful to override for testing or custom timing needs.
   */
  animationManager?: AnimationManager;
}

type AnimateState = {
  style: Record<string, any>;
};

function createDefaultAnimationManager(): AnimationManager {
  return createAnimateManager(new RequestAnimationFrameTimeoutController());
}

class AnimateImpl extends PureComponent<AnimateProps, AnimateState> {
  static displayName = 'Animate';

  static defaultProps: Partial<AnimateProps> = {
    begin: 0,
    duration: 1000,
    attributeName: '',
    easing: 'ease',
    isActive: true,
    canBegin: true,
    onAnimationEnd: () => {},
    onAnimationStart: () => {},
  };

  private mounted: boolean = false;

  private manager: AnimationManager | null = null;

  private stopJSAnimation: () => void | null = null;

  private unSubscribe: (() => void) | null = null;

  constructor(props: AnimateProps, context: any) {
    super(props, context);

    const { isActive, attributeName, from, to, children, duration, animationManager } = this.props;

    this.manager = animationManager;

    this.handleStyleChange = this.handleStyleChange.bind(this);
    this.changeStyle = this.changeStyle.bind(this);

    if (!isActive || duration <= 0) {
      this.state = { style: {} };

      // if children is a function and animation is not active, set style to 'to'
      if (typeof children === 'function') {
        this.state = { style: to };
      }

      return;
    }

    if (from) {
      if (typeof children === 'function') {
        this.state = {
          style: from,
        };

        return;
      }
      this.state = {
        style: attributeName ? { [attributeName]: from } : from,
      };
    } else {
      this.state = { style: {} };
    }
  }

  componentDidMount() {
    const { isActive, canBegin } = this.props;

    this.mounted = true;

    if (!isActive || !canBegin) {
      return;
    }

    this.runAnimation(this.props);
  }

  componentDidUpdate(prevProps: AnimateProps) {
    const { isActive, canBegin, attributeName, shouldReAnimate, to, from: currentFrom } = this.props;
    const { style } = this.state;

    if (!canBegin) {
      return;
    }

    if (!isActive) {
      const newState = {
        style: attributeName ? { [attributeName]: to } : to,
      };
      if (this.state && style) {
        if ((attributeName && style[attributeName] !== to) || (!attributeName && style !== to)) {
          this.setState(newState);
        }
      }
      return;
    }

    if (isEqual(prevProps.to, to) && prevProps.canBegin && prevProps.isActive) {
      return;
    }

    const isTriggered = !prevProps.canBegin || !prevProps.isActive;

    this.manager.stop();

    if (this.stopJSAnimation) {
      this.stopJSAnimation();
    }

    const from = isTriggered || shouldReAnimate ? currentFrom : prevProps.to;

    if (this.state && style) {
      const newState = {
        style: attributeName ? { [attributeName]: from } : from,
      };
      if ((attributeName && style[attributeName] !== from) || (!attributeName && style !== from)) {
        this.setState(newState);
      }
    }

    this.runAnimation({
      ...this.props,
      from,
      begin: 0,
    });
  }

  componentWillUnmount() {
    this.mounted = false;
    const { onAnimationEnd } = this.props;

    if (this.unSubscribe) {
      this.unSubscribe();
    }

    this.manager.stop();

    if (this.stopJSAnimation) {
      this.stopJSAnimation();
    }

    if (onAnimationEnd) {
      onAnimationEnd();
    }
  }

  handleStyleChange(style: any) {
    this.changeStyle(style);
  }

  changeStyle(style: Record<string, any>) {
    if (this.mounted) {
      this.setState({
        style,
      });
    }
  }

  runJSAnimation(props: AnimateProps) {
    const { from, to, duration, easing, begin, onAnimationEnd, onAnimationStart } = props;
    const startAnimation = configUpdate(
      from,
      to,
      configEasing(easing),
      duration,
      this.changeStyle,
      this.manager.getTimeoutController(),
    );

    const finalStartAnimation = () => {
      this.stopJSAnimation = startAnimation();
    };

    this.manager.start([onAnimationStart, begin, finalStartAnimation, duration, onAnimationEnd]);
  }

  runAnimation(props: AnimateProps) {
    const { begin, duration, attributeName, to: propsTo, easing, onAnimationStart, onAnimationEnd, children } = props;

    this.unSubscribe = this.manager.subscribe(this.handleStyleChange);

    if (typeof easing === 'function' || typeof children === 'function' || easing === 'spring') {
      this.runJSAnimation(props);
      return;
    }

    const to = attributeName ? { [attributeName]: propsTo } : propsTo;
    const transition = getTransitionVal(Object.keys(to), duration, easing);

    this.manager.start([onAnimationStart, begin, { ...to, transition }, duration, onAnimationEnd]);
  }

  render() {
    const {
      children,
      begin,
      duration,
      attributeName,
      easing,
      isActive,
      from,
      to,
      canBegin,
      onAnimationEnd,
      shouldReAnimate,
      onAnimationReStart,
      animationManager,
      ...others
    } = this.props;
    const count = Children.count(children);
    const stateStyle = this.state.style;

    if (typeof children === 'function') {
      return children(stateStyle);
    }

    if (!isActive || count === 0 || duration <= 0) {
      return children;
    }

    const cloneContainer = (container: React.ReactElement) => {
      const { style = {}, className } = container.props;

      const res = cloneElement(container, {
        ...others,
        style: {
          ...style,
          ...stateStyle,
        },
        className,
      });
      return res;
    };

    if (count === 1) {
      // @ts-expect-error TODO - fix the type error
      return cloneContainer(Children.only(children));
    }

    // @ts-expect-error TODO - fix the type error
    return <div>{Children.map(children, child => cloneContainer(child))}</div>;
  }
}

export const AnimationManagerContext = createContext<AnimationManager | null>(null);

export function Animate(props: AnimateProps) {
  const contextAnimationManager = useContext(AnimationManagerContext);

  return (
    <AnimateImpl
      {...props}
      animationManager={props.animationManager ?? contextAnimationManager ?? createDefaultAnimationManager()}
    />
  );
}
