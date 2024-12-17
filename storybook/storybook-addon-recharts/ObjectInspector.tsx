import React, { useState } from 'react';

function ValueInspector({ value }: { value: unknown }) {
  const [expand, setExpand] = useState(false);
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

export function ObjectInspector({ obj }: { obj: Record<string, any> }) {
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
