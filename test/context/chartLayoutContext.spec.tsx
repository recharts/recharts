import React, { memo } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import {
  ChartLayoutContextProvider,
  ChartLayoutContextProviderProps,
  useClipPathId,
  useMaybeXAxis,
  useViewBox,
  useXAxisOrThrow,
  useYAxisOrThrow,
} from '../../src/context/chartLayoutContext';
import { CategoricalChartState } from '../../src/chart/types';
import { XAxisMap, YAxisMap } from '../../src/util/types';

describe('ChartLayoutContextProvider', () => {
  const minimalState: CategoricalChartState = {
    offset: {},
  };
  const mockContextProviderProps: ChartLayoutContextProviderProps = {
    state: minimalState,
    clipPathId: 'my mock ID',
    width: 100,
    height: 100,
    children: <div />,
  };

  describe('ClipPathIdContext', () => {
    it('should add clipPathId to context', () => {
      expect.assertions(1);
      const MockConsumer = () => {
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
      const MockComponent = () => {
        const clipPathId = useClipPathId();
        expect(clipPathId).toBe(undefined);
        return null;
      };
      render(<MockComponent />);
    });

    describe('vanilla children', () => {
      it('should re-render children every time even when nothing changes', () => {
        let renderCount = 0;
        const MockConsumer = () => {
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

  describe('XAxisContext', () => {
    const exampleXAxisMap: XAxisMap = {
      a: {
        width: 200,
        height: 10,
      },
    };

    const exampleXAxisMap2: XAxisMap = {
      a: {
        width: 300,
        height: 40,
      },
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
      let originalConsoleError;
      beforeAll(() => {
        originalConsoleError = console.error;
        console.error = vi.fn();
      });

      afterAll(() => {
        console.error = originalConsoleError;
        originalConsoleError = null;
      });

      it('should throw when reading axis but the xAxisMap is undefined', () => {
        const MockConsumer = () => {
          useXAxisOrThrow('a');
          return null;
        };
        expect(() =>
          render(
            <ChartLayoutContextProvider {...mockContextProviderProps}>
              <MockConsumer />
            </ChartLayoutContextProvider>,
          ),
        ).toThrow(
          'Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?',
        );
      });

      it('should throw when reading axis outside of Recharts context', () => {
        const MockConsumer = () => {
          useXAxisOrThrow('a');
          return null;
        };
        expect(() => render(<MockConsumer />)).toThrow(
          'Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?',
        );
      });

      it('should throw when reading axis but the xAxisMap is empty object', () => {
        const MockConsumer = () => {
          useXAxisOrThrow('a');
          return null;
        };

        const xAxisMap: XAxisMap = {};
        expect(() =>
          render(
            <ChartLayoutContextProvider {...mockContextProviderProps} state={{ ...minimalState, xAxisMap }}>
              <MockConsumer />
            </ChartLayoutContextProvider>,
          ),
        ).toThrow('Invariant failed: Could not find xAxis by id "a" [string]. There are no available ids.');
      });

      it('should throw when axes are set but the ID is wrong', () => {
        const MockConsumer = () => {
          useXAxisOrThrow('wrong ID');
          return null;
        };
        expect(() =>
          render(
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>,
          ),
        ).toThrow('Invariant failed: Could not find xAxis by id "wrong ID" [string]. Available ids are: a.');
      });

      it('should read xAxis from context', () => {
        expect.assertions(2);
        const MockConsumer = () => {
          const xAxis = useXAxisOrThrow('a');
          expect(xAxis).toEqual({
            width: 200,
            height: 10,
          });
          expect(xAxis).toBe(exampleXAxisMap.a);
          return null;
        };
        render(
          <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
      });
    });

    describe('useMaybeXAxis', () => {
      let originalConsoleError;
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
        const MockConsumer = () => {
          const xAxis = useMaybeXAxis('wrong ID');
          expect(xAxis).toBe(undefined);
          return null;
        };

        render(
          <ChartLayoutContextProvider {...mockContextProviderProps}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
      });

      it('should return undefined when reading axis outside of Recharts context', () => {
        expect.assertions(1);
        const MockConsumer = () => {
          const xAxis = useMaybeXAxis('wrong ID');
          expect(xAxis).toBe(undefined);
          return null;
        };
        render(<MockConsumer />);
      });

      it('should return undefined when reading axis but the xAxisMap is empty object', () => {
        expect.assertions(1);
        const MockConsumer = () => {
          const xAxis = useMaybeXAxis('wrong ID');
          expect(xAxis).toBe(undefined);
          return null;
        };

        const xAxisMap: XAxisMap = {};
        render(
          <ChartLayoutContextProvider {...mockContextProviderProps} state={{ ...minimalState, xAxisMap }}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
      });

      it('should return undefined when axes are set but the ID is wrong', () => {
        expect.assertions(1);
        const MockConsumer = () => {
          const xAxis = useMaybeXAxis('wrong ID');
          expect(xAxis).toBe(undefined);
          return null;
        };
        render(
          <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
      });

      it('should read xAxis from context', () => {
        expect.assertions(2);
        const MockConsumer = () => {
          const xAxis = useMaybeXAxis('a');
          expect(xAxis).toEqual({
            width: 200,
            height: 10,
          });
          expect(xAxis).toBe(exampleXAxisMap.a);
          return null;
        };
        render(
          <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
      });
    });

    describe('vanilla children', () => {
      it('should re-render children every time even when nothing changes', () => {
        let renderCount = 0;
        const MockConsumer = () => {
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
      it('should render memo children only once if the xAxisMap does not change', () => {
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

      it('should render memo children only once even if the xAxisMap changes!', () => {
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
          useXAxisOrThrow('a');
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

      it('should re-render context-aware children if the xAxisMap changes', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useXAxisOrThrow('a');
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
          useXAxisOrThrow('a');
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
            clipPathId="my mock ID has changed but that should not affect xAxis hook"
            state={mockState1}
          >
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect.soft(renderCount).toBe(1);
        const mockStateWithYAxisMap: CategoricalChartState = {
          ...mockState1,
          yAxisMap: {
            y: {
              allowDecimals: false,
              label: 'yAxisMap is different and that still should not affect the xAxis hook',
            },
          },
        };
        rerender(
          <ChartLayoutContextProvider
            {...mockContextProviderProps}
            clipPathId="my mock ID has changed but that should not affect xAxis hook"
            state={mockStateWithYAxisMap}
          >
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
      });
    });
  });

  describe('YAxisContext', () => {
    const exampleYAxisMap: YAxisMap = {
      m: {
        width: 200,
        height: 10,
      },
    };

    const exampleYAxisMap2: YAxisMap = {
      m: {
        width: 200,
        height: 10,
      },
    };

    const mockState1: CategoricalChartState = {
      ...minimalState,
      yAxisMap: exampleYAxisMap,
    };

    const mockState2: CategoricalChartState = {
      ...minimalState,
      yAxisMap: exampleYAxisMap2,
    };

    describe('error cases', () => {
      let originalConsoleError;
      beforeAll(() => {
        originalConsoleError = console.error;
        console.error = vi.fn();
      });

      afterAll(() => {
        console.error = originalConsoleError;
        originalConsoleError = null;
      });

      it('should throw when reading axis but the yAxisMap is undefined', () => {
        const MockConsumer = () => {
          useYAxisOrThrow('a');
          return null;
        };
        expect(() =>
          render(
            <ChartLayoutContextProvider {...mockContextProviderProps}>
              <MockConsumer />
            </ChartLayoutContextProvider>,
          ),
        ).toThrow(
          'Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?',
        );
      });

      it('should throw when reading axis outside of Recharts context', () => {
        const MockConsumer = () => {
          useYAxisOrThrow('a');
          return null;
        };
        expect(() => render(<MockConsumer />)).toThrow(
          'Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?',
        );
      });

      it('should throw when reading axis but the xAxisMap is empty object', () => {
        const MockConsumer = () => {
          useYAxisOrThrow('a');
          return null;
        };

        const yAxisMap: YAxisMap = {};
        expect(() =>
          render(
            <ChartLayoutContextProvider {...mockContextProviderProps} state={{ ...minimalState, yAxisMap }}>
              <MockConsumer />
            </ChartLayoutContextProvider>,
          ),
        ).toThrow('Invariant failed: Could not find yAxis by id "a" [string]. There are no available ids.');
      });

      it('should throw when axes are set but the ID is wrong', () => {
        const MockConsumer = () => {
          useYAxisOrThrow('wrong ID');
          return null;
        };
        expect(() =>
          render(
            <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>,
          ),
        ).toThrow('Invariant failed: Could not find yAxis by id "wrong ID" [string]. Available ids are: m.');
      });
    });

    it('should add yAxis to context', () => {
      expect.assertions(2);
      const MockConsumer = () => {
        const yAxis = useYAxisOrThrow('m');
        expect(yAxis).toEqual({
          width: 200,
          height: 10,
        });
        expect(yAxis).toBe(exampleYAxisMap.m);
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
        const MockConsumer = () => {
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
      it('should render memo children only once if the yAxisMap does not change', () => {
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

      it('should render memo children only once even if the yAxisMap changes!', () => {
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
          useYAxisOrThrow('m');
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

      it('should re-render context-aware children if the yAxisMap changes', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useYAxisOrThrow('m');
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
          <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState2}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
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
          <ChartLayoutContextProvider {...mockContextProviderProps} state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider
            {...mockContextProviderProps}
            clipPathId="my mock ID has changed but that should not affect xAxis hook"
            state={mockState1}
          >
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect.soft(renderCount).toBe(1);
        const mockStateWithXAxisMap: CategoricalChartState = {
          ...mockState1,
          xAxisMap: {
            x: {
              allowDecimals: false,
              label: 'xAxisMap is different and that still should not affect the yAxis hook',
            },
          },
        };
        rerender(
          <ChartLayoutContextProvider
            {...mockContextProviderProps}
            clipPathId="my mock ID has changed but that should not affect xAxis hook"
            state={mockStateWithXAxisMap}
          >
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
      });
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
      const MockConsumer = () => {
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
      const MockConsumer = () => {
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
        const MockConsumer = () => {
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
        const mockStateWithXAxisMap: CategoricalChartState = {
          ...mockState1,
          xAxisMap: {
            x: {
              allowDecimals: false,
              label: 'xAxisMap is different and that still should not affect viewBox hook',
            },
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
