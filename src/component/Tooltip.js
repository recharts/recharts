import React, { PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import ReactDOMServer from 'react-dom/server';
import DefaultTooltipContent from './DefaultTooltipContent';
import DOMUtils from '../util/DOMUtils';

@pureRender
class Tooltip extends React.Component {

  static displayName = 'Tooltip';

  static propTypes = {
    customContent: PropTypes.element,
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
      key: PropTypes.any,
      value: PropTypes.number,
      unit: PropTypes.any,
    })),
  };

  static defaultProps = {
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

  getTooltipBBox(wrapperStyle) {
    const { customContent } = this.props;
    const contentHtml = ReactDOMServer.renderToStaticMarkup(
      React.isValidElement(customContent) ?
      React.cloneElement(customContent, this.props) :
      React.createElement(DefaultTooltipContent, this.props)
    );
    const style = { ...wrapperStyle, top: -20000, left: 0, display: 'block' };
    const wrapper = document.createElement('div');

    wrapper.setAttribute('style', DOMUtils.getStyleString(wrapperStyle));
    wrapper.innerHTML = contentHtml;
    document.body.appendChild(wrapper);
    const box = wrapper.getBoundingClientRect();

    document.body.removeChild(wrapper);

    return box;
  }

  render() {
    const { customContent, viewBox, coordinate, active, offset } = this.props;

    const outerStyle = {
      pointerEvents: 'none',
      display: active ? 'block' : 'none',
      position: 'absolute',
    };
    const box = this.getTooltipBBox(outerStyle);

    outerStyle.left = Math.max(
      coordinate.x + box.width + offset > (viewBox.x + viewBox.width) ?
      coordinate.x - box.width - offset :
      coordinate.x + offset, viewBox.x);
    outerStyle.top = Math.max(
      coordinate.y + box.height + offset > (viewBox.y  + viewBox.height) ?
      coordinate.y - box.height - offset :
      coordinate.y + offset, viewBox.x);

    return (
      <div className="recharts-tooltip-wrapper" style={outerStyle}>
        {
          React.isValidElement(customContent) ?
          React.cloneElement(customContent, this.props) :
          React.createElement(DefaultTooltipContent, this.props)
        }
      </div>
    );
  }
}

export default Tooltip;
