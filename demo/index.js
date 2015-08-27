import React from 'react/addons';
import Router, {Route} from 'react-router';
import App from './container/App';

const routes = (
  <Route name='app' path='/' handler={App}/>
);

Router.run(routes, function (Handler, state) {
  React.render(<Handler query={state.query} />, document.getElementById('root'));
});
