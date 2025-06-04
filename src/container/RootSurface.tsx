import * as React from 'react';
import { forwardRef, ReactNode } from 'react';
import { useChartHeight, useChartWidth } from '../context/chartLayoutContext';
import { useAccessibilityLayer } from '../context/accessibilityContext';
import { useIsPanorama } from '../context/PanoramaContext';
import { Surface } from './Surface';
import { useAppSelector } from '../state/hooks';
import { selectBrushDimensions } from '../state/selectors/brushSelectors';
import { isPositiveNumber } from '../util/isWellBehavedNumber';

type RootSurfaceProps = {
  children: ReactNode;
  title: string | undefined;
  desc: string | undefined;
  otherAttributes: Record<string, unknown>;
};

const FULL_WIDTH_AND_HEIGHT = { width: '100%', height: '100%' };

const MainChartSurface = forwardRef<SVGSVGElement, RootSurfaceProps>((props: RootSurfaceProps, ref) => {
  const width = useChartWidth();
  const height = useChartHeight();
  const hasAccessibilityLayer = useAccessibilityLayer();

  if (!isPositiveNumber(width) || !isPositiveNumber(height)) {
    return null;
  }

  const { children, otherAttributes, title, desc } = props;

  let tabIndex: number | undefined, role: string | undefined;

  if (typeof otherAttributes.tabIndex === 'number') {
    tabIndex = otherAttributes.tabIndex;
  } else {
    tabIndex = hasAccessibilityLayer ? 0 : undefined;
  }

  if (typeof otherAttributes.role === 'string') {
    role = otherAttributes.role;
  } else {
    role = hasAccessibilityLayer ? 'application' : undefined;
  }

  return (
    <Surface
      {...otherAttributes}
      title={title}
      desc={desc}
      role={role}
      tabIndex={tabIndex}
      width={width}
      height={height}
      style={FULL_WIDTH_AND_HEIGHT}
      ref={ref}
    >
      {children}
    </Surface>
  );
});

const BrushPanoramaSurface = ({ children }: { children: ReactNode }) => {
  const brushDimensions = useAppSelector(selectBrushDimensions);

  if (!brushDimensions) {
    return null;
  }

  const { width, height, y, x } = brushDimensions;

  return (
    <Surface width={width} height={height} x={x} y={y}>
      {children}
    </Surface>
  );
};

export const RootSurface = forwardRef<SVGSVGElement, RootSurfaceProps>(
  ({ children, ...rest }: RootSurfaceProps, ref) => {
    const isPanorama = useIsPanorama();

    if (isPanorama) {
      return <BrushPanoramaSurface>{children}</BrushPanoramaSurface>;
    }
    return (
      <MainChartSurface ref={ref} {...rest}>
        {children}
      </MainChartSurface>
    );
  },
);
