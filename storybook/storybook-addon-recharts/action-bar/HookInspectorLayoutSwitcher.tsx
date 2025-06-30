import React from 'react';
import { CloseIcon } from '@storybook/icons';
import { Position } from '../constants';
import { LayoutBarIcon } from './LayoutBarIcon';
import { RechartsHookInspectorButton } from './RechartsHookInspectorButton';

export function HookInspectorLayoutSwitcher({
  position,
  setPosition,
}: {
  position: Position;
  setPosition: (newPosition: Position) => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '4px', padding: '4px' }}>
      <RechartsHookInspectorButton
        isActive={position === 'NORTH'}
        onClick={() => setPosition('NORTH')}
        title="Move to north"
      >
        <LayoutBarIcon direction="NORTH" />
      </RechartsHookInspectorButton>
      <RechartsHookInspectorButton
        isActive={position === 'SOUTH'}
        onClick={() => setPosition('SOUTH')}
        title="Move to south"
      >
        <LayoutBarIcon direction="SOUTH" />
      </RechartsHookInspectorButton>
      <RechartsHookInspectorButton
        isActive={position === 'WEST'}
        onClick={() => setPosition('WEST')}
        title="Move to west"
      >
        <LayoutBarIcon direction="WEST" />
      </RechartsHookInspectorButton>
      <RechartsHookInspectorButton
        isActive={position === 'EAST'}
        onClick={() => setPosition('EAST')}
        title="Move to east"
      >
        <LayoutBarIcon direction="EAST" />
      </RechartsHookInspectorButton>
      <RechartsHookInspectorButton
        isActive={position === 'hidden'}
        onClick={() => setPosition('hidden')}
        title="Hide inspector"
      >
        <CloseIcon />
      </RechartsHookInspectorButton>
    </div>
  );
}
