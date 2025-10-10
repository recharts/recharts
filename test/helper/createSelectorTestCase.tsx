import { Selector } from '@reduxjs/toolkit';
import React, { ComponentType, ReactNode } from 'react';
import { Mock, vi } from 'vitest';
import { act, render } from '@testing-library/react';
import { useAppSelectorWithStableTest } from './selectorTestHelpers';
import { RechartsRootState } from '../../src/state/store';
import { MockAnimationManager } from '../animation/MockProgressAnimationManager';
import { assertUniqueHtmlIds } from '../util/assertUniqueHtmlIds';
import { AnimationManagerContext } from '../../src/animation/useAnimationManager';
import { CompositeAnimationManager } from '../animation/CompositeAnimationManager';

const emptySelector: Selector<RechartsRootState, undefined, never> = () => {};

type TestCaseResult<T> = {
  container: HTMLElement;
  spy: Mock<(selectorResult: T) => void>;
  debug: () => void;
  /**
   * Rerender the whole test case with a different component.
   * @param NextComponent
   */
  rerender: (NextComponent: ComponentType<{ children: ReactNode }>) => void;
  unmount: () => void;
  /**
   * Rerender the same component as before. Useful for testing updates and stable references.
   */
  rerenderSameComponent: () => void;
  animationManager: MockAnimationManager;
  getByText: (text: string) => HTMLElement;
  queryByText: (text: string) => HTMLElement | null;
};

/**
 * Test helper to create a multi-render test case for a selector.
 * It renders a component that uses the selector and spies on its output.
 * It also provides a way to rerender the component with a different component type.
 *
 * This is useful for testing selectors that depend on the component tree,
 * such as those that use context or hooks.
 *
 * @param Component The component to render. It should accept children.
 * @returns A function that renders the test case with a given selector.
 */
export function createSelectorTestCase(Component: ComponentType<{ children: ReactNode }>) {
  return function renderTestCase<T>(
    selector: Selector<RechartsRootState, T, never> = emptySelector,
  ): TestCaseResult<T> {
    const spy: Mock<(selectorResult: T) => void> = vi.fn();
    const animationManager = new CompositeAnimationManager();

    const Comp = (): null => {
      spy(useAppSelectorWithStableTest(selector));
      return null;
    };

    const { container, debug, rerender, getByText, queryByText, unmount } = render(
      <AnimationManagerContext.Provider value={animationManager.factory}>
        <Component>
          <Comp />
        </Component>
      </AnimationManagerContext.Provider>,
    );

    act(() => {
      /*
       * Because we are using Redux autobatching, some actions might be stuck waiting for the next
       * requestAnimationFrame call. This is because the autobatching middleware uses
       * requestAnimationFrame to flush all queued actions at once.
       * So we need to run all timers here to ensure that all actions are processed before we start
       * making assertions.
       *
       * This is not reproducible in every test because it depends on the action ordering.
       * But it doesn't hurt to run all timers here anyway.
       */
      vi.runOnlyPendingTimers();
    });

    assertUniqueHtmlIds(container);
    const myRerender = (NextComponent: ComponentType<{ children: ReactNode }>): void => {
      rerender(
        <AnimationManagerContext.Provider value={animationManager.factory}>
          <NextComponent>
            <Comp />
          </NextComponent>
        </AnimationManagerContext.Provider>,
      );

      act(() => {
        vi.runOnlyPendingTimers();
      });
    };
    const rerenderSameComponent = () => {
      myRerender(Component);
    };

    return {
      container,
      spy,
      debug,
      rerender: myRerender,
      rerenderSameComponent,
      animationManager,
      getByText,
      queryByText,
      unmount,
    };
  };
}

type RenderResult = {
  container: HTMLElement;
  debug: () => void;
  /**
   * Rerender the whole test case with a different component.
   * @param NextComponent
   */
  rerender: (next: ReactNode) => void;
  unmount: () => void;
  /**
   * Rerender the same component as before. Useful for testing updates and stable references.
   */
  rerenderSameComponent: () => void;
  animationManager: MockAnimationManager;
  getByText: (text: string) => HTMLElement;
  queryByText: (text: string) => HTMLElement | null;
};

/**
 * Render a Recharts chart (or part of it) for testing purposes.
 *
 * Drop-in replacement for testing-library's render function, but with
 * additional support for Recharts internals such as AnimationManager and
 * automatic HTML ID checking.
 *
 * Does not support passing props to the component, and does not allow testing selectors or hooks.
 * For that, use createSelectorTestCase instead.
 *
 * @param chart The chart (or part of it) to render
 * @returns The render result, with additional methods for Recharts testing
 */
export function rechartsTestRender(chart: ReactNode): RenderResult {
  const Component = () => <>{chart}</>;
  const testBundle = createSelectorTestCase(Component)();
  return {
    ...testBundle,
    rerender: (nextChart: ReactNode) => {
      testBundle.rerender(() => <>{nextChart}</>);
    },
    rerenderSameComponent: () => {
      testBundle.rerenderSameComponent();
    },
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
  ComponentC?: ComponentType<{ children: ReactNode }>,
) {
  return function renderTestCase<T>(selector: Selector<RechartsRootState, T, never> = emptySelector): {
    container: Element;
    wrapperA: Element;
    wrapperB: Element;
    wrapperC: Element | null;
    spyA: Mock<(selectorResult: T) => void>;
    spyB: Mock<(selectorResult: T) => void>;
    spyC: Mock<(selectorResult: T) => void>;
    debug: () => void;
  } {
    const spyA: Mock<(selectorResult: T) => void> = vi.fn();
    const spyB: Mock<(selectorResult: T) => void> = vi.fn();
    const spyC: Mock<(selectorResult: T) => void> = vi.fn();

    const CompA = (): null => {
      spyA(useAppSelectorWithStableTest(selector));
      return null;
    };

    const CompB = (): null => {
      spyB(useAppSelectorWithStableTest(selector));
      return null;
    };

    const CompC = (): null => {
      spyC(useAppSelectorWithStableTest(selector));
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
        {ComponentC && (
          <div id="wrapperC">
            <ComponentC>
              <CompC />
            </ComponentC>
          </div>
        )}
      </>,
    );

    assertUniqueHtmlIds(container);
    const wrapperA = container.querySelector('#wrapperA')!;
    const wrapperB = container.querySelector('#wrapperB')!;
    const wrapperC = container.querySelector('#wrapperC')!;

    return { container, spyA, spyB, spyC, debug, wrapperA, wrapperB, wrapperC };
  };
}
