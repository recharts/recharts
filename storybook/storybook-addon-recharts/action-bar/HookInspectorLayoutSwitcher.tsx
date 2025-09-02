import React from 'react';
import { CloseIcon, VideoIcon, LocationIcon } from '@storybook/icons';
import { Position } from '../constants';
import { LayoutBarIcon } from './LayoutBarIcon';
import { RechartsHookInspectorButton } from './RechartsHookInspectorButton';
import './actionbar.css';
import { useRechartsInspectorState } from '../RechartsInspectorDecorator';

export type LayoutSwitcherProps = {
  position: Position;
  setPosition: (newPosition: Position) => void;
};

function Separator() {
  return <span className="recharts-action-bar-separator" />;
}

export function HookInspectorLayoutSwitcher({ position, setPosition }: LayoutSwitcherProps) {
  const { manualAnimationsEnabled, setManualAnimationsEnabled, crosshairControlsEnabled, setCrosshairControlsEnabled } =
    useRechartsInspectorState();
  return (
    <>
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
      <Separator />
      <RechartsHookInspectorButton
        isActive={crosshairControlsEnabled}
        onClick={() => setCrosshairControlsEnabled(!crosshairControlsEnabled)}
        title="Toggle crosshair controls"
      >
        <LocationIcon />
      </RechartsHookInspectorButton>
      <RechartsHookInspectorButton
        isActive={manualAnimationsEnabled}
        onClick={() => setManualAnimationsEnabled(!manualAnimationsEnabled)}
        title="Toggle manual animations"
      >
        <VideoIcon />
      </RechartsHookInspectorButton>
      <Separator />
      <RechartsHookInspectorButton
        isActive={position === 'hidden'}
        onClick={() => setPosition('hidden')}
        title="Hide inspector"
      >
        <CloseIcon />
      </RechartsHookInspectorButton>
    </>
  );
}
