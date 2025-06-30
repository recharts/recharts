import React from 'react';
import { HookInspectorLayoutSwitcher, LayoutSwitcherProps } from './HookInspectorLayoutSwitcher';

export function RechartsStorybookAddonActionBar(props: LayoutSwitcherProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '4px', padding: '4px' }}>
      <HookInspectorLayoutSwitcher {...props} />
    </div>
  );
}
