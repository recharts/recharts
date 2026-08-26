import React from 'react';
import { Args } from '@storybook/react-vite';
import { MinimapWheel } from '../../../../src';
import { renderMinimap } from './MinimapControls.stories';

export default {
  component: MinimapWheel,
};

export const API = {
  render: (_args: Args) => renderMinimap(<MinimapWheel />),
};
