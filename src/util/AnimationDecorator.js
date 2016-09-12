import React, { Component, PropTypes } from 'react';
import { getDisplayName } from './ReactUtils';

export default function (WrappedComponent) {
  class AnimationDecorator extends Component {
    static displayName = `AnimationDecorator(${getDisplayName(WrappedComponent)})`;

    static propTypes = {
      ...WrappedComponent.propTypes,
      data: PropTypes.array,
    };

    static WrappedComponent = WrappedComponent;

    static defaultProps = WrappedComponent.defaultProps;

    state = {
      animationId: 0,
    };

    componentWillReceiveProps(nextProps) {
      const { animationId } = this.state;

      if (this.props.data !== nextProps.data) {
        this.setState({
          animationId: animationId + 1,
        });
      }
    }

    render() {
      return <WrappedComponent {...this.props} animationId={this.state.animationId} />;
    }
  }

  return AnimationDecorator;
}
