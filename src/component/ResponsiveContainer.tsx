import { clsx } from 'clsx';
import * as React from 'react';
import {
  createContext,
  CSSProperties,
  forwardRef,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import throttle from 'es-toolkit/compat/throttle';
import { warn } from '../util/LogUtils';
import { calculateChartDimensions, getDefaultWidthAndHeight, getInnerDivStyle } from './responsiveContainerUtils';
import { Percent, Size } from '../util/types';
import { isPositiveNumber } from '../util/isWellBehavedNumber';

export interface Props {
  /**
   * The aspect ratio of the chart. It is calculated as `width / height`.
   * If specified, the height will be calculated by the width and this ratio.
   */
  aspect?: number;
  /**
   * The width of the container. If a percentage string is specified, it is calculated responsive to the width of the parent element.
   * @default '100%'
   */
  width?: Percent | number;
  /**
   * The height of the container. If a percentage string is specified, it is calculated responsive to the height of the parent element.
   * @default '100%'
   */
  height?: Percent | number;
  /**
   * The minimum width of the container. It can be a percentage string or a number.
   * @default 0
   */
  minWidth?: string | number;
  /** The minimum height of the container. It can be a percentage string or a number. */
  minHeight?: string | number;
  /**
   * The initial width and height of the container.
   * @default { width: -1, height: -1 }
   */
  initialDimension?: {
    width: number;
    height: number;
  };
  /** The maximum height of the container. It can be a number. */
  maxHeight?: number;
  /**
   * The content of the container.
   * It can contain multiple charts, and then they will all share the same dimensions.
   */
  children: ReactNode;
  /**
   * The debounce time for resizing events.
   * @default 0
   */
  debounce?: number;
  /** The id of the container. */
  id?: string | number;
  /** The class name of the container. */
  className?: string | number;
  /** The style of the container. */
  style?: Omit<CSSProperties, keyof Props>;
  /**
   * A callback function that will be called when the container is resized.
   * @param width The new width of the container.
   * @param height The new height of the container.
   */
  onResize?: (width: number, height: number) => void;
}

const ResponsiveContainerContext = createContext<Size>({ width: -1, height: -1 });

function ResponsiveContainerContextProvider({
  children,
  width,
  height,
}: {
  children: ReactNode;
  width: number;
  height: number;
}) {
  const size = useMemo(() => ({ width, height }), [width, height]);
  if (width <= 0 || height <= 0) {
    /*
     * Don't render the container if width or height is non-positive because
     * in that case the chart will not be rendered properly anyway.
     * We will instead wait for the next resize event to provide the correct dimensions.
     */
    return null;
  }
  return <ResponsiveContainerContext.Provider value={size}>{children}</ResponsiveContainerContext.Provider>;
}

export const useResponsiveContainerContext = () => useContext(ResponsiveContainerContext);

const SizeDetectorContainer = forwardRef<HTMLDivElement, Props>(
  (
    {
      aspect,
      initialDimension = {
        width: -1,
        height: -1,
      },
      width,
      height,
      /*
       * default min-width to 0 if not specified - 'auto' causes issues with flexbox
       * https://github.com/recharts/recharts/issues/172
       */
      minWidth = 0,
      minHeight,
      maxHeight,
      children,
      debounce = 0,
      id,
      className,
      onResize,
      style = {},
    }: Props,
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    /*
     * We are using a ref to avoid re-creating the ResizeObserver when the onResize function changes.
     * The ref is updated on every render, so the latest onResize function is always available in the effect.
     */
    const onResizeRef = useRef<Props['onResize']>();
    onResizeRef.current = onResize;
    useImperativeHandle(ref, () => containerRef.current);

    const [sizes, setSizes] = useState<{
      containerWidth: number;
      containerHeight: number;
    }>({
      containerWidth: initialDimension.width,
      containerHeight: initialDimension.height,
    });

    const setContainerSize = useCallback((newWidth: number, newHeight: number) => {
      setSizes(prevState => {
        const roundedWidth = Math.round(newWidth);
        const roundedHeight = Math.round(newHeight);
        if (prevState.containerWidth === roundedWidth && prevState.containerHeight === roundedHeight) {
          return prevState;
        }

        return { containerWidth: roundedWidth, containerHeight: roundedHeight };
      });
    }, []);

    useEffect(() => {
      let callback = (entries: ResizeObserverEntry[]) => {
        const { width: containerWidth, height: containerHeight } = entries[0].contentRect;
        setContainerSize(containerWidth, containerHeight);
        onResizeRef.current?.(containerWidth, containerHeight);
      };
      if (debounce > 0) {
        callback = throttle(callback, debounce, {
          trailing: true,
          leading: false,
        });
      }
      const observer = new ResizeObserver(callback);

      const { width: containerWidth, height: containerHeight } = containerRef.current.getBoundingClientRect();
      setContainerSize(containerWidth, containerHeight);

      observer.observe(containerRef.current);

      return () => {
        observer.disconnect();
      };
    }, [setContainerSize, debounce]);

    const { containerWidth, containerHeight } = sizes;

    warn(!aspect || aspect > 0, 'The aspect(%s) must be greater than zero.', aspect);

    const { calculatedWidth, calculatedHeight } = calculateChartDimensions(containerWidth, containerHeight, {
      width,
      height,
      aspect,
      maxHeight,
    });

    warn(
      calculatedWidth > 0 || calculatedHeight > 0,
      `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
      calculatedWidth,
      calculatedHeight,
      width,
      height,
      minWidth,
      minHeight,
      aspect,
    );

    return (
      <div
        id={id ? `${id}` : undefined}
        className={clsx('recharts-responsive-container', className)}
        style={{ ...style, width, height, minWidth, minHeight, maxHeight }}
        ref={containerRef}
      >
        <div style={getInnerDivStyle({ width, height })}>
          <ResponsiveContainerContextProvider width={calculatedWidth} height={calculatedHeight}>
            {children}
          </ResponsiveContainerContextProvider>
        </div>
      </div>
    );
  },
);

/**
 * The `ResponsiveContainer` component is a container that adjusts its width and height based on the size of its parent element.
 * It is used to create responsive charts that adapt to different screen sizes.
 *
 * This component uses the `ResizeObserver` API to monitor changes to the size of its parent element.
 * If you need to support older browsers that do not support this API, you may need to include a polyfill.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
 */
export const ResponsiveContainer = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const responsiveContainerContext = useResponsiveContainerContext();
  if (isPositiveNumber(responsiveContainerContext.width) && isPositiveNumber(responsiveContainerContext.height)) {
    /*
     * If we detect that we are already inside another ResponsiveContainer,
     * we do not attempt to add another layer of responsiveness.
     */
    return props.children;
  }

  const { width, height } = getDefaultWidthAndHeight({
    width: props.width,
    height: props.height,
    aspect: props.aspect,
  });

  /*
   * Let's try to get the calculated dimensions without having the div container set up.
   * Sometimes this does produce fixed, positive dimensions. If so, we can skip rendering the div and monitoring its size.
   */
  const { calculatedWidth, calculatedHeight } = calculateChartDimensions(undefined, undefined, {
    width,
    height,
    aspect: props.aspect,
    maxHeight: props.maxHeight,
  });

  if (isPositiveNumber(calculatedWidth) && isPositiveNumber(calculatedHeight)) {
    /*
     * If it just so happens that the combination of width, height, and aspect ratio
     * results in fixed, positive dimensions, then we don't need to monitor the container's size.
     * We can just provide these fixed dimensions to the context.
     */
    return (
      <ResponsiveContainerContextProvider width={calculatedWidth} height={calculatedHeight}>
        {props.children}
      </ResponsiveContainerContextProvider>
    );
  }
  /*
   * Static analysis did not produce fixed dimensions,
   * so we need to render a special div and monitor its size.
   */
  return <SizeDetectorContainer {...props} width={width} height={height} ref={ref} />;
});
