/**
 * @fileOverview Rectangle
 */
import * as React from 'react';
import { SVGProps, useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { AnimationDuration, AnimationTiming } from '../util/types';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { JavascriptAnimate } from '../animation/JavascriptAnimate';
import { useAnimationId } from '../util/useAnimationId';
import { interpolate } from '../util/DataUtils';
import { getTransitionVal } from '../animation/util';
import { svgPropertiesAndEvents } from '../util/svgPropertiesAndEvents';

const getTrapezoidPath = (x: number, y: number, upperWidth: number, lowerWidth: number, height: number): string => {
  const widthGap = upperWidth - lowerWidth;
  let path;
  path = `M ${x},${y}`;
  path += `L ${x + upperWidth},${y}`;
  path += `L ${x + upperWidth - widthGap / 2},${y + height}`;
  path += `L ${x + upperWidth - widthGap / 2 - lowerWidth},${y + height}`;
  path += `L ${x},${y} Z`;
  return path;
};

interface TrapezoidProps {
  className?: string;
  x?: number;
  y?: number;
  upperWidth?: number;
  lowerWidth?: number;
  height?: number;

  isUpdateAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
}

export type Props = SVGProps<SVGPathElement> & TrapezoidProps;

const defaultProps = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: false,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',
} as const satisfies Partial<Props>;

export const Trapezoid: React.FC<Props> = outsideProps => {
  const trapezoidProps = resolveDefaultProps(outsideProps, defaultProps);

  const { x, y, upperWidth, lowerWidth, height, className } = trapezoidProps;
  const { animationEasing, animationDuration, animationBegin, isUpdateAnimationActive } = trapezoidProps;

  const pathRef = useRef<SVGPathElement | null>(null);
  const [totalLength, setTotalLength] = useState(-1);

  const prevUpperWidthRef = useRef<number>(upperWidth);
  const prevLowerWidthRef = useRef<number>(lowerWidth);
  const prevHeightRef = useRef<number>(height);
  const prevXRef = useRef<number>(x);
  const prevYRef = useRef<number>(y);
  const animationId = useAnimationId(outsideProps, 'trapezoid-');

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

  if (
    x !== +x ||
    y !== +y ||
    upperWidth !== +upperWidth ||
    lowerWidth !== +lowerWidth ||
    height !== +height ||
    (upperWidth === 0 && lowerWidth === 0) ||
    height === 0
  ) {
    return null;
  }

  const layerClass = clsx('recharts-trapezoid', className);

  if (!isUpdateAnimationActive) {
    return (
      <g>
        <path
          {...svgPropertiesAndEvents(trapezoidProps)}
          className={layerClass}
          d={getTrapezoidPath(x, y, upperWidth, lowerWidth, height)}
        />
      </g>
    );
  }

  const prevUpperWidth = prevUpperWidthRef.current;
  const prevLowerWidth = prevLowerWidthRef.current;
  const prevHeight = prevHeightRef.current;
  const prevX = prevXRef.current;
  const prevY = prevYRef.current;

  const from = `0px ${totalLength === -1 ? 1 : totalLength}px`;
  const to = `${totalLength}px 0px`;
  const transition = getTransitionVal(['strokeDasharray'], animationDuration, animationEasing);

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
        const currUpperWidth = interpolate(prevUpperWidth, upperWidth, t);
        const currLowerWidth = interpolate(prevLowerWidth, lowerWidth, t);
        const currHeight = interpolate(prevHeight, height, t);
        const currX = interpolate(prevX, x, t);
        const currY = interpolate(prevY, y, t);

        if (pathRef.current) {
          prevUpperWidthRef.current = currUpperWidth;
          prevLowerWidthRef.current = currLowerWidth;
          prevHeightRef.current = currHeight;
          prevXRef.current = currX;
          prevYRef.current = currY;
        }
        const animationStyle = t > 0 ? { transition, strokeDasharray: to } : { strokeDasharray: from };
        return (
          <path
            {...svgPropertiesAndEvents(trapezoidProps)}
            className={layerClass}
            d={getTrapezoidPath(currX, currY, currUpperWidth, currLowerWidth, currHeight)}
            ref={pathRef}
            style={{
              ...animationStyle,
              ...trapezoidProps.style,
            }}
          />
        );
      }}
    </JavascriptAnimate>
  );
};
