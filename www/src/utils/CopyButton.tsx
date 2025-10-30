import { useState } from 'react';
import { SuccessIcon } from './SuccessIcon.tsx';
import { CopyIcon } from './CopyIcon.tsx';
import { sendEvent } from '../components/analytics.ts';

export function CopyButton({ handleCopy }: { handleCopy: () => Promise<void> }) {
  const [copied, setCopied] = useState(false);
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
    <button
      onClick={onClick}
      style={{
        padding: '4px 8px',
        cursor: 'pointer',
        display: 'flex',
        gap: '1ex',
      }}
      type="button"
    >
      {copied ? <SuccessIcon /> : <CopyIcon />}
      Copy
    </button>
  );
}
