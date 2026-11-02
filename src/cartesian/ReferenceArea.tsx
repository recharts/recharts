import * as React from 'react';
import { ReactElement, useEffect } from 'react';
import { clsx } from 'clsx';
import { Layer } from '../container/Layer';
import { CartesianLabelContextProvider, CartesianLabelFromLabelProp, ImplicitLabelType } from '../component/Label';
import { rectWithPoints } from '../util/CartesianUtils';
import { Overflowable } from '../util/IfOverflow';
import { isNumOrStr } from '../util/DataUtils';
import { Props as RectangleProps, Rectangle } from '../shape/Rectangle';

import { addArea, ReferenceAreaSettings, removeArea } from '../state/referenceElementsSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectAxisScale } from '../state/selectors/axisSelectors';
import { useIsPanorama } from '../context/PanoramaContext';

import { useClipPathId } from '../container/ClipPathProvider';
import { Coordinate, RectanglePosition } from '../util/types';
import { svgPropertiesAndEvents, SVGPropsAndEvents } from '../util/svgPropertiesAndEvents';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';
import { RechartsScale } from '../util/scale/RechartsScale';
import { CartesianScaleHelperImpl } from '../util/scale/CartesianScaleHelper';
import { ColorStyles2D, useThemeFillObject, withFillColor } from '../theme/themeFill';
import { useBackwardsCompatibleTheme } from '../theme/useBackwardsCompatibleTheme';
import { RechartsFill } from '../fill/RechartsFill';
import { splitFill, useFillPaint } from '../fill/fillDefinitions';

type ReferenceCoordinateValue = number | string;

interface ReferenceAreaProps<
  XValueType extends ReferenceCoordinateValue = any,
  YValueType extends ReferenceCoordinateValue = any,
