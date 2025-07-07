import React from 'react';

export function serializePrimitive(value: unknown): string {
  return value === undefined ? 'undefined' : JSON.stringify(value, null, 2);
}

export function PrimitiveInspector({ value }: { value: unknown }) {
  const str = serializePrimitive(value);
  return <code>{str}</code>;
}
