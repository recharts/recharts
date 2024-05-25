import clsx from 'clsx';
import React, { SVGProps } from 'react';
import { getTicksOfAxis } from '../util/ChartUtils';
import { useArbitraryPolarAngleAxis, useArbitraryPolarRadiusAxis } from '../context/chartLayoutContext';
import { polarToCartesian } from '../util/PolarUtils';
import { filterProps } from '../util/ReactUtils';

interface PolarGridProps {
  cx?: number;
  cy?: number;
  innerRadius?: number;
  outerRadius?: number;
  polarAngles?: number[];
  polarRadius?: number[];
  gridType?: 'polygon' | 'circle';
  radialLines?: boolean;
}

export type Props = SVGProps<SVGPathElement> & PolarGridProps;

type ConcentricProps = Props & {
  // The radius of circle
  radius: number;
  // The index of circle
  index: number;
};

const getPolygonPath = (radius: number, cx: number, cy: number, polarAngles: number[]) => {
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
const PolarAngles: React.FC<Props> = props => {
  const { cx, cy, innerRadius, outerRadius, polarAngles, radialLines } = props;

  if (!polarAngles || !polarAngles.length || !radialLines) {
    return null;
  }
  const polarAnglesProps = {
    stroke: '#ccc',
    ...filterProps(props, false),
  };

  return (
    <g className="recharts-polar-grid-angle">
      {polarAngles.map(entry => {
        const start = polarToCartesian(cx, cy, innerRadius, entry);
        const end = polarToCartesian(cx, cy, outerRadius, entry);

        return <line {...polarAnglesProps} key={`line-${entry}`} x1={start.x} y1={start.y} x2={end.x} y2={end.y} />;
      })}
    </g>
  );
};

// Draw concentric circles
const ConcentricCircle: React.FC<ConcentricProps> = props => {
  const { cx, cy, radius, index } = props;
  const concentricCircleProps = {
    stroke: '#ccc',
    ...filterProps(props, false),
    fill: 'none',
  };

  return (
    <circle
      {...concentricCircleProps}
      className={clsx('recharts-polar-grid-concentric-circle', props.className)}
      key={`circle-${index}`}
      cx={cx}
      cy={cy}
      r={radius}
    />
  );
};

// Draw concentric polygons
const ConcentricPolygon: React.FC<ConcentricProps> = props => {
  const { radius, index } = props;
  const concentricPolygonProps = {
    stroke: '#ccc',
    ...filterProps(props, false),
    fill: 'none',
  };

  return (
    <path
      {...concentricPolygonProps}
      className={clsx('recharts-polar-grid-concentric-polygon', props.className)}
      key={`path-${index}`}
      d={getPolygonPath(radius, props.cx, props.cy, props.polarAngles)}
    />
  );
};

// Draw concentric axis
const ConcentricGridPath: React.FC<Props> = props => {
  const { polarRadius, gridType } = props;

  if (!polarRadius || !polarRadius.length) {
    return null;
  }

  return (
    <g className="recharts-polar-grid-concentric">
      {polarRadius.map((entry: number, i: number) => {
        const key = i;
        if (gridType === 'circle') return <ConcentricCircle key={key} {...props} radius={entry} index={i} />;
        return <ConcentricPolygon key={key} {...props} radius={entry} index={i} />;
      })}
    </g>
  );
};

export const PolarGrid = ({ gridType = 'polygon', radialLines = true, ...inputs }: Props) => {
  const angleAxis = useArbitraryPolarAngleAxis();
  const radiusAxis = useArbitraryPolarRadiusAxis();

  const props = {
    cx: angleAxis?.cx ?? 0,
    cy: angleAxis?.cy ?? 0,
    // @ts-expect-error innerRadius is not defined on PolarAngleAxisProps, but it was cloned from there previously
    innerRadius: angleAxis?.innerRadius ?? 0,
    // @ts-expect-error outerRadius is not defined on PolarAngleAxisProps, but it was cloned from there previously
    outerRadius: angleAxis?.outerRadius ?? 0,
    ...inputs,
  };

  const { polarAngles: polarAnglesInput, polarRadius: polarRadiusInput, cx, cy, innerRadius, outerRadius } = props;

  if (outerRadius <= 0) {
    return null;
  }

  const polarAngles = Array.isArray(polarAnglesInput)
    ? polarAnglesInput
    : // @ts-expect-error the types are not matching here - both named `ticks` but different shape.
      getTicksOfAxis(angleAxis, true)?.map(entry => entry.coordinate);
  const polarRadius = Array.isArray(polarRadiusInput)
    ? polarRadiusInput
    : // @ts-expect-error the types are not matching here - both named `ticks` but different shape.
      getTicksOfAxis(radiusAxis, true)?.map(entry => entry.coordinate);

  return (
    <g className="recharts-polar-grid">
      <PolarAngles
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        gridType={gridType}
        radialLines={radialLines}
        {...props}
        polarAngles={polarAngles}
        polarRadius={polarRadius}
      />
      <ConcentricGridPath
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        gridType={gridType}
        radialLines={radialLines}
        {...props}
        polarAngles={polarAngles}
        polarRadius={polarRadius}
      />
    </g>
  );
};

PolarGrid.displayName = 'PolarGrid';
