import { clsx } from 'clsx';
import * as React from 'react';
import { SVGProps } from 'react';
import { polarToCartesian } from '../util/PolarUtils';
import { AxisId } from '../state/cartesianAxisSlice';
import { useAppSelector } from '../state/hooks';
import { selectPolarGridAngles, selectPolarGridRadii } from '../state/selectors/polarGridSelectors';
import { selectPolarViewBox } from '../state/selectors/polarAxisSelectors';
import { Percent, PolarViewBoxRequired } from '../util/types';
import { getPercentValue } from '../util/DataUtils';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { useBackwardsCompatibleTheme } from '../theme/useBackwardsCompatibleTheme';
import { ColorStyles2D, useThemeFillObject, withFillColor } from '../theme/themeFill';
import { RechartsFill } from '../fill/RechartsFill';
import { splitFill, useFillPaint } from '../fill/fillDefinitions';

interface PolarGridProps extends ZIndexable {
  /**
   * The x-coordinate of center.
   * When used inside a chart context, this prop is calculated based on the chart's dimensions,
   * and this prop is ignored.
   *
   * This is only used when rendered outside a chart context.
   */
  cx?: number;
  /**
   * The y-coordinate of center.
   * When used inside a chart context, this prop is calculated based on the chart's dimensions,
   * and this prop is ignored.
   *
   * This is only used when rendered outside a chart context.
   */
  cy?: number;
  /**
   * The radius of the inner polar grid.
   * When used inside a chart context, this prop is calculated based on the chart's dimensions,
   * and this prop is ignored.
   *
   * This is only used when rendered outside a chart context.
   */
  innerRadius?: number;
  /**
   * The radius of the outer polar grid.
   * When used inside a chart context, this prop is calculated based on the chart's dimensions,
   * and this prop is ignored.
   *
   * This is only used when rendered outside a chart context.
   */
  outerRadius?: number;
  /**
   * The array of every line grid's angle.
   */
  polarAngles?: ReadonlyArray<number>;
  /**
   * The array of every circle grid's radius.
   *
   * A number is the radius in pixels.
   * A percentage string such as `'50%'` is relative to the outer radius of the grid,
   * so `'100%'` draws the outermost circle and the grid keeps its proportions when the chart is resized.
   * For example, `polarRadius={['25%', '50%', '75%', '100%']}` draws four evenly spaced circles.
   * Numbers and percentages can be mixed.
   */
  polarRadius?: ReadonlyArray<number | Percent>;
  /**
   * The type of polar grids.
   * @defaultValue polygon
   */
  gridType?: 'polygon' | 'circle';
  /**
   * Whether to render the radial lines extending from the inner radius to the outer edge at each angle.
   * When false, only the circular or polygonal grid lines are rendered.
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
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue -100
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
  /**
   * The stroke color. If "none", no line will be drawn.
   */
  stroke?: string;
  /**
   * The width of the stroke.
   */
  strokeWidth?: number | string;
  /**
   * The pattern of dashes and gaps used to paint the lines of the grid.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray stroke-dasharray on MDN}
   */
  strokeDasharray?: string | number;
  /**
   * The background used to fill the space between grid lines: a color, or a {@link RechartsFill} object
   * with an SVG definition, such as a pattern or a gradient.
   *
   * @example <PolarGrid fill={{ color: '#eee', definition: pattern(patterns.dots) }} />
   */
  fill?: string | RechartsFill;
  /**
   * The opacity of the background used to fill the space between grid lines.
   */
  fillOpacity?: number | string;
}

/**
 * @public
 */
export type Props = Omit<SVGProps<SVGLineElement>, 'fill'> & PolarGridProps;

/**
 * Props after the fill is resolved: `fill` is a color or a `url(#…)`.
 */
type StringFillProps = Omit<Props, 'fill'> & { fill?: string };

