/**
 * @fileOverview Reference Line
 */
import * as React from 'react';
import { ReactElement, SVGProps, useEffect } from 'react';
import { clsx } from 'clsx';
import { Layer } from '../container/Layer';
import { CartesianLabelContextProvider, CartesianLabelFromLabelProp, ImplicitLabelType } from '../component/Label';
import { IfOverflow, Overflowable } from '../util/IfOverflow';
import { isNumOrStr } from '../util/DataUtils';
import { rectWithCoords } from '../util/CartesianUtils';
import { CartesianViewBoxRequired, Coordinate } from '../util/types';
import { useViewBox } from '../context/chartLayoutContext';
import { addLine, ReferenceLineSettings, removeLine } from '../state/referenceElementsSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectAxisScale, selectXAxisSettings, selectYAxisSettings } from '../state/selectors/axisSelectors';
import { useIsPanorama } from '../context/PanoramaContext';

import { useClipPathId } from '../container/ClipPathProvider';
import { svgPropertiesAndEvents } from '../util/svgPropertiesAndEvents';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';
import { isWellBehavedNumber } from '../util/isWellBehavedNumber';
import { BandPosition, RechartsScale } from '../util/scale/RechartsScale';
import { CartesianScaleHelper, CartesianScaleHelperImpl } from '../util/scale/CartesianScaleHelper';

/**
 * Single point that defines one end of a segment.
 * These coordinates are in data space, meaning that you should provide
 * values that correspond to the data domain of the axes.
 * So you would provide a value of `Page A` to indicate the data value `Page A`
 * and then recharts will convert that to pixels.
 *
 * Likewise for numbers. If your x-axis goes from 0 to 100,
 * and you want the line to end at 50, you would provide `50` here.
 *
 * @inline
 */
export type ReferenceLineSegment = readonly [
  {
    x?: number | string;
    y?: number | string;
  },
  {
    x?: number | string;
    y?: number | string;
  },
];

type ReferenceCoordinateValue = number | string;

interface ReferenceLineProps<
  XValueType extends ReferenceCoordinateValue = any,
  YValueType extends ReferenceCoordinateValue = any,
>
  extends Overflowable, ZIndexable {
  /**
   * If defined, renders a horizontal line on this position.
   *
   * This value is using your chart's domain, so you will provide a data value instead of a pixel value.
   * ReferenceLine will internally calculate the correct pixel position.
   *
   * @example <ReferenceLine y="Page D" />
   */
  y?: YValueType;

  /**
   * If defined, renders a vertical line on this position.
   *
   * This value is using your chart's domain, so you will provide a data value instead of a pixel value.
   * ReferenceLine will internally calculate the correct pixel position.
   *
   * @example <ReferenceLine x="Monday" />
   */
  x?: XValueType;

  /**
   * Tuple of coordinates. If defined, renders a diagonal line segment.
   */
  segment?: readonly [
    {
      x?: XValueType;
      y?: YValueType;
    },
    {
      x?: XValueType;
      y?: YValueType;
    },
  ];

  /**
   * The position of the reference line when the axis has bandwidth
   * (e.g., a band scale). This determines where within the band
   * the line is drawn.
   * @defaultValue 'middle'
   */
  position?: BandPosition;

  className?: number | string;
  /**
   * The id of y-axis which is corresponding to the data.
   * Required when there are multiple YAxes.
   * @defaultValue 0
   */
  yAxisId?: number | string;
  /**
   * The id of x-axis which is corresponding to the data.
   * Required when there are multiple XAxes.
   * @defaultValue 0
   */
  xAxisId?: number | string;
  shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
  /**
   * Renders a single label.
   *
   * - `false`: no labels are rendered
   * - `string` | `number`: the content of the label
   * - `object`: the props of LabelList component
   * - `ReactElement`: a custom label element
   * - `function`: a render function of custom label
   *
   * @defaultValue false
   *
   * @see {@link https://recharts.github.io/en-US/examples/LineChartWithReferenceLines/ Reference elements with a label}
   */
  label?: ImplicitLabelType;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 400
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
  /**
   * The width of the stroke
   * @defaultValue 1
   */
  strokeWidth?: number | string;
}

