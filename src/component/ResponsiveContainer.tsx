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
  useCallback,
  useMemo,
} from 'react';
import ReactResizeDetector from 'react-resize-detector';
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
  onResize?: (width: number, height: number) => void;
}

export const ResponsiveContainer = forwardRef(
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
    }: Props,
    ref,
  ) => {
    const [sizes, setSizes] = useState<{
      containerWidth: number;
      containerHeight: number;
    }>({
      containerWidth: initialDimension.width,
      containerHeight: initialDimension.height,
    });

    const containerRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => containerRef, [containerRef]);

    const getContainerSize = useCallback(() => {
      if (!containerRef.current) {
        return null;
      }

      return {
        containerWidth: containerRef.current.clientWidth,
        containerHeight: containerRef.current.clientHeight,
      };
    }, []);

    const updateDimensionsImmediate = useCallback(() => {
      const newSize = getContainerSize();

      if (newSize) {
        const { containerWidth, containerHeight } = newSize;
        if (onResize) onResize(containerWidth, containerHeight);

        setSizes(currentSizes => {
          const { containerWidth: oldWidth, containerHeight: oldHeight } = currentSizes;
          if (containerWidth !== oldWidth || containerHeight !== oldHeight) {
            return { containerWidth, containerHeight };
          }

          return currentSizes;
        });
      }
    }, [getContainerSize, onResize]);

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

    useEffect(() => {
      const size = getContainerSize();

      if (size) {
        setSizes(size);
      }
    }, [getContainerSize]);

    const style: React.CSSProperties = { width, height, minWidth, minHeight, maxHeight };

    return (
      <ReactResizeDetector
        handleWidth
        handleHeight
        onResize={updateDimensionsImmediate}
        targetRef={containerRef}
        refreshMode={debounce > 0 ? 'debounce' : undefined}
        refreshRate={debounce}
      >
        <div
          {...(id != null ? { id: `${id}` } : {})}
          className={classNames('recharts-responsive-container', className)}
          style={style}
          ref={containerRef}
        >
          {chartContent}
        </div>
      </ReactResizeDetector>
    );
  },
);
