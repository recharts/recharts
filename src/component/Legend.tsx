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

type SetBoundingBox = (node: HTMLElement | null) => void;

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

/**
 * Use this to listen to bounding box changes.
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
 *
 * Very useful for reading actual sizes of DOM elements.
 *
 * Be aware that this is difficult to test for. jsdom, by design, returns all zeroes!
 * If you want to write tests check out the utility function `mockGetBoundingClientRect`
 *
 * @param onUpdate this is extra callback that's called with the full DOMRect. Note that this receives different object than the return value.
 * @param extraDependencies use this to trigger new DOM dimensions read when any of these change. Good for things like payload and label, that will re-render something down in the children array, but you want to read the bounding box of a parent.
 * @returns [lastBoundingBox, updateBoundingBox] most recent value, and setter. Pass the setter to a DOM element ref like this: `<div ref={updateBoundingBox}>`
 */
function useGetBoundingClientRect(
  onUpdate: (domRect: DOMRect | null) => void,
  extraDependencies: ReadonlyArray<unknown>,
): [BoundingBox, SetBoundingBox] {
  const [lastBoundingBox, setLastBoundingBox] = useState<BoundingBox>({ width: 0, height: 0 });
  const updateBoundingBox = useCallback(
    (node: HTMLDivElement | null) => {
      if (node != null && node.getBoundingClientRect) {
        const box = node.getBoundingClientRect();
        box.width = node.offsetWidth;
        box.height = node.offsetHeight;
        if (Math.abs(box.width - lastBoundingBox.width) > EPS || Math.abs(box.height - lastBoundingBox.height) > EPS) {
          setLastBoundingBox({ width: box.width, height: box.height });
          if (onUpdate) {
            onUpdate(box);
          }
        }
      }
    },
    [lastBoundingBox.width, lastBoundingBox.height, onUpdate, ...extraDependencies],
  );
  return [lastBoundingBox, updateBoundingBox];
}

function LegendWrapper(props: Props) {
  const contextPayload = useLegendPayload();
  const { width, height, wrapperStyle, onBBoxUpdate } = props;
  // The contextPayload is not used directly inside the hook, but we need the onBBoxUpdate call
  // when the payload changes, therefore it's here as a dependency.
  const [lastBoundingBox, updateBoundingBox] = useGetBoundingClientRect(onBBoxUpdate, [contextPayload]);

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

  public render() {
    return <LegendWrapper {...this.props} />;
  }
}
