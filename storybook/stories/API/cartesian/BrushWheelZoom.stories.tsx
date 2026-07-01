import React from 'react';
import { Args } from '@storybook/react-vite';
import { BrushWheelZoom } from '../../../../src';
import { renderBrush } from './BrushZoomControls.stories';

export default {
  component: BrushWheelZoom,
};

export const API = {
  render: (_args: Args) => renderBrush(<BrushWheelZoom />),
};
