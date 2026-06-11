import React from 'react';
import { Args } from '@storybook/react-vite';
import { MinimapDrag } from '../../../../src';
import { renderMinimap } from './MinimapControls.stories';

export default {
  component: MinimapDrag,
};

export const API = {
  render: (_args: Args) => renderMinimap(<MinimapDrag />),
};
