import { clsx } from 'clsx';
import * as React from 'react';
import { SVGProps } from 'react';
import { polarToCartesian } from '../util/PolarUtils';
import { AxisId } from '../state/cartesianAxisSlice';
import { useAppSelector } from '../state/hooks';
import { selectPolarGridAngles, selectPolarGridRadii } from '../state/selectors/polarGridSelectors';
import { selectPolarViewBox } from '../state/selectors/polarAxisSelectors';
import { PolarViewBoxRequired } from '../util/types';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';

interface PolarGridProps extends ZIndexable {
  cx?: number;
  cy?: number;
  innerRadius?: number;
  outerRadius?: number;
  polarAngles?: ReadonlyArray<number>;
  polarRadius?: ReadonlyArray<number>;
  /**
   * @defaultValue polygon
   */
  gridType?: 'polygon' | 'circle';
  /**
   * @defaultValue true
   */
  radialLines?: boolean;
  /**
   * @defaultValue 0
   */
  angleAxisId?: AxisId;
  /**
   * @defaultValue 0
   */
  radiusAxisId?: AxisId;
}

export type Props = SVGProps<SVGLineElement> & PolarGridProps;

type PropsWithDefaults = Props & {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  polarAngles: ReadonlyArray<number>;
  polarRadius: ReadonlyArray<number>;
};

type ConcentricProps = PropsWithDefaults & {
  // The radius of circle
  radius: number;
};

const getPolygonPath = (radius: number, cx: number, cy: number, polarAngles: ReadonlyArray<number>) => {
  let path = '';

  polarAngles.forEach((angle: number, i: number) => {
    const point = polarToCartesian(cx, cy, radius, angle);

    if (i) {
      path += `L ${point.x},${point.y}`;
    } else {
      path += `M ${point.x},${point.y}`;
    }
  });
  path += 'Z';

  return path;
};

// Draw axis of radial line
const PolarAngles: React.FC<PropsWithDefaults> = (props: PropsWithDefaults) => {
  const { cx, cy, innerRadius, outerRadius, polarAngles, radialLines } = props;

  if (!polarAngles || !polarAngles.length || !radialLines) {
    return null;
  }
  const polarAnglesProps = {
    stroke: '#ccc',
    ...svgPropertiesNoEvents(props),
  };

  return (
    <g className="recharts-polar-grid-angle">
      {polarAngles.map(entry => {
        const start = polarToCartesian(cx, cy, innerRadius, entry);
        const end = polarToCartesian(cx, cy, outerRadius, entry);

        return <line key={`line-${entry}`} {...polarAnglesProps} x1={start.x} y1={start.y} x2={end.x} y2={end.y} />;
      })}
    </g>
  );
};

// Draw concentric circles
const ConcentricCircle: React.FC<ConcentricProps> = props => {
  const { cx, cy, radius } = props;
  const concentricCircleProps = {
    stroke: '#ccc',
    fill: 'none',
    ...svgPropertiesNoEvents(props),
  };

  return (
    // @ts-expect-error wrong SVG element type
    <circle
      {...concentricCircleProps}
      className={clsx('recharts-polar-grid-concentric-circle', props.className)}
      cx={cx}
      cy={cy}
      r={radius}
    />
  );
};

// Draw concentric polygons
const ConcentricPolygon: React.FC<ConcentricProps> = (props: ConcentricProps) => {
  const { radius } = props;
  const concentricPolygonProps = {
    stroke: '#ccc',
    fill: 'none',
    ...svgPropertiesNoEvents(props),
  };

  return (
    <path
      {...concentricPolygonProps}
      className={clsx('recharts-polar-grid-concentric-polygon', props.className)}
      d={getPolygonPath(radius, props.cx, props.cy, props.polarAngles)}
    />
  );
};

// Draw concentric axis
const ConcentricGridPath = (props: PropsWithDefaults) => {
  const { polarRadius, gridType } = props;

  if (!polarRadius || !polarRadius.length) {
    return null;
  }

  const maxPolarRadius: number = Math.max(...polarRadius);
  const renderBackground = props.fill && props.fill !== 'none';

  return (
    <g className="recharts-polar-grid-concentric">
      {/* Render background as separate first child to do not cover strokes of smaller figures */}
      {renderBackground && gridType === 'circle' && <ConcentricCircle {...props} radius={maxPolarRadius} />}
      {renderBackground && gridType !== 'circle' && <ConcentricPolygon {...props} radius={maxPolarRadius} />}

      {polarRadius.map((entry: number, i: number) => {
        const key = i;

        if (gridType === 'circle') {
          return <ConcentricCircle key={key} {...props} fill="none" radius={entry} />;
        }

        return <ConcentricPolygon key={key} {...props} fill="none" radius={entry} />;
      })}
    </g>
  );
};

export const PolarGrid = ({
  gridType = 'polygon',
  radialLines = true,
  angleAxisId = 0,
  radiusAxisId = 0,
  cx: cxFromOutside,
  cy: cyFromOutside,
  innerRadius: innerRadiusFromOutside,
  outerRadius: outerRadiusFromOutside,
  polarAngles: polarAnglesInput,
  polarRadius: polarRadiusInput,
  ...inputs
}: Props) => {
  const polarViewBox: PolarViewBoxRequired | undefined = useAppSelector(selectPolarViewBox);

  const polarAnglesFromRedux = useAppSelector(state => selectPolarGridAngles(state, angleAxisId));
  const polarRadiiFromRedux = useAppSelector(state => selectPolarGridRadii(state, radiusAxisId));

  const polarAngles = Array.isArray(polarAnglesInput) ? polarAnglesInput : polarAnglesFromRedux;
  const polarRadius = Array.isArray(polarRadiusInput) ? polarRadiusInput : polarRadiiFromRedux;

  if (polarAngles == null || polarRadius == null) {
    return null;
  }

  const props: PropsWithDefaults = {
    cx: polarViewBox?.cx ?? cxFromOutside ?? 0,
    cy: polarViewBox?.cy ?? cyFromOutside ?? 0,
    innerRadius: polarViewBox?.innerRadius ?? innerRadiusFromOutside ?? 0,
    outerRadius: polarViewBox?.outerRadius ?? outerRadiusFromOutside ?? 0,
    polarAngles,
    polarRadius,
    ...inputs,
    zIndex: inputs.zIndex ?? DefaultZIndexes.grid,
  };

  const { outerRadius } = props;

  if (outerRadius <= 0) {
    return null;
  }

  return (
    <ZIndexLayer zIndex={props.zIndex}>
      <g className="recharts-polar-grid">
        <ConcentricGridPath
          gridType={gridType}
          radialLines={radialLines}
          {...props}
          polarAngles={polarAngles}
          polarRadius={polarRadius}
        />
        <PolarAngles
          gridType={gridType}
          radialLines={radialLines}
          {...props}
          polarAngles={polarAngles}
          polarRadius={polarRadius}
        />
      </g>
    </ZIndexLayer>
  );
};

PolarGrid.displayName = 'PolarGrid';
