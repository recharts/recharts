/**
 * @fileOverview Reference Line
 */
import React, { ReactElement } from 'react';
import isFunction from 'lodash/isFunction';
import clsx from 'clsx';
import { Layer } from '../container/Layer';
import { ImplicitLabelType, Label } from '../component/Label';
import { createLabeledScales, rectWithPoints } from '../util/CartesianUtils';
import { IfOverflow } from '../util/IfOverflow';
import { isNumOrStr } from '../util/DataUtils';
import { Rectangle, Props as RectangleProps } from '../shape/Rectangle';
import { D3Scale } from '../util/types';
import { filterProps } from '../util/ReactUtils';

import { useClipPathId, useMaybeXAxis, useMaybeYAxis } from '../context/chartLayoutContext';

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
  xAxis: { scale: D3Scale<string | number> },
  yAxis: { scale: D3Scale<string | number> },
  props: Props,
) => {
  const { x1: xValue1, x2: xValue2, y1: yValue1, y2: yValue2 } = props;

  if (!xAxis || !yAxis) return null;

  const scales = createLabeledScales({ x: xAxis.scale, y: yAxis.scale });

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
  } else if (isFunction(option)) {
    rect = option(props);
  } else {
    rect = <Rectangle {...props} className="recharts-reference-area-rect" />;
  }

  return rect;
};

function ReferenceAreaImpl(props: Props) {
  const { x1, x2, y1, y2, className, shape, xAxisId, yAxisId } = props;
  const clipPathId = useClipPathId();
  const xAxis = useMaybeXAxis(xAxisId);
  const yAxis = useMaybeYAxis(yAxisId);

  if (!xAxis || !yAxis) return null;

  const hasX1 = isNumOrStr(x1);
  const hasX2 = isNumOrStr(x2);
  const hasY1 = isNumOrStr(y1);
  const hasY2 = isNumOrStr(y2);

  if (!hasX1 && !hasX2 && !hasY1 && !hasY2 && !shape) {
    return null;
  }

  // @ts-expect-error the xAxis and yAxis in context do not match what this function is expecting - the whole axis type situation needs improvement
  const rect = getRect(hasX1, hasX2, hasY1, hasY2, xAxis, yAxis, props);

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

// eslint-disable-next-line react/prefer-stateless-function -- requires static defaultProps
export class ReferenceArea extends React.Component<Props> {
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
    return <ReferenceAreaImpl {...this.props} />;
  }
}
