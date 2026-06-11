import React from 'react';
import { Args } from '@storybook/react-vite';
import { BrushPinchZoom } from '../../../../src';
import { renderBrush } from './BrushZoomControls.stories';

export default {
  component: BrushPinchZoom,
};

export const API = {
  render: (_args: Args) => renderBrush(<BrushPinchZoom />),
};
