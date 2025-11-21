import * as React from 'react';
import { ReactElement, useEffect } from 'react';
import { clsx } from 'clsx';
import { Layer } from '../container/Layer';
import { Dot, Props as DotProps } from '../shape/Dot';
import { CartesianLabelContextProvider, CartesianLabelFromLabelProp, ImplicitLabelType } from '../component/Label';
import { isNumOrStr } from '../util/DataUtils';
import { IfOverflow } from '../util/IfOverflow';
import { createLabeledScales } from '../util/CartesianUtils';
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

interface ReferenceDotProps extends ZIndexable {
  /**
   * The radius of the dot.
   *
   * @default 10
   */
  r?: number;

  /**
   * @defaultValue discard
   */
  ifOverflow?: IfOverflow;
  /**
   * The x-coordinate of the center of the dot.
   * It should match a value from the XAxis, so if the XAxis is a number axis, this should be a number.
   * If the XAxis is a category axis, this should be a string.
   */
  x?: number | string;
  y?: number | string;

  className?: number | string;
  /**
   * The id of y-axis which the dot should be attached to.
   *
   * @default 0
   */
  yAxisId?: number | string;
  /**
   * The id of x-axis which the dot should be attached to.
   *
   * @default 0
   */
  xAxisId?: number | string;
  shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
  label?: ImplicitLabelType;
}

export type Props = DotProps & ReferenceDotProps;

const useCoordinate = (
  x: number | string | undefined,
  y: number | string | undefined,
  xAxisId: AxisId,
  yAxisId: AxisId,
  ifOverflow: IfOverflow,
) => {
  const isX = isNumOrStr(x);
  const isY = isNumOrStr(y);
  const isPanorama = useIsPanorama();
  const xAxisScale = useAppSelector(state => selectAxisScale(state, 'xAxis', xAxisId, isPanorama));
  const yAxisScale = useAppSelector(state => selectAxisScale(state, 'yAxis', yAxisId, isPanorama));

  if (!isX || !isY || xAxisScale == null || yAxisScale == null) {
    return null;
  }

  const scales = createLabeledScales({ x: xAxisScale, y: yAxisScale });

  const result = scales.apply({ x, y }, { bandAware: true });

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
    cx,
    cy,
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
  fill: '#fff',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1,
  zIndex: DefaultZIndexes.scatter,
} as const satisfies Partial<Props>;

type PropsWithDefaults = RequiresDefaultProps<Props, typeof referenceDotDefaultProps>;

export function ReferenceDot(outsideProps: Props) {
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