>
  extends Overflowable, ZIndexable {
  /**
   * The fill of the area. Either a color string, or a {@link RechartsFill} object with an SVG definition,
   * such as a pattern or a gradient. Recharts renders the definition with a unique ID.
   * If the fill object has no `color`, the definition gets the theme color.
   *
   * @example <ReferenceArea x1={1} x2={3} fill={{ color: '#ccc', definition: pattern(patterns.diagonal) }} />
   */
  fill?: string | RechartsFill;
  /**
   * Starting X-coordinate of the area.
   * This value is using your chart's domain, so you will provide a data value instead of a pixel value.
   * ReferenceArea will internally calculate the correct pixel position.
   *
   * If undefined then the area will extend to the left edge of the chart plot area.
   *
   * @example <ReferenceArea x1="Monday" x2="Friday" />
   * @example <ReferenceArea x1={10} x2={50} />
   * @example <ReferenceArea x1="Page C" />
   */
  x1?: XValueType;
  /**
   * Ending X-coordinate of the area.
   * This value is using your chart's domain, so you will provide a data value instead of a pixel value.
   * ReferenceArea will internally calculate the correct pixel position.
   *
   * If undefined then the area will extend to the right edge of the chart plot area.
   *
   * @example <ReferenceArea x1="Monday" x2="Friday" />
   * @example <ReferenceArea x1={10} x2={50} />
   * @example <ReferenceArea x2="Page C" />
   */
  x2?: XValueType;
  /**
   * Starting Y-coordinate of the area.
   * This value is using your chart's domain, so you will provide a data value instead of a pixel value.
   * ReferenceArea will internally calculate the correct pixel position.
   *
   * If undefined then the area will extend to the top edge of the chart plot area.
   *
   * @example <ReferenceArea y1={100} y2={500} />
   * @example <ReferenceArea y1="low" y2="high" />
   * @example <ReferenceArea y1={200} />
   */
  y1?: YValueType;
  /**
   * Ending Y-coordinate of the area.
   * This value is using your chart's domain, so you will provide a data value instead of a pixel value.
   * ReferenceArea will internally calculate the correct pixel position.
   *
   * If undefined then the area will extend to the bottom edge of the chart plot area.
   *
   * @example <ReferenceArea y1={100} y2={500} />
   * @example <ReferenceArea y1="low" y2="high" />
   * @example <ReferenceArea y2={400} />
   */
  y2?: YValueType;

  className?: number | string;
  /**
   * The id of YAxis which is corresponding to the data. Required when there are multiple YAxes.
   * @defaultValue 0
   */
  yAxisId?: number | string;
  /**
   * The id of XAxis which is corresponding to the data. Required when there are multiple XAxes.
   * @defaultValue 0
   */
  xAxisId?: number | string;
  /**
   * If set a ReactElement, the shape of the reference area can be customized.
   * If set a function, the function will be called to render customized shape.
   */
  shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
  /**
   * Renders a single label.
   *
   * - `false`: no labels are rendered
   * - `string` | `number`: the content of the label
   * - `object`: the props of a single Label component, such as `value` and `position`
   * - `ReactElement`: a custom SVG label element, such as `<text>` or `<g>`.
   *   HTML elements such as `<div>` are not valid inside the chart SVG and may trigger React DOM warnings.
   * - `function`: a render function of custom label
   *
   * @defaultValue false
   *
   * @example <ReferenceArea x1={10} x2={20} label={{ value: 'Target', position: 'insideTop' }} />
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
   * @defaultValue 100
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
  children?: React.ReactNode;
}

/*
 * Omit width, height, x, y from SVGPropsAndEvents because ReferenceArea receives x1, x2, y1, y2 instead.
 * The position is calculated internally instead.
 */
/**
 * @public
 */
export type Props<
  XValueType extends ReferenceCoordinateValue = any,
  YValueType extends ReferenceCoordinateValue = any,
> = Omit<SVGPropsAndEvents<RectangleProps>, 'width' | 'height' | 'x' | 'y' | 'fill'> &
  ReferenceAreaProps<XValueType, YValueType>;

/**
 * Props after the fill object is split off: `fill` is the base color.
 */
type StringFillProps = Omit<Props, 'fill'> & { fill?: string };

const toCoordinate = (x: number | undefined, y: number | undefined): Coordinate | null =>
  x == null || y == null ? null : { x, y };

const getRect = (
  hasX1: boolean,
  hasX2: boolean,
  hasY1: boolean,
  hasY2: boolean,
  xAxisScale: RechartsScale | undefined,
  yAxisScale: RechartsScale | undefined,
  props: Props,
): RectanglePosition | null => {
  const { x1: xValue1, x2: xValue2, y1: yValue1, y2: yValue2 } = props;

  if (xAxisScale == null || yAxisScale == null) {
    return null;
  }

  const scales = new CartesianScaleHelperImpl({ x: xAxisScale, y: yAxisScale });

  const p1 = toCoordinate(
    hasX1 ? xAxisScale.map(xValue1, { position: 'start' }) : xAxisScale.rangeMin(),
    hasY1 ? yAxisScale.map(yValue1, { position: 'start' }) : yAxisScale.rangeMin(),
  );

  const p2 = toCoordinate(
    hasX2 ? xAxisScale.map(xValue2, { position: 'end' }) : xAxisScale.rangeMax(),
    hasY2 ? yAxisScale.map(yValue2, { position: 'end' }) : yAxisScale.rangeMax(),
  );

  // don't render the area if the scale can't compute a result that makes sense
  if (p1 == null || p2 == null) {
    return null;
  }

  if (props.ifOverflow === 'discard' && (!scales.isInRange(p1) || !scales.isInRange(p2))) {
    return null;
  }

  return rectWithPoints(p1, p2);
};

const renderRect = (option: ReferenceAreaProps['shape'], props: SVGPropsAndEvents<RectangleProps>) => {
  let rect;

  if (React.isValidElement(option)) {
    // @ts-expect-error element cloning is not typed
    rect = React.cloneElement(option, props);
  } else if (typeof option === 'function') {
    rect = option(props);
  } else {
    rect = <Rectangle {...props} className="recharts-reference-area-rect" />;
  }

  return rect;
};

function ReportReferenceArea(props: ReferenceAreaSettings): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addArea(props));
    return () => {
      dispatch(removeArea(props));
    };
  });
  return null;
}

