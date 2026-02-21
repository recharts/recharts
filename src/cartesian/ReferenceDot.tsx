import * as React from 'react';
import { ReactElement, useEffect } from 'react';
import { clsx } from 'clsx';
import { Layer } from '../container/Layer';
import { Dot, Props as DotProps } from '../shape/Dot';
import { CartesianLabelContextProvider, CartesianLabelFromLabelProp, ImplicitLabelType } from '../component/Label';
import { isNumOrStr } from '../util/DataUtils';
import { IfOverflow, Overflowable } from '../util/IfOverflow';
import { addDot, ReferenceDotSettings, removeDot } from '../state/referenceElementsSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectAxisScale } from '../state/selectors/axisSelectors';
import { useIsPanorama } from '../context/PanoramaContext';

import { useClipPathId } from '../container/ClipPathProvider';
import { svgPropertiesAndEvents } from '../util/svgPropertiesAndEvents';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { AxisId } from '../state/cartesianAxisSlice';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';
import { Coordinate } from '../util/types';
import { CartesianScaleHelperImpl } from '../util/scale/CartesianScaleHelper';

type ReferenceCoordinateValue = number | string;

interface ReferenceDotProps<
  XValueType extends ReferenceCoordinateValue = any,
  YValueType extends ReferenceCoordinateValue = any,
>
  extends Overflowable, ZIndexable {
  /**
   * The radius of the dot in pixels.
   *
   * @defaultValue 10
   */
  r?: number;
  /**
   * The x-coordinate of the center of the dot.
   *
   * This value is using your chart's domain, so you will provide a data value instead of a pixel value.
   * ReferenceDot will internally calculate the correct pixel position.
   *
   * @example <ReferenceDot x="January" y="2026" />
   */
  x?: XValueType;
  /**
   * The y-coordinate of the center of the dot.
   *
   * This value is using your chart's domain, so you will provide a data value instead of a pixel value.
   * ReferenceDot will internally calculate the correct pixel position.
   *
   * @example <ReferenceDot x="January" y="2026" />
   */
  y?: YValueType;

  className?: number | string;
  /**
   * The id of y-axis which is corresponding to the data.
   * Required when there are multiple YAxes.
   *
   * @defaultValue 0
   */
  yAxisId?: number | string;
  /**
   * The id of x-axis which is corresponding to the data.
   * Required when there are multiple XAxes.
   *
   * @defaultValue 0
   */
  xAxisId?: number | string;
  /**
   * If set a ReactElement, the shape of dot can be customized.
   * If set a function, the function will be called to render customized shape.
   */
  shape?: ReactElement<SVGElement> | ((props: DotProps) => ReactElement<SVGElement>);
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
   */
  label?: ImplicitLabelType;

  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 600
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;

  /**
   * The customized event handler of click in this chart.
   */
  onClick?: (dotProps: DotProps, e: React.MouseEvent<SVGCircleElement>) => void;
  /**
   * The customized event handler of mousedown in this chart.
   */
  onMouseDown?: (dotProps: DotProps, e: React.MouseEvent<SVGCircleElement>) => void;
  /**
   * The customized event handler of mouseup in this chart.
   */
  onMouseUp?: (dotProps: DotProps, e: React.MouseEvent<SVGCircleElement>) => void;
  /**
   * The customized event handler of mouseover in this chart.
   */
  onMouseOver?: (dotProps: DotProps, e: React.MouseEvent<SVGCircleElement>) => void;
  /**
   * The customized event handler of mouseout in this chart.
   */
  onMouseOut?: (dotProps: DotProps, e: React.MouseEvent<SVGCircleElement>) => void;
  /**
   * The customized event handler of mouseenter in this chart.
   */
  onMouseEnter?: (dotProps: DotProps, e: React.MouseEvent<SVGCircleElement>) => void;
  /**
   * The customized event handler of mousemove in this chart.
   */
  onMouseMove?: (dotProps: DotProps, e: React.MouseEvent<SVGCircleElement>) => void;
  /**
   * The customized event handler of mouseleave in this chart.
   */
  onMouseLeave?: (dotProps: DotProps, e: React.MouseEvent<SVGCircleElement>) => void;
}

export type Props<
  XValueType extends ReferenceCoordinateValue = any,
  YValueType extends ReferenceCoordinateValue = any,
