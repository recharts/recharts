/**
 * @fileOverview Wrapper component to make charts adapt to the size of parent * DOM
 */
import classNames from 'classnames';
import _ from 'lodash';
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
  maxHeight?: number;
  children: ReactElement;
  debounce?: number;
  id?: string | number;
  className?: string | number;
}

export const ResponsiveContainer = forwardRef(
  (
    {
      aspect,
      width = '100%',
      height = '100%',
      minWidth,
      minHeight,
      maxHeight,
      children,
      debounce = 0,
      id,
      className,
    }: Props,
    ref,
  ) => {
    const [sizes, setSizes] = useState<{
      containerWidth: number;
      containerHeight: number;
    }>({
      containerWidth: -1,
      containerHeight: -1,
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

        setSizes(currentSizes => {
          const { containerWidth: oldWidth, containerHeight: oldHeight } = currentSizes;
          if (containerWidth !== oldWidth || containerHeight !== oldHeight) {
            return { containerWidth, containerHeight };
          }

          return currentSizes;
        });
      }
    }, [getContainerSize]);

    const handleResize = useMemo(
      () => (debounce > 0 ? _.debounce(updateDimensionsImmediate, debounce) : updateDimensionsImmediate),
      [debounce, updateDimensionsImmediate],
    );

    const computedSizes = useMemo(() => {
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

      return {
        width: calculatedWidth,
        height: calculatedHeight,
      };
    }, [aspect, height, maxHeight, minHeight, minWidth, sizes, width]);

    useEffect(() => {
      const size = getContainerSize();

      if (size) {
        setSizes(size);
      }
    }, [getContainerSize]);

    const style: React.CSSProperties = { width, height, minWidth, minHeight, maxHeight };

    return (
      <ReactResizeDetector handleWidth handleHeight onResize={handleResize} targetRef={containerRef}>
        <div
          {...(id != null ? { id: `${id}` } : {})}
          className={classNames('recharts-responsive-container', className)}
          style={style}
          ref={containerRef}
        >
          {cloneElement(children, computedSizes)}
        </div>
      </ReactResizeDetector>
    );
  },
);
