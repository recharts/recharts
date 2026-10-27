import * as React from 'react';
import { isValidElement } from 'react';
import { clsx } from 'clsx';
import { Symbols } from './Symbols';
import { type Props as DotProps } from './Dot';
import { ActiveDotType, adaptEventHandlers, DotType, SymbolType } from '../util/types';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import type { LegendPayloadDot } from '../component/DefaultLegendContent';

type DotSymbolProps = DotProps & {
  type: SymbolType;
};

/**
 * Returns the predefined symbol that a `dot` or `activeDot` option asks for:
 * either the option itself (`dot="diamond"`), or its `symbol` field (`dot={{ symbol: 'diamond' }}`).
 *
 * @param option the `dot` or `activeDot` prop
 * @returns the symbol name, or undefined if the option renders a circle or a custom dot
 */
export function getDotSymbol(option: DotType | ActiveDotType | undefined): SymbolType | undefined {
  if (typeof option === 'string') {
    return option;
  }
  if (option != null && typeof option === 'object' && !isValidElement(option) && typeof option.symbol === 'string') {
    return option.symbol;
  }
  return undefined;
}

function getOwnColor(option: DotType, key: 'fill' | 'stroke'): string | undefined {
  if (option == null || typeof option !== 'object' || isValidElement(option)) {
    return undefined;
  }
  const value = option[key];
  return typeof value === 'string' ? value : undefined;
}

/**
 * Returns true if the `dot` option renders the default circle {@link Dot}:
 * `true`, or an object without a symbol.
 */
function rendersDefaultCircle(dot: DotType | undefined): boolean {
  if (dot === true) {
    return true;
  }
  return dot != null && typeof dot === 'object' && !isValidElement(dot) && dot.symbol == null;
}

/**
 * Describes the dots of a graphical item for its legend icon,
 * so that the icon draws the same symbol with the same colors as the dots.
 *
 * Without a theme, the default circle dots keep the default `line` legend icon, so that existing legends stay
 * unchanged. With a theme, they are described as a `circle` so that the legend icon follows their theme colors.
 * A custom dot (a function or an element) is never described, because the legend cannot know what it draws.
 *
 * @param dot the `dot` prop, after defaults
 * @param seriesDotColors the colors that the dots get from the graphical item, including the theme
 * @param isThemed true if the chart renders with a Recharts theme
 * @returns the legend dot, or undefined if the legend icon does not draw the dots
 */
export function getLegendPayloadDot(
  dot: DotType | undefined,
  seriesDotColors: { fill: string | undefined; stroke: string | undefined },
  isThemed: boolean,
): LegendPayloadDot | undefined {
  const symbol = getDotSymbol(dot) ?? (isThemed && rendersDefaultCircle(dot) ? 'circle' : undefined);
  if (symbol == null || dot == null) {
    return undefined;
  }
  return {
    symbol,
    // colors in the dot object win over the graphical item, the same as in the dots
    fill: getOwnColor(dot, 'fill') ?? seriesDotColors.fill,
    stroke: getOwnColor(dot, 'stroke') ?? seriesDotColors.stroke,
  };
}

/**
 * The default legend icon of Line and Area with a theme when they draw no dots:
 * a plain line, because there is no dot to show.
 * Without a theme, the default `line` icon stays, so that existing legends stay unchanged.
 *
 * @param dot the `dot` prop, after defaults
 * @param isThemed true if the chart renders with a Recharts theme
 * @returns `plainline` if the legend should show a plain line by default, otherwise undefined
 */
export function getNoDotsLegendType(dot: DotType | undefined, isThemed: boolean): 'plainline' | undefined {
  return isThemed && !dot ? 'plainline' : undefined;
}

/**
 * Renders a predefined symbol in place of a {@link Dot}, used when `dot` or `activeDot` asks for a symbol.
 *
 * It accepts the same props as Dot and handles them the same way, including event handlers.
 * The symbol spans the same diameter as the dot would, so `circle` looks the same as the default dot.
 */
export function DotSymbol(props: DotSymbolProps) {
  const { type, cx, cy, r, className, ...rest } = props;
  return (
    <Symbols
      {...svgPropertiesNoEvents(rest)}
      {...adaptEventHandlers(props)}
      className={clsx('recharts-dot', className)}
      type={type}
      cx={cx}
      cy={cy}
      size={2 * Number(r)}
      sizeType="diameter"
    />
  );
}
