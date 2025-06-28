import React from 'react';
import { CloseIcon } from '@storybook/icons';
import { Position } from './constants';
import { LayoutBarIcon } from './LayoutBarIcon';

/* eslint-disable jsx-a11y/label-has-associated-control */
export function HookInspectorLayoutSwitcher({
  position,
  setPosition,
}: {
  position: Position;
  setPosition: (newPosition: Position) => void;
}) {
  return (
    <form
      style={{
        zIndex: 1100,
        padding: '6px 12px',
        borderRadius: '6px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
      }}
    >
      <label title="Move to north">
        <input
          type="radio"
          name="layout"
          value="NORTH"
          checked={position === 'NORTH'}
          onChange={() => setPosition('NORTH')}
        />
        <LayoutBarIcon direction="NORTH" />
      </label>
      <label title="Move to south">
        <input
          type="radio"
          name="layout"
          value="SOUTH"
          checked={position === 'SOUTH'}
          onChange={() => setPosition('SOUTH')}
        />
        <LayoutBarIcon direction="SOUTH" />
      </label>
      <label title="Move to west">
        <input
          type="radio"
          name="layout"
          value="WEST"
          checked={position === 'WEST'}
          onChange={() => setPosition('WEST')}
        />
        <LayoutBarIcon direction="WEST" />
      </label>
      <label title="Move to east">
        <input
          type="radio"
          name="layout"
          value="EAST"
          checked={position === 'EAST'}
          onChange={() => setPosition('EAST')}
        />
        <LayoutBarIcon direction="EAST" />
      </label>
      <label title="Hide Hook Inspector">
        <input
          type="radio"
          name="layout"
          value="hidden"
          checked={position === 'hidden'}
          onChange={() => setPosition('hidden')}
        />
        <CloseIcon />
      </label>
    </form>
  );
}
