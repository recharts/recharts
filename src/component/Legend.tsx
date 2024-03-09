/**
 * @fileOverview Legend
 */
import React, { PureComponent, CSSProperties } from 'react';
import { DefaultLegendContent, Payload, Props as DefaultProps, ContentType } from './DefaultLegendContent';

import { isNumber } from '../util/DataUtils';
import { LayoutType } from '../util/types';
import { UniqueOption, getUniqPayload } from '../util/payload/getUniqPayload';

function defaultUniqBy(entry: Payload) {
  return entry.value;
}

function renderContent(content: ContentType, props: Props) {
  if (React.isValidElement(content)) {
    return React.cloneElement(content, props);
  }
  if (typeof content === 'function') {
    return React.createElement(content as any, props);
  }

  const { ref, ...otherProps } = props;

  return <DefaultLegendContent {...otherProps} />;
}

const EPS = 1;

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

  lastBoundingBox = {
    width: -1,
    height: -1,
  };

  public componentDidMount() {
    this.updateBBox();
  }

  public componentDidUpdate() {
    this.updateBBox();
  }

  public getBBox() {
    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      return this.wrapperNode.getBoundingClientRect();
    }

    return null;
  }

  private updateBBox() {
    const { onBBoxUpdate } = this.props;

    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      const box = this.wrapperNode.getBoundingClientRect();
      box.height = this.wrapperNode.offsetHeight;
      box.width = this.wrapperNode.offsetWidth;
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

  private getBBoxSnapshot() {
    if (this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0) {
      return { ...this.lastBoundingBox };
    }

    return { width: 0, height: 0 };
  }

  private getDefaultPosition(style: CSSProperties) {
    const { layout, align, verticalAlign, margin, chartWidth, chartHeight } = this.props;
    let hPos, vPos;

    if (
      !style ||
      ((style.left === undefined || style.left === null) && (style.right === undefined || style.right === null))
    ) {
      if (align === 'center' && layout === 'vertical') {
        const box = this.getBBoxSnapshot();
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
        const box = this.getBBoxSnapshot();
        vPos = { top: ((chartHeight || 0) - box.height) / 2 };
      } else {
        vPos =
          verticalAlign === 'bottom'
            ? { bottom: (margin && margin.bottom) || 0 }
            : { top: (margin && margin.top) || 0 };
      }
    }

    return { ...hPos, ...vPos };
  }

  public render() {
    const { content, width, height, wrapperStyle, payloadUniqBy, payload } = this.props;
    const outerStyle: CSSProperties = {
      position: 'absolute',
      width: width || 'auto',
      height: height || 'auto',
      ...this.getDefaultPosition(wrapperStyle),
      ...wrapperStyle,
    };

    return (
      <div
        className="recharts-legend-wrapper"
        style={outerStyle}
        ref={node => {
          this.wrapperNode = node;
        }}
      >
        {renderContent(content, { ...this.props, payload: getUniqPayload(payload, payloadUniqBy, defaultUniqBy) })}
      </div>
    );
  }
}
