import React, { CSSProperties, PureComponent, ReactNode } from 'react';
import { translateStyle } from 'react-smooth';
import { AllowInDimension, AnimationDuration, AnimationTiming, CartesianViewBox, Coordinate } from '../util/types';
import { getTooltipTranslate } from '../util/tooltip/translate';

export type TooltipBoundingBoxProps = {
  active: boolean;
  allowEscapeViewBox: AllowInDimension;
  animationDuration: AnimationDuration;
  animationEasing: AnimationTiming;
  children: ReactNode;
  coordinate: Partial<Coordinate>;
  hasPayload: boolean;
  isAnimationActive: boolean;
  offset: number;
  position: Partial<Coordinate>;
  reverseDirection: AllowInDimension;
  useTranslate3d: boolean;
  viewBox: CartesianViewBox;
  wrapperStyle: CSSProperties;
};

type State = {
  dismissed: boolean;
  dismissedAtCoordinate: Coordinate;
};

const EPSILON = 1;

export class TooltipBoundingBox extends PureComponent<TooltipBoundingBoxProps, State> {
  state = {
    dismissed: false,
    dismissedAtCoordinate: { x: 0, y: 0 },
  };

  lastBoundingBox = {
    width: -1,
    height: -1,
  };

  private wrapperNode: HTMLDivElement;

  updateBBox() {
    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      const box = this.wrapperNode.getBoundingClientRect();

      if (
        Math.abs(box.width - this.lastBoundingBox.width) > EPSILON ||
        Math.abs(box.height - this.lastBoundingBox.height) > EPSILON
      ) {
        this.lastBoundingBox.width = box.width;
        this.lastBoundingBox.height = box.height;
      }
    } else if (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) {
      this.lastBoundingBox.width = -1;
      this.lastBoundingBox.height = -1;
    }
  }

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

  render() {
    const {
      active,
      allowEscapeViewBox,
      animationDuration,
      animationEasing,
      children,
      coordinate,
      hasPayload,
      isAnimationActive,
      offset,
      position,
      reverseDirection,
      useTranslate3d,
      viewBox,
      wrapperStyle,
    } = this.props;

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
      // This element allow listening to the `Escape` key.
      // See https://github.com/recharts/recharts/pull/2925
      <div
        tabIndex={-1}
        className={cssClasses}
        style={outerStyle}
        ref={node => {
          this.wrapperNode = node;
        }}
      >
        {children}
      </div>
    );
  }
}
