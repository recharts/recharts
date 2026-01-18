import { CSSProperties } from 'react';
import { LuExternalLink } from 'react-icons/lu';

const styles: CSSProperties = {
  whiteSpace: 'nowrap',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.25rem',
};

type TargetBlankLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
};

export function TargetBlankLink({ href, children, onClick }: TargetBlankLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} style={styles}>
      {children}
      <LuExternalLink />
    </a>
  );
}
