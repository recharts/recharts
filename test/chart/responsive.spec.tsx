import React from 'react';
import { act, render } from '@testing-library/react';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { ComposedChart, Line, ResponsiveContainer, useChartHeight, useChartWidth } from '../../src';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { PageData } from '../_data';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';

describe('responsive prop', () => {
  let resizeObserverCallback: (entries: ResizeObserverEntry[]) => void,
    resizeObserverMock: {
      observe: ReturnType<typeof vi.fn>;
      unobserve: ReturnType<typeof vi.fn>;
      disconnect: ReturnType<typeof vi.fn>;
    };

  beforeEach(() => {
    resizeObserverMock = {
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    };
    mockGetBoundingClientRect({ width: 500, height: 400 });
    vi.stubGlobal(
      'ResizeObserver',
      vi.fn().mockImplementation(cb => {
        resizeObserverCallback = cb;
        return resizeObserverMock;
      }),
    );
  });

  describe.each([false, undefined])('with responsive=%s', responsive => {
    describe('when width and height are not specified', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <ComposedChart responsive={responsive} data={PageData}>
          <Line dataKey="uv" />
          {children}
        </ComposedChart>
      ));

      it('should not render any SVG', () => {
        const { container } = renderTestCase();
        expect(container.querySelector('svg')).toBeNull();
      });

      it('should render wrapper div', () => {
        const { container } = renderTestCase();
        const wrapperElement = container.querySelector('.recharts-wrapper');
        expect(wrapperElement).toBeInTheDocument();
        expect(wrapperElement).toHaveStyle({ position: 'relative', width: undefined, height: undefined });
      });

      it('should not interact with ResizeObserver', () => {
        renderTestCase();
        expect(resizeObserverMock.observe).not.toHaveBeenCalled();
      });

      it('should not render children', () => {
        const { spy } = renderTestCase(useChartWidth);
        expect(spy).not.toHaveBeenCalled();
      });
    });

    describe('when width and height are numbers', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <ComposedChart width={600} height={400} responsive={responsive} data={PageData}>
          <Line dataKey="uv" />
          {children}
        </ComposedChart>
      ));

      it('should render svg with given width and height', () => {
        const { container } = renderTestCase();
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
        expect(svg).toHaveAttribute('width', '600');
        expect(svg).toHaveAttribute('height', '400');
      });

      it('should render wrapper div with width and height', () => {
        const { container } = renderTestCase();
        const wrapperElement = container.querySelector('.recharts-wrapper');
        expect(wrapperElement).toBeInTheDocument();
        expect(wrapperElement).toHaveStyle({ position: 'relative', width: '600px', height: '400px' });
      });

      it('should not interact with ResizeObserver', () => {
        renderTestCase();
        expect(resizeObserverMock.observe).not.toHaveBeenCalled();
      });

      it('should return the width from useChartWidth', () => {
        const { spy } = renderTestCase(useChartWidth);
        expectLastCalledWith(spy, 600);
      });

      it('should return the height from useChartHeight', () => {
        const { spy } = renderTestCase(useChartHeight);
        expectLastCalledWith(spy, 400);
      });
    });

    describe('when width and height are percentages', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <ComposedChart width="50%" height="50%" responsive={responsive} data={PageData}>
          <Line dataKey="uv" />
          {children}
        </ComposedChart>
      ));

      it('should render svg with dimensions from getBoundingClientRect', () => {
        const { container } = renderTestCase();
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
        expect(svg).toHaveAttribute('width', '500');
        expect(svg).toHaveAttribute('height', '400');
      });

      it('should render wrapper div with width and height', () => {
        const { container } = renderTestCase();
        const wrapperElement = container.querySelector('.recharts-wrapper');
        expect(wrapperElement).toBeInTheDocument();
        expect(wrapperElement).toHaveStyle({ position: 'relative', width: '50%', height: '50%' });
      });

      it('should not interact with ResizeObserver', () => {
        renderTestCase();
        expect(resizeObserverMock.observe).not.toHaveBeenCalled();
      });

      it('should return the width from useChartWidth', () => {
        const { spy } = renderTestCase(useChartWidth);
        expectLastCalledWith(spy, 500);
      });

      it('should return the height from useChartHeight', () => {
        const { spy } = renderTestCase(useChartHeight);
        expectLastCalledWith(spy, 400);
      });
    });

    describe('when width and height are passed in style prop as numbers', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <ComposedChart style={{ width: 600, height: 200 }} responsive={responsive} data={PageData}>
          <Line dataKey="uv" />
          {children}
        </ComposedChart>
      ));

      it('should render svg with given width and height', () => {
        const { container } = renderTestCase();
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
        expect(svg).toHaveAttribute('width', '600');
        expect(svg).toHaveAttribute('height', '200');
      });

      it('should render wrapper div with width and height', () => {
        const { container } = renderTestCase();
        const wrapperElement = container.querySelector('.recharts-wrapper');
        expect(wrapperElement).toBeInTheDocument();
        expect(wrapperElement).toHaveStyle({ position: 'relative', width: '600px', height: '200px' });
      });

      it('should not interact with ResizeObserver', () => {
        renderTestCase();
        expect(resizeObserverMock.observe).not.toHaveBeenCalled();
      });

      it('should return the width from useChartWidth', () => {
        const { spy } = renderTestCase(useChartWidth);
        expectLastCalledWith(spy, 600);
      });

      it('should return the height from useChartHeight', () => {
        const { spy } = renderTestCase(useChartHeight);
        expectLastCalledWith(spy, 200);
      });
    });

    describe('when width and height are passed in style prop as percentages', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <ComposedChart style={{ width: '50%', height: '50%' }} responsive={responsive} data={PageData}>
          <Line dataKey="uv" />
          {children}
        </ComposedChart>
      ));

      it('should render svg with dimensions from getBoundingClientRect', () => {
        const { container } = renderTestCase();
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
        expect(svg).toHaveAttribute('width', '500');
        expect(svg).toHaveAttribute('height', '400');
      });

      it('should render wrapper div with width and height', () => {
        const { container } = renderTestCase();
        const wrapperElement = container.querySelector('.recharts-wrapper');
        expect(wrapperElement).toBeInTheDocument();
        expect(wrapperElement).toHaveStyle({ position: 'relative', width: '50%', height: '50%' });
      });

      it('should not interact with ResizeObserver', () => {
        renderTestCase();
        expect(resizeObserverMock.observe).not.toHaveBeenCalled();
      });

      it('should return the width from useChartWidth', () => {
        const { spy } = renderTestCase(useChartWidth);
        expectLastCalledWith(spy, 500);
      });

      it('should return the height from useChartHeight', () => {
        const { spy } = renderTestCase(useChartHeight);
        expectLastCalledWith(spy, 400);
      });
    });

    describe('when width is a prop and height is from style', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <ComposedChart width={600} style={{ height: 200 }} responsive={responsive} data={PageData}>
          <Line dataKey="uv" />
          {children}
        </ComposedChart>
      ));

      it('should render svg with combined width and height', () => {
        const { container } = renderTestCase();
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
        expect(svg).toHaveAttribute('width', '600');
        expect(svg).toHaveAttribute('height', '200');
      });
    });
  });

  describe('with responsive=true', () => {
    describe('when width and height are not specified', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <ComposedChart responsive data={PageData}>
          <Line dataKey="uv" />
          {children}
        </ComposedChart>
      ));

      it('should render svg with dimensions from getBoundingClientRect', () => {
        const { container } = renderTestCase();
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
        expect(svg).toHaveAttribute('width', '500');
        expect(svg).toHaveAttribute('height', '400');
      });

      it('should render wrapper div', () => {
        const { container } = renderTestCase();
        const wrapperElement = container.querySelector('.recharts-wrapper');
        expect(wrapperElement).toBeInTheDocument();
        expect(wrapperElement).toHaveStyle({ position: 'relative', width: undefined, height: undefined });
      });

      it('should subscribe to ResizeObserver', () => {
        renderTestCase();
        expect(resizeObserverMock.observe).toHaveBeenCalled();
      });

      it('should unsubscribe from ResizeObserver on unmount', () => {
        const { unmount } = renderTestCase();
        unmount();
        expect(resizeObserverMock.disconnect).toHaveBeenCalled();
      });

      it('should return the width from useChartWidth', () => {
        const { spy } = renderTestCase(useChartWidth);
        expectLastCalledWith(spy, 500);
      });

      it('should return the height from useChartHeight', () => {
        const { spy } = renderTestCase(useChartHeight);
        expectLastCalledWith(spy, 400);
      });
    });

    describe('when width and height are numbers', () => {
      beforeEach(() => {
        mockGetBoundingClientRect({ width: 600, height: 400 });
      });
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <ComposedChart width={600} height={400} responsive data={PageData}>
          <Line dataKey="uv" />
          {children}
        </ComposedChart>
      ));

      it('should render svg with given width and height', () => {
        const { container } = renderTestCase();
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
        expect(svg).toHaveAttribute('width', '600');
        expect(svg).toHaveAttribute('height', '400');
      });

      it('should render wrapper div with width and height', () => {
        const { container } = renderTestCase();
        const wrapperElement = container.querySelector('.recharts-wrapper');
        expect(wrapperElement).toBeInTheDocument();
        expect(wrapperElement).toHaveStyle({ position: 'relative', width: '600px', height: '400px' });
      });

      it('should interact with ResizeObserver', () => {
        renderTestCase();
        expect(resizeObserverMock.observe).toHaveBeenCalled();
      });

      it('should return the width from useChartWidth', () => {
        const { spy } = renderTestCase(useChartWidth);
        expectLastCalledWith(spy, 600);
      });

      it('should return the height from useChartHeight', () => {
        const { spy } = renderTestCase(useChartHeight);
        expectLastCalledWith(spy, 400);
      });
    });

    describe('when width and height are percentages', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <ComposedChart width="50%" height="50%" responsive data={PageData}>
          <Line dataKey="uv" />
          {children}
        </ComposedChart>
      ));

      it('should render svg with dimensions from getBoundingClientRect', () => {
        const { container } = renderTestCase();
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
        expect(svg).toHaveAttribute('width', '500');
        expect(svg).toHaveAttribute('height', '400');
      });

      it('should render wrapper div with width and height', () => {
        const { container } = renderTestCase();
        const wrapperElement = container.querySelector('.recharts-wrapper');
        expect(wrapperElement).toBeInTheDocument();
        expect(wrapperElement).toHaveStyle({ position: 'relative', width: '50%', height: '50%' });
      });

      it('should interact with ResizeObserver', () => {
        renderTestCase();
        expect(resizeObserverMock.observe).toHaveBeenCalled();
      });

      it('should return the width from useChartWidth', () => {
        const { spy } = renderTestCase(useChartWidth);
        expectLastCalledWith(spy, 500);
      });

      it('should return the height from useChartHeight', () => {
        const { spy } = renderTestCase(useChartHeight);
        expectLastCalledWith(spy, 400);
      });
    });

    it('should resize the chart when the container size changes', () => {
      const ChartSize = () => {
        const width = useChartWidth();
        const height = useChartHeight();
        return <div data-testid="chart-size">{`${width}x${height}`}</div>;
      };
      const { container, getByTestId } = render(
        <ComposedChart responsive data={PageData}>
          <Line dataKey="uv" />
          <ChartSize />
        </ComposedChart>,
      );

      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '500');
      expect(svg).toHaveAttribute('height', '400');
      expect(getByTestId('chart-size').textContent).toBe('500x400');

      act(() => {
        resizeObserverCallback([{ contentRect: { width: 300, height: 200 } }] as ResizeObserverEntry[]);
      });

      expect(svg).toHaveAttribute('width', '300');
      expect(svg).toHaveAttribute('height', '200');
      expect(getByTestId('chart-size').textContent).toBe('300x200');
    });

    describe('when width and height are passed in style prop as numbers', () => {
      beforeEach(() => {
        mockGetBoundingClientRect({ width: 700, height: 100 });
      });
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <ComposedChart style={{ width: 700, height: 100 }} responsive data={PageData}>
          <Line dataKey="uv" />
          {children}
        </ComposedChart>
      ));

      it('should render svg with given width and height', () => {
        const { container } = renderTestCase();
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
        expect(svg).toHaveAttribute('width', '700');
        expect(svg).toHaveAttribute('height', '100');
      });

      it('should render wrapper div with width and height', () => {
        const { container } = renderTestCase();
        const wrapperElement = container.querySelector('.recharts-wrapper');
        expect(wrapperElement).toBeInTheDocument();
        expect(wrapperElement).toHaveStyle({ position: 'relative', width: '700px', height: '100px' });
      });

      it('should interact with ResizeObserver', () => {
        renderTestCase();
        expect(resizeObserverMock.observe).toHaveBeenCalled();
      });

      it('should return the width from useChartWidth', () => {
        const { spy } = renderTestCase(useChartWidth);
        expectLastCalledWith(spy, 700);
      });

      it('should return the height from useChartHeight', () => {
        const { spy } = renderTestCase(useChartHeight);
        expectLastCalledWith(spy, 100);
      });
    });

    describe('when width and height are passed in style prop as percentages', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <ComposedChart style={{ width: '90%', height: '80%' }} responsive data={PageData}>
          <Line dataKey="uv" />
          {children}
        </ComposedChart>
      ));

      it('should render svg with dimensions from getBoundingClientRect', () => {
        const { container } = renderTestCase();
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
        expect(svg).toHaveAttribute('width', '500');
        expect(svg).toHaveAttribute('height', '400');
      });

      it('should render wrapper div with width and height', () => {
        const { container } = renderTestCase();
        const wrapperElement = container.querySelector('.recharts-wrapper');
        expect(wrapperElement).toBeInTheDocument();
        expect(wrapperElement).toHaveStyle({ position: 'relative', width: '90%', height: '80%' });
      });

      it('should interact with ResizeObserver', () => {
        renderTestCase();
        expect(resizeObserverMock.observe).toHaveBeenCalled();
      });

      it('should return the width from useChartWidth', () => {
        const { spy } = renderTestCase(useChartWidth);
        expectLastCalledWith(spy, 500);
      });

      it('should return the height from useChartHeight', () => {
        const { spy } = renderTestCase(useChartHeight);
        expectLastCalledWith(spy, 400);
      });
    });

    it('should resize the chart when the container size changes and size is in style', () => {
      const ChartSize = () => {
        const width = useChartWidth();
        const height = useChartHeight();
        return <div data-testid="chart-size">{`${width}x${height}`}</div>;
      };
      const { container, getByTestId } = render(
        <ComposedChart responsive data={PageData} style={{ width: '100%', height: '100%' }}>
          <Line dataKey="uv" />
          <ChartSize />
        </ComposedChart>,
      );

      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '500');
      expect(svg).toHaveAttribute('height', '400');
      expect(getByTestId('chart-size').textContent).toBe('500x400');

      act(() => {
        resizeObserverCallback([{ contentRect: { width: 300, height: 200 } }] as ResizeObserverEntry[]);
      });

      expect(svg).toHaveAttribute('width', '300');
      expect(svg).toHaveAttribute('height', '200');
      expect(getByTestId('chart-size').textContent).toBe('300x200');
    });

    describe('when width is a prop and height is from style', () => {
      beforeEach(() => {
        mockGetBoundingClientRect({ width: 600, height: 200 });
      });
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <ComposedChart width={600} style={{ height: 200 }} responsive data={PageData}>
          <Line dataKey="uv" />
          {children}
        </ComposedChart>
      ));

      it('should render svg with combined width and height', () => {
        const { container } = renderTestCase();
        const svg = container.querySelector('svg');
        expect(svg).not.toBeNull();
        expect(svg).toHaveAttribute('width', '600');
        expect(svg).toHaveAttribute('height', '200');
      });

      it('should interact with ResizeObserver', () => {
        renderTestCase();
        expect(resizeObserverMock.observe).toHaveBeenCalled();
      });
    });
  });

  describe('Edge cases', () => {
    describe('when width and height are zero', () => {
      it('should not render an svg', () => {
        const { container } = render(
          <ComposedChart width={0} height={0} data={PageData}>
            <Line dataKey="uv" />
          </ComposedChart>,
        );
        expect(container.querySelector('svg')).toBeNull();
      });
    });

    describe('when width and height are negative', () => {
      it('should not render an svg', () => {
        const { container } = render(
          <ComposedChart width={-100} height={-100} data={PageData}>
            <Line dataKey="uv" />
          </ComposedChart>,
        );
        expect(container.querySelector('svg')).toBeNull();
      });
    });
  });

  describe('Interaction with ResponsiveContainer', () => {
    it('should prioritize dimensions from ResponsiveContainer over its own props', () => {
      const { container } = render(
        <ResponsiveContainer width={800} height={600}>
          <ComposedChart width={100} height={100} data={PageData}>
            <Line dataKey="uv" />
          </ComposedChart>
        </ResponsiveContainer>,
      );
      const svg = container.querySelector('svg');
      expect(svg).not.toBeNull();
      expect(svg).toHaveAttribute('width', '800');
      expect(svg).toHaveAttribute('height', '600');
    });
  });
});
