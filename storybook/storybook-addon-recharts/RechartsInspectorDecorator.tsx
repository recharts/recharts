import React, { useCallback } from 'react';
import { StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { PARAM_POSITION_KEY, Position } from './constants';
import { HookInspectorLayout } from './HookInspectorWrapper';
import { RechartsContextProperties } from './RechartsStoryContext';

export const RechartsInspectorDecorator = (Story: StoryFn) => {
  const [globals, setGlobals] = useGlobals();
  const position = globals[PARAM_POSITION_KEY];

  const setPosition = useCallback(
    (newPosition: Position) => {
      if (newPosition === position) {
        return;
      }
      setGlobals({
        [PARAM_POSITION_KEY]: newPosition,
      });
    },
    [position, setGlobals],
  );

  const context: RechartsContextProperties = {
    rechartsInspectorEnabled: position !== 'hidden',
    rechartsInspectorPosition: position,
    rechartsSetInspectorPosition: setPosition,
  };

  return (
    <HookInspectorLayout position={position}>
      <Story {...context} />
    </HookInspectorLayout>
  );
};
