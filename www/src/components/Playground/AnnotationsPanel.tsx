import { RechartsDevtoolsPortal } from '@recharts/devtools';

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
