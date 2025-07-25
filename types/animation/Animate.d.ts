import * as React from 'react';
import { AnimationManager } from './AnimationManager';
import { EasingInput } from './easing';
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
export declare const AnimationManagerContext: React.Context<AnimationManager>;
export declare function Animate(props: AnimateProps): React.JSX.Element;
