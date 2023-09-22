import React from 'react';

import { render, screen } from '@testing-library/react';
import { ResponsiveContainer } from '../../src';

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
  let notifyResizeObserverChange: (arg: unknown) => void;

  /**
   * ResizeObserver is not available so we have to create a mock to avoid error coming
   * from `react-resize-detector`.
   * @see https://github.com/maslianok/react-resize-detector/issues/145
   *
   * This mock also allow us to use {@link notifyResizeObserverChange} to fire changes
   * from inside our test.
   */
  const resizeObserverMock = jest.fn().mockImplementation(callback => {
    notifyResizeObserverChange = callback;

    return {
      observe: jest.fn().mockImplementation(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    };
  });
  const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => undefined);

  beforeAll(() => {
    delete window.ResizeObserver;

    window.ResizeObserver = resizeObserverMock;
  });

  afterEach(() => {
    resizeObserverMock.mockClear();
    consoleWarnSpy.mockClear();
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

    notifyResizeObserverChange([{ contentRect: { width: 100, height: 100 } }]);

    expect(element).toHaveAttribute('width', '100');
    expect(element).toHaveAttribute('height', '100');
  });

  it('should resize when debounced', () => {
    jest.useFakeTimers('modern');
    const { container } = render(
      <ResponsiveContainer id="testing-id-attr" width="100%" height={200} debounce={200}>
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    const element = container.querySelector('.recharts-responsive-container');

    notifyResizeObserverChange([{ contentRect: { width: 50, height: 50 } }]);
    jest.advanceTimersByTime(100);
    expect(element).not.toHaveAttribute('width');
    expect(element).not.toHaveAttribute('height');

    notifyResizeObserverChange([{ contentRect: { width: 100, height: 100 } }]);
    jest.runAllTimers();

    expect(element).toHaveAttribute('width', '100');
    expect(element).toHaveAttribute('height', '100');
  });

  it('should call onResize when ResizeObserver notifies one or many changes', () => {
    const onResize = jest.fn();

    const { container } = render(
      <ResponsiveContainer width="100%" height={200} onResize={onResize}>
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    const element = container.querySelector('.recharts-responsive-container');
    expect(element).not.toHaveAttribute('width');
    expect(element).not.toHaveAttribute('height');

    notifyResizeObserverChange([{ contentRect: { width: 100, height: 100 } }]);

    expect(element).toHaveAttribute('width', '100');
    expect(element).toHaveAttribute('height', '100');

    expect(onResize).toHaveBeenCalledTimes(1);

    notifyResizeObserverChange([{ contentRect: { width: 200, height: 200 } }]);

    expect(onResize).toHaveBeenCalledTimes(2);
  });

  it('should have a min-width of 0 when no minWidth is set', () => {
    const onResize = jest.fn();

    const { container } = render(
      <ResponsiveContainer width="100%" height={200} onResize={onResize}>
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    const element = container.querySelector('.recharts-responsive-container');

    expect(element).toHaveStyle({ width: '100%', height: '200px', 'min-width': '0' });
  });

  it('should accept and render the style prop if it is set', () => {
    const { container } = render(
      <ResponsiveContainer style={{ color: 'red', backgroundColor: '#FF00FF' }}>
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    expect(container.querySelector('.recharts-responsive-container')).toHaveStyle({
      color: 'red',
      backgroundColor: '#FF00FF',
    });
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
      backgroundColor: 'red',
      color: 'red',
    });
  });

  it('should have a min-width of 200px when minWidth is 200', () => {
    const onResize = jest.fn();

    const { container } = render(
      <ResponsiveContainer width="100%" height={200} minWidth={200} onResize={onResize}>
        <div data-testid="inside" />
      </ResponsiveContainer>,
    );

    const element = container.querySelector('.recharts-responsive-container');

    expect(element).toHaveStyle({ width: '100%', height: '200px', 'min-width': '200px' });
  });
});