> = Omit<DotProps, 'cx' | 'cy' | 'clipDot' | 'dangerouslySetInnerHTML'> & ReferenceDotProps<XValueType, YValueType>;

const useCoordinate = (
  x: number | string | undefined,
  y: number | string | undefined,
  xAxisId: AxisId,
  yAxisId: AxisId,
  ifOverflow: IfOverflow,
): Coordinate | null => {
  const isX = isNumOrStr(x);
  const isY = isNumOrStr(y);
  const isPanorama = useIsPanorama();
  const xAxisScale = useAppSelector(state => selectAxisScale(state, 'xAxis', xAxisId, isPanorama));
  const yAxisScale = useAppSelector(state => selectAxisScale(state, 'yAxis', yAxisId, isPanorama));

  if (!isX || !isY || xAxisScale == null || yAxisScale == null) {
    return null;
  }

  const scales = new CartesianScaleHelperImpl({ x: xAxisScale, y: yAxisScale });

  const result = scales.map({ x, y }, { position: 'middle' });

  if (ifOverflow === 'discard' && !scales.isInRange(result)) {
    return null;
  }

  return result;
};

function ReportReferenceDot(props: ReferenceDotSettings): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addDot(props));
    return () => {
      dispatch(removeDot(props));
    };
  });
  return null;
}

const renderDot = (option: Props['shape'], props: DotProps) => {
  let dot;

  if (React.isValidElement(option)) {
    // @ts-expect-error element cloning is not typed
    dot = React.cloneElement(option, props);
  } else if (typeof option === 'function') {
    dot = option(props);
  } else {
    dot = <Dot {...props} cx={props.cx} cy={props.cy} className="recharts-reference-dot-dot" />;
  }

  return dot;
};

function ReferenceDotImpl(props: PropsWithDefaults) {
  const { x, y, r } = props;
  const clipPathId = useClipPathId();

  const coordinate = useCoordinate(x, y, props.xAxisId, props.yAxisId, props.ifOverflow);

  if (!coordinate) {
    return null;
  }

  const { x: cx, y: cy } = coordinate;

  const { shape, className, ifOverflow } = props;

  const clipPath = ifOverflow === 'hidden' ? `url(#${clipPathId})` : undefined;

  const dotProps: DotProps = {
    clipPath,
    ...svgPropertiesAndEvents(props),
    cx: cx ?? undefined,
    cy: cy ?? undefined,
  };

  return (
    <ZIndexLayer zIndex={props.zIndex}>
      <Layer className={clsx('recharts-reference-dot', className)}>
        {renderDot(shape, dotProps)}
        <CartesianLabelContextProvider
          x={cx - r}
          y={cy - r}
          width={2 * r}
          height={2 * r}
          upperWidth={2 * r}
          lowerWidth={2 * r}
        >
          <CartesianLabelFromLabelProp label={props.label} />
          {props.children}
        </CartesianLabelContextProvider>
      </Layer>
    </ZIndexLayer>
  );
}

export const referenceDotDefaultProps = {
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  label: false,
  fill: '#fff',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1,
  zIndex: DefaultZIndexes.scatter,
} as const satisfies Partial<Props>;

type PropsWithDefaults = RequiresDefaultProps<Props, typeof referenceDotDefaultProps>;

/**
 * Draws a circle on the chart to highlight a specific point.
 *
 * This component, unlike {@link Dot} or {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/circle circle}, is aware of the cartesian coordinate system,
 * so you specify its center by using data coordinates instead of pixels.
 *
 * ReferenceDot will calculate the pixels based on the provided data coordinates.
 *
 * If you prefer to render dots using pixels rather than data coordinates,
 * consider using the {@link Dot} component instead.
 *
 * @provides CartesianLabelContext
 * @consumes CartesianChartContext
 */
export function ReferenceDot<
  XValueType extends ReferenceCoordinateValue = any,
  YValueType extends ReferenceCoordinateValue = any,
>(outsideProps: Props<XValueType, YValueType>) {
  const props = resolveDefaultProps(outsideProps, referenceDotDefaultProps);
  const { x, y, r, ifOverflow, yAxisId, xAxisId } = props;
  return (
    <>
      <ReportReferenceDot y={y} x={x} r={r} yAxisId={yAxisId} xAxisId={xAxisId} ifOverflow={ifOverflow} />
      <ReferenceDotImpl {...props} />
    </>
  );
}

ReferenceDot.displayName = 'ReferenceDot';
