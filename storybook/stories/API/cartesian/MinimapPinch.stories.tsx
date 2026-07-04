import React from 'react';
import { Args } from '@storybook/react-vite';
import { MinimapPinch } from '../../../../src';
import { renderMinimap } from './MinimapControls.stories';

export default {
  component: MinimapPinch,
};

export const API = {
  render: (_args: Args) => renderMinimap(<MinimapPinch />),
};
