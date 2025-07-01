import React, { ReactNode } from 'react';

type TargetBlankLinkProps = {
  href: string;
  children: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
};

export function TargetBlankLink({ href, children, onClick }: TargetBlankLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      {children}
    </a>
  );
}
