import * as React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Events from 'oui-dom-events';
import DOMUtils from 'oui-dom-utils';
import classnames from 'classnames';
import './Affix.scss';

const { PureComponent } = React;

class Affix extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    offsetTop: PropTypes.number,
  };

  static defaultProps = {
    prefixCls: 'rechartsOrg-affix',
    offsetTop: 0,
  };

  static displayName = 'Affix';

  constructor(props) {
    super(props);
    this.state = {
      affixStyle: null,
      placeholderStyle: null,
      id: _.uniqueId(props.prefixCls),
      isFixed: false,
    };
  }

  componentDidMount() {
    this.setTargetEventListeners();
  }

  componentWillUnmount() {
    this.clearScrollEventListeners();
  }

  setTargetEventListeners() {
    const { prefixCls } = this.props;
    const { id } = this.state;
    Events.on(window, `scroll.${prefixCls}.${id}`, this.updatePosition);
    Events.on(window, `resize.${prefixCls}.${id}`, this.updatePosition);
  }

  clearScrollEventListeners() {
    const { prefixCls } = this.props;
    const { id } = this.state;
    Events.off(window, `scroll.${prefixCls}.${id}`);
    Events.off(window, `resize.${prefixCls}.${id}`);
  }

  updatePosition = () => {
    const { offsetTop } = this.props;
    const scrollTop = DOMUtils.getDocumentScrollTop();
    // affix
    const affixNode = this.placeholderDom;

    if (!affixNode) {
      this.setState({
        affixStyle: null,
        placeholderStyle: null,
        isFixed: false,
      });
    }

    const { offsetWidth } = affixNode;
    const { offsetHeight } = affixNode;
    const { top, left } = DOMUtils.getOffset(affixNode);
    if (scrollTop > top) {
      // Fixed Top
      const affixStyle = {
        position: 'fixed',
        top: offsetTop,
        left,
        width: offsetWidth,
      };
      const placeholderStyle = {
        width: offsetWidth,
        height: offsetHeight,
      };
      this.setState({
        affixStyle,
        placeholderStyle,
        isFixed: true,
      });
    } else {
      this.setState({
        affixStyle: null,
        placeholderStyle: null,
        isFixed: false,
      });
    }
  };

  render() {
    const { prefixCls, className, offsetTop, ...other } = this.props;
    const { isFixed } = this.state;
    const componentClasses = isFixed ? `${prefixCls}-active` : `${prefixCls}-inactive`;
    const classes = classnames(`${prefixCls}`, className, componentClasses);
    const { placeholderStyle, affixStyle } = this.state;

    return (
      <div
        {...other}
        style={placeholderStyle}
        ref={(node) => {
          this.placeholderDom = node;
        }}
      >
        <div className={classes} style={affixStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Affix;
