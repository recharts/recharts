import React, { useState } from 'react';
import { PrimitiveInspector, serializePrimitive } from './PrimitiveInspector';

function ArrayOfObjectsInspector({ arr, expand }: { arr: ReadonlyArray<unknown>; expand: boolean }) {
  if (!expand) {
    return <code>Array({arr.length})</code>;
  }
  return (
    <pre>
      <code>[{arr.map(serializePrimitive).join(',\n')}]</code>
    </pre>
  );
}

export function ArrayInspector({
  arr,
  expandByDefault,
}: {
  arr: ReadonlyArray<unknown> | undefined;
  expandByDefault?: boolean;
}) {
  if (arr == null) {
    return <PrimitiveInspector value={arr} />;
  }
  const length = arr.length ?? 0;
  const typeofArr = typeof arr[0];
  const shouldExpandByDefault = expandByDefault || length <= 1 || (typeofArr !== 'object' && typeofArr !== 'function');
  const [expand, setExpand] = useState(shouldExpandByDefault);
  function copyToClipboard() {
    navigator.clipboard.writeText(JSON.stringify(arr, null, 2));
  }
  return (
    <>
      {expand ? (
        <button type="button" onClick={() => setExpand(false)}>
          Collapse
        </button>
      ) : (
        <button type="button" onClick={() => setExpand(true)}>
          Expand
        </button>
      )}{' '}
      <button type="button" onClick={copyToClipboard}>
        Copy to clipboard
      </button>
      <ArrayOfObjectsInspector arr={arr} expand={expand} />
    </>
  );
}
