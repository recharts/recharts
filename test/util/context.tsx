import React, { ComponentType, ReactNode, useContext } from 'react';
import { render } from '@testing-library/react';
import {
  XAxisContext,
  YAxisContext,
  useChartHeight,
  useChartWidth,
  useClipPathId,
  useOffset,
  useViewBox,
} from '../../src/context/chartLayoutContext';
import { Customized } from '../../src/component/Customized';
import { CartesianViewBox, ChartOffset, XAxisMap, YAxisMap } from '../../src/util/types';

type AllContextPropertiesMixed = {
  clipPathId: string | undefined;
  xAxisMap: XAxisMap | undefined;
  yAxisMap: YAxisMap | undefined;
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
      const xAxisMap = useContext(XAxisContext);
      const yAxisMap = useContext(YAxisContext);
      const width = useChartWidth();
      const height = useChartHeight();
      const offset = useOffset();
      const context: AllContextPropertiesMixed = { clipPathId, viewBox, xAxisMap, yAxisMap, width, height, offset };
      assertions(context);
      return <></>;
    }
    render(
      <ChartParentComponent>
        {/*
         * This is a bit of a hack. Why?
         *
         * generateCategoricalChart does not actually render any children.
         * Instead it filters them through a renderByOrder function.
         * So we cannot read the context directly from a custom child component.
         *
         * React-Testing-Library also does not have any tools for testing context,
         * other than rendering it as string and then parsing back:
         * https://testing-library.com/docs/example-react-context/
         *
         * Good news is, we can work around with using the `component` prop in Customized
         * which happens to do exactly what we need for this test:
         * renders arbitrary components directly to DOM. Yay.
         *
         * Later, when we make generateCategoricalChart render actual `{children}` as it should,
         * we can remove the Customized, and read the Context directly from a hook or somewhere.
         */}
        <Customized component={<Spy />} />
      </ChartParentComponent>,
    );
  };
}
