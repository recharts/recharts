import * as React from 'react';
import { cloneElement, isValidElement } from 'react';
import { clsx } from 'clsx';
import { Dot, type Props as DotProps } from '../shape/Dot';
import { DotSymbol, getDotSymbol } from '../shape/DotSymbol';
import { Layer } from '../container/Layer';
import { DataKey, DotItemDotProps, DotType } from '../util/types';
import { isClipDot } from '../util/ReactUtils';
import { svgPropertiesAndEventsFromUnknown } from '../util/svgPropertiesAndEvents';
import { ZIndexable, ZIndexLayer } from '../zIndex/ZIndexLayer';
import { DefaultZIndexes } from '../zIndex/DefaultZIndexes';
import { getEntryStyleOverrides, getEntrySvgProps, UnthemedColors } from '../theme/dataEntryStyles';

export interface DotPoint {
  readonly x: number | null;
  readonly y: number | null;
  readonly value?: any;
  readonly payload?: any;
}

type DotItemProps = {
  option: DotType;
  dotProps: DotItemDotProps;
  className: string;
};

function DotItem({ option, dotProps, className }: DotItemProps) {
  if (isValidElement(option)) {
    // @ts-expect-error we can't type check element cloning properly
    return cloneElement(option, dotProps);
  }

  if (typeof option === 'function') {
    return option(dotProps);
  }

  const { points, ...props } = dotProps ?? {};
  const finalClassName = clsx(className, typeof option === 'object' ? option.className : undefined);
  const symbol = getDotSymbol(option);

  if (symbol != null) {
    return <DotSymbol {...props} type={symbol} className={finalClassName} />;
  }

  return <Dot {...props} className={finalClassName} />;
}

function shouldRenderDots(points: ReadonlyArray<DotPoint> | undefined, dot: DotType): boolean {
  if (points == null) {
    return false;
  }
  if (dot) {
    return true;
  }
  return points.length === 1;
}

export type DotsDotProps = Omit<DotProps, 'cx' | 'cy' | 'key' | 'index' | 'dataKey' | 'value' | 'payload'>;

interface DotsProps extends ZIndexable {
  /**
   * Points to render dots for
   */
  points: ReadonlyArray<DotPoint>;
  /**
   * Dot configuration - boolean, ReactElement, function, props object, or a symbol name
   */
  dot: DotType;
  /**
   * Base class name for the dots layer (e.g., 'recharts-area-dots')
   */
  className: string;
  /**
   * Base class name for individual dot (e.g., 'recharts-area-dot')
   */
  dotClassName: string;
  /**
   * DataKey for the data
   */
  dataKey: DataKey<any> | undefined;
  /**
   * Base props to spread onto each dot (from parent component).
   * Except some properties that the Dots component manages itself.
   */
  baseProps: DotsDotProps;
  unthemedColors?: UnthemedColors;
  /**
   * Whether clipping is needed (cartesian only)
   */
  needClip?: boolean;
  /**
   * Clip path ID (cartesian only)
   */
  clipPathId?: string;
}

export function Dots({
  points,
  dot,
  className,
  dotClassName,
  dataKey,
  baseProps,
  unthemedColors,
  needClip,
  clipPathId,
  zIndex = DefaultZIndexes.scatter,
}: DotsProps) {
  if (!shouldRenderDots(points, dot)) {
    return null;
  }

  const clipDot = isClipDot(dot);
  const customDotProps = svgPropertiesAndEventsFromUnknown(dot);

  const dots = points.map((entry, i) => {
    const entrySvgProps = getEntrySvgProps(entry.payload);
    const dotProps: DotItemDotProps = {
      r: 3,
      ...baseProps,
      ...getEntryStyleOverrides(entry.payload, unthemedColors),
      // Dots are separate visual primitives; do not inherit the parent series opacity.
      fillOpacity: 1,
      ...customDotProps,
      // SVG properties from the data entry win over the graphical item props and the `dot` option.
      ...entrySvgProps,
      index: i,
      cx: entry.x ?? undefined,
      cy: entry.y ?? undefined,
      dataKey,
      value: entry.value,
      payload: entry.payload,
      points,
    };

    const entryClassName = typeof entrySvgProps.className === 'string' ? entrySvgProps.className : undefined;

    return <DotItem key={`dot-${i}`} option={dot} dotProps={dotProps} className={clsx(dotClassName, entryClassName)} />;
  });

  const layerProps: { clipPath?: string } = {};
  if (needClip && clipPathId != null) {
    layerProps.clipPath = `url(#clipPath-${clipDot ? '' : 'dots-'}${clipPathId})`;
  }

  return (
    <ZIndexLayer zIndex={zIndex}>
      <Layer className={className} {...layerProps}>
        {dots}
      </Layer>
    </ZIndexLayer>
  );
}
