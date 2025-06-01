import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { selectChartOffset } from '../../../src/state/selectors/selectChartOffset';
import { useAppSelector } from '../../../src/state/hooks';
import { Customized, LineChart } from '../../../src';
import { shouldReturnFromInitialState, shouldReturnUndefinedOutOfContext } from '../../helper/selectorTestHelpers';

describe('selectChartOffset', () => {
  shouldReturnUndefinedOutOfContext(selectChartOffset);
  shouldReturnFromInitialState(selectChartOffset, {
    bottom: 5,
    brushBottom: 5,
    height: 0,
    left: 5,
    right: 5,
    top: 5,
    width: 0,
  });

  it('should be stable', () => {
    expect.assertions(2);
    const Comp = (): null => {
      const offset1 = useAppSelector(selectChartOffset);
      const offset2 = useAppSelector(selectChartOffset);
      expect(offset1).not.toBe(undefined);
      expect(offset1).toBe(offset2);
      return null;
    };

    render(
      <LineChart width={100} height={200}>
        <Customized component={<Comp />} />
      </LineChart>,
    );
  });
});
