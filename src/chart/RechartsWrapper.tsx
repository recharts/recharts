import React, { CSSProperties, forwardRef, ReactNode, Ref, useEffect } from 'react';
import clsx from 'clsx';
import { mouseLeaveChart } from '../state/tooltipSlice';
import { setOffset } from '../state/layoutSlice';
import { useAppDispatch } from '../state/hooks';
import { mouseClickAction, mouseMoveAction } from '../state/mouseEventsMiddleware';
import { useSynchronisedEventsFromOtherCharts } from '../synchronisation/useChartSynchronisation';
import { focusAction, keyDownAction } from '../state/keyboardEventsMiddleware';
import { useElementOffset } from '../util/useElementOffset';
import { useReportScale } from '../util/useReportScale';
import { ExternalMouseEvents } from './types';
import { externalEventAction } from '../state/externalEventsMiddleware';

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

const useReportChartOffset = () => {
  const dispatch = useAppDispatch();
  const [lastOffset, setLastOffset] = useElementOffset();
  useEffect(() => {
    dispatch(setOffset(lastOffset));
  }, [dispatch, lastOffset]);
  return setLastOffset;
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

    const setLastOffset = useReportChartOffset();

    const setScaleRef = useReportScale();

    const innerRef = (node: HTMLDivElement | null) => {
      setLastOffset(node);
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
    const myOnTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
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
