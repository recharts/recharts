import React, { Component, PropTypes } from 'react';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default function (WrappedComponent) {
  class AniamtionDecorator extends Component {
    static displayName = `AniamtionDecorator(${getDisplayName(WrappedComponent)})`;

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
      return <WrappedComponent { ...this.props } animationId={this.state.animationId} />;
    }
  }

  return AniamtionDecorator;
}
