/**
 * @fileOverview Render a group of bar
 */
import React, { PropTypes, Children } from 'react';
import Rectangle from '../shape/Rectangle';
import Layer from '../container/Layer';
import pureRender from 'pure-render-decorator';
import ReactUtils, { PRESENTATION_ATTRIBUTES } from '../util/ReactUtils';
import Animate from 're-animate';

@pureRender
class Bar extends React.Component {

  static displayName = 'Bar';

  static propTypes = {
    ...PRESENTATION_ATTRIBUTES,

    className: PropTypes.string,
    layout: PropTypes.string,
    xAxisId: PropTypes.number,
    yAxisId: PropTypes.number,
    barSize: PropTypes.number,
    unit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    formatter: PropTypes.func,

    customContent: PropTypes.element,
    label: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
      PropTypes.element,
    ]),
    data: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
      radius: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.array,
      ]),
      value: PropTypes.value,
    })),
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,

    isAnimationActive: PropTypes.bool,
    animationBegin: PropTypes.number,
    animationDuration: PropTypes.number,
    animationEasing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
  };

  static defaultProps = {
    fill: '#fff',
    xAxisId: 0,
    yAxisId: 0,
    legendType: 'rect',
    // data of bar
    data: [],
    onClick() {},
    onMouseEnter() {},
    onMouseLeave() {},
    layout: 'vertical',
    isAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease',
  };

  state = {
    isAnimationFinished: false,
  };

  handleAnimationEnd() {
    this.setState({ isAnimationFinished: true });
  }

  renderRectangles() {
    const {
      data,
      className,
      customContent,
      layout,
      isAnimationActive,
      animationBegin,
      animationDuration,
      animationEasing,
      ...others,
    } = this.props;

    return data.map((entry, index) => {
      const { value, width, height, ...rest } = entry;
      const props = { ...others, ...rest, width, height };
      let transformOrigin = '';
      const getStyle = isBegin => {
        return {
          transform: `scale${layout === 'vertical' ? 'X' : 'Y'}(${isBegin ? 0 : 1})`,
        };
      };

      if (layout === 'vertical') {
        transformOrigin = width > 0 ? 'left center' : 'right center';
      } else {
        transformOrigin = height > 0 ? 'center bottom' : 'center top';
      }

      return (
        <Animate begin={animationBegin}
          duration={animationDuration}
          isActive={isAnimationActive}
          easing={animationEasing}
          from={getStyle(true)}
          to={getStyle(false)}
          key={'rectangle-' + index}
          onAnimationEnd={::this.handleAnimationEnd}
        >
          <g style={{ transformOrigin }}>
            {
              React.isValidElement(customContent) ?
                React.cloneElement(customContent, { ...props, index }) :
                React.createElement(Rectangle, props)
            }
          </g>
        </Animate>
      );
    });
  }

  renderLabels() {
    const { isAnimationActive } = this.props;

    if (isAnimationActive && !this.state.isAnimationFinished) {
      return null;
    }

    const { data, label } = this.props;
    const barProps = ReactUtils.getPresentationAttributes(this.props);
    const customLabelProps = ReactUtils.getPresentationAttributes(label);
    const isLabelElement = React.isValidElement(label);

    const labels = data.map((entry, i) => {
      const x = entry.x + entry.width / 2;
      const labelProps = {
        textAnchor: 'middle',
        ...entry,
        ...barProps,
        ...customLabelProps,
        x,
        index: i,
        key: `label-${i}`,
        payload: entry,
      };

      return isLabelElement ? React.cloneElement(label, labelProps) : (
        <text {...labelProps}>{entry.value}</text>
      );
    });

    return <Layer className="recharts-layer-bar-labels">{labels}</Layer>;
  }

  render() {
    const { data, className, label } = this.props;

    if (!data || !data.length) {
      return null;
    }

    return (
      <Layer className={`recharts-layer-bar ${className || ''}`}>
        <Layer className="recharts-layer-rectangles">
          {this.renderRectangles()}
        </Layer>
        { label && (
          <Layer className="recharts-layer-rectangle-labels">
            {this.renderLabels()}
          </Layer>
        )}
      </Layer>
    );
  }
}

export default Bar;
