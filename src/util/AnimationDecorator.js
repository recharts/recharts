import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

    componentDidUpdate(prevProps) {
      const { animationId } = prevProps;

      if (this.props.data !== prevProps.data) {
        // eslint-disable-next-line react/no-did-update-set-state
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
