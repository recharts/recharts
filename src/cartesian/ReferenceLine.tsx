/**
 * @fileOverview Reference Line
 */
import * as React from 'react';
import { Component, ReactElement, SVGProps, useEffect } from 'react';
import { clsx } from 'clsx';
import { Layer } from '../container/Layer';
import { ImplicitLabelType, Label } from '../component/Label';
import { IfOverflow } from '../util/IfOverflow';
import { isNan, isNumOrStr } from '../util/DataUtils';
import { createLabeledScales, rectWithCoords } from '../util/CartesianUtils';
import { CartesianViewBox } from '../util/types';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
import { filterProps } from '../util/ReactUtils';
import { useViewBox } from '../context/chartLayoutContext';
import { addLine, ReferenceLineSettings, removeLine } from '../state/referenceElementsSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import {
  BaseAxisWithScale,
  selectAxisScale,
  selectXAxisSettings,
  selectYAxisSettings,
} from '../state/selectors/axisSelectors';
import { useIsPanorama } from '../context/PanoramaContext';

import { useClipPathId } from '../container/ClipPathProvider';

interface InternalReferenceLineProps {
  viewBox?: CartesianViewBox;
  xAxis?: BaseAxisWithScale;
  yAxis?: BaseAxisWithScale;
  clipPathId?: number | string;
}

export type Segment = {
  x?: number | string;
  y?: number | string;
};

export type ReferenceLinePosition = 'middle' | 'start' | 'end';

interface ReferenceLineProps extends InternalReferenceLineProps {
  ifOverflow?: IfOverflow;

  x?: number | string;
  y?: number | string;

  segment?: ReadonlyArray<Segment>;

  position?: ReferenceLinePosition;

  className?: number | string;
  yAxisId?: number | string;
  xAxisId?: number | string;
  shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
  label?: ImplicitLabelType;
}

/**
 * This excludes `viewBox` prop from svg for two reasons:
 * 1. The components wants viewBox of object type, and svg wants string
 *    - so there's a conflict, and the component will throw if it gets string
 * 2. Internally the component calls `filterProps` which filters the viewBox away anyway
 */
export type Props = Omit<SVGProps<SVGLineElement>, 'viewBox'> & ReferenceLineProps;

const renderLine = (option: ReferenceLineProps['shape'], props: any) => {
  let line;

  if (React.isValidElement(option)) {
    line = React.cloneElement(option, props);
  } else if (typeof option === 'function') {
    line = option(props);
  } else {
    line = <line {...props} className="recharts-reference-line-line" />;
  }

  return line;
};

type EndPointsPropsSubset = {
  ifOverflow?: IfOverflow;
  segment?: ReadonlyArray<Segment>;
  x?: number | string;
  y?: number | string;
};
// TODO: ScaleHelper
export const getEndPoints = (
  scales: any,
  isFixedX: boolean,
  isFixedY: boolean,
  isSegment: boolean,
  viewBox: CartesianViewBox,
  position: Props['position'],
  xAxisOrientation: XAxisProps['orientation'],
  yAxisOrientation: YAxisProps['orientation'],
  props: EndPointsPropsSubset,
) => {
  const { x, y, width, height } = viewBox;

  if (isFixedY) {
    const { y: yCoord } = props;
    const coord = scales.y.apply(yCoord, { position });
    // don't render the line if the scale can't compute a result that makes sense
    if (isNan(coord)) return null;

    if (props.ifOverflow === 'discard' && !scales.y.isInRange(coord)) {
      return null;
    }

    const points = [
      { x: x + width, y: coord },
      { x, y: coord },
    ];
    return yAxisOrientation === 'left' ? points.reverse() : points;
  }
  if (isFixedX) {
    const { x: xCoord } = props;
    const coord = scales.x.apply(xCoord, { position });
    // don't render the line if the scale can't compute a result that makes sense
    if (isNan(coord)) return null;

    if (props.ifOverflow === 'discard' && !scales.x.isInRange(coord)) {
      return null;
    }

    const points = [
      { x: coord, y: y + height },
      { x: coord, y },
    ];
    return xAxisOrientation === 'top' ? points.reverse() : points;
  }
  if (isSegment) {
    const { segment } = props;

    const points = segment.map(p => scales.apply(p, { position }));

    if (props.ifOverflow === 'discard' && points.some(p => !scales.isInRange(p))) {
      return null;
    }

    return points;
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

function ReferenceLineImpl(props: Props) {
  const { x: fixedX, y: fixedY, segment, xAxisId, yAxisId, shape, className, ifOverflow } = props;

  const isPanorama = useIsPanorama();
  const clipPathId = useClipPathId();
  const xAxis = useAppSelector(state => selectXAxisSettings(state, xAxisId));
  const yAxis = useAppSelector(state => selectYAxisSettings(state, yAxisId));
  const xAxisScale = useAppSelector(state => selectAxisScale(state, 'xAxis', xAxisId, isPanorama));
  const yAxisScale = useAppSelector(state => selectAxisScale(state, 'yAxis', yAxisId, isPanorama));

  const viewBox = useViewBox();
  const isFixedX = isNumOrStr(fixedX);
  const isFixedY = isNumOrStr(fixedY);

  if (!clipPathId || !viewBox || xAxis == null || yAxis == null || xAxisScale == null || yAxisScale == null) {
    return null;
  }

  const scales = createLabeledScales({ x: xAxisScale, y: yAxisScale });

  const isSegment = segment && segment.length === 2;

  const endPoints = getEndPoints(
    scales,
    isFixedX,
    isFixedY,
    isSegment,
    viewBox,
    props.position,
    xAxis.orientation,
    yAxis.orientation,
    props,
  );
  if (!endPoints) {
    return null;
  }

  const [{ x: x1, y: y1 }, { x: x2, y: y2 }] = endPoints;

  const clipPath = ifOverflow === 'hidden' ? `url(#${clipPathId})` : undefined;

  const lineProps = {
    clipPath,
    ...filterProps(props, true),
    x1,
    y1,
    x2,
    y2,
  };

  return (
    <Layer className={clsx('recharts-reference-line', className)}>
      {renderLine(shape, lineProps)}
      {Label.renderCallByParent(props, rectWithCoords({ x1, y1, x2, y2 }))}
    </Layer>
  );
}

function ReferenceLineSettingsDispatcher(props: Props) {
  return (
    <>
      <ReportReferenceLine
        yAxisId={props.yAxisId}
        xAxisId={props.xAxisId}
        ifOverflow={props.ifOverflow}
        x={props.x}
        y={props.y}
      />
      <ReferenceLineImpl {...props} />
    </>
  );
}

// eslint-disable-next-line react/prefer-stateless-function
export class ReferenceLine extends Component<Props> {
  static displayName = 'ReferenceLine';

  static defaultProps = {
    ifOverflow: 'discard',
    xAxisId: 0,
    yAxisId: 0,
    fill: 'none',
    stroke: '#ccc',
    fillOpacity: 1,
    strokeWidth: 1,
    position: 'middle',
  };

  render() {
    return <ReferenceLineSettingsDispatcher {...this.props} />;
  }
}
