/**
 * @fileOverview Reference Dot
 */
import React, { ReactElement } from 'react';
import isFunction from 'lodash/isFunction';
import clsx from 'clsx';
import { Layer } from '../container/Layer';
import { Dot, Props as DotProps } from '../shape/Dot';
import { ImplicitLabelType, Label } from '../component/Label';
import { isNumOrStr } from '../util/DataUtils';
import { IfOverflow, ifOverflowMatches } from '../util/IfOverflowMatches';
import { createLabeledScales } from '../util/CartesianUtils';
import { warn } from '../util/LogUtils';
import { D3Scale } from '../util/types';
import { filterProps } from '../util/ReactUtils';
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
  /** @deprecated use ifOverflow="extendDomain"  */
  alwaysShow?: boolean;
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

const getCoordinate = (props: Props) => {
  const { x, y, xAxis, yAxis } = props;
  const scales = createLabeledScales({ x: xAxis.scale, y: yAxis.scale });

  const result = scales.apply({ x, y }, { bandAware: true });

  if (ifOverflowMatches(props, 'discard') && !scales.isInRange(result)) {
    return null;
  }

  return result;
};

// eslint-disable-next-line react/prefer-stateless-function -- requires static defaultProps
export class ReferenceDot extends React.Component<Props> {
  static displayName = 'ReferenceDot';

  static defaultProps = {
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

  static renderDot = (option: Props['shape'], props: any) => {
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

  render() {
    const { x, y, r, alwaysShow, clipPathId } = this.props;
    const isX = isNumOrStr(x);
    const isY = isNumOrStr(y);

    warn(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');

    if (!isX || !isY) {
      return null;
    }

    const coordinate = getCoordinate(this.props);

    if (!coordinate) {
      return null;
    }

    const { x: cx, y: cy } = coordinate;

    const { shape, className } = this.props;

    const clipPath = ifOverflowMatches(this.props, 'hidden') ? `url(#${clipPathId})` : undefined;

    const dotProps = {
      clipPath,
      ...filterProps(this.props, true),
      cx,
      cy,
    };

    return (
      <Layer className={clsx('recharts-reference-dot', className)}>
        {ReferenceDot.renderDot(shape, dotProps)}
        {Label.renderCallByParent(this.props, {
          x: cx - r,
          y: cy - r,
          width: 2 * r,
          height: 2 * r,
        })}
      </Layer>
    );
  }
}
