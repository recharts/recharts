import { clsx } from 'clsx';
import * as React from 'react';
import {
  ReactElement,
  forwardRef,
  cloneElement,
  useState,
  useImperativeHandle,
  useRef,
  useEffect,
  useMemo,
  CSSProperties,
  useCallback,
} from 'react';
import throttle from 'es-toolkit/compat/throttle';
import { isPercent } from '../util/DataUtils';
import { warn } from '../util/LogUtils';

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
  width?: string | number;
  /**
   * The height of the container. If a percentage string is specified, it is calculated responsive to the height of the parent element.
   * @default '100%'
   */
  height?: string | number;
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
  /** The content of the container. It should be a single chart element. */
  children: ReactElement;
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

export const ResponsiveContainer = forwardRef<HTMLDivElement, Props>(
  (
    {
      aspect,
      initialDimension = {
        width: -1,
        height: -1,
      },
      width = '100%',
      height = '100%',
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
    },
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

    const chartContent = useMemo(() => {
      const { containerWidth, containerHeight } = sizes;

      if (containerWidth < 0 || containerHeight < 0) {
        return null;
      }

      warn(
        isPercent(width) || isPercent(height),
        `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
        width,
        height,
      );

      warn(!aspect || aspect > 0, 'The aspect(%s) must be greater than zero.', aspect);

      let calculatedWidth: number = isPercent(width) ? containerWidth : (width as number);
      let calculatedHeight: number = isPercent(height) ? containerHeight : (height as number);

      if (aspect && aspect > 0) {
        // Preserve the desired aspect ratio
        if (calculatedWidth) {
          // Will default to using width for aspect ratio
          calculatedHeight = calculatedWidth / aspect;
        } else if (calculatedHeight) {
          // But we should also take height into consideration
          calculatedWidth = calculatedHeight * aspect;
        }

        // if maxHeight is set, overwrite if calculatedHeight is greater than maxHeight
        if (maxHeight && calculatedHeight > maxHeight) {
          calculatedHeight = maxHeight;
        }
      }

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

      return React.Children.map(children, child => {
        return cloneElement(child, {
          width: calculatedWidth,
          height: calculatedHeight,
          // calculate the actual size and override it.
          style: {
            width: calculatedWidth,
            height: calculatedHeight,
            // keep components style
            ...child.props.style,
          },
        });
      });
    }, [aspect, children, height, maxHeight, minHeight, minWidth, sizes, width]);

    return (
      <div
        id={id ? `${id}` : undefined}
        className={clsx('recharts-responsive-container', className)}
        style={{ ...style, width, height, minWidth, minHeight, maxHeight }}
        ref={containerRef}
      >
        {/*
         * This zero-size, overflow-visible is required to allow the chart to shrink.
         * Without it, the chart itself will fill the ResponsiveContainer, and while it allows the chart to grow,
         * it would always keep the container at the size of the chart,
         * and ResizeObserver would never fire.
         * With this zero-size element, the chart itself never actually fills the container,
         * it just so happens that it is visible because it overflows.
         * I learned this trick from the `react-virtualized` library: https://github.com/bvaughn/react-virtualized-auto-sizer/blob/master/src/AutoSizer.ts
         * See https://github.com/recharts/recharts/issues/172 and also https://github.com/bvaughn/react-virtualized/issues/68
         */}
        <div style={{ width: 0, height: 0, overflow: 'visible' }}>{chartContent}</div>
      </div>
    );
  },
);
