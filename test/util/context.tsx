import React, { ComponentType, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { useChartHeight, useChartWidth, useOffset, useViewBox } from '../../src/context/chartLayoutContext';
import { CartesianViewBox, ChartOffset } from '../../src/util/types';

import { useClipPathId } from '../../src/container/ClipPathProvider';

type AllContextPropertiesMixed = {
  clipPathId: string | undefined;
  viewBox: CartesianViewBox | undefined;
  width: number;
  height: number;
  offset: ChartOffset | null;
};

export function testChartLayoutContext(
  /**
   * The children prop is a context spy - it's a dummy component that only exists
   * for the purpose of testing the context.
   * Render it as-is (for example: {props.children}), and then add other components next to it, as your test requires.
   */
  ChartParentComponent: ComponentType<{ children: ReactNode }>,
  /**
   * Write your `expect(context).toEqual(xyz)` inside this callback
   */
  assertions: (context: AllContextPropertiesMixed) => void,
) {
  return () => {
    /*
     * `expect.hasAssertions` is necessary to check that the hack below still works as expected.
     * Without this call, it can happen that recharts just silently does not render the child,
     * and we never run any actual expects on the context shape.
     * Thanks to .hasAssertions() call, vitest will fail in case that happens.
     */
    expect.hasAssertions();
    function Spy() {
      const clipPathId = useClipPathId();
      const viewBox = useViewBox();
      const width = useChartWidth();
      const height = useChartHeight();
      const offset = useOffset();
      const context: AllContextPropertiesMixed = { clipPathId, viewBox, width, height, offset };
      assertions(context);
      return <></>;
    }
    render(
      <ChartParentComponent>
        <Spy />
      </ChartParentComponent>,
    );
  };
}
