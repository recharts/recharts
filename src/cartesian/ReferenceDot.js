/**
 * @fileOverview Reference Dot
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import Layer from '../container/Layer';
import Dot from '../shape/Dot';
import { PRESENTATION_ATTRIBUTES, EVENT_ATTRIBUTES,
  getPresentationAttributes, filterEventAttributes } from '../util/ReactUtils';
import Label from '../component/Label';
import { isNumOrStr } from '../util/DataUtils';
import { ifOverflowMatches } from '../util/IfOverflowMatches';
import { LabeledScaleHelper } from '../util/CartesianUtils';
import { warn } from '../util/LogUtils';

class ReferenceDot extends PureComponent {

  static displayName = 'ReferenceDot';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    r: PropTypes.number,

    xAxis: PropTypes.shape({ scale: PropTypes.func }),
    yAxis: PropTypes.shape({ scale: PropTypes.func }),

    isFront: PropTypes.bool,
    alwaysShow: PropTypes.bool,
    ifOverflow: PropTypes.oneOf(['hidden', 'visible', 'discard', 'extendDomain']),
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    className: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    yAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    xAxisId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    shape: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),

    clipPathId: PropTypes.string,
  };

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

  getCoordinate() {
    const { x, y, xAxis, yAxis } = this.props;
    const scales = LabeledScaleHelper.create({ x: xAxis.scale, y: yAxis.scale });

    const result = scales.apply({ x, y }, { bandAware: true });

    if (ifOverflowMatches(this.props, 'discard') &&
      !scales.isInRange(result)) {
      return null;
    }

    return result;
  }

  static renderDot(option, props) {
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
  }

  render() {
    const { x, y, r, alwaysShow, clipPathId } = this.props;
    const isX = isNumOrStr(x);
    const isY = isNumOrStr(y);

    warn(alwaysShow === undefined,
      'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');

    if (!isX || !isY) { return null; }

    const coordinate = this.getCoordinate();

    if (!coordinate) { return null; }

    const { x: cx, y: cy } = coordinate;

    const { shape, className } = this.props;

    const clipPath = ifOverflowMatches(this.props, 'hidden') ?
      `url(#${clipPathId})` :
      undefined;

    const dotProps = {
      clipPath,
      ...getPresentationAttributes(this.props),
      ...filterEventAttributes(this.props),
      cx,
      cy,
    };

    return (
      <Layer className={classNames('recharts-reference-dot', className)}>
        {this.constructor.renderDot(shape, dotProps)}
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

export default ReferenceDot;
