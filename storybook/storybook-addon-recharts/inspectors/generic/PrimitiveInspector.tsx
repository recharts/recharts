import React from 'react';

export function PrimitiveInspector({ value }: { value: unknown }) {
  const str = value === undefined ? 'undefined' : JSON.stringify(value);
  return <code>{str}</code>;
}
