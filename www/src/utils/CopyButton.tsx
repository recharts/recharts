import { useState } from 'react';
import { EditorView } from '@codemirror/view';
import { SuccessIcon } from './SuccessIcon.tsx';
import { CopyIcon } from './CopyIcon.tsx';
import { sendEvent } from '../components/analytics.ts';

export function CopyButton({ viewRef }: { viewRef: React.RefObject<EditorView | null> }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (viewRef?.current) {
      const content = viewRef.current.state.doc.toString();
      return navigator.clipboard.writeText(content);
    }
    return Promise.reject();
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
      Copy
    </button>
  );
}
