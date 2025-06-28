import React, { ReactNode } from 'react';
import './RechartsHookInspectorButton.css';

export const RechartsHookInspectorButton = ({
  children,
  isActive,
  onClick,
  title,
}: {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
  title: string;
}) => (
  <button
    className={`recharts-hook-inspector-button${isActive ? ' active' : ''}`}
    type="button"
    onClick={onClick}
    title={title}
  >
    {children}
  </button>
);
