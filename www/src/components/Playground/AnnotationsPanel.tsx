import { RechartsAnnotationsPortal } from '@recharts/devtools';
import './AnnotationsPanel.css';

/**
 * Props for the AnnotationsPanel component.
 */
type AnnotationsPanelProps = {
  /**
   * Additional CSS class name.
   */
  className?: string;
};

/**
 * A panel that renders the Recharts Annotations portal.
 * This is the container where the AnnotationsController UI will be rendered.
 */
export function AnnotationsPanel({ className = '' }: AnnotationsPanelProps) {
  return (
    <RechartsAnnotationsPortal
      style={{
        height: '100%',
        background: 'var(--color-surface-base)',
        color: 'var(--color-text-1)',
        overflow: 'auto',
        padding: '10px',
        display: 'block',
      }}
      className={className}
    />
  );
}
