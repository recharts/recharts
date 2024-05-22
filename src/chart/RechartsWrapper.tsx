import React, { CSSProperties, DOMAttributes, forwardRef, ReactNode, Ref } from 'react';
import clsx from 'clsx';
import { setContainer } from '../state/layoutSlice';
import { useAppDispatch } from '../state/hooks';

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
    return (
      <div
        className={clsx('recharts-wrapper', className)}
        style={{ position: 'relative', cursor: 'default', width, height, ...style }}
        role="application"
        {...wrapperEvents}
        ref={innerRef}
      >
        {children}
      </div>
    );
  },
);
