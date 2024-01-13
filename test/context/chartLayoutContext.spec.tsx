import React, { memo } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import {
  ChartLayoutContextProvider,
  useClipPathId,
  useXAxisOrThrow,
  useYAxisOrThrow,
} from '../../src/context/chartLayoutContext';
import { CategoricalChartState } from '../../src/chart/types';
import { XAxisMap, YAxisMap } from '../../src/util/types';

describe('ChartLayoutContextProvider', () => {
  describe('ClipPathIdContext', () => {
    it('should add clipPathId to context', () => {
      expect.assertions(1);
      const MockConsumer = () => {
        const clipPathId = useClipPathId();
        expect(clipPathId).toBe('my mock ID');
        return null;
      };
      render(
        <ChartLayoutContextProvider clipPathId="my mock ID" state={{}}>
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
        const mockState: CategoricalChartState = {};
        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState}>
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
        const mockState: CategoricalChartState = {};
        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState}>
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
        const mockState: CategoricalChartState = {};
        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider clipPathId="my mock ID but this time different" state={mockState}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
      });
    });

    describe('children that read the context using a hook', () => {
      it('should render a context-aware children only once', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useClipPathId();
          renderCount++;
          return null;
        });
        const mockState: CategoricalChartState = {};
        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
      });

      it('should re-render a context-aware children if the clipPathId changes', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useClipPathId();
          renderCount++;
          return null;
        });
        const mockState: CategoricalChartState = {};
        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider clipPathId="my mock ID but this time different" state={mockState}>
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
        const mockState1: CategoricalChartState = {};
        const mockState2: CategoricalChartState = {};
        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState2}>
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
      xAxisMap: exampleXAxisMap,
    };

    const mockState2: CategoricalChartState = {
      xAxisMap: exampleXAxisMap2,
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

      it('should throw when reading axis but the xAxisMap is undefined', () => {
        const MockConsumer = () => {
          useXAxisOrThrow('a');
          return null;
        };
        expect(() =>
          render(
            <ChartLayoutContextProvider clipPathId="" state={{}}>
              <MockConsumer />
            </ChartLayoutContextProvider>,
          ),
        ).toThrow('Could not find xAxisMap; are you sure this is rendered inside a Recharts context?');
      });

      it('should throw when reading axis outside of Recharts context', () => {
        const MockConsumer = () => {
          useXAxisOrThrow('a');
          return null;
        };
        expect(() => render(<MockConsumer />)).toThrow(
          'Could not find xAxisMap; are you sure this is rendered inside a Recharts context?',
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
            <ChartLayoutContextProvider clipPathId="" state={{ xAxisMap }}>
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
            <ChartLayoutContextProvider clipPathId="" state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>,
          ),
        ).toThrow('Invariant failed: Could not find xAxis by id "wrong ID" [string]. Available ids are: a.');
      });
    });

    it('should add xAxis to context', () => {
      expect.assertions(2);
      const xAxisMap: XAxisMap = {
        a: {
          width: 200,
          height: 10,
        },
      };
      const MockConsumer = () => {
        const xAxis = useXAxisOrThrow('a');
        expect(xAxis).toEqual({
          width: 200,
          height: 10,
        });
        expect(xAxis).toBe(xAxisMap.a);
        return null;
      };
      render(
        <ChartLayoutContextProvider clipPathId="" state={{ xAxisMap }}>
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
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState1}>
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
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider clipPathId="my mock ID is different now" state={mockState1}>
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
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider clipPathId="my mock ID but this time different" state={mockState2}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
      });
    });

    describe('children that read the context using a hook', () => {
      it('should render a context-aware children only once', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useXAxisOrThrow('a');
          renderCount++;
          return null;
        });

        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
      });

      it('should re-render a context-aware children if the xAxisMap changes', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useXAxisOrThrow('a');
          renderCount++;
          return null;
        });

        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider clipPathId="my mock ID is not important for this hook" state={mockState2}>
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
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider
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
      yAxisMap: exampleYAxisMap,
    };

    const mockState2: CategoricalChartState = {
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
            <ChartLayoutContextProvider clipPathId="" state={{}}>
              <MockConsumer />
            </ChartLayoutContextProvider>,
          ),
        ).toThrow('Could not find yAxisMap; are you sure this is rendered inside a Recharts context?');
      });

      it('should throw when reading axis outside of Recharts context', () => {
        const MockConsumer = () => {
          useYAxisOrThrow('a');
          return null;
        };
        expect(() => render(<MockConsumer />)).toThrow(
          'Could not find yAxisMap; are you sure this is rendered inside a Recharts context?',
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
            <ChartLayoutContextProvider clipPathId="" state={{ yAxisMap }}>
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
            <ChartLayoutContextProvider clipPathId="" state={mockState1}>
              <MockConsumer />
            </ChartLayoutContextProvider>,
          ),
        ).toThrow('Invariant failed: Could not find yAxis by id "wrong ID" [string]. Available ids are: m.');
      });
    });

    it('should add xAxis to context', () => {
      expect.assertions(2);
      const xAxisMap: XAxisMap = {
        a: {
          width: 200,
          height: 10,
        },
      };
      const MockConsumer = () => {
        const xAxis = useXAxisOrThrow('a');
        expect(xAxis).toEqual({
          width: 200,
          height: 10,
        });
        expect(xAxis).toBe(xAxisMap.a);
        return null;
      };
      render(
        <ChartLayoutContextProvider clipPathId="" state={{ xAxisMap }}>
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
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState1}>
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
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider clipPathId="my mock ID is different now" state={mockState1}>
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
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider clipPathId="my mock ID but this time different" state={mockState2}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
      });
    });

    describe('children that read the context using a hook', () => {
      it('should render a context-aware children only once', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useYAxisOrThrow('m');
          renderCount++;
          return null;
        });

        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
      });

      it('should re-render a context-aware children if the yAxisMap changes', () => {
        let renderCount = 0;
        const MockConsumer = memo(() => {
          useYAxisOrThrow('m');
          renderCount++;
          return null;
        });

        expect(renderCount).toBe(0);
        const { rerender } = render(
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider clipPathId="my mock ID is not important for this hook" state={mockState2}>
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
          <ChartLayoutContextProvider clipPathId="my mock ID" state={mockState1}>
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect(renderCount).toBe(1);
        rerender(
          <ChartLayoutContextProvider
            clipPathId="my mock ID has changed but that should not affect xAxis hook"
            state={mockState1}
          >
            <MockConsumer />
          </ChartLayoutContextProvider>,
        );
        expect.soft(renderCount).toBe(1);
        const mockStateWithYAxisMap: CategoricalChartState = {
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
});
