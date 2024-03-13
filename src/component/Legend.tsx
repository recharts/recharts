import React, { PureComponent, CSSProperties, useState, useCallback } from 'react';
import { DefaultLegendContent, Payload, Props as DefaultProps } from './DefaultLegendContent';

import { isNumber } from '../util/DataUtils';
import { LayoutType } from '../util/types';
import { UniqueOption, getUniqPayload } from '../util/payload/getUniqPayload';
import { useLegendPayload } from '../context/legendPayloadContext';

function defaultUniqBy(entry: Payload) {
  return entry.value;
}

type ContentProps = Props & {
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

const EPS = 1;

type BoundingBox = {
  width: number;
  height: number;
};

function getDefaultPosition(style: React.CSSProperties, props: Props, box: BoundingBox) {
  const { layout, align, verticalAlign, margin, chartWidth, chartHeight } = props;
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
  chartWidth?: number;
  chartHeight?: number;
  width?: number;
  height?: number;
  margin?: {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
  };
  payloadUniqBy?: UniqueOption<Payload>;
  onBBoxUpdate?: (box: DOMRect | null) => void;
};

interface State {
  boxWidth: number;
  boxHeight: number;
}

function LegendWrapper(props: Props) {
  const contextPayload = useLegendPayload();
  const [lastBoundingBox, setLastBoundingBox] = useState<BoundingBox>({ width: 0, height: 0 });
  const { width, height, wrapperStyle, onBBoxUpdate } = props;
  const updateBoundingBox = useCallback(
    (node: HTMLDivElement | null) => {
      if (node != null && node.getBoundingClientRect) {
        const box = node.getBoundingClientRect();
        if (Math.abs(box.width - lastBoundingBox.width) > EPS || Math.abs(box.height - lastBoundingBox.height) > EPS) {
          setLastBoundingBox({ width: box.width, height: box.height });
          if (onBBoxUpdate) {
            onBBoxUpdate(box);
          }
        }
      }
    },
    // The contextPayload is not used directly inside the hook, but we need the onBBoxUpdate call
    // when the payload changes, therefore it's here as a dependency.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lastBoundingBox.width, lastBoundingBox.height, onBBoxUpdate, contextPayload],
  );
  const outerStyle: CSSProperties = {
    position: 'absolute',
    width: width || 'auto',
    height: height || 'auto',
    ...getDefaultPosition(wrapperStyle, props, lastBoundingBox),
    ...wrapperStyle,
  };

  return (
    <div className="recharts-legend-wrapper" style={outerStyle} ref={updateBoundingBox}>
      <LegendContent {...props} contextPayload={contextPayload} />
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

  private wrapperNode: HTMLDivElement;

  static getWithHeight(
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

  lastBoundingBox: BoundingBox = {
    width: -1,
    height: -1,
  };

  public componentDidMount() {
    this.updateBBox();
  }

  public componentDidUpdate() {
    this.updateBBox();
  }

  private updateBBox() {
    const { onBBoxUpdate } = this.props;

    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      const box = this.wrapperNode.getBoundingClientRect();

      if (
        Math.abs(box.width - this.lastBoundingBox.width) > EPS ||
        Math.abs(box.height - this.lastBoundingBox.height) > EPS
      ) {
        this.lastBoundingBox.width = box.width;
        this.lastBoundingBox.height = box.height;
        if (onBBoxUpdate) {
          onBBoxUpdate(box);
        }
      }
    } else if (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) {
      this.lastBoundingBox.width = -1;
      this.lastBoundingBox.height = -1;
      if (onBBoxUpdate) {
        onBBoxUpdate(null);
      }
    }
  }

  public render() {
    return <LegendWrapper {...this.props} />;
  }
}
