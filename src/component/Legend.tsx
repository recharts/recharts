import * as React from 'react';
import { CSSProperties, PureComponent, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLegendPortal } from '../context/legendPortalContext';
import { DefaultLegendContent, LegendPayload, Props as DefaultProps } from './DefaultLegendContent';

import { isNumber } from '../util/DataUtils';
import { LayoutType, Margin, Size } from '../util/types';
import { getUniqPayload, UniqueOption } from '../util/payload/getUniqPayload';
import { useLegendPayload } from '../context/legendPayloadContext';
import { ElementOffset, useElementOffset } from '../util/useElementOffset';
import { useChartHeight, useChartWidth, useMargin } from '../context/chartLayoutContext';
import { LegendSettings, setLegendSettings, setLegendSize } from '../state/legendSlice';
import { useAppDispatch } from '../state/hooks';

function defaultUniqBy(entry: LegendPayload) {
  return entry.value;
}

type ContentProps = Props & {
  margin: Margin;
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

function getDefaultPosition(
  style: React.CSSProperties,
  props: PositionInput,
  margin: Margin,
  chartWidth: number,
  chartHeight: number,
  box: ElementOffset,
) {
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

export type Props = Omit<DefaultProps, 'payload' | 'ref'> & {
  wrapperStyle?: CSSProperties;
  width?: number;
  height?: number;
  payloadUniqBy?: UniqueOption<LegendPayload>;
  onBBoxUpdate?: (box: ElementOffset | null) => void;
  /**
   * If portal is defined, then Legend will use this element as a target
   * for rendering using React Portal: https://react.dev/reference/react-dom/createPortal
   *
   * If this is undefined then Legend renders inside the recharts-wrapper element.
   */
  portal?: HTMLElement | null;
  itemSorter?: LegendItemSorter;
};

interface State {
  boxWidth: number;
  boxHeight: number;
}

function LegendSettingsDispatcher(props: LegendSettings): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLegendSettings(props));
  }, [dispatch, props]);
  return null;
}

function LegendSizeDispatcher(props: Size): null {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLegendSize(props));
    return () => {
      dispatch(setLegendSize({ width: 0, height: 0 }));
    };
  }, [dispatch, props]);
  return null;
}

function LegendWrapper(props: Props) {
  const contextPayload = useLegendPayload();
  const legendPortalFromContext = useLegendPortal();
  const margin = useMargin();
  const { width: widthFromProps, height: heightFromProps, wrapperStyle, portal: portalFromProps } = props;
  // The contextPayload is not used directly inside the hook, but we need the onBBoxUpdate call
  // when the payload changes, therefore it's here as a dependency.
  const [lastBoundingBox, updateBoundingBox] = useElementOffset([contextPayload]);
  const chartWidth = useChartWidth();
  const chartHeight = useChartHeight();
  const maxWidth = chartWidth - (margin.left || 0) - (margin.right || 0);
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const widthOrHeight = Legend.getWidthOrHeight(props.layout, heightFromProps, widthFromProps, maxWidth);
  // if the user supplies their own portal, only use their defined wrapper styles
  const outerStyle: CSSProperties = portalFromProps
    ? wrapperStyle
    : {
        position: 'absolute',
        width: widthOrHeight?.width || widthFromProps || 'auto',
        height: widthOrHeight?.height || heightFromProps || 'auto',
        ...getDefaultPosition(wrapperStyle, props, margin, chartWidth, chartHeight, lastBoundingBox),
        ...wrapperStyle,
      };

  const legendPortal = portalFromProps ?? legendPortalFromContext;

  if (legendPortal == null) {
    return null;
  }

  const legendElement = (
    <div className="recharts-legend-wrapper" style={outerStyle} ref={updateBoundingBox}>
      <LegendSettingsDispatcher
        layout={props.layout}
        align={props.align}
        verticalAlign={props.verticalAlign}
        itemSorter={props.itemSorter}
      />
      <LegendSizeDispatcher width={lastBoundingBox.width} height={lastBoundingBox.height} />
      <LegendContent
        {...props}
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

export class Legend extends PureComponent<Props, State> {
  static displayName = 'Legend';

  static defaultProps = {
    align: 'center',
    iconSize: 14,
    itemSorter: 'value',
    layout: 'horizontal',
    verticalAlign: 'bottom',
  };

  static getWidthOrHeight(
    layout: LayoutType | undefined,
    height: number | undefined,
    width: number | undefined,
    maxWidth: number,
  ): null | { height?: number; width?: number } {
    if (layout === 'vertical' && isNumber(height)) {
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

  public render() {
    return <LegendWrapper {...this.props} />;
  }
}
