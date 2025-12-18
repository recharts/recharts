import { useState, useEffect, useRef } from 'react';
import { EditorView } from '@codemirror/view';
import { SuccessIcon } from './SuccessIcon.tsx';
import { CopyIcon } from './CopyIcon.tsx';
import { sendEvent } from '../components/analytics.ts';

export function CopyButton({
  viewRef,
  mode,
}: {
  viewRef: React.RefObject<EditorView | null>;
  mode?: 'source' | 'devtools';
}) {
  const [copied, setCopied] = useState(false);
  const devToolsValue = useRef<unknown>(undefined);

  useEffect(() => {
    const container = document.getElementById('recharts-devtools-portal');
    if (!container) return () => {};

    const handleDevToolsChange = (e: CustomEvent<unknown>) => {
      devToolsValue.current = e.detail;
    };

    // @ts-expect-error not sure how to type custom events
    container.addEventListener('recharts-devtools-change', handleDevToolsChange);
    return () => {
      // @ts-expect-error not sure how to type custom events
      container.removeEventListener('recharts-devtools-change', handleDevToolsChange);
    };
  }, []);

  const handleCopy = () => {
    if (mode === 'devtools') {
      if (devToolsValue.current !== undefined) {
        return navigator.clipboard.writeText(JSON.stringify(devToolsValue.current, null, 2));
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
