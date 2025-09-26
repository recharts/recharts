import React from 'react';
import { Args } from '@storybook/react-vite';
import { PolarGrid, Surface } from '../../../../src';

const GeneralProps: Args = {
  cx: {
    description: 'The x-coordinate of center.',
    table: { type: { summary: 'number' }, category: 'General' },
  },
  cy: {
    description: 'The y-coordinate of center.',
    table: { type: { summary: 'number' }, category: 'General' },
  },
  innerRadius: {
    description: 'The radius of the inner polar grid.',
    table: { type: { summary: 'number' }, category: 'General' },
  },
  outerRadius: {
    description: 'The radius of the outer polar grid.',
    table: { type: { summary: 'number' }, category: 'General' },
  },
  polarAngles: {
    description: "The array of every line grid's angle.",
    table: { type: { summary: 'Array' }, category: 'General' },
  },
  polarRadius: {
    description: "The array of every circle grid's radius",
    table: { type: { summary: 'Array' }, category: 'General' },
  },
  gridType: {
    description: 'The type of polar grids.',
    table: { type: { summary: "'polygon' | 'circle'", defaultValue: 'polygon' }, category: 'General' },
  },
  radialLines: {
    description: 'Whether to display radial lines.',
    table: { type: { summary: 'boolean', defaultValue: true }, category: 'General' },
  },
  fill: {
    description: 'Fill color.',
    table: { type: { summary: 'string' }, category: 'General' },
  },
  fillOpacity: {
    description: 'Fill opacity.',
    table: { type: { summary: 'number' }, category: 'General' },
  },
  stroke: {
    description: 'Stroke color.',
    table: { type: { summary: 'string' }, category: 'General' },
  },
  strokeWidth: {
    description: 'Stroke width.',
    table: { type: { summary: 'number' }, category: 'General' },
  },
};

export default {
  argTypes: {
    ...GeneralProps,
  },
  component: PolarGrid,
};

const [surfaceWidth, surfaceHeight] = [500, 500];

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <Surface
        width={surfaceWidth}
        height={surfaceHeight}
        viewBox={{
          x: 0,
          y: 0,
          width: surfaceWidth,
          height: surfaceHeight,
        }}
      >
        <PolarGrid cx={250} cy={250} innerRadius={0} outerRadius={200} {...args} />
      </Surface>
    );
  },
  args: {
    polarAngles: [0, 30, 60, 90, 145, 180, 200, 270, 300],
    polarRadius: [10, 20, 40, 80],
    stroke: '#ccc',
    strokeWidth: 1,
    fill: 'none',
    fillOpacity: 0.2,
  },
};
