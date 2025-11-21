import * as React from 'react';
import { ReactElement, useEffect } from 'react';
import { clsx } from 'clsx';
import { Layer } from '../container/Layer';
import { CartesianLabelContextProvider, CartesianLabelFromLabelProp, ImplicitLabelType } from '../component/Label';
import { createLabeledScales, rectWithPoints } from '../util/CartesianUtils';
import { IfOverflow } from '../util/IfOverflow';
import { isNumOrStr } from '../util/DataUtils';
import { Props as RectangleProps, Rectangle } from '../shape/Rectangle';

import { addArea, ReferenceAreaSettings, removeArea } from '../state/referenceElementsSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectAxisScale } from '../state/selectors/axisSelectors';
import { RechartsScale } from '../util/ChartUtils';
import { useIsPanorama } from '../context/PanoramaContext';

import { useClipPathId } from '../container/ClipPathProvider';
import { RectanglePosition } from '../util/types';
import { svgPropertiesAndEvents } from '../util/svgPropertiesAndEvents';
import { RequiresDefaultProps, resolveDefaultProps } from '../util/resolveDefaultProps';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';

interface ReferenceAreaProps extends ZIndexable {
  /**
   * @defaultValue discard
   */
  ifOverflow?: IfOverflow;
  x1?: number | string;
  x2?: number | string;
  y1?: number | string;
  y2?: number | string;

  className?: number | string;
  /**
   * @defaultValue 0
   */
  yAxisId?: number | string;
  /**
   * @defaultValue 0
   */
  xAxisId?: number | string;
  shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
  label?: ImplicitLabelType;
  /**
   * @defaultValue 100
   */
  zIndex?: number;
}

export type Props = RectangleProps & ReferenceAreaProps;

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

  const scales = createLabeledScales({ x: xAxisScale, y: yAxisScale });

  const p1 = {
    x: hasX1 ? scales.x.apply(xValue1, { position: 'start' }) : scales.x.rangeMin,
    y: hasY1 ? scales.y.apply(yValue1, { position: 'start' }) : scales.y.rangeMin,
  };

  const p2 = {
    x: hasX2 ? scales.x.apply(xValue2, { position: 'end' }) : scales.x.rangeMax,
    y: hasY2 ? scales.y.apply(yValue2, { position: 'end' }) : scales.y.rangeMax,
  };

  if (props.ifOverflow === 'discard' && (!scales.isInRange(p1) || !scales.isInRange(p2))) {
    return null;
  }

  return rectWithPoints(p1, p2);
};

const renderRect = (option: ReferenceAreaProps['shape'], props: RectangleProps) => {
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

function ReferenceAreaImpl(props: PropsWithDefaults) {
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

  const isOverflowHidden = props.ifOverflow === 'hidden';
  const clipPath = isOverflowHidden ? `url(#${clipPathId})` : undefined;

  return (
    <ZIndexLayer zIndex={props.zIndex}>
      <Layer className={clsx('recharts-reference-area', className)}>
        {renderRect(shape, { clipPath, ...svgPropertiesAndEvents(props), ...rect })}
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
  fill: '#ccc',
  fillOpacity: 0.5,
  stroke: 'none',
  strokeWidth: 1,
  zIndex: DefaultZIndexes.area,
} as const satisfies Partial<Props>;

type PropsWithDefaults = RequiresDefaultProps<Props, typeof referenceAreaDefaultProps>;

export function ReferenceArea(outsideProps: Props) {
  const props = resolveDefaultProps(outsideProps, referenceAreaDefaultProps);
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
      <ReferenceAreaImpl {...props} />
    </>
  );
}

ReferenceArea.displayName = 'ReferenceArea';
