/**
 * @fileOverview Customized
 */
import React, { isValidElement, cloneElement, Component, FunctionComponent } from 'react';
import _ from 'lodash';
import Layer from '../container/Layer';
import { warn } from '../util/LogUtils';

type Comp<P> = FunctionComponent<P> | Component<P>
type Props<P, C extends Comp<P>> = P & {
  component: C
};

/**
 * custom svg elements by rechart instance props and state.
 * @returns {Object}   svg elements
 */
export default function Customized<P, C extends Comp<P>>({ component, ...props }: Props<P, C>) {
  let child;
  if (isValidElement(component)) {
    child = cloneElement(component, props);
  } else if (_.isFunction(component)) {
    child = component(props);
  } else {
    warn(false, 'Customized\'s props `component` must be React.element or Function, but got %s.', typeof component);
  }
  return <Layer className="recharts-customized-wrapper">{child}</Layer>;
}

Customized.displayName = 'Customized';
