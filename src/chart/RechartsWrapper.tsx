import React, { CSSProperties, DOMAttributes, forwardRef, ReactNode, Ref } from 'react';
import clsx from 'clsx';
import { setContainer } from '../state/layoutSlice';
import { useAppDispatch } from '../state/hooks';
import { mouseClickAction, mouseMoveAction } from '../state/mouseEventsMiddleware';

export type RechartsWrapperProps = {
  children: ReactNode;
  width: number;
  height: number;
  className?: string;
  style?: CSSProperties;
  ref?: Ref<HTMLDivElement>;
  wrapperEvents?: DOMAttributes<HTMLDivElement>;
};

export const RechartsWrapper = forwardRef(
  ({ children, width, height, className, style, wrapperEvents }: RechartsWrapperProps, ref: Ref<HTMLDivElement>) => {
    const dispatch = useAppDispatch();
    const innerRef = (node: HTMLDivElement | null) => {
      dispatch(setContainer(node));
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
    const myOnMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      dispatch(mouseMoveAction(e));
      wrapperEvents?.onMouseMove?.(e);
    };
    return (
      // TODO fix these two a11y violations - we should probably add AccessibilityManager in here ?
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
      <div
        className={clsx('recharts-wrapper', className)}
        style={{ position: 'relative', cursor: 'default', width, height, ...style }}
        role="application"
        {...wrapperEvents}
        onClick={myOnClick}
        onMouseMove={myOnMouseMove}
        onMouseEnter={myOnMouseEnter}
        ref={innerRef}
      >
        {children}
      </div>
    );
  },
);
