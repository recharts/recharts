import React, { useState } from 'react';

/*
 * Values that are expanded by default:
 * - primitives
 * - objects with 0 or 1 or 2 keys
 * - arrays with 0 or 1 elements
 */
function shouldExpandByDefault(value: unknown) {
  if (Array.isArray(value)) {
    return value.length <= 1;
  }
  if (value != null && typeof value === 'object') {
    return Object.keys(value).length <= 2;
  }
  return true;
}

export function ValueInspector({ value }: { value: unknown }) {
  const [expand, setExpand] = useState(shouldExpandByDefault(value));
  function copyToClipboard() {
    navigator.clipboard.writeText(JSON.stringify(value, null, 2));
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
      {expand ? (
        <pre>
          <code>{JSON.stringify(value, null, 2)}</code>
        </pre>
      ) : (
        <code>{typeof value}</code>
      )}
    </>
  );
}

export function ObjectInspector({ obj }: { obj: Record<string, any> | undefined }) {
  if (obj == null) {
    return <code>{JSON.stringify(obj)}</code>;
  }
  const keys = Object.keys(obj);

  return (
    <div>
      {keys.map(key => (
        <div key={key}>
          <strong>{key}</strong>: <ValueInspector value={obj[key]} />
        </div>
      ))}
    </div>
  );
}
