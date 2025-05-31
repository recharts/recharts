import * as React from 'react';
import { Component, ReactElement, useEffect } from 'react';
import { clsx } from 'clsx';
import { Layer } from '../container/Layer';
import { Dot, Props as DotProps } from '../shape/Dot';
import { ImplicitLabelType, Label } from '../component/Label';
import { isNumOrStr } from '../util/DataUtils';
import { IfOverflow } from '../util/IfOverflow';
import { createLabeledScales } from '../util/CartesianUtils';
import { filterProps } from '../util/ReactUtils';
import { addDot, ReferenceDotSettings, removeDot } from '../state/referenceElementsSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectAxisScale } from '../state/selectors/axisSelectors';
import { useIsPanorama } from '../context/PanoramaContext';

import { useClipPathId } from '../container/ClipPathProvider';

interface ReferenceDotProps {
  r?: number;

  ifOverflow?: IfOverflow;
  /**
   * The x-coordinate of the center of the dot.
   * It should match a value from the XAxis, so if the XAxis is a number axis, this should be a number.
   * If the XAxis is a category axis, this should be a string.
   */
  x?: number | string;
  y?: number | string;

  className?: number | string;
  yAxisId?: number | string;
  xAxisId?: number | string;
  shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
  label?: ImplicitLabelType;
}

export type Props = DotProps & ReferenceDotProps;

const useCoordinate = (
  x: number | string | undefined,
  y: number | string | undefined,
  xAxisId: Props['xAxisId'],
  yAxisId: Props['yAxisId'],
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

const renderDot = (option: Props['shape'], props: any) => {
  let dot;

  if (React.isValidElement(option)) {
    dot = React.cloneElement(option, props);
  } else if (typeof option === 'function') {
    dot = option(props);
  } else {
    dot = <Dot {...props} cx={props.cx} cy={props.cy} className="recharts-reference-dot-dot" />;
  }

  return dot;
};

function ReferenceDotImpl(props: Props) {
  const { x, y, r } = props;
  const clipPathId = useClipPathId();

  const coordinate = useCoordinate(x, y, props.xAxisId, props.yAxisId, props.ifOverflow);

  if (!coordinate) {
    return null;
  }

  const { x: cx, y: cy } = coordinate;

  const { shape, className, ifOverflow } = props;

  const clipPath = ifOverflow === 'hidden' ? `url(#${clipPathId})` : undefined;

  const dotProps = {
    clipPath,
    ...filterProps(props, true),
    cx,
    cy,
  };

  return (
    <Layer className={clsx('recharts-reference-dot', className)}>
      {renderDot(shape, dotProps)}
      {Label.renderCallByParent(props, {
        x: cx - r,
        y: cy - r,
        width: 2 * r,
        height: 2 * r,
      })}
    </Layer>
  );
}

function ReferenceDotSettingsDispatcher(props: Props) {
  const { x, y, r, ifOverflow, yAxisId, xAxisId } = props;
  return (
    <>
      <ReportReferenceDot y={y} x={x} r={r} yAxisId={yAxisId} xAxisId={xAxisId} ifOverflow={ifOverflow} />
      <ReferenceDotImpl {...props} />
    </>
  );
}

// eslint-disable-next-line react/prefer-stateless-function
export class ReferenceDot extends Component<Props> {
  static displayName = 'ReferenceDot';

  static defaultProps: Partial<Props> = {
    ifOverflow: 'discard',
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: '#fff',
    stroke: '#ccc',
    fillOpacity: 1,
    strokeWidth: 1,
  };

  render() {
    return <ReferenceDotSettingsDispatcher {...this.props} />;
  }
}