/**
 * This excludes `viewBox` prop from svg for two reasons:
 * 1. The components wants viewBox of object type, and svg wants string
 *    - so there's a conflict, and the component will throw if it gets string
 * 2. Internally the component calls `svgPropertiesNoEvents` which filters the viewBox away anyway
 */
export type Props<
  XValueType extends ReferenceCoordinateValue = any,
  YValueType extends ReferenceCoordinateValue = any,
> = Omit<SVGProps<SVGLineElement>, 'viewBox'> & ReferenceLineProps<XValueType, YValueType>;

const renderLine = (option: ReferenceLineProps['shape'], props: SVGProps<SVGLineElement>) => {
  let line;

  if (React.isValidElement(option)) {
    // @ts-expect-error element cloning is not typed
    line = React.cloneElement(option, props);
  } else if (typeof option === 'function') {
    line = option(props);
  } else {
    if (
      !isWellBehavedNumber(props.x1) ||
      !isWellBehavedNumber(props.y1) ||
      !isWellBehavedNumber(props.x2) ||
      !isWellBehavedNumber(props.y2)
    ) {
      return null;
    }
    line = <line {...props} className="recharts-reference-line-line" />;
  }

  return line;
};

type EndPointsPropsSubset = Pick<PropsWithDefaults, 'y' | 'x' | 'segment' | 'ifOverflow'>;

const getHorizontalLineEndPoints = (
  yCoord: number | string,
  ifOverflow: IfOverflow,
  position: Props['position'],
  yAxisOrientation: Props['orientation'],
  yAxisScale: RechartsScale,
  viewBox: CartesianViewBoxRequired,
): ReadonlyArray<Coordinate> | null => {
  const { x, width } = viewBox;
  const coord = yAxisScale.map(yCoord, { position });
  // don't render the line if the scale can't compute a result that makes sense
  if (!isWellBehavedNumber(coord)) {
    return null;
  }

  if (ifOverflow === 'discard' && !yAxisScale.isInRange(coord)) {
    return null;
  }

  const points = [
    { x: x + width, y: coord },
    { x, y: coord },
  ];
  return yAxisOrientation === 'left' ? points.reverse() : points;
};

const getVerticalLineEndPoints = (
  xCoord: number | string,
  ifOverflow: IfOverflow,
  position: Props['position'],
  xAxisOrientation: Props['orientation'],
  xAxisScale: RechartsScale,
  viewBox: CartesianViewBoxRequired,
): ReadonlyArray<Coordinate> | null => {
  const { y, height } = viewBox;
  const coord = xAxisScale.map(xCoord, { position });
  // don't render the line if the scale can't compute a result that makes sense
  if (!isWellBehavedNumber(coord)) {
    return null;
  }

  if (ifOverflow === 'discard' && !xAxisScale.isInRange(coord)) {
    return null;
  }

  const points = [
    { x: coord, y: y + height },
    { x: coord, y },
  ];
  return xAxisOrientation === 'top' ? points.reverse() : points;
};

const getSegmentLineEndPoints = (
  segment: ReferenceLineSegment,
  ifOverflow: IfOverflow,
  position: Props['position'],
  scales: CartesianScaleHelper,
): ReadonlyArray<Coordinate> | null => {
  const points: [Coordinate, Coordinate] = [
    scales.mapWithFallback(segment[0], { position, fallback: 'rangeMin' }),
    scales.mapWithFallback(segment[1], { position, fallback: 'rangeMax' }),
  ];

  if (ifOverflow === 'discard' && points.some(p => !scales.isInRange(p))) {
    return null;
  }

  return points;
};

export const getEndPoints = (
  xAxisScale: RechartsScale,
  yAxisScale: RechartsScale,
  viewBox: CartesianViewBoxRequired,
  position: Props['position'],
  xAxisOrientation: Props['orientation'],
  yAxisOrientation: Props['orientation'],
  props: EndPointsPropsSubset,
): ReadonlyArray<Coordinate> | null => {
  const { x: xCoord, y: yCoord, segment, ifOverflow } = props;
  const isFixedX = isNumOrStr(xCoord);
  const isFixedY = isNumOrStr(yCoord);

  if (isFixedY) {
    return getHorizontalLineEndPoints(yCoord, ifOverflow, position, yAxisOrientation, yAxisScale, viewBox);
  }
  if (isFixedX) {
    return getVerticalLineEndPoints(xCoord, ifOverflow, position, xAxisOrientation, xAxisScale, viewBox);
  }
  if (segment != null && segment.length === 2) {
    return getSegmentLineEndPoints(
      segment,
      ifOverflow,
      position,
      new CartesianScaleHelperImpl({ x: xAxisScale, y: yAxisScale }),
    );
  }

  return null;
};

