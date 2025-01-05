import React, { CSSProperties, DOMAttributes, forwardRef, ReactNode, Ref, useEffect } from 'react';
import clsx from 'clsx';
import { mouseLeaveChart } from '../state/tooltipSlice';
import { setContainer, setOffset } from '../state/layoutSlice';
import { useAppDispatch } from '../state/hooks';
import { mouseClickAction, mouseMoveAction } from '../state/mouseEventsMiddleware';
import { useSynchronisedEventsFromOtherCharts } from '../synchronisation/useChartSynchronisation';
import { focusAction, keyDownAction } from '../state/keyboardEventsMiddleware';
import { useElementOffset } from '../util/useElementOffset';
import { useReportScale } from '../util/useReportScale';

export type RechartsWrapperProps = {
  children: ReactNode;
  width: number;
  height: number;
  className?: string;
  style?: CSSProperties;
  ref?: Ref<HTMLDivElement>;
  wrapperEvents?: DOMAttributes<HTMLDivElement>;
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
  ({ children, width, height, className, style, wrapperEvents }: RechartsWrapperProps, ref: Ref<HTMLDivElement>) => {
    const dispatch = useAppDispatch();

    useSynchronisedEventsFromOtherCharts();

    const setLastOffset = useReportChartOffset();

    const setScaleRef = useReportScale();

    const innerRef = (node: HTMLDivElement | null) => {
      dispatch(setContainer(node));
      setLastOffset(node);
      setScaleRef(node);
      if (typeof ref === 'function') {
        ref(node);
      }
    };
    const myOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
      dispatch(mouseClickAction(e));
      wrapperEvents?.onClick?.(e);
    };
    const myOnMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      dispatch(mouseMoveAction(e));
      wrapperEvents?.onMouseEnter?.(e);
    };
    const myOnMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      // clear tooltip state if things happen to still be visible onMouseLeave of the wrapper
      dispatch(mouseLeaveChart());
      wrapperEvents?.onMouseLeave?.(e);
    };
    const myOnMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      dispatch(mouseMoveAction(e));
      wrapperEvents?.onMouseMove?.(e);
    };
    const onFocus = () => {
      dispatch(focusAction());
    };
    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
      dispatch(keyDownAction(e.key));
    };
    return (
      // TODO fix these two a11y violations - we should probably add AccessibilityManager in here ?
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <div
        className={clsx('recharts-wrapper', className)}
        style={{ position: 'relative', cursor: 'default', width, height, ...style }}
        role="application"
        {...wrapperEvents}
        onClick={myOnClick}
        onMouseMove={myOnMouseMove}
        onMouseEnter={myOnMouseEnter}
        onMouseLeave={myOnMouseLeave}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        ref={innerRef}
      >
        {children}
      </div>
    );
  },
);