function ReferenceAreaImpl(
  props: PropsWithDefaults & {
    paintFill: string | undefined;
    renderFillDefinition: (bounds: { width: number; height: number } | undefined) => React.ReactNode;
  },
) {
  const { x1, x2, y1, y2, className, shape, xAxisId, yAxisId } = props;
  const clipPathId = useClipPathId();
  const isPanorama = useIsPanorama();
  const xAxisScale = useAppSelector(state => selectAxisScale(state, 'xAxis', xAxisId, isPanorama));
  const yAxisScale = useAppSelector(state => selectAxisScale(state, 'yAxis', yAxisId, isPanorama));
  if (xAxisScale == null || yAxisScale == null) {
    return null;
  }

  const hasX1 = isNumOrStr(x1);
  const hasX2 = isNumOrStr(x2);
  const hasY1 = isNumOrStr(y1);
  const hasY2 = isNumOrStr(y2);

  if (!hasX1 && !hasX2 && !hasY1 && !hasY2 && !shape) {
    return null;
  }

  const rect = getRect(hasX1, hasX2, hasY1, hasY2, xAxisScale, yAxisScale, props);

  if (!rect && !shape) {
    return null;
  }

  // the definition paints this one rectangle
  const fillDefinition = props.renderFillDefinition(
    rect == null ? undefined : { width: Math.abs(rect.width), height: Math.abs(rect.height) },
  );
  const isOverflowHidden = props.ifOverflow === 'hidden';
  const clipPath = isOverflowHidden ? `url(#${clipPathId})` : undefined;

  return (
    <ZIndexLayer zIndex={props.zIndex}>
      <Layer className={clsx('recharts-reference-area', className)}>
        {fillDefinition != null && <defs>{fillDefinition}</defs>}
        {renderRect(shape, { clipPath, ...svgPropertiesAndEvents(props), fill: props.paintFill, ...rect })}
        {rect != null && (
          <CartesianLabelContextProvider {...rect} lowerWidth={rect.width} upperWidth={rect.width}>
            <CartesianLabelFromLabelProp label={props.label} />
            {props.children}
          </CartesianLabelContextProvider>
        )}
      </Layer>
    </ZIndexLayer>
  );
}

export const referenceAreaDefaultProps = {
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  radius: 0,
  label: false,
  zIndex: DefaultZIndexes.area,
} as const satisfies Partial<Props>;

const defaultLegacyReferenceAreaThemeProps: ColorStyles2D = {
  fill: '#ccc',
  fillOpacity: 0.5,
  stroke: 'none',
  strokeWidth: 1,
};

type PropsWithDefaults = RequiresDefaultProps<StringFillProps, typeof referenceAreaDefaultProps>;

/**
 * Draws a rectangular area on the chart to highlight a specific range.
 *
 * This component, unlike {@link Rectangle} or {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/rect rect}, is aware of the cartesian coordinate system,
 * so you specify the area by using data coordinates instead of pixels.
 *
 * ReferenceArea will calculate the pixels based on the provided data coordinates.
 *
 * If you prefer to render rectangles using pixels rather than data coordinates,
 * consider using the {@link Rectangle} component instead.
 *
 * @provides CartesianLabelContext
 * @consumes CartesianChartContext
 * @public
 */
export function ReferenceArea<
  XValueType extends ReferenceCoordinateValue = any,
  YValueType extends ReferenceCoordinateValue = any,
>(propsWithFillObject: Props<XValueType, YValueType>) {
  // From here on, `fill` is the base color
  const outsideProps: StringFillProps = { ...propsWithFillObject, fill: splitFill(propsWithFillObject.fill).color };
  const themeProps = useBackwardsCompatibleTheme(
    theme => withFillColor(theme.reference),
    outsideProps,
    defaultLegacyReferenceAreaThemeProps,
  );
  const props: PropsWithDefaults = resolveDefaultProps({ ...outsideProps, ...themeProps }, referenceAreaDefaultProps);
  // Without a fill of its own, the area paints with the fill object of the theme, if there is one
  const themeFillObject = useThemeFillObject(theme => theme.reference);
  const { paint, renderDefinition } = useFillPaint(
    propsWithFillObject.fill ?? themeFillObject,
    props.fill,
    'recharts-reference-area-fill',
  );
  return (
    <>
      <ReportReferenceArea
        yAxisId={props.yAxisId}
        xAxisId={props.xAxisId}
        ifOverflow={props.ifOverflow}
        x1={props.x1}
        x2={props.x2}
        y1={props.y1}
        y2={props.y2}
      />
      <ReferenceAreaImpl {...props} paintFill={paint} renderFillDefinition={renderDefinition} />
    </>
  );
}

ReferenceArea.displayName = 'ReferenceArea';
