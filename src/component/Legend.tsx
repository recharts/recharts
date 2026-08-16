import * as React from 'react';
import { CSSProperties, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { CartesianPosition, getCartesianPosition, isOutsidePosition } from '../cartesian/getCartesianPosition';
import { useLegendPortal } from '../context/legendPortalContext';
import {
  ContentType,
  DefaultLegendContent,
  LegendPayload,
  Props as DefaultLegendContentProps,
  VerticalAlignmentType,
} from './DefaultLegendContent';

import { CartesianLayout, Margin, Size } from '../util/types';
import { getUniqPayload, UniqueOption } from '../util/payload/getUniqPayload';
import { useLegendPayload } from '../context/legendPayloadContext';
import { ElementOffset, useElementOffset } from '../util/useElementOffset';
import { useChartHeight, useChartWidth, useMargin } from '../context/chartLayoutContext';
import { LegendSettings, setLegendSettings, setLegendSize } from '../state/legendSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { propsAreEqual } from '../util/propsAreEqual';
import { selectLegendArea } from '../state/selectors/selectLegendArea';
import { cartesianPositionToCSSTranslate } from '../cartesian/cartesianPositionToCSSTranslate';
import { selectChartViewBox } from '../state/selectors/selectChartOffsetInternal';
import { RechartsRootState } from '../state/store';
import { RechartsTheme } from '../theme/RechartsTheme';
import { useBackwardsCompatibleTheme } from '../theme/useBackwardsCompatibleTheme';

function defaultUniqBy(entry: LegendPayload) {
  return entry.value;
}

type ContentProps = Omit<Props, 'layout'> & {
  layout: CartesianLayout;
  margin: Margin | undefined;
  chartWidth: number;
  chartHeight: number;
  contextPayload: ReadonlyArray<LegendPayload>;
};

function LegendContent(props: ContentProps) {
  const { contextPayload, ...otherProps } = props;
  const finalPayload = getUniqPayload(contextPayload, props.payloadUniqBy, defaultUniqBy);
  const contentProps = {
    ...otherProps,
    payload: finalPayload,
  };

  if (React.isValidElement(props.content)) {
    return React.cloneElement(props.content, contentProps);
  }
  if (typeof props.content === 'function') {
    return React.createElement(props.content as any, contentProps);
  }

  return <DefaultLegendContent {...contentProps} />;
}

type PositionInput = {
  layout?: Props['layout'];
  align?: Props['align'];
  verticalAlign?: Props['verticalAlign'];
};

function getLayoutForPosition(position: CartesianPosition | undefined): CartesianLayout {
  if (position === 'left' || position === 'right' || position === 'insideLeft' || position === 'insideRight') {
    return 'vertical';
  }

  return 'horizontal';
}

function selectPositionViewBox(state: RechartsRootState, position: CartesianPosition | undefined) {
  if (position == null) {
    return null;
  }

  return isOutsidePosition(position) ? selectLegendArea(state) : selectChartViewBox(state);
}

function getOutsidePositionOffset(
  position: CartesianPosition | undefined,
  offset: number,
  box: ElementOffset,
): { top?: number; left?: number } {
  if (position === 'top') {
    return { top: box.height + offset };
  }
  if (position === 'bottom') {
    return { top: -box.height - offset };
  }
  if (position === 'left') {
    return { left: box.width + offset };
  }
  if (position === 'right') {
    return { left: -box.width - offset };
  }
  return {};
}

function getDefaultPosition(
  style: CSSProperties | undefined,
  props: PositionInput,
  margin: Margin | undefined,
  chartWidth: number,
  chartHeight: number,
  box: ElementOffset,
): CSSProperties {
  const { layout, align, verticalAlign } = props;
  let hPos, vPos;

  if (
    !style ||
    ((style.left === undefined || style.left === null) && (style.right === undefined || style.right === null))
  ) {
    if (align === 'center' && layout === 'vertical') {
      hPos = { left: ((chartWidth || 0) - box.width) / 2 };
    } else {
      hPos = align === 'right' ? { right: (margin && margin.right) || 0 } : { left: (margin && margin.left) || 0 };
    }
  }

  if (
    !style ||
    ((style.top === undefined || style.top === null) && (style.bottom === undefined || style.bottom === null))
  ) {
    if (verticalAlign === 'middle') {
      vPos = { top: ((chartHeight || 0) - box.height) / 2 };
    } else {
      vPos =
        verticalAlign === 'bottom' ? { bottom: (margin && margin.bottom) || 0 } : { top: (margin && margin.top) || 0 };
    }
  }

  return { ...hPos, ...vPos };
}

export type LegendItemSorter = 'value' | 'dataKey' | ((item: LegendPayload) => number | string);

export type Props = Omit<DefaultLegendContentProps, 'payload' | 'ref' | 'verticalAlign' | 'layout'> & {
  /**
   * Renders the content of the legend.
   *
   * This should return HTML elements, not SVG elements.
   *
   * - If not set, the {@link DefaultLegendContent} component is used.
   * - If set to a React element, this element will be cloned and extra props will be passed in.
   * - If set to a function, the function will be called and should return HTML elements.
   *
   * @example <Legend content={CustomizedLegend} />
   * @example <Legend content={renderLegend} />
   */
  content?: ContentType;
  /**
   * The layout of legend items inside the legend container.
   *
   * When `auto` then the layout is decided based on the `position` prop:
   * - in `left`|`right` positions, the layout is vertical
   * - otherwise horizontal
   * - if position is undefined, also horizontal
   *
   * `auto` value is new since 3.10
   *
   * @defaultValue auto
   */
  layout?: CartesianLayout | 'auto';
  /**
   * CSS styles to be applied to the wrapper `div` element.
   */
  wrapperStyle?: CSSProperties;
  /**
   * Width of the legend.
   * Accept CSS style string values like `100%` or `fit-content`, or number values like `400`.
   */
  width?: number | string;
  /**
   * Height of the legend.
   * Accept CSS style string values like `100%` or `fit-content`, or number values like `400`.
   */
  height?: number | string;
  payloadUniqBy?: UniqueOption<LegendPayload>;
  onBBoxUpdate?: (box: ElementOffset | null) => void;
  /**
   * If portal is defined, then Legend will use this element as a target
   * for rendering using React Portal.
   *
   * If this is undefined then Legend renders inside the recharts-wrapper element.
   *
   * @see {@link https://react.dev/reference/react-dom/createPortal}
   */
  portal?: HTMLElement | null;
  /**
   * Sorts Legend items. Defaults to `value` which means it will sort alphabetically
   * by the label.
   *
   * If `null` is provided then the payload is not sorted. Be aware that without sort,
   * the order of items may change between renders!
   *
   * @defaultValue value
   */
  itemSorter?: LegendItemSorter | null;
  /**
   * @deprecated use `position` instead which has more options, is more flexible and has more intuitive default styles.
   *
   * @description The alignment of the whole Legend container:
   *
   * - `bottom`: shows the Legend below chart, and chart height reduces automatically to make space for it.
   * - `top`: shows the Legend above chart, and chart height reduces automatically.
   * - `middle`:  shows the Legend in the middle of chart, covering other content, and chart height remains unchanged.
   * The exact behavior changes depending on `align` prop.
   *
   * @defaultValue bottom
   * @see {@link https://recharts.github.io/examples/LegendPosition/ Legend position playground}
   */
  verticalAlign?: VerticalAlignmentType;
  /**
   * The position of the legend relative to the chart.
   * If this is defined, it overrides `align` and `verticalAlign`.
   *
   * @since 3.10
   */
  position?: CartesianPosition;
  /**
   * The offset to the specified `position`. Direction of the offset depends on the position.
   *
   * @since 3.10
   */
  offset?: number;
};

function LegendSettingsDispatcher({
  align,
  layout,
  verticalAlign,
  itemSorter,
  position,
  offset,
}: LegendSettings): null {
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    dispatch(setLegendSettings({ align, layout, verticalAlign, itemSorter, position, offset }));
  }, [dispatch, align, layout, verticalAlign, itemSorter, position, offset]);
  return null;
}

