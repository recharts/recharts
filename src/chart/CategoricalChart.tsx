import * as React from 'react';
import { forwardRef } from 'react';
import { RootSurface } from '../container/RootSurface';
import { RechartsWrapper } from './RechartsWrapper';
import { ClipPathProvider } from '../container/ClipPathProvider';
import { CartesianChartProps } from '../util/types';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { useChartHeight, useChartWidth } from '../context/chartLayoutContext';

export const CategoricalChart = forwardRef<SVGSVGElement, CartesianChartProps>((props: CartesianChartProps, ref) => {
  const { children, className, style, compact, title, desc, ...others } = props;
  const width = useChartWidth();
  const height = useChartHeight();
  const attrs = svgPropertiesNoEvents(others);

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
});
