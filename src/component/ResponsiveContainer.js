/**
 * @fileOverview Wrapper component to make charts adapt to the size of parent * DOM
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactResizeDetector from 'react-resize-detector';
import { isPercent } from '../util/DataUtils';
import { warn } from '../util/LogUtils';

class ResponsiveContainer extends Component {
  static displayName = 'ResponsiveContainer';
  static propTypes = {
    aspect: PropTypes.number,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node.isRequired,
    debounce: PropTypes.number,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    width: '100%',
    height: '100%',
    debounce: 0,
  };

  constructor(props) {
    super(props);

    this.state = {
      containerWidth: -1,
      containerHeight: -1,
    };
  }

  updateDimensionsImmediate = (containerWidth, containerHeight) => {
    const { containerWidth: oldWidth, containerHeight: oldHeight } = this.state;

    if (containerWidth !== oldWidth || containerHeight !== oldHeight) {
      this.setState({ containerWidth, containerHeight });
    }
  };

  renderChart() {
    const { containerWidth, containerHeight } = this.state;

    if (containerWidth < 0 || containerHeight < 0) { return null; }

    const { aspect, width, height, minWidth, minHeight, maxHeight, children } = this.props;

    warn(isPercent(width) || isPercent(height),
      `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
      width, height
    );

    warn(!aspect || aspect > 0,
      'The aspect(%s) must be greater than zero.',
      aspect);

    const calculatedWidth = isPercent(width) ? containerWidth : width;
    let calculatedHeight = isPercent(height) ? containerHeight : height;

    if (aspect && aspect > 0) {
      // Preserve the desired aspect ratio
      calculatedHeight = calculatedWidth / aspect;
      // if maxHeight is set, overwrite if calculatedHeight is greater than maxHeight
      if (maxHeight && (calculatedHeight > maxHeight)) {
        calculatedHeight = maxHeight;
      }
    }

    warn(calculatedWidth > 0 || calculatedHeight > 0,
      `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
      calculatedWidth, calculatedHeight, width, height, minWidth, minHeight, aspect
    );

    return React.cloneElement(children, {
      width: calculatedWidth,
      height: calculatedHeight,
    });

  }

  render() {
    const { minWidth, minHeight, width, height, maxHeight, id, className, debounce } = this.props;
    const style = { width, height, minWidth, minHeight, maxHeight };
    const resizeDetectorProps = debounce > 0 ? { refreshMode: 'debounce', refreshRate: debounce } : {};
    return (
      <div
        id={id}
        className={classNames('recharts-responsive-container', className)}
        style={style}
        ref={(node) => { this.container = node; }}
      >
        {this.renderChart()}
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={this.updateDimensionsImmediate}
          {...resizeDetectorProps}
        />
      </div>
    );
  }
}

export default ResponsiveContainer;
