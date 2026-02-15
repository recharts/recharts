import * as React from 'react';

import {
  AllowInDimension,
  AnimationDuration,
  AnimationTiming,
  CartesianViewBox,
  Coordinate,
  PolarCoordinate,
} from '../util/types';
import { ElementOffset, SetElementOffset } from '../util/useElementOffset';
import { getTooltipTranslate } from '../util/tooltip/translate';
import { usePrefersReducedMotion } from '../util/usePrefersReducedMotion';

export type TooltipBoundingBoxProps = {
  active: boolean;
  allowEscapeViewBox: AllowInDimension;
  animationDuration: AnimationDuration;
  animationEasing: AnimationTiming;
  children: React.ReactNode;
  coordinate: Coordinate | PolarCoordinate | undefined;
  hasPayload: boolean;
  isAnimationActive: boolean | 'auto';
  offset: number | Coordinate;
  position: Partial<Coordinate> | undefined;
  reverseDirection: AllowInDimension;
  useTranslate3d: boolean;
  viewBox: CartesianViewBox;
  wrapperStyle: React.CSSProperties;
  lastBoundingBox: ElementOffset;
  innerRef: SetElementOffset;
  hasPortalFromProps: boolean;
};

function resolveTransitionProperty(args: {
  prefersReducedMotion: boolean;
  isAnimationActive: boolean | 'auto';
  active: boolean;
  animationDuration: number;
  animationEasing: string;
}): `transform ${number}ms ${string}` | undefined {
  if (args.prefersReducedMotion && args.isAnimationActive === 'auto') {
    return undefined;
  }
  if (args.isAnimationActive && args.active) {
    return `transform ${args.animationDuration}ms ${args.animationEasing}`;
  }
  return undefined;
}

function TooltipBoundingBoxImpl(props: TooltipBoundingBoxProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [state, setState] = React.useState(() => ({
    dismissed: false,
    dismissedAtCoordinate: { x: 0, y: 0 },
  }));

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setState({
          dismissed: true,
          dismissedAtCoordinate: {
            x: props.coordinate?.x ?? 0,
            y: props.coordinate?.y ?? 0,
          },
        });
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [props.coordinate?.x, props.coordinate?.y]);

  if (
    state.dismissed &&
    ((props.coordinate?.x ?? 0) !== state.dismissedAtCoordinate.x ||
      (props.coordinate?.y ?? 0) !== state.dismissedAtCoordinate.y)
  ) {
    setState({ ...state, dismissed: false });
  }

  const { cssClasses, cssProperties } = getTooltipTranslate({
    allowEscapeViewBox: props.allowEscapeViewBox,
    coordinate: props.coordinate,
    offsetLeft: typeof props.offset === 'number' ? props.offset : props.offset.x,
    offsetTop: typeof props.offset === 'number' ? props.offset : props.offset.y,
    position: props.position,
    reverseDirection: props.reverseDirection,
    tooltipBox: {
      height: props.lastBoundingBox.height,
      width: props.lastBoundingBox.width,
    },
    useTranslate3d: props.useTranslate3d,
    viewBox: props.viewBox,
  });
  const positionStyle: React.CSSProperties = props.hasPortalFromProps
    ? {}
    : {
        transition: resolveTransitionProperty({
          prefersReducedMotion,
          isAnimationActive: props.isAnimationActive,
          active: props.active,
          animationDuration: props.animationDuration,
          animationEasing: props.animationEasing,
        }),
        ...cssProperties,
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
      };
  const outerStyle: React.CSSProperties = {
    ...positionStyle,
    visibility: !state.dismissed && props.active && props.hasPayload ? 'visible' : 'hidden',
    ...props.wrapperStyle,
  };
  return (
    <div
      // @ts-expect-error typescript library does not recognize xmlns attribute, but it's required for an HTML chunk inside SVG.
      xmlns="http://www.w3.org/1999/xhtml"
      tabIndex={-1}
      className={cssClasses}
      style={outerStyle}
      ref={props.innerRef}
    >
      {props.children}
    </div>
  );
}

export const TooltipBoundingBox = React.memo(TooltipBoundingBoxImpl);
