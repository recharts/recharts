import { useState } from 'react';
import { SuccessIcon } from './SuccessIcon.tsx';
import { CopyIcon } from './CopyIcon.tsx';
import { sendEvent } from '../components/analytics.ts';

export function CopyButton({ getValueToCopy }: { getValueToCopy: () => unknown }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const valueToCopy = getValueToCopy();
    if (valueToCopy !== undefined) {
      return navigator.clipboard.writeText(JSON.stringify(valueToCopy, null, 2));
    }
    return Promise.resolve(); // Nothing to copy
  };

  const onClick = () => {
    sendEvent({
      category: 'Code',
      action: 'Copy Code clicked',
    });
    handleCopy()
      .then(() => {
        sendEvent({
          category: 'Code',
          action: 'Copy Code succeeded',
        });
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        sendEvent({
          category: 'Code',
          action: 'Copy Code failed',
        });
      });
  };
  return (
    <button onClick={onClick} className="codemirror-toolbar-item" type="button">
      {copied ? <SuccessIcon /> : <CopyIcon />}
      Copy to clipboard
    </button>
  );
}
