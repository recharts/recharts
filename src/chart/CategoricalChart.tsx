import * as React from 'react';
import { forwardRef } from 'react';
import { filterProps } from '../util/ReactUtils';
import { RootSurface } from '../container/RootSurface';
import { RechartsWrapper } from './RechartsWrapper';
import { ClipPathProvider } from '../container/ClipPathProvider';
import { CartesianChartProps } from '../util/types';

type CategoricalChartRequiredProps = CartesianChartProps & {
  width: NonNullable<CartesianChartProps['width']>;
  height: NonNullable<CartesianChartProps['height']>;
};

export const CategoricalChart = forwardRef<SVGSVGElement, CategoricalChartRequiredProps>(
  (props: CategoricalChartRequiredProps, ref) => {
    const { children, className, width, height, style, compact, title, desc, ...others } = props;
    const attrs = filterProps(others, false);

    // The "compact" mode is used as the panorama within Brush
    if (compact) {
      return (
        <RootSurface otherAttributes={attrs} title={title} desc={desc}>
          {children}
        </RootSurface>
      );
    }

    return (
      <RechartsWrapper
        className={className}
        style={style}
        width={width}
        height={height}
        onClick={props.onClick}
        onMouseLeave={props.onMouseLeave}
        onMouseEnter={props.onMouseEnter}
        onMouseMove={props.onMouseMove}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        onContextMenu={props.onContextMenu}
        onDoubleClick={props.onDoubleClick}
        onTouchStart={props.onTouchStart}
        onTouchMove={props.onTouchMove}
        onTouchEnd={props.onTouchEnd}
      >
        <RootSurface otherAttributes={attrs} title={title} desc={desc} ref={ref}>
          <ClipPathProvider>{children}</ClipPathProvider>
        </RootSurface>
      </RechartsWrapper>
    );
  },
);
