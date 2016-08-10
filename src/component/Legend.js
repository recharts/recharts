/**
 * @fileOverview Legend
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import ReactDOMServer from 'react-dom/server';
import Surface from '../container/Surface';
import DefaultLegendContent from './DefaultLegendContent';
import { getStyleString } from '../util/DOMUtils';
import { isSsr } from '../util/ReactUtils';
import _ from 'lodash';

const SIZE = 32;

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
        'line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square',
        'star', 'triangle', 'wye',
      ]),
    })),
  };

  static defaultProps = {
    iconSize: 14,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'bottom',
  };

  static getWithHeight(item, chartWidth, chartHeight) {
    const { layout } = item.props;

    if (layout === 'vertical' && _.isNumber(item.props.height)) {
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

  static getLegendBBox(props) {
    if (!isSsr()) {
      const { content, width, height, wrapperStyle } = props;
      const contentHtml = ReactDOMServer.renderToStaticMarkup(renderContent(content, props));
      const style = {
        // solve the problem temporarily that the width and height will be affect by the global css
        fontSize: 12,
        position: 'absolute',
        width: width || 'auto',
        height: height || 'auto',
        ...wrapperStyle,
        top: -20000,
        left: 0,
        display: 'block',
      };
      const wrapper = document.createElement('div');

      wrapper.setAttribute('style', getStyleString(style));
      wrapper.innerHTML = contentHtml;
      document.body.appendChild(wrapper);
      const box = wrapper.getBoundingClientRect();

      document.body.removeChild(wrapper);

      return box;
    }

    return null;
  }

  getDefaultPosition(style) {
    const { layout, align, verticalAlign, margin, chartWidth, chartHeight } = this.props;
    let hPos;
    let vPos;

    if (!style || ((style.left === undefined || style.left === null) && (
      style.right === undefined || style.right === null))) {
      if (align === 'center' && layout === 'vertical') {
        const box = Legend.getLegendBBox(this.props) || { width: 0 };
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
        const box = Legend.getLegendBBox(this.props) || { height: 0 };
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
        {renderContent(content, this.props)}
      </div>
    );
  }
}

export default Legend;
