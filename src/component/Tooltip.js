/**
 * @fileOverview Tooltip
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import ReactDOMServer from 'react-dom/server';
import DefaultTooltipContent from './DefaultTooltipContent';
import { getStyleString } from '../util/DOMUtils';
import { isSsr } from '../util/ReactUtils';
import _ from 'lodash';

const propTypes = {
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  viewBox: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }),

  active: PropTypes.bool,
  separator: PropTypes.string,
  formatter: PropTypes.func,
  offset: PropTypes.number,

  itemStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  wrapperStyle: PropTypes.object,
  cursor: PropTypes.oneOfType([PropTypes.bool, PropTypes.element, PropTypes.object]),

  coordinate: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),

  label: PropTypes.any,
  payload: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.any,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    unit: PropTypes.any,
  })),
};

const defaultProps = {
  active: false,
  offset: 10,
  viewBox: { x1: 0, x2: 0, y1: 0, y2: 0 },
  coordinate: { x: 0, y: 0 },
  cursorStyle: {},
  separator: ' : ',
  wrapperStyle: {},
  itemStyle: {},
  labelStyle: {},
  cursor: true,
};

const getTooltipBBox = (wrapperStyle, contentItem) => {
  if (!isSsr()) {
    const contentHtml = ReactDOMServer.renderToStaticMarkup(contentItem);
    const style = { ...wrapperStyle, top: -20000, left: 0, display: 'block' };

    const wrapper = document.createElement('div');

    wrapper.setAttribute('style', getStyleString(style));
    wrapper.innerHTML = contentHtml;
    document.body.appendChild(wrapper);
    const box = wrapper.getBoundingClientRect();

    document.body.removeChild(wrapper);

    return box;
  }

  return null;
};

const renderContent = (content, props) => {
  if (React.isValidElement(content)) {
     return React.cloneElement(content, props);
  } else if (_.isFunction(content)) {
    return content(props);
  } else {
    return React.createElement(DefaultTooltipContent, props);
  }
};

class Tooltip extends Component {
  static displayName = 'Tooltip';
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  render() {
    const { payload } = this.props;
    if (!payload || !payload.length) {return null;}

    const { content, viewBox, coordinate, active, offset } = this.props;
    const outerStyle = {
      pointerEvents: 'none',
      display: active ? 'block' : 'none',
      position: 'absolute',
    };
    const contentItem = renderContent(content, this.props);
    const box = getTooltipBBox(outerStyle, contentItem);

    if (!box) { return null; }

    outerStyle.left = Math.max(
      coordinate.x + box.width + offset > (viewBox.x + viewBox.width) ?
      coordinate.x - box.width - offset :
      coordinate.x + offset, viewBox.x);
    outerStyle.top = Math.max(
      coordinate.y + box.height + offset > (viewBox.y + viewBox.height) ?
      coordinate.y - box.height - offset :
      coordinate.y + offset, viewBox.y);

    return (
      <div className="recharts-tooltip-wrapper" style={outerStyle}>
        {contentItem}
      </div>
    );
  }
}

export default Tooltip;
