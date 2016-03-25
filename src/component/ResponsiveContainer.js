/**
 * @fileOverview Wrapper component to make charts adapt to the size of parent * DOM
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import { getPercentValue } from '../util/DataUtils';
import { getWidth, getHeight } from '../util/DOMUtils';
import { warn } from '../util/LogUtils';
import { addResizeListener, removeResizeListener } from '../util/detectElementResize';

@pureRender
class ResponsiveContainer extends Component {
  static displayName = 'ResponsiveContainer';

  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    width: '100%',
    height: '100%',
  };

  state = {
    hasInitialized: false,
  };

  componentDidMount() {
    this.updateSizeOfWrapper();
    addResizeListener(this.refs.container, this.updateSizeOfWrapper);
  }

  componentWillUnmount() {
    removeEventListener(this.refs.container, this.updateSizeOfWrapper);
  }

  updateSizeOfWrapper() {
    const { width, height } = this.props;
    const container = this.refs.container;
    const clientWidth = getWidth(container);
    const clientHeight = getHeight(container);

    this.setState({
      hasInitialized: true,
      width: getPercentValue(width, clientWidth),
      height: getPercentValue(height, clientHeight),
    });
  };

  render() {
    const { hasInitialized, width, height } = this.state;
    const { children } = this.props;
    const style = {
      width: '100%',
      height: '100%',
    };

    if (hasInitialized) {
      warn(width > 0 && height > 0,
        `The width(%s) and height(%s) of chart should be greater than 0, ` +
        `please check the style of container, or the props width(%s) and height(%s).`,
        width, height, this.props.width, this.props.height
      );
    }

    return (
      <div className="recharts-responsive-container" style={style} ref="container">
        {
          hasInitialized && width > 0 && height > 0 ?
          React.cloneElement(children, { width, height }) :
          null
        }
      </div>
    );
  }
}

export default ResponsiveContainer;
