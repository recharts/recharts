import React from 'react';
import { StoryContext } from '@storybook/react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from '../../../src';
import { pageData, babiesAndVideosCorrelation } from '../data';
import { RechartsHookInspector } from '../../storybook-addon-recharts/RechartsHookInspector';

export default {
  title: 'Examples/Zoom Pan',
  component: LineChart,
  docs: { autodocs: false },
};

export const BasicZoomPan = {
  render: (_: Record<string, any>, context: StoryContext) => (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300} data={pageData} zoom={{ mode: 'xy' }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
      </LineChart>
    </ResponsiveContainer>
  ),
};

export const XAxisZoom = {
  render: (_: Record<string, any>, context: StoryContext) => (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300} data={pageData} zoom={{ mode: 'x', maxScale: 8 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
      </LineChart>
    </ResponsiveContainer>
  ),
};

export const YAxisZoomBar = {
  render: (_: Record<string, any>, context: StoryContext) => (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={300} data={pageData} zoom={{ mode: 'y' }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amt" fill="#8884d8" />
        <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
      </BarChart>
    </ResponsiveContainer>
  ),
};

export const ScatterXYZoom = {
  render: (_: Record<string, any>, context: StoryContext) => (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart data={babiesAndVideosCorrelation} zoom={{ mode: 'xy', minScale: 1, maxScale: 10 }}>
        <CartesianGrid />
        <XAxis type="number" dataKey="year" />
        <YAxis type="number" dataKey="babies" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter dataKey="length" fill="#8884d8" />
        <RechartsHookInspector rechartsInspectorEnabled={context.rechartsInspectorEnabled} />
      </ScatterChart>
    </ResponsiveContainer>
  ),
};