type PropsWithDefaults = Omit<StringFillProps, 'polarRadius'> & {
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

/**
 * Default styling that was applied before themes existed
 */
const defaultLegacyThemeProps: ColorStyles2D = {
  stroke: '#ccc',
  strokeWidth: 1,
  fill: 'none',
};

export const defaultPolarGridProps = {
  angleAxisId: 0,
  radiusAxisId: 0,
  gridType: 'polygon',
  radialLines: true,
  zIndex: DefaultZIndexes.grid,
} as const satisfies Partial<Props>;

/**
 * @consumes PolarViewBoxContext
 * @public
 */
export const PolarGrid = (propsWithFillObject: Props) => {
  // From here on, `fill` is the base color
  const outsideProps: StringFillProps = { ...propsWithFillObject, fill: splitFill(propsWithFillObject.fill).color };
  const themeProps = useBackwardsCompatibleTheme(
    theme => withFillColor(theme.grid),
    outsideProps,
    defaultLegacyThemeProps,
  );
  // Without a fill of its own, the grid paints with the fill object of the theme, if there is one
  const themeFillObject = useThemeFillObject(theme => theme.grid);
  const background = useFillPaint(
    propsWithFillObject.fill ?? themeFillObject,
    themeProps.fill,
    'recharts-polar-grid-fill',
  );
  const propsWithTheme: StringFillProps = {
    ...outsideProps,
    ...themeProps,
    // the background paints with the definition
    fill: background.paint,
  };
  const {
    gridType,
    radialLines,
    angleAxisId,
    radiusAxisId,
    cx: cxFromOutside,
    cy: cyFromOutside,
    innerRadius: innerRadiusFromOutside,
    outerRadius: outerRadiusFromOutside,
    polarAngles: polarAnglesInput,
    polarRadius: polarRadiusInput,
    zIndex,
    ...inputs
  } = resolveDefaultProps(propsWithTheme, defaultPolarGridProps);
  const polarViewBox: PolarViewBoxRequired | undefined = useAppSelector(selectPolarViewBox);

  const polarAnglesFromRedux = useAppSelector(state => selectPolarGridAngles(state, angleAxisId));
  const polarRadiiFromRedux = useAppSelector(state => selectPolarGridRadii(state, radiusAxisId));

  const polarAngles = Array.isArray(polarAnglesInput) ? polarAnglesInput : polarAnglesFromRedux;
  const polarRadius = Array.isArray(polarRadiusInput) ? polarRadiusInput : polarRadiiFromRedux;

  if (polarAngles == null || polarRadius == null) {
    return null;
  }

  const outerRadius = polarViewBox?.outerRadius ?? outerRadiusFromOutside ?? 0;

  if (outerRadius <= 0) {
    return null;
  }

  const resolvedPolarRadius = polarRadius.map(radius => getPercentValue(radius, outerRadius));

  const props: PropsWithDefaults = {
    cx: polarViewBox?.cx ?? cxFromOutside ?? 0,
    cy: polarViewBox?.cy ?? cyFromOutside ?? 0,
    innerRadius: polarViewBox?.innerRadius ?? innerRadiusFromOutside ?? 0,
    outerRadius,
    polarAngles,
    polarRadius: resolvedPolarRadius,
    zIndex,
    ...inputs,
  };

  return (
    <ZIndexLayer zIndex={props.zIndex}>
      <g className="recharts-polar-grid">
        {background.definition != null && <defs>{background.definition}</defs>}
        <ConcentricGridPath
          gridType={gridType}
          radialLines={radialLines}
          {...props}
          polarAngles={polarAngles}
          polarRadius={resolvedPolarRadius}
        />
        <PolarAngles
          gridType={gridType}
          radialLines={radialLines}
          {...props}
          polarAngles={polarAngles}
          polarRadius={resolvedPolarRadius}
        />
      </g>
    </ZIndexLayer>
  );
};

PolarGrid.displayName = 'PolarGrid';
