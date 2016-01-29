import React, { PropTypes } from 'react';
import Surface from '../container/Surface';
import pureRender from 'pure-render-decorator';
import DefaultLegendContent from './DefaultLegendContent';

const SIZE = 32;

@pureRender
class Legend extends React.Component {
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
    const {layout} = item.props;

    if (layout === 'vertical') {
      return {
        height: item.props.height || chartHeight,
      };
    } else {
      return {
        width: item.props.width || chartWidth,
      };
    }
  }

  getDefaultPosition() {
    const { layout, align, verticalAlign } = this.props;

    if (layout === 'vertical') {
      return align === 'right' ? { right: 0 } : { left: 0 };
    }

    return verticalAlign === 'top' ? { top: 0 } : { bottom: 0 };
  }

  render() {
    const { content, width, height, layout } = this.props;
    const outerStyle = {
      position: 'absolute',
      width: width || 'auto',
      height: height || 'auto',
      ...this.getDefaultPosition(),
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
