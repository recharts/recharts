import React from 'react';
import { LuExternalLink } from 'react-icons/lu';

import styles from './TargetBlankLink.module.css';

type TargetBlankLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
};

export function TargetBlankLink({ href, children, onClick }: TargetBlankLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={styles.anchor}>
      {children}
      <LuExternalLink />
    </a>
  );
}
