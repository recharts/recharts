import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

class Root extends PureComponent {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    render: PropTypes.func.isRequired,
  };

  render() {
    const { store, history, routes, render } = this.props;

    return (
      <Provider store={store}>
        <Router history={history} render={render}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

export default Root;
