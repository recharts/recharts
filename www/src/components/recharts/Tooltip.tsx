import * as C from 'recharts';
import * as React from 'react';

function determineCursorProp(cursor: boolean | React.ReactElement | React.SVGProps<SVGElement> | undefined) {
  if (typeof cursor === 'boolean') {
    return cursor;
  }
  if (React.isValidElement(cursor)) {
    return cursor;
  }
  return {
    stroke: 'var(--color-border-2)',
    ...cursor,
  };
}

export function Tooltip<TValue extends number | string | ReadonlyArray<number | string>, TName extends number | string>(
  props: C.TooltipProps<TValue, TName>,
) {
  return (
    <C.Tooltip
      {...props}
      contentStyle={{
        backgroundColor: 'var(--color-surface-raised)',
        borderColor: 'var(--color-border-2)',
        ...props.contentStyle,
      }}
      cursor={determineCursorProp(props.cursor)}
    />
  );
}
