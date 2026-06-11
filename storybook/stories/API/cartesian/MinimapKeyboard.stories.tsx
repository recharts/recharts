import React from 'react';
import { Args } from '@storybook/react-vite';
import { MinimapKeyboard } from '../../../../src';
import { renderMinimap } from './MinimapControls.stories';

export default {
  component: MinimapKeyboard,
};

export const API = {
  render: (_args: Args) => renderMinimap(<MinimapKeyboard />),
};
