import React, { ComponentType, memo } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { scaleLinear, scaleTime } from 'victory-vendor/d3-scale';
import {
  ChartLayoutContextProvider,
  ChartLayoutContextProviderProps,
  useClipPathId,
  useMaybePolarAngleAxis,
  useMaybePolarRadiusAxis,
  useMaybeXAxis,
  useMaybeYAxis,
  useOffset,
  useViewBox,
  useXAxisOrThrow,
  useYAxisOrThrow,
} from '../../src/context/chartLayoutContext';
import {
  AxisMap,
  AxisPropsWithExtraComputedData,
  CategoricalChartState,
  XAxisWithExtraData,
  YAxisWithExtraData,
} from '../../src/chart/types';
import { XAxisMap, YAxisMap } from '../../src/util/types';
import { RechartsStoreProvider } from '../../src/state/RechartsStoreProvider';
import { Brush, ComposedChart, Customized } from '../../src';

describe('ChartLayoutContextProvider', () => {
  const minimalState: CategoricalChartState = {
    offset: {},
  };
  const mockContextProviderProps: ChartLayoutContextProviderProps = {
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    state: minimalState,
    clipPathId: 'my mock ID',
    width: 100,
    height: 100,
    children: <div />,
    layout: 'horizontal',
  };

  describe('ClipPathIdContext', () => {
    it('should add clipPathId to context', () => {
      expect.assertions(1);
      const MockConsumer: ComponentType = () => {
        const clipPathId = useClipPathId();
        expect(clipPathId).toBe('my mock ID');
        return null;
      };
      render(
        <ChartLayoutContextProvider {...mockContextProviderProps}>
          <MockConsumer />
        </ChartLayoutContextProvider>,
      );
    });

    it('should return undefined when using the hook outside of context', () => {
      expect.assertions(1);
      const MockComponent: ComponentType = () => {
        const clipPathId = useClipPathId();
        expect(clipPathId).toBe(undefined);
        return null;
      };
      render(<MockComponent />);
    });

    describe('vanilla children', () => {
      it('should re-render children every time even when nothing changes', () => {
        let renderCount = 0;
        const MockConsumer: ComponentType = () => {
          renderCount++;
          return null;
        };
        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider {...mockContextProviderProps}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider {...mockContextProviderProps}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(2);
      });
    });

    describe('children using React.memo()', () => {
      it('should render memo children only once if the clipPathId does not change', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          renderCount++;
          return null;
        });
        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider {...mockContextProviderProps}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider {...mockContextProviderProps}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
      });

      it('should render memo children only once even if the clipPathId changes!', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          renderCount++;
          return null;
        });
        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider {...mockContextProviderProps}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider {...mockContextProviderProps} clipPathId="my mock ID but this time different">
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
      });
    });

    describe('children that read the context using a hook', () => {
      it('should render context-aware children only once', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useClipPathId();
          renderCount++;
          return null;
        });
        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider {...mockContextProviderProps}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider {...mockContextProviderProps}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
      });

      it('should re-render context-aware children if the clipPathId changes', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useClipPathId();
          renderCount++;
          return null;
        });
        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider {...mockContextProviderProps}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider {...mockContextProviderProps} clipPathId="my mock ID but this time different">
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(2);
      });

      it('should not re-render context-aware children if unrelated property changes', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useClipPathId();
          renderCount++;
          return null;
        });
        const mockState1: CategoricalChartState = { ...minimalState };
        const mockState2: CategoricalChartState = { ...minimalState };
        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState2}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
      });
    });
  });

  const exampleXAxis1: XAxisWithExtraData = {
    axisType: 'xAxis',
    mirror: false,
    orientation: 'bottom',
    reversed: false,
    scale: scaleLinear(),
    width: 200,
    height: 10,
  };
  describe('XAxis state', () => {
    const exampleXAxisMap: XAxisMap = {
      a: exampleXAxis1,
    };

    const exampleXAxis2: XAxisWithExtraData = {
      axisType: 'xAxis',
      mirror: false,
      orientation: 'bottom',
      reversed: false,
      scale: scaleLinear(),
      width: 300,
      height: 40,
    };
    const exampleXAxisMap2: XAxisMap = {
      a: exampleXAxis2,
    };

    const mockState1: CategoricalChartState = {
      ...minimalState,
      xAxisMap: exampleXAxisMap,
    };

    const mockState2: CategoricalChartState = {
      ...minimalState,
      xAxisMap: exampleXAxisMap2,
    };

    describe('useXAxisOrThrow', () => {
      let originalConsoleError: typeof console.error;
      beforeAll(() => {
        originalConsoleError = console.error;
        console.error = vi.fn();
      });

      afterAll(() => {
        console.error = originalConsoleError;
        originalConsoleError = null;
      });

      it('should throw when reading axis but the xAxisMap is undefined', () => {
        const MockConsumer: ComponentType = () => {
          useXAxisOrThrow('a');
          return null;
        };
        expect(() =>
          render(
            <RechartsStoreProvider>
              <ChartLayoutContextProvider {...mockContextProviderProps}>
                <MockConsumer />
              </ChartLayoutContextProvider>
            </RechartsStoreProvider>,
          ),
        ).toThrow(
          'Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?',
        );
      });

      it('should throw when reading axis outside of Recharts context', () => {
        const MockConsumer: ComponentType = () => {
          useXAxisOrThrow('a');
          return null;
        };
        expect(() => render(<MockConsumer />)).toThrow(
          'Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?',
        );
      });

      it('should throw when reading axis but the xAxisMap is empty object', () => {
        const MockConsumer: ComponentType = () => {
          useXAxisOrThrow('a');
          return null;
        };

        const xAxisMap: XAxisMap = {};
        expect(() =>
          render(
            <RechartsStoreProvider>
              <ChartLayoutContextProvider {...mockContextProviderProps} state={{ ...minimalState, xAxisMap }}>
                <MockConsumer />
              </ChartLayoutContextProvider>
            </RechartsStoreProvider>,
          ),
        ).toThrow('Invariant failed: Could not find xAxis by id "a" [string]. There are no available ids.');
      });

      it('should throw when axes are set but the ID is wrong', () => {
        const MockConsumer: ComponentType = () => {
          useXAxisOrThrow('wrong ID');
          return null;
        };
        expect(() =>
          render(
            <RechartsStoreProvider>
              <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
                <MockConsumer />
              </ChartLayoutContextProvider>
            </RechartsStoreProvider>,
          ),
        ).toThrow('Invariant failed: Could not find xAxis by id "wrong ID" [string]. Available ids are: a.');
      });

      it('should read xAxis from context', () => {
        expect.assertions(2);
        const MockConsumer: ComponentType = () => {
          const xAxis: XAxisWithExtraData = useXAxisOrThrow('a');
          const expected: XAxisWithExtraData = {
            axisType: 'xAxis',
            mirror: false,
            orientation: 'bottom',
            reversed: false,
            scale: expect.any(Function),
            width: 200,
            height: 10,
          };
          expect(xAxis).toEqual(expected);
          expect(xAxis).toBe(exampleXAxisMap.a);
          return null;
        };
        render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
      });
    });

    describe('useMaybeXAxis', () => {
      let originalConsoleError: typeof console.error;
      beforeAll(() => {
        originalConsoleError = console.error;
        console.error = vi.fn();
      });

      afterAll(() => {
        console.error = originalConsoleError;
        originalConsoleError = null;
      });

      it('should return undefined when reading axis but the xAxisMap is undefined', () => {
        expect.assertions(1);
        const MockConsumer: ComponentType = () => {
          const xAxis = useMaybeXAxis('wrong ID');
          expect(xAxis).toBe(undefined);
          return null;
        };

        render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
      });

      it('should return undefined when reading axis outside of Recharts context', () => {
        expect.assertions(1);
        const MockConsumer: ComponentType = () => {
          const xAxis = useMaybeXAxis('wrong ID');
          expect(xAxis).toBe(undefined);
          return null;
        };
        render(<MockConsumer />);
      });

      it('should return undefined when reading axis but the xAxisMap is empty object', () => {
        expect.assertions(1);
        const MockConsumer: ComponentType = () => {
          const xAxis = useMaybeXAxis('wrong ID');
          expect(xAxis).toBe(undefined);
          return null;
        };

        const xAxisMap: XAxisMap = {};
        render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={{ ...minimalState, xAxisMap }}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
      });

      it('should return undefined when axes are set but the ID is wrong', () => {
        expect.assertions(1);
        const MockConsumer: ComponentType = () => {
          const xAxis = useMaybeXAxis('wrong ID');
          expect(xAxis).toBe(undefined);
          return null;
        };
        render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
      });

      it('should read xAxis from context', () => {
        expect.assertions(2);
        const MockConsumer: ComponentType = () => {
          const xAxis: XAxisWithExtraData = useMaybeXAxis('a');
          const expected: XAxisWithExtraData = {
            axisType: 'xAxis',
            mirror: false,
            orientation: 'bottom',
            reversed: false,
            scale: expect.any(Function),
            width: 200,
            height: 10,
          };
          expect(xAxis).toEqual(expected);
          expect(xAxis).toBe(exampleXAxisMap.a);
          return null;
        };
        render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
      });
    });

    describe('vanilla children', () => {
      it('should re-render children every time even when nothing changes', () => {
        let renderCount = 0;
        const MockConsumer: ComponentType = () => {
          renderCount++;
          return null;
        };
        expect(renderCount).toBe(0);
        const { rerender } = render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(2);
      });
    });

    describe('children using React.memo()', () => {
      it('should render memo children only once if the xAxisMap does not change', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          renderCount++;
          return null;
        });

        expect(renderCount).toBe(0);
        const { rerender } = render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider
              {...mockContextProviderProps}
              clipPathId="my mock ID is different now"
              state={mockState1}
            >
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
      });

      it('should render memo children only once even if the xAxisMap changes!', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          renderCount++;
          return null;
        });

        expect(renderCount).toBe(0);
        const { rerender } = render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider
              {...mockContextProviderProps}
              clipPathId="my mock ID but this time different"
              state={mockState2}
            >
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
      });
    });

    describe('children that read the context using a hook', () => {
      it('should render context-aware children only once', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useXAxisOrThrow('a');
          renderCount++;
          return null;
        });

        expect(renderCount).toBe(0);
        const { rerender } = render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
      });

      it('should re-render context-aware children if the xAxisMap changes', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useXAxisOrThrow('a');
          renderCount++;
          return null;
        });

        expect(renderCount).toBe(0);
        const { rerender } = render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider
              {...mockContextProviderProps}
              clipPathId="my mock ID is not important for this hook"
              state={mockState2}
            >
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(2);
      });

      it('should not re-render context-aware children if unrelated property changes', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useXAxisOrThrow('a');
          renderCount++;
          return null;
        });
        expect(renderCount).toBe(0);
        const { rerender } = render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider
              {...mockContextProviderProps}
              clipPathId="my mock ID has changed but that should not affect xAxis hook"
              state={mockState1}
            >
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect.soft(renderCount).toBe(1);
        const mockYAxis: YAxisWithExtraData = {
          axisType: 'yAxis',
          mirror: false,
          orientation: 'left',
          reversed: false,
          scale: scaleLinear(),
          allowDecimals: false,
          label: 'yAxisMap is different and that still should not affect the xAxis hook',
        };
        const mockStateWithYAxisMap: CategoricalChartState = {
          ...mockState1,
          yAxisMap: {
            y: mockYAxis,
          },
        };
        rerender(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider
              {...mockContextProviderProps}
              clipPathId="my mock ID has changed but that should not affect xAxis hook"
              state={mockStateWithYAxisMap}
            >
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
      });
    });
  });

  describe('YAxis state', () => {
    const exampleYAxis1: YAxisWithExtraData = {
      axisType: 'yAxis',
      mirror: false,
      orientation: 'left',
      reversed: false,
      scale: scaleLinear(),
      width: 200,
      height: 10,
    };
    const exampleYAxisMap: YAxisMap = {
      m: exampleYAxis1,
    };

    const exampleYAxisMap2: YAxisMap = {
      m: { ...exampleYAxis1 },
    };

    const mockState1: CategoricalChartState = {
      ...minimalState,
      yAxisMap: exampleYAxisMap,
    };

    const mockState2: CategoricalChartState = {
      ...minimalState,
      yAxisMap: exampleYAxisMap2,
    };

    describe('useYAxisOrThrow', () => {
      let originalConsoleError: typeof console.error;
      beforeAll(() => {
        originalConsoleError = console.error;
        console.error = vi.fn();
      });

      afterAll(() => {
        console.error = originalConsoleError;
        originalConsoleError = null;
      });

      it('should throw when reading axis but the yAxisMap is undefined', () => {
        const MockConsumer: ComponentType = () => {
          useYAxisOrThrow('a');
          return null;
        };
        expect(() =>
          render(
            <RechartsStoreProvider>
              <ChartLayoutContextProvider {...mockContextProviderProps}>
                <MockConsumer />
              </ChartLayoutContextProvider>
            </RechartsStoreProvider>,
          ),
        ).toThrow(
          'Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?',
        );
      });

      it('should throw when reading axis outside of Recharts context', () => {
        const MockConsumer: ComponentType = () => {
          useYAxisOrThrow('a');
          return null;
        };
        expect(() => render(<MockConsumer />)).toThrow(
          'Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?',
        );
      });

      it('should throw when reading axis but the xAxisMap is empty object', () => {
        const MockConsumer: ComponentType = () => {
          useYAxisOrThrow('a');
          return null;
        };

        const yAxisMap: YAxisMap = {};
        expect(() =>
          render(
            <RechartsStoreProvider>
              <ChartLayoutContextProvider {...mockContextProviderProps} state={{ ...minimalState, yAxisMap }}>
                <MockConsumer />
              </ChartLayoutContextProvider>
            </RechartsStoreProvider>,
          ),
        ).toThrow('Invariant failed: Could not find yAxis by id "a" [string]. There are no available ids.');
      });

      it('should throw when axes are set but the ID is wrong', () => {
        const MockConsumer: ComponentType = () => {
          useYAxisOrThrow('wrong ID');
          return null;
        };
        expect(() =>
          render(
            <RechartsStoreProvider>
              <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
                <MockConsumer />
              </ChartLayoutContextProvider>
            </RechartsStoreProvider>,
          ),
        ).toThrow('Invariant failed: Could not find yAxis by id "wrong ID" [string]. Available ids are: m.');
      });

      it('should read yAxis from context', () => {
        expect.assertions(2);
        const MockConsumer: ComponentType = () => {
          const yAxis: YAxisWithExtraData = useYAxisOrThrow('m');
          const expected: YAxisWithExtraData = {
            axisType: 'yAxis',
            mirror: false,
            orientation: 'left',
            reversed: false,
            scale: expect.any(Function),
            width: 200,
            height: 10,
          };
          expect(yAxis).toEqual(expected);
          expect(yAxis).toBe(exampleYAxisMap.m);
          return null;
        };
        render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
      });
    });

    describe('useMaybeYAxis', () => {
      let originalConsoleError: typeof console.error;
      beforeAll(() => {
        originalConsoleError = console.error;
        console.error = vi.fn();
      });

      afterAll(() => {
        console.error = originalConsoleError;
        originalConsoleError = null;
      });

      it('should return undefined when reading axis but the yAxisMap is undefined', () => {
        expect.assertions(1);
        const MockConsumer: ComponentType = () => {
          const yAxis = useMaybeYAxis('a');
          expect(yAxis).toBe(undefined);
          return null;
        };

        render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
      });

      it('should return undefined when reading axis outside of Recharts context', () => {
        expect.assertions(1);
        const MockConsumer: ComponentType = () => {
          const yAxis = useMaybeYAxis('a');
          expect(yAxis).toBe(undefined);
          return null;
        };

        render(<MockConsumer />);
      });

      it('should return undefined when reading axis but the xAxisMap is empty object', () => {
        expect.assertions(1);
        const MockConsumer: ComponentType = () => {
          const yAxis = useMaybeYAxis('a');
          expect(yAxis).toBe(undefined);
          return null;
        };

        const yAxisMap: YAxisMap = {};
        render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={{ ...minimalState, yAxisMap }}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
      });

      it('should return undefined when axes are set but the ID is wrong', () => {
        expect.assertions(1);
        const MockConsumer: ComponentType = () => {
          const yAxis = useMaybeYAxis('wrong ID');
          expect(yAxis).toBe(undefined);
          return null;
        };
        render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
      });

      it('should read yAxis from context', () => {
        expect.assertions(2);
        const MockConsumer: ComponentType = () => {
          const yAxis: YAxisWithExtraData = useMaybeYAxis('m');
          const expected: YAxisWithExtraData = {
            axisType: 'yAxis',
            mirror: false,
            orientation: 'left',
            reversed: false,
            scale: expect.any(Function),
            width: 200,
            height: 10,
          };
          expect(yAxis).toEqual(expected);
          expect(yAxis).toBe(exampleYAxisMap.m);
          return null;
        };
        render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
      });
    });

    describe('vanilla children', () => {
      it('should re-render children every time even when nothing changes', () => {
        let renderCount = 0;
        const MockConsumer: ComponentType = () => {
          renderCount++;
          return null;
        };
        expect(renderCount).toBe(0);
        const { rerender } = render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(2);
      });
    });

    describe('children using React.memo()', () => {
      it('should render memo children only once if the yAxisMap does not change', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          renderCount++;
          return null;
        });

        expect(renderCount).toBe(0);
        const { rerender } = render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider
              {...mockContextProviderProps}
              clipPathId="my mock ID is different now"
              state={mockState1}
            >
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
      });

      it('should render memo children only once even if the yAxisMap changes!', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          renderCount++;
          return null;
        });

        expect(renderCount).toBe(0);
        const { rerender } = render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider
              {...mockContextProviderProps}
              clipPathId="my mock ID but this time different"
              state={mockState2}
            >
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
      });
    });

    describe('children that read the context using a hook', () => {
      it('should render context-aware children only once', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useYAxisOrThrow('m');
          renderCount++;
          return null;
        });

        expect(renderCount).toBe(0);
        const { rerender } = render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
      });

      it('should re-render context-aware children if the yAxisMap changes', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useYAxisOrThrow('m');
          renderCount++;
          return null;
        });

        expect(renderCount).toBe(0);
        const { rerender } = render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState2}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(2);
      });

      it('should not re-render context-aware children if unrelated property changes', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useYAxisOrThrow('m');
          renderCount++;
          return null;
        });
        expect(renderCount).toBe(0);
        const { rerender } = render(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider
              {...mockContextProviderProps}
              clipPathId="my mock ID has changed but that should not affect xAxis hook"
              state={mockState1}
            >
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect.soft(renderCount).toBe(1);
        const mockXAxis: XAxisWithExtraData = {
          axisType: 'xAxis',
          mirror: false,
          orientation: 'bottom',
          reversed: false,
          scale: scaleLinear(),
          allowDecimals: false,
          label: 'xAxisMap is different and that still should not affect the yAxis hook',
        };
        const mockStateWithXAxisMap: CategoricalChartState = {
          ...mockState1,
          xAxisMap: {
            x: mockXAxis,
          },
        };
        rerender(
          <RechartsStoreProvider>
            <ChartLayoutContextProvider
              {...mockContextProviderProps}
              clipPathId="my mock ID has changed but that should not affect xAxis hook"
              state={mockStateWithXAxisMap}
            >
              <MockConsumer />
            </ChartLayoutContextProvider>
          </RechartsStoreProvider>,
        );
        expect(renderCount).toBe(1);
      });
    });
  });

  describe('PolarAngleAxis state', () => {
    const exampleAxis: AxisPropsWithExtraComputedData = {
      mirror: false,
      reversed: false,
      scale: scaleLinear(),
      type: 'category',
      axisType: 'angleAxis',
    };
    const exampleBaseAxisMap: AxisMap = {
      m: exampleAxis,
    };

    const mockState1: CategoricalChartState = {
      ...minimalState,
      angleAxisMap: exampleBaseAxisMap,
    };

    it('should read polarAngleAxis from context', () => {
      expect.assertions(2);
      const MockConsumer: ComponentType = () => {
        const angleAxis = useMaybePolarAngleAxis('m');
        expect(angleAxis).toEqual({
          type: 'category',
          axisType: 'angleAxis',
          mirror: false,
          reversed: false,
          scale: expect.any(Function),
        });
        expect(angleAxis).toBe(exampleBaseAxisMap.m);
        return null;
      };
      render(
        <RechartsStoreProvider>
          <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>
        </RechartsStoreProvider>,
      );
    });
  });

  describe('PolarRadiusAxis state', () => {
    const exampleAxis: AxisPropsWithExtraComputedData = {
      mirror: false,
      reversed: false,
      scale: scaleLinear(),
      type: 'category',
      axisType: 'radiusAxis',
    };
    const exampleBaseAxisMap: AxisMap = {
      m: exampleAxis,
    };

    const mockState1: CategoricalChartState = {
      ...minimalState,
      radiusAxisMap: exampleBaseAxisMap,
    };

    it('should read polarRadiusAxis from context', () => {
      expect.assertions(2);
      const MockConsumer: ComponentType = () => {
        const radiusAxis = useMaybePolarRadiusAxis('m');
        expect(radiusAxis).toEqual({
          type: 'category',
          axisType: 'radiusAxis',
          mirror: false,
          reversed: false,
          scale: expect.any(Function),
        });
        expect(radiusAxis).toBe(exampleBaseAxisMap.m);
        return null;
      };
      render(
        <RechartsStoreProvider>
          <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>
        </RechartsStoreProvider>,
      );
    });
  });

  describe('ViewBoxContext', () => {
    const exampleOffset: CategoricalChartState['offset'] = {
      top: 10,
      left: 20,
      width: 100,
      height: 200,
    };

    const exampleOffset2: CategoricalChartState['offset'] = {
      top: 5,
      left: 19,
      width: 300,
      height: 500,
    };

    const mockState1: CategoricalChartState = {
      offset: exampleOffset,
    };

    const mockState2: CategoricalChartState = {
      offset: exampleOffset2,
    };

    describe('error cases', () => {
      it('should throw if there is no offset', () => {
        expect(() =>
          render(
            <ChartLayoutContextProvider {...mockContextProviderProps} state={{}}>
              Children are required
            </ChartLayoutContextProvider>,
          ),
        ).toThrow();
      });
    });

    it('should set viewBox to all undefined properties if there is offset but it is missing properties', () => {
      expect.assertions(1);
      const MockConsumer: ComponentType = () => {
        const viewBox = useViewBox();
        expect(viewBox).toEqual({
          x: undefined,
          y: undefined,
          height: undefined,
          width: undefined,
        });
        return null;
      };
      render(
        <ChartLayoutContextProvider {...mockContextProviderProps} state={{ offset: {} }}>
          <MockConsumer />
        </ChartLayoutContextProvider>,
      );
    });

    it('should add viewBox to context', () => {
      expect.assertions(1);
      const MockConsumer: ComponentType = () => {
        const viewBox = useViewBox();
        expect(viewBox).toEqual({
          y: 10,
          x: 20,
          width: 100,
          height: 200,
        });
        return null;
      };
      render(
        <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
          <MockConsumer />
        </ChartLayoutContextProvider>,
      );
    });

    describe('vanilla children', () => {
      it('should re-render children every time even when nothing changes', () => {
        let renderCount = 0;
        const MockConsumer: ComponentType = () => {
          renderCount++;
          return null;
        };
        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(2);
      });
    });

    describe('children using React.memo()', () => {
      it('should render memo children only once if the offset does not change', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          renderCount++;
          return null;
        });

        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider
            {...mockContextProviderProps}
            clipPathId="my mock ID is different now"
            state={mockState1}
          >
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
      });

      it('should render memo children only once even if the offset changes!', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          renderCount++;
          return null;
        });

        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider
            {...mockContextProviderProps}
            clipPathId="my mock ID but this time different"
            state={mockState2}
          >
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
      });
    });

    describe('children that read the context using a hook', () => {
      it('should render context-aware children only once', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useViewBox();
          renderCount++;
          return null;
        });

        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
      });

      it('should re-render context-aware children if the viewBox changes', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useViewBox();
          renderCount++;
          return null;
        });

        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider
            {...mockContextProviderProps}
            clipPathId="my mock ID is not important for this hook"
            state={mockState2}
          >
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(2);
      });

      it('should not re-render context-aware children if unrelated property changes', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useViewBox();
          renderCount++;
          return null;
        });
        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider
            {...mockContextProviderProps}
            clipPathId="my mock ID has changed but that should not affect viewBox hook"
            state={mockState1}
          >
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect.soft(renderCount).toBe(1);
        const mockXAxis: XAxisWithExtraData = {
          mirror: false,
          reversed: false,
          orientation: 'bottom',
          axisType: 'xAxis',
          scale: scaleTime(),
          allowDecimals: false,
          label: 'xAxisMap is different and that still should not affect viewBox hook',
        };
        const mockStateWithXAxisMap: CategoricalChartState = {
          ...mockState1,
          xAxisMap: {
            x: mockXAxis,
          },
        };
        rerender(
          <ChartLayoutContextProvider
            {...mockContextProviderProps}
            clipPathId="my mock ID has changed but that should not affect viewBox hook"
            state={mockStateWithXAxisMap}
          >
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
      });
    });
  });
});

