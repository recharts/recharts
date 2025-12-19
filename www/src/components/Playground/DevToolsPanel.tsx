import { useEffect, useRef } from 'react';
import { RechartsDevtoolsPortal } from '@recharts/devtools';

/**
 * Props for the DevToolsPanel component.
 */
type DevToolsPanelProps = {
  /**
   * Additional CSS class name.
   */
  className?: string;
  /**
   * Callback to capture the current DevTools value (useful for copying functionality).
   */
  onValueChange?: (value: unknown) => void;
};

/**
 * A panel that renders the Recharts DevTools portal and captures its value.
 */
export function DevToolsPanel({ className = '', onValueChange }: DevToolsPanelProps) {
  // Create a ref to store the devtools value so that it persists across re-renders
  const devToolsValue = useRef<unknown>(undefined);

  useEffect(() => {
    const container = document.getElementById('recharts-devtools-portal');
    if (!container) return () => {};

    const handleDevToolsChange = (e: CustomEvent<unknown>) => {
      devToolsValue.current = e.detail;
      if (onValueChange) {
        onValueChange(e.detail);
      }
    };

    // @ts-expect-error not sure how to type custom events
    container.addEventListener('recharts-devtools-change', handleDevToolsChange);
    return () => {
      // @ts-expect-error not sure how to type custom events
      container.removeEventListener('recharts-devtools-change', handleDevToolsChange);
    };
  }, [onValueChange]);

  return (
    <RechartsDevtoolsPortal
      style={{
        height: '100%',
        background: 'var(--color-bg)',
        color: 'var(--color-text)',
        overflow: 'auto',
        padding: '10px',
        display: 'block',
      }}
      className={className}
    />
  );
}
