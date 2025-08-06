import React, { createContext, useCallback } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { useGlobals } from 'storybook/preview-api';
import { noop } from 'es-toolkit';
import { PARAM_POSITION_KEY, Position } from './constants';
import { HookInspectorLayout } from './HookInspectorWrapper';
import { RechartsContextProperties } from './RechartsStoryContext';
import { CompositeAnimationManager } from '../../test/animation/CompositeAnimationManager';
import { AnimationManagerContext } from '../../src/animation/useAnimationManager';

const animationManager = new CompositeAnimationManager();

type RechartsInspectorState = {
  enabled: boolean;
  position: Position;
  setPosition: (newPosition: Position) => void;
};

const RechartsInspectorContext = createContext<RechartsInspectorState>({
  enabled: false,
  position: 'hidden',
  setPosition: noop,
});

export const useRechartsInspectorState = () => {
  return React.useContext(RechartsInspectorContext);
};

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
    rechartsInspectorEnabled: position !== 'hidden' && position != null,
    rechartsInspectorPosition: position,
    rechartsSetInspectorPosition: setPosition,
  };

  return (
    <RechartsInspectorContext.Provider
      value={{ enabled: position !== 'hidden' && position != null, position, setPosition }}
    >
      <AnimationManagerContext.Provider value={animationManager.factory}>
        <HookInspectorLayout position={position}>
          <Story {...context} />
        </HookInspectorLayout>
      </AnimationManagerContext.Provider>
    </RechartsInspectorContext.Provider>
  );
};
