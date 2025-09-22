import React, { ReactNode } from 'react';
import targetBlankSvg from './targetBlank.svg';
import './TargetBlankLink.scss';

type TargetBlankLinkProps = {
  href: string;
  children: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
};

export function TargetBlankLink({ href, children, onClick }: TargetBlankLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className="TargetBlankLink">
      {children}
      <img height={20} style={{ verticalAlign: 'text-bottom' }} src={targetBlankSvg} alt="Link opens in new tab" />
    </a>
  );
}
