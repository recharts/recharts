/**
 * @fileOverview Tooltip
 */
import React, { PureComponent, CSSProperties, ReactNode, ReactElement, SVGProps } from 'react';
import { translateStyle } from 'react-smooth';
import { DefaultTooltipContent, ValueType, NameType, Payload, Props as DefaultProps } from './DefaultTooltipContent';

import { Global } from '../util/Global';
import { UniqueOption, getUniqPayload } from '../util/payload/getUniqPayload';
import { AllowInDimension, AnimationDuration, AnimationTiming, Coordinate } from '../util/types';
import { getTooltipTranslate } from '../util/tooltip/translate';

const EPS = 1;
export type ContentType<TValue extends ValueType, TName extends NameType> =
  | ReactElement
  | ((props: TooltipProps<TValue, TName>) => ReactNode);

function defaultUniqBy<TValue extends ValueType, TName extends NameType>(entry: Payload<TValue, TName>) {
  return entry.dataKey;
}

function renderContent<TValue extends ValueType, TName extends NameType>(
  content: ContentType<TValue, TName>,
  props: TooltipProps<TValue, TName>,
) {
  if (React.isValidElement(content)) {
    return React.cloneElement(content, props);
  }
  if (typeof content === 'function') {
    return React.createElement(content as any, props);
  }

  return <DefaultTooltipContent {...props} />;
}

export type TooltipProps<TValue extends ValueType, TName extends NameType> = DefaultProps<TValue, TName> & {
  allowEscapeViewBox?: AllowInDimension;
  reverseDirection?: AllowInDimension;
  content?: ContentType<TValue, TName>;
  viewBox?: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  };
  active?: boolean;
  offset?: number;
  wrapperStyle?: CSSProperties;
  cursor?: boolean | ReactElement | SVGProps<SVGElement>;
  coordinate?: Partial<Coordinate>;
  position?: Partial<Coordinate>;
  trigger?: 'hover' | 'click';
  shared?: boolean;
  payloadUniqBy?: UniqueOption<Payload<TValue, TName>>;
  isAnimationActive?: boolean;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
  filterNull?: boolean;
  useTranslate3d?: boolean;
};

export class Tooltip<TValue extends ValueType, TName extends NameType> extends PureComponent<
  TooltipProps<TValue, TName>
> {
  static displayName = 'Tooltip';

  static defaultProps = {
    active: false,
    allowEscapeViewBox: { x: false, y: false },
    reverseDirection: { x: false, y: false },
    offset: 10,
    viewBox: { x: 0, y: 0, height: 0, width: 0 },
    coordinate: { x: 0, y: 0 },
    cursorStyle: {},
    separator: ' : ',
    wrapperStyle: {},
    contentStyle: {},
    itemStyle: {},
    labelStyle: {},
    cursor: true,
    trigger: 'hover',
    isAnimationActive: !Global.isSsr,
    animationEasing: 'ease',
    animationDuration: 400,
    filterNull: true,
    useTranslate3d: false,
  };

  state = {
    dismissed: false,
    dismissedAtCoordinate: { x: 0, y: 0 },
  };

  lastBoundingBox = {
    width: -1,
    height: -1,
  };

  private wrapperNode: HTMLDivElement;

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    this.updateBBox();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate() {
    if (this.props.active) {
      this.updateBBox();
    }

    if (!this.state.dismissed) {
      return;
    }

    if (
      this.props.coordinate?.x !== this.state.dismissedAtCoordinate.x ||
      this.props.coordinate?.y !== this.state.dismissedAtCoordinate.y
    ) {
      this.state.dismissed = false;
    }
  }

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.setState({
        dismissed: true,
        dismissedAtCoordinate: {
          x: this.props.coordinate?.x ?? 0,
          y: this.props.coordinate?.y ?? 0,
        },
      });
    }
  };

  updateBBox() {
    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      const box = this.wrapperNode.getBoundingClientRect();

      if (
        Math.abs(box.width - this.lastBoundingBox.width) > EPS ||
        Math.abs(box.height - this.lastBoundingBox.height) > EPS
      ) {
        this.lastBoundingBox.width = box.width;
        this.lastBoundingBox.height = box.height;
      }
    } else if (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) {
      this.lastBoundingBox.width = -1;
      this.lastBoundingBox.height = -1;
    }
  }

  render() {
    const {
      active,
      allowEscapeViewBox,
      animationDuration,
      animationEasing,
      content,
      coordinate,
      filterNull,
      isAnimationActive,
      offset,
      payload,
      payloadUniqBy,
      position,
      reverseDirection,
      useTranslate3d,
      viewBox,
      wrapperStyle,
    } = this.props;
    let finalPayload: Payload<TValue, TName>[] = payload ?? [];

    if (filterNull && finalPayload.length) {
      finalPayload = getUniqPayload(
        payload.filter(entry => entry.value != null),
        payloadUniqBy,
        defaultUniqBy,
      );
    }

    const hasPayload = finalPayload.length;

    const { cssClasses, cssProperties } = getTooltipTranslate({
      allowEscapeViewBox,
      coordinate,
      offsetTopLeft: offset,
      position,
      reverseDirection,
      tooltipBox: {
        height: this.lastBoundingBox.height,
        width: this.lastBoundingBox.width,
      },
      useTranslate3d,
      viewBox,
    });

    const outerStyle: CSSProperties = {
      ...(isAnimationActive &&
        active &&
        translateStyle({ transition: `transform ${animationDuration}ms ${animationEasing}` })),
      ...cssProperties,
      pointerEvents: 'none',
      visibility: !this.state.dismissed && active && hasPayload ? 'visible' : 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      ...wrapperStyle,
    };

    return (
      // ESLint is disabled to allow listening to the `Escape` key. Refer to
      // https://github.com/recharts/recharts/pull/2925
      <div
        tabIndex={-1}
        role="dialog"
        className={cssClasses}
        style={outerStyle}
        ref={node => {
          this.wrapperNode = node;
        }}
      >
        {renderContent(content, { ...this.props, payload: finalPayload })}
      </div>
    );
  }
}
