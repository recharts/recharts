import * as React from 'react';
import { Component, ReactElement, useEffect } from 'react';
import { clsx } from 'clsx';
import { Layer } from '../container/Layer';
import { ImplicitLabelType, Label } from '../component/Label';
import { createLabeledScales, rectWithPoints } from '../util/CartesianUtils';
import { IfOverflow } from '../util/IfOverflow';
import { isNumOrStr } from '../util/DataUtils';
import { Props as RectangleProps, Rectangle } from '../shape/Rectangle';
import { filterProps } from '../util/ReactUtils';

import { addArea, ReferenceAreaSettings, removeArea } from '../state/referenceElementsSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectAxisScale } from '../state/selectors/axisSelectors';
import { RechartsScale } from '../util/ChartUtils';
import { useIsPanorama } from '../context/PanoramaContext';

import { useClipPathId } from '../container/ClipPathProvider';

interface ReferenceAreaProps {
  ifOverflow?: IfOverflow;
  x1?: number | string;
  x2?: number | string;
  y1?: number | string;
  y2?: number | string;

  className?: number | string;
  yAxisId?: number | string;
  xAxisId?: number | string;
  shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
  label?: ImplicitLabelType;
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
) => {
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

const renderRect = (option: ReferenceAreaProps['shape'], props: any) => {
  let rect;

  if (React.isValidElement(option)) {
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

function ReferenceAreaImpl(props: Props) {
  const { x1, x2, y1, y2, className, shape, xAxisId, yAxisId } = props;
  const clipPathId = useClipPathId();
  const isPanorama = useIsPanorama();
  const xAxisScale = useAppSelector(state => selectAxisScale(state, 'xAxis', xAxisId, isPanorama));
  const yAxisScale = useAppSelector(state => selectAxisScale(state, 'yAxis', yAxisId, isPanorama));

  if (xAxisScale == null || !yAxisScale == null) {
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
    <Layer className={clsx('recharts-reference-area', className)}>
      {renderRect(shape, { clipPath, ...filterProps(props, true), ...rect })}
      {Label.renderCallByParent(props, rect)}
    </Layer>
  );
}

function ReferenceAreaSettingsDispatcher(props: Props) {
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

// eslint-disable-next-line react/prefer-stateless-function
export class ReferenceArea extends Component<Props> {
  static displayName = 'ReferenceArea';

  static defaultProps = {
    ifOverflow: 'discard',
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: '#ccc',
    fillOpacity: 0.5,
    stroke: 'none',
    strokeWidth: 1,
  };

  render() {
    return <ReferenceAreaSettingsDispatcher {...this.props} />;
  }
}
