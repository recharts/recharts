import React, { CSSProperties, PureComponent, ReactNode } from 'react';
import { AllowInDimension, AnimationDuration, AnimationTiming, CartesianViewBox, Coordinate } from '../util/types';
import { getTooltipTranslate } from '../util/tooltip/translate';
import { BoundingBox, SetBoundingBox } from '../util/useGetBoundingClientRect';

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
  lastBoundingBox: BoundingBox;
  innerRef: SetBoundingBox;
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

    /*
     * So Tooltip is a specialty in Recharts - it is a HTML element rendered inside SVG container.
     * This does not work just like that (HTML is not a subset of SVG) but there is a special tag for it
     * - <foreignObject>. This tag allows including extra stuff inside the SVG - such as HTML.
     * See https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject
     *
     * The x and 0 and width and height are static and cover the whole SVG document, because
     * the tooltip itself is positioned via context.
     *
     * pointer-events: none is necessary because this foreignObject covers the whole chart,
     * and if it was catching mouse events it would steal them all before they reach the chart
     * and tooltip would never open.
     */
    return (
      <g>
        <foreignObject x="0" y="0" width="100%" height="100%" style={{ pointerEvents: 'none' }}>
          {/* This element allow listening to the `Escape` key. // See https://github.com/recharts/recharts/pull/2925 */}
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
        </foreignObject>
      </g>
    );
  }
}
