import * as React from 'react';
import { CSSProperties, forwardRef, ReactNode, Ref } from 'react';
import { clsx } from 'clsx';
import { mouseLeaveChart } from '../state/tooltipSlice';
import { useAppDispatch } from '../state/hooks';
import { mouseClickAction, mouseMoveAction } from '../state/mouseEventsMiddleware';
import { useSynchronisedEventsFromOtherCharts } from '../synchronisation/useChartSynchronisation';
import { focusAction, keyDownAction } from '../state/keyboardEventsMiddleware';
import { useReportScale } from '../util/useReportScale';
import { ExternalMouseEvents } from './types';
import { externalEventAction } from '../state/externalEventsMiddleware';
import { touchEventAction } from '../state/touchEventsMiddleware';

type Nullable<T> = {
  [P in keyof T]: T[P] | undefined;
};

export type RechartsWrapperProps = Nullable<ExternalMouseEvents> & {
  children: ReactNode;
  width: number;
  height: number;
  className?: string;
  style?: CSSProperties;
  ref?: Ref<HTMLDivElement>;
};

export const RechartsWrapper = forwardRef(
  (
    {
      children,
      className,
      height,
      onClick,
      onContextMenu,
      onDoubleClick,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      onMouseUp,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
      style,
      width,
    }: RechartsWrapperProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const dispatch = useAppDispatch();

    useSynchronisedEventsFromOtherCharts();

    const setScaleRef = useReportScale();

    const innerRef = (node: HTMLDivElement | null) => {
      setScaleRef(node);
      if (typeof ref === 'function') {
        ref(node);
      }
    };
    const myOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
      dispatch(mouseClickAction(e));
      dispatch(externalEventAction({ handler: onClick, reactEvent: e }));
    };
    const myOnMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      dispatch(mouseMoveAction(e));
      dispatch(externalEventAction({ handler: onMouseEnter, reactEvent: e }));
    };
    const myOnMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      // clear tooltip state if things happen to still be visible onMouseLeave of the wrapper
      dispatch(mouseLeaveChart());
      dispatch(externalEventAction({ handler: onMouseLeave, reactEvent: e }));
    };
    const myOnMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      dispatch(mouseMoveAction(e));
      dispatch(externalEventAction({ handler: onMouseMove, reactEvent: e }));
    };
    const onFocus = () => {
      dispatch(focusAction());
    };
    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
      dispatch(keyDownAction(e.key));
    };
    const myOnContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
      dispatch(externalEventAction({ handler: onContextMenu, reactEvent: e }));
    };
    const myOnDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      dispatch(externalEventAction({ handler: onDoubleClick, reactEvent: e }));
    };
    const myOnMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      dispatch(externalEventAction({ handler: onMouseDown, reactEvent: e }));
    };
    const myOnMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
      dispatch(externalEventAction({ handler: onMouseUp, reactEvent: e }));
    };
    const myOnTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
      dispatch(externalEventAction({ handler: onTouchStart, reactEvent: e }));
    };

    /*
     * onTouchMove is special because it behaves different from mouse events.
     * Mouse events have enter + leave combo that notify us when the mouse is over
     * a certain element. Touch events don't have that; touch only gives us
     * start (finger down), end (finger up) and move (finger moving).
     * So we need to figure out which element the user is touching
     * ourselves. Fortunately, there's a convenient method for that:
     * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementFromPoint
     */
    const myOnTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
      dispatch(touchEventAction(e));
      dispatch(externalEventAction({ handler: onTouchMove, reactEvent: e }));
    };
    const myOnTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
      dispatch(externalEventAction({ handler: onTouchEnd, reactEvent: e }));
    };
    return (
      // TODO fix these two a11y violations - we should probably add AccessibilityManager in here ?
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <div
        className={clsx('recharts-wrapper', className)}
        style={{ position: 'relative', cursor: 'default', width, height, ...style }}
        role="application"
        onClick={myOnClick}
        onContextMenu={myOnContextMenu}
        onDoubleClick={myOnDoubleClick}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onMouseDown={myOnMouseDown}
        onMouseEnter={myOnMouseEnter}
        onMouseLeave={myOnMouseLeave}
        onMouseMove={myOnMouseMove}
        onMouseUp={myOnMouseUp}
        onTouchEnd={myOnTouchEnd}
        onTouchMove={myOnTouchMove}
        onTouchStart={myOnTouchStart}
        ref={innerRef}
      >
        {children}
      </div>
    );
  },
);
