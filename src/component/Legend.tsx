import React, { CSSProperties, PureComponent } from 'react';
import { DefaultLegendContent, Payload, Props as DefaultProps } from './DefaultLegendContent';

import { isNumber } from '../util/DataUtils';
import { LayoutType, Margin } from '../util/types';
import { getUniqPayload, UniqueOption } from '../util/payload/getUniqPayload';
import { useLegendPayload } from '../context/legendPayloadContext';
import { BoundingBox, useGetBoundingClientRect } from '../util/useGetBoundingClientRect';
import { useChartHeight, useChartWidth, useMargin } from '../context/chartLayoutContext';

function defaultUniqBy(entry: Payload) {
  return entry.value;
}

type ContentProps = Props & {
  margin: Margin;
  chartWidth: number;
  chartHeight: number;
  contextPayload: Payload[];
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

  const { ref, ...propsWithoutRef } = contentProps;

  return <DefaultLegendContent {...propsWithoutRef} />;
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
  box: BoundingBox,
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

export type Props = DefaultProps & {
  wrapperStyle?: CSSProperties;
  width?: number;
  height?: number;
  payloadUniqBy?: UniqueOption<Payload>;
  onBBoxUpdate?: (box: BoundingBox | null) => void;
};

interface State {
  boxWidth: number;
  boxHeight: number;
}

function LegendWrapper(props: Props) {
  const contextPayload = useLegendPayload();
  const margin = useMargin();
  const { width, height, wrapperStyle, onBBoxUpdate } = props;
  // The contextPayload is not used directly inside the hook, but we need the onBBoxUpdate call
  // when the payload changes, therefore it's here as a dependency.
  const [lastBoundingBox, updateBoundingBox] = useGetBoundingClientRect(onBBoxUpdate, [contextPayload]);
  const chartWidth = useChartWidth();
  const chartHeight = useChartHeight();

  const outerStyle: CSSProperties = {
    position: 'absolute',
    width: width || 'auto',
    height: height || 'auto',
    ...getDefaultPosition(wrapperStyle, props, margin, chartWidth, chartHeight, lastBoundingBox),
    ...wrapperStyle,
  };

  return (
    <div className="recharts-legend-wrapper" style={outerStyle} ref={updateBoundingBox}>
      <LegendContent
        {...props}
        margin={margin}
        chartWidth={chartWidth}
        chartHeight={chartHeight}
        contextPayload={contextPayload}
      />
    </div>
  );
}

export class Legend extends PureComponent<Props, State> {
  static displayName = 'Legend';

  static defaultProps = {
    iconSize: 14,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'bottom',
  };

  static getWidthOrHeight(
    item: { props: { layout?: LayoutType; height?: number; width?: number } },
    chartWidth: number,
  ): null | { height: number } | { width: number } {
    const { layout } = item.props;

    if (layout === 'vertical' && isNumber(item.props.height)) {
      return {
        height: item.props.height,
      };
    }
    if (layout === 'horizontal') {
      return {
        width: item.props.width || chartWidth,
      };
    }

    return null;
  }

  public render() {
    return <LegendWrapper {...this.props} />;
  }
}
