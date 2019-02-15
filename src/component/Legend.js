/**
 * @fileOverview Legend
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import pureRender from '../util/PureRender';
import DefaultLegendContent from './DefaultLegendContent';
import { isNumber } from '../util/DataUtils';
import { LEGEND_TYPES } from '../util/ReactUtils';


const defaultUniqBy = entry => entry.value;
const getUniqPaylod = (option, payload) => {
  if (option === true) {
    return _.uniqBy(payload, defaultUniqBy);
  }

  if (_.isFunction(option)) {
    return _.uniqBy(payload, option);
  }

  return payload;
};

const renderContent = (content, props) => {
  if (React.isValidElement(content)) {
    return React.cloneElement(content, props);
  } if (_.isFunction(content)) {
    return content(props);
  }

  return React.createElement(DefaultLegendContent, props);
};

const EPS = 1;
const ICON_TYPES = LEGEND_TYPES.filter(type => type !== 'none');

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
    iconType: PropTypes.oneOf(ICON_TYPES),
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
      type: PropTypes.oneOf(LEGEND_TYPES),
    })),
    paylodUniqBy: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    formatter: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
    onBBoxUpdate: PropTypes.func,
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
    } if (layout === 'horizontal') {
      return {
        width: item.props.width || chartWidth,
      };
    }

    return null;
  }

  state = {
    boxWidth: -1,
    boxHeight: -1,
  };

  componentDidMount() {
    this.updateBBox();
  }

  componentDidUpdate() {
    this.updateBBox();
  }

  getBBox() {
    const { boxWidth, boxHeight } = this.state;

    if (boxWidth >= 0 && boxHeight >= 0) {
      return { width: boxWidth, height: boxHeight };
    }

    return null;
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

  updateBBox() {
    const { boxWidth, boxHeight } = this.state;
    const { onBBoxUpdate } = this.props;

    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      const box = this.wrapperNode.getBoundingClientRect();

      if (Math.abs(box.width - boxWidth) > EPS || Math.abs(box.height - boxHeight) > EPS) {
        this.setState({
          boxWidth: box.width,
          boxHeight: box.height,
        }, () => {
          if (onBBoxUpdate) {
            onBBoxUpdate(box);
          }
        });
      }
    } else if (boxWidth !== -1 || boxHeight !== -1) {
      this.setState({
        boxWidth: -1,
        boxHeight: -1,
      }, () => {
        if (onBBoxUpdate) {
          onBBoxUpdate(null);
        }
      });
    }
  }

  render() {
    const { content, width, height, wrapperStyle, paylodUniqBy, payload } = this.props;
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
        {renderContent(content, { ...this.props, payload: getUniqPaylod(paylodUniqBy, payload) })}
      </div>
    );
  }
}

export default Legend;
