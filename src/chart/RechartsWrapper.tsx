import * as React from 'react';
import { CSSProperties, forwardRef, ReactNode, Ref, useState, useCallback } from 'react';
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
import { TooltipPortalContext } from '../context/tooltipPortalContext';
import { LegendPortalContext } from '../context/legendPortalContext';

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
    const [tooltipPortal, setTooltipPortal] = useState<HTMLElement | null>(null);
    const [legendPortal, setLegendPortal] = useState<HTMLElement | null>(null);

    useSynchronisedEventsFromOtherCharts();

    const setScaleRef = useReportScale();

    const innerRef = useCallback(
      (node: HTMLDivElement | null) => {
        setScaleRef(node);
        if (typeof ref === 'function') {
          ref(node);
        }
        setTooltipPortal(node);
        setLegendPortal(node);
      },
      [setScaleRef, ref, setTooltipPortal, setLegendPortal],
    );

    const myOnClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(mouseClickAction(e));
        dispatch(externalEventAction({ handler: onClick, reactEvent: e }));
      },
      [dispatch, onClick],
    );

    const myOnMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(mouseMoveAction(e));
        dispatch(externalEventAction({ handler: onMouseEnter, reactEvent: e }));
      },
      [dispatch, onMouseEnter],
    );

    const myOnMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(mouseLeaveChart());
        dispatch(externalEventAction({ handler: onMouseLeave, reactEvent: e }));
      },
      [dispatch, onMouseLeave],
    );

    const myOnMouseMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(mouseMoveAction(e));
        dispatch(externalEventAction({ handler: onMouseMove, reactEvent: e }));
      },
      [dispatch, onMouseMove],
    );

    const onFocus = useCallback(() => {
      dispatch(focusAction());
    }, [dispatch]);

    const onKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        dispatch(keyDownAction(e.key));
      },
      [dispatch],
    );

    const myOnContextMenu = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(externalEventAction({ handler: onContextMenu, reactEvent: e }));
      },
      [dispatch, onContextMenu],
    );

    const myOnDoubleClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(externalEventAction({ handler: onDoubleClick, reactEvent: e }));
      },
      [dispatch, onDoubleClick],
    );

    const myOnMouseDown = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(externalEventAction({ handler: onMouseDown, reactEvent: e }));
      },
      [dispatch, onMouseDown],
    );

    const myOnMouseUp = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(externalEventAction({ handler: onMouseUp, reactEvent: e }));
      },
      [dispatch, onMouseUp],
    );

    const myOnTouchStart = useCallback(
      (e: React.TouchEvent<HTMLDivElement>) => {
        dispatch(externalEventAction({ handler: onTouchStart, reactEvent: e }));
      },
      [dispatch, onTouchStart],
    );

    /*
     * onTouchMove is special because it behaves different from mouse events.
     * Mouse events have enter + leave combo that notify us when the mouse is over
     * a certain element. Touch events don't have that; touch only gives us
     * start (finger down), end (finger up) and move (finger moving).
     * So we need to figure out which element the user is touching
     * ourselves. Fortunately, there's a convenient method for that:
     * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementFromPoint
     */
    const myOnTouchMove = useCallback(
      (e: React.TouchEvent<HTMLDivElement>) => {
        dispatch(touchEventAction(e));
        dispatch(externalEventAction({ handler: onTouchMove, reactEvent: e }));
      },
      [dispatch, onTouchMove],
    );

    const myOnTouchEnd = useCallback(
      (e: React.TouchEvent<HTMLDivElement>) => {
        dispatch(externalEventAction({ handler: onTouchEnd, reactEvent: e }));
      },
      [dispatch, onTouchEnd],
    );

    return (
      <TooltipPortalContext.Provider value={tooltipPortal}>
        <LegendPortalContext.Provider value={legendPortal}>
          {/* TODO fix these two a11y violations - we should probably add AccessibilityManager in here ? */}
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
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
        </LegendPortalContext.Provider>
      </TooltipPortalContext.Provider>
    );
  },
);