function LegendSizeDispatcher({ width, height }: Size): null {
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    dispatch(setLegendSize({ width, height }));
  }, [dispatch, width, height]);

  useLayoutEffect(() => {
    return () => {
      dispatch(setLegendSize({ width: 0, height: 0 }));
    };
  }, [dispatch]);
  return null;
}

function getWidthOrHeight(
  layout: CartesianLayout | undefined,
  height: number | string | undefined,
  width: number | string | undefined,
  maxWidth: number,
): null | { height?: number | string; width?: number | string } {
  if (layout === 'vertical' && height != null) {
    return {
      height,
    };
  }
  if (layout === 'horizontal') {
    return {
      width: width || maxWidth,
    };
  }

  return null;
}

export const legendDefaultProps = {
  align: 'center',
  iconSize: 14,
  inactiveColor: '#ccc',
  itemSorter: 'value',
  labelStyle: {},
  layout: 'auto',
  verticalAlign: 'bottom',
  offset: 0,
} as const satisfies Partial<Props>;

/**
 * @consumes CartesianChartContext
 * @consumes PolarChartContext
 */
function LegendImpl(outsideProps: Props) {
  const theme = useBackwardsCompatibleTheme<Pick<RechartsTheme, 'legend'>>(
    (rechartsTheme: RechartsTheme) => ({ legend: rechartsTheme.legend }),
    {},
    undefined,
  );
  const themedWrapperStyle =
    outsideProps.wrapperStyle == null && theme?.legend?.wrapperStyle == null
      ? undefined
      : { ...theme?.legend?.wrapperStyle, ...outsideProps.wrapperStyle };
  const props = resolveDefaultProps(
    {
      ...outsideProps,
      wrapperStyle: themedWrapperStyle,
      position: outsideProps.position ?? theme?.legend?.position,
      offset: outsideProps.offset ?? theme?.legend?.offset,
    },
    legendDefaultProps,
  );
  const layout: CartesianLayout =
    outsideProps.layout && outsideProps.layout !== 'auto' ? outsideProps.layout : getLayoutForPosition(props.position);
  const contextPayload = useLegendPayload();
  const legendPortalFromContext = useLegendPortal();
  const margin = useMargin();
  const positionViewBox = useAppSelector(state => selectPositionViewBox(state, props.position));
  const { width: widthFromProps, height: heightFromProps, wrapperStyle, portal: portalFromProps } = props;

  const shouldReportDimensions =
    portalFromProps == null && (props.position == null || isOutsidePosition(props.position));

  // The contextPayload is not used directly inside the hook, but we need the onBBoxUpdate call
  // when the payload changes, therefore it's here as a dependency.
  const [lastBoundingBox, updateBoundingBox] = useElementOffset([contextPayload]);
  const chartWidth = useChartWidth();
  const chartHeight = useChartHeight();
  if (chartWidth == null || chartHeight == null || (props.position != null && positionViewBox == null)) {
    return null;
  }
  const maxWidth = chartWidth - (margin?.left || 0) - (margin?.right || 0);
  const widthOrHeight = getWidthOrHeight(layout, heightFromProps, widthFromProps, maxWidth);

  const positionResult =
    props.position == null
      ? null
      : getCartesianPosition({
          /*
           * When calculating the position we use two different view boxes.
           * Inside positions use the plot area; outside positions use the margin-inset
           * chart area, placing the Legend beyond any axes.
           */
          viewBox: positionViewBox ?? { x: 0, y: 0, width: chartWidth, height: chartHeight },
          position: props.position,
          offset: props.offset ?? 0,
        });
  const outsidePositionOffset = getOutsidePositionOffset(props.position, props.offset ?? 0, lastBoundingBox);
  const positionMaxWidth = layout === 'vertical' ? (positionViewBox?.width ?? 0) / 2 : (positionViewBox?.width ?? 0);
  const positionMaxHeight =
    layout === 'horizontal' ? (positionViewBox?.height ?? 0) / 2 : (positionViewBox?.height ?? 0);

  const positionStyle: React.CSSProperties | undefined = positionResult
    ? {
        width: 'max-content',
        height: 'max-content',
        maxWidth: positionMaxWidth,
        maxHeight: positionMaxHeight,
        overflowY: 'auto',
        top: positionResult.y + (outsidePositionOffset.top ?? 0),
        left: positionResult.x + (outsidePositionOffset.left ?? 0),
        transform: cartesianPositionToCSSTranslate(positionResult.horizontalAnchor, positionResult.verticalAnchor),
      }
    : getDefaultPosition(wrapperStyle, props, margin, chartWidth, chartHeight, lastBoundingBox);

  // if the user supplies their own portal, only use their defined wrapper styles
  const outerStyle: CSSProperties | undefined = portalFromProps
    ? wrapperStyle
    : {
        position: 'absolute',
        width: widthOrHeight?.width || widthFromProps || 'auto',
        height: widthOrHeight?.height || heightFromProps || 'auto',
        ...positionStyle,
        ...wrapperStyle,
      };

  const legendPortal = portalFromProps ?? legendPortalFromContext;

  if (legendPortal == null || contextPayload == null) {
    return null;
  }

  const legendElement = (
    <div className="recharts-legend-wrapper" style={outerStyle} ref={updateBoundingBox}>
      <LegendSettingsDispatcher
        layout={layout}
        align={props.align}
        verticalAlign={props.verticalAlign}
        itemSorter={props.itemSorter}
        position={props.position}
        offset={props.offset}
      />
      {shouldReportDimensions && <LegendSizeDispatcher {...lastBoundingBox} />}
      <LegendContent
        {...props}
        layout={layout}
        {...widthOrHeight}
        margin={margin}
        chartWidth={chartWidth}
        chartHeight={chartHeight}
        contextPayload={contextPayload}
      />
    </div>
  );

  return createPortal(legendElement, legendPortal);
}

export const Legend = React.memo(LegendImpl, propsAreEqual);

Legend.displayName = 'Legend';
