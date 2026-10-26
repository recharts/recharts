import * as React from 'react';
import { isValidElement } from 'react';
import { clsx } from 'clsx';
import { Symbols } from './Symbols';
import { type Props as DotProps } from './Dot';
import { ActiveDotType, adaptEventHandlers, DotType, SymbolType } from '../util/types';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';

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
