import React, { CSSProperties, DOMAttributes, forwardRef, ReactNode, Ref } from 'react';
import clsx from 'clsx';

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
  ({ children, width, height, className, style, wrapperEvents }: RechartsWrapperProps, ref: Ref<HTMLDivElement>) => (
    <div
      className={clsx('recharts-wrapper', className)}
      style={{ position: 'relative', cursor: 'default', width, height, ...style }}
      {...wrapperEvents}
      ref={ref}
    >
      {children}
    </div>
  ),
);
