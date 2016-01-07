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
    scope: PropTypes.shape({
      x1: PropTypes.number,
      x2: PropTypes.number,
      y1: PropTypes.number,
      y2: PropTypes.number,
    }),

    active: PropTypes.bool,
    position: PropTypes.string,
    separator: PropTypes.string,
    formatter: PropTypes.func,
    offset: PropTypes.number,

    itemStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    style: PropTypes.object,
    cursorStyle: PropTypes.object,

    coordinate: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),

    label: PropTypes.any,
    data: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.any,
      value: PropTypes.number,
      unit: PropTypes.any,
    })),
  };

  static defaultProps = {
    active: false,
    offset: 10,
    scope: { x1: 0, x2: 0, y1: 0, y2: 0 },
    position: 'left-bottom',
    coordinate: { x: 0, y: 0 },
    cursorStyle: {},
    separator: ' : ',
    style: {},
    itemStyle: {},
    labelStyle: {},
  };

  constructor(props) {
    super(props);
  }

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
    const { customContent, scope, coordinate, active,
        label, style, labelStyle, offset } = this.props;

    const outerStyle = {
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      padding: 10,
      border: '1px solid #ccc',
      backgroundColor: '#fff',
      display: active ? 'block' : 'none',
      position: 'absolute',
      ...style,
    };
    const finalLabelStyle = { margin: 0, ...labelStyle };
    const box = this.getTooltipBBox(outerStyle);
    outerStyle.left = Math.max(
      coordinate.x + box.width + offset > scope.x2 ?
      coordinate.x - box.width - offset :
      coordinate.x + offset, scope.x1);
    outerStyle.top = Math.max(
      coordinate.y + box.height + offset > scope.y2 ?
      coordinate.y - box.height - offset :
      coordinate.y + offset, scope.y1);

    return (
      <div className="tooltip-outer-wrapper" style={outerStyle}>
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
