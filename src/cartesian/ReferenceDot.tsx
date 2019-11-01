/**
 * @fileOverview Reference Dot
 */
import React, { ReactElement } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import Layer from '../container/Layer';
import Dot, { Props as DotProps } from '../shape/Dot';
import Label from '../component/Label';
import { isNumOrStr } from '../util/DataUtils';
import { ifOverflowMatches } from '../util/IfOverflowMatches';
import { createLabeldScales } from '../util/CartesianUtils';
import { warn } from '../util/LogUtils';
import { D3Scale, filterProps } from '../util/types';
import { Props as XAxisProps } from './XAxis';
import { Props as YAxisProps } from './YAxis';

interface InternalReferenceDotProps {
  xAxis?: Omit<XAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  yAxis?: Omit<YAxisProps, 'scale'> & { scale: D3Scale<string | number> };
  clipPathId?: number | string;
}

interface ReferenceDotProps extends InternalReferenceDotProps {
  r?: number;

  isFront?: boolean;
  alwaysShow?: boolean;
  ifOverflow?: 'hidden' | 'visible' | 'discard' | 'extendDomain';
  x?: number | string;
  y?: number | string;

  className?: number | string;
  yAxisId?: number | string;
  xAxisId?: number | string;
  shape?: ReactElement<SVGElement> | ((props: any) => SVGElement);
};

type Props = DotProps & ReferenceDotProps;

const getCoordinate = (props: Props) => {
  const { x, y, xAxis, yAxis } = props;
  const scales = createLabeldScales({ x: xAxis.scale, y: yAxis.scale });

  const result = scales.apply({ x, y }, { bandAware: true });

  if (ifOverflowMatches(props, 'discard') &&
    !scales.isInRange(result)) {
    return null;
  }

  return result;
};

function ReferenceDot(props: Props) {
  const { x, y, r, alwaysShow, clipPathId } = props;
    const isX = isNumOrStr(x);
    const isY = isNumOrStr(y);

    warn(alwaysShow === undefined,
      'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');

    if (!isX || !isY) { return null; }

    const coordinate = getCoordinate(props);

    if (!coordinate) { return null; }

    const { x: cx, y: cy } = coordinate;

    const { shape, className } = props;

    const clipPath = ifOverflowMatches(props, 'hidden') ?
      `url(#${clipPathId})` :
      undefined;

    const dotProps = {
      clipPath,
      ...filterProps(props, true),
      cx,
      cy,
    };

    return (
      <Layer className={classNames('recharts-reference-dot', className)}>
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
  } else if (_.isFunction(option)) {
    dot = option(props);
  } else {
    dot = (
      <Dot
        {...props}
        cx={props.cx}
        cy={props.cy}
        className="recharts-reference-dot-dot"
      />
    );
  }

  return dot;
};

export default ReferenceDot;
