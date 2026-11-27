import * as React from 'react';
import {
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  MutableRefObject,
  ReactNode,
  Ref,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { clsx } from '../util/clsx';
import { mouseLeaveChart } from '../state/tooltipSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectTooltipEventType } from '../state/selectors/selectTooltipEventType';
import { mouseClickAction, mouseMoveAction } from '../state/mouseEventsMiddleware';
import { useSynchronisedEventsFromOtherCharts } from '../synchronisation/useChartSynchronisation';
import { focusAction, keyDownAction, blurAction } from '../state/keyboardEventsMiddleware';
import { useReportScale } from '../util/useReportScale';
import { ExternalMouseEvents } from './types';
import { externalEventAction } from '../state/externalEventsMiddleware';
import { touchEventAction } from '../state/touchEventsMiddleware';
import { TooltipPortalContext } from '../context/tooltipPortalContext';
import { LegendPortalContext } from '../context/legendPortalContext';
import { ReportChartSize } from '../context/chartLayoutContext';
import { useResponsiveContainerContext } from '../component/ResponsiveContainer';
import { Percent } from '../util/types';
import { useRechartsTheme } from '../theme/RechartsThemeContext';
import { useElementSize } from '../util/useElementSize';

export type RechartsWrapperProps = ExternalMouseEvents & {
  children: ReactNode;
  width: number | Percent | undefined;
  height: number | Percent | undefined;
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

type MeasuredDivProps = WrapperDivProps & {
  /**
   * If true, measures again whenever the div resizes. If false, measures once when the div mounts.
   */
  observe: boolean;
  /**
   * The width to report before the first measurement.
   */
  initialWidth: number;
  /**
   * The height to report before the first measurement.
   */
  initialHeight: number;
};

/**
 * Renders the wrapper div, measures its content box, and reports that as the chart size.
 */
const MeasuredDiv = forwardRef<HTMLDivElement, MeasuredDivProps>(
  ({ observe, initialWidth, initialHeight, ...props }: MeasuredDivProps, ref): ReactNode => {
    const [size, setMeasuredElement] = useElementSize({
      box: 'content-box',
      initialSize: { width: initialWidth, height: initialHeight },
      observe,
      // Without ResizeObserver (for example in jsdom) keep the size from props instead of measuring zero
      measureWithoutResizeObserver: false,
    });

    const innerRef = useCallback(
      (node: HTMLDivElement | null) => {
        if (typeof ref === 'function') {
          ref(node);
        }
        setMeasuredElement(node);
      },
      [ref, setMeasuredElement],
    );

    return (
      <>
        <ReportChartSize width={size.width} height={size.height} />
        <div ref={innerRef} {...props} />
      </>
    );
  },
);

const ResponsiveDiv = forwardRef<HTMLDivElement, WrapperDivProps>((props: WrapperDivProps, ref): ReactNode => (
  <MeasuredDiv
    {...props}
    ref={ref}
    observe
    initialWidth={getNumberOrZero(props.style?.width)}
    initialHeight={getNumberOrZero(props.style?.height)}
  />
));

const ReadSizeOnceDiv = forwardRef<HTMLDivElement, WrapperDivProps>((props: WrapperDivProps, ref): ReactNode => (
  <MeasuredDiv
    {...props}
    ref={ref}
    observe={false}
    initialWidth={getNumberOrZero(props.width)}
    initialHeight={getNumberOrZero(props.height)}
  />
));

type StaticDivProps = HTMLAttributes<HTMLDivElement> & {
  width: number;
  height: number;
};

/**
 * Is the given event target the chart's own surface?
 *
 * The main chart surface is the element that the keyboard accessibility layer makes focusable, and
 * Sankey renders its own surface the same way. The default legend also renders a surface of its
 * own, but that one is not focusable and never receives a key event.
 *
 * @param target the `target` of a keyboard event
 * @returns true when the event was aimed at the chart surface
 */
function isChartSurface(target: EventTarget | null): boolean {
  return target instanceof Element && target.matches('svg.recharts-surface');
}

const StaticDiv = forwardRef<HTMLDivElement, StaticDivProps>((props: StaticDivProps, ref): ReactNode => {
  const { width, height } = props;

  return (
    <>
      <ReportChartSize width={width} height={height} />
      <div ref={ref} {...props} />
    </>
  );
});

const NonResponsiveDiv = forwardRef<HTMLDivElement, WrapperDivProps>((props: WrapperDivProps, ref): ReactNode => {
  const { width, height } = props;
  // When width or height are percentages or CSS short names, read size from DOM once
  if (typeof width === 'string' || typeof height === 'string') {
    return <ReadSizeOnceDiv {...props} ref={ref} />;
  }
  // When both are numbers, use them directly
  if (typeof width === 'number' && typeof height === 'number') {
    return <StaticDiv {...props} width={width} height={height} ref={ref} />;
  }
  // When width/height are undefined, render wrapper div without reporting size
  // This results in no SVG being rendered (intentional for backwards compatibility)
  return (
    <>
      <ReportChartSize width={width} height={height} />
      <div ref={ref} {...props} />
    </>
  );
});

function getWrapperDivComponent(responsive: boolean) {
  return responsive ? ResponsiveDiv : NonResponsiveDiv;
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
    const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const usesAxisHover = useAppSelector(
      state =>
        state.tooltip.settings.trigger === 'hover' &&
        selectTooltipEventType(state, state.tooltip.settings.shared) === 'axis',
    );
    const touchTap = useRef<AbortController | null>(null);
    useEffect(() => {
      return () => {
        touchTap.current?.abort();
        touchTap.current = null;
      };
    }, []);
    const accessibilityLayerIsEnabled = useAppSelector(state => state.rootProps.accessibilityLayer !== false);
    const [tooltipPortal, setTooltipPortal] = useState<HTMLElement | null>(null);
    const [legendPortal, setLegendPortal] = useState<HTMLElement | null>(null);

    const setScaleRef = useReportScale();
    const theme = useRechartsTheme();

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
        if (node != null) {
          setTooltipPortal(node);
          setLegendPortal(node);
          containerRef.current = node;
        }
      },
      [setScaleRef, ref, setTooltipPortal, setLegendPortal],
    );

    const myOnClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (usesAxisHover && 'pointerType' in e.nativeEvent && e.nativeEvent.pointerType === 'touch') {
          // A tap can generate a mouseleave as the browser restores the mouse cursor's hover target.
          // Keep the tapped value until a pointer interaction outside the chart.
          const chart = e.currentTarget;
          touchTap.current?.abort();
          const controller = new AbortController();
          touchTap.current = controller;
          const releaseTap = (event: PointerEvent) => {
            if (event.composedPath().includes(chart)) {
              return;
            }
            controller.abort();
            touchTap.current = null;
            dispatch(mouseLeaveChart());
          };
          const options = { capture: true, signal: controller.signal };
          chart.ownerDocument.addEventListener('pointerdown', releaseTap, options);
          chart.ownerDocument.addEventListener('pointermove', releaseTap, options);
        }
        dispatch(mouseClickAction(e));
        dispatch(externalEventAction({ handler: onClick, reactEvent: e }));
      },
      [dispatch, onClick, usesAxisHover],
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
        if (!touchTap.current) {
          dispatch(mouseLeaveChart());
        }
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

    const onBlur = useCallback(() => {
      dispatch(blurAction());
    }, [dispatch]);

    const onKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        // The keyboard accessibility layer moves the tooltip on these keys, so consume their browser
        // default (page scroll on Safari) instead of letting both happen. When the layer is off the
        // middleware ignores the key, so leave the default untouched.
        //
        // Only consume the default when the key was aimed at the chart's own surface, because that is
        // the element the accessibility layer makes focusable. The wrapper also hosts custom children
        // (a custom legend, a custom tooltip, <Customized>) whose buttons, links and inputs live
        // inside this same div; swallowing Enter there would stop a focused button from activating.
        //
        // With Alt, Ctrl or Meta held the key is a browser or OS shortcut (Alt+ArrowLeft goes back,
        // Cmd+ArrowLeft too on macOS), so leave it alone entirely: no preventDefault and no tooltip move.
        if (e.altKey || e.ctrlKey || e.metaKey) {
          return;
        }
        if (
          accessibilityLayerIsEnabled &&
          isChartSurface(e.target) &&
          (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Enter')
        ) {
          e.preventDefault();
        }
        dispatch(keyDownAction(e.key));
      },
      [dispatch, accessibilityLayerIsEnabled],
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
            width={width ?? style?.width ?? theme?.chart?.width}
            height={height ?? style?.height ?? theme?.chart?.height}
            className={clsx('recharts-wrapper', className)}
            style={{
              position: 'relative',
              cursor: 'default',
              /*
               * The theme overrides the defaults above, but not an explicit size or style.
               * The size is only included if it is set, so that `undefined` does not erase a size from the theme.
               */
              ...theme?.chart,
              ...(width == null ? {} : { width }),
              ...(height == null ? {} : { height }),
              ...style,
            }}
            onClick={myOnClick}
            onContextMenu={myOnContextMenu}
            onDoubleClick={myOnDoubleClick}
            onFocus={onFocus}
            onBlur={onBlur}
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
