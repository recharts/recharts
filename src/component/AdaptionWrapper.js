/**
 * @fileOverview Wrapper component to make charts adapt to the size of parent dom
 */
import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import LodashUtils from '../util/LodashUtils';
import OuiDomUtils from 'oui-dom-utils';
import invariant from 'invariant';

@pureRender
class AdaptionWrapper extends Component {
  static displayName = 'AdaptionWrapper';

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
    window.addEventListener('resize', ::this.updateSizeOfWrapper);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', ::this.updateSizeOfWrapper);
  }

  updateSizeOfWrapper() {
    const wrapper = this.refs.wrapper;
    const clientWidth = OuiDomUtils.width(wrapper);
    const clientHeight = OuiDomUtils.height(wrapper);
    const { width, height } = this.props;

    this.setState({
      hasInitialized: true,
      width: LodashUtils.getPercentValue(width, clientWidth),
      height: LodashUtils.getPercentValue(height, clientHeight),
    });
  }

  render() {
    const { hasInitialized, width, height } = this.state;
    const { children } = this.props;
    const style = {
      width: '100%',
      height: '100%',
    };

    if (hasInitialized) {
      invariant(width > 0 && height > 0,
        `The width(%s) and height(%s) of chart should be greater than 0, ` +
        `please check the style of container, or the props width(%s) and height(%s).`,
        width, height, this.props.width, this.props.height
      );
    }

    return (
      <div className="recharts-adaption-wrapper" style={style} ref="wrapper">
        {
          hasInitialized && width > 0 && height > 0 ?
          React.cloneElement(children, { width, height }) :
          null
        }
      </div>
    );
  }
}

export default AdaptionWrapper;