describe('useOffset', () => {
  it('should return empty object when used outside of chart', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const offset = useOffset();
      expect(offset).toEqual({});
      return null;
    };
    render(<Comp />);
  });

  it('should return default offset in an empty chart', () => {
    expect.assertions(2);
    const Comp = (): null => {
      const offset = useOffset();
      expect(offset).toEqual({ top: 5, right: 5, bottom: 5, left: 5, brushBottom: 5, height: 190, width: 90 });
      return null;
    };
    render(
      <ComposedChart width={100} height={200}>
        <Customized component={Comp} />
      </ComposedChart>,
    );
  });

  it('should add chart margin', () => {
    expect.assertions(2);
    const Comp = (): null => {
      const offset = useOffset();
      expect(offset).toEqual({ top: 10, right: 20, bottom: 30, left: 40, brushBottom: 30, height: 160, width: 40 });
      return null;
    };
    render(
      <ComposedChart width={100} height={200} margin={{ top: 10, right: 20, bottom: 30, left: 40 }}>
        <Customized component={Comp} />
      </ComposedChart>,
    );
  });

  it('should include default Brush height (40) in bottom property', () => {
    expect.assertions(2);
    const Comp = (): null => {
      const offset = useOffset();
      expect(offset).toEqual({ top: 10, right: 20, bottom: 70, left: 40, brushBottom: 30, height: 120, width: 40 });
      return null;
    };
    render(
      <ComposedChart width={100} height={200} margin={{ top: 10, right: 20, bottom: 30, left: 40 }}>
        <Customized component={Comp} />
        <Brush />
      </ComposedChart>,
    );
  });

  it('should include explicit brush height in bottom property', () => {
    expect.assertions(2);
    const Comp = (): null => {
      const offset = useOffset();
      expect(offset).toEqual({ top: 10, right: 20, bottom: 43, left: 40, brushBottom: 30, height: 147, width: 40 });
      return null;
    };
    render(
      <ComposedChart width={100} height={200} margin={{ top: 10, right: 20, bottom: 30, left: 40 }}>
        <Customized component={Comp} />
        <Brush height={13} />
      </ComposedChart>,
    );
  });

  it.todo('should include width of YAxis');
  it.todo('should include width of multiple YAxis on left and right');
  it.todo('should exclude hidden YAxis dimensions');
  it.todo('should include height of XAxis');
  it.todo('should include height of multiple XAxis on top and bottom');
  it.todo('should exclude hidden XAxis dimensions');

  /*
   * The test for Legend can be simple and test only one case;
   * all the various Legend positioning and cases are covered by appendOffsetOfLegend tests
   * so no need to duplicate.
   */
  it.todo('should include width and height on Legend - see appendOffsetOfLegend for detailed behaviour');
});
