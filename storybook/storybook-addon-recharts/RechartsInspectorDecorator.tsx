import React, { createContext, useCallback } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { useGlobals } from 'storybook/preview-api';
import { noop } from 'es-toolkit';
import { PARAM_MANUAL_ANIMATIONS_KEY, PARAM_POSITION_KEY, Position } from './constants';
import { HookInspectorLayout } from './HookInspectorWrapper';
import { RechartsContextProperties } from './RechartsStoryContext';
import { CompositeAnimationManager } from '../../test/animation/CompositeAnimationManager';
import { AnimationManagerContext } from '../../src/animation/useAnimationManager';
import { createDefaultAnimationManager } from '../../src/animation/createDefaultAnimationManager';

const animationManager = new CompositeAnimationManager();

type RechartsInspectorState = {
  enabled: boolean;
  position: Position;
  setPosition: (newPosition: Position) => void;
  manualAnimationsEnabled: boolean;
  setManualAnimationsEnabled: (isEnabled: boolean) => void;
};

const RechartsInspectorContext = createContext<RechartsInspectorState>({
  enabled: false,
  position: 'hidden',
  setPosition: noop,
  manualAnimationsEnabled: false,
  setManualAnimationsEnabled: noop,
});

export const AnimationManagerControlsContext = createContext(animationManager);

export const useRechartsInspectorState = () => {
  return React.useContext(RechartsInspectorContext);
};

export const RechartsInspectorDecorator = (Story: StoryFn) => {
  const [globals, setGlobals] = useGlobals();
  const position = globals[PARAM_POSITION_KEY];
  const manualAnimationsEnabled = globals[PARAM_MANUAL_ANIMATIONS_KEY];

  const setManualAnimationsEnabled = useCallback(
    (isEnabled: boolean) => {
      if (isEnabled === manualAnimationsEnabled) {
        return;
      }
      setGlobals({
        [PARAM_MANUAL_ANIMATIONS_KEY]: isEnabled,
      });
    },
    [manualAnimationsEnabled, setGlobals],
  );

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
    <AnimationManagerControlsContext.Provider value={animationManager}>
      <AnimationManagerContext.Provider
        value={manualAnimationsEnabled ? animationManager.factory : createDefaultAnimationManager}
      >
        <RechartsInspectorContext.Provider
          value={{
            enabled: position !== 'hidden' && position != null,
            position,
            setPosition,
            manualAnimationsEnabled,
            setManualAnimationsEnabled,
          }}
        >
          <HookInspectorLayout position={position}>
            <Story {...context} />
          </HookInspectorLayout>
        </RechartsInspectorContext.Provider>
      </AnimationManagerContext.Provider>
    </AnimationManagerControlsContext.Provider>
  );
};