function ReportReferenceLine(props: ReferenceLineSettings): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addLine(props));
    return () => {
      dispatch(removeLine(props));
    };
  });
  return null;
}

function ReferenceLineImpl(props: PropsWithDefaults) {
  const { xAxisId, yAxisId, shape, className, ifOverflow } = props;

  const isPanorama = useIsPanorama();
  const clipPathId = useClipPathId();
  const xAxis = useAppSelector(state => selectXAxisSettings(state, xAxisId));
  const yAxis = useAppSelector(state => selectYAxisSettings(state, yAxisId));
  const xAxisScale = useAppSelector(state => selectAxisScale(state, 'xAxis', xAxisId, isPanorama));
  const yAxisScale = useAppSelector(state => selectAxisScale(state, 'yAxis', yAxisId, isPanorama));

  const viewBox = useViewBox();

  if (!clipPathId || !viewBox || xAxis == null || yAxis == null || xAxisScale == null || yAxisScale == null) {
    return null;
  }

  const endPoints: ReadonlyArray<Coordinate> | null = getEndPoints(
    xAxisScale,
    yAxisScale,
    viewBox,
    props.position,
    xAxis.orientation,
    yAxis.orientation,
    props,
  );
  if (!endPoints) {
    return null;
  }

  const point1 = endPoints[0];
  const point2 = endPoints[1];
  if (point1 == null || point2 == null) {
    return null;
  }
  const { x: x1, y: y1 } = point1;
  const { x: x2, y: y2 } = point2;

  const clipPath = ifOverflow === 'hidden' ? `url(#${clipPathId})` : undefined;

  const lineProps: SVGProps<SVGLineElement> = {
    clipPath,
    ...svgPropertiesAndEvents(props),
    x1,
    y1,
    x2,
    y2,
  };

  const rect = rectWithCoords({ x1, y1, x2, y2 });

  return (
    <ZIndexLayer zIndex={props.zIndex}>
      <Layer className={clsx('recharts-reference-line', className)}>
        {renderLine(shape, lineProps)}
        <CartesianLabelContextProvider {...rect} lowerWidth={rect.width} upperWidth={rect.width}>
          <CartesianLabelFromLabelProp label={props.label} />
          {props.children}
        </CartesianLabelContextProvider>
      </Layer>
    </ZIndexLayer>
  );
}

export const referenceLineDefaultProps = {
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  fill: 'none',
  label: false,
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1,
  position: 'middle',
  zIndex: DefaultZIndexes.line,
} as const satisfies Partial<Props>;

type PropsWithDefaults = RequiresDefaultProps<Props, typeof referenceLineDefaultProps>;

/**
 * Draws a line on the chart connecting two points.
 *
 * This component, unlike {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/line line}, is aware of the cartesian coordinate system,
 * so you specify the dimensions by using data coordinates instead of pixels.
 *
 * ReferenceLine will calculate the pixels based on the provided data coordinates.
 *
 * If you prefer to render using pixels rather than data coordinates,
 * consider using the {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/line line SVG element} instead.
 *
 * @provides CartesianLabelContext
 * @consumes CartesianChartContext
 */
export function ReferenceLine<
  XValueType extends ReferenceCoordinateValue = any,
  YValueType extends ReferenceCoordinateValue = any,
>(outsideProps: Props<XValueType, YValueType>) {
  const props: PropsWithDefaults = resolveDefaultProps(outsideProps, referenceLineDefaultProps);
  return (
    <>
      <ReportReferenceLine
        yAxisId={props.yAxisId}
        xAxisId={props.xAxisId}
        ifOverflow={props.ifOverflow}
        x={props.x}
        y={props.y}
        segment={props.segment}
      />
      <ReferenceLineImpl {...props} />
    </>
  );
}

ReferenceLine.displayName = 'ReferenceLine';
