import React, { Component } from 'react';
import hoistStatics from 'hoist-non-react-statics';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default function(WrappedComponent) {
  class AniamtionDecorator extends Component {
    static displayName = `AniamtionDecorator(${getDisplayName(WrappedComponent)})`;

    static WrappedComponent = WrappedComponent;

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
      return <WrappedComponent { ...this.props } animationId={this.state.animationId} />;
    }
  }

  return hoistStatics(AniamtionDecorator, WrappedComponent);
}
