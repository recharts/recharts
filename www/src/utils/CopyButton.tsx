import { useState, useEffect, useRef } from 'react';
import { EditorView } from '@codemirror/view';
import { SuccessIcon } from './SuccessIcon.tsx';
import { CopyIcon } from './CopyIcon.tsx';
import { sendEvent } from '../components/analytics.ts';

export function CopyButton({
  viewRef,
  devToolsMode,
}: {
  viewRef: React.RefObject<EditorView | null>;
  devToolsMode?: boolean;
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
    if (devToolsMode) {
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
      {devToolsMode ? 'Copy Data' : 'Copy Code'}
    </button>
  );
}
