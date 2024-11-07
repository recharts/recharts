import React from 'react';
import { Mock, MockInstance, vi } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import { ResponsiveContainer } from '../../src';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';

declare global {
  interface Window {
    ResizeObserver: unknown;
  }
}

describe('<ResponsiveContainer />', () => {
  /**
   * Use this function to simulate a change fired by a window.ResizeObserver
   * You just need to pass a param with ResizeObserverEntry structure like:
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry
   */
  let notifyResizeObserverChange: (arg: unknown) => void,
    consoleWarnSpy: MockInstance<(...args: any[]) => void>,
    resizeObserverMock: Mock<(arg: any) => any>;

  beforeEach(() => {
    /**
     * ResizeObserver is not available, so we have to create a mock to avoid error coming
     * from `react-resize-detector`.
     * @see https://github.com/maslianok/react-resize-detector/issues/145
     *
     * This mock also allow us to use {@link notifyResizeObserverChange} to fire changes
     * from inside our test.
     */
    resizeObserverMock = vi.fn().mockImplementation(callback => {
      notifyResizeObserverChange = callback;

      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    });
    consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation((): void => undefined);

    delete window.ResizeObserver;

    window.ResizeObserver = resizeObserverMock;
  });

  it('Render a wrapper container in ResponsiveContainer', () => {
    const { container } = render(
      <ResponsiveContainer>
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    expect(container.querySelector('.recharts-responsive-container')).toBeTruthy();

    // should issue a warning since no dimension is set, therefore they are 0
    expect(consoleWarnSpy).toHaveBeenCalled();
    expect(consoleWarnSpy).toHaveBeenCalledWith(expect.any(String));
  });

  it('Renders with minHeight and minWidth when provided', () => {
    const { container } = render(
      <ResponsiveContainer minWidth={200} minHeight={100}>
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    expect(container.querySelector('.recharts-responsive-container')).toHaveStyle({
      minWidth: '200px',
      minHeight: '100px',
    });
  });

  it('Renders the component inside', () => {
    render(
      <ResponsiveContainer minWidth={200} minHeight={100}>
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    expect(screen.getByTestId('inside')).toBeTruthy();
  });

  it('Handles zero height correctly', () => {
    render(
      <ResponsiveContainer height={0} aspect={2} width={300}>
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    expect(screen.getByTestId('inside')).toHaveAttribute('width', '300');
    expect(screen.getByTestId('inside')).toHaveAttribute('height', '150');
  });

  it('Handles zero width correctly', () => {
    render(
      <ResponsiveContainer height={300} aspect={2} width={0}>
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    expect(screen.getByTestId('inside')).toHaveAttribute('width', '600');
    expect(screen.getByTestId('inside')).toHaveAttribute('height', '300');
  });

  // Note that we force height and width here which will trigger a warning.
  // Unfortunately ContainerDimensions does not measure with enzyme
  // so we have to force it to test aspect handling behaviors
  it('Preserves aspect ratio when oversized', () => {
    render(
      <ResponsiveContainer aspect={2} height={100} width={300}>
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    expect(screen.getByTestId('inside')).toHaveAttribute('width', '300');
    expect(screen.getByTestId('inside')).toHaveAttribute('height', '150');
  });

  it('Preserves aspect ratio when undersized', () => {
    render(
      <ResponsiveContainer aspect={2} height={300} width={100}>
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    expect(screen.getByTestId('inside')).toHaveAttribute('width', '100');
    expect(screen.getByTestId('inside')).toHaveAttribute('height', '50');
  });

  it('Renders without an id attribute when not passed', () => {
    const { container } = render(
      <ResponsiveContainer>
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    expect(container.querySelector('.recharts-responsive-container')).not.toHaveAttribute('id');
  });

  it('Renders with id attribute when passed', () => {
    const { container } = render(
      <ResponsiveContainer id="testing-id-attr">
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    expect(container.querySelector('.recharts-responsive-container')).toHaveAttribute('id', 'testing-id-attr');
  });

  it('should resize when ResizeObserver notify a change', () => {
    const { container } = render(
      <ResponsiveContainer id="testing-id-attr" width="100%" height={200}>
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    const element = container.querySelector('.recharts-responsive-container');
    expect(element).not.toHaveAttribute('width');
    expect(element).not.toHaveAttribute('height');

    act(() => {
      notifyResizeObserverChange([{ contentRect: { width: 100, height: 100 } }]);
    });

    expect(element.firstElementChild).toHaveAttribute('width', '100');
    expect(element.firstElementChild).toHaveAttribute('height', '200');
  });

  it('should resize when debounced', () => {
    vi.useFakeTimers();
    const { container } = render(
      <ResponsiveContainer id="testing-id-attr" width="100%" height={200} debounce={200}>
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    const element = container.querySelector('.recharts-responsive-container');

    act(() => {
      notifyResizeObserverChange([{ contentRect: { width: 50, height: 50 } }]);
    });
    expect(element).not.toHaveAttribute('width');
    expect(element).not.toHaveAttribute('height');

    act(() => {
      notifyResizeObserverChange([{ contentRect: { width: 100, height: 100 } }]);
      vi.advanceTimersByTime(200);
    });
    expect(element.firstElementChild).toHaveAttribute('width', '100');
    expect(element.firstElementChild).toHaveAttribute('height', '200');
  });

  it('should call onResize when ResizeObserver notifies one or many changes', () => {
    const onResize = vi.fn();

    const { container } = render(
      <ResponsiveContainer width="100%" height={200} onResize={onResize}>
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    const element = container.querySelector('.recharts-responsive-container');
    expect(element).not.toHaveAttribute('width');
    expect(element).not.toHaveAttribute('height');

    act(() => {
      notifyResizeObserverChange([{ contentRect: { width: 100, height: 100 } }]);
    });

    expect(element.firstElementChild).toHaveAttribute('width', '100');
    expect(element.firstElementChild).toHaveAttribute('height', '200');

    expect(onResize).toHaveBeenCalledTimes(1);

    act(() => {
      notifyResizeObserverChange([{ contentRect: { width: 200, height: 200 } }]);
    });

    expect(onResize).toHaveBeenCalledTimes(2);
  });

  it('should have a min-width of 0 when no minWidth is set', () => {
    const onResize = vi.fn();

    const { container } = render(
      <ResponsiveContainer width="100%" height={200} onResize={onResize}>
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    const element = container.querySelector('.recharts-responsive-container');

    expect(element).toHaveStyle({ width: '100%', height: '200px', 'min-width': '0' });
  });

  it('should accept and render the style prop if it is set', () => {
    // looks like the ResponsiveContainer style.color prop converts from string to RGB representation
    // i.e. style.color = 'red' gets converted to rgb(255,0,0)
    // I checked and changing style.color from 'red' to 'blue' changed the resulting style from
    // rgb(255,0,0) to rgb(0,0,255) as expected
    const { container } = render(
      <ResponsiveContainer style={{ color: 'red', backgroundColor: '#FF00FF' }} data-testid="container">
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );
    const responsiveContainer = container.getElementsByClassName('recharts-responsive-container');
    expect(responsiveContainer).toHaveLength(1);
    expect(responsiveContainer[0]).toHaveStyle('background-color: rgb(255, 0, 255)');
    expect(responsiveContainer[0]).toHaveStyle('color: rgb(255,0,0)');
  });

  it('should accept and render the style prop and any other specified outside of it', () => {
    const { container } = render(
      <ResponsiveContainer style={{ backgroundColor: 'red', color: 'red' }} width={100} height={100}>
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    expect(container.querySelector('.recharts-responsive-container')).toHaveStyle({
      width: '100px',
      height: '100px',
      'background-color': 'rgb(255,0,0)',
      color: 'rgb(255,0,0)',
    });
  });

  it('should have a min-width of 200px when minWidth is 200', () => {
    const onResize = vi.fn();

    const { container } = render(
      <ResponsiveContainer width="100%" height={200} minWidth={200} onResize={onResize}>
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    const element = container.querySelector('.recharts-responsive-container');

    expect(element).toHaveStyle({ width: '100%', height: '200px', 'min-width': '200px' });
  });

  it('should render multiple children if TS is ignored', () => {
    const onResize = vi.fn();

    mockGetBoundingClientRect({ height: 200, width: 400 });

    const { container } = render(
      // @ts-expect-error should render these even though ResponsiveContainer throws a type error
      <ResponsiveContainer width="100%" height={200} minWidth={200} onResize={onResize}>
        <div data-testid="inside" style={{ backgroundColor: 'blue' }} />
        <div data-testid="inside" />
        <div data-testid="inside" />
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    const responsiveContainerDiv = container.querySelector('.recharts-responsive-container');
    expect(responsiveContainerDiv).toHaveStyle({ width: '100%', height: '200px', 'min-width': '200px' });

    const elementsInside = screen.getAllByTestId('inside');

    expect(elementsInside).toHaveLength(4);
    expect(elementsInside[0]).toHaveStyle({
      width: '100%',
      height: '100%',
      'max-width': '400px',
      'max-height': '200px',
      'background-color': 'rgb(0, 0, 255)',
    });
    expect(elementsInside[0]).toHaveAttribute('height', '200');
    expect(elementsInside[0]).toHaveAttribute('width', '400');

    // all elements are cloned with the same style props besides their own style
    expect(elementsInside[1]).toHaveStyle({
      width: '100%',
      height: '100%',
      'max-width': '400px',
      'max-height': '200px',
      'background-color': 'rgba(0, 0, 0, 0)',
    });
    expect(elementsInside[1]).toHaveAttribute('height', '200');
    expect(elementsInside[1]).toHaveAttribute('width', '400');
  });
});
