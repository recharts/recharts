import React, { Component } from 'react';
import { Route, IndexRoute, Redirect, IndexRedirect } from 'react-router';
import _ from 'lodash';
import { IndexView, GuideView, APIView, ExamplesView, BlogView, Storybook } from '../views';
import Frame from '../layouts/Frame';
import Locale from '../locale';

const locales = Object.keys(Locale);

const hasLocale = (pathname) => {
  for (let i = 0, len = locales.length; i < len; i++) {
    if (pathname.indexOf(locales[i]) >= 0) {
      return true;
    }
  }

  return false;
};

const onEnter = (nextState, replace) => {
  const pathname = _.get(nextState, 'location.pathname', '/');

  if (!hasLocale(pathname)) {
    replace({
      pathname: `/en-US${pathname}`,
      query: _.get(nextState, 'location.query', {}),
    });
  }
};

export default (store) => (
  <Route path="/" component={Frame} onEnter={onEnter}>
    <IndexRedirect to="/en-US" />
    <Route path="/*/guide(/:name)" component={GuideView} />
    <Route path="/*/api(/:name)" component={APIView} />
    <Route path="/*/examples(/:name)" component={ExamplesView} />
    <Route path="/*/blog" component={BlogView} />
    <Route path="/*/storybook" component={Storybook} />
    <Route path="*" component={IndexView} />
  </Route>
);
