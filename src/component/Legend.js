/**
 * @fileOverview Legend
 */
import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import pureRender from '../util/PureRender';
import DefaultLegendContent from './DefaultLegendContent';
import { getStyleString } from '../util/DOMUtils';
import { isNumber } from '../util/DataUtils';

const renderContent = (content, props) => {
  if (React.isValidElement(content)) {
    return React.cloneElement(content, props);
  } else if (_.isFunction(content)) {
    return content(props);
  }

  return React.createElement(DefaultLegendContent, props);
};

@pureRender
class Legend extends Component {
  static displayName = 'Legend';

  static propTypes = {
    content: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    wrapperStyle: PropTypes.object,
    chartWidth: PropTypes.number,
    chartHeight: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    iconSize: PropTypes.number,
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    align: PropTypes.oneOf(['center', 'left', 'right']),
    verticalAlign: PropTypes.oneOf(['top', 'bottom', 'middle']),
    margin: PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number,
      bottom: PropTypes.number,
      right: PropTypes.number,
    }),
    payload: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.any,
      id: PropTypes.any,
      type: PropTypes.oneOf([
        'line', 'square', 'rect', 'circle', 'cross', 'diamond',
        'star', 'triangle', 'wye',
      ]),
    })),
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    iconSize: 14,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'bottom',
  };

  static getWithHeight(item, chartWidth) {
    const { layout } = item.props;

    if (layout === 'vertical' && isNumber(item.props.height)) {
      return {
        height: item.props.height,
      };
    } else if (layout === 'horizontal') {
      return {
        width: item.props.width || chartWidth,
      };
    }

    return null;
  }

  getBBox() {
    if (!this.wrapperNode) { return null; }

    return this.wrapperNode.getBoundingClientRect ? this.wrapperNode.getBoundingClientRect() : null;
  }

  getDefaultPosition(style) {
    const { layout, align, verticalAlign, margin, chartWidth, chartHeight } = this.props;
    let hPos, vPos;

    if (!style || ((style.left === undefined || style.left === null) && (
      style.right === undefined || style.right === null))) {
      if (align === 'center' && layout === 'vertical') {
        const box = this.getBBox() || { width: 0 };
        hPos = { left: ((chartWidth || 0) - box.width) / 2 };
      } else {
        hPos = align === 'right' ?
              { right: (margin && margin.right) || 0 } :
              { left: (margin && margin.left) || 0 };
      }
    }

    if (!style || ((style.top === undefined || style.top === null) && (
      style.bottom === undefined || style.bottom === null))) {
      if (verticalAlign === 'middle') {
        const box = this.getBBox() || { height: 0 };
        vPos = { top: ((chartHeight || 0) - box.height) / 2 };
      } else {
        vPos = verticalAlign === 'bottom' ?
              { bottom: (margin && margin.bottom) || 0 } :
              { top: (margin && margin.top) || 0 };
      }
    }

    return { ...hPos, ...vPos };
  }

  render() {
    const { content, width, height, wrapperStyle } = this.props;
    const outerStyle = {
      position: 'absolute',
      width: width || 'auto',
      height: height || 'auto',
      ...this.getDefaultPosition(wrapperStyle),
      ...wrapperStyle,
    };

    return (
      <div
        className="recharts-legend-wrapper"
        style={outerStyle}
        ref={(node) => { this.wrapperNode = node; }}
      >
        {renderContent(content, this.props)}
      </div>
    );
  }
}

export default Legend;
