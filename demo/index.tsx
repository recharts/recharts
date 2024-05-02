import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './container/App';

const container = document.getElementById('root');

const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
);
