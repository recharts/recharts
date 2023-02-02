/**
 * @fileOverview Reference Line
 */
import React, { ReactElement, SVGProps } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { Layer } from '../container/Layer';
import { ImplicitLabelType, Label } from '../component/Label';
import { ifOverflowMatches } from '../util/IfOverflowMatches';
import { isNumOrStr } from '../util/DataUtils';
import { createLabeledScales, rectWithCoords } from '../util/CartesianUtils';
import { CartesianViewBox, D3Scale } from '../util/types';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';
import { filterProps } from '../util/ReactUtils';

interface InternalReferenceLineProps {
  viewBox?: CartesianViewBox;
  xAxis?: Omit<XAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  yAxis?: Omit<YAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  clipPathId?: number | string;
}

interface ReferenceLineProps extends InternalReferenceLineProps {
  isFront?: boolean;
  ifOverflow?: 'hidden' | 'visible' | 'discard' | 'extendDomain';

  x?: number | string;
  y?: number | string;

  segment?: Array<{
    x?: number | string;
    y?: number | string;
  }>;

  position?: 'middle' | 'start' | 'end';

  className?: number | string;
  yAxisId?: number | string;
  xAxisId?: number | string;
  shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
  label?: ImplicitLabelType;
}

export type Props = SVGProps<SVGLineElement> & ReferenceLineProps;

const renderLine = (option: ReferenceLineProps['shape'], props: any) => {
  let line;

  if (React.isValidElement(option)) {
    line = React.cloneElement(option, props);
  } else if (_.isFunction(option)) {
    line = option(props);
  } else {
    line = <line {...props} className="recharts-reference-line-line" />;
  }

  return line;
};

// TODO: ScaleHelper
const getEndPoints = (scales: any, isFixedX: boolean, isFixedY: boolean, isSegment: boolean, props: Props) => {
  const {
    viewBox: { x, y, width, height },
    position,
  } = props;

  if (isFixedY) {
    const {
      y: yCoord,
      yAxis: { orientation },
    } = props;
    const coord = scales.y.apply(yCoord, { position });

    if (ifOverflowMatches(props, 'discard') && !scales.y.isInRange(coord)) {
      return null;
    }

    const points = [
      { x: x + width, y: coord },
      { x, y: coord },
    ];
    return orientation === 'left' ? points.reverse() : points;
  }
  if (isFixedX) {
    const {
      x: xCoord,
      xAxis: { orientation },
    } = props;
    const coord = scales.x.apply(xCoord, { position });

    if (ifOverflowMatches(props, 'discard') && !scales.x.isInRange(coord)) {
      return null;
    }

    const points = [
      { x: coord, y: y + height },
      { x: coord, y },
    ];
    return orientation === 'top' ? points.reverse() : points;
  }
  if (isSegment) {
    const { segment } = props;

    const points = segment.map(p => scales.apply(p, { position }));

    if (ifOverflowMatches(props, 'discard') && _.some(points, p => !scales.isInRange(p))) {
      return null;
    }

    return points;
  }

  return null;
};

export function ReferenceLine({
  isFront = false,
  ifOverflow = 'discard',
  xAxisId = 0,
  yAxisId = 0,
  position = 'middle',
  fill = 'none',
  fillOpacity = 1,
  stroke = '#ccc',
  strokeWidth = 1,
  ...restProps
}: Props) {
  // Props with default values added.
  const props: Props = {
    isFront,
    ifOverflow,
    xAxisId,
    yAxisId,
    fill,
    stroke,
    fillOpacity,
    strokeWidth,
    position,
    ...restProps,
  };

  const { x: fixedX, y: fixedY, segment, xAxis, yAxis, shape, className, clipPathId } = props;

  const scales = createLabeledScales({ x: xAxis.scale, y: yAxis.scale });

  const isX = isNumOrStr(fixedX);
  const isY = isNumOrStr(fixedY);
  const isSegment = segment && segment.length === 2;

  const endPoints = getEndPoints(scales, isX, isY, isSegment, props);
  if (!endPoints) {
    return null;
  }

  const [{ x: x1, y: y1 }, { x: x2, y: y2 }] = endPoints;

  const clipPath = ifOverflowMatches(props, 'hidden') ? `url(#${clipPathId})` : undefined;

  const lineProps = {
    clipPath,
    ...filterProps(props, true),
    x1,
    y1,
    x2,
    y2,
  };

  return (
    <Layer className={classNames('recharts-reference-line', className)}>
      {renderLine(shape, lineProps)}
      {Label.renderCallByParent(props, rectWithCoords({ x1, y1, x2, y2 }))}
    </Layer>
  );
}

ReferenceLine.displayName = 'ReferenceLine';
