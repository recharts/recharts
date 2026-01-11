/**
 * @fileOverview Customized
 */
import * as React from 'react';
import { isValidElement, cloneElement, createElement, Component, FunctionComponent, ReactElement } from 'react';

import { Layer } from '../container/Layer';
import { warn } from '../util/LogUtils';

type Comp<P> = FunctionComponent<P> | Component<P> | ReactElement<P>;
export type Props<P, C extends Comp<P>> = P & {
  /**
   * Render your components directly, without Customized wrapper. Will be removed in 4.0
   * @deprecated
   * @example Before: `<Customized component={<MyCustomComponent />} />`
   * @example After: `<MyCustomComponent />`
   */
  component: C;
};

/**
 * Customized component used to be necessary to render custom elements in Recharts 2.x.
 * Starting from Recharts 3.x, all charts are able to render arbitrary elements anywhere,
 * and Customized is no longer needed.
 *
 * @example Before: `<Customized component={<MyCustomComponent />} />`
 * @example After: `<MyCustomComponent />`
 *
 * @deprecated Just render your components directly. Will be removed in 4.0
 */
export function Customized<P, C extends Comp<P>>({ component, ...props }: Props<P, C>) {
  let child;
  if (isValidElement(component)) {
    child = cloneElement(component, props);
  } else if (typeof component === 'function') {
    // @ts-expect-error TS cannot verify that C is FunctionComponent<P> here
    child = createElement(component, props as any);
  } else {
    warn(false, "Customized's props `component` must be React.element or Function, but got %s.", typeof component);
  }
  return <Layer className="recharts-customized-wrapper">{child}</Layer>;
}

Customized.displayName = 'Customized';
