import * as React from 'react';
import { clsx } from 'clsx';
import { Symbols } from './Symbols';
import { type Props as DotProps } from './Dot';
import { adaptEventHandlers, SymbolType } from '../util/types';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';

type DotSymbolProps = DotProps & {
  type: SymbolType;
};

/**
 * Renders a predefined symbol in place of a {@link Dot}, used when `dot` or `activeDot` is a symbol name.
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
