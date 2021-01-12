/**
 * @fileOverview Legend
 */
import React, { PureComponent, CSSProperties } from 'react';
import _ from 'lodash';
import { DefaultLegendContent, Payload, Props as DefaultProps, ContentType } from './DefaultLegendContent';

import { isNumber } from '../util/DataUtils';

type UniqueOption = boolean | ((entry: Payload) => Payload);
function defaultUniqBy(entry: Payload) {
  return entry.value;
}
function getUniqPayload(option: UniqueOption, payload: Array<Payload>) {
  if (option === true) {
    return _.uniqBy(payload, defaultUniqBy);
  }

  if (_.isFunction(option)) {
    return _.uniqBy(payload, option);
  }

  return payload;
}

function renderContent(content: ContentType, props: Props) {
  if (React.isValidElement(content)) {
    return React.cloneElement(content, props);
  }
  if (_.isFunction(content)) {
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
  payloadUniqBy?: UniqueOption;
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

  static getWithHeight(item: any, chartWidth: number) {
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

  state = {
    boxWidth: -1,
    boxHeight: -1,
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

  private getBBoxSnapshot() {
    const { boxWidth, boxHeight } = this.state;

    if (boxWidth >= 0 && boxHeight >= 0) {
      return { width: boxWidth, height: boxHeight };
    }

    return null;
  }

  private getDefaultPosition(style: CSSProperties) {
    const { layout, align, verticalAlign, margin, chartWidth, chartHeight } = this.props;
    let hPos, vPos;

    if (
      !style ||
      ((style.left === undefined || style.left === null) && (style.right === undefined || style.right === null))
    ) {
      if (align === 'center' && layout === 'vertical') {
        const box = this.getBBoxSnapshot() || { width: 0 };
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
        const box = this.getBBoxSnapshot() || { height: 0 };
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

  private updateBBox() {
    const { boxWidth, boxHeight } = this.state;
    const { onBBoxUpdate } = this.props;

    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      const box = this.wrapperNode.getBoundingClientRect();

      if (Math.abs(box.width - boxWidth) > EPS || Math.abs(box.height - boxHeight) > EPS) {
        this.setState(
          {
            boxWidth: box.width,
            boxHeight: box.height,
          },
          () => {
            if (onBBoxUpdate) {
              onBBoxUpdate(box);
            }
          },
        );
      }
    } else if (boxWidth !== -1 || boxHeight !== -1) {
      this.setState(
        {
          boxWidth: -1,
          boxHeight: -1,
        },
        () => {
          if (onBBoxUpdate) {
            onBBoxUpdate(null);
          }
        },
      );
    }
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
        {renderContent(content, { ...this.props, payload: getUniqPayload(payloadUniqBy, payload) })}
      </div>
    );
  }
}
