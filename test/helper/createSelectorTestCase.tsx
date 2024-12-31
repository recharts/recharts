import { Selector } from '@reduxjs/toolkit';
import React, { ComponentType, ReactNode } from 'react';
import { Mock, vi } from 'vitest';
import { render } from '@testing-library/react';
import { useAppSelectorWithStableTest } from './selectorTestHelpers';
import { RechartsRootState } from '../../src/state/store';

const emptySelector: Selector<RechartsRootState, undefined, never> = () => {};

export function createSelectorTestCase(Component: ComponentType<{ children: ReactNode }>) {
  return function renderTestCase<T>(selector: Selector<RechartsRootState, T, never> = emptySelector): {
    container: HTMLElement;
    spy: Mock<(selectorResult: T) => void>;
    debug: () => void;
    rerender: (ui: ReactNode) => void;
  } {
    const spy: Mock<(selectorResult: T) => void> = vi.fn();

    const Comp = (): null => {
      spy(useAppSelectorWithStableTest(selector));
      return null;
    };

    const { container, debug, rerender } = render(
      <Component>
        <Comp />
      </Component>,
    );
    return { container, spy, debug, rerender };
  };
}

/**
 * Create a test case for two components and renders the same spy inside both of them.
 * Useful for testing synchronisation!
 *
 * @param ComponentA first component to render
 * @param ComponentB second component to render
 * @returns a function that renders the test case
 */
export function createSynchronisedSelectorTestCase(
  ComponentA: ComponentType<{ children: ReactNode }>,
  ComponentB: ComponentType<{ children: ReactNode }>,
) {
  return function renderTestCase<T>(selector: Selector<RechartsRootState, T, never> = emptySelector): {
    container: Element;
    wrapperA: Element;
    wrapperB: Element;
    spyA: Mock<(selectorResult: T) => void>;
    spyB: Mock<(selectorResult: T) => void>;
    debug: () => void;
  } {
    const spyA: Mock<(selectorResult: T) => void> = vi.fn();
    const spyB: Mock<(selectorResult: T) => void> = vi.fn();

    const CompA = (): null => {
      spyA(useAppSelectorWithStableTest(selector));
      return null;
    };

    const CompB = (): null => {
      spyB(useAppSelectorWithStableTest(selector));
      return null;
    };

    const { container, debug } = render(
      <>
        <div id="wrapperA">
          <ComponentA>
            <CompA />
          </ComponentA>
        </div>
        <div id="wrapperB">
          <ComponentB>
            <CompB />
          </ComponentB>
        </div>
      </>,
    );

    const wrapperA = container.querySelector('#wrapperA')!;
    const wrapperB = container.querySelector('#wrapperB')!;

    return { container, spyA, spyB, debug, wrapperA, wrapperB };
  };
}
