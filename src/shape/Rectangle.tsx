/**
 * @fileOverview Rectangle
 */
import * as React from 'react';
import { SVGProps, useEffect, useMemo, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { AnimationDuration } from '../util/types';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { JavascriptAnimate } from '../animation/JavascriptAnimate';
import { EasingInput } from '../animation/easing';
import { interpolate } from '../util/DataUtils';
import { useAnimationId } from '../util/useAnimationId';
import { getTransitionVal } from '../animation/util';
import { svgPropertiesAndEvents } from '../util/svgPropertiesAndEvents';

export type RectRadius = [number, number, number, number];

const getRectanglePath = (x: number, y: number, width: number, height: number, radius: number | RectRadius): string => {
  const maxRadius = Math.min(Math.abs(width) / 2, Math.abs(height) / 2);
  const ySign = height >= 0 ? 1 : -1;
  const xSign = width >= 0 ? 1 : -1;
  const clockWise = (height >= 0 && width >= 0) || (height < 0 && width < 0) ? 1 : 0;
  let path;

  if (maxRadius > 0 && radius instanceof Array) {
    const newRadius: RectRadius = [0, 0, 0, 0];
    for (let i = 0, len = 4; i < len; i++) {
      newRadius[i] = radius[i] > maxRadius ? maxRadius : radius[i];
    }

    path = `M${x},${y + ySign * newRadius[0]}`;

    if (newRadius[0] > 0) {
      path += `A ${newRadius[0]},${newRadius[0]},0,0,${clockWise},${x + xSign * newRadius[0]},${y}`;
    }

    path += `L ${x + width - xSign * newRadius[1]},${y}`;

    if (newRadius[1] > 0) {
      path += `A ${newRadius[1]},${newRadius[1]},0,0,${clockWise},
        ${x + width},${y + ySign * newRadius[1]}`;
    }
    path += `L ${x + width},${y + height - ySign * newRadius[2]}`;

    if (newRadius[2] > 0) {
      path += `A ${newRadius[2]},${newRadius[2]},0,0,${clockWise},
        ${x + width - xSign * newRadius[2]},${y + height}`;
    }
    path += `L ${x + xSign * newRadius[3]},${y + height}`;

    if (newRadius[3] > 0) {
      path += `A ${newRadius[3]},${newRadius[3]},0,0,${clockWise},
        ${x},${y + height - ySign * newRadius[3]}`;
    }
    path += 'Z';
  } else if (maxRadius > 0 && radius === +radius && radius > 0) {
    const newRadius = Math.min(maxRadius, radius);

    path = `M ${x},${y + ySign * newRadius}
            A ${newRadius},${newRadius},0,0,${clockWise},${x + xSign * newRadius},${y}
            L ${x + width - xSign * newRadius},${y}
            A ${newRadius},${newRadius},0,0,${clockWise},${x + width},${y + ySign * newRadius}
            L ${x + width},${y + height - ySign * newRadius}
            A ${newRadius},${newRadius},0,0,${clockWise},${x + width - xSign * newRadius},${y + height}
            L ${x + xSign * newRadius},${y + height}
            A ${newRadius},${newRadius},0,0,${clockWise},${x},${y + height - ySign * newRadius} Z`;
  } else {
    path = `M ${x},${y} h ${width} v ${height} h ${-width} Z`;
  }

  return path;
};
interface RectangleProps {
  className?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  radius?: number | RectRadius;
  isAnimationActive?: boolean;
  isUpdateAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: EasingInput;
}

export type Props = Omit<SVGProps<SVGPathElement>, 'radius'> & RectangleProps;

const defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: false,
  isUpdateAnimationActive: false,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',
} as const satisfies Partial<Props>;

export const Rectangle: React.FC<Props> = rectangleProps => {
  const props = resolveDefaultProps(rectangleProps, defaultProps);
  const pathRef = useRef<SVGPathElement>(null);
  const [totalLength, setTotalLength] = useState(-1);

  useEffect(() => {
    if (pathRef.current && pathRef.current.getTotalLength) {
      try {
        const pathTotalLength = pathRef.current.getTotalLength();

        if (pathTotalLength) {
          setTotalLength(pathTotalLength);
        }
      } catch {
        // calculate total length error
      }
    }
  }, []);

  const { x, y, width, height, radius, className } = props;
  const { animationEasing, animationDuration, animationBegin, isAnimationActive, isUpdateAnimationActive } = props;

  const prevWidthRef = useRef<number>(width);
  const prevHeightRef = useRef<number>(height);
  const prevXRef = useRef<number>(x);
  const prevYRef = useRef<number>(y);
  const animationIdInput = useMemo(() => ({ x, y, width, height, radius }), [x, y, width, height, radius]);
  const animationId = useAnimationId(animationIdInput, 'rectangle-');

  if (x !== +x || y !== +y || width !== +width || height !== +height || width === 0 || height === 0) {
    return null;
  }

  const layerClass = clsx('recharts-rectangle', className);
  if (!isUpdateAnimationActive) {
    const { radius: _, ...otherPathProps } = svgPropertiesAndEvents(props);
    return (
      <path
        {...otherPathProps}
        radius={typeof radius === 'number' ? radius : undefined}
        className={layerClass}
        d={getRectanglePath(x, y, width, height, radius)}
      />
    );
  }

  const prevWidth = prevWidthRef.current;
  const prevHeight = prevHeightRef.current;
  const prevX = prevXRef.current;
  const prevY = prevYRef.current;

  const from = `0px ${totalLength === -1 ? 1 : totalLength}px`;
  const to = `${totalLength}px 0px`;
  const transition = getTransitionVal(
    ['strokeDasharray'],
    animationDuration,
    typeof animationEasing === 'string' ? animationEasing : undefined,
  );

  return (
    <JavascriptAnimate
      animationId={animationId}
      key={animationId}
      canBegin={totalLength > 0}
      duration={animationDuration}
      easing={animationEasing}
      isActive={isUpdateAnimationActive}
      begin={animationBegin}
    >
      {(t: number) => {
        const currWidth = interpolate(prevWidth, width, t);
        const currHeight = interpolate(prevHeight, height, t);
        const currX = interpolate(prevX, x, t);
        const currY = interpolate(prevY, y, t);
        if (pathRef.current) {
          prevWidthRef.current = currWidth;
          prevHeightRef.current = currHeight;
          prevXRef.current = currX;
          prevYRef.current = currY;
        }
        let animationStyle: { transition: string; strokeDasharray: string } | { strokeDasharray: string };
        if (!isAnimationActive) {
          animationStyle = { strokeDasharray: to };
        } else if (t > 0) {
          animationStyle = { transition, strokeDasharray: to };
        } else {
          animationStyle = { strokeDasharray: from };
        }

        const { radius: _, ...otherPathProps } = svgPropertiesAndEvents(props);

        return (
          <path
            {...otherPathProps}
            radius={typeof radius === 'number' ? radius : undefined}
            className={layerClass}
            d={getRectanglePath(currX, currY, currWidth, currHeight, radius)}
            ref={pathRef}
            style={{
              ...animationStyle,
              ...props.style,
            }}
          />
        );
      }}
    </JavascriptAnimate>
  );
};
