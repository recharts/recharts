import React from 'react';
import { fireEvent, within, expect } from 'storybook/test';
import { Args } from '@storybook/react-vite';
import { pageData } from '../../data';
import {
  Brush,
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  Scatter,
  ScatterChart,
  Tooltip,
  ZoomAndPan,
} from '../../../../src';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { BrushArgs } from '../arg-types/BrushArgs';

export default {
  component: Brush,
  argTypes: BrushArgs,
};

export const API = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Line dataKey="uv" />
        <Brush {...args} />
      </ComposedChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(BrushArgs),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const slider = await canvas.findAllByRole('slider');
    const leftSlider = slider[0];
    expect(leftSlider).toBeTruthy();

    fireEvent.mouseDown(leftSlider);
    fireEvent.mouseMove(leftSlider, { clientX: 200 });
    fireEvent.mouseUp(leftSlider);
  },
};

export const PanoramaWithLine = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Line dataKey="uv" />
        <Tooltip />
        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Line dataKey="uv" />
          </ComposedChart>
        </Brush>
      </ComposedChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(BrushArgs),
};

export const PanoramaWithArea = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Area dataKey="uv" />

        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Area dataKey="uv" />
          </ComposedChart>
        </Brush>
      </ComposedChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(BrushArgs),
};

export const PanoramaWithBar = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <Bar dataKey="uv" />

        <Brush {...args}>
          <ComposedChart data={pageData}>
            <Bar dataKey="uv" />
          </ComposedChart>
        </Brush>
      </ComposedChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(BrushArgs),
};

export const PanoramaWithScatter = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart data={pageData}>
        <Scatter dataKey="uv" />

        <Brush {...args}>
          <ScatterChart data={pageData}>
            <Scatter dataKey="uv" />
          </ScatterChart>
        </Brush>
      </ScatterChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(BrushArgs),
};

export const ZoomMode = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="uv" />
        <Tooltip />
        <ZoomAndPan axis="x" scrollbars={false} />
        <Brush {...args} mode="zoom" autoScaleYDomain>
          <ComposedChart data={pageData}>
            <Line dataKey="uv" />
          </ComposedChart>
        </Brush>
      </ComposedChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(BrushArgs),
};

export const VerticalZoomMode = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="uv" />
        <Tooltip />
        <ZoomAndPan axis="y" scrollbars={false} initialZoom={{ y: { start: 0.2, end: 0.7 } }} />
        <Brush {...args} layout="vertical" mode="zoom" axis="y" stroke="#0f766e">
          <ComposedChart data={pageData}>
            <Line dataKey="uv" />
          </ComposedChart>
        </Brush>
      </ComposedChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(BrushArgs),
};

export const MultiBrushZoomMode = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={pageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="uv" />
        <Line dataKey="pv" />
        <Tooltip />
        <ZoomAndPan
          axis="xy"
          scrollbars={false}
          initialZoom={{ x: { start: 0.15, end: 0.55 }, y: { start: 0.2, end: 0.8 } }}
        />
        <Brush {...args} mode="zoom" axis="x" autoScaleYDomain={false} stroke="#1d4ed8">
          <ComposedChart data={pageData}>
            <Line dataKey="uv" />
          </ComposedChart>
        </Brush>
        <Brush layout="vertical" mode="zoom" axis="y" stroke="#0f766e">
          <ComposedChart data={pageData}>
            <Line dataKey="uv" />
          </ComposedChart>
        </Brush>
      </ComposedChart>
    </ResponsiveContainer>
  ),
  args: getStoryArgsFromArgsTypesObject(BrushArgs),
};
