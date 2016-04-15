/**
 * @fileOverview Dot
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import classNames from 'classnames';

@pureRender
class Dot extends Component {
  static displayName = 'Dot';

  static propTypes = {
    className: PropTypes.string,
    shape: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    cx: PropTypes.number,
    cy: PropTypes.number,
    r: PropTypes.number,
  };

  renderCustomizedShape() {
    const { shape } = this.props;

    if (React.isValidElement(shape)) {
      return React.cloneElement(shape, this.props);
    } else if (_.isFunction(shape)) {
      return shape(this.props);
    }

    return null;
  }

  render() {
    const { cx, cy, r, className, shape } = this.props;
    const layerClass = classNames('recharts-dot', className);

    if (cx === +cx && cy === +cy && r === +r) {
      return shape ?
            this.renderCustomizedShape() :
            <circle {...this.props} className={layerClass} />;
    }

    return null;
  }
}

export default Dot;
