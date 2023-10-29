/**
 * @fileOverview Tooltip
 */
import React, { PureComponent, CSSProperties, ReactNode, ReactElement, SVGProps } from 'react';
import { translateStyle } from 'react-smooth';
import isFunction from 'lodash/isFunction';
import isNil from 'lodash/isNil';

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
  if (isFunction(content)) {
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
    boxWidth: -1,
    boxHeight: -1,
    dismissed: false,
    dismissedAtCoordinate: { x: 0, y: 0 },
  };

  private wrapperNode: HTMLDivElement;

  componentDidMount() {
    this.updateBBox();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate() {
    this.updateBBox();
  }

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.setState({
        dismissed: true,
        dismissedAtCoordinate: {
          ...this.state.dismissedAtCoordinate,
          x: this.props.coordinate.x,
          y: this.props.coordinate.y,
        },
      });
    }
  };

  updateBBox() {
    const { boxWidth, boxHeight, dismissed } = this.state;
    if (dismissed) {
      document.removeEventListener('keydown', this.handleKeyDown);
      if (
        this.props.coordinate.x !== this.state.dismissedAtCoordinate.x ||
        this.props.coordinate.y !== this.state.dismissedAtCoordinate.y
      ) {
        this.setState({ dismissed: false });
      }
    } else {
      document.addEventListener('keydown', this.handleKeyDown);
    }

    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      const box = this.wrapperNode.getBoundingClientRect();

      if (Math.abs(box.width - boxWidth) > EPS || Math.abs(box.height - boxHeight) > EPS) {
        this.setState({
          boxWidth: box.width,
          boxHeight: box.height,
        });
      }
    } else if (boxWidth !== -1 || boxHeight !== -1) {
      this.setState({
        boxWidth: -1,
        boxHeight: -1,
      });
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
    const finalPayload = getUniqPayload(
      filterNull && payload && payload.length ? payload.filter(entry => !isNil(entry.value)) : payload,
      payloadUniqBy,
      defaultUniqBy,
    );
    const hasPayload = finalPayload && finalPayload.length;

    const { cssClasses, cssProperties } = getTooltipTranslate({
      allowEscapeViewBox,
      coordinate,
      offsetTopLeft: offset,
      position,
      reverseDirection,
      tooltipBox: {
        height: this.state.boxHeight,
        width: this.state.boxWidth,
      },
      useTranslate3d,
      viewBox,
    });

    let outerStyle: CSSProperties = {
      ...cssProperties,
      pointerEvents: 'none',
      visibility: !this.state.dismissed && active && hasPayload ? 'visible' : 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      ...wrapperStyle,
    };

    if (isAnimationActive && active) {
      outerStyle = {
        ...translateStyle({
          transition: `transform ${animationDuration}ms ${animationEasing}`,
        }),
        ...outerStyle,
      };
    }

    return (
      // ESLint is disabled to allow listening to the `Escape` key. Refer to
      // https://github.com/recharts/recharts/pull/2925
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
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
