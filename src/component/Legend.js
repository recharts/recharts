/**
 * @fileOverview Legend
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import Surface from '../container/Surface';
import DefaultLegendContent from './DefaultLegendContent';

const SIZE = 32;

@pureRender
class Legend extends Component {
  static displayName = 'Legend';

  static propTypes = {
    content: PropTypes.element,
    wrapperStyle: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number,
    iconSize: PropTypes.number,
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    align: PropTypes.oneOf(['center', 'left', 'right']),
    verticalAlign: PropTypes.oneOf(['top', 'bottom', 'middle']),
    payload: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.any,
      id: PropTypes.any,
      type: PropTypes.oneOf(['line', 'scatter', 'square', 'rect']),
    })),
  };

  static defaultProps = {
    iconSize: 14,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'bottom',
    payload: [],
  };

  static getWithHeight(item, chartWidth, chartHeight) {
    const { layout } = item.props;

    if (layout === 'vertical') {
      return {
        height: item.props.height || chartHeight,
      };
    }

    return {
      width: item.props.width || chartWidth,
    };
  }

  getDefaultPosition(style) {
    const { layout, align, verticalAlign } = this.props;
    let hPos;
    let vPos;

    if (!style || ((style.left === undefined || style.left === null) && (
      style.right === undefined || style.right === null))) {
      hPos = align === 'right' ? { right: 0 } : { left: 0 };
    }

    if (!style || ((style.top === undefined || style.top === null) && (
      style.bottom === undefined || style.bottom === null))) {
      if (layout === 'vertical') {
        vPos = verticalAlign === 'bottom' ? { bottom: 0 } : { top: 0 };
      } else {
        vPos = verticalAlign === 'top' ? { top: 0 } : { bottom: 0 };
      }
    }

    return { ...hPos, ...vPos };
  }

  render() {
    const { content, width, height, layout, wrapperStyle } = this.props;
    const outerStyle = {
      position: 'absolute',
      width: width || 'auto',
      height: height || 'auto',
      ...this.getDefaultPosition(wrapperStyle),
      ...wrapperStyle,
    };

    return (
      <div className="recharts-legend-wrapper" style={outerStyle}>
        {
          React.isValidElement(content) ?
            React.cloneElement(content, this.props) :
            React.createElement(DefaultLegendContent, this.props)
        }
      </div>
    );
  }
}

export default Legend;
