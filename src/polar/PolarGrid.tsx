/**
 * @fileOverview Polar Grid
 */
import React, { SVGProps } from 'react';
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
    ...filterProps(props),
  };

  return (
    <g className="recharts-polar-grid-angle">
      {polarAngles.map((entry, i) => {
        const start = polarToCartesian(cx, cy, innerRadius, entry);
        const end = polarToCartesian(cx, cy, outerRadius, entry);

        return (
          <line
            {...polarAnglesProps}
            key={`line-${i}`} // eslint-disable-line react/no-array-index-key
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
          />
        );
      })}
    </g>
  );
};

// Draw concentric circles
const ConcentricCircle: React.FC<ConcentricProps> = props => {
  const { cx, cy, radius, index } = props;
  const concentricCircleProps = {
    stroke: '#ccc',
    ...filterProps(props),
    fill: 'none',
  };

  return (
    <circle
      {...concentricCircleProps}
      className="recharts-polar-grid-concentric-circle"
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
    ...filterProps(props),
    fill: 'none',
  };

  return (
    <path
      {...concentricPolygonProps}
      className="recharts-polar-grid-concentric-polygon"
      key={`path-${index}`}
      d={getPolygonPath(radius, props.cx, props.cy, props.polarAngles)}
    />
  );
};

// Draw concentric axis
// TODO Optimize the name
const ConcentricPath: React.FC<Props> = props => {
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

export const PolarGrid = ({
  cx = 0,
  cy = 0,
  innerRadius = 0,
  outerRadius = 0,
  gridType = 'polygon',
  radialLines = true,
  ...props
}: Props) => {
  if (outerRadius <= 0) {
    return null;
  }

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
      />
      <ConcentricPath
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        gridType={gridType}
        radialLines={radialLines}
        {...props}
      />
    </g>
  );
};

PolarGrid.displayName = 'PolarGrid';
