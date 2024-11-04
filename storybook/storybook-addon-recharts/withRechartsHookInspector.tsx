import React from 'react';
import { StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { PARAM_ENABLED_KEY } from './constants';

export const withRechartsHookInspector = (Story: StoryFn) => {
  const [globals] = useGlobals();
  const isEnabled = globals[PARAM_ENABLED_KEY];
  return <Story rechartsInspectorEnabled={isEnabled} />;
};
