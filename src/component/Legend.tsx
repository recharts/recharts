/**
 * @fileOverview Legend
 */
import React, { PureComponent, ReactNode, CSSProperties } from 'react';
import _ from 'lodash';
import DefaultLegendContent from './DefaultLegendContent';
import { Payload, Props as DefaultProps, ContentType } from './DefaultLegendContent';
import { isNumber } from '../util/DataUtils';

type UniqueFunc<TValue, TID> = (entry: Payload<TValue, TID>) => unknown
type UniqueOption<TValue, TID> = boolean | UniqueFunc<TValue, TID>;
function defaultUniqBy<TValue, TID>(entry: Payload<TValue, TID>) { return entry.value };
function getUniqPayload<TValue, TID>(option: UniqueOption<TValue, TID>, payload: Array<Payload<TValue, TID>>) {
  if (option === true) {
    return _.uniqBy(payload, defaultUniqBy);
  }

  if (_.isFunction(option)) {
    return _.uniqBy(payload, option);
  }

  return payload;
};

function renderContent<TValue, TID>(content: ContentType<TValue, TID>, props: Props<TValue, TID>) {
  if (React.isValidElement(content)) {
    return React.cloneElement(content, props);
  } if (_.isFunction(content)) {
    return content(props);
  }

  return <DefaultLegendContent {...props} />
};

const EPS = 1;

type Props<TValue, TID> = DefaultProps<TValue, TID> & {
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
  payloadUniqBy?: UniqueOption<TValue, TID>;
  onBBoxUpdate?: (box: ClientRect | DOMRect | null) => void;
};

interface State {
  boxWidth: number;
  boxHeight: number;
}

class Legend<TValue, TID> extends PureComponent<Props<TValue, TID>, State> {
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
    } if (layout === 'horizontal') {
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

  componentDidMount() {
    this.updateBBox();
  }

  componentDidUpdate() {
    this.updateBBox();
  }

  getBBox() {
    const { boxWidth, boxHeight } = this.state;

    if (boxWidth >= 0 && boxHeight >= 0) {
      return { width: boxWidth, height: boxHeight };
    }

    return null;
  }

  getDefaultPosition(style: CSSProperties) {
    const { layout, align, verticalAlign, margin, chartWidth, chartHeight } = this.props;
    let hPos, vPos;

    if (!style || ((style.left === undefined || style.left === null) && (
      style.right === undefined || style.right === null))) {
      if (align === 'center' && layout === 'vertical') {
        const box = this.getBBox() || { width: 0 };
        hPos = { left: ((chartWidth || 0) - box.width) / 2 };
      } else {
        hPos = align === 'right' ?
          { right: (margin && margin.right) || 0 } :
          { left: (margin && margin.left) || 0 };
      }
    }

    if (!style || ((style.top === undefined || style.top === null) && (
      style.bottom === undefined || style.bottom === null))) {
      if (verticalAlign === 'middle') {
        const box = this.getBBox() || { height: 0 };
        vPos = { top: ((chartHeight || 0) - box.height) / 2 };
      } else {
        vPos = verticalAlign === 'bottom' ?
          { bottom: (margin && margin.bottom) || 0 } :
          { top: (margin && margin.top) || 0 };
      }
    }

    return { ...hPos, ...vPos };
  }

  updateBBox() {
    const { boxWidth, boxHeight } = this.state;
    const { onBBoxUpdate } = this.props;

    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      const box = this.wrapperNode.getBoundingClientRect();

      if (Math.abs(box.width - boxWidth) > EPS || Math.abs(box.height - boxHeight) > EPS) {
        this.setState({
          boxWidth: box.width,
          boxHeight: box.height,
        }, () => {
          if (onBBoxUpdate) {
            onBBoxUpdate(box);
          }
        });
      }
    } else if (boxWidth !== -1 || boxHeight !== -1) {
      this.setState({
        boxWidth: -1,
        boxHeight: -1,
      }, () => {
        if (onBBoxUpdate) {
          onBBoxUpdate(null);
        }
      });
    }
  }

  render() {
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
        ref={(node) => { this.wrapperNode = node; }}
      >
        {renderContent(content, { ...this.props, payload: getUniqPayload(payloadUniqBy, payload) })}
      </div>
    );
  }
}

export default Legend;
