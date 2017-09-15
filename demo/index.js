import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './container/App';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
    </div>
  </BrowserRouter>
), document.getElementById('root'));
