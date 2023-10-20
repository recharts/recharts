/**
 * @fileOverview Wrapper component to make charts adapt to the size of parent * DOM
 */
import classNames from 'classnames';
import React, {
  ReactElement,
  forwardRef,
  cloneElement,
  useState,
  useImperativeHandle,
  useRef,
  useEffect,
  useMemo,
  CSSProperties,
} from 'react';
import { isPercent } from '../util/DataUtils';
import { warn } from '../util/LogUtils';

export interface Props {
  aspect?: number;
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  initialDimension?: {
    width: number;
    height: number;
  };
  maxHeight?: number;
  children: ReactElement;
  debounce?: number;
  id?: string | number;
  className?: string | number;
  style?: CSSProperties;
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
      // Check Props like width and height are all style attributes. Is there a need to separate them like this??
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
      // debounce = 0,
      id,
      className,
      onResize,
      style = {},
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
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

    useEffect(() => {
      const observer = new ResizeObserver(entries => {
        const { width: containerWidth, height: containerHeight } = entries[0].contentRect;
        setSizes({ containerWidth, containerHeight });
        onResizeRef.current?.(containerWidth, containerHeight);
      });

      const { width: containerWidth, height: containerHeight } = containerRef.current.getBoundingClientRect();
      setSizes({ containerWidth, containerHeight });

      observer.observe(containerRef.current);

      return () => {
        observer.disconnect();
      };
    }, []);

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

      return cloneElement(children, {
        width: calculatedWidth,
        height: calculatedHeight,
      });
    }, [aspect, children, height, maxHeight, minHeight, minWidth, sizes, width]);

    return (
      <div
        id={id ? `${id}` : undefined}
        className={classNames('recharts-responsive-container', className)}
        style={{ ...style, width, height, minWidth, minHeight, maxHeight }}
        ref={containerRef}
      >
        {chartContent}
      </div>
    );
  },
);
