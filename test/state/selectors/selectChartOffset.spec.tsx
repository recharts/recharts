import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { selectChartOffset } from '../../../src/state/selectors/selectChartOffset';
import { useAppSelector } from '../../../src/state/hooks';

describe('selectChartOffset', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const offset = useAppSelector(selectChartOffset);
      expect(offset).toBe(undefined);
      return null;
    };

    render(<Comp />);
  });
});
