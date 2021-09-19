/**
 * @fileOverview Wrapper component to make charts adapt to the size of parent * DOM
 */
import classNames from 'classnames';
import _ from 'lodash';
import React, { ReactElement, forwardRef, cloneElement, useState, useImperativeHandle, useRef, useEffect } from 'react';
import ReactResizeDetector from 'react-resize-detector/build/withPolyfill';
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

interface State {
  containerWidth: number;
  containerHeight: number;
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
    const [sizes, setSizes] = useState<State>({
      containerWidth: -1,
      containerHeight: -1,
    });
    const containerRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => containerRef, [containerRef]);

    const [mounted, setMounted] = useState<boolean>(false);

    const getContainerSize = () => {
      if (!containerRef.current) {
        return null;
      }

      return {
        containerWidth: containerRef.current.clientWidth,
        containerHeight: containerRef.current.clientHeight,
      };
    };

    const updateDimensionsImmediate = () => {
      if (!mounted) {
        return;
      }

      const newSize = getContainerSize();

      if (newSize) {
        const { containerWidth: oldWidth, containerHeight: oldHeight } = sizes;
        const { containerWidth, containerHeight } = newSize;

        if (containerWidth !== oldWidth || containerHeight !== oldHeight) {
          setSizes({ containerWidth, containerHeight });
        }
      }
    };

    const handleResize = debounce > 0 ? _.debounce(updateDimensionsImmediate, debounce) : updateDimensionsImmediate;

    const renderChart = () => {
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
    };

    useEffect(() => {
      if (mounted) {
        const size = getContainerSize();

        if (size) {
          setSizes(size);
        }
      }
    }, [mounted]);

    useEffect(() => {
      setMounted(true);
    }, []);

    const style = { width, height, minWidth, minHeight, maxHeight };

    return (
      <ReactResizeDetector handleWidth handleHeight onResize={handleResize} targetRef={containerRef}>
        <div
          {...(id != null ? { id: `${id}` } : {})}
          className={classNames('recharts-responsive-container', className)}
          style={style}
          ref={containerRef}
        >
          {renderChart()}
        </div>
      </ReactResizeDetector>
    );
  },
);
