/**
 * @fileOverview Reference Line
 */
import React, { ReactElement, SVGProps } from 'react';
import isFunction from 'lodash/isFunction';
import some from 'lodash/some';
import clsx from 'clsx';
import { Layer } from '../container/Layer';
import { ImplicitLabelType, Label } from '../component/Label';
import { IfOverflow } from '../util/IfOverflow';
import { isNumOrStr } from '../util/DataUtils';
import { createLabeledScales, rectWithCoords } from '../util/CartesianUtils';
import { CartesianViewBox, D3Scale } from '../util/types';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
import { filterProps } from '../util/ReactUtils';
import { useClipPathId, useViewBox, useXAxisOrThrow, useYAxisOrThrow } from '../context/chartLayoutContext';

interface InternalReferenceLineProps {
  viewBox?: CartesianViewBox;
  xAxis?: Omit<XAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  yAxis?: Omit<YAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  clipPathId?: number | string;
}

export type Segment = {
  x?: number | string;
  y?: number | string;
};

export type ReferenceLinePosition = 'middle' | 'start' | 'end';

interface ReferenceLineProps extends InternalReferenceLineProps {
  isFront?: boolean;
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
  } else if (isFunction(option)) {
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

    if (props.ifOverflow === 'discard' && some(points, p => !scales.isInRange(p))) {
      return null;
    }

    return points;
  }

  return null;
};

export function ReferenceLine(props: Props) {
  const { x: fixedX, y: fixedY, segment, xAxisId, yAxisId, shape, className, ifOverflow } = props;

  const clipPathId = useClipPathId();
  const xAxis = useXAxisOrThrow(xAxisId);
  const yAxis = useYAxisOrThrow(yAxisId);
  const viewBox = useViewBox();
  if (!clipPathId || !viewBox) {
    return null;
  }

  const scales = createLabeledScales({ x: xAxis.scale, y: yAxis.scale });

  const isX = isNumOrStr(fixedX);
  const isY = isNumOrStr(fixedY);
  const isSegment = segment && segment.length === 2;

  const endPoints = getEndPoints(
    scales,
    isX,
    isY,
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

ReferenceLine.displayName = 'ReferenceLine';
ReferenceLine.defaultProps = {
  isFront: false,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  fill: 'none',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1,
  position: 'middle',
};
