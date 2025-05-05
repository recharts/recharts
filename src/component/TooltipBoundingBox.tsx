import * as React from 'react';
import { CSSProperties, PureComponent, ReactNode } from 'react';
import { AllowInDimension, AnimationDuration, AnimationTiming, CartesianViewBox, Coordinate } from '../util/types';
import { getTooltipTranslate } from '../util/tooltip/translate';
import { ElementOffset, SetElementOffset } from '../util/useElementOffset';

export type TooltipBoundingBoxProps = {
  active: boolean;
  allowEscapeViewBox: AllowInDimension;
  animationDuration: AnimationDuration;
  animationEasing: AnimationTiming;
  children: ReactNode;
  coordinate: Coordinate;
  hasPayload: boolean;
  isAnimationActive: boolean;
  offset: number;
  position: Partial<Coordinate>;
  reverseDirection: AllowInDimension;
  useTranslate3d: boolean;
  viewBox: CartesianViewBox;
  wrapperStyle: CSSProperties;
  lastBoundingBox: ElementOffset;
  innerRef: SetElementOffset;
  hasPortalFromProps: boolean;
};

type State = {
  dismissed: boolean;
  dismissedAtCoordinate: Coordinate;
};

export class TooltipBoundingBox extends PureComponent<TooltipBoundingBoxProps, State> {
  state = {
    dismissed: false,
    dismissedAtCoordinate: { x: 0, y: 0 },
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate() {
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
      lastBoundingBox,
      innerRef,
      hasPortalFromProps,
    } = this.props;

    const { cssClasses, cssProperties } = getTooltipTranslate({
      allowEscapeViewBox,
      coordinate,
      offsetTopLeft: offset,
      position,
      reverseDirection,
      tooltipBox: {
        height: lastBoundingBox.height,
        width: lastBoundingBox.width,
      },
      useTranslate3d,
      viewBox,
    });

    // do not use absolute styles if the user has passed a custom portal prop
    const positionStyles: CSSProperties = hasPortalFromProps
      ? {}
      : {
          transition: isAnimationActive && active ? `transform ${animationDuration}ms ${animationEasing}` : undefined,
          ...cssProperties,
          pointerEvents: 'none',
          visibility: !this.state.dismissed && active && hasPayload ? 'visible' : 'hidden',
          position: 'absolute',
          top: 0,
          left: 0,
        };

    const outerStyle: CSSProperties = {
      ...positionStyles,
      visibility: !this.state.dismissed && active && hasPayload ? 'visible' : 'hidden',
      ...wrapperStyle,
    };

    return (
      // This element allow listening to the `Escape` key. See https://github.com/recharts/recharts/pull/2925
      <div
        // @ts-expect-error typescript library does not recognize xmlns attribute, but it's required for an HTML chunk inside SVG.
        xmlns="http://www.w3.org/1999/xhtml"
        tabIndex={-1}
        className={cssClasses}
        style={outerStyle}
        ref={innerRef}
      >
        {children}
      </div>
    );
  }
}
