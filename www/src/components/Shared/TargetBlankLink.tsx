import React, { ReactNode } from 'react';
import targetBlankSvg from './targetBlank.svg';

type TargetBlankLinkProps = {
  href: string;
  children: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
};

export function TargetBlankLink({ href, children, onClick }: TargetBlankLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      {children}
      <img height={20} style={{ verticalAlign: 'text-bottom' }} src={targetBlankSvg} alt="Link opens in new tab" />
    </a>
  );
}
