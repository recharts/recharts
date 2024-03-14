import React, { ReactElement } from 'react';
import isFunction from 'lodash/isFunction';
import clsx from 'clsx';
import { Layer } from '../container/Layer';
import { Dot, Props as DotProps } from '../shape/Dot';
import { ImplicitLabelType, Label } from '../component/Label';
import { isNumOrStr } from '../util/DataUtils';
import { IfOverflow } from '../util/IfOverflow';
import { createLabeledScales } from '../util/CartesianUtils';
import { filterProps } from '../util/ReactUtils';
import { useClipPathId, useXAxisOrThrow, useYAxisOrThrow } from '../context/chartLayoutContext';

interface ReferenceDotProps {
  r?: number;

  isFront?: boolean;
  ifOverflow?: IfOverflow;
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
  const xAxis = useXAxisOrThrow(xAxisId);
  const yAxis = useYAxisOrThrow(yAxisId);
  if (!isX || !isY) {
    return null;
  }

  const scales = createLabeledScales({ x: xAxis.scale, y: yAxis.scale });

  const result = scales.apply({ x, y }, { bandAware: true });

  if (ifOverflow === 'discard' && !scales.isInRange(result)) {
    return null;
  }

  return result;
};

export function ReferenceDot(props: Props) {
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
      {ReferenceDot.renderDot(shape, dotProps)}
      {Label.renderCallByParent(props, {
        x: cx - r,
        y: cy - r,
        width: 2 * r,
        height: 2 * r,
      })}
    </Layer>
  );
}

ReferenceDot.displayName = 'ReferenceDot';
ReferenceDot.defaultProps = {
  isFront: false,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#fff',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1,
};
ReferenceDot.renderDot = (option: Props['shape'], props: any) => {
  let dot;

  if (React.isValidElement(option)) {
    dot = React.cloneElement(option, props);
  } else if (isFunction(option)) {
    dot = option(props);
  } else {
    dot = <Dot {...props} cx={props.cx} cy={props.cy} className="recharts-reference-dot-dot" />;
  }

  return dot;
};
