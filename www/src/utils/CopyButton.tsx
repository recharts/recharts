import { useState } from 'react';
import { EditorView } from '@codemirror/view';
import { SuccessIcon } from './SuccessIcon.tsx';
import { CopyIcon } from './CopyIcon.tsx';
import { sendEvent } from '../components/analytics.ts';

export function CopyButton({
  viewRef,
  mode,
  devToolsValueRef,
}: {
  viewRef: React.RefObject<EditorView | null>;
  mode?: 'source' | 'devtools';
  devToolsValueRef?: React.RefObject<unknown>;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (mode === 'devtools') {
      const valueToCopy = devToolsValueRef?.current;
      if (valueToCopy !== undefined) {
        return navigator.clipboard.writeText(JSON.stringify(valueToCopy, null, 2));
      }
      return Promise.resolve(); // Nothing to copy
    }

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
      {mode === 'devtools' ? 'Copy Data' : 'Copy Code'}
    </button>
  );
}
