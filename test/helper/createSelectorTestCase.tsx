import { Selector } from '@reduxjs/toolkit';
import React, { ComponentType, ReactNode } from 'react';
import { Mock, vi } from 'vitest';
import { render } from '@testing-library/react';
import { useAppSelectorWithStableTest } from './selectorTestHelpers';
import { RechartsRootState } from '../../src/state/store';
import { Customized } from '../../src';

const emptySelector: Selector<RechartsRootState, undefined, never> = () => {};

export function createSelectorTestCase(Component: ComponentType<{ children: ReactNode }>) {
  return function renderTestCase<T>(selector: Selector<RechartsRootState, T, never> = emptySelector): {
    container: HTMLElement;
    spy: Mock<(selectorResult: T) => void>;
  } {
    const spy: Mock<(selectorResult: T) => void> = vi.fn();

    const Comp = (): null => {
      spy(useAppSelectorWithStableTest(selector));
      return null;
    };

    const { container } = render(
      <Component>
        <Customized component={<Comp />} />
      </Component>,
    );
    return { container, spy };
  };
}
