import * as React from 'react';
import {
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  Ref,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { clsx } from 'clsx';
import throttle from 'es-toolkit/compat/throttle';
import { mouseLeaveChart } from '../state/tooltipSlice';
import { useAppDispatch } from '../state/hooks';
import { mouseClickAction, mouseMoveAction } from '../state/mouseEventsMiddleware';
import { useSynchronisedEventsFromOtherCharts } from '../synchronisation/useChartSynchronisation';
import { focusAction, keyDownAction } from '../state/keyboardEventsMiddleware';
import { useReportScale } from '../util/useReportScale';
import { ExternalMouseEvents } from './types';
import { externalEventAction } from '../state/externalEventsMiddleware';
import { touchEventAction } from '../state/touchEventsMiddleware';
import { TooltipPortalContext } from '../context/tooltipPortalContext';
import { LegendPortalContext } from '../context/legendPortalContext';
import { ReportChartSize } from '../context/chartLayoutContext';
import { useResponsiveContainerContext } from '../component/ResponsiveContainer';
import { Percent } from '../util/types';

type Nullable<T> = {
  [P in keyof T]: T[P] | undefined;
};

export type RechartsWrapperProps = Nullable<ExternalMouseEvents> & {
  children: ReactNode;
  width: number | Percent;
  height: number | Percent;
  /**
   * If true, then it will listen to container size changes and adapt the SVG chart accordingly.
   * If false, then it renders the chart at the specified width and height and will stay that way
   * even if the container size changes.
   */
  responsive: boolean;
  className?: string;
  style?: CSSProperties;
  ref?: Ref<HTMLDivElement>;
  /**
   * Treemap is special snowflake that handles its own mouse events so
   * here is a flag to disable the dispatching of mouse events from RechartsWrapper.
   * If false, then this disables mouse click and touch event dispatching.
   * Mouse move events are still dispatched because they are needed for tooltip synchronization.
   * @default true
   */
  dispatchTouchEvents?: boolean;
};

const EventSynchronizer = (): ReactNode => {
  useSynchronisedEventsFromOtherCharts();
  return null;
};

function getNumberOrZero(value: number | string | undefined): number {
  if (typeof value === 'number') {
    return value;
  }
  if (typeof value === 'string') {
    const parsed = parseFloat(value);
    if (!Number.isNaN(parsed)) {
      return parsed;
    }
  }
  return 0;
}

type WrapperDivProps = HTMLAttributes<HTMLDivElement> & {
  width: number | string | undefined;
  height: number | string | undefined;
};

const ResponsiveDiv = forwardRef<HTMLDivElement, WrapperDivProps>((props: WrapperDivProps, ref): ReactNode => {
  const observerRef = useRef(null);

  const [sizes, setSizes] = useState<{
    containerWidth: number;
    containerHeight: number;
  }>({
    containerWidth: getNumberOrZero(props.style?.width),
    containerHeight: getNumberOrZero(props.style?.height),
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

  const debounce = 0;

  const innerRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (typeof ref === 'function') {
        ref(node);
      }
      if (node != null) {
        const { width: containerWidth, height: containerHeight } = node.getBoundingClientRect();
        setContainerSize(containerWidth, containerHeight);
        let callback = (entries: ResizeObserverEntry[]) => {
          const { width, height } = entries[0].contentRect;
          setContainerSize(width, height);
        };
        if (debounce > 0) {
          callback = throttle(callback, debounce, {
            trailing: true,
            leading: false,
          });
        }
        const observer = new ResizeObserver(callback);
        observer.observe(node);
        if (observerRef.current != null) {
          observerRef.current.disconnect();
        }
        observerRef.current = observer;
      }
    },
    [ref, setContainerSize],
  );

  useEffect(() => {
    return () => {
      const observer = observerRef.current;
      if (observer != null) {
        observer.disconnect();
      }
    };
  }, [setContainerSize, debounce]);

  return (
    <>
      <ReportChartSize width={sizes.containerWidth} height={sizes.containerHeight} />
      <div ref={innerRef} {...props} />
    </>
  );
});

const StaticDiv = forwardRef<HTMLDivElement, WrapperDivProps>((props: WrapperDivProps, ref): ReactNode => {
  const { width: widthFromProps, height: heightFromProps, style } = props;
  const width = getNumberOrZero(widthFromProps ?? style?.width);
  const height = getNumberOrZero(heightFromProps ?? style?.height);
  return (
    <>
      <ReportChartSize width={width} height={height} />
      <div ref={ref} {...props} />
    </>
  );
});

function getWrapperDivComponent(responsive: boolean) {
  return responsive === true ? ResponsiveDiv : StaticDiv;
}

export const RechartsWrapper = forwardRef<HTMLDivElement | null, RechartsWrapperProps>(
  (props: RechartsWrapperProps, ref: Ref<HTMLDivElement | null>) => {
    const {
      children,
      className,
      height: heightFromProps,
      onClick,
      onContextMenu,
      onDoubleClick,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      onMouseUp,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
      style,
      width: widthFromProps,
      responsive,
      dispatchTouchEvents = true,
    } = props;
    const containerRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const [tooltipPortal, setTooltipPortal] = useState<HTMLElement | null>(null);
    const [legendPortal, setLegendPortal] = useState<HTMLElement | null>(null);

    const setScaleRef = useReportScale();

    const responsiveContainerCalculations = useResponsiveContainerContext();
    const width = responsiveContainerCalculations?.width > 0 ? responsiveContainerCalculations.width : widthFromProps;
    const height =
      responsiveContainerCalculations?.height > 0 ? responsiveContainerCalculations.height : heightFromProps;

    const innerRef = useCallback(
      (node: HTMLDivElement | null) => {
        setScaleRef(node);
        if (typeof ref === 'function') {
          ref(node);
        }
        setTooltipPortal(node);
        setLegendPortal(node);
        if (node != null) {
          containerRef.current = node;
        }
      },
      [setScaleRef, ref, setTooltipPortal, setLegendPortal],
    );

    const myOnClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(mouseClickAction(e));
        dispatch(externalEventAction({ handler: onClick, reactEvent: e }));
      },
      [dispatch, onClick],
    );

    const myOnMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(mouseMoveAction(e));
        dispatch(externalEventAction({ handler: onMouseEnter, reactEvent: e }));
      },
      [dispatch, onMouseEnter],
    );

    const myOnMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(mouseLeaveChart());
        dispatch(externalEventAction({ handler: onMouseLeave, reactEvent: e }));
      },
      [dispatch, onMouseLeave],
    );

    const myOnMouseMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(mouseMoveAction(e));
        dispatch(externalEventAction({ handler: onMouseMove, reactEvent: e }));
      },
      [dispatch, onMouseMove],
    );

    const onFocus = useCallback(() => {
      dispatch(focusAction());
    }, [dispatch]);

    const onKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        dispatch(keyDownAction(e.key));
      },
      [dispatch],
    );

    const myOnContextMenu = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(externalEventAction({ handler: onContextMenu, reactEvent: e }));
      },
      [dispatch, onContextMenu],
    );

    const myOnDoubleClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(externalEventAction({ handler: onDoubleClick, reactEvent: e }));
      },
      [dispatch, onDoubleClick],
    );

    const myOnMouseDown = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(externalEventAction({ handler: onMouseDown, reactEvent: e }));
      },
      [dispatch, onMouseDown],
    );

    const myOnMouseUp = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        dispatch(externalEventAction({ handler: onMouseUp, reactEvent: e }));
      },
      [dispatch, onMouseUp],
    );

    const myOnTouchStart = useCallback(
      (e: React.TouchEvent<HTMLDivElement>) => {
        dispatch(externalEventAction({ handler: onTouchStart, reactEvent: e }));
      },
      [dispatch, onTouchStart],
    );

    /*
     * onTouchMove is special because it behaves different from mouse events.
     * Mouse events have 'enter' + 'leave' combo that notify us when the mouse is over
     * a certain element. Touch events don't have that; touch only gives us
     * start (finger down), end (finger up) and move (finger moving).
     * So we need to figure out which element the user is touching
     * ourselves. Fortunately, there's a convenient method for that:
     * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementFromPoint
     */
    const myOnTouchMove = useCallback(
      (e: React.TouchEvent<HTMLDivElement>) => {
        if (dispatchTouchEvents) {
          dispatch(touchEventAction(e));
        }
        dispatch(externalEventAction({ handler: onTouchMove, reactEvent: e }));
      },
      [dispatch, dispatchTouchEvents, onTouchMove],
    );

    const myOnTouchEnd = useCallback(
      (e: React.TouchEvent<HTMLDivElement>) => {
        dispatch(externalEventAction({ handler: onTouchEnd, reactEvent: e }));
      },
      [dispatch, onTouchEnd],
    );

    const WrapperDiv = getWrapperDivComponent(responsive);

    return (
      <TooltipPortalContext.Provider value={tooltipPortal}>
        <LegendPortalContext.Provider value={legendPortal}>
          <WrapperDiv
            width={width}
            height={height}
            className={clsx('recharts-wrapper', className)}
            style={{
              position: 'relative',
              cursor: 'default',
              width,
              height,
              ...style,
            }}
            onClick={myOnClick}
            onContextMenu={myOnContextMenu}
            onDoubleClick={myOnDoubleClick}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            onMouseDown={myOnMouseDown}
            onMouseEnter={myOnMouseEnter}
            onMouseLeave={myOnMouseLeave}
            onMouseMove={myOnMouseMove}
            onMouseUp={myOnMouseUp}
            onTouchEnd={myOnTouchEnd}
            onTouchMove={myOnTouchMove}
            onTouchStart={myOnTouchStart}
            ref={innerRef}
          >
            <EventSynchronizer />
            {children}
          </WrapperDiv>
        </LegendPortalContext.Provider>
      </TooltipPortalContext.Provider>
    );
  },
);
