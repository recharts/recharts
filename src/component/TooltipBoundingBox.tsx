import React, { CSSProperties, PureComponent, ReactNode } from 'react';
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
  lastBoundingBox: { width: number; height: number };
};

export class TooltipBoundingBox extends PureComponent<TooltipBoundingBoxProps, State> {
  state = {
    dismissed: false,
    dismissedAtCoordinate: { x: 0, y: 0 },
    lastBoundingBox: { width: -1, height: -1 },
  };

  private wrapperNode: React.RefObject<HTMLDivElement | null> = React.createRef();

  private resizeObserver?: ResizeObserver = null;

  componentDidMount() {
    this.resizeObserver = new ResizeObserver(entries => {
      const { width, height } = entries[0]?.contentRect ?? { width: 0, height: 0 };
      this.setState({ lastBoundingBox: { width, height } });
    });
    if (this.wrapperNode.current) {
      this.resizeObserver.observe(this.wrapperNode.current);
    }
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
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
    } = this.props;

    const { cssClasses, cssProperties } = getTooltipTranslate({
      allowEscapeViewBox,
      coordinate,
      offsetTopLeft: offset,
      position,
      reverseDirection,
      tooltipBox: this.state.lastBoundingBox,
      useTranslate3d,
      viewBox,
    });

    const outerStyle: CSSProperties = {
      transition: isAnimationActive && active ? `transform ${animationDuration}ms ${animationEasing}` : undefined,
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
      <div tabIndex={-1} className={cssClasses} style={outerStyle} ref={this.wrapperNode}>
        {children}
      </div>
    );
  }
}
