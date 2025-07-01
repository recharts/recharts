import React, { CSSProperties, ReactNode } from 'react';
import { Position } from './constants';

const sharedStyles: CSSProperties = {
  zIndex: 1000,
  padding: '10px',
  display: 'flex',
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
};

function getStyles(position: Position): CSSProperties {
  switch (position) {
    case 'WEST':
      return { flexDirection: 'row', alignItems: 'center' };
    case 'EAST':
      return { flexDirection: 'row-reverse', alignItems: 'center' };
    case 'NORTH':
      return { flexDirection: 'column', alignItems: 'flex-start' };
    case 'SOUTH':
      return { flexDirection: 'column-reverse', alignItems: 'flex-end' };
    default:
      return {};
  }
}

export function HookInspectorLayout({ children, position }: { children: ReactNode; position: Position }) {
  return (
    <div className="recharts-storybook-addon-recharts" style={{ ...sharedStyles, ...getStyles(position) }}>
      <div id="recharts-hook-inspector-portal" style={{ flexGrow: 1, flexShrink: 4, alignSelf: 'stretch' }} />
      {children}
    </div>
  );
}
